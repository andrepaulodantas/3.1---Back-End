document.addEventListener("DOMContentLoaded", () =>{
    updatePosts();
})

function updatePosts(){

    //fetch(url, options).then(callback)
    fetch("http://10.13.50.108:2000/api/all").then(res=>{
        return res.json()
    }).then(json =>{
        console.log(json);

        let postElements = '';

        let posts = JSON.parse(json); //transforma de json 
                                      //para objeto
                                     //console.log(posts);
        posts.forEach((post)=>{
            let postElement = 
        `<div id=${post.id} class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">${post.title}</h5>
            <div>
            <div class="card-body">
              <div class="card-text">${post.description}</div> 
            </div> 
        </div> `
        postElements += postElement;
        })
        document.getElementById("posts").innerHTML = postElements;
    })

}

function newPost(){

    //console.log("New Post")

    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    //console.log(title, description);

    //criando um objeto
    let post = {title, description};

    const options = {method: "POST",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(post)
                } //criando um JSON

    fetch("http://10.13.50.108:2000/api/new", options).then(res=>{
        //console.log(res)
        //atualiza novo post
        updatePosts();
        //limpa informações
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })

}