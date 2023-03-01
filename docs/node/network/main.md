---
title: Joining Mainnet
sidebar_position: 1
---

# Running Production Mainnet
This is a general information section on joining Gotabit Mainnet.

## Install the GotaBit software
Please use this instruction step [Setting up Gotabit codebase](/docs/node/setup/instruction-steps.md)

## Recommended minimum hardware
Please use the pre-requisites step [GotaBit Technical Environment](/docs/node/pre-requisites/techenv.md)

## GotaBit applications
Visualize the [GotaBit Application Environment](/docs/node/pre-requisites/appenv.md)

## Miscellaneous Server setup
Please do miscellaneous production server step [Misc Server Environment](/docs/node/pre-requisites/miscenv.md)

## Set environment variables
Under unix envronment, for example
```
GT_CHAIN_ID="mainnet"
GT_MONIKER_NAME="gtbmdb"
GT_GENESIS1_ADDRESS=$(gotabitd keys show mygenesis1 -a --keyring-backend=test)

```

## Initialize the chain
Initialize the chain with command below.  
```
gotabitd init $GT_MONIKER_NAME --chain-id $GT_CHAIN_ID
```
A $HOME/.gotabit/config/ and $HOME/.gotabit/data/ will be created for Mainnet.

The $HOME/.gotabit/config/ directory contains
- genesis.json
- node.json

## Download the genesis file
Download the genesis file from GotaBit site [TBA by GotaBit]
```
# First remove the existing file
rm $HOME/.gotabit/config/genesis.json
wget https://[TBA by Gotabit].tar.gz
tar -xvf [TBA by Gotabit]-genesis.tar.gz
mv [TBA by Gotabit]-genesis.json $HOME/.gotabit/config/genesis.json
```
Note:  [TBA by GotaBit] - to be advised by GotaBit team.

## Set SEEDS
```
# Set the base repo URL for mainnet & retrieve seeds
GT_CHAIN_REPO="[TBA by GotaBit]/$GT_CHAIN_ID" && \
export GT_SEEDS="$(curl -sL "$GT_CHAIN_REPO/seeds.txt")"
​
# Add seeds to config.toml
sed -i.bak -e "s/^seeds *=.*/seeds = \"$GT_SEEDS\"/" ~/.gotabit/config/config.toml
```
## Set minimum gas prices
This will protect against spam, hack and smart contract attacks using wasm.
Below changes will allow mainnet to accept gtb and ibc atoms. In $HOME/.gotabit/config/app.toml, set minimum gas prices:
```
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.0025gtb,0.001ibc\/[TBA address by GotaBit]]\"/" $HOME/.gotabit/config/app.toml
```

##  Add Genesis Account (or optionally restore) a local key pair
Create a mygenesis1 account using the command
```
gotabitd keys add mygenesis1 --keyring-backend=test
```
>:memo: **Pre-requisite** [Setting up keyring](/docs/node/pre-requisites/keyring.md).

A genesis user account is created to allow the running node to record the state transactions. Use the CLI command to create a genesis account.

```
gotabitd add-genesis-account $GT_GENESIS1_ADDRESS 100000000000stake --keyring-backend test
```

## Verify that $MY_GENESIS1_ADDRESS is created.
```
cat $HOME/.gotabit/config/genesis.json | grep $GT_GENESIS1_ADDRESS
          "address": "gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9",
          "address": "gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9",
```

## (Optional)Restore existing gotabid wallet with mnemonic seed phrase.
```
# You will be prompted to enter mnemonic seed.
gotabitd keys add <key-name> --recover
```

## Query the keystore for your public address
```
gotabitd keys show <key-name> -a
Replace <key-name> with a key name
```
>:bulb: **Tip**
- Get some GTB tokens to bond to your validator. To be in the active set you will need to have enough tokens to be in the top 150 validators by delegation weight. 


## Start the node
Start the mainnet.
```
gotabitd start
```

## Syncing the node
After starting the node, syncing starts till block height. This can take a long time. Check when syncing is completed.
```
# Query via the RPC (default port: 26657)
curl http://localhost:26657/status | jq .result.sync_info.catching_up
```
Synchronization has completed if the result return a false.

Alternatively, syncing can be done 
1. From genesis and following the Mainnet Upgrades path 
1. Sync from Snapshot. Download and extract snapshot
[Downlpad link TBA by GotaBit]
1. Sync with state-sync Please refer to [State-sync](/docs/node/validator/run/sync.md)

>:warning: **Caution**
Ensure that synchronization is completed by checking the status before [creating a validator](/docs/node/validator/run/setup.md) 

## Backup the following files.
It is advised that these files are not to be distributed and to be kept in a safe place.
1. $HOME/.gotabit/config/priv_validator_key.json
1. $HOME/.gotabit/config/node_key.json

# More information
More information can be found in the following
1. Juno section on [Joining Mainnet](https://docs.junonetwork.io/validators/joining-mainnet)
1. CosmosSDK section on [Running in Production](https://docs.cosmos.network/v0.47/run-node/run-production)  
