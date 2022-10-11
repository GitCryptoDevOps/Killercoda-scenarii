// Instantiate a web3 object using an instance of a provider
// window.ethereum.request asks for the user’s permission to access their accounts
const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // ask user permission to access his accounts
          await window.ethereum.request({ method: "eth_requestAccounts" });
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else {
        reject("Must install MetaMask");
      }
    });
  });
};

// The HelloWorld.json file includes informations about the contract (the contract ABI, the contract address, ...).
// deployedNetwork extracts the network where the contract is deployed
const getContract = async (web3) => {
  const data = await $.getJSON("./contracts/HelloWorld.json");
  const netId = await web3.eth.net.getId();
  const deployedNetwork = data.networks[netId];
  const message = new web3.eth.Contract(
    data.abi,
    deployedNetwork && deployedNetwork.address
  );
  return message;
};

// myContract.methods.<METHOD_NAME>(<ARGUMENTS>) calls the METHOD_NAME method
const displayMessage = async (message, contract) => {
  message = await contract.methods.getMessage().call();
  $("message_output").html(greeting);
};

const setMessage = (greeting, contract, accounts) => {
  //let input;
  //$("#input").on("change", (e) => {
  //  input = e.target.value;
  //});
  $(".send_message").click(function() {
    let input = $(".message_value").val();
    await contract.methods
      .setMessage(input)
      .send({ from: accounts[0], gas: 40000 });
      displayMessage(greeting, contract);
  });
};
  
async function startApp() {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  const contract = await getContract(web3);
  let message;
  displayMessage(message, contract);
  setMessage(message, contract, accounts);
}
  
startApp();
