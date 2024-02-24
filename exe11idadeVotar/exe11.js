function idadeVotar(idade) {
    
    if (idade >= 18 && idade < 70){
        console.log(`Você tem ${idade} anos e deve votar`);
    }else if (idade < 16  ){
        console.log(`Você tem ${idade} anos e não pode votar`);
    }else if (idade < 18 || idade > 16){
        console.log(`Você tem ${idade} anos seu voto é facultativo`);
    }
}

idadeVotar(15);
idadeVotar(16);
idadeVotar(50);
idadeVotar(75);
