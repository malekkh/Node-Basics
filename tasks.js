
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text==='exit\n') {
    quit();
  }
  else if (text.trim().startsWith("hello ")|| text.trim()==='hello') {
    hello(text.trim()+'!');}
  else if(text === 'help\n'){
    help();
  }
  else if(text==='listTasks\n'){
    listTasks();
  }
  else if(text.startsWith('add')){
    let nameTask=text.split(' ')[1]
    if(nameTask!==undefined){
      add(text);
    }
    else{
      add('add');
    }
  }
  else if(text.startsWith('remove\n')||text.split(' '[1]!==NaN)){
    Remove(text.trim());
    
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
// get all the commands 
function help(){
  console.log('---- quit or exit :exit app\n ---- hello: type hello!\n-------- help: list all commands\n-----hello [name] :hello name ! \n  ---- add [task]: to add task \n -----remove : remove the 1st one \n ------remove [index]:remove item at specific index ')
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(inputString) {
  // Split the input string into an array of words
  const words = inputString.split(" ");

  // Replace the word "hello" with "hello [argument]!"
  let outputString;
  if (words.length > 1) {
    outputString = inputString.replace("hello", `${words[0]}`, 1);
  }
  else {
    outputString = inputString;
  }

  // Remove any leading or trailing white space from the output string
  outputString = outputString.trim();

  console.log(outputString);
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
let tasks = ['add','delete','update'];
function listTasks() {
  console.log('Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}
function add(task) {
  let mainTask=task.split(" ")[1];
  if (task==='add') {
    console.error('Error: No task provided');
  }
  else if(mainTask!==undefined){
    tasks.push(mainTask);
    console.log(`Added task: ${mainTask}`);
  }
}
function Remove(Rtask){
  nameTask=Rtask.split(' ')[1]
  if(nameTask>2){
    console.error('not exist');
  }
 else if(Rtask==='remove'){
  tasks.pop();
  listTasks();
  console.log('-----removed last one');
 }
 else if(Rtask==='remove 1'){
  tasks.shift();
  console.log('-----removed 1');
 }
 else if(Rtask==='remove 2'){
  tasks.splice(0,1);
  console.log('-----removed 2');
 }
}

// The following line starts the application
startApp("malek khoder")
