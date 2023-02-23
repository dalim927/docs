---
sidebar_position: 3
title: IBC Channels
---
>:bulb: **Tips**
Basic information of IBC are found in [Inter-Blockchain Communication](https://docs.ignite.com/guide/ibc)
Advanced topics of IBC are found in [Developer Portal](https://tutorials.cosmos.network/hands-on-exercise/5-ibc-adv/)

# Quick take on IBC, relayers and channels
As a core component of the Cosmos network, Inter-blockchain Communications (IBC) is a protocol that connects Tendermint and non-Tendermint ledgers. 

It is a cross-chain communications protocol between Layer 1 blockchains. Current in draft [InterChain Standard](https://github.com/cosmos/ibc), IBC consists of two layers. At the applications layer, it specifies the message format and processing between applications. The transport layer provides security and authentication.

A IBC relayer allows messages to be relayed from one IBC enabled blockchain to another. See information on [Setting up ibc relayer](https://github.com/cosmos/relayer). It allows connectitity between IBC-enabled blockchains.

IBC enabled blockchains open paths to each other forming clients and channels. As a result, a network topology map of interconnected blockchains is accessible within the Cosmos Hub.

See an example use of [`rly` ibc relayer](/docs/node/validator/run/sync.md)

A future perspective of Gotabit IBC channels is given below:

| Src Chain-Id | Src Ch | Dest    | Dest Chain-Id  | Dest Ch  | Description  |
|-----------------------|---------|----------------|----------|--------------|
| Main Chain1  | SCh1   | Cosmos  | Dest Chain1    | DCh1     | MC-SC1-DC-DC1|
| Core Chain2  | SCh2   | Regen   | Dest Chain2    | DCh2     | MC-SC2-DC-DC2|
| Main Chain3  | SCh3   | Cosmos  | Dest Chain3    | DCh3     | MC-SC3-DC-DC3|
