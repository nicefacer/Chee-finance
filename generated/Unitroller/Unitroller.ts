// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Failure extends ethereum.Event {
  get params(): Failure__Params {
    return new Failure__Params(this);
  }
}

export class Failure__Params {
  _event: Failure;

  constructor(event: Failure) {
    this._event = event;
  }

  get error(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get info(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get detail(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NewAdmin extends ethereum.Event {
  get params(): NewAdmin__Params {
    return new NewAdmin__Params(this);
  }
}

export class NewAdmin__Params {
  _event: NewAdmin;

  constructor(event: NewAdmin) {
    this._event = event;
  }

  get oldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewImplementation extends ethereum.Event {
  get params(): NewImplementation__Params {
    return new NewImplementation__Params(this);
  }
}

export class NewImplementation__Params {
  _event: NewImplementation;

  constructor(event: NewImplementation) {
    this._event = event;
  }

  get oldImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewPendingAdmin extends ethereum.Event {
  get params(): NewPendingAdmin__Params {
    return new NewPendingAdmin__Params(this);
  }
}

export class NewPendingAdmin__Params {
  _event: NewPendingAdmin;

  constructor(event: NewPendingAdmin) {
    this._event = event;
  }

  get oldPendingAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newPendingAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewPendingImplementation extends ethereum.Event {
  get params(): NewPendingImplementation__Params {
    return new NewPendingImplementation__Params(this);
  }
}

export class NewPendingImplementation__Params {
  _event: NewPendingImplementation;

  constructor(event: NewPendingImplementation) {
    this._event = event;
  }

  get oldPendingImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newPendingImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Unitroller extends ethereum.SmartContract {
  static bind(address: Address): Unitroller {
    return new Unitroller("Unitroller", address);
  }

  _acceptAdmin(): BigInt {
    let result = super.call("_acceptAdmin", "_acceptAdmin():(uint256)", []);

    return result[0].toBigInt();
  }

  try__acceptAdmin(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_acceptAdmin", "_acceptAdmin():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _acceptImplementation(): BigInt {
    let result = super.call(
      "_acceptImplementation",
      "_acceptImplementation():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try__acceptImplementation(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_acceptImplementation",
      "_acceptImplementation():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _setPendingAdmin(newPendingAdmin: Address): BigInt {
    let result = super.call(
      "_setPendingAdmin",
      "_setPendingAdmin(address):(uint256)",
      [ethereum.Value.fromAddress(newPendingAdmin)],
    );

    return result[0].toBigInt();
  }

  try__setPendingAdmin(newPendingAdmin: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_setPendingAdmin",
      "_setPendingAdmin(address):(uint256)",
      [ethereum.Value.fromAddress(newPendingAdmin)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _setPendingImplementation(newPendingImplementation: Address): BigInt {
    let result = super.call(
      "_setPendingImplementation",
      "_setPendingImplementation(address):(uint256)",
      [ethereum.Value.fromAddress(newPendingImplementation)],
    );

    return result[0].toBigInt();
  }

  try__setPendingImplementation(
    newPendingImplementation: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_setPendingImplementation",
      "_setPendingImplementation(address):(uint256)",
      [ethereum.Value.fromAddress(newPendingImplementation)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  comptrollerImplementation(): Address {
    let result = super.call(
      "comptrollerImplementation",
      "comptrollerImplementation():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_comptrollerImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "comptrollerImplementation",
      "comptrollerImplementation():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingAdmin(): Address {
    let result = super.call("pendingAdmin", "pendingAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_pendingAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingAdmin", "pendingAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingComptrollerImplementation(): Address {
    let result = super.call(
      "pendingComptrollerImplementation",
      "pendingComptrollerImplementation():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_pendingComptrollerImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pendingComptrollerImplementation",
      "pendingComptrollerImplementation():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class _acceptAdminCall extends ethereum.Call {
  get inputs(): _acceptAdminCall__Inputs {
    return new _acceptAdminCall__Inputs(this);
  }

  get outputs(): _acceptAdminCall__Outputs {
    return new _acceptAdminCall__Outputs(this);
  }
}

export class _acceptAdminCall__Inputs {
  _call: _acceptAdminCall;

  constructor(call: _acceptAdminCall) {
    this._call = call;
  }
}

export class _acceptAdminCall__Outputs {
  _call: _acceptAdminCall;

  constructor(call: _acceptAdminCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _acceptImplementationCall extends ethereum.Call {
  get inputs(): _acceptImplementationCall__Inputs {
    return new _acceptImplementationCall__Inputs(this);
  }

  get outputs(): _acceptImplementationCall__Outputs {
    return new _acceptImplementationCall__Outputs(this);
  }
}

export class _acceptImplementationCall__Inputs {
  _call: _acceptImplementationCall;

  constructor(call: _acceptImplementationCall) {
    this._call = call;
  }
}

export class _acceptImplementationCall__Outputs {
  _call: _acceptImplementationCall;

  constructor(call: _acceptImplementationCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _setPendingAdminCall extends ethereum.Call {
  get inputs(): _setPendingAdminCall__Inputs {
    return new _setPendingAdminCall__Inputs(this);
  }

  get outputs(): _setPendingAdminCall__Outputs {
    return new _setPendingAdminCall__Outputs(this);
  }
}

export class _setPendingAdminCall__Inputs {
  _call: _setPendingAdminCall;

  constructor(call: _setPendingAdminCall) {
    this._call = call;
  }

  get newPendingAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class _setPendingAdminCall__Outputs {
  _call: _setPendingAdminCall;

  constructor(call: _setPendingAdminCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _setPendingImplementationCall extends ethereum.Call {
  get inputs(): _setPendingImplementationCall__Inputs {
    return new _setPendingImplementationCall__Inputs(this);
  }

  get outputs(): _setPendingImplementationCall__Outputs {
    return new _setPendingImplementationCall__Outputs(this);
  }
}

export class _setPendingImplementationCall__Inputs {
  _call: _setPendingImplementationCall;

  constructor(call: _setPendingImplementationCall) {
    this._call = call;
  }

  get newPendingImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class _setPendingImplementationCall__Outputs {
  _call: _setPendingImplementationCall;

  constructor(call: _setPendingImplementationCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}