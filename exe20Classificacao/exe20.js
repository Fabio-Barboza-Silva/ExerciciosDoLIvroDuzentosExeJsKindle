const classificaAluno = (nota) => {
    if(nota >= 90){
        console.log(`Sua nota é ${nota} e você ficou com A`);
    }else if(nota>=70){
        console.log(`Sua nota é ${nota} e você ficou com B`);
    } else if(nota>=50){
        console.log(`Sua nota é ${nota} e você ficou com C`);
    }else if(nota>=30){
        console.log(`Sua nota é ${nota} e você ficou com D`);
    }else if(nota>=10){
        console.log(`Sua nota é ${nota} e você ficou com E`);
    }else if(nota>=0){
        console.log(`Sua nota é ${nota} e você foi reprovado`);
    }
      
}

classificaAluno(60);


/*
switch (nota) {
    case nota>90:
      console.log(`Sua nota é ${nota} e você ficou com A`);
    case nota > 70:
      console.log(`Sua nota é ${nota} e você ficou com B`);
    case nota > 50:
      console.log(`Sua nota é ${nota} e você ficou com C`);
    case nota > 30:
      console.log(`Sua nota é ${nota} e você ficou com D`);
    case nota > 10:
      console.log(`Sua nota é ${nota} e você ficou com E`);
    case nota > 0:
      console.log(`Sua nota é ${nota} e você foi reprovado`);
  }
*/