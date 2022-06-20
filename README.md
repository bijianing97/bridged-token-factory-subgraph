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

