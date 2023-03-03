---
title: Install Wasmd 
description: Using Wasmd local node
sidebar_position: 3
---

# CosmWasm requirements
> :information_source: **Synopsis**
Setup cosmwasm involves several steps below. Example using macos and vs code. 
1. Download rust depending on your OS.
1. Set environment paths and install wasm32 target.
1. Install wasmd from Cosmos github.
1. Setup CLI tools
1. Setup IDE eg vscode
1. Install COSMWASM IDE extension on vscode


# Building

## Install RUSTUP
```
# For linux or macos 
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# For Windows
# download and execute rustup-init.exe from [https://rustup.rs] or [https/rust-lang.org].
```
## Setup env variables
On completion. the env variable are set. To update terminal session  have to

## install wasmd
>:memo: **Pre-requisite**
Requires Go 1.19+

Download CosmWasm from github
```
git clone https://github.com/CosmWasm/wasmd.git
cd wasmd
git fetch —tags
git checkout v0.27.0
# Install
Make install
# Check version
wasmd version
```

## Install extension using VS COde IDE
Use the vs code editor, open up the wasmd directory and add CosmWasm IDE extension.

# Write and test a sample smart contract
>:memo: **Reference** 
Refer to example taken from [CosmWasm Example Smart Contract](https://docs.cosmwasm.com/docs/getting-started/compile-contract)

## Building
Download sample cw-contracts sample code.
```
# Download the repository
git clone https://github.com/InterWasm/cw-contracts
cd cw-contracts
git checkout main
cd contracts/nameservice
```
Compile.
```
# compile the wasm contract with stable toolchain
rustup default stable
cargo wasm

# Optimize compile (without unused code)
RUSTFLAGS='-C link-arg=-s' cargo wasm
```
Run with unit test.
```
Running unit test
RUST_BACKTRACE=1 cargo unit-test
```
Output
```
running 15 tests
test coin_helpers::test::assert_sent_sufficient_coin_works ... ok
test tests::test_module::fails_on_register_insufficient_fees ... ok
test tests::test_module::fails_on_register_wrong_fee_denom ... ok
test tests::test_module::fails_on_register_already_taken_name ... ok
test tests::test_module::fails_on_transfer_from_nonowner ... ok
test tests::test_module::fails_on_transfer_insufficient_fees ... ok
test tests::test_module::proper_init_no_fees ... ok
test tests::test_module::fails_on_transfer_non_existent ... ok
test tests::test_module::proper_init_with_fees ... ok
test tests::test_module::register_available_name_and_query_works ... ok
test tests::test_module::register_available_name_fails_with_invalid_name ... ok
test tests::test_module::register_available_name_and_query_works_with_fees ... ok
test tests::test_module::returns_empty_on_query_unregistered_name ... ok
test tests::test_module::transfer_works_with_fees ... ok
test tests::test_module::transfer_works ... ok

test result: ok. 15 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

# Use the following testing nodes

| Name     | Website                                 | Status |
|----------|------------------------------ ----------|--------|
| DevNet   | https://localhost:tbd                   | tbd    |
| TestNet1 | https://rpc.malaga-420.cosmwasm.com/    | ok     |
| TestNet2 | https://faucet.malaga-420.cosmwasm.com/ | ok     |
