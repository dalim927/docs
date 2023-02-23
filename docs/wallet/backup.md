---
title: Backup Wallet
description: Using the command line interface of gotabitd
sidebar_position: 4
---
>:memo: **Reference** 
1. Please read [Best Practices for keeping your crypto safe](https://regen-network.medium.com/setting-up-keplr-wallet-and-best-practices-for-keeping-your-crypto-safe-cfe5f924692d)

# Custodial and non-custodial wallets
Custodial wallets are wallets storing your assets without owning the private keys such as a crypto exchange wallet.  It means that the crypto exchange can deal with your digital asset as their own.

A non custodial wallet is where a private key is needed to transact your digital asset and you own the private key.  This is the safest when dealing with your digital asset.

## Backup your mnemonic phrase
Always keep the mnemonic phrase on paper and put it away in a safe place where you can find it.  Remove all traces of this mnemonic phrase in your computer or online eg email.

To be able to restore your wallet, do a restore to online or cold wallet like Ledger using the mnemonic phrase or seed phrase written on paper. 

You can also restore your wallet by following the command.
## Restore existing gotabid wallet with mnemonic seed phrase.
```
# You will be prompted to enter mnemonic seed.
gotabitd keys add <key-name> --recover
```
## Query the keystore for your public address
```
gotabitd keys show <key-name> -a
Replace <key-name> with a key name
```

## Hardware Backup devices available
[CryptoSteel](https://cryptosteel.com/how-it-works/?v=7516fd43adaa) and [Cryptotag](https://cryptotag.io/) are hardware devices to backup your mnemonic phrase.
