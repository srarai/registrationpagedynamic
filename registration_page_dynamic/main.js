const posts=[    
    {title:'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title:'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
];
let intervalId =0;

function getPost(){
    clearInterval(intervalId);
    const timerId =setInterval(() =>{
        let output='';
        for(let i=0; i<posts.length; i++){
            output +=`<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago </li>`
        }
        document.body.innerHTML= output;
    
    },1000)

}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback()
    },1000)
}

createPost({title:'Post Three', body: 'This is Post Three'},getPost);
createPost({title:'Post Four', body: 'This is Post Four'},getPost);