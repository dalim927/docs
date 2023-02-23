---
title:  Monitor validators
description:  Monitor validators
sidebar_position: 3
---
# Validator monitoring and alerts 

>:information_source: **Synopsis**  The following setup steps are for Linux OS.
1. Install Grafana package.
1. Start Grafana as a service.
1. Download Prometheus application.
1. Configure $HOME/.gotabitd/config.json to enable Prometheus monitor port.
1. Start Prometheus.
1. Add a Data Source.
1. Restart the node.

## Grafana package and Prometheus monitoring
Validators can be monitored with alerts using the Grafana package and by Prometheus configuration to allow updates by the validator server data source using Prometheus application.

Follow the instructions [Cosmos Monitoring with Grafana & Prometheus](https://medium.com/cypher-core/cosmos-how-to-set-up-your-own-network-monitoring-dashboard-fe49c63a8271)

Make sure that you enable Prometheus for monitoring:
- Modify $HOME/.gotabitd/config file to enable Prometheus
```
# Check out the documentation for the list of available metrics.
prometheus = true

# Address to listen for Prometheus collector(s) connections
prometheus_listen_addr = ":26660"

```
