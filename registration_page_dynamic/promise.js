 const posts =[
    {title : 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is Post two'}
  ];
  
  function getPosts(){
    setTimeout(() => {
        let output ='';
        posts.forEach((post,index) =>{
            output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
  }

  // promise take two parameter resolve and reject 
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error =false;

            if (!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }
        },2000);
    });
}
createPost({title: 'Post Three',body:'This is post three'})
  .then(getPosts)
  .catch(err=>console.log(err));

//Delete promises 
function deletePosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            const error =true;
            if(!error){
                resolve();
            }else{
                reject('Error:Array is empty now');
            }
        },2000);
    });
}

deletePosts()
    .then(getPosts)
    .catch(err=>console.log(err));

deletePosts()
    .then(getPosts)
    .catch(err=>console.log(err));    
deletePosts()
    .then(getPosts)
    .catch(err=>console.log(err));     