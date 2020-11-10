// package: state
// file: state.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as account_pb from "./account_pb";
import * as delegation_pb from "./delegation_pb";
import * as debonding_delegation_pb from "./debonding_delegation_pb";

export class RegistryParameters extends jspb.Message { 
    getDebugAllowUnroutableAddresses(): boolean;
    setDebugAllowUnroutableAddresses(value: boolean): RegistryParameters;

    getDebugallowtestruntimes(): boolean;
    setDebugallowtestruntimes(value: boolean): RegistryParameters;

    getDebugallowentitysignednoderegistration(): boolean;
    setDebugallowentitysignednoderegistration(value: boolean): RegistryParameters;

    getDebugbypassstake(): boolean;
    setDebugbypassstake(value: boolean): RegistryParameters;

    getDisableruntimeregistration(): boolean;
    setDisableruntimeregistration(value: boolean): RegistryParameters;

    getDisablekeymanagerruntimeregistration(): boolean;
    setDisablekeymanagerruntimeregistration(value: boolean): RegistryParameters;


    getGascostsMap(): jspb.Map<string, number>;
    clearGascostsMap(): void;

    getMaxnodeexpiration(): number;
    setMaxnodeexpiration(value: number): RegistryParameters;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegistryParameters.AsObject;
    static toObject(includeInstance: boolean, msg: RegistryParameters): RegistryParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegistryParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegistryParameters;
    static deserializeBinaryFromReader(message: RegistryParameters, reader: jspb.BinaryReader): RegistryParameters;
}

export namespace RegistryParameters {
    export type AsObject = {
        debugAllowUnroutableAddresses: boolean,
        debugallowtestruntimes: boolean,
        debugallowentitysignednoderegistration: boolean,
        debugbypassstake: boolean,
        disableruntimeregistration: boolean,
        disablekeymanagerruntimeregistration: boolean,

        gascostsMap: Array<[string, number]>,
        maxnodeexpiration: number,
    }
}

export class Entity extends jspb.Message { 
    getPublickey(): string;
    setPublickey(value: string): Entity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
    export type AsObject = {
        publickey: string,
    }
}

export class Registry extends jspb.Message { 

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): RegistryParameters | undefined;
    setParameters(value?: RegistryParameters): Registry;

    clearEntitiesList(): void;
    getEntitiesList(): Array<Entity>;
    setEntitiesList(value: Array<Entity>): Registry;
    addEntities(value?: Entity, index?: number): Entity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Registry.AsObject;
    static toObject(includeInstance: boolean, msg: Registry): Registry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Registry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Registry;
    static deserializeBinaryFromReader(message: Registry, reader: jspb.BinaryReader): Registry;
}

export namespace Registry {
    export type AsObject = {
        parameters?: RegistryParameters.AsObject,
        entitiesList: Array<Entity.AsObject>,
    }
}

export class Slash extends jspb.Message { 
    getAmount(): Uint8Array | string;
    getAmount_asU8(): Uint8Array;
    getAmount_asB64(): string;
    setAmount(value: Uint8Array | string): Slash;

    getFreezeinterval(): number;
    setFreezeinterval(value: number): Slash;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Slash.AsObject;
    static toObject(includeInstance: boolean, msg: Slash): Slash.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Slash, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Slash;
    static deserializeBinaryFromReader(message: Slash, reader: jspb.BinaryReader): Slash;
}

export namespace Slash {
    export type AsObject = {
        amount: Uint8Array | string,
        freezeinterval: number,
    }
}

export class RewardStep extends jspb.Message { 
    getUntil(): number;
    setUntil(value: number): RewardStep;

    getScale(): Uint8Array | string;
    getScale_asU8(): Uint8Array;
    getScale_asB64(): string;
    setScale(value: Uint8Array | string): RewardStep;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardStep.AsObject;
    static toObject(includeInstance: boolean, msg: RewardStep): RewardStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardStep;
    static deserializeBinaryFromReader(message: RewardStep, reader: jspb.BinaryReader): RewardStep;
}

export namespace RewardStep {
    export type AsObject = {
        until: number,
        scale: Uint8Array | string,
    }
}

export class CommissionScheduleRules extends jspb.Message { 
    getRatechangeinterval(): number;
    setRatechangeinterval(value: number): CommissionScheduleRules;

    getRateboundlead(): number;
    setRateboundlead(value: number): CommissionScheduleRules;

    getMaxratesteps(): number;
    setMaxratesteps(value: number): CommissionScheduleRules;

