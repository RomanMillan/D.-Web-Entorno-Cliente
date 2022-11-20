function anadir(){
    
    lista=document.getElementById("lis");
    
    elementos =document.getElementsByTagName("li")
    texto = document.getElementById("texto").value;
    posicion= document.getElementById("posicion").value
    li = document.createElement("li")
    li.textContent=texto

    if(posicion>= elementos.length){
        
        document.getElementById("lis").appendChild(li);
    }else{
        a= elementos[posicion-1]
        a.before(li)
    }

   
   
 
 
    
   
 }
 function borrar(){
    elementos =document.getElementsByTagName("li")
    posicion= document.getElementById("posicion").value
    if(posicion>= elementos.length){
        console.log("ELEMENTO NO EXISTENTE")
    }else{
        const list = document.getElementById("lis");
        list.removeChild(list.children[document.getElementById("posicion").value-1]); //Le restamos 1 ya que se empieza a contar dende 0
    }
    
 
 }
 