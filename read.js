
//read

const fs = require("fs");
//const { WriteStream } = require("tty");
//const { ReadStream } = require("tty");

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

/* if (fs.existsSync("./datos.txt")){
  fs.unlink("./datos.txt", (err) => {  

    if (err){
        console.log(err);
        
    }
    console.log("documento eliminado");

})}; */


//acceder datos en bloque

const readStream = fs.createReadStream("./datos.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./datos2.txt");


/* readStream.on("data", (accesoDatos) => {
    
    console.log("-----------Bloque------------");
    console.log(accesoDatos.toString());
    
}); */


readStream.pipe(writeStream);






