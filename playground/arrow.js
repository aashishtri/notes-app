// const hello = () => console.log("hello");

// console.log(hello(2));
// const event = {
// 	eventname : "birthdayparty",
// 	guests :["aman","aashish","shreyansh"],
// 	guestlist() {
// 		console.log(this.eventname);
// 		this.guests.forEach( (element,index) => {
// 			// statements
// 			console.log(element+"is attending "+this.eventname+" "+index);
// 		});
// 	}
// }
// event.guestlist();
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
    	return this.tasks.filter(task => !task.completed); 
    }
    	
}

console.log(tasks.getTasksToDo())