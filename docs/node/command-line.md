---
title: Command line usage
description: Using the command line interface of gotabitd
sidebar_position: 2
---

## Gotabitd

`gotabitd` is the all-in-one CLI and node daemon for interacting with the GotaBit blockchain. 

To view various subcommands and their expected arguments, use the following command:

``` sh
gotabitd --help

Stargate GotabitHub App

Usage:
  gotabitd [command]

Available Commands:
  add-genesis-account      Add a genesis account to genesis.json
  add-wasm-genesis-message Wasm genesis subcommands
  collect-gentxs           Collect genesis txs and output a genesis.json file
  config                   Create or query an application CLI configuration file
  debug                    Tool for helping with debugging your application
  export                   Export state to JSON
  gentx                    Generate a genesis tx carrying a self delegation
  help                     Help about any command
  init                     Initialize private validator, p2p, genesis, and application configuration files
  keys                     Manage your application's keys
  migrate                  Migrate genesis to a specified target version
  query                    Querying subcommands
  rollback                 rollback cosmos-sdk and tendermint state by one height
  start                    Run the full node
  status                   Query remote node for status
  tendermint               Tendermint subcommands
  tx                       Transactions subcommands
  validate-genesis         validates the genesis file at the default location or at the location passed as an arg
  version                  Print the application binary version information

Flags:
  -h, --help                help for gotabitd
      --home string         directory for config and data (default "/root/.gotabit")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "gotabitd [command] --help" for more information about a command.
```
