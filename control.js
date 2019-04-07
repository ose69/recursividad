/*function called() {
    document.getElementById("agregar").innerHTML="hello world";
    console.log("lo agegó");
}*/
var nValor= new ArbolBinario();
var add=document.getElementById("agregar");
add.addEventListener('click',avalor);
function avalor() {
    //var dato=5;//texto
    var nuevo=new Nodo(dato);
    nValor.agregar(nuevo);
    console.log("agregó");
}
var inorDer=document.getElementById("inorder");
inorDer.addEventListener.getElementById("click",or);
function or() {
    console.log("entró");
    document.getElementById("show").innerHTML=nValor.inOrder();
}
let pre= document.getElementById("pre").innerHTML=nValor.preOrder();
pre.addEventListener("click",preO);
    function preO() {
        document.getElementById("show").innerHTML=nValor.preOrder();
    }
let pos= document.getElementById("post").innerHTML=nValor.postOrder();
    pos.addEventListener("click",pOst);
        function pOst() {
            document.getElementById("show").innerHTML=nValor.postOrder();
        }
let busqueda=document.getElementById("buscar");
        busqueda.addEventListener("click",bus);
            function bus() {
                let dato=document.getElementById("show").value;
                let busq=nValor.buscar(dato,nValor.r);
                    if(busq==true){
                        document.getElementById("show").innerHTML="si está";
                    }
                        else
                            document.getElementById("show").innerHTML="no está";
            }
        
