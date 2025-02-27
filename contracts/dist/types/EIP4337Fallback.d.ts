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
export interface EIP4337FallbackInterface extends utils.Interface {
    functions: {
        "NAME()": FunctionFragment;
        "VERSION()": FunctionFragment;
        "eip4337manager()": FunctionFragment;
        "executeAndRevert(address,uint256,bytes,uint8)": FunctionFragment;
        "getNonce()": FunctionFragment;
        "isValidSignature(bytes32,bytes)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "NAME" | "VERSION" | "eip4337manager" | "executeAndRevert" | "getNonce" | "isValidSignature" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "supportsInterface" | "tokensReceived" | "validateUserOp"): FunctionFragment;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip4337manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeAndRevert", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "isValidSignature", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "tokensReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [
        UserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip4337manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeAndRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    events: {};
}
export interface EIP4337Fallback extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EIP4337FallbackInterface;
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
        NAME(overrides?: CallOverrides): Promise<[string]>;
        VERSION(overrides?: CallOverrides): Promise<[string]>;
        eip4337manager(overrides?: CallOverrides): Promise<[string]>;
        executeAndRevert(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getNonce(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isValidSignature(_hash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        validateUserOp(arg0: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    NAME(overrides?: CallOverrides): Promise<string>;
    VERSION(overrides?: CallOverrides): Promise<string>;
    eip4337manager(overrides?: CallOverrides): Promise<string>;
    executeAndRevert(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getNonce(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isValidSignature(_hash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    validateUserOp(arg0: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        NAME(overrides?: CallOverrides): Promise<string>;
        VERSION(overrides?: CallOverrides): Promise<string>;
        eip4337manager(overrides?: CallOverrides): Promise<string>;
        executeAndRevert(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        isValidSignature(_hash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        validateUserOp(arg0: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        eip4337manager(overrides?: CallOverrides): Promise<BigNumber>;
        executeAndRevert(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getNonce(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isValidSignature(_hash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        validateUserOp(arg0: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip4337manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeAndRevert(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getNonce(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isValidSignature(_hash: PromiseOrValue<BytesLike>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateUserOp(arg0: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
