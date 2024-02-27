const corSemaforo = (cor) => {
    if(cor === "verde"){
        console.log(`a cor digitada foi ${cor} e essa cor pertence ao semaforo e quer dizer, siga em frente`);
    }else if(cor === "amarelo"){ 
        console.log(`a cor digitada foi ${cor} e essa cor pertence ao semaforo e quer dizer, atenção diminua a velocidade`);
    }else if(cor === "vermelho"){
        console.log(`a cor digitada foi ${cor} e essa cor pertence ao semaforo e quer dizer Pare seu veículo`);
    }else {
        console.log(`a cor digitada foi ${cor} e essa cor não pertence ao semaforo`);   
    }      
}

let cor = prompt(`Por favor digite uma cor, para indentificar se esta cor pertence as cores do semaro:`);

corSemaforo(cor);


