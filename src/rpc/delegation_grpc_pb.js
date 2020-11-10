// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var delegation_pb = require('./delegation_pb.js');

function serialize_delegation_GetByAddressRequest(arg) {
  if (!(arg instanceof delegation_pb.GetByAddressRequest)) {
    throw new Error('Expected argument of type delegation.GetByAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_delegation_GetByAddressRequest(buffer_arg) {
  return delegation_pb.GetByAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_delegation_GetByAddressResponse(arg) {
  if (!(arg instanceof delegation_pb.GetByAddressResponse)) {
    throw new Error('Expected argument of type delegation.GetByAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_delegation_GetByAddressResponse(buffer_arg) {
  return delegation_pb.GetByAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DelegationServiceService = exports.DelegationServiceService = {
  getByAddress: {
    path: '/delegation.DelegationService/GetByAddress',
    requestStream: false,
    responseStream: false,
    requestType: delegation_pb.GetByAddressRequest,
    responseType: delegation_pb.GetByAddressResponse,
    requestSerialize: serialize_delegation_GetByAddressRequest,
    requestDeserialize: deserialize_delegation_GetByAddressRequest,
    responseSerialize: serialize_delegation_GetByAddressResponse,
    responseDeserialize: deserialize_delegation_GetByAddressResponse,
  },
};

exports.DelegationServiceClient = grpc.makeGenericClientConstructor(DelegationServiceService);
