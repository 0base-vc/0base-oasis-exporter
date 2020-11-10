// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var state_pb = require('./state_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var account_pb = require('./account_pb.js');
var delegation_pb = require('./delegation_pb.js');
var debonding_delegation_pb = require('./debonding_delegation_pb.js');

function serialize_state_GetByHeightRequest(arg) {
  if (!(arg instanceof state_pb.GetByHeightRequest)) {
    throw new Error('Expected argument of type state.GetByHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_state_GetByHeightRequest(buffer_arg) {
  return state_pb.GetByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_state_GetByHeightResponse(arg) {
  if (!(arg instanceof state_pb.GetByHeightResponse)) {
    throw new Error('Expected argument of type state.GetByHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_state_GetByHeightResponse(buffer_arg) {
  return state_pb.GetByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_state_GetStakingByHeightRequest(arg) {
  if (!(arg instanceof state_pb.GetStakingByHeightRequest)) {
    throw new Error('Expected argument of type state.GetStakingByHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_state_GetStakingByHeightRequest(buffer_arg) {
  return state_pb.GetStakingByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_state_GetStakingByHeightResponse(arg) {
  if (!(arg instanceof state_pb.GetStakingByHeightResponse)) {
    throw new Error('Expected argument of type state.GetStakingByHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_state_GetStakingByHeightResponse(buffer_arg) {
  return state_pb.GetStakingByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StateServiceService = exports.StateServiceService = {
  getByHeight: {
    path: '/state.StateService/GetByHeight',
    requestStream: false,
    responseStream: false,
    requestType: state_pb.GetByHeightRequest,
    responseType: state_pb.GetByHeightResponse,
    requestSerialize: serialize_state_GetByHeightRequest,
    requestDeserialize: deserialize_state_GetByHeightRequest,
    responseSerialize: serialize_state_GetByHeightResponse,
    responseDeserialize: deserialize_state_GetByHeightResponse,
  },
  getStakingByHeight: {
    path: '/state.StateService/GetStakingByHeight',
    requestStream: false,
    responseStream: false,
    requestType: state_pb.GetStakingByHeightRequest,
    responseType: state_pb.GetStakingByHeightResponse,
    requestSerialize: serialize_state_GetStakingByHeightRequest,
    requestDeserialize: deserialize_state_GetStakingByHeightRequest,
    responseSerialize: serialize_state_GetStakingByHeightResponse,
    responseDeserialize: deserialize_state_GetStakingByHeightResponse,
  },
};

exports.StateServiceClient = grpc.makeGenericClientConstructor(StateServiceService);
