// package: debondingdelegation
// file: debonding_delegation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DebondingDelegationEntry extends jspb.Message { 

    getEntriesMap(): jspb.Map<string, DebondingDelegationInnerEntry>;
    clearEntriesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DebondingDelegationEntry.AsObject;
    static toObject(includeInstance: boolean, msg: DebondingDelegationEntry): DebondingDelegationEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DebondingDelegationEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DebondingDelegationEntry;
    static deserializeBinaryFromReader(message: DebondingDelegationEntry, reader: jspb.BinaryReader): DebondingDelegationEntry;
}

export namespace DebondingDelegationEntry {
    export type AsObject = {

        entriesMap: Array<[string, DebondingDelegationInnerEntry.AsObject]>,
    }
}

export class DebondingDelegationInnerEntry extends jspb.Message { 
    clearDebondingdelegationsList(): void;
    getDebondingdelegationsList(): Array<DebondingDelegation>;
    setDebondingdelegationsList(value: Array<DebondingDelegation>): DebondingDelegationInnerEntry;
    addDebondingdelegations(value?: DebondingDelegation, index?: number): DebondingDelegation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DebondingDelegationInnerEntry.AsObject;
    static toObject(includeInstance: boolean, msg: DebondingDelegationInnerEntry): DebondingDelegationInnerEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DebondingDelegationInnerEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DebondingDelegationInnerEntry;
    static deserializeBinaryFromReader(message: DebondingDelegationInnerEntry, reader: jspb.BinaryReader): DebondingDelegationInnerEntry;
}

export namespace DebondingDelegationInnerEntry {
    export type AsObject = {
        debondingdelegationsList: Array<DebondingDelegation.AsObject>,
    }
}

export class DebondingDelegation extends jspb.Message { 
    getShares(): Uint8Array | string;
    getShares_asU8(): Uint8Array;
    getShares_asB64(): string;
    setShares(value: Uint8Array | string): DebondingDelegation;

    getDebondendtime(): number;
    setDebondendtime(value: number): DebondingDelegation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DebondingDelegation.AsObject;
    static toObject(includeInstance: boolean, msg: DebondingDelegation): DebondingDelegation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DebondingDelegation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DebondingDelegation;
    static deserializeBinaryFromReader(message: DebondingDelegation, reader: jspb.BinaryReader): DebondingDelegation;
}

export namespace DebondingDelegation {
    export type AsObject = {
        shares: Uint8Array | string,
        debondendtime: number,
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

    getDebondingDelegationsMap(): jspb.Map<string, DebondingDelegationInnerEntry>;
    clearDebondingDelegationsMap(): void;


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

        debondingDelegationsMap: Array<[string, DebondingDelegationInnerEntry.AsObject]>,
    }
}
