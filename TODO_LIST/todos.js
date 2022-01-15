let input = prompt("What do you want to do?");
const todos = ["BourBourn Biscuits","Dark Chocolate"];

while(input !== 'Quit' && input !== 'Q' && input !== 'q'){
    
    if(input === 'list' || input === 'List'){
        console.log("********");
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********");
    }else if(input === 'new' || input === 'New'){
            const newtodo = prompt("Ok! What's The new Todo?");
            todos.push(newtodo);
            console.log(`${newtodo} is Added Succesfully!`);
    }else if(input === 'delete' || input === 'Delete'){
        const index = parseInt(prompt("Ok! Enter the Index You want to delete!"));
        if(!Number.isNaN(index)){
            const delted = todos.splice(index,1);
            console.log(`Item ${delted} at Index ${index} is Deleted Succesfully!`);
        }else{
            console.log("Invalid Index!");
        }
    }
    
    input = prompt("What'd you like to Choose?");




}

console.log("Ok! You Quit the App");