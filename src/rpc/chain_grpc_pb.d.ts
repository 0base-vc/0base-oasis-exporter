// package: chain
// file: chain.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chain_pb from "./chain_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IChainServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getConstants: IChainServiceService_IGetConstants;
    getHead: IChainServiceService_IGetHead;
    getStatus: IChainServiceService_IGetStatus;
    getMetaByHeight: IChainServiceService_IGetMetaByHeight;
}

interface IChainServiceService_IGetConstants extends grpc.MethodDefinition<chain_pb.GetConstantsRequest, chain_pb.GetConstantsResponse> {
    path: "/chain.ChainService/GetConstants";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chain_pb.GetConstantsRequest>;
    requestDeserialize: grpc.deserialize<chain_pb.GetConstantsRequest>;
    responseSerialize: grpc.serialize<chain_pb.GetConstantsResponse>;
    responseDeserialize: grpc.deserialize<chain_pb.GetConstantsResponse>;
}
interface IChainServiceService_IGetHead extends grpc.MethodDefinition<chain_pb.GetHeadRequest, chain_pb.GetHeadResponse> {
    path: "/chain.ChainService/GetHead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chain_pb.GetHeadRequest>;
    requestDeserialize: grpc.deserialize<chain_pb.GetHeadRequest>;
    responseSerialize: grpc.serialize<chain_pb.GetHeadResponse>;
    responseDeserialize: grpc.deserialize<chain_pb.GetHeadResponse>;
}
interface IChainServiceService_IGetStatus extends grpc.MethodDefinition<chain_pb.GetStatusRequest, chain_pb.GetStatusResponse> {
    path: "/chain.ChainService/GetStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chain_pb.GetStatusRequest>;
    requestDeserialize: grpc.deserialize<chain_pb.GetStatusRequest>;
    responseSerialize: grpc.serialize<chain_pb.GetStatusResponse>;
    responseDeserialize: grpc.deserialize<chain_pb.GetStatusResponse>;
}
interface IChainServiceService_IGetMetaByHeight extends grpc.MethodDefinition<chain_pb.GetMetaByHeightRequest, chain_pb.GetMetaByHeightResponse> {
    path: "/chain.ChainService/GetMetaByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chain_pb.GetMetaByHeightRequest>;
    requestDeserialize: grpc.deserialize<chain_pb.GetMetaByHeightRequest>;
    responseSerialize: grpc.serialize<chain_pb.GetMetaByHeightResponse>;
    responseDeserialize: grpc.deserialize<chain_pb.GetMetaByHeightResponse>;
}

export const ChainServiceService: IChainServiceService;

export interface IChainServiceServer {
    getConstants: grpc.handleUnaryCall<chain_pb.GetConstantsRequest, chain_pb.GetConstantsResponse>;
    getHead: grpc.handleUnaryCall<chain_pb.GetHeadRequest, chain_pb.GetHeadResponse>;
    getStatus: grpc.handleUnaryCall<chain_pb.GetStatusRequest, chain_pb.GetStatusResponse>;
    getMetaByHeight: grpc.handleUnaryCall<chain_pb.GetMetaByHeightRequest, chain_pb.GetMetaByHeightResponse>;
}

export interface IChainServiceClient {
    getConstants(request: chain_pb.GetConstantsRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetConstantsResponse) => void): grpc.ClientUnaryCall;
    getConstants(request: chain_pb.GetConstantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetConstantsResponse) => void): grpc.ClientUnaryCall;
    getConstants(request: chain_pb.GetConstantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetConstantsResponse) => void): grpc.ClientUnaryCall;
    getHead(request: chain_pb.GetHeadRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetHeadResponse) => void): grpc.ClientUnaryCall;
    getHead(request: chain_pb.GetHeadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetHeadResponse) => void): grpc.ClientUnaryCall;
    getHead(request: chain_pb.GetHeadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetHeadResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: chain_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: chain_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: chain_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getMetaByHeight(request: chain_pb.GetMetaByHeightRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetMetaByHeightResponse) => void): grpc.ClientUnaryCall;
    getMetaByHeight(request: chain_pb.GetMetaByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetMetaByHeightResponse) => void): grpc.ClientUnaryCall;
    getMetaByHeight(request: chain_pb.GetMetaByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetMetaByHeightResponse) => void): grpc.ClientUnaryCall;
}

export class ChainServiceClient extends grpc.Client implements IChainServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getConstants(request: chain_pb.GetConstantsRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetConstantsResponse) => void): grpc.ClientUnaryCall;
    public getConstants(request: chain_pb.GetConstantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetConstantsResponse) => void): grpc.ClientUnaryCall;
    public getConstants(request: chain_pb.GetConstantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetConstantsResponse) => void): grpc.ClientUnaryCall;
    public getHead(request: chain_pb.GetHeadRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetHeadResponse) => void): grpc.ClientUnaryCall;
    public getHead(request: chain_pb.GetHeadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetHeadResponse) => void): grpc.ClientUnaryCall;
    public getHead(request: chain_pb.GetHeadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetHeadResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: chain_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: chain_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: chain_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getMetaByHeight(request: chain_pb.GetMetaByHeightRequest, callback: (error: grpc.ServiceError | null, response: chain_pb.GetMetaByHeightResponse) => void): grpc.ClientUnaryCall;
    public getMetaByHeight(request: chain_pb.GetMetaByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chain_pb.GetMetaByHeightResponse) => void): grpc.ClientUnaryCall;
    public getMetaByHeight(request: chain_pb.GetMetaByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chain_pb.GetMetaByHeightResponse) => void): grpc.ClientUnaryCall;
}
