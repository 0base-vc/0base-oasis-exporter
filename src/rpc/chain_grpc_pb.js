// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chain_pb = require('./chain_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_chain_GetConstantsRequest(arg) {
  if (!(arg instanceof chain_pb.GetConstantsRequest)) {
    throw new Error('Expected argument of type chain.GetConstantsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetConstantsRequest(buffer_arg) {
  return chain_pb.GetConstantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_GetConstantsResponse(arg) {
  if (!(arg instanceof chain_pb.GetConstantsResponse)) {
    throw new Error('Expected argument of type chain.GetConstantsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetConstantsResponse(buffer_arg) {
  return chain_pb.GetConstantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_GetHeadRequest(arg) {
  if (!(arg instanceof chain_pb.GetHeadRequest)) {
    throw new Error('Expected argument of type chain.GetHeadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetHeadRequest(buffer_arg) {
  return chain_pb.GetHeadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_GetHeadResponse(arg) {
  if (!(arg instanceof chain_pb.GetHeadResponse)) {
    throw new Error('Expected argument of type chain.GetHeadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetHeadResponse(buffer_arg) {
  return chain_pb.GetHeadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_GetMetaByHeightRequest(arg) {
  if (!(arg instanceof chain_pb.GetMetaByHeightRequest)) {
    throw new Error('Expected argument of type chain.GetMetaByHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetMetaByHeightRequest(buffer_arg) {
  return chain_pb.GetMetaByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_GetMetaByHeightResponse(arg) {
  if (!(arg instanceof chain_pb.GetMetaByHeightResponse)) {
    throw new Error('Expected argument of type chain.GetMetaByHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetMetaByHeightResponse(buffer_arg) {
  return chain_pb.GetMetaByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_GetStatusRequest(arg) {
  if (!(arg instanceof chain_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type chain.GetStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetStatusRequest(buffer_arg) {
  return chain_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_GetStatusResponse(arg) {
  if (!(arg instanceof chain_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type chain.GetStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_GetStatusResponse(buffer_arg) {
  return chain_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChainServiceService = exports.ChainServiceService = {
  getConstants: {
    path: '/chain.ChainService/GetConstants',
    requestStream: false,
    responseStream: false,
    requestType: chain_pb.GetConstantsRequest,
    responseType: chain_pb.GetConstantsResponse,
    requestSerialize: serialize_chain_GetConstantsRequest,
    requestDeserialize: deserialize_chain_GetConstantsRequest,
    responseSerialize: serialize_chain_GetConstantsResponse,
    responseDeserialize: deserialize_chain_GetConstantsResponse,
  },
  getHead: {
    path: '/chain.ChainService/GetHead',
    requestStream: false,
    responseStream: false,
    requestType: chain_pb.GetHeadRequest,
    responseType: chain_pb.GetHeadResponse,
    requestSerialize: serialize_chain_GetHeadRequest,
    requestDeserialize: deserialize_chain_GetHeadRequest,
    responseSerialize: serialize_chain_GetHeadResponse,
    responseDeserialize: deserialize_chain_GetHeadResponse,
  },
  getStatus: {
    path: '/chain.ChainService/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: chain_pb.GetStatusRequest,
    responseType: chain_pb.GetStatusResponse,
    requestSerialize: serialize_chain_GetStatusRequest,
    requestDeserialize: deserialize_chain_GetStatusRequest,
    responseSerialize: serialize_chain_GetStatusResponse,
    responseDeserialize: deserialize_chain_GetStatusResponse,
  },
  getMetaByHeight: {
    path: '/chain.ChainService/GetMetaByHeight',
    requestStream: false,
    responseStream: false,
    requestType: chain_pb.GetMetaByHeightRequest,
    responseType: chain_pb.GetMetaByHeightResponse,
    requestSerialize: serialize_chain_GetMetaByHeightRequest,
    requestDeserialize: deserialize_chain_GetMetaByHeightRequest,
    responseSerialize: serialize_chain_GetMetaByHeightResponse,
    responseDeserialize: deserialize_chain_GetMetaByHeightResponse,
  },
};

exports.ChainServiceClient = grpc.makeGenericClientConstructor(ChainServiceService);
