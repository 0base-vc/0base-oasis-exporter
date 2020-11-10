// package: account
// file: account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as account_pb from "./account_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getByAddress: IAccountServiceService_IGetByAddress;
}

interface IAccountServiceService_IGetByAddress extends grpc.MethodDefinition<account_pb.GetByAddressRequest, account_pb.GetByAddressResponse> {
    path: "/account.AccountService/GetByAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_pb.GetByAddressRequest>;
    requestDeserialize: grpc.deserialize<account_pb.GetByAddressRequest>;
    responseSerialize: grpc.serialize<account_pb.GetByAddressResponse>;
    responseDeserialize: grpc.deserialize<account_pb.GetByAddressResponse>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer {
    getByAddress: grpc.handleUnaryCall<account_pb.GetByAddressRequest, account_pb.GetByAddressResponse>;
}

export interface IAccountServiceClient {
    getByAddress(request: account_pb.GetByAddressRequest, callback: (error: grpc.ServiceError | null, response: account_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    getByAddress(request: account_pb.GetByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    getByAddress(request: account_pb.GetByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getByAddress(request: account_pb.GetByAddressRequest, callback: (error: grpc.ServiceError | null, response: account_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    public getByAddress(request: account_pb.GetByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
    public getByAddress(request: account_pb.GetByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.GetByAddressResponse) => void): grpc.ClientUnaryCall;
}
