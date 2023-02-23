---
title: Submitting a Wasm Proposal
description: Technical details of submitting Cosmos Webassemby proposal
sidebar_position: 5
---

# Submitting a Wasm Proposal
>:information_source: **Synopsis** Purpose of [Cosmwasm used in governance proposal](https://twitter.com/CosmWasm/status/1259846903937806338):
- Adding governance control to all aspects of the CosmWasm contract lifecycle to make it compatible with the hub. 
- Allowing governance to control code upload, contract instantiation, upgrades, and destruction (if needed).

## CosmWasm technical details

Refer this documentation of [How governance interacts with CosmWasm Smart Contract lifecycle](https://github.com/CosmWasm/wasmd/blob/main/x/wasm/Governance.md)

Summary steps are: 

1. Implementing 11 governance [proposal types](https://github.com/CosmWasm/wasmd/blob/main/x/wasm/types/proposal.go).
1. Proposal handler.
1. Governance integration.
1. Wasmd authorization settings.


