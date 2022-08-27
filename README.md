# 🧁 CrossChain CupCakes 🧁

### Cross Chain Ecosystem - A Piece of Cake

---

## Use case 1

Let's say you have to mint an **NFT on Optimism** but only have **USDT on Polygon.**
Ah the age old hassle of cross chain investments and transactions start to scare you.
_"Do I have Matic on Polygon? Do I have gas on Polygon? How do I bridge my swapped WETH from Polygon to Optimism? Do I sign another tx on Optimism now? Argh."_

Cue entry, CupCakes Project.
**Define a tx path, sign a few messages** and let **CupCake bundle txs on Polygon, relay them to Optimism** and wait for your sweet NFT while you get a cup cake

## Use case 2

Let's say you want to **invest in Beefy Finance on Polygon** but you have **only USDT on Optimism**.
Steps using CupCakes -

1. **Define a path** in CupCakes to `swap USDT to WMATIC`, `bridge WMATIC to Polygon`, `Stake half of the WMATIC` and then provide `xMATIC and MATIC liquidity` on Beefy.
2. **Sign the tx data** for this path and wait as **CupCakes Smart Contract Wallet** executes a **meta tx** and then relays the cross chain part of the tx using [Router CrossTalk SDK](https://www.npmjs.com/package/@routerprotocol/router-crosstalk) and also executes the remaining part of the tx.
