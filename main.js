 function cronometro (tempo) {
     console.log(tempo)
     let proximoValor = tempo -1
     if(proximoValor > 0){
         cronometro(proximoValor)
     }
 }

cronometro(10)



