// package: account
// file: account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GeneralAccount extends jspb.Message { 
    getBalance(): Uint8Array | string;
    getBalance_asU8(): Uint8Array;
    getBalance_asB64(): string;
    setBalance(value: Uint8Array | string): GeneralAccount;

    getNonce(): number;
    setNonce(value: number): GeneralAccount;

    getTransfersnotbefore(): number;
    setTransfersnotbefore(value: number): GeneralAccount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneralAccount.AsObject;
    static toObject(includeInstance: boolean, msg: GeneralAccount): GeneralAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeneralAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneralAccount;
    static deserializeBinaryFromReader(message: GeneralAccount, reader: jspb.BinaryReader): GeneralAccount;
}

export namespace GeneralAccount {
    export type AsObject = {
        balance: Uint8Array | string,
        nonce: number,
        transfersnotbefore: number,
    }
}

export class SharePool extends jspb.Message { 
    getBalance(): Uint8Array | string;
    getBalance_asU8(): Uint8Array;
    getBalance_asB64(): string;
    setBalance(value: Uint8Array | string): SharePool;

    getTotalshares(): Uint8Array | string;
    getTotalshares_asU8(): Uint8Array;
    getTotalshares_asB64(): string;
    setTotalshares(value: Uint8Array | string): SharePool;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SharePool.AsObject;
    static toObject(includeInstance: boolean, msg: SharePool): SharePool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SharePool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SharePool;
    static deserializeBinaryFromReader(message: SharePool, reader: jspb.BinaryReader): SharePool;
}

export namespace SharePool {
    export type AsObject = {
        balance: Uint8Array | string,
        totalshares: Uint8Array | string,
    }
}

export class CommissionRateStep extends jspb.Message { 
    getStart(): number;
    setStart(value: number): CommissionRateStep;

    getRate(): Uint8Array | string;
    getRate_asU8(): Uint8Array;
    getRate_asB64(): string;
    setRate(value: Uint8Array | string): CommissionRateStep;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommissionRateStep.AsObject;
    static toObject(includeInstance: boolean, msg: CommissionRateStep): CommissionRateStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommissionRateStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommissionRateStep;
    static deserializeBinaryFromReader(message: CommissionRateStep, reader: jspb.BinaryReader): CommissionRateStep;
}

export namespace CommissionRateStep {
    export type AsObject = {
        start: number,
        rate: Uint8Array | string,
    }
}

export class CommissionRateBoundStep extends jspb.Message { 
    getStart(): number;
    setStart(value: number): CommissionRateBoundStep;

    getRatemin(): Uint8Array | string;
    getRatemin_asU8(): Uint8Array;
    getRatemin_asB64(): string;
    setRatemin(value: Uint8Array | string): CommissionRateBoundStep;

    getRatemax(): Uint8Array | string;
    getRatemax_asU8(): Uint8Array;
    getRatemax_asB64(): string;
    setRatemax(value: Uint8Array | string): CommissionRateBoundStep;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommissionRateBoundStep.AsObject;
    static toObject(includeInstance: boolean, msg: CommissionRateBoundStep): CommissionRateBoundStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommissionRateBoundStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommissionRateBoundStep;
    static deserializeBinaryFromReader(message: CommissionRateBoundStep, reader: jspb.BinaryReader): CommissionRateBoundStep;
}

export namespace CommissionRateBoundStep {
    export type AsObject = {
        start: number,
        ratemin: Uint8Array | string,
        ratemax: Uint8Array | string,
    }
}

export class CommissionSchedule extends jspb.Message { 
    clearRatesList(): void;
    getRatesList(): Array<CommissionRateStep>;
    setRatesList(value: Array<CommissionRateStep>): CommissionSchedule;
    addRates(value?: CommissionRateStep, index?: number): CommissionRateStep;

    clearBoundsList(): void;
    getBoundsList(): Array<CommissionRateBoundStep>;
    setBoundsList(value: Array<CommissionRateBoundStep>): CommissionSchedule;
    addBounds(value?: CommissionRateBoundStep, index?: number): CommissionRateBoundStep;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommissionSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: CommissionSchedule): CommissionSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommissionSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommissionSchedule;
    static deserializeBinaryFromReader(message: CommissionSchedule, reader: jspb.BinaryReader): CommissionSchedule;
}

export namespace CommissionSchedule {
    export type AsObject = {
        ratesList: Array<CommissionRateStep.AsObject>,
        boundsList: Array<CommissionRateBoundStep.AsObject>,
    }
}

