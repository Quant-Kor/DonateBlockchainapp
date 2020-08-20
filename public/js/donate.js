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
	// 10. id send 버튼이 클릭되면
	$('#send').on('click', function(){
		_to = $('#sendAddress').val();
		_value = $('#value').val();
		web3.eth.sendTransaction({
			from: "0x964a7052f08b627dfdc94739042a870ffae7ff81",
			to : _to,
			value : _value
		}, (error, hash)=>{
			if (error) {
				console.log(error);
			} else {
				console.log(hash);
			}
		})
	})
	// 11. id sendAddress 의 값을 가져오고
	// 12. id value 의 값을 가져와서
	// 13. web3 를 이용해서 전송하기

} else {
    $(function () {
        alert('Metamask 설치하세요');
        window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko'
	})
}