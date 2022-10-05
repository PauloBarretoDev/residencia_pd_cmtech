function experiencia(anos){
    if(anos>=7){
        console.log("Jedi Master")
    } else if(anos<7 & anos>=3){
        console.log("Avançado")
    } else if(anos<3 & anos>1){
        console.log("Intermediario")
    } else if(anos<=1 & anos>0){
        console.log("Iniciante")
    }
    
}

var anosEstudo = 7;
experiencia(anosEstudo);
