// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
color: "rojo", 
marca: "peugeot",
modelo: "2008",
estado:"",
estadoAuto:() => {
    if (confirm("¿Encender el auto?") == true){
        auto.estado = "encendido";
    } else {
        auto.estado="apagado";
    }
}
}
auto.estadoAuto();
    
  let objetoAuto = Object.keys(auto);
  
  for (let indice = 0; indice < objetoAuto.length-1; indice++) {
    document.write(`<br>${objetoAuto[indice]}:${auto[objetoAuto[indice]]}`);
  }