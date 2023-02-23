---
title:  Setup Tendermint MPC
sidebar_position: 3
---

>:information_source: **Sypnosis** 
Setting up Tendermint KMS (tmkms) and MPC steps:
1. Build tmkms if not already done.
1. Launch Tendermint KMS (tmkms v7.0).
1. Setup MPC and Validator instances.
1. Configure p2p nodes.
1. Launch the signer.  
1. Once a threshhold of signer nodes is online, start signing blocks on the network. 

>:memo: **References** 
- Important excerpts are taken from [CosmosSDK KMS](https://hub.cosmos.network/main/validators/security.html)
- Tendermint KMS from [iqlusioninc](https://github.com/iqlusioninc/tmkms)
- Tendermint Multi-Party-Computation Validator from [certusone](https://github.com/certusone/tendermint-mpc-validator)
- What is MPC? from [fireblocks](https://www.fireblocks.com/what-is-mpc/)

# Multi Party Computation requirements
In an MPC, validators have: 
- Privacy of information that cannot be inferred.
- Accuracy of a multi-party group information that cannot be leaked or changed.

A Tendermint MPC validator provides privacy and accurate information in addition to security protection.

# Building
Download the repository and follow the instructions given: 
1. [Tendermint KMS tmkms](https://github.com/iqlusioninc/tmkms) (if not installed)
1. [Tendermeint Multi Party Computation validator](https://github.com/certusone/tendermint-mpc-validator)

# Configuration
Remember to do:
1. To make a node available as a relay for an mpc validator, use "priv_validator_laddr" to add validator nodes IP address and port to the configuration item of the config/config.toml
  
1. Update tmkms.toml socket address with the same address on tendermint/config/config.toml.