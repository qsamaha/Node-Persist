console.log('starting password manager!');

var storage = require('node-persist');
storage.initSync();


//account.name Facebook	
//account.userName User123!
//account.password Password12!

function createAccount(account){
	var accounts = storage.getItemSync('accounts');
	if(typeof accounts === "undefined"){
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);
	

	return account;

	// if accounts is undefined (user typeof);
	// ser account = [];
	//push on the account 
	//return account 
}

function getAccount(accountName){
	var account = storage.getItemSync('accounts');
	var user;
	for(var i = 0;i < account.length; i++){
		if(accountName === account[i].name){
			user = account[i];
		}
	}
	return user;

}

createAccount({
	name: "Twitter",
	userName: "User123",
	password: "Password12"
});
console.log(getAccount("Facebook"));