export class ThresholdKinds extends jspb.Message { 
    clearKindsList(): void;
    getKindsList(): Array<StakeThreshold>;
    setKindsList(value: Array<StakeThreshold>): ThresholdKinds;
    addKinds(value?: StakeThreshold, index?: number): StakeThreshold;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThresholdKinds.AsObject;
    static toObject(includeInstance: boolean, msg: ThresholdKinds): ThresholdKinds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThresholdKinds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThresholdKinds;
    static deserializeBinaryFromReader(message: ThresholdKinds, reader: jspb.BinaryReader): ThresholdKinds;
}

export namespace ThresholdKinds {
    export type AsObject = {
        kindsList: Array<StakeThreshold.AsObject>,
    }
}

export class StakeThreshold extends jspb.Message { 
    getGlobal(): string;
    setGlobal(value: string): StakeThreshold;

    getConstant(): Uint8Array | string;
    getConstant_asU8(): Uint8Array;
    getConstant_asB64(): string;
    setConstant(value: Uint8Array | string): StakeThreshold;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeThreshold.AsObject;
    static toObject(includeInstance: boolean, msg: StakeThreshold): StakeThreshold.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeThreshold, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeThreshold;
    static deserializeBinaryFromReader(message: StakeThreshold, reader: jspb.BinaryReader): StakeThreshold;
}

export namespace StakeThreshold {
    export type AsObject = {
        global: string,
        constant: Uint8Array | string,
    }
}

export class StakeAccumulator extends jspb.Message { 

    getClaimsMap(): jspb.Map<string, ThresholdKinds>;
    clearClaimsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeAccumulator.AsObject;
    static toObject(includeInstance: boolean, msg: StakeAccumulator): StakeAccumulator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeAccumulator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeAccumulator;
    static deserializeBinaryFromReader(message: StakeAccumulator, reader: jspb.BinaryReader): StakeAccumulator;
}

export namespace StakeAccumulator {
    export type AsObject = {

        claimsMap: Array<[string, ThresholdKinds.AsObject]>,
    }
}

export class EscrowAccount extends jspb.Message { 

    hasActive(): boolean;
    clearActive(): void;
    getActive(): SharePool | undefined;
    setActive(value?: SharePool): EscrowAccount;


    hasDebonding(): boolean;
    clearDebonding(): void;
    getDebonding(): SharePool | undefined;
    setDebonding(value?: SharePool): EscrowAccount;


    hasCommissionschedule(): boolean;
    clearCommissionschedule(): void;
    getCommissionschedule(): CommissionSchedule | undefined;
    setCommissionschedule(value?: CommissionSchedule): EscrowAccount;


    hasStakeaccumulator(): boolean;
    clearStakeaccumulator(): void;
    getStakeaccumulator(): StakeAccumulator | undefined;
    setStakeaccumulator(value?: StakeAccumulator): EscrowAccount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EscrowAccount.AsObject;
    static toObject(includeInstance: boolean, msg: EscrowAccount): EscrowAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EscrowAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EscrowAccount;
    static deserializeBinaryFromReader(message: EscrowAccount, reader: jspb.BinaryReader): EscrowAccount;
}

export namespace EscrowAccount {
    export type AsObject = {
        active?: SharePool.AsObject,
        debonding?: SharePool.AsObject,
        commissionschedule?: CommissionSchedule.AsObject,
        stakeaccumulator?: StakeAccumulator.AsObject,
    }
}

export class Account extends jspb.Message { 

    hasGeneral(): boolean;
    clearGeneral(): void;
    getGeneral(): GeneralAccount | undefined;
    setGeneral(value?: GeneralAccount): Account;


    hasEscrow(): boolean;
    clearEscrow(): void;
    getEscrow(): EscrowAccount | undefined;
    setEscrow(value?: EscrowAccount): Account;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        general?: GeneralAccount.AsObject,
        escrow?: EscrowAccount.AsObject,
    }
}

export class GetByAddressRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): GetByAddressRequest;

    getHeight(): number;
    setHeight(value: number): GetByAddressRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByAddressRequest): GetByAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByAddressRequest;
    static deserializeBinaryFromReader(message: GetByAddressRequest, reader: jspb.BinaryReader): GetByAddressRequest;
}

export namespace GetByAddressRequest {
    export type AsObject = {
        address: string,
        height: number,
    }
}

export class GetByAddressResponse extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): Account | undefined;
    setAccount(value?: Account): GetByAddressResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetByAddressResponse): GetByAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByAddressResponse;
    static deserializeBinaryFromReader(message: GetByAddressResponse, reader: jspb.BinaryReader): GetByAddressResponse;
}

export namespace GetByAddressResponse {
    export type AsObject = {
        account?: Account.AsObject,
    }
}
