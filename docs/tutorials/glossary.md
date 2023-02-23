---
title: Glossary
description: Terms used in this documentation
sidebar_position: 2
---

# Glossary

- OriginalVesting: The amount of coins (per denomination) that are initially part of a vesting account. These coins are set at genesis.
- StartTime: The BFT time at which a vesting account starts to vest.
- EndTime: The BFT time at which a vesting account is fully vested.
- DelegatedFree: The tracked amount of coins (per denomination) that are delegated from a vesting account that have been fully vested at time of delegation.
- DelegatedVesting: The tracked amount of coins (per denomination) that are delegated from a vesting account that were vesting at time of delegation.
- ContinuousVestingAccount: A vesting account implementation that vests coins linearly over time.
- DelayedVestingAccount: A vesting account implementation that only fully vests all coins at a given time.
- PeriodicVestingAccount: A vesting account implementation that vests coins according to a custom vesting schedule.
- PermanentLockedAccount: It does not ever release coins, locking them indefinitely. Coins in this account can still be used for delegating and for governance votes even while locked.