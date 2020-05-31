const fs = require('fs');
const chalk = require('chalk');

var getNotes = function() {
	//console.log("Your notes...");
}
const addNote = (title, body) => {
	const notes = loadNotes();
	//const duplicateNotes = notes.filter((note) =>  note.title === title);
	const duplicateNote = notes.find((note)=>note.title===title);
	if(!duplicateNote){
		notes.push({
			title:title,
			body:body
		});
		console.log("note added");
		saveNotes(notes);
	}else {
		console.log("duplicate node found");
	}
	
}
const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);

}

const removeNote = (title) => {
	const notes = loadNotes();
	const newnotes = notes.filter( note =>  note.title !== title);
	
	if(newnotes.length < notes.length ){
		saveNotes(newnotes);
		console.log(chalk.green.inverse("note removed"));
	}
	else{
		console.log(chalk.red.inverse("note not found"));
	}

}

const loadNotes = () => {
	try{
		const bufferJSON = fs.readFileSync('notes.json');
		const notesJSON = bufferJSON.toString();
		//console.log(JSON.parse(notesJSON));
		return JSON.parse(notesJSON);
	}
	catch(e){
		return new Array();
	}
}
const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.black.bgWhite("Your Notes :"));
	notes.forEach((note)=>console.log(note.title));
}
const readNote = (title) => {
	const notes = loadNotes();
	const findnote = notes.find((note) => note.title ===title);
	if(findnote){
		console.log(chalk.inverse(findnote.title));
		console.log(findnote.body);
	}
	else console.log(chalk.red.inverse("note not found"));
}
module.exports = {
	getNotes:getNotes,
	addNote:addNote,
	removeNote:removeNote,
	listNotes:listNotes,
	readNote:readNote,
};