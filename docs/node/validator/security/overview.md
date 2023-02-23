---
title: Validator security
sidebar_position: 1
---

>:information_source: **Sypnosis** Network security for validators are important to prevent and recover quickly from network attacks eg DDOS. In this section we are referring to network security to provide resiliency for mission critical operations.

Two strategies to protect validators are:
1. Key management using hardware security module (HSM); and,
1. Sentry node.


# Key Management HSM
>:memo: **Reference** Important excerpts below are from [CosmosSDK](https://hub.cosmos.network/main/validators/security.html) and [Yubico](https://www.yubico.com/products/hardware-security-module/)

Storage and management of keys using any HSM modules must support **ed25519** signatures for the hub. Validator servers can install YubiHSM2 to support **ed25519**. See [Setup Tendermint + Yubihsm2](/docs/node/validator/security/yubiHSM2.md).

[YubiHSM2](https://developers.yubico.com/YubiHSM2/) is available to protect and secure the validators for production use. It uses advanced hashing, symmetric and asymmetric key cryptographic methods of encryption to secure critical application identities and data.

# Sentry nodes
DDOS, denial of service attacks a server node to render it unresponsive and denies all service requests and responses. A validator node that is co-located with a sentry node can mitigate the risk of DDOS network attack.

A Sentry node server can be secured and quickly spun up with a different IP address for DDOS protection. See your network security analyst on firewall rules, reverse proxy server and load balancers using virtual IPs to secure your node. 

>:memo: **Reference** 
- Please refer to proposal of [Sentry Node Architecture](https://forum.cosmos.network/t/sentry-node-architecture-overview/454)

To setup your sentry node modify the $HOME/.gotabit/config/config.toml.

Validator node to modify:

```
# Comma separated list of nodes to keep persistent connections to
# Do not add private peers to this list if you don't want them advertised
persistent_peers =[list of sentry nodes]

# Set true to enable the peer-exchange reactor
pex = false

```

Sentry node to modify config.toml
```
# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)
# Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc@3.87.179.235:26656

private_peer_ids = "node_ids_of_private_peers"
```

# Environment variables simplification

Set environment variables to prefix flags as follows:

1. "**GT**" - flag prefix for Gotabit node
1. "**TR**" = flag prefix for Tendermint 
1. "**BC**" - flag prefix for base CLIs

For example the variable "GT-CHAIN-ID" will refer to command line flag "chain-id".  it is important to lock down the environment variables so that no confusion arises when executing command line flags as the native command line flag takes precedence.