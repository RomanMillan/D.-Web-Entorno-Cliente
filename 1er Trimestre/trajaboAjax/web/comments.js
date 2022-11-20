let listComments = document.querySelector("#listComments");

//mostramos los comments
const peticion=new XMLHttpRequest();
peticion.open('GET', `http://localhost:3000/comments`);
peticion.send();
peticion.addEventListener('load', function() {
    console.log(listPost);
    let comments = JSON.parse(peticion.responseText);
    for(comment of comments){
        //if(comment.postId == null){
            let li = document.createElement("li");
            let bodyComment = comment.body +" " + comment.authorId;
            let nodoBody = document.createTextNode(bodyComment);
            li.appendChild(nodoBody);
            listComments.appendChild(li);
        //}
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
