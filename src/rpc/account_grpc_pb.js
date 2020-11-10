// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var account_pb = require('./account_pb.js');

function serialize_account_GetByAddressRequest(arg) {
  if (!(arg instanceof account_pb.GetByAddressRequest)) {
    throw new Error('Expected argument of type account.GetByAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_GetByAddressRequest(buffer_arg) {
  return account_pb.GetByAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_GetByAddressResponse(arg) {
  if (!(arg instanceof account_pb.GetByAddressResponse)) {
    throw new Error('Expected argument of type account.GetByAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_GetByAddressResponse(buffer_arg) {
  return account_pb.GetByAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountServiceService = exports.AccountServiceService = {
  getByAddress: {
    path: '/account.AccountService/GetByAddress',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.GetByAddressRequest,
    responseType: account_pb.GetByAddressResponse,
    requestSerialize: serialize_account_GetByAddressRequest,
    requestDeserialize: deserialize_account_GetByAddressRequest,
    responseSerialize: serialize_account_GetByAddressResponse,
    responseDeserialize: deserialize_account_GetByAddressResponse,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
