---
title:  Setting up keyring
description: Server backend pre-requisites for install and setup.
sidebar_position: 4
---
> :information_source: **Synopsis** 
Keyring allow systems to group all various passwords to be located in one place. Linux system like Ubuntu uses keyring while MacOs uses keychain. For other implementation, please refer to their documentation.

The following is an example server backend configured using keyring to keep the public/private key pairs protected. A use for it is when setting up the validators.

Do the following to setup a variable called "myvalidator"

```
gotabitd keys add myvalidator --keyring-backend=test --home "[home directory]"
```
> :memo: **Note**
subcommand "--home" is optionally used to allow gotabitd to store the keys pointing to a different home directory. 

As blockchain addresses are long, set up an environment variable for extracting the content of myvalidator address variable.  Unix shell command is given below. 

```
MY_VALIDATOR_ADDRESS=$(gotabitd keys show myvalidator -a --keyring-backend test --home "[home directory]")
```

## Example code
```
gotabitd keys add myvalidator --keyring-backend=test --home "$HOME/Projects/gtbtestnet"
```

Output
```
- name: myvalidator
  type: local
  address: gio1fhsrdzvpr5xfyq9kwl7myatec6n3gkemymcf43
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2mug86LkbCgoAUL+IEqwSrI/qK3CD35r6ygNeOS57zN"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

potato mask inherit bicycle never staff merit budget outside scale cost social skin scrap wrong core deer island female sentence inspire twenty fever reject
```
## Setup MY_VALIDATOR_ADDRESS variable
```
MY_VALIDATOR_ADDRESS=$(gotabitd keys show myvalidator -a --keyring-backend test --home "$HOME/Projects/gtbtestnet")
```
## Show MY_VALIDATOR_ADDRESS variable
```
echo $MY_VALIDATOR_ADDRESS
gio1fhsrdzvpr5xfyq9kwl7myatec6n3gkemymcf43
```


