---
title:  Setup Tendermint KMS + Ledger
sidebar_position: 4
---

>:information_source: **Sypnosis** 
Setting up Tendermint KMS (tmkms) and Ledger Live steps:
1. Build tmkms if not already done.
1. Launch Tendermint KMS (tmkms v7.0).
1. Configuration.
1. Obtain the Tendermint consensus/validator public key.
1. Launch all including Tendermint node & tmkms.

>:memo: **References** 
- Important excerpts are taken from [CosmosSDK KMS](https://hub.cosmos.network/main/validators/security.html)
- Tendermint and Ledger Live from [iqlusioninc](https://github.com/iqlusioninc/tmkms)
- Configuration items from [Cargo.org](https://crypto.org/docs/getting-started/notes-on-production-deployment.html)

# Building
Download the repository and follow the instructions given: 
1. [Tendermint KMS tmkms](https://github.com/iqlusioninc/tmkms) (if not installed)

Remember to do:
- To use Tendermint KMS + Ledger install tmkms with **cargo build --features ledgertm** flag.
- Enable *developer mode* on Ledger Live to install Cosmos App.

# Configuration
1. Use Ledger Live, Ledger device and run Tendermint app [here](https://crypto.org/docs/getting-started/notes-on-production-deployment.html)
  
1. Update tmkms.toml socket address with the same address on tendermint/config/config.toml.







