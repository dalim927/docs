---
title: Run a RPC proxy
sidebar_position: 4
---

> :memo: **Notes** The Testnet config shows the given rpc proxy address in [Public Networks](/docs/tutorials/network.md)

# Remote Procedure Calls
A Remote Procedure Call (RPC) over tcp can be called on port 443 using the URL https://rpc-testnet.gotabit.dev:443. There are 29 endpoints and some endppoint will require arguments.

For example, a simple RPC Proxy call can be made over tcp between light client daemon and Tendermint Core to query ABCI information. 

The abci_info is given below after running it on a browser
```
https://rpc-testnet.gotabit.dev/abci_info?
```
Output
```
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {
    "response": {
      "data": "gotabit",
      "version": "v1.0.0",
      "last_block_height": "2175520",
      "last_block_app_hash": "6Uj4/YTQGv7umxczNx07iT/1+tYsADDiAQvb4JgAx88="
    }
  }
}
```
