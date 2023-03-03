---
title: Install and Setup
description: Install and setting up GotaBit binary
sidebar_position: 1
---
```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```
# Installation
This guide will explain how to install the GotaBit binary and run the cli. With this binary installed on a server, you can participate on the mainnet as either a Full Node or a Validator.

# Build Requirements
At present, the Gotabit fully supports installation on linux distributions. For the purpose of this instruction set, we'll be using Ubuntu 20.04.3 LTS. It is also possible to install GotaBit on Unix, while Windows may require additional unsupported third party installation. All steps are listed below for a clean install.

1. [Update & install build tools](#build-tools)

1. [Install Go](#install-go)

1. [Install GotaBit binaries](#install-gotabit-binaries)

## Build Tools
Install `make` and `gcc`.

Ubuntu:
```
sudo apt-get update
sudo apt-get install -y make gcc
```

## Install Go

>:memo: **Go 1.18+** or later is required for the Gotabit.

We suggest the following two ways to install Go. Check out the [official docs](https://go.dev/doc/install) and Go installer for the correct download for your operating system. Alternatively, you can install Go yourself from the command line. Detailed below are standard default installation locations, but feel free to customize.

[Go Binary Downloads](https://go.dev/dl/)

Ubuntu:

At the time of this writing, the latest release is 1.18.2. We're going to download the tarball, extract it to /usr/local, and export GOROOT to our $PATH
```
curl -OL https://golang.org/dl/go1.18.2.linux-amd64.tar.gz

sudo tar -C /usr/local -xvf go1.18.2.linux-amd64.tar.gz

export PATH=$PATH:/usr/local/go/bin
```
Remember to add GOPATH to your $PATH environment variable. If you're not sure where that is, run go env GOPATH. This will allow us to run the gaiad binary in the next step. If you're not sure how to set your $PATH take a look at [these instructions](https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them) 

```
export PATH=$PATH:$(go env GOPATH)/bin
```



## Install GotaBit

Next, let's install the latest version of GotaBit. Make sure you git checkout the correct released [official version] (https://github.com/gotabit/gotabit) and check out the `main` branch for the latest stable release.

```
git clone -b <latest-release-tag> https://github.com/gotabit/gotabit
cd gotabit && make install
```
If this command fails due to the following error message, you might have already set LDFLAGS prior to running this step.

```
# github.com/gotabit/gotabit/cmd/gotabitd
flag provided but not defined: -L
usage: link [options] main.o
...
make: *** [install] Error 2
Unset this environment variable and try again.
```

```
LDFLAGS="" make install
```
>:memo: **NOTE:** If you still have issues at this step, please check that you have the latest stable version of GO installed.

That will install the gotabitd binary. Verify that everything installed successfully by running:
```
gotabid version --long
```
You should see something similar to the following:

```
name: gotabit
server_name: gotabitd
version: <x.x.x>
commit: <Commit hash>
build_tags: netgo,ledger
go: go version go1.18.2 linux/amd64
build_deps:
#
```

# Build Tags
Build tags indicate special features that have been enabled in the binary.

| Build Tag | Description                                         |
|-----------|-----------------------------------------------------|
| netgo     | Name resolution will use pure Go code               |
| ledger   	| Ledger devices are supported (hardware wallets)     |

# Server backend setup
The following are setup requirements for the mainnet production server.

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

## Run with docker
The installation given is from binary but docker installation option is also available below:

We also have a pre-built docker images.  [Github Packages](https://github.com/gotabit/gotabit/pkgs/container/gotabit) [Docker Hub](https://hub.docker.com/r/gotabit/gotabit)

* Run with docker

``` bash
docker pull gotabit/gotabit:1.0.0
docker run --name gotabit -d -p 1317:1317 -p 26657:26657 \
        -v $PWD/runtime:/root/.gotabit gotabit/gotabit:1.0.0 /opt/chain_run
```

* Run with docker compose

``` bash
git clone https://github.com/gotabit/gotabit
cd gotabit
docker-compose up -d
```

## Signing

### File
File based signing is simple and default usage. It uses both files $HOME/.gotabit/config/priv_val_key.json and data/priv_val_state.json

The following is an example server backend configured using keyring to keep the public/private key pairs protected. A use for it is when setting up the validators.

Do the following to setup a variable called "myvalidator"

```
gotabitd keys add myvalidator --keyring-backend=main --home "[home directory]"
```
> :memo: **Note**
subcommand "--home" is optionally used to allow gotabitd to store the keys pointing to a different home directory. 

As blockchain addresses are long, set up an environment variable for extracting the content of myvalidator address variable.  Unix shell command is given below. 

```
MY_VALIDATOR_ADDRESS=$(gotabitd keys show myvalidator -a --keyring-backend main --home "[home directory]")
```

### Remote signer
A remote signer uses a different server to sign blocks with the consensus key. There is more security signing blocks using a separate remote server other than from the running node.

Two common signers are [tmkms](https://github.com/iqlusioninc/tmkms) and [horcrux](https://github.com/strangelove-ventures/horcrux).  Please refer to the links provided.

