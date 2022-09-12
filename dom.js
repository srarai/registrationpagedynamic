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

