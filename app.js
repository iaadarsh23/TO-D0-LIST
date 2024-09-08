// ------------ek event listner add kr rhe hai jisse form submit hone pr page reload na ho----------------
const form = document.querySelector('form');
form.addEventListener('submit',function(event){
    // ---------this will prevent the default behaviour of the form submission----------------
    event.preventDefault();
    // ---------------taking input------------
    const taskinput= document.querySelector('#input-task')
    const taskValue = taskinput.value; // This stores the user's task
    console.log(taskValue); 
    taskinput.value = ''; // This clears the input field


});

