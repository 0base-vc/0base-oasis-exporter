// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var debonding_delegation_pb = require('./debonding_delegation_pb.js');

function serialize_debondingdelegation_GetByAddressRequest(arg) {
  if (!(arg instanceof debonding_delegation_pb.GetByAddressRequest)) {
    throw new Error('Expected argument of type debondingdelegation.GetByAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_debondingdelegation_GetByAddressRequest(buffer_arg) {
  return debonding_delegation_pb.GetByAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_debondingdelegation_GetByAddressResponse(arg) {
  if (!(arg instanceof debonding_delegation_pb.GetByAddressResponse)) {
    throw new Error('Expected argument of type debondingdelegation.GetByAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_debondingdelegation_GetByAddressResponse(buffer_arg) {
  return debonding_delegation_pb.GetByAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DebondingDelegationServiceService = exports.DebondingDelegationServiceService = {
  getByAddress: {
    path: '/debondingdelegation.DebondingDelegationService/GetByAddress',
    requestStream: false,
    responseStream: false,
    requestType: debonding_delegation_pb.GetByAddressRequest,
    responseType: debonding_delegation_pb.GetByAddressResponse,
    requestSerialize: serialize_debondingdelegation_GetByAddressRequest,
    requestDeserialize: deserialize_debondingdelegation_GetByAddressRequest,
    responseSerialize: serialize_debondingdelegation_GetByAddressResponse,
    responseDeserialize: deserialize_debondingdelegation_GetByAddressResponse,
  },
};

exports.DebondingDelegationServiceClient = grpc.makeGenericClientConstructor(DebondingDelegationServiceService);
