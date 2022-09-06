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

const clientes = [];
clientes.push(new Cliente("juan carlos","20247561448","lic.jcgarcia@gmail.com"));

for(const cliente of clientes)
{
    cliente.nombres;
    console.log(cliente.nombres);
}