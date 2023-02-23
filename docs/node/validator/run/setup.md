---
title: Setup a validator
sidebar_position: 1
---
> :information_source: **Synopsis** 
- You have reached here because you have performed a [Setup and run testnet node](/docs/node/network/test.md ) and is ready to prepare a validator node. 


#  Running a Validator
> :bulb: **Pre-conditions** 
- [Setup and run mainnet](/docs/node/network/local.md ) is configured using keyring and a local node is avaiable. 
- If you are using key management system, then read [Setup kmd].
- The production mainnet is fully synchronized.


##  What is a Validator?
A validator function is to secure the Proof of Stake network. As an example, in a DDOS attack, the validator can isolate the network. It is also a working participant of the Tendermint consensus protocol in block provisioning. A validator can run as a single full node or a signer node. A more detailed description is given earlier [here](/docs/node/validator/what.md).

A variant of a validator is a delegator node running the Proof of Stake network.


##  Create Your Validator
1. Find your validator node
```
gotabitd tendermint show-validator
```
Output
```
gotabitd tendermint show-validator
{"@type":"/cosmos.crypto.ed25519.PubKey","key":"JDbqGajR5gcABVejT1SZYzoDxwR24tYh0/wfSiouy+8="}
```
Create your validator using the command below
```
gotabitd tx staking create-validator \
  --amount=1000000uatom \
  --pubkey=$(gotabitd tendermint show-validator) \
  --moniker=<moniker> \
  --chain-id=<chain-id> \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1000000" \
  --gas="auto" \
  --gas-prices="0.0025uatom" \
  --from=<key_name> \
  --keyring-backend=test  where eg. moniker="gtbmdb"
                                    chain-id="mainnet"
                                    key_name=mygenesis1


```
Output
```
Error: post failed: Post "http://localhost:26657": dial tcp [::1]:26657: connect: connection refused
```
##  Edit Validator Description
The following flags will identify your validator
```
Flags:
# Moniker will default to machine name if empty and is relied upon by delegator 
eg. --moniker="gotamdb" 
# To identify which validator to update
eg. --from=mygenesis1 
```

> :warning: **Caution** 
Some flags cannot be changed onece and a validator node is running. These are:
1. commission-max-rate and 
1. commission-max-change-rate 


##  View Validator Description
Use the command below:

```
gotabitd query staking validator <account_cosmos> where eg.account_cosmos=$MY_VALIDATOR_ADDRESS
```
Output
```
```

##  Track Validator Signing Information
To track historical signing events, use the command below:
```
gotabitd query slashing signing-info <validator-pubkey>\
  --chain-id=<chain_id>  where eg. chain_id="mainnet"
```

##  Unjail Validator
A jail time is imposed when a validator is not working on blocks for some reason. Use the operator account in order to be able to get block proposer rewards again (depends on the zone fee distribution). Use the command below:
```
gotabitd tx slashing unjail \
 --from=<key_name> \
 --chain-id=<chain_id>  where eg. key_name=mygenesis1 and chain_id="mainnet".

```

##  Confirm Your Validator is Running
Use the command check the status of the running validator.
```
gotabitd query tendermint-validator-set | grep "$(gotabitd tendermint show-address)"

```

##  Halting Your Validator
Stopping the validator gracefully can be achieve by:

1. Set the halt-height to the height at which you want your node to shutdown; 
or, 
1. By passing the --halt-height flag to gotabitd.

The node will shutdown with a zero exit code at that given height after committing the block.

Stop the validator by using the command below:
```

```

##  Advanced configuration
 See [Tendermint Core documentation on validator.](https://docs.tendermint.com/v0.34/tendermint-core/validators.html)

##  Common Problems and tips
Some common problems are listed on 
1. [Cosmos Hub documentation](https://hub.cosmos.network/main/validators/validator-setup.html)
2. [Tendermint Core documentation](https://docs.tendermint.com/v0.34/tendermint-core/validators.html)

