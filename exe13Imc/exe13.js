const calculoImc = (peso, altura) => {    
    let imc = (peso / (altura*altura)).toFixed(2);

    if (imc < 18.5){
        console.log(`Seu IMC é ${imc} e está abaixo do PESO`);        
    }else if (18.5 <= imc && imc < 25 ){
        console.log(`Seu IMC é ${imc} e esta com o peso normal`);
    }else if (25 <= imc && imc < 30 ){
        console.log(`Seu IMC é ${imc} e esta sobrepeso`);
    }else{
        console.log(`Seu IMC é ${imc} e voce esta obeso`);
    }

}


calculoImc(50 , 1.70);
calculoImc(60 , 1.70);
calculoImc(83 , 1.80);
calculoImc(100 , 1.60);


