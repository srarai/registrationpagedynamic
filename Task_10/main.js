


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
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUser(userDetailsObj)
    }
})
function showNewUser(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    // console.log(localStorage.getItem(user.email))


    const parentNode = document.getElementById('users');
    const childHtml=`<li id=${user.email}>${user.name}- ${user.email}
    <button onclick=deleteUser('${user.email}')> Delete User </button>
    <button onclick=editUserDetails('${user.email}''${user.name}')>Edit User</button>
    </li>`
    parentNode.innerHTML=parentNode.innerHTML+childHtml;

}
function deleteUser(email){
    localStorage.removeItem(email);
    removeUserFromScreen(email);
}

function removeUserFromScreen(email){
    const parentNode = document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(email);

    parentNode.removeChild(childNodeToBeDeleted)
}

function editUserDetails(emailId,name){

    document.getElementById('email').value = emailId;
    document.getElementById('name').value = name;

    deleteUser(email)
 }