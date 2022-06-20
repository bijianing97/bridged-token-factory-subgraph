# Bridged-token-factory-subgraph

## How to use this subgraph
### Install

```
npm install
```

### Build

```
npm run codegen
npm run build
```

### Deploy
```
npm run create-local
npm run deploy-local
```

## Data model

### CreateNewErc20Result
```ts
type CreateNewErc20Result @entity {
  id: ID!
  creator: Bytes!
  erc20Address: Bytes!
  name: String!
  symbol: String!
  decimals: BigInt!
  value: BigInt!
  admin: Bytes!
  txHash: Bytes!
  timestamp: BigInt!
}
```
#### example
```ts
curl -X POST -d '{ "query": "{createNewErc20Results(first:100,orderBy:timestamp,orderDirection:desc) {id,creator,erc20Address,name,symbol,decimals,value,admin,txHash,timestamp}}"}' http://localhost:8000/subgraphs/name/erc20-factory| json_pp

{
   "data" : {
      "createNewErc20Results" : [
         {
            "admin" : "0x5c8fb2f2681955a17981ca66171c2e38efb7862f",
            "creator" : "0x5c8fb2f2681955a17981ca66171c2e38efb7862f",
            "decimals" : "18",
            "erc20Address" : "0x041d8764b082f7d85290c916972bc89095d23a9f",
            "id" : "0x3bff29889359328689a111902a5e3be6fa707f9b6ffc73a3776ef9de2f164c59-2",
            "name" : "TESTC",
            "symbol" : "testc",
            "timestamp" : "1655715430",
            "txHash" : "0x3bff29889359328689a111902a5e3be6fa707f9b6ffc73a3776ef9de2f164c59",
            "value" : "10000"
         },
         {
            "admin" : "0x5c8fb2f2681955a17981ca66171c2e38efb7862f",
            "creator" : "0x5c8fb2f2681955a17981ca66171c2e38efb7862f",
            "decimals" : "18",
            "erc20Address" : "0x45c8e523dea3cd895cc10db52ebc6c7650f50a1f",
            "id" : "0xe7c1f8c343f3c7f71acb48f5ae6bc56c137264184e337edb1835b70403e9a407-2",
            "name" : "TESTB",
            "symbol" : "testb",
            "timestamp" : "1655715406",
            "txHash" : "0xe7c1f8c343f3c7f71acb48f5ae6bc56c137264184e337edb1835b70403e9a407",
            "value" : "10000"
         },
         {
            "admin" : "0x5c8fb2f2681955a17981ca66171c2e38efb7862f",
            "creator" : "0x5c8fb2f2681955a17981ca66171c2e38efb7862f",
            "decimals" : "18",
            "erc20Address" : "0x0485fabe9f29d343d8fb2fa63d8d8305f5701d83",
            "id" : "0x7af03a36e4d89954a24b825b11001cf446308371c582dc0c8f2ec7b41feddf3c-2",
            "name" : "TESTA",
            "symbol" : "testA",
            "timestamp" : "1655715274",
            "txHash" : "0x7af03a36e4d89954a24b825b11001cf446308371c582dc0c8f2ec7b41feddf3c",
            "value" : "10000"
         }
      ]
   }
}
```

### UpdateCreationPayment
```ts
type UpdateCreationPayment @entity {
  id: ID!
  previousPayment: BigInt!
  newCreationPayment: BigInt!
  txHash: Bytes!
  timestamp: BigInt!
}
```
#### example
```ts
curl -X POST -d '{ "query": "{updateCreationPayments(first:100,orderBy:timestamp,orderDirection:desc) {id,previousPayment,newCreationPayment,txHash,timestamp}}"}' http://localhost:8000/subgraphs/name/erc20-factory| json_pp

{
   "data" : {
      "updateCreationPayments" : [
         {
            "id" : "0x2334e2056f7f5662de705f34a37620e86559fd61131e647189047e6edb45dde6-0",
            "newCreationPayment" : "10000",
            "previousPayment" : "0",
            "timestamp" : "1655694650",
            "txHash" : "0x2334e2056f7f5662de705f34a37620e86559fd61131e647189047e6edb45dde6"
         }
      ]
   }
}
```
### UpdateAdmin
```ts
type UpdateAdmin @entity {
  id: ID!
  previousAdmin: Bytes!
  newAdmin: Bytes!
  txHash: Bytes!
  timestamp: BigInt!
}
```
#### example
```ts
curl -X POST -d '{ "query": "{updateAdmins(first:100,orderBy:timestamp,orderDirection:desc) {id,previousAdmin,newAdmin,txHash,timestamp}}"}' http://localhost:8000/subgraphs/name/erc20-factory| json_pp

{
   "data" : {
      "updateAdmins" : [
         {
            "id" : "0xa50b6ed75ed20ac39849800a198d042ba19944089449a4d1816f2a992f562c04-0",
            "newAdmin" : "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
            "previousAdmin" : "0x0000000000000000000000000000000000000000",
            "timestamp" : "1655694653",
            "txHash" : "0xa50b6ed75ed20ac39849800a198d042ba19944089449a4d1816f2a992f562c04"
         }
      ]
   }
}
```
