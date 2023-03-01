---
title: Disk optimization
sidebar_position: 2
---

# Validator only disk usage
Users can run validators in full nodes or pruned nodes.  Each user is encouraged to run full nodes.  The differences are:

Full node contains record headers and full payload of historical information from genesis. Therefore storage can run into terabytes of chaindata and takes time to restore.

Pruned node processes only block headers and a small subset of transactions.

An optimal solution is to fastsync (without headers) to the block height and restart validators with fullsync thereafter.  This will enable validators to continue staking as well as managing storage overflow in overall system storage management. 

# Operating system environment
In an operating environment, there are strategies on how to optimize your disk storage for respective operating systems where the server is running. 

Disks are monitored and defragmented using software tools. Example tools can be found as shown:
1. [Ubuntu](https://towardsdatascience.com/3-tools-to-monitor-and-optimize-your-linux-system-c8a46c18d692)
1. [Windows](https://www.guru99.com/best-free-defrag-software.html)
1. [MacOS](https://macpaw.com/reviews/best-mac-optimizer-software)

Several discussion sites are given below:

1. Linux Ubuntu, refer to site [Ubunlog](https://ubunlog.com/en/optimiza-tu-sistema-y-libera-espacio-en-disco-en-ubuntu-y-derivados/#Optimizando_el_sistema_con_Stacer)

1. Windows, refer to [geek blog](https://www.geeksinphoenix.com/blog/post/2021/12/12/how-to-defragment-and-optimize-your-drive-in-windows-11)

1. MacOS, refer to [Apple support](https://support.apple.com/en-au/guide/mac-help/sysp4ee93ca4/mac)

Please join our community discussion forum on [Gotabit Developers Discord](https://discord.gg/gotabit) and sign up for the Gotabit newsletter to get regular updates.
