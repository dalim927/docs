---
title: SDK with Smart Contracts
description: Describe SDK modules used by smart contracts at different phases
sidebar_position: 8
---
>:information_source: **Synopsis** 
At a high level, when coding smart contracts, one must consider the following:
1. Execution
1. Messages handling and dispatcher
1. Submessages and error handling
1. Query
1. Events
1. Maths
1. Compilation
1. Deployment
1. Verification

It is impprtant to understand the execution of smart contract from the SDK perspective. Care should be taken to construct smart contracts sp that it does not obfuscate function intent to create security problems and run out of gas. 

>:memo: **Tip** 
Below are pointers in developing smart contracts to understand when working with SDK. Consider the following:

# Execution phase
1. Beware of semantics enforced by SDK

# Message handler and dispatcher
1. Understands minimum pre-filter by the SDK module while Tendermint is seeking 2/3 consensus of the list of transactions included in the next block.
1. Understand on block committed, transactions are marshalled to the SDK module to be executed sequentially. A hash of executed block is linked a next block.
1. A transaction may consists of multiple messages with atomcity. If any of the messages fails, then all later messages and state change reverted. 
1. Wasm is a custom module in SDK that processes messages to be used for executing smart contracts.

# Submessages and error handler
It resolves a use-case of capturing the error results, and store the error message and mark the message as run, rather than aborting the whole transaction. Hence limiting the gas usage of the submessage but is needed for a background process to protect it from an infinite loop in the submessage burning all gas and aborting the transaction.

# Query
Provides access to information in processes which otherwise will be hard to detect and prevent re-entrant codes to create security issues.

# Evemt
Event returns a functional response for most entry points.  Event triggers are like when a transaction is mined, smart contracts can emit events and write logs for frontend processor.

# Maths
Maths in byte and array level computation and manipulation are involved eg shifting bits and bytes.

# Compilation
Smart contract code is to be optimized so that unused modules are not taking unnecessary costly storages in memory.

# Deploy
Always deploy on unit testing nodes to check running dApps.

# Verification
A way to verify that the deployed contract code is from the same the source. It is like decompiling from byte code to source code and check that they are the same.


>:memo: **Reference** 
- Contract execution taken from [Gotabit SDK](https://docs.cosmwasm.com/docs/smart-contracts/contract-semantics)
- Information on message and submessage handling [Cosmos contract messages](https://docs.cosmwasm.com/docs/smart-contracts/message/message)
