---
title: Directory layout
description: Application development of gotabit
sidebar_position: 2
---

# Directory layout
GotaBit codebase uses a standard directory structure. The following is the main layout for the gotabit/ directory. 

```
gotabit
├── app
├── client
│   └── docs
├── cmd
│   ├── cosmoscmd
│   └── gotabitd
├── proto
├── scripts
├── testutil

...
└── x
    ├── epochs
    ├── inbox
    └── mint
```

## app
The app/ directory is golang code for connecting the integral parts of the blockchain. The main app.go file includes the type definition of the blockchain and functions for creating and initializing it. This file is responsible for plumbing together the various components of the blockchain by orchestrating the interaction with each other.

## client-docs
client/docs/ is the documentation directory for client applications.

## cmd
The cmd/ directory contains the main executable code for gotabit.  The binary program called gotabitd is a command line interface (CLI) to the blockchain by the user and to perform tasks online such as querying the blockchain state or sending transactions. See [Gotabitd CLI usage here.](/docs/node/setup/command-line.md)  Cosmoscmd binary is also available.

## proto
The protocol buffer files in proto/ directory are to describe the data structure buffers for the blockchain. It is a useful way to serialize and retrieve data. Under CosmosSDK, protocol buffer files are used to define the specific types of data that can be sent and received by the blockchain, as well as the specific RPC endpoints that can be used to access the blockchain's functionality. For an example tutorial, please refer to [Protocol buffers developer documentation](https://developers.google.com/protocol-buffers/docs/gotutorial)

## testutil
The testutil/ directory contains helper functions to test and execute on the blockchain.  The directory contains test packages for developers or to use it as helper functions. Packages provided are nullify.go to nullify the blockchain, network.go to setup a new instance on the Cosmos network and a sample code package.

## x
The x/ directory contains the gotabit core customised function modules of the GotaBitSDK. It is divided into mint/ inbox/ and epoch/ subdirectories. Each of these subdirectories will be explained in detail further under [List of Modules.](/docs/core/modules/epochs/README.md) 

## config.yml (in development environment only)
The config.yml file is used to customize the blockchain during development. Settings are included that control parameters of the GotaBit Network blockchain including the network's ID,, node parameters and accounts.

## README.md
The README.md file describes an overview of the GotaBit Network blockchain project. It contains useful hyoerlinks and includes the setup and install information of the GotaBit Network blockchain.

