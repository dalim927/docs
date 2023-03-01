---
title: Other Production Setup
sidebar_position: 3
---
# Requirements
The following are setup requirements for the Mainnet production server.

## Important mandatory firewall setups 

At a minimum, the following 3 endpoints are to be opened for the network traffic.

- Reset UFW to disallow all incoming connections and allow outgoing
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

- Make sure that port 22 (ssh) stays open. Both commands are the same.

```
sudo ufw allow ssh   or   sudo ufw allow 22
```

- Allow Port 26656 (tendermint p2p port). If the node has a modified p2p port then that port must be used here.
```
sudo ufw allow 26656/tcp
```
- Allow port 26660 (tendermint prometheus). This acts as the applications monitoring port as well.
```
sudo ufw allow 26660/tcp
```

## Optional firewall ports
Please check with your network admnistrator for assistance.

Tendermint JsonRPC
```
sudo ufw allow 26657/tcp
```

Cosmos SDK GRPC
```
sudo ufw allow 9090/tcp
```

Cosmos SDK REST
```
sudo ufw allow 1317/tcp
```

Enable ufw
```
sudo ufw enable
```
# Signing

## File
File based signing is simple and default usage. It uses both files $HOME/.gotabit/config/priv_val_key.json and data/priv_val_state.json

## Remote signer
A remote signer uses a different server to sign blocks with the consensus key. There is more security signing blocks using a separate remote server other than from the running node.

Two common signers are [tmkms](https://github.com/iqlusioninc/tmkms) and [horcrux](https://github.com/strangelove-ventures/horcrux).  Please refer to the links provided.

# More information
You can find these in the CosmosSDK section on [Running in Production](https://docs.cosmos.network/v0.47/run-node/run-production)  
