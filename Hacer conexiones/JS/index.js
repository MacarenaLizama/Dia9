function cambiarNombre(){
    let editarPerfil=document.querySelector(".nombreUsuario");
    editarPerfil.innerHTML="Joan Deoh";
}

function eliminarUsuario1(element, action){
    let numConnections=document.querySelector("#numConnection");
    let contador1=Number(numConnections.textContent);
    contador1 --;
    numConnections.textContent=contador1;

    let usuario=element.closest("#persona1");
    let user=usuario.innerHTML;
    usuario.remove();

    if(action === "add"){
        let misconexiones=document.querySelector("#misConexiones");
        misconexiones.innerHTML += `
        <div class="tcPersonas" id="misConexiones">
            ${user}
        </div>
        `;
    }

}

function eliminarUsuario2(element, action){
    let numConnections=document.querySelector("#numConnection");
    let contador2=Number(numConnections.textContent);
    contador2 --;
    numConnections.textContent=contador2;

    let usuario=element.closest("#persona2");
    let user=usuario.innerHTML;
    usuario.remove();

    if(action === "add"){
        let misconexiones=document.querySelector("#misConexiones");
        misconexiones.innerHTML += `
        <div class="tcPersonas" id="misConexiones">
            ${user}
        </div>
        `;
    }
}



