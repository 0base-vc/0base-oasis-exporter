// package: debondingdelegation
// file: debonding_delegation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as debonding_delegation_pb from "./debonding_delegation_pb";

interface IDebondingDelegationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getByAddress: IDebondingDelegationServiceService_IGetByAddress;
}

interface IDebondingDelegationServiceService_IGetByAddress extends grpc.MethodDefinition<debonding_delegation_pb.GetByAddressRequest, debonding_delegation_pb.GetByAddressResponse> {
    path: "/debondingdelegation.DebondingDelegationService/GetByAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<debonding_delegation_pb.GetByAddressRequest>;
    requestDeserialize: grpc.deserialize<debonding_delegation_pb.GetByAddressRequest>;
    responseSerialize: grpc.serialize<debonding_delegation_pb.GetByAddressResponse>;
    responseDeserialize: grpc.deserialize<debonding_delegation_pb.GetByAddressResponse>;
}

export const DebondingDelegationServiceService: IDebondingDelegationServiceService;

export interface IDebondingDelegationServiceServer {
    getByAddress: grpc.handleUnaryCall<debonding_delegation_pb.GetByAddressRequest, debonding_delegation_pb.GetByAddressResponse>;
}

export interface IDebondingDelegationServiceClient {
    getByAddress(request: debonding_delegation_pb.GetByAddressRequest, callback: (error: grpc.ServiceError | null, response: debonding_delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    getByAddress(request: debonding_delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: debonding_delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    getByAddress(request: debonding_delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: debonding_delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
}

export class DebondingDelegationServiceClient extends grpc.Client implements IDebondingDelegationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getByAddress(request: debonding_delegation_pb.GetByAddressRequest, callback: (error: grpc.ServiceError | null, response: debonding_delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    public getByAddress(request: debonding_delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: debonding_delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    public getByAddress(request: debonding_delegation_pb.GetByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: debonding_delegation_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
}
