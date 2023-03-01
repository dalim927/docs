---
title: Validator Security Checklist
sidebar_position: 6
---
# Important read
>:warning: **Disclaimer** The validator security checklist provided is not a recommendation. It is outside the scope of this guide. Please engage Cyber security and Infosec professionals for your site specific requirements.

# Validator Security Checklist
The validator security checklist is not complete and should not be taken as security advise.

## Validator instances
Practices like geographic distribution of validator instances and limiting physical and remote instance access is required. 

## Data center physical security
Engage data center hosting providers of your validator servers at your level of security to suit your purpose. Physical entry into machine cages must be authorized by the Risk Manager.

## Hardware redundancy
The validator sentry server architecture should be designed for redundancy in terms of power, storage, cards, network connectivity, switches and third party providers.

## Software
Operating and network software are to patched regularly. Security patches designated with high importance are to be installed promptly.

## Backups
In a decentralized environment where peers are running full node at block height, the advantage is that nodes can be synchronized with each other. In other words, there is chaindata redundancy except for catastrophic failures. See [Backups and Restore](/docs/node/validator/security/backup.md for more information.

>:warning: **Caution** Validators must run uninterrupted to avoid slashing.

## Remote access 
On initial setup of a validator node, make sure that the validator running account is not the root account. Create a user account and grant sudo access as required and group access to the validator chaindata files.

On SSH remote login, setup a different port to login other than the default port 22.
For information please refer to [changing SSH port](https://askubuntu.com/questions/1111994/login-with-ssh-authorized-key-with-changed-ssh-port/1111996#1111996)

# Risk assessment
Site specific projects built on Cosmos Hub and Tendermint Core should conduct proper Risk Assessment in order to complete a validator security checklist. 

Once a risk assessment is made, a validator security checklist is completed with risks itemised and mitigation strategies of these risks are documented and implemented.

## Disaster Recovery (DR) Plan
Risk assessment will also make recommendations for a disaster recovery plan. It is an exercise to run validators at minimum downtime in case of a disaster event like a catastrophic failure where both infrasturture and network facility is wiped out. For DR planned exercise, staff are given roles and responsibilities, physical tapes of recent monthly backups are shipped to be restored to a secondary data center, third party service providers are engaged and a lot of planning goes into it. 

>:memo: **Reference**
- Validator Risks [Imperator Guide](https://medium.com/imperator-guide/what-are-the-risks-associated-with-a-validator-on-cosmos-based-blockchains-e528dc5b0c2e)
