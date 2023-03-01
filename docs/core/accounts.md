---
sidebar_position: 2
title: Module Accounts
---

>:information_source: **Synopsis**
The account module is to manage user accounts. It covers the following:
1. Account module definition.
1. Interaction between keys, account, addresses and signatures.
1. Addresses consisting of public keys and private keys.
1. Key rings.

# Overview
This section covers the in-built account module of Gotabit SDK.

Briefly, an account module is used to uniquely identify a user by an address. The account address consists of a key-pair, namely a public key address and a private key address. The account module then uses an on-chain signature verification process to match the public key and private key before approving a user transaction.

A detailed explanation is given in [Account module section](https://docs.cosmos.network/v0.47/basics/accounts)


## Working example

###  Add keyring to obtain my first genesis address
This creates a genesis address into the keyring backend called "test". 

On address creation, a private key is given. This key is created with a 24 word mnemonics phrase. Keep this mnemonic phrase in a safe place as a backup to restore the account. 

```
gotabitd keys add mygenesistest1 --keyring-backend=test
```
Output
```
- name: mygenesistest1
  type: local
  address: gio17egu4gzy4zgywp3hrxl36d6sxufhnrwp6ls9zl
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AnfXZ4McqTV/56NWaHwNv1mldoqwVqMMUD/ZM7ASiAaM"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

congress stuff crouch reveal immune trap harvest balcony arrive foster tragic firm rocket number tip roof increase fork top core target excuse taste control
```
### Setup variable "MY_GENESISTEST1_ADDRESS"
Do the following using command line
```
MY_GENESISTEST1_ADDRESS=$(gotabitd keys show mygenesistest1 -a --keyring-backend=test)
```
Display the address using command line
```
echo $MY_GENESISTEST1_ADDRESS
gio17egu4gzy4zgywp3hrxl36d6sxufhnrwp6ls9zl
```

###  Adding Genesis Account - mygenesis1
A genesis test user account is created to allow the running node to record the state transactions. Use the CLI command to create a genesis account.

```
gotabitd add-genesis-account $MY_GENESISTEST1_ADDRESS 100000000000stake --keyring-backend test --home "$HOME/Projects/gtbtestdb
```

### Verify that $MY_GENESISTEST1_ADDRESS is created.

```
cat $HOME/Projects/gtbtestdb/config/genesis.json | grep $MY_GENESISTEST1_ADDRESS
          "address": "gio17egu4gzy4zgywp3hrxl36d6sxufhnrwp6ls9zl",
          "address": "gio17egu4gzy4zgywp3hrxl36d6sxufhnrwp6ls9zl",
```
