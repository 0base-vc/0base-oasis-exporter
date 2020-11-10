// package: validator
// file: validator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as validator_pb from "./validator_pb";

interface IValidatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getByHeight: IValidatorServiceService_IGetByHeight;
}

interface IValidatorServiceService_IGetByHeight extends grpc.MethodDefinition<validator_pb.GetByHeightRequest, validator_pb.GetByHeightResponse> {
    path: "/validator.ValidatorService/GetByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<validator_pb.GetByHeightRequest>;
    requestDeserialize: grpc.deserialize<validator_pb.GetByHeightRequest>;
    responseSerialize: grpc.serialize<validator_pb.GetByHeightResponse>;
    responseDeserialize: grpc.deserialize<validator_pb.GetByHeightResponse>;
}

export const ValidatorServiceService: IValidatorServiceService;

export interface IValidatorServiceServer {
    getByHeight: grpc.handleUnaryCall<validator_pb.GetByHeightRequest, validator_pb.GetByHeightResponse>;
}

export interface IValidatorServiceClient {
    getByHeight(request: validator_pb.GetByHeightRequest, callback: (error: grpc.ServiceError | null, response: validator_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    getByHeight(request: validator_pb.GetByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: validator_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    getByHeight(request: validator_pb.GetByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: validator_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
}

export class ValidatorServiceClient extends grpc.Client implements IValidatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getByHeight(request: validator_pb.GetByHeightRequest, callback: (error: grpc.ServiceError | null, response: validator_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    public getByHeight(request: validator_pb.GetByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: validator_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    public getByHeight(request: validator_pb.GetByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: validator_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
}
