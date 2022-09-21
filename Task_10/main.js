


function store(event){
    event.preventDefault();
    const name= event.target.name.value;
    const email=event.target.email.value;
    // converted all email and name of an student in an object 
    //Json.stringfy is used to convert the obj into string and then store it 
    const obj={
        name, 
        email
    }
    //below line cause problem that whenever new object is added old one get updated
    //localStorage.setItem('userDetails',JSON.stringify(obj));
    localStorage.setItem(obj.email,JSON.stringify(obj));// made email as key and now multiple item can be added 
    // showing all registered user on screen 

    showNewUser(obj)
}

function showNewUser(user){
    const parentNode = document.getElementById('users');
    const childHtml=`<li>${user.name}- ${user.email}</li>`
    parentNode.innerHTML=parentNode.innerHTML+childHtml;
}