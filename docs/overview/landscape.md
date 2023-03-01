---
sidebar_label: 'Application Landscape '
sidebar_position: 3
---

# GotaBit Network Application Landscape

The GotaBit Network application landscape consists of full nodes each with an instance of Tendermint Core integrated with a GotaBit blockchain developed under the Cosmos SDK license. It communicates with the Tendermint Core using the network layer application blockchain interface (ABCI). 

GotaBitSDK modules are used to interact between light clients such as wallet applications with the network using REST and RPC.

![GTBNetworkLandscape](../../static/img/97b161ab8f6c41d1e03dd948c1070fcecf9f8759a74b5a5072530b87a28695e6.png)  
)  
  
*Picture 2. GotaBit Network Application Landscape*

## GotaBit Core Modules
There are three important modules provided by the GotaBitSDK. Briefly, they are:

### x/epoch
An epoch is a time period in between 2 time ticks nemely the Start time and End time.  The End time equates to the start time + timer interval where the timer interval is fixed. 

The epoch function module defines this period of time in epochs where a certain amount of blocks on the chain is to be completed by validators.

The time period is used on a specific event such as getting a new group of validators to validate an amount of blocks or when incentivization is to be distributed. Other use of epoch is in staking activities. For example, delegation, unbonding, createValidator and staking changes are buffered and only executed once every time interval. This means that the validator set and voting powers will not change mid-epoch except for removing validators due to slashable offenses. Please refer to [epoch staking](https://github.com/cosmos/cosmos-sdk/discussions/8328) and [epoch module](/docs/core/modules/epochs/README.md)

### x/inbox
The inbox function module is responsible for managing the tranasactions between the message sender and message receiver with unique message ids. Under the hood, it uses a publish-subscriber (or pubsub in short) implementation to identify and publish messages on a messaging channel for listeners (known as subsribers) listening to the message event and topic. Tendermint core also uses the pubsub implentation. Please refer to [pub-sub implementation](https://github.com/cosmos/cosmos-sdk/issues/4084)

### x/mint
The mint function module is to allow for a flexible inflation rate based on the GTB token economy; and to balance the GTB liquidity from demand and supply. 

The mint function module is responsible for creating new GTB staking tokens.

Please refer to the [mint module](/docs/core/modules/mint/README.md)


## Application Blockchain Communications Interface (ABCI)
ABCI is the interface protocol between Tendermint Core and application layer of the GotaBit blockchain. It acts as a channel of communications between the consensus engine and application module logic running on the node. 

## Full node and light client node
A full node on the network consists of a GotaBit blockchain running the core modules, Wasm, APIs and utility modules, Tendermint Core consensus engine, database and ABCI interface protocol to communicate with each other.

A light client node runs a daemon or continous background process waiting to perform a task. It is a ABCI enabled application on the GotaBit Network.  A client browser then communicates with the daemon using the REST-API integration framework. The light client node also communicates to the full node via a remote process communication (RPC) channel.
