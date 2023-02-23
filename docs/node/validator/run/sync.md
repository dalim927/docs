---
title: Sync state
sidebar_position: 3
---

>:information_source: **Synopsis** `QUICK` The following process steps are required.
1. Modify your $HOME/.gotabit/config/app.toml.
1. Set SNAP_RPC variable
1. Query block details
1. Check varieble data
1. Set the required variables in config/config.toml

>:information_source: **Synopsis** `ADVANCED` The following uses ibc relayer
1. Init a new node2.
1. Modify the state-sync config in node1/config/app.toml and node2/config/app.toml. Set critical variables for state-sync BLOCK_HEIGHT and fetch the TRUST_HASH from the snapshot of sentry node1.
1. Enable snapshot on a trusted sentry node1. 
1. Restore the node1 snapshot to node1 by RPC copy.
1. Start the nodes.

When a blockchain grows in size over time, it will take longer to start again from initialization at zero block to synchronize at current block height of the peers (full syncronization) in the network.

To enable validators to rapidly join the network, Cosmos State-sync module is used.  

# Quick setup on a node.
>:bulb: **References**
- Read the [sync state method here](https://docs.scrt.network/secret-network-documentation/node-runners/node-setup/state-sync) by Secret's article.
- Sync state [Juno instructions](https://docs.junonetwork.io/validators/joining-mainnet/sync-with-state-sync)
## Configuration
Step 1. Modify your $HOME/.gotabit/config/app.toml.
```
# snapshot-interval specifies the block interval at which local state sync snapshots are
# taken (0 to disable). Must be a multiple of pruning-keep-every.
snapshot-interval = 2000
# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).
snapshot-keep-recent = 10
```

Step 2. Set SNAP_RPC variable
```
# RPC Proxy to be confirmed by gotabit.
SNAP_RPC="https://rpc-mainnet.gotabit.com:443" 
```

Step 3. Query block details.
Query the 
1. LATEST_HEIGHT from the snapshot RPC,  Set the state-sync BLOCK_HEIGHT; and, 
1. TRUST_HASH from the snapshot RPC. 
The BLOCK_HEIGHT to sync is determined by subtracting the snapshot-interval from the LATEST_HEIGHT

```
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)
```

Setp 4. Check varieble data
```
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH
```

Step 5. Set the required variables in $HOME/.gotabit/config/config.toml
```
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"|" $HOME/.juno/config/config.toml
```

Step 6. Start the mainnet.

# Advanced Setup - Sync state
## Using ibc transfer over Cosmos Hub.
>:memo: **Reference** Chengwenxi at https://github.com/cosmos/cosmos-sdk/issues/9324 Requires relayer installed.

The following steps are required:
- Create node1, node2 to join testnet ibc-0:
```
gotabitd init node1 --home node1
cp data/ibc-0/config/genesis.json node1/config/genesis.json

gotabitd init node2 --home node2
cp data/ibc-0/config/genesis.json node2/config/genesis.json
```
then update state-sync config in node1/config/app.toml and node2/config/app.toml:
```
[state-sync]
snapshot-interval = 100
snapshot-keep-recent = 4
```

- Start node1 and node2:
```
# NOTE: modify ports and add ibc-0 peer
gotabitd start --home node1

# NOTE: modify ports and add ibc-0 peer
gotabitd start --home node2
```
- Create node3 to join testnet ibc-0.

```
gotabitd init node3 --home node3
cp data/ibc-0/config/genesis.json node3/config/genesis.jsonUpdate config:

# config.toml
[statesync]
enable = true

rpc_servers = "ibc-0 node rpc"
trust_height = 1
trust_hash = "block 1 hash"
trust_period = "168h0m0s"
```

- Send ibc-transfer
```
rly tx transfer ibc-0 ibc-1 1000000samoleans $(rly chains address ibc-1)
rly tx relay-packets demo -d
```
- Start node3 using statesync mode
```
# NOTE: modify ports and add ibc-0 peer
gotabitd start --home node3
```
