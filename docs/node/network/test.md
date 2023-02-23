---
title: Run a testnet node
sidebar_position: 3
---

> :bulb: **Tips:** 
- Learn [Setting up keyring](/docs/node/pre-requisites/keyring.md) before going forward. This is needed to create a genesis account.
- A testnet contains a configuration skeleton, initialized with only a bare minimum config/ and data/ files. You are provided with a downloadable config/genesis.json file that contains peers node id. Below is an example of how you can download the file.
```
$ wget https:[provided by gotabit.../genesis.json] -o $HOME/.gotabit/config/genesis.json
```

> :information_source: **Synopsis**
Before running a local node, several steps must be performed in sequence. 
1. Start by initializing manually using the gitabitd init command with the chaindata empty. It will only contain bare minimum node configuration details. 
1. At least one genesis account is created to populate the state records.
1. Start the node synchroization.
1. After synchronization is completed, it can then start transacting with peers on the test network.


# Setup a test node

In setting up a test node, we will be creating a custom home for the test database.

Open a terminal window, run the following gotabitd all-in-one CLI steps below.

##  Initialize the Chain
Use CLI init command with given parameters. 
1. Moniker = "gtbtdb"
1. Chain Id = "testnet"
1. Directory = "$HOME/Projects/gtbtestdb"

```
gotabitd init gtbtdb --chain-id testnet --home "$HOME/Projects/gtbtestdb"
```

Output
```
{"app_message":{"auth":{"accounts":[],"params":{"max_memo_characters":"256","sig_verify_cost_ed25519":"590","sig_verify_cost_secp256k1":"1000","tx_sig_limit":"7","tx_size_cost_per_byte":"10"}},"authz":{"authorization":[]},"bank":{"balances":[],"denom_metadata":[],"params":{"default_send_enabled":true,"send_enabled":[]},"supply":[]},"capability":{"index":"1","owners":[]},"crisis":{"constant_fee":{"amount":"1000","denom":"stake"}},"distribution":{"delegator_starting_infos":[],"delegator_withdraw_infos":[],"fee_pool":{"community_pool":[]},"outstanding_rewards":[],"params":{"base_proposer_reward":"0.010000000000000000","bonus_proposer_reward":"0.040000000000000000","community_tax":"0.020000000000000000","withdraw_addr_enabled":true},"previous_proposer":"","validator_accumulated_commissions":[],"validator_current_rewards":[],"validator_historical_rewards":[],"validator_slash_events":[]},"epochs":{"epochs":[{"current_epoch":"0","current_epoch_start_height":"0","current_epoch_start_time":"0001-01-01T00:00:00Z","duration":"86400s","epoch_counting_started":false,"identifier":"day","start_time":"0001-01-01T00:00:00Z"},{"current_epoch":"0","current_epoch_start_height":"0","current_epoch_start_time":"0001-01-01T00:00:00Z","duration":"3600s","epoch_counting_started":false,"identifier":"hour","start_time":"0001-01-01T00:00:00Z"},{"current_epoch":"0","current_epoch_start_height":"0","current_epoch_start_time":"0001-01-01T00:00:00Z","duration":"604800s","epoch_counting_started":false,"identifier":"week","start_time":"0001-01-01T00:00:00Z"}]},"evidence":{"evidence":[]},"feegrant":{"allowances":[]},"genutil":{"gen_txs":[]},"gov":{"deposit_params":{"max_deposit_period":"172800s","min_deposit":[{"amount":"10000000","denom":"stake"}]},"deposits":[],"proposals":[],"starting_proposal_id":"1","tally_params":{"quorum":"0.334000000000000000","threshold":"0.500000000000000000","veto_threshold":"0.334000000000000000"},"votes":[],"voting_params":{"voting_period":"172800s"}},"ibc":{"channel_genesis":{"ack_sequences":[],"acknowledgements":[],"channels":[],"commitments":[],"next_channel_sequence":"0","receipts":[],"recv_sequences":[],"send_sequences":[]},"client_genesis":{"clients":[],"clients_consensus":[],"clients_metadata":[],"create_localhost":false,"next_client_sequence":"0","params":{"allowed_clients":["06-solomachine","07-tendermint"]}},"connection_genesis":{"client_connection_paths":[],"connections":[],"next_connection_sequence":"0","params":{"max_expected_time_per_block":"30000000000"}}},"inbox":{"messages":[]},"interchainaccounts":{"controller_genesis_state":{"active_channels":[],"interchain_accounts":[],"params":{"controller_enabled":true},"ports":[]},"host_genesis_state":{"active_channels":[],"interchain_accounts":[],"params":{"allow_messages":[],"host_enabled":true},"port":"icahost"}},"mint":{"minter":{"epoch_provisions":"0.000000000000000000"},"params":{"developer_fund_pool_address":"","distribution_proportions":{"community_pool":"0.100000000000000000","developer_fund_pool":"0.200000000000000000","eco_fund_pool":"0.300000000000000000","staking":"0.400000000000000000"},"eco_fund_pool_address":"","epoch_identifier":"hour","genesis_epoch_provisions":"1000000000.000000000000000000","mint_denom":"stake","minting_rewards_distribution_start_epoch":"1","reduction_factor":"0.666666666666666666","reduction_period_in_epochs":"6"},"reduction_started_epoch":"0"},"params":null,"slashing":{"missed_blocks":[],"params":{"downtime_jail_duration":"600s","min_signed_per_window":"0.500000000000000000","signed_blocks_window":"100","slash_fraction_double_sign":"0.050000000000000000","slash_fraction_downtime":"0.010000000000000000"},"signing_infos":[]},"staking":{"delegations":[],"exported":false,"last_total_power":"0","last_validator_powers":[],"params":{"bond_denom":"stake","historical_entries":10000,"max_entries":7,"max_validators":100,"unbonding_time":"1814400s"},"redelegations":[],"unbonding_delegations":[],"validators":[]},"transfer":{"denom_traces":[],"params":{"receive_enabled":true,"send_enabled":true},"port_id":"transfer"},"upgrade":{},"vesting":{},"wasm":{"codes":[],"contracts":[],"gen_msgs":[],"params":{"code_upload_access":{"address":"","addresses":[],"permission":"Everybody"},"instantiate_default_permission":"Everybody"},"sequences":[]}},"chain_id":"testnet","gentxs_dir":"","moniker":"gtbtdb","node_id":"9ce78cd69afd51643ca0791e6fbeec3fbb62da42"}
```

