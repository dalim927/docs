---
sidebar_label: 'Basic Concepts'
sidebar_position: 2
---

# Basic concepts
This section provides a condensed overview of the basic concepts of the Cosmos decentralized blockchain network.   A more detailed discussion can be found on the references given below.

## Why Cosmos
Cosmos is also known as an Internet of Blockchains or blockchain 3.0.  The following features makes it stand out.
1. Scalability. There are more transactions processed compared to other blockchain platforms.
1. Usability.  It has a straight forward, simple infrastrurture that can be used to develop a blockchain from a well constructed software development kit (SDK).
1. Interoperability.
Cosmos has developed an inter blockchain (IBC) protocol that is becoming an industry standard to interact with other heterogenous blockchains. There are a whole host of project developed successfully; or, are under development like GotaBit which is built on top of CosmosSDK.
1. Standards.
Cosmos has a draft proposal specifications for [Interchain Standards](https://github.com/cosmos/ibc). It defines the protocol semantics of various transport, authentication, ordering and application layers for different blockchains to communicate with each other.

## CosmosSDK
The software development kit from Cosmos (CosmosSDK) is to ensure the application development of blockchain that uses the Cosmos framework.  This framework acts like a standards guideline for module analysis, design and building  a complex blockchain ecosystem from ground up. Amongst other things; and is not limited to, the framework manages transaction and query lifecycle, accounts,  gas and fee calculations.  For example, GotaBit Network blockchain is built to comply to this framework.

## Tendermint Core
Tendermint Core is a blockchain consensus engine.  Blocks are created in Tendermint Core, proposed, voted by participating nodes, submitted for adding to the blockchain using a BFT algorithm.  

###	Byzantine Fault Tolerent (BFT) consensus model
Tendermint uses a BFT consensus model.  A BFT validating process (or validator) require at least two-thirds of the passed votes in order to commit a block proposal before it is added to the  blocks in the blockchain.  Once included in the block, transaction finality is reached immediately without block confirmations.   An important BFT decision flowchart is given below

![Tendermint - BFT consensus](../../static/img/03a79e5c2f4fb8f5375b3ab03e5f3a0a6fbbc1b436d88d502a7bb87ba7632f56.png)  

*Picture 1. Tendermint Core BFT consensus algorithm*

>:memo: **References**
- Cosmos SDK [Cosmos Software Development Kit Documentation](https://docs.cosmos.network/main) 
- Tendermint Documentation [Using Tendermint](https://docs.tendermint.com/v0.34/tendermint-core/using-tendermint.html#)
- Tendermint Wiki [Tendermint Overview](https://golden.com/wiki/Tendermint-4AP8KX8#Overview)