    getMaxboundsteps(): number;
    setMaxboundsteps(value: number): CommissionScheduleRules;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommissionScheduleRules.AsObject;
    static toObject(includeInstance: boolean, msg: CommissionScheduleRules): CommissionScheduleRules.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommissionScheduleRules, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommissionScheduleRules;
    static deserializeBinaryFromReader(message: CommissionScheduleRules, reader: jspb.BinaryReader): CommissionScheduleRules;
}

export namespace CommissionScheduleRules {
    export type AsObject = {
        ratechangeinterval: number,
        rateboundlead: number,
        maxratesteps: number,
        maxboundsteps: number,
    }
}

export class StakingParameters extends jspb.Message { 

    getThresholdsMap(): jspb.Map<number, Uint8Array | string>;
    clearThresholdsMap(): void;

    getDebondinginterval(): number;
    setDebondinginterval(value: number): StakingParameters;

    clearRewardscheduleList(): void;
    getRewardscheduleList(): Array<RewardStep>;
    setRewardscheduleList(value: Array<RewardStep>): StakingParameters;
    addRewardschedule(value?: RewardStep, index?: number): RewardStep;

    getSigningrewardthresholdnumerator(): number;
    setSigningrewardthresholdnumerator(value: number): StakingParameters;

    getSigningrewardthresholddenominator(): number;
    setSigningrewardthresholddenominator(value: number): StakingParameters;


    hasCommissionschedulerules(): boolean;
    clearCommissionschedulerules(): void;
    getCommissionschedulerules(): CommissionScheduleRules | undefined;
    setCommissionschedulerules(value?: CommissionScheduleRules): StakingParameters;


    getSlashingMap(): jspb.Map<string, Slash>;
    clearSlashingMap(): void;


    getGascostsMap(): jspb.Map<string, number>;
    clearGascostsMap(): void;

    getMindelegationamount(): Uint8Array | string;
    getMindelegationamount_asU8(): Uint8Array;
    getMindelegationamount_asB64(): string;
    setMindelegationamount(value: Uint8Array | string): StakingParameters;

    getDisabletransfers(): boolean;
    setDisabletransfers(value: boolean): StakingParameters;

    getDisabledelegation(): boolean;
    setDisabledelegation(value: boolean): StakingParameters;


    getUndisabletransfersfromMap(): jspb.Map<string, boolean>;
    clearUndisabletransfersfromMap(): void;

    getFeesplitweightpropose(): Uint8Array | string;
    getFeesplitweightpropose_asU8(): Uint8Array;
    getFeesplitweightpropose_asB64(): string;
    setFeesplitweightpropose(value: Uint8Array | string): StakingParameters;

    getFeesplitweightvote(): Uint8Array | string;
    getFeesplitweightvote_asU8(): Uint8Array;
    getFeesplitweightvote_asB64(): string;
    setFeesplitweightvote(value: Uint8Array | string): StakingParameters;

    getFeesplitweightnextpropose(): Uint8Array | string;
    getFeesplitweightnextpropose_asU8(): Uint8Array;
    getFeesplitweightnextpropose_asB64(): string;
    setFeesplitweightnextpropose(value: Uint8Array | string): StakingParameters;

    getRewardfactorepochsigned(): Uint8Array | string;
    getRewardfactorepochsigned_asU8(): Uint8Array;
    getRewardfactorepochsigned_asB64(): string;
    setRewardfactorepochsigned(value: Uint8Array | string): StakingParameters;

    getRewardfactorblockproposed(): Uint8Array | string;
    getRewardfactorblockproposed_asU8(): Uint8Array;
    getRewardfactorblockproposed_asB64(): string;
    setRewardfactorblockproposed(value: Uint8Array | string): StakingParameters;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingParameters.AsObject;
    static toObject(includeInstance: boolean, msg: StakingParameters): StakingParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingParameters;
    static deserializeBinaryFromReader(message: StakingParameters, reader: jspb.BinaryReader): StakingParameters;
}

export namespace StakingParameters {
    export type AsObject = {

        thresholdsMap: Array<[number, Uint8Array | string]>,
        debondinginterval: number,
        rewardscheduleList: Array<RewardStep.AsObject>,
        signingrewardthresholdnumerator: number,
        signingrewardthresholddenominator: number,
        commissionschedulerules?: CommissionScheduleRules.AsObject,

        slashingMap: Array<[string, Slash.AsObject]>,

        gascostsMap: Array<[string, number]>,
        mindelegationamount: Uint8Array | string,
        disabletransfers: boolean,
        disabledelegation: boolean,

        undisabletransfersfromMap: Array<[string, boolean]>,
        feesplitweightpropose: Uint8Array | string,
        feesplitweightvote: Uint8Array | string,
        feesplitweightnextpropose: Uint8Array | string,
        rewardfactorepochsigned: Uint8Array | string,
        rewardfactorblockproposed: Uint8Array | string,
    }
}

