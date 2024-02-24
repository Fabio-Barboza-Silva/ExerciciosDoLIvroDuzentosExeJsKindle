const estacaoAno = (estacaoAno) => {
    if(estacaoAno == 12 || estacaoAno <=3){
        console.log(`o mês escolhido foi ${estacaoAno} e a estação correspondente a este mês é: Verão`);
    }else if(estacaoAno <= 6){
        console.log(`o mês escolhido foi ${estacaoAno} e a estação correspondente a este mês é: outono`);
    } else if(estacaoAno <= 9){
        console.log(`o mês escolhido foi ${estacaoAno} e a estação correspondente a este mês é: Inverno`);
    }else if(estacaoAno <= 11){
        console.log(`o mês escolhido foi ${estacaoAno} e a estação correspondente a este mês é: Primavera`); 
    }
      
}

estacaoAno(1);
estacaoAno(4);
estacaoAno(7);
estacaoAno(10);

