
# 🧁 CrossChain CupCakes 🧁

### Cross Chain Ecosystem - A Piece of Cake

---

  ### Use case 1

  Let's say you have to mint an **NFT on Optimism** but only have **USDT on Polygon.**
  Ah the age old hassle of cross chain investments and transactions start to scare you.
  _"Do I have Matic on Polygon? Do I have gas on Polygon? How do I bridge my swapped WETH from Polygon to Optimism? Do I sign another tx on Optimism now? Argh."_

  Cue entry, CupCakes Project.
  **Define a tx path, sign a few messages** and let **CupCake bundle txs on Polygon, relay them to Optimism** and wait for your sweet NFT while you get a cup cake

  ### Use case 2

  Let's say you want to **invest in Beefy Finance on Polygon** but you have **only USDT on Optimism**.
  Steps using CupCakes -

  1. **Define a path** in CupCakes to `swap USDT to WMATIC`, `bridge WMATIC to Polygon`, `Stake half of the WMATIC` and then provide `xMATIC and MATIC liquidity` on Beefy.
  2. **Sign the tx data** for this path and wait as **CupCakes Smart Contract Wallet** executes a **meta tx** and then relays the cross chain part of the tx using [Router CrossTalk SDK](https://www.npmjs.com/package/@routerprotocol/router-crosstalk) and also executes the remaining part of the tx.

##

## Solution
We allow people to create modules which can be then clubbed together by users or developers to create ZAPs. 

An example of a ZAP is shown below:
![enter image description here](https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/92aad02596384660a3f09b606d311ee7/projects/3e70c7ef50fe4249ad7640d76c1b57d3/345ae202-9490-45d2-9deb-5c01f285c4f2.png)
In the photo above, we have created a zap which connects three modules, Swap module, Strader module, & Beefy module. 

### How?

We create an EIP-4337 compatible smart contract wallets for every user, whose custody is with the user. That means only the user can perform actions from this SCW. To perform any action, user has to send a signed message to `eth_sendUserOperation` RPC call. This message should also include the transaction that has to be performed by the SCW. 

When a user selects a ZAP, the ZAP provides the pre-defined series of transactions that has to be performed along with the value needed for each and every step. Once user clicks on the *Comfirm Transaction*, shown below, We perform a transaction that transfers the funds from user's Metamask wallet (or any other EOA) to the SCW. Then user sign the predefined set of transaction defined by the ZAP. Once the message is signed, the signed message is sent through new RPC method `eth_sendUserOperation`. Once sent the wallet then performs all the actions signed by the user.


![Conform Transactions](https://devfolio.co/_next/image?url=https://assets.devfolio.co/hackathons/92aad02596384660a3f09b606d311ee7/projects/3e70c7ef50fe4249ad7640d76c1b57d3/bf13f171-3c93-4e10-b4c0-5817918f4142.png&w=1440&q=75)

### How do we solve for multi-chain?
We have created a module for Router Protocol (We can create for any bridge). If a ZAP contains bridges, then the user will have to sign multiple messages (single message per chain). We then submit the signature on the starting chain & then wait for the bridge to finish. Then we have our relayers which keeps on listening to bridging events, once the bridging of asset is complete to the respective chain, then the message signed for the destination chain is then sent to the blockchain. We keep on repeating this step if there are more than two chains involved. 

### Notification
Once the the chain of transactions has been completed, we send the user an EPNS notification to inform them about the completion of ZAP.

## Next steps
Currently, we only allow users to play ZAP from our dashboard. Next we want to create an SDK so that developers can create these ZAPs and integrate it within their APPs. This will allow developers to have complex transactions bundled together for their users and allow users to perform them with a single signed transaction, while making sure that the custody of the assets is still with the user.
