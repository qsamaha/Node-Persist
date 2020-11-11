console.log('starting password manager!');

var storage = require('node-persist');
storage.initSync();

// account.name Facebook	
// account.userName User123!
// account.password Password12!

var argv = require("yargs")
	.command('create', 'creates account', function (yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				description: 'your account name goes here',
				type: 'string'
			},
			userName: {
				demand: true,
				alias: 'n',
				description: 'your first name goes here',
				type: 'string'
			},
			password: {
				demand: true,
				alias:'l',
				description: 'Insert last name here',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'gets account', function (yargs){
		yarg.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Takes name and finds it in JSON',
				type: 'string'
			}
		})
	})

	.help('help')
	.argv;

var command = argv._[0];

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount(userName){
	var account = storage.getItemSync('accounts');
	var user;
	for(var i = 0;i < account.length; i++){
		if(userName === account[i].userName){
			user = account[i];
		}
	}
	return user;

}

if(command === 'create' && argv.name !== '' && argv.userName !== '' && argv.password !== ''){
	createAccount({
		name: argv.name,
		userName: argv.userName,
		password: argv.password
	});
}else if (command === 'get'){
	var account = getAccount(argv.userName);

	if(account === 'undefined'){
		console.log('Account not found');
	}else{
		console.log("Account Found");
		console.log(account);
	}
}

// createAccount({
// 	name: "MySpace",
// 	userName: "qsamaha3",
// 	password: "Pali60003"
// });

// console.log(getAccount("qsamaha"));





