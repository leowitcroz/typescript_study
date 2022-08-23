let nome:string ="Leonardo";
console.log(nome);


let animais: string[] = ['Elefante','Cachorro','Gato','Panda','Girafa']
console.log(animais);


let carro: {
    nome:string;
    ano:number;
    preco:number;
};

carro = {nome:'Toyota', ano: 2019, preco :80000}
console.log(carro);

function multiplicaNumero(num1:number,num2:number){

    return num1*num2;
}

console.log(multiplicaNumero(2,3));
/// booleanos  ///

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);

let concluido: boolean = false;

if (concluido){
    console.log('Tarefa concluida com sucesso!');
}else{
    console.log('Tarefa pedendete');
}
///  strings ///


let nomeCompleto:string = 'Leonardo wittica crozetta';
console.log(nomeCompleto);
let doubleQuotes:string = "Esse texto foi feito atraves de aspas duplas";
console.log(doubleQuotes);

let acentosGrafico:string = `meu nome é ${nomeCompleto}`;
console.log(acentosGrafico);


/// type array ////

let array:string[] = ['banana','uva','melancia']; 
console.log(array[0]); // vai printar a banana

let arrayDeObejto: Array<string> = ['carro','onibus','moto'];
console.log(arrayDeObejto[1]);  // mais usado

let idiomas: Array<string> = ['ing','ptbr','frances'];
idiomas.push('madarim')//add mandarim no finnal da array	
console.log(idiomas);


let idiomas2: Array<string> = ['ing','ptbr','frances'];
console.log(idiomas2.length); //diz o numero de itens dentro do array

let listaDeNumeros = [1,2,3,4,5];
listaDeNumeros = [... listaDeNumeros,6,7,8,9,10];
console.log(listaDeNumeros);

let linguagens: string[] = new Array('java','python','php','c#');

function funcaoLinguagens (linguagens:string){

for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
    
}


}

console.log(linguagens);


//type tuple //


let pessoa : [string,string,number];
pessoa = ['Leonardo','estudante',18];
console.log(pessoa);
//pessoa = [18,'Leonardo','estudante']; erro de sintax

// acessando o valor de tuplas

let pessoa2 : [string,string,number];
pessoa2 = ['Leonardo','estudante',18];
console.log(pessoa2[1]);

// usando spread operator em tuplas

let listaDeFrutas:[string,...string[]] = ['banana','uva','melancia','caqui']; 
console.log(...listaDeFrutas);

// label em tuplas

let pessoa3 : [nome:string,profissao:string,idade:number] = ['Leonardo','estudante',18];
console.log(pessoa3);


//lista heterogena

let listaFrutas2: [number,boolean,...string[]] = [5,true,...listaDeFrutas];
console.log(listaFrutas2);

//// tuplas em funcoes ///////


function listarPessoas(nome:string[], idades:number[]){

    return [...nome,...idades]

}

let resultado = listarPessoas(['leonardo','rafaella'], [19,20])
console.log(resultado);

// labeled tuples com spread operator numa função

type Nome = 
        |  [primeiroNome:string, sobrenome:string]
        |  [primeiroNome:string,nomeMeio:string,sobrenome:string]

function criarPessoa(...nome: Nome){

    return [...nome];
}

console.log(criarPessoa('Leonardo','crozetta'));