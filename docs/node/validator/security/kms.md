---
title:  Tendermint KMS
sidebar_position: 2
---

>:information_source: **Sypnosis** 
Transaction signing by Key Management System (KMS) for validators are to provide:
1. Secured signing facility and no double signing.
1. (Optionally) key signing isolation by hardware security module HSM
1. Seamless interface with external HSM using APIs.
1. Remote signer security and risk mitigation.

>:memo: **Reference** Important excerpts below are taken from [CosmosSDK KMS](https://hub.cosmos.network/main/validators/security.html)

>:bulb: **Tip** Key management services are used in a separate server other than the running main node. A validator signing remotely of the proposed block with Tendermint consensus/validator public key is called a remote signer.

# Building 

Flags used to select which backend to build are shown below.
- Ledger  cargo build --features ledgertm
- YubihSM cargo build --features yubihsm


# Configuration
Select the appropriate backend solution to configuration items.
1. Setup for [Tendermint KMS + Ledger](/docs/node/validator/security/ledger.md)
1. Setup for [Tendermint MPC](/docs/node/validator/security/mpc.md)
1. Setup for [YubiHSM](/docs/node/validator/security/yubiHSM2.md)
