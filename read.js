
//read

const fs = require("fs");

/*fs.readFile("./datos.txt", (err, data) => {
    if (err) {
        console.log(err);
        }
    console.log(data.toString());
}
    
     
);*/

//console.log("ultima linea");

// writing

/* fs.writeFile("./datos.txt", "hola mundo", () => {
    console.log("el documento fue reescrito");
    
}

)

fs.writeFile("./datos2.txt", "hola mundo otra vez", () => {
    console.log("el documento fue escrito");
    
}

); */

//crear directorios

/* if(!fs.existsSync("./carpetaNueva")){
    fs.mkdir("./carpetaNueva", (err) => {
        if (err) {
            console.log(err);
        }
    
        console.log("carpeta creada");
    });
} else {
    fs.rmdir("./carpetaNueva", (err) => {
        if (err){
            console.log(err);
            
        }
        console.log("carpeta eliminada");
        
})}; */


// borrar documentos

if (fs.existsSync("./datos2.txt")){
  fs.unlink("./datos2.txt", (err) => {  

    if (err){
        console.log(err);
        
    }
    console.log("documento eliminado");

})};



