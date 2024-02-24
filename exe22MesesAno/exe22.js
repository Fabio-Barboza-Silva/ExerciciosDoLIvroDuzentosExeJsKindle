const mesAno = (mesAno) => {
    if(mesAno === 1 || mesAno === 3 || mesAno === 5 || mesAno == 7 || mesAno === 8 || mesAno === 10 || mesAno === 12 ){
        console.log(`o mês escolhido foi ${mesAno} e esse mês tem 31 dias`);
    }else if(mesAno === 4 || mesAno === 6 || mesAno === 9 || mesAno === 11){
        console.log(`o mês escolhido foi ${mesAno} e esse mês tem 30 dias`);
    } else if(mesAno <= 2){
        console.log(`o mês escolhido foi ${mesAno} e esse mês tem 29 dias`);     
    }
      
}


for(let i = 1; i<= 12; i++ ){
mesAno(i)
}
