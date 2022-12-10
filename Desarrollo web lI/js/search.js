const restaurants = [
    {
        nombre: 'CANTINA LA 15',
        direccion: 'Calle 15 Nte # 9N-62, Granada, Cali, Valle del Cauca',
        descripcion: 'El restaurante exclusivo de cali',
        imagen:'cantinala15.jpg'
    },
    {
        nombre: 'JUAN DEL RIO ',
        direccion: 'Cra 1 # 7-46 Boulevard del Rio, Cali, Valle del Cauca',
        descripcion: 'Restaurante de comida mexicana',
        imagen:'Juandelrio.jpg'
    },
    {
        nombre: 'EL PARCHE DEL GATO',
        direccion: 'Calle 10 # 31A-10 Santa fé, Cali, Valle del Cauca',
        descripcion: 'Restaurante con variedad de comidas',
        imagen:'parchegato.jpg'
    },
    {
        nombre: 'TORTELLI',
        direccion: 'Cra 105 # 15-09 Loc 8 Centro comercial Jardin Plaza',
        descripcion: 'Restaurante de comida italiana',
        imagen:'Tortelli.jpg'
    }
];

function consultar(){
    nombreBuscado = document.getElementById("nombreBuscado").value;

    for(let i=0;i<restaurantes.length;j++){
        if(nombreBuscado == restaurants[i].nombre){

            valoresNombre = restaurants[i].nombre;
            valoresDireccion = restaurants[i].direccion;
            valoresDescripcion = restaurants[i].descripcion;

            document.getElementById("labelNombre1").innerHTML = valoresNombre;
            document.getElementById("labelDireccion1").innerHTML = valoresDireccion;
            document.getElementById("labelDescripcion1").innerHTML = valoresDescripcion;

        }else{
            console.log("No encontrado")
        }
    }

    

    

}
