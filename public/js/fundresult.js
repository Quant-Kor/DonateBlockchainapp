var crowdfundABI =[
	{
		"constant": false,
		"inputs": [],
		"name": "refunds",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_fundingday",
				"type": "uint256"
			},
			{
				"name": "_goalamount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CurrentAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "deadline",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "donateamount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "donater",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "goalamount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalamount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var contractAddress = '0xb047a11aaa2aa6bb5c1c1861f616d5c69326a6a1';


// var crowdfundContract = web3.eth.contract(crowdfundABI, contractAddress);

let crowdfundContract = web3.eth.contract(crowdfundABI);
let crowdfundContractInstance = crowdfundContract.at(contractAddress);

// 1000000000000000000 == 1 ether
// 500000000000000000 == 0.5 ether

if (typeof web3 !== 'undefined') {
    console.log('Metamask가 설치되어 있습니다.')
    ethereum.enable();


	var account;
	async function getAccount() {
		// 7. getAccount
		accounts = await ethereum.enable();
		// 8. id myAddress 에 account 기입
		account = accounts[0];
		console.log(account)
		// $('#myAddress')[0].innerHTML = account;
	}

    getAccount();

	ethereum.autoRefreshOnNetworkChange = false;

    
	// 9. web3 이용, 지갑의 현재 잔액 보이기
	// web3.eth.getBalance("0x964a7052f08b627dfdc94739042a870ffae7ff81", (error, result)=>{
	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		console.log(result);
	// 	}
	// 	$('#balance').html(result.c[0]);
	// })
	$('#receive').on('click', function(){
        crowdfundContractInstance.withdraw({}, function(err, hash){
			if(!err) 
			console.log(hash);
		})
		});
    //     {
	// 		from: "0x964a7052f08b627dfdc94739042a870ffae7ff81",
	// 		to : _to,
	// 		value : _value
	// 	}, (error, hash)=>{
	// 		if (error) {
	// 			console.log(error);
	// 		} else {
	// 			console.log(hash);
	// 		}
	// 	})
    // })
    
	$('#refund').on('click', function(){
        crowdfundContractInstance.refunds({}, function(err, hash){
			if(!err) 
			console.log(hash);
		})
		});

	// 	_to = $('#sendAddress').val();
	// 	_value = $('#value').val();
	// 	crowdfundContract.methods.refunds({
	// 		from: "0x964a7052f08b627dfdc94739042a870ffae7ff81",
	// 		to : _to,
	// 		value : _value
	// 	}, (error, hash)=>{
	// 		if (error) {
	// 			console.log(error);
	// 		} else {
	// 			console.log(hash);
	// 		}
	// 	})
	// })
	// 11. id sendAddress 의 값을 가져오고
	// 12. id value 의 값을 가져와서
	// 13. web3 를 이용해서 전송하기

} else {
    $(function () {
        alert('Metamask 설치하세요');
        window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko'
	})
}