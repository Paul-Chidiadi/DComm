App = {
  load: async () => {
    console.log("App loading...");
    await App.loadWeb3();
    await App.loadAccount();
  },

  loadWeb3: async () => {
    if (typeof web3 !== "undefined") {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      window.alert("Please connect to Metamask");
    }
    //Modern dapp browsers...
    if (window.etherum) {
      window.web3 = new Web3(ethereum);
      try {
        //Request account access if needed
        await ethereum.enable();
        //Accounts now exposed
        web3.eth.sendTransaction({
          /*...*/
        });
      } catch {
        //User denied account access...
      }
    }
    //Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider;
      window.web3 = new Web3(web3.currentProvider);
      //Accounts always exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    }
    // Non-dapp browsers
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  },

  loadAccount: async () => {
    App.account = web3.eth.accounts[0];
    console.log(App.account);
  },
};

$(() => {
  $(window).load(() => {
    App.load();
  });
});
