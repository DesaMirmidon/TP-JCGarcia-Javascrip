let matricula ="";
let marca="";
let modelo ="";
let kilometros="";

class Vehiculo{
    constructor(matricula,marca,modelo,kilometros){
        this.matricula=matricula;
        this.marca=marca;
        this.modelo=modelo;
        this.kilometros=kilometros;
    }
}
debugger;
function guardarVehiculo(){
    let matricula=document.getElementById("inputMatricula").value;
    let marca=document.getElementById("inputMarca").value;
    let modelo=document.getElementById("inputModelo").value;
    let kilometros=document.getElementById("inputkilometros").value;

    const vehiculos=[];
    vehiculos.push(new Vehiculo(matricula,marca,modelo,kilometros));
    console.log(vehiculos[0].matricula);

    let mensaje= document.getElementById("mensaje");
    mensaje.innerHTML=alert("su registro se ha guardado correctamente!.")


}