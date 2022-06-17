module.exports = {
    
posts: [{
    id: "052s",
    title: "Olá mundo",
    description: "Estou tentanto aprender isso"
    }  ,
  ],

  getAll(){
      return this.posts;
  },

  newPost(title, description){
   this.posts.push({
        id: generateID(),
        title,
        description})   
  }
}

function generateID(){
    return  Math.random().toString(36).substr(2,9);//para ter letras e números
}