export class Staking extends jspb.Message { 
    getTotalSupply(): Uint8Array | string;
    getTotalSupply_asU8(): Uint8Array;
    getTotalSupply_asB64(): string;
    setTotalSupply(value: Uint8Array | string): Staking;

    getCommonPool(): Uint8Array | string;
    getCommonPool_asU8(): Uint8Array;
    getCommonPool_asB64(): string;
    setCommonPool(value: Uint8Array | string): Staking;


    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): StakingParameters | undefined;
    setParameters(value?: StakingParameters): Staking;


    getLedgerMap(): jspb.Map<string, account_pb.Account>;
    clearLedgerMap(): void;


    getDelegationsMap(): jspb.Map<string, delegation_pb.DelegationEntry>;
    clearDelegationsMap(): void;


    getDebondingDelegationsMap(): jspb.Map<string, debonding_delegation_pb.DebondingDelegationEntry>;
    clearDebondingDelegationsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Staking.AsObject;
    static toObject(includeInstance: boolean, msg: Staking): Staking.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Staking, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Staking;
    static deserializeBinaryFromReader(message: Staking, reader: jspb.BinaryReader): Staking;
}

export namespace Staking {
    export type AsObject = {
        totalSupply: Uint8Array | string,
        commonPool: Uint8Array | string,
        parameters?: StakingParameters.AsObject,

        ledgerMap: Array<[string, account_pb.Account.AsObject]>,

        delegationsMap: Array<[string, delegation_pb.DelegationEntry.AsObject]>,

        debondingDelegationsMap: Array<[string, debonding_delegation_pb.DebondingDelegationEntry.AsObject]>,
    }
}

export class SchedulerParams extends jspb.Message { 
    getMinvalidators(): number;
    setMinvalidators(value: number): SchedulerParams;

    getMaxvalidators(): number;
    setMaxvalidators(value: number): SchedulerParams;

    getMaxvalidatorsperentity(): number;
    setMaxvalidatorsperentity(value: number): SchedulerParams;

    getDebugbypassstake(): boolean;
    setDebugbypassstake(value: boolean): SchedulerParams;

    getDebugstaticvalidators(): boolean;
    setDebugstaticvalidators(value: boolean): SchedulerParams;

    getRewardfactorepochelectionany(): Uint8Array | string;
    getRewardfactorepochelectionany_asU8(): Uint8Array;
    getRewardfactorepochelectionany_asB64(): string;
    setRewardfactorepochelectionany(value: Uint8Array | string): SchedulerParams;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchedulerParams.AsObject;
    static toObject(includeInstance: boolean, msg: SchedulerParams): SchedulerParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchedulerParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchedulerParams;
    static deserializeBinaryFromReader(message: SchedulerParams, reader: jspb.BinaryReader): SchedulerParams;
}

export namespace SchedulerParams {
    export type AsObject = {
        minvalidators: number,
        maxvalidators: number,
        maxvalidatorsperentity: number,
        debugbypassstake: boolean,
        debugstaticvalidators: boolean,
        rewardfactorepochelectionany: Uint8Array | string,
    }
}

export class Scheduler extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): SchedulerParams | undefined;
    setParams(value?: SchedulerParams): Scheduler;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scheduler.AsObject;
    static toObject(includeInstance: boolean, msg: Scheduler): Scheduler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scheduler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scheduler;
    static deserializeBinaryFromReader(message: Scheduler, reader: jspb.BinaryReader): Scheduler;
}

export namespace Scheduler {
    export type AsObject = {
        params?: SchedulerParams.AsObject,
    }
}

export class ConsensusParams extends jspb.Message { 

    hasTimeoutcommit(): boolean;
    clearTimeoutcommit(): void;
    getTimeoutcommit(): google_protobuf_duration_pb.Duration | undefined;
    setTimeoutcommit(value?: google_protobuf_duration_pb.Duration): ConsensusParams;

    getSkiptimeoutcommit(): boolean;
    setSkiptimeoutcommit(value: boolean): ConsensusParams;


    hasEmptyblockinterval(): boolean;
    clearEmptyblockinterval(): void;
    getEmptyblockinterval(): google_protobuf_duration_pb.Duration | undefined;
    setEmptyblockinterval(value?: google_protobuf_duration_pb.Duration): ConsensusParams;

    getMaxtxsize(): number;
    setMaxtxsize(value: number): ConsensusParams;

    getMaxblocksize(): number;
    setMaxblocksize(value: number): ConsensusParams;

