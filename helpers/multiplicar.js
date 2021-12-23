
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = listar, hasta) =>{
    
    try{
        
        let salida = '';
        
        for(let i=1; i<=hasta; i++){
            
            salida += `${base} x ${i} = ${i*base}\n`;

        }
        if(listar){
            
            console.log('===================='.green);
            console.log(`  Tabla del ${base}`)
            console.log('===================='.green);
            console.log(salida.blue);
        }
    
        /* Con writerFileSync */

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    }catch(err){

        throw err;

    }


    /* con fs.writerFile */

    // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
        
    //     if(err) throw error;

    //     console.log(`tabla-${base}.txt`);
        
    // })

}

module.exports = {
    crearArchivo
}