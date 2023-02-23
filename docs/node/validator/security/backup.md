---
title: Backup and Restore validators 
sidebar_position: 7
---

>:information_source: **Sypnosis** 
Backup validators as follows:
1. Shutdown validator instance.
1. Backup the chaindata directory.
1. Backup the config directory.
1. Restore the backup chaindata.
1. Start validator. 

# Backup chaindata

## Stop the validator instance.
You can hit control-C at terminal connection with the background process or stop the service of the running validator process.

## Backup the chaindata directory.
Under Linux, do the following:
```
cd $HOME\.gotabit
tar -czvf vdata.tar.gz data
```
You have a backup of chaindata file called vdata.tar.gz

## Backup the config directory.
Under Linux, do the following:
```
cd $HOME\.gotabit
tar -czvf vconfig.tar.gz config
```
You have a backup of configuration files called vconfig.tar.gz

## Restore the chaindata
Under Linux, do the following:
```
# set to the gotabit home of the data repository
cd $HOME\.gotabit

# remove the current chaindata files
rm -rf data

# restore the chaindata files
tar -xzf vdata.tar.gz
```

## Restore the config data
Under Linux, do the following:
```
# set to the gotabit home of config repository
cd $HOME\.gotabit

# remove the current config files
rm -rf config

# restore the config files
tar -xzf vconfig.tar.gz
```

# Start the validator
Start validator. Staking begins once the node is synchronized to current block height.
```
gotabitd start
```

