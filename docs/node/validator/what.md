---
title: What are validators
sidebar_position: 1
---

# Validators Overview

##  Introduction

The Gotabit blockchain is based om the GotaBitSDK framework that uses the [Tendermint Core](https://github.com/tendermint/tendermint/tree/master/docs/introduction) Consensus engine. It relies on a set of validators that are responsible for committing new blocks in the blockchain. Validators are working participants in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator's private key.

Validator participants can bond their own GTB and have GTB delegated, or staked, to them by token holders. The validators are determined by the total number of GTB tokens delegated to them. The top 12 validator participants with the most voting power are current Gotabit validators.

Validators and their delegators can earn rewards in GTB from block provisioning and token transaction fees. Note that validators can set a percentage on the fees as commission to their delegators to receive as additional incentive. 

If validators double sign or are offline for an extended period, their deposits staked in GTB (including GTB of users that delegated to them) can be slashed. Slashing and penalty depends on the severity of the violation.

##  Hardware

For validator key management, validators must set up a physical operation that is secured with restricted access. For example, validators can co-locate with sentry node in data centers for high [level of security](https://www.eescorporation.com/data-center-security-levels/).

Validators are expected to be hosted at server datacenter location with redundant power, connectivity, and storage backups. Datacenters have several redundant networking boxes for fiber, firewall and switches and small servers with redundant hard drive and failover.

You can find the minimum hardware requirements on the instructions for [joining the Gotabit Hub mainnet](/node/network/main). As the network grows, bandwidth, CPU, and memory requirements rise. Large hard drives are recommended for storing years of blockchain history, as well as significant RAM to process the increasing amount of transactions.

##  Create a Validator Website

To get started as a validator, create your dedicated validator website and signal your intention to become a validator in the [Gotabit Discord](https://discord.gg/gotabit). Posting your validator website is essential because delegators want to have information about the entity they are delegating their GTB to.

##  Disclaimer

Please conduct your own research and seek legal advice if you intend to run a validator node.

##  Community

For details of becoming a validator, please join our community discussion forum on [Gotabit Developers Discord](https://discord.gg/gotabit) and sign up for the Gotabit newsletter to get regular updates.