Verify that template chaindata test directory is created
``
tree $HOME/Projects/gtbtestdb
``
Output
```
$HOME/Projects/gtbtestdb
├── config
│   ├── app.toml
│   ├── client.toml
│   ├── config.toml
│   ├── genesis.json
│   ├── node_key.json
│   └── priv_validator_key.json
└── data
    └── priv_validator_state.json
```

##  Add keyring to obtain my first genesis address
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
## Setup variable "MY_GENESISTEST1_ADDRESS"
Do the following using command line
```
MY_GENESISTEST1_ADDRESS=$(gotabitd keys show mygenesistest1 -a --keyring-backend=test)
```
Display the address using command line
```
echo $MY_GENESISTEST1_ADDRESS
gio17egu4gzy4zgywp3hrxl36d6sxufhnrwp6ls9zl
```

##  Adding Genesis Account - mygenesis1
A genesis test user account is created to allow the running node to record the state transactions. Use the CLI command to create a genesis account.

```
gotabitd add-genesis-account $MY_GENESISTEST1_ADDRESS 100000000000stake --keyring-backend test --home "$HOME/Projects/gtbtestdb
```

## Verify that $MY_GENESISTEST1_ADDRESS is created.

```
cat $HOME/Projects/gtbtestdb/config/genesis.json | grep $MY_GENESISTEST1_ADDRESS
          "address": "gio17egu4gzy4zgywp3hrxl36d6sxufhnrwp6ls9zl",
          "address": "gio17egu4gzy4zgywp3hrxl36d6sxufhnrwp6ls9zl",
```

