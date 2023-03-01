---
title:  Gotabitd CLI usage example
description: How to create a custom gotabit database.
sidebar_position: 4
---

# Initialize a custom chaindata

By default, GotaBit chaindata is stored under a hidden directory (.gotabit/)
```
>tree $HOME/.gotabit

$HOME/.gotabit
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
> :bulb: **Tip:** Tree command is available free below
```
# yum install tree	 #RHEL/CentOS 7
# dnf install tree	 #Fedora 22+ and /RHEL/CentOS 8
$ sudo apt install tree	 #Ubuntu/Debian
# sudo zypper in tree 	 #openSUSE
# brew install tree #MacOSX
```

## Check that gotabitd is available and the version used 
```
gotabitd version --long
```
Output
```
version: v1.0.0
commit: "40 alphanumeric string"
build_tags: netgo,ledger
go: go version go1.19.4 darwin/amd64
build_deps:
- filippo.io/edwards25519@v1.0.0-beta.2
- github.com/99designs/go-keychain@v0.0.0-20191008050251-8e49817e8af4
...
```

## Then, create your GotaBit chaindata in a custom directory using:

1. Moniker = "gtbmdb"
1. Chain Id = "mainnet"
1. Directory = "$HOME/Projects/gtbmaindb"

```
gotabitd init gtbmdb --chain-id mainnet --home "$HOME/Projects/gtbmaindb"
```

Output

```
{"app_message":{"auth":{"accounts":[],"params":{"max_memo_characters":"256","sig_verify_cost_ed25519":"590","sig_verify_cost_secp256k1":"1000","tx_sig_limit":"7","tx_size_cost_per_byte":"10"}},"authz":{"authorization":[]},"bank":{"balances":[],"denom_metadata":[],"params":{"default_send_enabled":true,"send_enabled":[]},"supply":[]},"capability":{"index":"1","owners":[]},"crisis":{"constant_fee":{"amount":"1000","denom":"stake"}},"distribution":{"delegator_starting_infos":[],"delegator_withdraw_infos":[],"fee_pool":{"community_pool":[]},"outstanding_rewards":[],"params":{"base_proposer_reward":"0.010000000000000000","bonus_proposer_reward":"0.040000000000000000","community_tax":"0.020000000000000000","withdraw_addr_enabled":true},"previous_proposer":"","validator_accumulated_commissions":[],"validator_current_rewards":[],"validator_historical_rewards":[],"validator_slash_events":[]},"epochs":{"epochs":[{"current_epoch":"0","current_epoch_start_height":"0","current_epoch_start_time":"0001-01-01T00:00:00Z","duration":"86400s","epoch_counting_started":false,"identifier":"day","start_time":"0001-01-01T00:00:00Z"},{"current_epoch":"0","current_epoch_start_height":"0","current_epoch_start_time":"0001-01-01T00:00:00Z","duration":"3600s","epoch_counting_started":false,"identifier":"hour","start_time":"0001-01-01T00:00:00Z"},{"current_epoch":"0","current_epoch_start_height":"0","current_epoch_start_time":"0001-01-01T00:00:00Z","duration":"604800s","epoch_counting_started":false,"identifier":"week","start_time":"0001-01-01T00:00:00Z"}]},"evidence":{"evidence":[]},"feegrant":{"allowances":[]},"genutil":{"gen_txs":[]},"gov":{"deposit_params":{"max_deposit_period":"172800s","min_deposit":[{"amount":"10000000","denom":"stake"}]},"deposits":[],"proposals":[],"starting_proposal_id":"1","tally_params":{"quorum":"0.334000000000000000","threshold":"0.500000000000000000","veto_threshold":"0.334000000000000000"},"votes":[],"voting_params":{"voting_period":"172800s"}},"ibc":{"channel_genesis":{"ack_sequences":[],"acknowledgements":[],"channels":[],"commitments":[],"next_channel_sequence":"0","receipts":[],"recv_sequences":[],"send_sequences":[]},"client_genesis":{"clients":[],"clients_consensus":[],"clients_metadata":[],"create_localhost":false,"next_client_sequence":"0","params":{"allowed_clients":["06-solomachine","07-tendermint"]}},"connection_genesis":{"client_connection_paths":[],"connections":[],"next_connection_sequence":"0","params":{"max_expected_time_per_block":"30000000000"}}},"inbox":{"messages":[]},"interchainaccounts":{"controller_genesis_state":{"active_channels":[],"interchain_accounts":[],"params":{"controller_enabled":true},"ports":[]},"host_genesis_state":{"active_channels":[],"interchain_accounts":[],"params":{"allow_messages":[],"host_enabled":true},"port":"icahost"}},"mint":{"minter":{"epoch_provisions":"0.000000000000000000"},"params":{"developer_fund_pool_address":"","distribution_proportions":{"community_pool":"0.100000000000000000","developer_fund_pool":"0.200000000000000000","eco_fund_pool":"0.300000000000000000","staking":"0.400000000000000000"},"eco_fund_pool_address":"","epoch_identifier":"hour","genesis_epoch_provisions":"1000000000.000000000000000000","mint_denom":"stake","minting_rewards_distribution_start_epoch":"1","reduction_factor":"0.666666666666666666","reduction_period_in_epochs":"6"},"reduction_started_epoch":"0"},"params":null,"slashing":{"missed_blocks":[],"params":{"downtime_jail_duration":"600s","min_signed_per_window":"0.500000000000000000","signed_blocks_window":"100","slash_fraction_double_sign":"0.050000000000000000","slash_fraction_downtime":"0.010000000000000000"},"signing_infos":[]},"staking":{"delegations":[],"exported":false,"last_total_power":"0","last_validator_powers":[],"params":{"bond_denom":"stake","historical_entries":10000,"max_entries":7,"max_validators":100,"unbonding_time":"1814400s"},"redelegations":[],"unbonding_delegations":[],"validators":[]},"transfer":{"denom_traces":[],"params":{"receive_enabled":true,"send_enabled":true},"port_id":"transfer"},"upgrade":{},"vesting":{},"wasm":{"codes":[],"contracts":[],"gen_msgs":[],"params":{"code_upload_access":{"address":"","addresses":[],"permission":"Everybody"},"instantiate_default_permission":"Everybody"},"sequences":[]}},"chain_id":"mainnet","gentxs_dir":"","moniker":"gtbmdb","node_id":"76e1f6f56a0beac8f979b4fb427621fd2bea03fe"}
```

# The chaindata directory is as shown
```
$HOME/Projects/gtbmdb
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
