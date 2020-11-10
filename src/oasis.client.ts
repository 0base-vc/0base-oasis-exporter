import {AccountServiceClient} from "./rpc/account_grpc_pb";
import {GetByAddressRequest as AccountGetByAddressRequest} from "./rpc/account_pb";
import {Delegation, GetByAddressRequest as DelegationGetByAddressRequest} from "./rpc/delegation_pb";
import {
    DebondingDelegationInnerEntry,
    GetByAddressRequest as DebondingGetByAddressRequest
} from "./rpc/debonding_delegation_pb";
import {credentials} from "grpc";
import {StateServiceClient} from "./rpc/state_grpc_pb";
import {ChainServiceClient} from "./rpc/chain_grpc_pb";
import {GetHeadRequest} from "./rpc/chain_pb";
import {GetByHeightRequest} from "./rpc/state_pb";
import {ValidatorServiceClient} from "./rpc/validator_grpc_pb";
import {GetByHeightRequest as ValidatorGetByHeightRequest} from "./rpc/validator_pb";
import * as _ from 'lodash';
import {DelegationServiceClient} from "./rpc/delegation_grpc_pb";
import {DebondingDelegationServiceClient} from "./rpc/debonding_delegation_grpc_pb";
import {DebondingDelegation} from "./rpc/debonding_delegation_pb";

export default class OasisClient {
    private readonly cache = {};
    private readonly accountClient: AccountServiceClient;
    private readonly delegationClient: DelegationServiceClient;
    private readonly debondingDelegationClient: DebondingDelegationServiceClient;
    private readonly stateClint: StateServiceClient;
    private readonly chainClient: ChainServiceClient;
    private readonly validatorClient: ValidatorServiceClient;

    constructor(private readonly server: string) {
        const cred = credentials.createInsecure();

        this.accountClient = new AccountServiceClient(this.server, cred);
        this.delegationClient = new DelegationServiceClient(this.server, cred);
        this.debondingDelegationClient = new DebondingDelegationServiceClient(this.server, cred);
        this.stateClint = new StateServiceClient(this.server, cred);
        this.chainClient = new ChainServiceClient(this.server, cred);
        this.validatorClient = new ValidatorServiceClient(this.server, cred);
    }

    private toBigint(buf: Uint8Array): BigInt {
        const hex: string[] = [];
        const u8 = Uint8Array.from(buf);

        u8.forEach(function (i) {
            let h = i.toString(16);
            if (h.length % 2) {
                h = '0' + h;
            }
            hex.push(h);
        });

        const h = hex.join('');

        if (h === '')
            return BigInt(0);
        else
            return BigInt('0x' + h);

    }

    public async getBalance(address: string): Promise<number> {
        const key = 'getBalance;'
        const request = new AccountGetByAddressRequest();
        request.setAddress(address);

        return await new Promise((resolve) => {
            return this.accountClient.getByAddress(request, (error, response) => {
                if (error) {
                    console.error(error.message);
                    const result = this.cache[key];
                    return resolve(result === undefined ? '' : result);
                } else {
                    const result = Number(this.toBigint(response.getAccount().getGeneral().getBalance_asU8()).valueOf());
                    this.cache[key] = result;
                    return resolve(result);
                }
            });
        });
    }

    private async getSharesRatio(address: string): Promise<number> {
        const key = 'getSharesRatio;'
        const addressRequest = new AccountGetByAddressRequest();
        addressRequest.setAddress(address);

        const request = new DelegationGetByAddressRequest();
        request.setAddress(address);

        return await new Promise((resolve) => {
            const result = this.cache[key];
            if (result !== undefined) {
                if (Math.round(Math.random() * 100) < 5) this.cache[key] = undefined;
                return resolve(result);
            }

            return this.accountClient.getByAddress(addressRequest, (error, response) => {
                if (error) {
                    console.error(error.message);
                    return resolve(result === undefined ? 1 : result);
                } else {
                    const shares = Number(this.toBigint(response.getAccount().getEscrow().getActive().getTotalshares_asU8()).valueOf());
                    const balance = Number(this.toBigint(response.getAccount().getEscrow().getActive().getBalance_asU8()).valueOf());
                    const result = balance / shares;

                    this.cache[key] = result;
                    return resolve(result);
                }
            });
        });
    }

