---
title: Upgrade node
sidebar_position: 8
---
>:information_source: **Sypnosis** 
Upgrade node as follows:
1. Shutdown validator instance.
1. Backup the current node codebase and data directory.
1. Remove the config and chaindata files.
1. Install the new release of gotabit codebase.
1. Create a new chaindata and run till full node is synchronized.
1. Alternatively, restore from backup dataset of chaindata. Note that sometimes, the release may require you to create a new chaindata.
1. Start validator. 

# Upgrade gotabid with new release

## Stop the validator instance.
You can hit control-C at terminal connection with the background process or stop the service of the running validator process.

# Backup the current codebase and chaindata/config directory.
Follow only the [backup and restore](/docs/node/validator/security/backup.md) process.

Additionally, do the following:

```
# Keep a copy of the old release of Gotabit codebase.

# Assuming that Gotabit is at $HOME directory.
cd $HOME\
tar -czvf gtbcode.tar.gz gotabit
# You have a backup copy of Gotabit previous release called gtbcode.tar.gz
```

## Remove the config and chain and data files for init command to recreate it
Under Linux, do the following:
```
# set to the gotabit home of the data repository
cd $HOME\.gotabit

# remove the current chaindata files
rm -rf data

# remove the current config files
rm -rf config

```
>:memo: **Tip** There is no need to remove the config and data diretory. The init command will recreate the chaindata and config files.

# Install the new release of Gotabit codebase.
Perform the steps to [Install Steps](/docs/node/setup/instruction-steps.md)

# Restore the config files
```
# restore the config files
tar -xzf vdata.tar.gz
```

# Start and sync the validator
Start validator. Staking begins once synchronized to current block height.
```
gotabitd start
```
