var argv = require("yargs")
	.command('hello', ' greets the user', function (yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'your first name goes here'
			},
			lastName: {
				demand: true,
				alias:'l',
				description: 'Insert last name here'
			}
		}).help('help');
	})
		


	.help('help')
	.argv;

var command = argv._[0];

console.log(argv);

if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastName !== 'undefined'){
		console.log("Hello " + argv.name + " " + argv.lastName + "!");
} 
	else if (command === 'hello' && typeof argv.name !== 'undefined' ){
	console.log("Hello " + argv.name + "!");
}
	else if (command === 'hello'){
	console.log("Hello World!");
}