    getMaxblockgas(): number;
    setMaxblockgas(value: number): ConsensusParams;

    getMaxevidenceageblocks(): number;
    setMaxevidenceageblocks(value: number): ConsensusParams;

    getMaxevidenceagetime(): string;
    setMaxevidenceagetime(value: string): ConsensusParams;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsensusParams.AsObject;
    static toObject(includeInstance: boolean, msg: ConsensusParams): ConsensusParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsensusParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsensusParams;
    static deserializeBinaryFromReader(message: ConsensusParams, reader: jspb.BinaryReader): ConsensusParams;
}

export namespace ConsensusParams {
    export type AsObject = {
        timeoutcommit?: google_protobuf_duration_pb.Duration.AsObject,
        skiptimeoutcommit: boolean,
        emptyblockinterval?: google_protobuf_duration_pb.Duration.AsObject,
        maxtxsize: number,
        maxblocksize: number,
        maxblockgas: number,
        maxevidenceageblocks: number,
        maxevidenceagetime: string,
    }
}

export class Consensus extends jspb.Message { 
    getBackend(): string;
    setBackend(value: string): Consensus;


    hasParams(): boolean;
    clearParams(): void;
    getParams(): ConsensusParams | undefined;
    setParams(value?: ConsensusParams): Consensus;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Consensus.AsObject;
    static toObject(includeInstance: boolean, msg: Consensus): Consensus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Consensus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Consensus;
    static deserializeBinaryFromReader(message: Consensus, reader: jspb.BinaryReader): Consensus;
}

export namespace Consensus {
    export type AsObject = {
        backend: string,
        params?: ConsensusParams.AsObject,
    }
}

export class State extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): State;


    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): State;

    getChainid(): string;
    setChainid(value: string): State;


    hasRegistry(): boolean;
    clearRegistry(): void;
    getRegistry(): Registry | undefined;
    setRegistry(value?: Registry): State;


    hasStaking(): boolean;
    clearStaking(): void;
    getStaking(): Staking | undefined;
    setStaking(value?: Staking): State;


    hasScheduler(): boolean;
    clearScheduler(): void;
    getScheduler(): Scheduler | undefined;
    setScheduler(value?: Scheduler): State;


    hasConsensus(): boolean;
    clearConsensus(): void;
    getConsensus(): Consensus | undefined;
    setConsensus(value?: Consensus): State;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): State.AsObject;
    static toObject(includeInstance: boolean, msg: State): State.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): State;
    static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
    export type AsObject = {
        height: number,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        chainid: string,
        registry?: Registry.AsObject,
        staking?: Staking.AsObject,
        scheduler?: Scheduler.AsObject,
        consensus?: Consensus.AsObject,
    }
}

export class GetByHeightRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): GetByHeightRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByHeightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByHeightRequest): GetByHeightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByHeightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByHeightRequest;
    static deserializeBinaryFromReader(message: GetByHeightRequest, reader: jspb.BinaryReader): GetByHeightRequest;
}

export namespace GetByHeightRequest {
    export type AsObject = {
        height: number,
    }
}

export class GetByHeightResponse extends jspb.Message { 

    hasState(): boolean;
    clearState(): void;
    getState(): State | undefined;
    setState(value?: State): GetByHeightResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByHeightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetByHeightResponse): GetByHeightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByHeightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByHeightResponse;
    static deserializeBinaryFromReader(message: GetByHeightResponse, reader: jspb.BinaryReader): GetByHeightResponse;
}

export namespace GetByHeightResponse {
    export type AsObject = {
        state?: State.AsObject,
    }
}

export class GetStakingByHeightRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): GetStakingByHeightRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStakingByHeightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStakingByHeightRequest): GetStakingByHeightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStakingByHeightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStakingByHeightRequest;
    static deserializeBinaryFromReader(message: GetStakingByHeightRequest, reader: jspb.BinaryReader): GetStakingByHeightRequest;
}

export namespace GetStakingByHeightRequest {
    export type AsObject = {
        height: number,
    }
}

export class GetStakingByHeightResponse extends jspb.Message { 

    hasStaking(): boolean;
    clearStaking(): void;
    getStaking(): Staking | undefined;
    setStaking(value?: Staking): GetStakingByHeightResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStakingByHeightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStakingByHeightResponse): GetStakingByHeightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStakingByHeightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStakingByHeightResponse;
    static deserializeBinaryFromReader(message: GetStakingByHeightResponse, reader: jspb.BinaryReader): GetStakingByHeightResponse;
}

export namespace GetStakingByHeightResponse {
    export type AsObject = {
        staking?: Staking.AsObject,
    }
}
