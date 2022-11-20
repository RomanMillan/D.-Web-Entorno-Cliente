let listPost = document.querySelector("#listPost");


//mostramos los post
const peticion=new XMLHttpRequest();
peticion.open('GET', 'http://localhost:3000/posts');
peticion.send();
peticion.addEventListener('load', function() {
    if (peticion.status===200) {
        let posts=JSON.parse(peticion.responseText); 
        for(post of posts){
            let li = document.createElement("li");
            let linkPost  = document.createElement("a");
            linkPost.setAttribute("href",`comments.html?id=${post.id}`);
            let titlePost = post.title;
            let nodoTitlePost = document.createTextNode(titlePost);
            linkPost.appendChild(nodoTitlePost);
            li.appendChild(linkPost);
            listPost.appendChild(li);
        }
    } else {
        muestraError();
    }
})

peticion.addEventListener('error', muestraError);
peticion.addEventListener('abort', muestraError);
peticion.addEventListener('timeout', muestraError);

function muestraError() {
    if (this.status) {
        console.log("Error "+this.status+" ("+this.statusText+") en la petición");
    } else {
        console.log("Ocurrió un error o se abortó la conexión");
    }
}
