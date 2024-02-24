function media(nota1, nota2) {
    let tmedia = (nota1 + nota2)/2;    

    if (tmedia >= 7){
        console.log(`A media do aluno foi ${tmedia} e ele está: Aprovado`);
    }else if (tmedia < 7){
        console.log(`A media do aluno foi ${tmedia} e ele está: Reprovado`);
    }
}

media(8 , 5);
