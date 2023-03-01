---
title:  Application Environment
description: Platform pre-requisites for Application install.
sidebar_position: 2
---

# Applications running on GotaBit node

GotaBit Network requires software applications to run on the node. It is a full node 3-tier architecture consisting of the application, database and network layers.  

The components are as follows:

## Full Node Instance
Application Layer 
- TenderMint Core applications including validator and consensus engine. 
- GotaBit application modules created from GotaBitSDK, validator signer, Wasm, epoch, inbox, mint, APIs and utility modules.
- Web enabled services including wallets, reports and monitoring.

Database Layer 
- Leveldb or language specific db requirements,
- Protocol buffers to describe data structures and to serialize and retrieve data.

Network Layer 
- Cosmos network application blockchain interface (ABCI) interacting with GotaBit Network application blockchain.
- Wide area network using Inter-blockchain communication (IBC) services.
- Interface protocols including REST, RPC and APIs. 

## GitaBit Network and Cosmos Hub
This is a wide area network consisting of GotaBit Network full nodes and light clients connected to the Cosmos(ATOM) network which interacts with other blockchain networks using IBC including the Ethereum network.

