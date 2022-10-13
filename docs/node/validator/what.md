---
title: What are validators
sidebar_position: 1
---

# Requirements

# Validators Overview

##  Introduction

The Gotabit Chain is based on [Tendermint (opens new window)](https://github.com/tendermint/tendermint/tree/master/docs/introduction)that relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator's private key.

Validator candidates can bond their own GTB and have GTB delegated, or staked, to them by token holders. The validators are determined by the total number of GTB tokens delegated to them — the top 12 validator candidates with the most voting power are the current Gotabit validators.

Validators and their delegators earn GTB as block provisions and tokens as transaction fees through execution of the Tendermint consensus protocol. Note that validators can set a commission percentage on the fees their delegators receive as additional incentive. 

If validators double sign or are offline for an extended period, their staked GTB (including GTB of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.

##  Hardware

For validator key management, validators must set up a physical operation that is secured with restricted access. A good starting place, for example, would be co-locating in secure data centers.

Validators are expected to equip their datacenter location with redundant power, connectivity, and storage backups. Expect to have several redundant networking boxes for fiber, firewall, and switching and then small servers with redundant hard drive and failover.

You can find the minimum hardware requirements on the instructions for [joining the Gotabit Hub mainnet](/node/network/main). As the network grows, bandwidth, CPU, and memory requirements rise. Large hard drives are recommended for storing years of blockchain history, as well as significant RAM to process the increasing amount of transactions.

##  Create a Validator Website

To get started as a validator, create your dedicated validator website and signal your intention to become a validator in the [Gotabit Discord (opens new window)](https://discord.gg/gotabit). Posting your validator website is essential because delegators want to have information about the entity they are delegating their GTB to.

##  Seek Legal Advice

As always, do your own research and seek legal advice if you intend to run a validator node.

##  Community

Discuss the finer details of being a validator on our community Discord and sign up for the Gotabit newsletter to get regular updates:

- [Gotabit Developers Discord(opens new window)](https://discord.gg/gotabit)
