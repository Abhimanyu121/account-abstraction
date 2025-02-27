import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type UserOperationStruct = {
    sender: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    initCode: PromiseOrValue<BytesLike>;
    callData: PromiseOrValue<BytesLike>;
    callGasLimit: PromiseOrValue<BigNumberish>;
    verificationGasLimit: PromiseOrValue<BigNumberish>;
    preVerificationGas: PromiseOrValue<BigNumberish>;
    maxFeePerGas: PromiseOrValue<BigNumberish>;
    maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
    paymasterAndData: PromiseOrValue<BytesLike>;
    signature: PromiseOrValue<BytesLike>;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface EIP4337ManagerInterface extends utils.Interface {
    functions: {
        "eip4337Fallback()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "executeAndRevert(address,uint256,bytes,uint8)": FunctionFragment;
        "getCurrentEIP4337Manager(address)": FunctionFragment;
        "getNonce()": FunctionFragment;
        "replaceEIP4337Manager(address,address,address)": FunctionFragment;
        "setup4337Modules(address)": FunctionFragment;
        "validateEip4337(address,address)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "eip4337Fallback" | "entryPoint" | "executeAndRevert" | "getCurrentEIP4337Manager" | "getNonce" | "replaceEIP4337Manager" | "setup4337Modules" | "validateEip4337" | "validateUserOp"): FunctionFragment;
    encodeFunctionData(functionFragment: "eip4337Fallback", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeAndRevert", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getCurrentEIP4337Manager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "replaceEIP4337Manager", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setup4337Modules", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "validateEip4337", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [
        UserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "eip4337Fallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeAndRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentEIP4337Manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceEIP4337Manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup4337Modules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateEip4337", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    events: {};
}
export interface EIP4337Manager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EIP4337ManagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        eip4337Fallback(overrides?: CallOverrides): Promise<[string]>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        executeAndRevert(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCurrentEIP4337Manager(safe: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            prev: string;
            manager: string;
        }>;
        getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        replaceEIP4337Manager(prevModule: PromiseOrValue<string>, oldManager: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setup4337Modules(manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateEip4337(safe: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    eip4337Fallback(overrides?: CallOverrides): Promise<string>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    executeAndRevert(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCurrentEIP4337Manager(safe: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
        prev: string;
        manager: string;
    }>;
    getNonce(overrides?: CallOverrides): Promise<BigNumber>;
    replaceEIP4337Manager(prevModule: PromiseOrValue<string>, oldManager: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setup4337Modules(manager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateEip4337(safe: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        eip4337Fallback(overrides?: CallOverrides): Promise<string>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        executeAndRevert(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getCurrentEIP4337Manager(safe: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            prev: string;
            manager: string;
        }>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        replaceEIP4337Manager(prevModule: PromiseOrValue<string>, oldManager: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setup4337Modules(manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateEip4337(safe: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        eip4337Fallback(overrides?: CallOverrides): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        executeAndRevert(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCurrentEIP4337Manager(safe: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        replaceEIP4337Manager(prevModule: PromiseOrValue<string>, oldManager: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setup4337Modules(manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateEip4337(safe: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        eip4337Fallback(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeAndRevert(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCurrentEIP4337Manager(safe: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        replaceEIP4337Manager(prevModule: PromiseOrValue<string>, oldManager: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setup4337Modules(manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateEip4337(safe: PromiseOrValue<string>, manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
