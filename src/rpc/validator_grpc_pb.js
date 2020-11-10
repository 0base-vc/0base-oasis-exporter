// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var validator_pb = require('./validator_pb.js');

function serialize_validator_GetByHeightRequest(arg) {
  if (!(arg instanceof validator_pb.GetByHeightRequest)) {
    throw new Error('Expected argument of type validator.GetByHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_validator_GetByHeightRequest(buffer_arg) {
  return validator_pb.GetByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_validator_GetByHeightResponse(arg) {
  if (!(arg instanceof validator_pb.GetByHeightResponse)) {
    throw new Error('Expected argument of type validator.GetByHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_validator_GetByHeightResponse(buffer_arg) {
  return validator_pb.GetByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ValidatorServiceService = exports.ValidatorServiceService = {
  getByHeight: {
    path: '/validator.ValidatorService/GetByHeight',
    requestStream: false,
    responseStream: false,
    requestType: validator_pb.GetByHeightRequest,
    responseType: validator_pb.GetByHeightResponse,
    requestSerialize: serialize_validator_GetByHeightRequest,
    requestDeserialize: deserialize_validator_GetByHeightRequest,
    responseSerialize: serialize_validator_GetByHeightResponse,
    responseDeserialize: deserialize_validator_GetByHeightResponse,
  },
};

exports.ValidatorServiceClient = grpc.makeGenericClientConstructor(ValidatorServiceService);
