---
title: Gas and Fees
description: Using the command line interface of gotabitd
sidebar_position: 2
---
# Introducing Gas and Fees
>:bulb: **Reference**: Cosmos documentation gives a detailed explanation on Gas and Fees. See [Cosmos Gas and Fees](https://docs.cosmos.network/main/basics/gas-fees).

Gas is used as a resource consumption tracker.  The more a resource is used and tied up, the gas usage increases. If resources consumption is monopolized by one process, it prevents other processes to move forward. Therefore, when a running process is monopolizing resources, more gas is used and it forces the process to moderate or stop completelty thus allowing other processes to get a fair share of the available resources.

## What is Gas and Fees

Gas is unit cost of resource consumption from reading and writing to storage. It is used to manage the amount of computation by running code which may otherwise monopolise the system resource usage. Most expensive computation is made from writing files to storage. Others are making massive calculation on the fly. 

The message sender incurs a fee according to the formula 
>fee = gas x gas-prices

Gas-prices is set according to the network busyness at the time of transaction.