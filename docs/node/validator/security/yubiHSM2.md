---
title:  Setup Tendermint KMS + YubiHSM2
sidebar_position: 5
---

>:information_source: **Sypnosis** 
Setting up Tendermint KMS (tmkms) and YubiHSM2 steps:
1. Build tmkms with "--features yubihsm".
1. Launch Tendermint KMS (tmkms v7.0).
1. Configuration.
1. Obtain the Tendermint consensus/validator public key.
1. Launch all including Tendermint node & tmkms.

>:memo: **References** 
- Important excerpts are taken from [CosmosSDK KMS](https://hub.cosmos.network/main/validators/security.html)
- Yubihsm2 and Tendermint KMS from [iqlusioninc](https://github.com/iqlusioninc/tmkms/blob/main/README.yubihsm.md) 
- Configuration items from [Cargo.org](https://crypto.org/docs/getting-started/notes-on-production-deployment.html)

# Building
Build [Tendermint KMS and YubiHSM2](https://github.com/iqlusioninc/tmkms/blob/main/README.yubihsm.md) from iqlusioninc

Remember to do:
- To use Tendermint KMS + YubiHSM2 install tmkms with **cargo build --features yubihsm** flag.


# Configuration  
1. Update tmkms.toml socket address with the same address on tendermint/config/config.toml.







