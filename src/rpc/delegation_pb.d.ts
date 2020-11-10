// package: delegation
// file: delegation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DelegationEntry extends jspb.Message { 

    getEntriesMap(): jspb.Map<string, Delegation>;
    clearEntriesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationEntry.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationEntry): DelegationEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationEntry;
    static deserializeBinaryFromReader(message: DelegationEntry, reader: jspb.BinaryReader): DelegationEntry;
}

export namespace DelegationEntry {
    export type AsObject = {

        entriesMap: Array<[string, Delegation.AsObject]>,
    }
}

export class Delegation extends jspb.Message { 
    getShares(): Uint8Array | string;
    getShares_asU8(): Uint8Array;
    getShares_asB64(): string;
    setShares(value: Uint8Array | string): Delegation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Delegation.AsObject;
    static toObject(includeInstance: boolean, msg: Delegation): Delegation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Delegation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Delegation;
    static deserializeBinaryFromReader(message: Delegation, reader: jspb.BinaryReader): Delegation;
}

export namespace Delegation {
    export type AsObject = {
        shares: Uint8Array | string,
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

    getDelegationsMap(): jspb.Map<string, Delegation>;
    clearDelegationsMap(): void;


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

        delegationsMap: Array<[string, Delegation.AsObject]>,
    }
}
