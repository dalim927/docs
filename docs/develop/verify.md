---
title: Verifying Smart Contracts
description: Verify compiled code on blockchain
sidebar_position: 7
---

# Verifying smart contract code on the blockchain
When smart contract code is deployed on the blockchain, a [CosmWasm Verify](https://github.com/CosmWasm/cosmwasm-verify) is used to check that the on-chain bytecode is exactly the same as what is compiled off-chain from source code.

Verification is achieved in 3 inputs below:
1. Source code
1. Builder tools to compile code
1. Checksum expected SHA256 hash of the compiled wasm bytecode

## Building

Follow the instructions from [Verify cosmwasm contract binary](https://github.com/CosmWasm/cosmwasm-verify)

>:memo: **Pre-requisite**
Requires Go 1.19+, Rustup and wasmd installed

Follow the instructions from [Wasm Code Explorer](https://github.com/CosmWasm/code-explorer)

## CosmWasm code explorer
The verification command can be composed from the on-chain data. The code explorer displays the verification command.  By 'copy and paste' of the verification command on a terminal CLI, one can start a reproducible build.

>:memo: **Reference**
Read the article on CosmWasm bytecode verify [Don't trust. CosmWasm verify](https://medium.com/cosmwasm/dont-trust-cosmwasm-verify-db1caac2d335)
