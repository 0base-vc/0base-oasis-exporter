// package: state
// file: state.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as state_pb from "./state_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as account_pb from "./account_pb";
import * as delegation_pb from "./delegation_pb";
import * as debonding_delegation_pb from "./debonding_delegation_pb";

interface IStateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getByHeight: IStateServiceService_IGetByHeight;
    getStakingByHeight: IStateServiceService_IGetStakingByHeight;
}

interface IStateServiceService_IGetByHeight extends grpc.MethodDefinition<state_pb.GetByHeightRequest, state_pb.GetByHeightResponse> {
    path: "/state.StateService/GetByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<state_pb.GetByHeightRequest>;
    requestDeserialize: grpc.deserialize<state_pb.GetByHeightRequest>;
    responseSerialize: grpc.serialize<state_pb.GetByHeightResponse>;
    responseDeserialize: grpc.deserialize<state_pb.GetByHeightResponse>;
}
interface IStateServiceService_IGetStakingByHeight extends grpc.MethodDefinition<state_pb.GetStakingByHeightRequest, state_pb.GetStakingByHeightResponse> {
    path: "/state.StateService/GetStakingByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<state_pb.GetStakingByHeightRequest>;
    requestDeserialize: grpc.deserialize<state_pb.GetStakingByHeightRequest>;
    responseSerialize: grpc.serialize<state_pb.GetStakingByHeightResponse>;
    responseDeserialize: grpc.deserialize<state_pb.GetStakingByHeightResponse>;
}

export const StateServiceService: IStateServiceService;

export interface IStateServiceServer {
    getByHeight: grpc.handleUnaryCall<state_pb.GetByHeightRequest, state_pb.GetByHeightResponse>;
    getStakingByHeight: grpc.handleUnaryCall<state_pb.GetStakingByHeightRequest, state_pb.GetStakingByHeightResponse>;
}

export interface IStateServiceClient {
    getByHeight(request: state_pb.GetByHeightRequest, callback: (error: grpc.ServiceError | null, response: state_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    getByHeight(request: state_pb.GetByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: state_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    getByHeight(request: state_pb.GetByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    getStakingByHeight(request: state_pb.GetStakingByHeightRequest, callback: (error: grpc.ServiceError | null, response: state_pb.GetStakingByHeightResponse) => void): grpc.ClientUnaryCall;
    getStakingByHeight(request: state_pb.GetStakingByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: state_pb.GetStakingByHeightResponse) => void): grpc.ClientUnaryCall;
    getStakingByHeight(request: state_pb.GetStakingByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_pb.GetStakingByHeightResponse) => void): grpc.ClientUnaryCall;
}

export class StateServiceClient extends grpc.Client implements IStateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getByHeight(request: state_pb.GetByHeightRequest, callback: (error: grpc.ServiceError | null, response: state_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    public getByHeight(request: state_pb.GetByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: state_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    public getByHeight(request: state_pb.GetByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_pb.GetByHeightResponse) => void): grpc.ClientUnaryCall;
    public getStakingByHeight(request: state_pb.GetStakingByHeightRequest, callback: (error: grpc.ServiceError | null, response: state_pb.GetStakingByHeightResponse) => void): grpc.ClientUnaryCall;
    public getStakingByHeight(request: state_pb.GetStakingByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: state_pb.GetStakingByHeightResponse) => void): grpc.ClientUnaryCall;
    public getStakingByHeight(request: state_pb.GetStakingByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_pb.GetStakingByHeightResponse) => void): grpc.ClientUnaryCall;
}
