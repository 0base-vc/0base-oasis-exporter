// package: chain
// file: chain.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetStatusRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
    static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
    export type AsObject = {
    }
}

export class GetStatusResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetStatusResponse;

    getName(): string;
    setName(value: string): GetStatusResponse;


    hasGenesistime(): boolean;
    clearGenesistime(): void;
    getGenesistime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setGenesistime(value?: google_protobuf_timestamp_pb.Timestamp): GetStatusResponse;

    getGenesisheight(): number;
    setGenesisheight(value: number): GetStatusResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
    static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
    export type AsObject = {
        id: string,
        name: string,
        genesistime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        genesisheight: number,
    }
}

export class GetHeadRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHeadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHeadRequest): GetHeadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHeadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHeadRequest;
    static deserializeBinaryFromReader(message: GetHeadRequest, reader: jspb.BinaryReader): GetHeadRequest;
}

export namespace GetHeadRequest {
    export type AsObject = {
    }
}

export class GetHeadResponse extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): GetHeadResponse;


    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): GetHeadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHeadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetHeadResponse): GetHeadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHeadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHeadResponse;
    static deserializeBinaryFromReader(message: GetHeadResponse, reader: jspb.BinaryReader): GetHeadResponse;
}

export namespace GetHeadResponse {
    export type AsObject = {
        height: number,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetMetaByHeightRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): GetMetaByHeightRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMetaByHeightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMetaByHeightRequest): GetMetaByHeightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMetaByHeightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMetaByHeightRequest;
    static deserializeBinaryFromReader(message: GetMetaByHeightRequest, reader: jspb.BinaryReader): GetMetaByHeightRequest;
}

export namespace GetMetaByHeightRequest {
    export type AsObject = {
        height: number,
    }
}

export class GetMetaByHeightResponse extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): GetMetaByHeightResponse;


    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): GetMetaByHeightResponse;

    getAppVersion(): number;
    setAppVersion(value: number): GetMetaByHeightResponse;

    getBlockVersion(): number;
    setBlockVersion(value: number): GetMetaByHeightResponse;

    getEpoch(): number;
    setEpoch(value: number): GetMetaByHeightResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMetaByHeightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMetaByHeightResponse): GetMetaByHeightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMetaByHeightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMetaByHeightResponse;
    static deserializeBinaryFromReader(message: GetMetaByHeightResponse, reader: jspb.BinaryReader): GetMetaByHeightResponse;
}

export namespace GetMetaByHeightResponse {
    export type AsObject = {
        height: number,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        appVersion: number,
        blockVersion: number,
        epoch: number,
    }
}

export class GetConstantsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConstantsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConstantsRequest): GetConstantsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConstantsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConstantsRequest;
    static deserializeBinaryFromReader(message: GetConstantsRequest, reader: jspb.BinaryReader): GetConstantsRequest;
}

export namespace GetConstantsRequest {
    export type AsObject = {
    }
}

export class GetConstantsResponse extends jspb.Message { 
    getCommonpooladdress(): string;
    setCommonpooladdress(value: string): GetConstantsResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConstantsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetConstantsResponse): GetConstantsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConstantsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConstantsResponse;
    static deserializeBinaryFromReader(message: GetConstantsResponse, reader: jspb.BinaryReader): GetConstantsResponse;
}

export namespace GetConstantsResponse {
    export type AsObject = {
        commonpooladdress: string,
    }
}
