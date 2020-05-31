const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const notes = require('./notes'); 
// adding a note
yargs.command({
	command : "add",
	describe : "add a new note",
	builder : {
		title : {
			describe : "note title",
			demandOption : true,
			type : 'string',
		},
		body : {
			describe : "note body",
			demandOption : true,
			type : 'string',
		},

	},
	handler(argv) {

		notes.addNote(argv.title,argv.body);
		//fs.writeFileSync(argv.title+'.txt',argv.body);
	}

})

//removing a note
yargs.command({
	command : "remove",
	describe : "remove a note",
	builder : {
		title : {
			describe : "note title",
			demandOption : true,
			type : 'string',
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
})
//listing notes
yargs.command({
	command : "list",
	describe : "list the notes",
	handler () {
		console.log("listing notes");
	} 
})
//reading notes
yargs.command({
	command : "read",
	describe : "reading the notes",
	handler () {
		console.log("reading notes");
	} 
})
//yargs.argv;
yargs.parse();
// console.log(yargs.argv);