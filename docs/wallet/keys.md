---
title: Keys
description: Cryptograhic keys
sidebar_position: 1
---

>:memo: **Reference** 
1. Important excerpts are taken from [CosmosSDK KMS](https://docs.cosmos.network/main/basics/accounts)
1. HD Wallets from [Cosmos Hub - HD Wallets](https://hub.cosmos.network/main/resources/hd-wallets.html)
1. Hierarchical key definition [Investopedia](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp)

Cryptographic keys allow a user to transact their crypto assets. A key pair is involved namely the public and private keys.  The public key allows you to receive the digital asset and the private key enables you to deal with the asset.

When creating an account on the gotabit blockchain, a user will be given a 24 mnemonic phrase. It is also known as a secret code, seed or recovery phrase. This phrase is the only way to recover your account if you ever forget your password.

Deterministic wallet is defined as wallet that is capable of generating keys from a single secret share for all key pairs. A deterministic wallet create key pairs uses either a simple or hierarchical deterministic (HD) key definition. 

A HD key uses a tree of hierarchy levels to create key pairs whereas a simple (non-heirarchical) key definition is limited to a fixed number of key pairs. Cosmos SDK uses HD key derivation standard under BIP32 [Bitcoin Improvement Proposal 0032](https://en.bitcoin.it/wiki/BIP_0032)

Gotabit uses deterministic wallet with HD key.
