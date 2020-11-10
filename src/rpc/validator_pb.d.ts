// package: validator
// file: validator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class P2PInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): P2PInfo;

    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): P2PInfo;
    addAddresses(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): P2PInfo.AsObject;
    static toObject(includeInstance: boolean, msg: P2PInfo): P2PInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: P2PInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): P2PInfo;
    static deserializeBinaryFromReader(message: P2PInfo, reader: jspb.BinaryReader): P2PInfo;
}

export namespace P2PInfo {
    export type AsObject = {
        id: string,
        addressesList: Array<string>,
    }
}

export class ConsensusAddress extends jspb.Message { 
    getId(): string;
    setId(value: string): ConsensusAddress;

    getAddress(): string;
    setAddress(value: string): ConsensusAddress;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsensusAddress.AsObject;
    static toObject(includeInstance: boolean, msg: ConsensusAddress): ConsensusAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsensusAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsensusAddress;
    static deserializeBinaryFromReader(message: ConsensusAddress, reader: jspb.BinaryReader): ConsensusAddress;
}

export namespace ConsensusAddress {
    export type AsObject = {
        id: string,
        address: string,
    }
}

export class ConsensusInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): ConsensusInfo;

    clearAddressesList(): void;
    getAddressesList(): Array<ConsensusAddress>;
    setAddressesList(value: Array<ConsensusAddress>): ConsensusInfo;
    addAddresses(value?: ConsensusAddress, index?: number): ConsensusAddress;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsensusInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ConsensusInfo): ConsensusInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsensusInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsensusInfo;
    static deserializeBinaryFromReader(message: ConsensusInfo, reader: jspb.BinaryReader): ConsensusInfo;
}

export namespace ConsensusInfo {
    export type AsObject = {
        id: string,
        addressesList: Array<ConsensusAddress.AsObject>,
    }
}

export class Version extends jspb.Message { 
    getMajor(): number;
    setMajor(value: number): Version;

    getMinor(): number;
    setMinor(value: number): Version;

    getPatch(): number;
    setPatch(value: number): Version;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
    export type AsObject = {
        major: number,
        minor: number,
        patch: number,
    }
}

export class Runtime extends jspb.Message { 
    getId(): string;
    setId(value: string): Runtime;


    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): Version | undefined;
    setVersion(value?: Version): Runtime;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Runtime.AsObject;
    static toObject(includeInstance: boolean, msg: Runtime): Runtime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Runtime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Runtime;
    static deserializeBinaryFromReader(message: Runtime, reader: jspb.BinaryReader): Runtime;
}

export namespace Runtime {
    export type AsObject = {
        id: string,
        version?: Version.AsObject,
    }
}

export class Node extends jspb.Message { 
    getId(): string;
    setId(value: string): Node;

    getEntityId(): string;
    setEntityId(value: string): Node;

    getExpiration(): number;
    setExpiration(value: number): Node;


    hasP2p(): boolean;
    clearP2p(): void;
    getP2p(): P2PInfo | undefined;
    setP2p(value?: P2PInfo): Node;


    hasConsensus(): boolean;
    clearConsensus(): void;
    getConsensus(): ConsensusInfo | undefined;
    setConsensus(value?: ConsensusInfo): Node;

    clearRuntimesList(): void;
    getRuntimesList(): Array<Runtime>;
    setRuntimesList(value: Array<Runtime>): Node;
    addRuntimes(value?: Runtime, index?: number): Runtime;

    getRoles(): number;
    setRoles(value: number): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        id: string,
        entityId: string,
        expiration: number,
        p2p?: P2PInfo.AsObject,
        consensus?: ConsensusInfo.AsObject,
        runtimesList: Array<Runtime.AsObject>,
        roles: number,
    }
}

export class Validator extends jspb.Message { 
    getId(): string;
    setId(value: string): Validator;

    getVotingPower(): number;
    setVotingPower(value: number): Validator;

    getAddress(): string;
    setAddress(value: string): Validator;

    getTendermintAddress(): string;
    setTendermintAddress(value: string): Validator;


    hasNode(): boolean;
    clearNode(): void;
    getNode(): Node | undefined;
    setNode(value?: Node): Validator;

    getCommission(): Uint8Array | string;
    getCommission_asU8(): Uint8Array;
    getCommission_asB64(): string;
    setCommission(value: Uint8Array | string): Validator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validator.AsObject;
    static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validator;
    static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
    export type AsObject = {
        id: string,
        votingPower: number,
        address: string,
        tendermintAddress: string,
        node?: Node.AsObject,
        commission: Uint8Array | string,
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
    clearValidatorsList(): void;
    getValidatorsList(): Array<Validator>;
    setValidatorsList(value: Array<Validator>): GetByHeightResponse;
    addValidators(value?: Validator, index?: number): Validator;


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
        validatorsList: Array<Validator.AsObject>,
    }
}
