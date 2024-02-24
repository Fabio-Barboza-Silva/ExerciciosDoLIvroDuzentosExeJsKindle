const verificaPalavraPali = (palavra) => {        
    console.log(palavra);

    let palavraInvertida = palavra.split('').reverse().join('');// dividiu(split) a palavra, inverteu(reverse) e juntou(join)
    console.log(palavraInvertida);

    if ( palavra == palavraInvertida){
        console.log(palavra + " é um palindromo");
    }else{
        console.log(palavra + " nao é um palindromo");
    }
    
}

verificaPalavraPali("dog");



/*
let array = ["cachorro"];

let myString = array.toString();

let newArray = myString.split("");

let tamanhoVetor = newArray.length;

let novoArray = [];

    for(let i = 0; i < tamanhoVetor ; i++){       
    novoArray[i] = newArray[tamanhoVetor -1 -i];    
}

console.log(newArray);
console.log(novoArray);

for(let i = 0; i < tamanhoVetor ; i++){
if(newArray[i] == novoArray[i]){
    console.log("sao iguais");
}else {
    console.log("nao sao iguais");
}
}

*/