const argv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla resultante'
                        })
                        .option('h', {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'Limite de la tabla'
                        })
                        .check( (argv, option)=>{
                            if(isNaN(argv.b)){
                                throw 'La base debe ser un valor numerico'
                            }else{
                                return true;
                            }
                        })
                        .argv;

module.exports = argv;