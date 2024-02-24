function verificaNum(num1) {
    
    if (num1 > 0){
        console.log(`o numero ${num1} é positivo`);
    }else if (num1 < 0){
        console.log(`o numero ${num1} é negativo`);
    }else if (num1 == 0){
        console.log(`o numero ${num1} é igual a 0`);
    }

}

verificaNum(10);
verificaNum(-40);
verificaNum(0);

