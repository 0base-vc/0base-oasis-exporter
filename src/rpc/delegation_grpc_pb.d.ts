// package: delegation
// file: delegation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as delegation_pb from "./delegation_pb";

interface IDelegationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getByAddress: IDelegationServiceService_IGetByAddress;
}

interface IDelegationServiceService_IGetByAddress extends grpc.MethodDefinition<delegation_pb.GetByAddressRequest, delegation_pb.GetByAddressResponse> {
    path: "/delegation.DelegationService/GetByAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<delegation_pb.GetByAddressRequest>;
    requestDeserialize: grpc.deserialize<delegation_pb.GetByAddressRequest>;
    responseSerialize: grpc.serialize<delegation_pb.GetByAddressResponse>;
    responseDeserialize: grpc.deserialize<delegation_pb.GetByAddressResponse>;
}

export const DelegationServiceService: IDelegationServiceService;

export interface IDelegationServiceServer {
    getByAddress: grpc.handleUnaryCall<delegation_pb.GetByAddressRequest, delegation_pb.GetByAddressResponse>;
}

export interface IDelegationServiceClient {
    getByAddress(request: delegation_pb.GetByAddressRequest, callback: (error: grpc.ServiceError | null, response: delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    getByAddress(request: delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    getByAddress(request: delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
}

export class DelegationServiceClient extends grpc.Client implements IDelegationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getByAddress(request: delegation_pb.GetByAddressRequest, callback: (error: grpc.ServiceError | null, response: delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    public getByAddress(request: delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    public getByAddress(request: delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
}
