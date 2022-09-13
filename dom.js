console.dir(document);//used to give directory of document 
console.log(document.domain); // used to get domain of document 
console.log(document.URL); // used to get the URL of document 
console.log(document.title);// used to get the title of document 
// we can change the title of the document 
document.title=123;
// get the type of the document 
console.log(document.doctype);
//show the html code of head 
console.log(document.head);
// shows the html code of the body 
console.log(document.body);
//shows all the things of the document with index number 
console.log(document.all);
// select and print the thing using the index number as mentioned in the upper line 
console.log(document.all[10]);
// change the content of index number 10
document.all[10].textContent= 'hello';

// Q-Ans  Selecting with index number is not good as we change or add anything in html file the index number get changed so it is not recommended 

// getting the links and images used in the document 
console.log(document.links);
console.log(document.images);

// selecting method 
//get elemnet by id 

var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

// Difference between inner text and text content 
// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.

headerTitle.textContent='Hello';
headerTitle.innerText='Goodbye';

// inner Html does not change the actual code it just put the html in the other html tag 
headerTitle.innerHTML= '<h3>Hello </h3>'

headerTitle.style.borderBottom='solid 3px #000';

// get elements by class name 

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor =' yellow';

// //items.style.backgroundColor ='yellow'; // not gonaa work hence using for loop 

// for (var i=0; i < items.length; i++){
//     items[i].style.backgroundColor ='#f4f4f4';

// }
// items 3 background color green 
// items[2].style.backgroundColor ='green';

// // changing the font 
// for (var i=0; i < items.length; i++){
//     items[i].style.fontWeight='bold';

// }

// Task 5 
// Get elements by tag name 

var li  = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor =' yellow';

//items.style.backgroundColor ='yellow'; // not gonaa work hence using for loop 

for (var i=0; i < li.length; i++){
    li[i].style.backgroundColor ='#f4f4f4';

}





