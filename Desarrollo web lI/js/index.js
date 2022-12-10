const restaurantes = [
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

for(let j=0;j<restaurantes.length;j++){
    // console.log("el restultado es :" + [j] + restaurantes[j].nombre);
    
    valoresNombre = restaurantes[j].nombre;
    valoresDireccion = restaurantes[j].direccion;
    valoresDescripcion = restaurantes[j].descripcion;

    document.getElementById("labelNombre"+[j+1]).innerHTML = valoresNombre;
    document.getElementById("labelDireccion"+[j+1]).innerHTML = valoresDireccion;
    document.getElementById("labelDescripcion"+[j+1]).innerHTML = valoresDescripcion;
}
