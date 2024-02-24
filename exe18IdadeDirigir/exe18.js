const verificaIdadeDirigir = (idade) => {     
    if(idade >= 18 ){
        console.log(`Você tem ${idade} anos de idade e pode tirar a carteira de motorista`);    
    }else{
        console.log(`Você tem ${idade} ano(s) de idade e NÃO pode tirar a carteira de motorista`);    
    }  

}

verificaIdadeDirigir(18);
verificaIdadeDirigir(26);
verificaIdadeDirigir(5);



