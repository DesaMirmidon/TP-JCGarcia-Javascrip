
let nombre ="";
let cuit="";
let email="";

class  Cliente {
    constructor (nombres, cuit,email){
        this.nombres = nombres;
        this.cuit = cuit;
        this.email=email;
    }
}

function guardarCliente() {
    let nombre = document.getElementById("ingresoNombre").value;
    let cuit = document.getElementById("cuitcliente").value;
    let email=document.getElementById("email").value;
   
    const clientes = [];
    clientes.push(new Cliente(nombre,cuit,email));
    console.log(clientes[0].email);

    let mensaje= document.getElementById("mensaje");
  
    mensaje.innerHTML=alert("su registro se ha guardado correctamente!.")

      
}   


