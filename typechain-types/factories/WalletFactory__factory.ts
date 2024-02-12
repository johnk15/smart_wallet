/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { WalletFactory, WalletFactoryInterface } from "../WalletFactory";

const _abi = [
  {
    inputs: [],
    name: "createWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMoney",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWalletAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWalletBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "realAddressWallets",
    outputs: [
      {
        internalType: "contract Wallet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wallets",
    outputs: [
      {
        internalType: "contract Wallet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611814806100206000396000f3fe60806040526004361061008a5760003560e01c806389b08f111161005957806389b08f111461012c57806398e1b41014610169578063a9059cbb14610173578063b60d42881461019c578063f35d2a04146101a657610091565b806304d2dec61461009657806311ebbf24146100c15780632e1a7d4d146100d8578063329a27e71461010157610091565b3661009157005b600080fd5b3480156100a257600080fd5b506100ab6101e3565b6040516100b89190610d46565b60405180910390f35b3480156100cd57600080fd5b506100d661038f565b005b3480156100e457600080fd5b506100ff60048036038101906100fa9190610d9c565b610539565b005b34801561010d57600080fd5b506101166106de565b6040516101239190610dd8565b60405180910390f35b34801561013857600080fd5b50610153600480360381019061014e9190610e1f565b61088a565b6040516101609190610eab565b60405180910390f35b6101716108bd565b005b34801561017f57600080fd5b5061019a60048036038101906101959190610ec6565b6108bf565b005b6101a4610b2b565b005b3480156101b257600080fd5b506101cd60048036038101906101c89190610e1f565b610cc5565b6040516101da9190610eab565b60405180910390f35b6000806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90610f63565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166304d2dec66040518163ffffffff1660e01b8152600401602060405180830381865afa158015610364573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103889190610f98565b9250505090565b60003360405161039e90610cf8565b6103a89190610d46565b604051809103906000f0801580156103c4573d6000803e3d6000fd5b50905060008173ffffffffffffffffffffffffffffffffffffffff166304d2dec66040518163ffffffff1660e01b8152600401602060405180830381865afa158015610414573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104389190610f98565b905081600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361060b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060290610f63565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d846040518263ffffffff1660e01b81526004016106a79190610dd8565b600060405180830381600087803b1580156106c157600080fd5b505af11580156106d5573d6000803e3d6000fd5b50505050505050565b6000806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a890610f63565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663329a27e76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561085f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108839190610fda565b9250505090565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610991576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098890610f63565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166312514bba846040518263ffffffff1660e01b8152600401610a2d9190610dd8565b600060405180830381600087803b158015610a4757600080fd5b505af1158015610a5b573d6000803e3d6000fd5b505050506000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663b60d4288856040518263ffffffff1660e01b81526004016000604051808303818588803b158015610b0b57600080fd5b505af1158015610b1f573d6000803e3d6000fd5b50505050505050505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bfd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf490610f63565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663b60d4288346040518263ffffffff1660e01b81526004016000604051808303818588803b158015610ca857600080fd5b505af1158015610cbc573d6000803e3d6000fd5b50505050505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107d78061100883390190565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d3082610d05565b9050919050565b610d4081610d25565b82525050565b6000602082019050610d5b6000830184610d37565b92915050565b600080fd5b6000819050919050565b610d7981610d66565b8114610d8457600080fd5b50565b600081359050610d9681610d70565b92915050565b600060208284031215610db257610db1610d61565b5b6000610dc084828501610d87565b91505092915050565b610dd281610d66565b82525050565b6000602082019050610ded6000830184610dc9565b92915050565b610dfc81610d25565b8114610e0757600080fd5b50565b600081359050610e1981610df3565b92915050565b600060208284031215610e3557610e34610d61565b5b6000610e4384828501610e0a565b91505092915050565b6000819050919050565b6000610e71610e6c610e6784610d05565b610e4c565b610d05565b9050919050565b6000610e8382610e56565b9050919050565b6000610e9582610e78565b9050919050565b610ea581610e8a565b82525050565b6000602082019050610ec06000830184610e9c565b92915050565b60008060408385031215610edd57610edc610d61565b5b6000610eeb85828601610e0a565b9250506020610efc85828601610d87565b9150509250929050565b600082825260208201905092915050565b7f57616c6c657420646f6573206e6f742065786973740000000000000000000000600082015250565b6000610f4d601583610f06565b9150610f5882610f17565b602082019050919050565b60006020820190508181036000830152610f7c81610f40565b9050919050565b600081519050610f9281610df3565b92915050565b600060208284031215610fae57610fad610d61565b5b6000610fbc84828501610f83565b91505092915050565b600081519050610fd481610d70565b92915050565b600060208284031215610ff057610fef610d61565b5b6000610ffe84828501610fc5565b9150509291505056fe608060405234801561001057600080fd5b506040516107d73803806107d78339818101604052810190610032919061011c565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610149565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b61067f806101586000396000f3fe6080604052600436106100745760003560e01c8063329a27e71161004e578063329a27e7146100fd5780638da5cb5b14610128578063b60d428814610153578063ec5568891461015d5761007b565b806304d2dec61461008057806312514bba146100ab5780632e1a7d4d146100d45761007b565b3661007b57005b600080fd5b34801561008c57600080fd5b50610095610188565b6040516100a2919061042b565b60405180910390f35b3480156100b757600080fd5b506100d260048036038101906100cd9190610481565b610190565b005b3480156100e057600080fd5b506100fb60048036038101906100f69190610481565b6102e9565b005b34801561010957600080fd5b50610112610396565b60405161011f91906104bd565b60405180910390f35b34801561013457600080fd5b5061013d61039e565b60405161014a91906104f9565b60405180910390f35b61015b6103c2565b005b34801561016957600080fd5b506101726103c4565b60405161017f91906104f9565b60405180910390f35b600030905090565b804710156101d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ca90610597565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610263576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025a90610629565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166398e1b410826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156102cd57600080fd5b505af11580156102e1573d6000803e3d6000fd5b505050505050565b8047101561032c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032390610597565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610392573d6000803e3d6000fd5b5050565b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610415826103ea565b9050919050565b6104258161040a565b82525050565b6000602082019050610440600083018461041c565b92915050565b600080fd5b6000819050919050565b61045e8161044b565b811461046957600080fd5b50565b60008135905061047b81610455565b92915050565b60006020828403121561049757610496610446565b5b60006104a58482850161046c565b91505092915050565b6104b78161044b565b82525050565b60006020820190506104d260008301846104ae565b92915050565b60006104e3826103ea565b9050919050565b6104f3816104d8565b82525050565b600060208201905061050e60008301846104ea565b92915050565b600082825260208201905092915050565b7f54686520726571756972656420616d6f756e74206973206e6f7420696e20746860008201527f65206163636f756e740000000000000000000000000000000000000000000000602082015250565b6000610581602983610514565b915061058c82610525565b604082019050919050565b600060208201905081810360008301526105b081610574565b9050919050565b7f4f6e6c79207468652070726f78792063616e2063616c6c20746869732066756e60008201527f6374696f6e000000000000000000000000000000000000000000000000000000602082015250565b6000610613602583610514565b915061061e826105b7565b604082019050919050565b6000602082019050818103600083015261064281610606565b905091905056fea264697066735822122024040c554fd105269303e932f2f2532f4f810b86168c7e84ef8a1e69550f4c0464736f6c63430008150033a2646970667358221220ebdef887590e23261a75f535b8f67b1cd208f35146ace17c4e90b71e756e068e64736f6c63430008150033";

type WalletFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WalletFactory__factory extends ContractFactory {
  constructor(...args: WalletFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      WalletFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WalletFactory__factory {
    return super.connect(runner) as WalletFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletFactoryInterface {
    return new Interface(_abi) as WalletFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WalletFactory {
    return new Contract(address, _abi, runner) as unknown as WalletFactory;
  }
}