    public async getEscrowActiveBalance(address: string): Promise<number> {
        const key = 'getEscrowActiveBalance;'
        const addressRequest = new AccountGetByAddressRequest();
        addressRequest.setAddress(address);

        const request = new DelegationGetByAddressRequest();
        request.setAddress(address);

        return await new Promise((resolve) => {
            return this.getSharesRatio(address).then((ratio: number) => {
                return this.delegationClient.getByAddress(request, (error, response) => {
                    if (error) {
                        console.error(error.message);
                        const result = this.cache[key];
                        return resolve(result === undefined ? '' : result);
                    } else {
                        let result: number = 0;
                        response.getDelegationsMap().forEach((v: Delegation) => {
                            result = result + Number(this.toBigint(v.getShares_asU8()).valueOf());
                        });

                        result = result * ratio;
                        this.cache[key] = result;
                        return resolve(result);
                    }
                });
            });
        });
    }

    public async getEscrowDebondingBalance(address: string): Promise<number> {
        const key = 'getEscrowDebondingBalance;'
        const request = new DebondingGetByAddressRequest();
        request.setAddress(address);

        return await new Promise((resolve) => {
            return this.getSharesRatio(address).then((ratio: number) => {
                return this.debondingDelegationClient.getByAddress(request, (error, response) => {
                    if (error) {
                        console.error(error.message);
                        const result = this.cache[key];
                        return resolve(result === undefined ? '' : result);
                    } else {
                        let result = 0;
                        response.getDebondingDelegationsMap().forEach((v: DebondingDelegationInnerEntry) => {
                            result = result + v.getDebondingdelegationsList().reduce((s: number, i: DebondingDelegation) => {
                                return s + Number(this.toBigint(i.getShares_asU8()).valueOf());
                            }, 0);
                        });
                        result = result * ratio;

                        this.cache[key] = result;
                        return resolve(result);
                    }
                });
            });
        });
    }

    public async getHeight(): Promise<number> {
        const key = 'getHeight;'
        const request = new GetHeadRequest();
        return await new Promise((resolve) => {
            return this.chainClient.getHead(request, (error, response) => {
                if (error) {
                    console.error(error.message);
                    const result = this.cache[key];
                    return resolve(result === undefined ? '' : result);
                } else {
                    const result = response.getHeight();
                    this.cache[key] = result;
                    return resolve(result);
                }
            });
        });
    }

    public async getRank(height: number, validator: string): Promise<number> {
        const key = 'getRank;'
        const heightRequest = new ValidatorGetByHeightRequest();
        heightRequest.setHeight(height);

        return await new Promise((resolve) => {
            return this.validatorClient.getByHeight(heightRequest, (error, response) => {
                if (error) {
                    console.error(error.message);
                    const result = this.cache[key];
                    return resolve(result === undefined ? '' : result);
                } else {
                    const sorted = _.sortBy(response.getValidatorsList(), (o) => {
                        return o.getVotingPower();
                    }).reverse();

                    const result = _.findIndex(sorted, (o) => {
                        return o.getAddress() === validator;
                    }) + 1;

                    this.cache[key] = result;
                    return resolve(result);
                }
            });
        });
    }

    public async getMaxValidator(height: number): Promise<number> {
        const key = 'getMaxValidator;'
        const heightRequest = new GetByHeightRequest();
        heightRequest.setHeight(height);

        return await new Promise((resolve) => {
            return this.stateClint.getByHeight(heightRequest, (error, response) => {
                if (error) {
                    console.error(error.message);
                    const result = this.cache[key];
                    return resolve(result === undefined ? '' : result);
                } else {
                    const result = response.getState().getScheduler().getParams().getMaxvalidators();
                    this.cache[key] = result;
                    return resolve(result);
                }
            });
        });
    }
}