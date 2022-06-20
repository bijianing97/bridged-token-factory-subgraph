import {
  UpdateCreationPayment,
  UpdateAdmin,
  CreateNewErc20Result,
} from "./types/schema";
import {
  CreateERC20,
  CreationPaymentUpdated,
  AdminUpdated,
} from "./types/Factory/Factory";
import { BigInt } from "@graphprotocol/graph-ts/index";

export function handleCreationPaymentUpdate(
  event: CreationPaymentUpdated
): void {
  const id = `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`;
  let instance = UpdateCreationPayment.load(id);
  if (instance) {
    return;
  }
  instance = new UpdateCreationPayment(id);
  instance.txHash = event.transaction.hash;
  instance.previousPayment = event.params.previousPayment;
  instance.newCreationPayment = event.params.newPayment;
  instance.timestamp = event.block.timestamp;
  instance.save();
}

export function handleAdminUpdate(event: AdminUpdated): void {
  const id = `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`;
  let instance = UpdateAdmin.load(id);
  if (instance) {
    return;
  }
  instance = new UpdateAdmin(id);
  instance.txHash = event.transaction.hash;
  instance.previousAdmin = event.params.previousAdmin;
  instance.newAdmin = event.params.newAdmin;
  instance.timestamp = event.block.timestamp;
  instance.save();
}

export function handleErc20Creation(event: CreateERC20): void {
  const id = `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`;
  let instance = CreateNewErc20Result.load(id);
  if (instance) {
    return;
  }
  instance = new CreateNewErc20Result(id);
  instance.txHash = event.transaction.hash;
  instance.creator = event.params.creator;
  instance.erc20Address = event.params.token;
  instance.name = event.params.name;
  instance.symbol = event.params.symbol;
  instance.admin = event.params.admin;
  instance.decimals = BigInt.fromU32(event.params.decimals);
  instance.timestamp = event.block.timestamp;
  instance.value = event.transaction.value;
  instance.save();
}
