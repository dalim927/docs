---
title: Delegator CLI
description: Delegator use of command line interface
sidebar_position: 2
---
>:memo: **Synopsis** 
The gotabitd command line interface (CLI) allows a delegator to independently bond, check, monitor its gtb token staked with a validator as well as participate in governance. The following are high level steps involved:
1. Installing gotabit.
1. Accessing Gotabit network.
1. Restoring or creating account.
1. Setup and configure.
1. Query the state.
1. Send transactions.
1. Participating in governance.

>:information_source: **Reference** [Delegator Command Line Interface](https://hub.cosmos.network/main/delegators/delegator-guide-cli.html#connecting-to-a-remote-full-node
)
# Delegator CLI steps.
Below are useful CLI steps for a delegator:

## Installing gotabit.
Please refer to [Instruction Steps for Installing Gotabit](/docs/node//setup/instruction-steps.md)

## Accessing Gotabit network.
Gotabit network is accessible by
- building [full node](/docs/node/network/main.md); or,
- by remote connection to the Gotabit network. In order to connect to a remote full node, an address of the following format will be given to you: For example, https:[TBA by remote operator]:26657

## Restore existing gotabid wallet with mnemonic seed phrase.
Restore of account can be done using the 24 mnemonic phrase.
```
# You will be prompted to enter mnemonic seed.
gotabitd keys add <key-name> --recover
```
## Query the keystore for your public address.
```
gotabitd keys show <key-name> -a
Replace <key-name> with a key name
```
>:bulb: **Tip**
- Get some GTB tokens to bond to your validator. To be in the active set you will need to have enough tokens to be in the top 150 validators by delegation weight. 

## Setup and configure.
To setup gotabit config file, do the following:
```
gotabitd config <flag> <value>
```
The above allows you to set a default value for each given local flag eg "--chain-id"; or, global flag eg. "--node" and the value can be a string or integer.

First, set up the address of the full-node you want to connect to:
```
gotabitd config node <host>:<port>
```
For example: gotabitd config node https:[TBA by remote operator]:26657 
>:memo: **Note** port 26657 is the usual port but other nodes may decide a different port.

Set the chain-id to connect:
```
gotabitd config chain-id "gotabit node chain-id"
```
where the string "gotabit node" is given to you by your administrator or remote operator.

## Query the state.
There are several queries you can make using gotabitd on the the blockchain.
```
// query account balances and other account-related information
gotabitd query account <yourAddress>

// query the list of validators
gotabitd query staking validators

// query the information of a validator given their address (eg. gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9)
gotabitd query staking validator <validatorAddress>

// query all delegations made from a delegator given their address (eg. 9ce78cd69afd51643ca0791e6fbeec3fbb62da42)
gotabitd query staking delegations <delegatorAddress>

// query a specific delegation made from a delegator (eg. 9ce78cd69afd51643ca0791e6fbeec3fbb62da42) to a validator (eg. gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9) given their addresses
gotabitd query staking delegation <delegatorAddress> <validatorAddress>

// query the rewards of a delegator given a delegator address (eg. 9ce78cd69afd51643ca0791e6fbeec3fbb62da42)
gotabitd query distribution rewards <delegatorAddress>

// query all proposals currently open for depositing
gotabitd query gov proposals --status deposit_period

// query all proposals currently open for voting
gotabitd query gov proposals --status voting_period

// query a proposal given its proposalID
gotabitd query gov proposal <proposalID>

```

## Send transactions.
Make sure that you have enough gas fee to be able to send transactions. The formula is as follows:
```
fees = "gas" * "gasPrices"

where "gas" is the gas amount calculated/estimated for the transaction
and,  "gasPrices" is the price of each unit of gas. Each validator sets a min-gas-price value, and will only include transactions that have a gasPrice greater than their min-gas-price.

For main-net, "gas-prices" is 0.0025ugbt. 

```

### Sending tokens
A quick estimate of the fee is by sending a test transaction. Below is an example of sending an amount of tokens to an address
```
// Send a certain amount of tokens to an address
// Eg. value for parameters (do not actually use these values in your tx!!): <to_address>=gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9 <amount>=1000000uGTB
// Eg. value for flags: <gasPrice>=0.0025ugbt

gotabitd tx bank send [from_key_or_address] [to_address] [amount] [flags]
```

Bond an amount of gtb to a given validator.

```
// eg value for flags: <validatorAddress>=gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9, <amountToBound>=10000000uGTB, <gasPrice>=0.0025uGTB

gotabitd tx staking delegate <validatorAddress> <amountToBond> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Redelegate a certain amount of Atoms from a validator to another
// Can only be used if already bonded to a validator
// Redelegation takes effect immediately, there is no waiting period to redelegate
// After a redelegation, no other redelegation can be made from the account for the next 3 weeks
// eg. value for flags: <stcValidatorAddress>=gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9, <amountToRedelegate>=100000000ugtb, <gasPrice>=0.0025uGTB

gotabitd tx staking redelegate <srcValidatorAddress> <destValidatorAddress> <amountToRedelegate> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Withdraw all rewards
// eg. value for flag: <gasPrice>=0.0025uGTB

gotabitd tx distribution withdraw-all-rewards --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Unbond a certain amount of gtb tokens from a given validator
// You will have to wait 3 weeks before your Atoms are fully unbonded and transferrable
// eg. value for flags: <validatorAddress>=gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9, <amountToUnbound>=10000000uGTB, <gasPrice>=0.0025uGTB

gotabitd tx staking unbond <validatorAddress> <amountToUnbond> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

```

### Confirm that your tokens are sent successfully.

```
// your balance should change after you bond Atoms or withdraw rewards
gotabitd query account

// you should have delegations after you bond Atom
gotabitd query staking delegations <delegatorAddress>

// this returns your tx if it has been included
// use the tx hash that was displayed when you created the tx
gptabitd query tx <txHash>
```

## Participating in governance.

Please refer to [Governance](/docs/governance/overview.md)

Below commands are to be run on a safe online computer to participate in governance.

```
// Submit a Proposal
// <type>=text/parameter_change/software_upgrade
// eg. value for flag: <gasPrice>=0.0025uGTB

gotabitd tx gov submit-proposal --title "Test Proposal" --description "My awesome proposal" --type <type> --deposit=10000000uGTB --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --from <delegatorKeyName>

// Increase deposit of a proposal
// Retrieve proposalID from $gaiad query gov proposals --status deposit_period
// eg. value for parameter: <deposit>=10000000uGTB

gotabitd tx gov deposit <proposalID> <deposit> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --from <delegatorKeyName>

// Vote on a proposal
// Retrieve proposalID from $gaiad query gov proposals --status voting_period
// <option>=yes/no/no_with_veto/abstain

gotabitd tx gov vote <proposalID> <option> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --from <delegatorKeyName>

```

If for some reason, you wish to sign your transaction offline, follow the CLI steps below:

```
// Bond gtb
// eg. value for flags: <amountToBound>=10000000uGTB, <bech32AddressOfValidator>=gio1r4y38297tk2uvp3afeacgec7r0k2kc50lmw9m9, <gasPrice>=0.00uGTB, <delegatorAddress>=c9ce78cd69afd51643ca0791e6fbeec3fbb62da42

gotabitd tx staking delegate <validatorAddress> <amountToBond> --from <delegatorAddress> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice> --generate-only > unsignedTX.json

```

To sign the transaction you need to do the following:
``
gotabitd query account <yourAddress> --chain-id "gotabit node chain-id"
``

Copy the unsignedTx.json file to another online computer by

a. Checking that it exists.
```
cat unsignedTx.json

```
b. Use this command to sign it in an offline computer/
```
gotabitd tx sign unsignedTx.json --from <delegatorKeyName> --offline --chain-id "gotabitd node chain-id" --sequence <sequence> --account-number <account-number> > signedTx.json

```
c. Then copy the signedTx.json back to the online computer and do the following to send the transaction.
```
gotabitd tx broadcast signedTx.json
```

Thats all.