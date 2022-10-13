---
title: Installation
description: How to install and update GotaBit
sidebar_position: 1
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## From Binary 

The easiest way to install is to download a pre-built binary. You can find the latest binaries on the [releases](https://github.com/gotabit/node/releases) page.


## From Docker

We also have a pre-built docker images.  [Github Packages](https://github.com/gotabit/gotabit/pkgs/container/gotabit) [Docker Hub](https://hub.docker.com/r/gotabit/gotabit)

```mdx-code-block
<Tabs>
  <TabItem value="Run with docker" default>
```

``` bash
docker pull gotabit/gotabit:1.0.0
docker run --name gotabit -d -p 1317:1317 -p 26657:26657 \
        -v $PWD/runtime:/root/.gotabit gotabit/gotabit:1.0.0 /opt/chain_run
```

```mdx-code-block
  </TabItem>
  <TabItem value="Run with docker compose">
```

``` bash
git clone https://github.com/gotabit/gotabit
cd gotabit
docker-compose up -d
```

```mdx-code-block
  </TabItem>
</Tabs>
```
## From Source 

**Step 1: Install Golang**

Go v1.18+ or higher is required for The GotaBit Node.

1. Install [Go 1.18+ from the official site](https://go.dev/dl/). Ensure that your `GOPATH` and `GOBIN` environment variables are properly set up by using the following commands:

```mdx-code-block
<Tabs>
  <TabItem value="For Linux" default>
```

```bash
   wget <https://golang.org/dl/go1.18.2.linux-amd64.tar.gz>
   sudo tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz
   export PATH=$PATH:/usr/local/go/bin
   export PATH=$PATH:$(go env GOPATH)/bin
```

```mdx-code-block
  </TabItem>
  <TabItem value="For Mac">
```

```bash
   export PATH=$PATH:/usr/local/go/bin
   export PATH=$PATH:$(go env GOPATH)/bin
```

```mdx-code-block
  </TabItem>
</Tabs>
```

**Step 2: Get source code**

Clone the source code from the [official repo](https://github.com/gotabit/gotabit) and check out the `main` branch for the latest stable release.

```sh
git clone https://github.com/gotabit/gotabit
cd gotabit
git checkout main
```

**Step 3: Build GotaBit node**

Run the following command to install `gotabitd` to your `GOPATH` and build the GotaBit node. `gotabitd` is the node daemon and CLI for interacting with a GotaBit node.

```sh
make install
```

**Step 4: Verify your installation**

Verify your installation with the following command:

```sh
gotabitd version --long
```

A successful installation will return the following:

```sh
name: gotabit
server_name: gotabitd
version: <x.x.x>
commit: <Commit hash>
build_tags: netgo,ledger
go: go version go1.18.2 linux/amd64
build_deps:
...
```