## Show tendermint node
```
gotabitd tendermint show-node-id --home "$HOME/Projects/gtbtestdb"
9ce78cd69afd51643ca0791e6fbeec3fbb62da42
```

##  Configuring the Node Using `app.toml` and `config.toml`

Two config TOML files are found under the gtbtestdb/config directory. TOML is a file format for configuration files. Both config/app.toml and config/app.toml files are automatically created when the blockchain is created.
- config.toml is used to configure Tendermint base and ABCI advanced parameters; and,
- app.toml is used to configure application related parameters such as telemetry, APIs, gRPC configurations.
Default parameters in the configuation file are only modified for tuning and debugging purposes.  Always keep a copy of the originals.  

Use a text editor to make changes.

> :memo: **Notes** 
- Changes are required to point to config gPRC, RPC addresses from [Public Network Testnet Config](/docs/tutorials/network.md)
- Add "persistent peers" to the file to line 214 which you can find it from the config.toml. An outdated testnet peer is shown here as an example:

```
persistent_peers = “055a315b20c847813535d7c2b4cedba5756e3d79@207.180.204.112:26656”

```

##  Run the fast synchronization
Use the CLI start command.

```
gotabitd start --fast_sync --home "$HOME/Projects/gtbtestdb"
```

Output

```
2:35PM INF starting node with ABCI Tendermint in-process
2:35PM INF service start impl=multiAppConn module=proxy msg={}
2:35PM INF service start connection=query impl=localClient module=abci-client msg={}
2:35PM INF service start connection=snapshot impl=localClient module=abci-client msg={}
2:35PM INF service start connection=mempool impl=localClient module=abci-client msg={}
2:35PM INF service start connection=consensus impl=localClient module=abci-client msg={}
2:35PM INF service start impl=EventBus module=events msg={}
2:35PM INF service start impl=PubSub module=pubsub msg={}
2:35PM INF service start impl=IndexerService module=txindex msg={}
2:35PM INF ABCI Handshake App Info hash= height=0 module=consensus protocol-version=0 software-version=v1.0.0
2:35PM INF ABCI Replay Blocks appHeight=0 module=consensus stateHeight=0 storeHeight=0
2:35PM INF asserting crisis invariants inv=1/11 module=x/crisis name=gov/module-account
2:35PM INF asserting crisis invariants inv=2/11 module=x/crisis name=bank/nonnegative-outstanding
2:35PM INF asserting crisis invariants inv=3/11 module=x/crisis name=bank/total-supply
2:35PM INF asserting crisis invariants inv=4/11 module=x/crisis name=staking/module-accounts
2:35PM INF asserting crisis invariants inv=5/11 module=x/crisis name=staking/nonnegative-power
2:35PM INF asserting crisis invariants inv=6/11 module=x/crisis name=staking/positive-delegation
2:35PM INF asserting crisis invariants inv=7/11 module=x/crisis name=staking/delegator-shares
2:35PM INF asserting crisis invariants inv=8/11 module=x/crisis name=distribution/nonnegative-outstanding
2:35PM INF asserting crisis invariants inv=9/11 module=x/crisis name=distribution/can-withdraw
2:35PM INF asserting crisis invariants inv=10/11 module=x/crisis name=distribution/reference-count
2:35PM INF asserting crisis invariants inv=11/11 module=x/crisis name=distribution/module-account
2:35PM INF asserted all invariants duration=9.190766 height=0 module=x/crisis
2:35PM INF created new capability module=ibc name=ports/transfer
2:35PM INF port binded module=x/ibc/port port=transfer
2:35PM INF claimed capability capability=1 module=transfer name=ports/transfer
2:35PM INF created new capability module=ibc name=ports/icahost
2:35PM INF port binded module=x/ibc/port port=icahost
2:35PM INF claimed capability capability=2 module=icahost name=ports/icahost
```

##  Join the testnet
After fast synchronization has completed, use the CLI start command.
```
gotabitd start --home "$HOME/Projects/gtbtestdb"
```

##  Testnet Options

We have customized the configuration of the test network with flags. In order to see all flag options, append the `--help` flag to each command.

