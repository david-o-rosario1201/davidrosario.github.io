/*const miTitulo = document.querySelector("h1");
//miTitulo.textContent = ;

if(miTitulo.textContent ==  "Mi Primer Sitio Web")
    alert(miTitulo.textContent = "!Hola Mundo!");

else
    {
        alert(miTitulo.textContent = "No Hola Mundo");
    }

let david = "David";*/

/*let miHTML = document.querySelector("h1");
miHTML.onclick = function () {
    alert("!Ouch! !Deja de pincharme!");
};*/

/*document.querySelector("html").onclick = function(){
    alert("!Ouch! !Deja de pincharme!");
};*/


let miImagen = document.querySelector("img");
miImagen.onclick = function()
{
    let miSRC = miImagen.getAttribute("src");
    
    if(miSRC === "images/google.jpg")
        {
            miImagen.setAttribute("src", "images/mario.jpg");
        }
    
    else
        {
            if(miSRC === "images/mario.jpg" )
                {
                    miImagen.setAttribute("src","images/shadow.png");
                }
            else
                {
                    miImagen.setAttribute("src", "images/google.jpg");
                }
        }
};

let miButon = document.querySelector("button");
let miTitulo = document.querySelector("h1");

if(!localStorage.getItem("nombre"))
    {
        estableceNombreUsuario();
    }

else
    {
        let nombreAlmacenado = localStorage.getItem("nombre");
        miTitulo.textContent = "Bienvenido, " + nombreAlmacenado;
    }

function estableceNombreUsuario()
{
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    
    if(!miNombre)
        {
            estableceNombreUsuario();
        }
    
    else
        {
            localStorage.setItem("nombre",miNombre);
            miTitulo.textContent = "Bienvenido, " + miNombre;
        }
}

miButon.onclick = function()
{
    estableceNombreUsuario();
};