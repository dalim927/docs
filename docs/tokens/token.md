---
title: Token Economics
description: What is tokenomics
sidebar_position: 1
---
# GTB Tokens

Gotabit uses a native GTB token. The token is distributed using a supply and demand model. The health of the project can be found in this model. For example, if the token liquidity plummets, the market forces a negative behaviour and physchology that will affect its value. The token economy, or just tokenomic exerts material affect on the project and value.

Using tokenomics, GotaBit's GTB token intrinsic value is impacted by factors in the creation, distribution, demand and supply and economic activity (use cases) utilizing the token. 

GTB token release and issuance schedules, genesis supply and new release distribution are planned events as shown below.

## Token release schedule

Init_supply: 1,000,000,000
Release Plan: Annual production cut 1/3
Total_supply = init_supply + year1_issuance/(1-2/3) = 4,000,000,000

## Issuance per year

| Year | Circulation supply  | Issuance           |
|------|---------------------|--------------------|
| 1    | 2000000000	         | 1000000000         |
| 2    | 2666666667	         | 666666667          |
| 3    | 3111111111	         | 444444444          |
| 4    | 3407407407	         | 296296296          |
| 5    | 3604938271	         | 197530864          |
| 6    | 3736625514	         | 131687243          |
| 7    | 3824417009	         | 87791495           |
| 8    | 3882944672          | 58527663           |
| 9    | 3921963114	         | 39018442           |
| 10   | 3947975409          | 26012295           |


## Genesis Supply
| Fund              | * yearly supply|
|-------------------|----------------|
| Eco Fund          | 0.20           |
| Community Pool   	| 0.20           |
| Airdrop           | 0.25           |
| Seed          	| 0.16           |
| Founders          | 0.10           |
| Validators       	| 0.06           |
| Advisors          | 0.03           |

## New release distribution
| Fund              | * yearly supply|
|-------------------|----------------|
| Staking Rewards  	| 0.4            |
| Eco Fund          | 0.4            |
| Developer Rewards | 0.15           |
| Community Pool    | 0.05           |


## Reference

```
def calc_tokenomic(init_supply=1000000000, years=10):
    last_year_issuance = init_supply
    circulating_supply = init_supply
    for i in range(years):
        last_year_issuance = round(init_supply*(2/3)**i)
        circulating_supply += last_year_issuance
        print(f"year: {i+1}, circulating supply: {circulating_supply}, issuance: {last_year_issuance}")
```