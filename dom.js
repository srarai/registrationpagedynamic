// console.dir(document);//used to give directory of document 
// console.log(document.domain); // used to get domain of document 
// console.log(document.URL); // used to get the URL of document 
// console.log(document.title);// used to get the title of document 
// // we can change the title of the document 
// document.title=123;
// // get the type of the document 
// console.log(document.doctype);
// //show the html code of head 
// console.log(document.head);
// // shows the html code of the body 
// console.log(document.body);
// //shows all the things of the document with index number 
// console.log(document.all);
// // select and print the thing using the index number as mentioned in the upper line 
// console.log(document.all[10]);
// // change the content of index number 10
// document.all[10].textContent= 'hello';

// // Q-Ans  Selecting with index number is not good as we change or add anything in html file the index number get changed so it is not recommended 

// // getting the links and images used in the document 
// console.log(document.links);
// console.log(document.images);

// // selecting method 
// //get elemnet by id 

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// // Difference between inner text and text content 
// // textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.

// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';

// // inner Html does not change the actual code it just put the html in the other html tag 
// headerTitle.innerHTML= '<h3>Hello </h3>'

// headerTitle.style.borderBottom='solid 3px #000';

// // get elements by class name 

// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor =' yellow';

// // //items.style.backgroundColor ='yellow'; // not gonaa work hence because it is a html element  using for loop 

// // for (var i=0; i < items.length; i++){
// //     items[i].style.backgroundColor ='#f4f4f4';

// // }
// // items 3 background color green 
// // items[2].style.backgroundColor ='green';

// // // changing the font 
// // for (var i=0; i < items.length; i++){
// //     items[i].style.fontWeight='bold';

// // }

// // Task 5 
// // Get elements by tag name 

// var li  = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor =' yellow';


// for (var i=0; i < li.length; i++){
//     li[i].style.backgroundColor ='#f4f4f4';

// }

// // Task 6 
// // Query selector is used for only 1 item at once
// // if there are many item it always apply the change to the first item otherwise need to mention 

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value =' Hello world';

// var submit =document.querySelector('input[type="submit"]');
// submit.value="Send"

// var item =document.querySelector('.list-group-item');
// item.style.color ='red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var seconditem =document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'coral';
// seconditem.style.backgroundColor= 'green'; // changing the background color 

// var thirditem =document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.visibility='hidden'; // making 3rd element visible 

// //Query selector all 


// var title =document.querySelectorAll('.title');
// console.log(title);

// // making background color green of odd li 

// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // for (var i=0; i<odd.length; i++){
// //     odd[i].style.backgroundColor= 'green';
// // }

// var lis = document.querySelectorAll('.list-group-item');
// lis[3].style.color= 'green';

// Task 7 answer 

// // getting parent node 
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';

//parent element 
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';

// // child nodes (Avoid using it ,because it get changed with time while changing  html )
// console.log(itemList.childNodes);

// Children nodes 
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

// First child(Avoid using it because it get changed while editing html )
console.log(itemList.firstChild);

//Firstelementchild 
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

// Lastelement child 
console.log(itemList.lastChild);

//Firstelementchild 
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';


//nextsibling 
console.log(itemList.nextSibling);

//Nextelementsibling 
console.log(itemList.nextElementSibling);

//previous sibling 
console.log(itemList.previousSibling);

//previous element sibling 
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ='blue ';

//create a element 
// create a div 

var newDiv = document.createElement('div');
newDiv.className='hello'; // Add class 
newDiv.id='Hello1';// Add id 
newDiv.setAttribute('title','Hello Div');// Add attribute

var newDivText = document.createTextNode('Hello World ');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

console.log(newDiv);








