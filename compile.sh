# generate js codes via grpc-tools
./node_modules/.bin/grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/rpc \
--grpc_out=./src/rpc \
-I ./proto \
./proto/*.proto

## generate d.ts codes
protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=./src/rpc \
-I ./proto \
./proto/*.proto