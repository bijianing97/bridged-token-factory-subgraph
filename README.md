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
