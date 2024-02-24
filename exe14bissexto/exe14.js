const anoBissexto = (ano) => {        
    
    if (ano % 4 == 0 && ano % 100 != 0){
        console.log("É um ano bissexto");        
    } else if (ano % 400 == 0) {
        console.log("É um ano bissexto");        
    } else {
        console.log("Nao é um ano bissexto");        
    }
    
}


anoBissexto(2000);
anoBissexto(2001);
anoBissexto(2100);



