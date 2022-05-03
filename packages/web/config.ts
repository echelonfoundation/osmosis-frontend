import { ChainInfoWithExplorer } from "./stores/chain";
import { Bech32Address } from "@keplr-wallet/cosmos";
import { IBCAsset } from "./stores/assets";

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: IBCAsset[] = [
  {
    counterpartyChainId: "cosmoshub-4",
    sourceChannelId: "channel-0",
    destChannelId: "channel-141",
    coinMinimalDenom: "uatom",
  },
  {
    counterpartyChainId: "columbus-5",
    sourceChannelId: "channel-72",
    destChannelId: "channel-1",
    coinMinimalDenom: "uluna",
  },
  {
    counterpartyChainId: "crypto-org-chain-mainnet-1",
    sourceChannelId: "channel-5",
    destChannelId: "channel-10",
    coinMinimalDenom: "basecro",
  },
  {
    counterpartyChainId: "columbus-5",
    sourceChannelId: "channel-72",
    destChannelId: "channel-1",
    coinMinimalDenom: "uusd",
  },
  {
    counterpartyChainId: "secret-4",
    sourceChannelId: "channel-88",
    destChannelId: "channel-1",
    coinMinimalDenom: "uscrt",
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-42",
    destChannelId: "channel-0",
    coinMinimalDenom: "ujuno",
  },
  {
    counterpartyChainId: "juno-1",
    sourceChannelId: "channel-169",
    destChannelId: "channel-47",
    coinMinimalDenom:
      "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
    ics20ContractAddress:
      "juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
  },
  {
    counterpartyChainId: "core-1",
    sourceChannelId: "channel-4",
    destChannelId: "channel-6",
    coinMinimalDenom: "uxprt",
  },
  {
    counterpartyChainId: "core-1",
    sourceChannelId: "channel-4",
    destChannelId: "channel-6",
    coinMinimalDenom:
      "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
    ibcTransferPathDenom:
      "transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
  },
  {
    counterpartyChainId: "columbus-5",
    sourceChannelId: "channel-72",
    destChannelId: "channel-1",
    coinMinimalDenom: "ukrw",
  },
  {
    counterpartyChainId: "akashnet-2",
    sourceChannelId: "channel-1",
    destChannelId: "channel-9",
    coinMinimalDenom: "uakt",
  },
  {
    counterpartyChainId: "regen-1",
    sourceChannelId: "channel-8",
    destChannelId: "channel-1",
    coinMinimalDenom: "uregen",
  },
  {
    counterpartyChainId: "sentinelhub-2",
    sourceChannelId: "channel-2",
    destChannelId: "channel-0",
    coinMinimalDenom: "udvpn",
  },
  {
    counterpartyChainId: "irishub-1",
    sourceChannelId: "channel-6",
    destChannelId: "channel-3",
    coinMinimalDenom: "uiris",
  },
  {
    counterpartyChainId: "iov-mainnet-ibc",
    sourceChannelId: "channel-15",
    destChannelId: "channel-2",
    coinMinimalDenom: "uiov",
  },
  {
    counterpartyChainId: "emoney-3",
    sourceChannelId: "channel-37",
    destChannelId: "channel-0",
    coinMinimalDenom: "ungm",
  },
  {
    counterpartyChainId: "emoney-3",
    sourceChannelId: "channel-37",
    destChannelId: "channel-0",
    coinMinimalDenom: "eeur",
  },
  {
    counterpartyChainId: "microtick-1",
    sourceChannelId: "channel-39",
    destChannelId: "channel-16",
    coinMinimalDenom: "utick",
  },
  {
    counterpartyChainId: "likecoin-mainnet-2",
    sourceChannelId: "channel-53",
    destChannelId: "channel-3",
    coinMinimalDenom: "nanolike",
  },
  {
    counterpartyChainId: "impacthub-3",
    sourceChannelId: "channel-38",
    destChannelId: "channel-4",
    coinMinimalDenom: "uixo",
  },
  {
    counterpartyChainId: "bitcanna-1",
    sourceChannelId: "channel-51",
    destChannelId: "channel-1",
    coinMinimalDenom: "ubcna",
  },
  {
    counterpartyChainId: "bitsong-2b",
    sourceChannelId: "channel-73",
    destChannelId: "channel-0",
    coinMinimalDenom: "ubtsg",
  },
  {
    counterpartyChainId: "kichain-2",
    sourceChannelId: "channel-77",
    destChannelId: "channel-0",
    coinMinimalDenom: "uxki",
  },
  {
    counterpartyChainId: "panacea-3",
    sourceChannelId: "channel-82",
    destChannelId: "channel-1",
    coinMinimalDenom: "umed",
  },
  {
    counterpartyChainId: "bostrom",
    sourceChannelId: "channel-95",
    destChannelId: "channel-2",
    coinMinimalDenom: "boot",
  },
  {
    counterpartyChainId: "comdex-1",
    sourceChannelId: "channel-87",
    destChannelId: "channel-1",
    coinMinimalDenom: "ucmdx",
  },
  {
    counterpartyChainId: "cheqd-mainnet-1",
    sourceChannelId: "channel-108",
    destChannelId: "channel-0",
    coinMinimalDenom: "ncheq",
  },
  {
    counterpartyChainId: "stargaze-1",
    sourceChannelId: "channel-75",
    destChannelId: "channel-0",
    coinMinimalDenom: "ustars",
  },
  {
    counterpartyChainId: "chihuahua-1",
    sourceChannelId: "channel-113",
    destChannelId: "channel-7",
    coinMinimalDenom: "uhuahua",
  },
  {
    counterpartyChainId: "lum-network-1",
    sourceChannelId: "channel-115",
    destChannelId: "channel-3",
    coinMinimalDenom: "ulum",
  },
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
  {
    rpc: "https://rpc-osmosis.keplr.app",
    rest: "https://lcd-osmosis.keplr.app",
    chainId: "osmosis-1",
    chainName: "Osmosis",
    stakeCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      coinImageUrl: "/tokens/osmosis.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("osmo"),
    currencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        coinImageUrl: "/tokens/osmosis.svg",
      },
      {
        coinDenom: "ION",
        coinMinimalDenom: "uion",
        coinDecimals: 6,
        coinGeckoId: "ion",
        coinImageUrl: "/tokens/ion.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        coinImageUrl: "/tokens/osmosis.svg",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/osmosis/txs/{txHash}",
  },
  {
    rpc: "https://rpc-cosmoshub.keplr.app",
    rest: "https://lcd-cosmoshub.keplr.app",
    chainId: "cosmoshub-4",
    chainName: "Cosmos Hub",
    stakeCurrency: {
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
      coinImageUrl: "/tokens/cosmos.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cosmos"),
    currencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        coinImageUrl: "/tokens/cosmos.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        coinImageUrl: "/tokens/cosmos.svg",
      },
    ],
    coinType: 118,
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/cosmos/txs/{txHash}",
  },
  {
    rpc: "https://rpc-columbus.keplr.app",
    rest: "https://lcd-columbus.keplr.app",
    chainId: "columbus-5",
    chainName: "Terra",
    stakeCurrency: {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna",
      coinImageUrl: "/tokens/luna.png",
    },
    bip44: {
      coinType: 330,
    },
    bech32Config: Bech32Address.defaultBech32Config("terra"),
    currencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
        coinImageUrl: "/tokens/luna.png",
      },
      {
        coinDenom: "UST",
        coinMinimalDenom: "uusd",
        coinDecimals: 6,
        coinGeckoId: "terrausd",
        coinImageUrl: "/tokens/ust.png",
      },
      {
        coinDenom: "KRT",
        coinMinimalDenom: "ukrw",
        coinDecimals: 6,
        coinGeckoId: "terra-krw",
        coinImageUrl: "/tokens/krt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
        coinImageUrl: "/tokens/luna.png",
      },
      {
        coinDenom: "UST",
        coinMinimalDenom: "uusd",
        coinDecimals: 6,
        coinGeckoId: "terrausd",
        coinImageUrl: "/tokens/ust.png",
      },
    ],
    gasPriceStep: {
      low: 0.015,
      average: 0.015,
      high: 0.015,
    },
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://finder.terra.money/columbus-5/tx/{txHash}",
  },
  {
    rpc: "https://rpc-secret.keplr.app",
    rest: "https://lcd-secret.keplr.app",
    chainId: "secret-4",
    chainName: "Secret Network",
    stakeCurrency: {
      coinDenom: "SCRT",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret",
      coinImageUrl: "/tokens/scrt.svg",
    },
    bip44: {
      coinType: 529,
    },
    bech32Config: Bech32Address.defaultBech32Config("secret"),
    currencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
        coinImageUrl: "/tokens/scrt.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
        coinImageUrl: "/tokens/scrt.svg",
      },
    ],
    coinType: 118,
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx:
      "https://secretnodes.com/secret/chains/secret-4/transactions/{txHash}",
  },
  {
    rpc: "https://rpc-akash.keplr.app",
    rest: "https://lcd-akash.keplr.app",
    chainId: "akashnet-2",
    chainName: "Akash",
    stakeCurrency: {
      coinDenom: "AKT",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "akash-network",
      coinImageUrl: "/tokens/akt.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("akash"),
    currencies: [
      {
        coinDenom: "AKT",
        coinMinimalDenom: "uakt",
        coinDecimals: 6,
        coinGeckoId: "akash-network",
        coinImageUrl: "/tokens/akt.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AKT",
        coinMinimalDenom: "uakt",
        coinDecimals: 6,
        coinGeckoId: "akash-network",
        coinImageUrl: "/tokens/akt.svg",
      },
    ],
    coinType: 118,
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://www.mintscan.io/akash/txs/{txHash}",
  },
  {
    rpc: "https://rpc-regen.keplr.app",
    rest: "https://lcd-regen.keplr.app",
    chainId: "regen-1",
    chainName: "Regen Network",
    stakeCurrency: {
      coinDenom: "REGEN",
      coinMinimalDenom: "uregen",
      coinDecimals: 6,
      coinImageUrl: "/tokens/regen.png",
      coinGeckoId: "regen",
    },
    bip44: { coinType: 118 },
    bech32Config: Bech32Address.defaultBech32Config("regen"),
    currencies: [
      {
        coinDenom: "REGEN",
        coinMinimalDenom: "uregen",
        coinDecimals: 6,
        coinImageUrl: "/tokens/regen.png",
        coinGeckoId: "regen",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "REGEN",
        coinMinimalDenom: "uregen",
        coinDecimals: 6,
        coinImageUrl: "/tokens/regen.png",
        coinGeckoId: "regen",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://regen.aneka.io/txs/{txHash}",
  },
  {
    rpc: "https://rpc-sentinel.keplr.app",
    rest: "https://lcd-sentinel.keplr.app",
    chainId: "sentinelhub-2",
    chainName: "Sentinel",
    stakeCurrency: {
      coinDenom: "DVPN",
      coinMinimalDenom: "udvpn",
      coinDecimals: 6,
      coinGeckoId: "sentinel",
      coinImageUrl: "/tokens/dvpn.png",
    },
    bip44: { coinType: 118 },
    bech32Config: Bech32Address.defaultBech32Config("sent"),
    currencies: [
      {
        coinDenom: "DVPN",
        coinMinimalDenom: "udvpn",
        coinDecimals: 6,
        coinGeckoId: "sentinel",
        coinImageUrl: "/tokens/dvpn.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DVPN",
        coinMinimalDenom: "udvpn",
        coinDecimals: 6,
        coinGeckoId: "sentinel",
        coinImageUrl: "/tokens/dvpn.png",
      },
    ],
    explorerUrlToTx: "https://www.mintscan.io/sentinel/txs/{txHash}",
    features: ["stargate", "ibc-transfer"],
  },
  {
    rpc: "https://rpc-persistence.keplr.app",
    rest: "https://lcd-persistence.keplr.app",
    chainId: "core-1",
    chainName: "Persistence",
    stakeCurrency: {
      coinDenom: "XPRT",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence",
      coinImageUrl: "/tokens/xprt.png",
    },
    bip44: {
      coinType: 750,
    },
    bech32Config: Bech32Address.defaultBech32Config("persistence"),
    currencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
        coinImageUrl: "/tokens/xprt.png",
      },
      {
        coinDenom: "PSTAKE",
        coinMinimalDenom:
          "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
        coinDecimals: 18,
        coinGeckoId: "pool:pstake",
        coinImageUrl: "/tokens/pstake.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
        coinImageUrl: "/tokens/xprt.png",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://www.mintscan.io/persistence/txs/{txHash}",
  },
  {
    rpc: "https://rpc-iris.keplr.app",
    rest: "https://lcd-iris.keplr.app",
    chainId: "irishub-1",
    chainName: "IRISnet",
    stakeCurrency: {
      coinDenom: "IRIS",
      coinMinimalDenom: "uiris",
      coinDecimals: 6,
      coinGeckoId: "iris-network",
      coinImageUrl: "/tokens/iris.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("iaa"),
    currencies: [
      {
        coinDenom: "IRIS",
        coinMinimalDenom: "uiris",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
        coinImageUrl: "/tokens/iris.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IRIS",
        coinMinimalDenom: "uiris",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
        coinImageUrl: "/tokens/iris.svg",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://www.mintscan.io/iris/txs/{txHash}",
  },
  {
    rpc: "https://rpc-crypto-org.keplr.app/",
    rest: "https://lcd-crypto-org.keplr.app/",
    chainId: "crypto-org-chain-mainnet-1",
    chainName: "Crypto.org",
    stakeCurrency: {
      coinDenom: "CRO",
      coinMinimalDenom: "basecro",
      coinDecimals: 8,
      coinGeckoId: "crypto-com-chain",
      coinImageUrl: "/tokens/cro.png",
    },
    bip44: {
      coinType: 394,
    },
    bech32Config: Bech32Address.defaultBech32Config("cro"),
    currencies: [
      {
        coinDenom: "CRO",
        coinMinimalDenom: "basecro",
        coinDecimals: 8,
        coinGeckoId: "crypto-com-chain",
        coinImageUrl: "/tokens/cro.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CRO",
        coinMinimalDenom: "basecro",
        coinDecimals: 8,
        coinGeckoId: "crypto-com-chain",
        coinImageUrl: "/tokens/cro.png",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://www.mintscan.io/crypto-org/txs/{txHash}",
  },
  {
    rpc: "https://rpc-iov.keplr.app",
    rest: "https://lcd-iov.keplr.app",
    chainId: "iov-mainnet-ibc",
    chainName: "Starname",
    stakeCurrency: {
      coinDenom: "IOV",
      coinMinimalDenom: "uiov",
      coinDecimals: 6,
      coinGeckoId: "starname",
      coinImageUrl: "/tokens/iov.png",
    },
    bip44: {
      coinType: 234,
    },
    bech32Config: Bech32Address.defaultBech32Config("star"),
    currencies: [
      {
        coinDenom: "IOV",
        coinMinimalDenom: "uiov",
        coinDecimals: 6,
        coinGeckoId: "starname",
        coinImageUrl: "/tokens/iov.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IOV",
        coinMinimalDenom: "uiov",
        coinDecimals: 6,
        coinGeckoId: "starname",
        coinImageUrl: "/tokens/iov.png",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://www.mintscan.io/starname/txs/{txHash}",
  },
  {
    rpc: "https://rpc-emoney.keplr.app",
    rest: "https://lcd-emoney.keplr.app",
    chainId: "emoney-3",
    chainName: "e-Money",
    stakeCurrency: {
      coinDenom: "NGM",
      coinMinimalDenom: "ungm",
      coinDecimals: 6,
      coinGeckoId: "e-money",
      coinImageUrl: "/tokens/ngm.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("emoney"),
    currencies: [
      {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "e-money",
        coinImageUrl: "/tokens/ngm.png",
      },
      {
        coinDenom: "EEUR",
        coinMinimalDenom: "eeur",
        coinDecimals: 6,
        coinGeckoId: "e-money-eur",
        coinImageUrl: "/tokens/eeur.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "e-money",
        coinImageUrl: "/tokens/ngm.png",
      },
    ],
    gasPriceStep: {
      low: 1,
      average: 1,
      high: 1,
    },
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://emoney.bigdipper.live/transactions/{txHash}",
  },
  {
    rpc: "https://rpc-juno.keplr.app",
    rest: "https://lcd-juno.keplr.app",
    chainId: "juno-1",
    chainName: "Juno",
    stakeCurrency: {
      coinDenom: "JUNO",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno-network",
      coinImageUrl: "/tokens/juno.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("juno"),
    currencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        coinImageUrl: "/tokens/juno.svg",
      },
      {
        type: "cw20",
        contractAddress:
          "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        coinDenom: "NETA",
        coinMinimalDenom:
          "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr:NETA",
        coinDecimals: 6,
        coinImageUrl: "/tokens/neta.svg",
        coinGeckoId: "neta",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        coinImageUrl: "/tokens/juno.svg",
      },
    ],
    features: ["stargate", "ibc-transfer", "cosmwasm", "wasmd_0.24+"],
    explorerUrlToTx: "https://www.mintscan.io/juno/txs/{txHash}",
  },
  {
    rpc: "https://rpc-microtick.keplr.app",
    rest: "https://lcd-microtick.keplr.app",
    chainId: "microtick-1",
    chainName: "Microtick",
    stakeCurrency: {
      coinDenom: "TICK",
      coinMinimalDenom: "utick",
      coinDecimals: 6,
      coinGeckoId: "pool:utick",
      coinImageUrl: "/tokens/tick.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("micro"),
    currencies: [
      {
        coinDenom: "TICK",
        coinMinimalDenom: "utick",
        coinDecimals: 6,
        coinGeckoId: "pool:utick",
        coinImageUrl: "/tokens/tick.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TICK",
        coinMinimalDenom: "utick",
        coinDecimals: 6,
        coinGeckoId: "pool:utick",
        coinImageUrl: "/tokens/tick.svg",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://explorer.microtick.zone/transactions/{txHash}",
  },
  {
    rpc: "https://mainnet-node.like.co/rpc",
    rest: "https://mainnet-node.like.co",
    chainId: "likecoin-mainnet-2",
    chainName: "LikeCoin",
    stakeCurrency: {
      coinDenom: "LIKE",
      coinMinimalDenom: "nanolike",
      coinDecimals: 9,
      coinGeckoId: "likecoin",
      coinImageUrl: "/tokens/likecoin.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cosmos"),
    currencies: [
      {
        coinDenom: "LIKE",
        coinMinimalDenom: "nanolike",
        coinDecimals: 9,
        coinGeckoId: "likecoin",
        coinImageUrl: "/tokens/likecoin.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LIKE",
        coinMinimalDenom: "nanolike",
        coinDecimals: 9,
        coinGeckoId: "likecoin",
        coinImageUrl: "/tokens/likecoin.svg",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://likecoin.bigdipper.live/transactions/{txHash}",
  },
  {
    rpc: "https://rpc-impacthub.keplr.app",
    rest: "https://lcd-impacthub.keplr.app",
    chainId: "impacthub-3",
    chainName: "IXO",
    stakeCurrency: {
      coinDenom: "IXO",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "pool:uixo",
      coinImageUrl: "/tokens/ixo.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("ixo"),
    currencies: [
      {
        coinDenom: "IXO",
        coinMinimalDenom: "uixo",
        coinDecimals: 6,
        coinGeckoId: "pool:uixo",
        coinImageUrl: "/tokens/ixo.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IXO",
        coinMinimalDenom: "uixo",
        coinDecimals: 6,
        coinGeckoId: "pool:uixo",
        coinImageUrl: "/tokens/ixo.png",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://blockscan.ixo.world/transactions/{txHash}",
  },
  {
    rpc: "https://rpc.bitcanna.io",
    rest: "https://lcd.bitcanna.io",
    chainId: "bitcanna-1",
    chainName: "BitCanna",
    stakeCurrency: {
      coinDenom: "BCNA",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna",
      coinImageUrl: "/tokens/bcna.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("bcna"),
    currencies: [
      {
        coinDenom: "BCNA",
        coinMinimalDenom: "ubcna",
        coinDecimals: 6,
        coinGeckoId: "bitcanna",
        coinImageUrl: "/tokens/bcna.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BCNA",
        coinMinimalDenom: "ubcna",
        coinDecimals: 6,
        coinGeckoId: "bitcanna",
        coinImageUrl: "/tokens/bcna.svg",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://www.mintscan.io/bitcanna/txs/{txHash}",
  },
  {
    rpc: "https://rpc.explorebitsong.com",
    rest: "https://lcd.explorebitsong.com",
    chainId: "bitsong-2b",
    chainName: "BitSong",
    stakeCurrency: {
      coinDenom: "BTSG",
      coinMinimalDenom: "ubtsg",
      coinDecimals: 6,
      coinGeckoId: "pool:ubtsg",
      coinImageUrl: "/tokens/btsg.svg",
    },
    bip44: {
      coinType: 639,
    },
    bech32Config: Bech32Address.defaultBech32Config("bitsong"),
    currencies: [
      {
        coinDenom: "BTSG",
        coinMinimalDenom: "ubtsg",
        coinDecimals: 6,
        coinGeckoId: "pool:ubtsg",
        coinImageUrl: "/tokens/btsg.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BTSG",
        coinMinimalDenom: "ubtsg",
        coinDecimals: 6,
        coinGeckoId: "pool:ubtsg",
        coinImageUrl: "/tokens/btsg.svg",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://explorebitsong.com/transactions/{txHash}",
  },
  {
    rpc: "https://rpc-mainnet.blockchain.ki",
    rest: "https://api-mainnet.blockchain.ki",
    chainId: "kichain-2",
    chainName: "Ki",
    stakeCurrency: {
      coinDenom: "XKI",
      coinMinimalDenom: "uxki",
      coinDecimals: 6,
      coinGeckoId: "pool:uxki",
      coinImageUrl: "/tokens/ki.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("ki"),
    currencies: [
      {
        coinDenom: "XKI",
        coinMinimalDenom: "uxki",
        coinDecimals: 6,
        coinGeckoId: "pool:uxki",
        coinImageUrl: "/tokens/ki.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XKI",
        coinMinimalDenom: "uxki",
        coinDecimals: 6,
        coinGeckoId: "pool:uxki",
        coinImageUrl: "/tokens/ki.svg",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://www.mintscan.io/ki-chain/txs/{txHash}",
  },
  {
    rpc: "https://rpc.gopanacea.org",
    rest: "https://api.gopanacea.org",
    chainId: "panacea-3",
    chainName: "MediBloc",
    stakeCurrency: {
      coinDenom: "MED",
      coinMinimalDenom: "umed",
      coinDecimals: 6,
      coinGeckoId: "medibloc",
      coinImageUrl: "/tokens/med.png",
    },
    bip44: {
      coinType: 371,
    },
    bech32Config: Bech32Address.defaultBech32Config("panacea"),
    currencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
        coinImageUrl: "/tokens/med.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
        coinImageUrl: "/tokens/med.png",
      },
    ],
    gasPriceStep: {
      low: 5,
      average: 7,
      high: 9,
    },
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://www.mintscan.io/medibloc/txs/{txHash}",
  },
  {
    rpc: "https://rpc.bostrom.cybernode.ai",
    rest: "https://lcd.bostrom.cybernode.ai",
    chainId: "bostrom",
    chainName: "Bostrom",
    stakeCurrency: {
      coinDenom: "BOOT",
      coinMinimalDenom: "boot",
      coinDecimals: 0,
      // coinGeckoId: 'pool:boot',
      coinImageUrl: "/tokens/boot.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("bostrom"),
    currencies: [
      {
        coinDenom: "BOOT",
        coinMinimalDenom: "boot",
        coinDecimals: 0,
        // coinGeckoId: 'pool:boot',
        coinImageUrl: "/tokens/boot.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BOOT",
        coinMinimalDenom: "boot",
        coinDecimals: 0,
        // coinGeckoId: 'pool:boot',
        coinImageUrl: "/tokens/boot.png",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://cyb.ai/network/bostrom/tx/{txHash}",
  },
  {
    rpc: "https://rpc.comdex.one",
    rest: "https://rest.comdex.one",
    chainId: "comdex-1",
    chainName: "Comdex",
    stakeCurrency: {
      coinDenom: "CMDX",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
      coinGeckoId: "comdex",
      coinImageUrl: "/tokens/cmdx.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("comdex"),
    currencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
        coinImageUrl: "/tokens/cmdx.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
        coinImageUrl: "/tokens/cmdx.png",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://www.mintscan.io/comdex/txs/{txHash}",
  },
  {
    rpc: "https://rpc.cheqd.net",
    rest: "https://api.cheqd.net",
    chainId: "cheqd-mainnet-1",
    chainName: "cheqd",
    stakeCurrency: {
      coinDenom: "CHEQ",
      coinMinimalDenom: "ncheq",
      coinDecimals: 9,
      coinGeckoId: "cheqd-network",
      coinImageUrl: "/tokens/cheq.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cheqd"),
    currencies: [
      {
        coinDenom: "CHEQ",
        coinMinimalDenom: "ncheq",
        coinDecimals: 9,
        coinGeckoId: "cheqd-network",
        coinImageUrl: "/tokens/cheq.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CHEQ",
        coinMinimalDenom: "ncheq",
        coinDecimals: 9,
        coinGeckoId: "cheqd-network",
        coinImageUrl: "/tokens/cheq.svg",
      },
    ],
    gasPriceStep: {
      low: 25,
      average: 30,
      high: 50,
    },
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://explorer.cheqd.io/transactions/{txHash}",
  },
  {
    rpc: "https://rpc.stargaze-apis.com",
    rest: "https://rest.stargaze-apis.com",
    chainId: "stargaze-1",
    chainName: "Stargaze",
    stakeCurrency: {
      coinDenom: "STARS",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "pool:ustars",
      coinImageUrl: "/tokens/stars.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("stars"),
    currencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "pool:ustars",
        coinImageUrl: "/tokens/stars.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "pool:ustars",
        coinImageUrl: "/tokens/stars.png",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://www.mintscan.io/stargaze/txs/{txHash}",
  },
  {
    rpc: "https://rpc.chihuahua.wtf",
    rest: "https://api.chihuahua.wtf",
    chainId: "chihuahua-1",
    chainName: "Chihuahua",
    stakeCurrency: {
      coinDenom: "HUAHUA",
      coinMinimalDenom: "uhuahua",
      coinDecimals: 6,
      coinGeckoId: "pool:uhuahua",
      coinImageUrl: "/tokens/huahua.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("chihuahua"),
    currencies: [
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
        coinGeckoId: "pool:uhuahua",
        coinImageUrl: "/tokens/huahua.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
        coinGeckoId: "pool:uhuahua",
        coinImageUrl: "/tokens/huahua.png",
      },
    ],
    gasPriceStep: {
      low: 0.025,
      average: 0.03,
      high: 0.035,
    },
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
    explorerUrlToTx: "https://ping.pub/chihuahua/tx/{txHash}",
  },
  {
    rpc: "https://node0.mainnet.lum.network/rpc",
    rest: "https://node0.mainnet.lum.network/rest",
    chainId: "lum-network-1",
    chainName: "Lum Network",
    stakeCurrency: {
      coinDenom: "LUM",
      coinMinimalDenom: "ulum",
      coinDecimals: 6,
      coinGeckoId: "pool:ulum",
      coinImageUrl: "/tokens/lum.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("lum"),
    currencies: [
      {
        coinDenom: "LUM",
        coinMinimalDenom: "ulum",
        coinDecimals: 6,
        coinGeckoId: "pool:ulum",
        coinImageUrl: "/tokens/lum.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUM",
        coinMinimalDenom: "ulum",
        coinDecimals: 6,
        coinGeckoId: "pool:ulum",
        coinImageUrl: "/tokens/lum.svg",
      },
    ],
    coinType: 118,
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/lum/txs/{txHash}",
  },
  {
    rpc: "https://mainnet-rpc.vidulum.app",
    rest: "https://mainnet-lcd.vidulum.app",
    chainId: "vidulum-1",
    chainName: "Vidulum",
    stakeCurrency: {
      coinDenom: "VDL",
      coinMinimalDenom: "uvdl",
      coinDecimals: 6,
      coinGeckoId: "vidulum",
      coinImageUrl: "/tokens/vdl.svg",
    },
    bip44: {
      coinType: 370,
    },
    bech32Config: Bech32Address.defaultBech32Config("vdl"),
    currencies: [
      {
        coinDenom: "VDL",
        coinMinimalDenom: "uvdl",
        coinDecimals: 6,
        coinGeckoId: "vidulum",
        coinImageUrl: "/tokens/vdl.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "VDL",
        coinMinimalDenom: "uvdl",
        coinDecimals: 6,
        coinGeckoId: "vidulum",
        coinImageUrl: "/tokens/vdl.svg",
      },
    ],
    coinType: 370,
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://explorers.vidulum.app/vidulum/tx/{txHash}",
  },
  {
    rpc: "https://rpc.mainnet.desmos.network",
    rest: "https://api.mainnet.desmos.network",
    chainId: "desmos-mainnet",
    chainName: "Desmos",
    stakeCurrency: {
      coinDenom: "DSM",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "pool:udsm",
      coinImageUrl: "/tokens/dsm.svg",
    },
    bip44: {
      coinType: 852,
    },
    bech32Config: Bech32Address.defaultBech32Config("desmos"),
    currencies: [
      {
        coinDenom: "DSM",
        coinMinimalDenom: "udsm",
        coinDecimals: 6,
        coinGeckoId: "pool:udsm",
        coinImageUrl: "/tokens/dsm.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DSM",
        coinMinimalDenom: "udsm",
        coinDecimals: 6,
        coinGeckoId: "pool:udsm",
        coinImageUrl: "/tokens/dsm.svg",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://explorer.desmos.network/transactions/{txHash}",
  },
  {
    rpc: "https://rpc-1-dig.notional.ventures",
    rest: "https://api-1-dig.notional.ventures",
    chainId: "dig-1",
    chainName: "Dig",
    stakeCurrency: {
      coinDenom: "DIG",
      coinMinimalDenom: "udig",
      coinDecimals: 6,
      coinGeckoId: "pool:udig",
      coinImageUrl: "/tokens/dig.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("dig"),
    currencies: [
      {
        coinDenom: "DIG",
        coinMinimalDenom: "udig",
        coinDecimals: 6,
        coinGeckoId: "pool:udig",
        coinImageUrl: "/tokens/dig.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DIG",
        coinMinimalDenom: "udig",
        coinDecimals: 6,
        coinGeckoId: "pool:udig",
        coinImageUrl: "/tokens/dig.png",
      },
    ],
    gasPriceStep: {
      low: 0.025,
      average: 0.03,
      high: 0.035,
    },
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://ping.pub/dig/tx/{txHash}",
  },
  {
    rpc: "https://rpc-sommelier.keplr.app",
    rest: "https://lcd-sommelier.keplr.app",
    chainId: "sommelier-3",
    chainName: "Sommelier",
    stakeCurrency: {
      coinDenom: "SOMM",
      coinMinimalDenom: "usomm",
      coinDecimals: 6,
      coinGeckoId: "pool:usomm",
      coinImageUrl: "/tokens/somm.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("somm"),
    currencies: [
      {
        coinDenom: "SOMM",
        coinMinimalDenom: "usomm",
        coinDecimals: 6,
        coinGeckoId: "pool:usomm",
        coinImageUrl: "/tokens/somm.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SOMM",
        coinMinimalDenom: "usomm",
        coinDecimals: 6,
        coinGeckoId: "pool:usomm",
        coinImageUrl: "/tokens/somm.png",
      },
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://sommscan.io",
  },
  {
    rpc: "https://rpc.sifchain.finance",
    rest: "https://api-int.sifchain.finance",
    chainId: "sifchain-1",
    chainName: "Sifchain",
    stakeCurrency: {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
      coinGeckoId: "sifchain",
      coinImageUrl: "/tokens/rowan.svg",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("sif"),
    currencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
        coinGeckoId: "sifchain",
        coinImageUrl: "/tokens/rowan.svg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
        coinGeckoId: "sifchain",
        coinImageUrl: "/tokens/rowan.svg",
      },
    ],
    features: ["stargate", "ibc-transfer"],
    explorerUrlToTx: "https://www.mintscan.io/sifchain/txs/{txHash}",
  },
];

export const ExternalIncentiveGaugeAllowList: {
  [poolId: string]: {
    gaugeId: string;
    denom: string;
  }[];
} = {
  "461": [
    {
      gaugeId: "1774",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
    {
      gaugeId: "1775",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
    {
      gaugeId: "1776",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
  ],
  "482": [
    {
      gaugeId: "1771",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
    {
      gaugeId: "1772",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
    {
      gaugeId: "1773",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
  ],
  "497": [
    {
      gaugeId: "1679",
      denom:
        "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    },
    {
      gaugeId: "1680",
      denom:
        "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    },
    {
      gaugeId: "1681",
      denom:
        "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    },
  ],
  "498": [
    {
      gaugeId: "1682",
      denom:
        "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    },
    {
      gaugeId: "1683",
      denom:
        "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    },
    {
      gaugeId: "1684",
      denom:
        "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    },
  ],
  "547": [
    {
      gaugeId: "2021",
      denom:
        "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
    },
    {
      gaugeId: "2022",
      denom:
        "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
    },
    {
      gaugeId: "2023",
      denom:
        "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
    },
  ],
  "548": [
    {
      gaugeId: "1676",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
    {
      gaugeId: "1677",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
    {
      gaugeId: "1678",
      denom:
        "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    },
  ],
  "553": [
    {
      gaugeId: "2257",
      denom:
        "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    },
    {
      gaugeId: "2256",
      denom:
        "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    },
    {
      gaugeId: "2255",
      denom:
        "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    },
  ],
  "555": [
    {
      gaugeId: "2254",
      denom:
        "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    },
    {
      gaugeId: "2253",
      denom:
        "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    },
    {
      gaugeId: "2252",
      denom:
        "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    },
  ],
  "557": [
    {
      gaugeId: "1736",
      denom:
        "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
    },
  ],
  "558": [
    {
      gaugeId: "1737",
      denom:
        "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
    },
  ],
  "560": [
    {
      gaugeId: "1948",
      denom:
        "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
    },
    {
      gaugeId: "1949",
      denom:
        "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
    },
    {
      gaugeId: "1950",
      denom:
        "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
    },
  ],
  "562": [
    {
      gaugeId: "1951",
      denom:
        "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
    },
    {
      gaugeId: "1952",
      denom:
        "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
    },
    {
      gaugeId: "1953",
      denom:
        "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
    },
  ],
  "571": [
    {
      gaugeId: "1759",
      denom:
        "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
    },
    {
      gaugeId: "1760",
      denom:
        "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
    },
    {
      gaugeId: "1761",
      denom:
        "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
    },
  ],
  "572": [
    {
      gaugeId: "1762",
      denom:
        "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
    },
    {
      gaugeId: "1763",
      denom:
        "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
    },
    {
      gaugeId: "1764",
      denom:
        "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
    },
  ],
  "573": [
    {
      gaugeId: "2030",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
    {
      gaugeId: "2031",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
    {
      gaugeId: "2032",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
  ],
  "574": [
    {
      gaugeId: "2033",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
    {
      gaugeId: "2034",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
    {
      gaugeId: "2035",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
  ],
  "577": [
    {
      gaugeId: "2088",
      denom:
        "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
    },
    {
      gaugeId: "2089",
      denom:
        "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
    },
    {
      gaugeId: "2090",
      denom:
        "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
    },
  ],
  "578": [
    {
      gaugeId: "2091",
      denom:
        "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
    },
    {
      gaugeId: "2092",
      denom:
        "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
    },
    {
      gaugeId: "2093",
      denom:
        "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
    },
  ],
  "584": [
    {
      gaugeId: "1861",
      denom:
        "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    },
    {
      gaugeId: "1862",
      denom:
        "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    },
    {
      gaugeId: "1863",
      denom:
        "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    },
  ],
  "585": [
    {
      gaugeId: "1864",
      denom:
        "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    },
    {
      gaugeId: "1865",
      denom:
        "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    },
    {
      gaugeId: "1866",
      denom:
        "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    },
  ],
  "586": [
    {
      gaugeId: "1885",
      denom:
        "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
    },
    {
      gaugeId: "1886",
      denom:
        "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
    },
    {
      gaugeId: "1887",
      denom:
        "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
    },
  ],
  "587": [
    {
      gaugeId: "1888",
      denom:
        "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
    },
    {
      gaugeId: "1889",
      denom:
        "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
    },
    {
      gaugeId: "1890",
      denom:
        "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
    },
  ],
  "592": [
    {
      gaugeId: "2036",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
    {
      gaugeId: "2037",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
    {
      gaugeId: "2038",
      denom:
        "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    },
  ],
  "600": [
    {
      gaugeId: "1879",
      denom:
        "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
    },
    {
      gaugeId: "1880",
      denom:
        "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
    },
    {
      gaugeId: "1881",
      denom:
        "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
    },
  ],
  "601": [
    {
      gaugeId: "1882",
      denom:
        "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
    },
    {
      gaugeId: "1883",
      denom:
        "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
    },
    {
      gaugeId: "1884",
      denom:
        "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
    },
  ],
  "5": [
    {
      gaugeId: "1900",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1901",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1902",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
  ],
  "6": [
    {
      gaugeId: "1903",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1904",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
    {
      gaugeId: "1905",
      denom:
        "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    },
  ],
  "602": [
    {
      gaugeId: "2127",
      denom:
        "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
    },
    {
      gaugeId: "2128",
      denom:
        "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
    },
  ],
  "604": [
    {
      gaugeId: "1995",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
    {
      gaugeId: "1996",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
    {
      gaugeId: "1997",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
  ],
  "605": [
    {
      gaugeId: "1960",
      denom:
        "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
    },
    {
      gaugeId: "1961",
      denom:
        "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
    },
    {
      gaugeId: "1962",
      denom:
        "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
    },
  ],
  "606": [
    {
      gaugeId: "1963",
      denom:
        "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
    },
    {
      gaugeId: "1964",
      denom:
        "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
    },
    {
      gaugeId: "1965",
      denom:
        "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
    },
  ],
  "611": [
    {
      gaugeId: "1998",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
    {
      gaugeId: "1999",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
    {
      gaugeId: "2000",
      denom:
        "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    },
  ],
  "612": [
    {
      gaugeId: "2109",
      denom:
        "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
    },
  ],
  "613": [
    {
      gaugeId: "1982",
      denom:
        "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
    },
    {
      gaugeId: "2013",
      denom:
        "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
    },
    {
      gaugeId: "2014",
      denom:
        "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
    },
  ],
  "617": [
    {
      gaugeId: "2125",
      denom:
        "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
    },
    {
      gaugeId: "2126",
      denom:
        "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
    },
  ],
  "618": [
    {
      gaugeId: "2004",
      denom:
        "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
    },
    {
      gaugeId: "2005",
      denom:
        "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
    },
    {
      gaugeId: "2006",
      denom:
        "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
    },
  ],
  "619": [
    {
      gaugeId: "2007",
      denom:
        "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
    },
    {
      gaugeId: "2008",
      denom:
        "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
    },
    {
      gaugeId: "2009",
      denom:
        "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
    },
  ],
  "621": [
    {
      gaugeId: "2020",
      denom:
        "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
    },
  ],
  "629": [
    {
      gaugeId: "2067",
      denom:
        "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
    },
    {
      gaugeId: "2068",
      denom:
        "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
    },
    {
      gaugeId: "2069",
      denom:
        "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
    },
  ],
  "637": [
    {
      gaugeId: "2258",
      denom:
        "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
    },
    {
      gaugeId: "2259",
      denom:
        "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
    },
    {
      gaugeId: "2260",
      denom:
        "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
    },
  ],
  "638": [
    {
      gaugeId: "2261",
      denom:
        "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
    },
    {
      gaugeId: "2262",
      denom:
        "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
    },
    {
      gaugeId: "2263",
      denom:
        "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
    },
  ],
  "641": [
    {
      gaugeId: "2129",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
    {
      gaugeId: "2130",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
    {
      gaugeId: "2131",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
  ],
  "642": [
    {
      gaugeId: "2269",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
    {
      gaugeId: "2270",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
    {
      gaugeId: "2271",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
  ],
  "643": [
    {
      gaugeId: "2266",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
    {
      gaugeId: "2267",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
    {
      gaugeId: "2268",
      denom:
        "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    },
  ],
  "648": [
    {
      gaugeId: "2272",
      denom:
        "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
    },
  ],
};