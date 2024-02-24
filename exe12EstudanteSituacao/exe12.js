const media = (tmedia) => {    

    if (tmedia >= 7){
        console.log(`A media do aluno foi ${tmedia} e ele está: Aprovado`);
    }else if (tmedia >=5 ){
        console.log(`A media do aluno foi ${tmedia} e ele está: Recuperacao`);
    }else{
        console.log(`A media do aluno foi ${tmedia} e ele está: Reprovado`);
    }
}

media(4.9);
media(5);
media(7);

