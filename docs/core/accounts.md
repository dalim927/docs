---
sidebar_position: 2
title: Module Accounts
---

## Accounts

This document describes the in-built account and public key system of the Cosmos SDK.

>:bulb: **Pre-requisites**
If not done so, firstly see [Setup of Keyring](/docs/node/pre-requisites/keyring.md)

For account explanation please refer to [Cosmos account section](https://docs.cosmos.network/main/basics/accounts)

##  Add account creation example
Please learn the genesis account creation at [Setup and run mainnet (local) node](/docs/node/network/local.md)

or, for completeness, it is repeated below.

##  Add keyring to obtain my first genesis address
This creates a genesis address into the keyring backend called "test". 

On address creation, a private key is given. This key is created with a 24 word mnemonics phrase. Keep this mnemonic phrase in a safe place as a backup to restore the account. 

```
gotabitd keys add mygenesis1 --keyring-backend=test
```
Output
```
- name: mygenesis1
  type: local
  address: gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AybbdpBRJraBW4rLPKyC1CqyN8UhRNA1U/w5bKNhJ0fX"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

pact shuffle wrap public raven sleep brisk grain laugh dilemma burst resemble fan wish order genius smile pepper finish length depart use spare gaze
```
## Setup variable "MY-GENESIS1-ADDRESS"
Do the following using command line
```
MY_GENESIS1_ADDRESS=$(gotabitd keys show mygenesis1 -a --keyring-backend=test)
```
Display the address using command line
```
echo $MY_GENESIS1_ADDRESS
gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9
```

##  Adding Genesis Account - mygenesis1
A genesis user account is created to allow the running node to record the state transactions. Use the CLI command to create a genesis account.

```
gotabitd add-genesis-account $MY_GENESIS1_ADDRESS 100000000000stake --keyring-backend test
```

## Verify that $MY_GENESIS1_ADDRESS is created.

```
cat $HOME/.gotabit/config/genesis.json | grep $MY_GENESIS1_ADDRESS
          "address": "gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9",
          "address": "gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9",
```
