import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface GnosisSafeAccountFactoryInterface extends utils.Interface {
    functions: {
        "createAccount(address,uint256)": FunctionFragment;
        "eip4337Manager()": FunctionFragment;
        "getAddress(address,uint256)": FunctionFragment;
        "proxyFactory()": FunctionFragment;
        "safeSingleton()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createAccount" | "eip4337Manager" | "getAddress" | "proxyFactory" | "safeSingleton"): FunctionFragment;
    encodeFunctionData(functionFragment: "createAccount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "eip4337Manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddress", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "proxyFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeSingleton", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip4337Manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeSingleton", data: BytesLike): Result;
    events: {};
}
export interface GnosisSafeAccountFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GnosisSafeAccountFactoryInterface;
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
        createAccount(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        eip4337Manager(overrides?: CallOverrides): Promise<[string]>;
        getAddress(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        proxyFactory(overrides?: CallOverrides): Promise<[string]>;
        safeSingleton(overrides?: CallOverrides): Promise<[string]>;
    };
    createAccount(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    eip4337Manager(overrides?: CallOverrides): Promise<string>;
    getAddress(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    proxyFactory(overrides?: CallOverrides): Promise<string>;
    safeSingleton(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createAccount(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        eip4337Manager(overrides?: CallOverrides): Promise<string>;
        getAddress(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        proxyFactory(overrides?: CallOverrides): Promise<string>;
        safeSingleton(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        createAccount(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        eip4337Manager(overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        proxyFactory(overrides?: CallOverrides): Promise<BigNumber>;
        safeSingleton(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createAccount(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        eip4337Manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddress(owner: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxyFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeSingleton(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
