const verificaIntervalo = (num1,num2,num3) => {     
    if(num1>num2 && num1<num3){
        console.log(`o numero ${num1} está no intervalo de ${num2} e ${num3}`);    
    }else{
        console.log(`o numero ${num1} não esta no intervalo de ${num2} e ${num3}`);    
    }  

}

verificaIntervalo(4,5,50);
verificaIntervalo(7,5,50);
verificaIntervalo(50,10,60);





