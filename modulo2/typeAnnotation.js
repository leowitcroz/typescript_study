var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nome = "Leonardo";
console.log(nome);
var animais = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);
var carro;
carro = { nome: 'Toyota', ano: 2019, preco: 80000 };
console.log(carro);
function multiplicaNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicaNumero(2, 3));
/// booleanos  ///
var tarefaConcluida = true;
var tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
var concluido = false;
if (concluido) {
    console.log('Tarefa concluida com sucesso!');
}
else {
    console.log('Tarefa pedendete');
}
///  strings ///
var nomeCompleto = 'Leonardo wittica crozetta';
console.log(nomeCompleto);
var doubleQuotes = "Esse texto foi feito atraves de aspas duplas";
console.log(doubleQuotes);
var acentosGrafico = "meu nome \u00E9 ".concat(nomeCompleto);
console.log(acentosGrafico);
/// type array ////
var array = ['banana', 'uva', 'melancia'];
console.log(array[0]); // vai printar a banana
var arrayDeObejto = ['carro', 'onibus', 'moto'];
console.log(arrayDeObejto[1]); // mais usado
var idiomas = ['ing', 'ptbr', 'frances'];
idiomas.push('madarim'); //add mandarim no finnal da array	
console.log(idiomas);
var idiomas2 = ['ing', 'ptbr', 'frances'];
console.log(idiomas2.length); //diz o numero de itens dentro do array
var listaDeNumeros = [1, 2, 3, 4, 5];
listaDeNumeros = __spreadArray(__spreadArray([], listaDeNumeros, true), [6, 7, 8, 9, 10], false);
console.log(listaDeNumeros);
var linguagens = new Array('java', 'python', 'php', 'c#');
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
console.log(linguagens);
//type tuple //
var pessoa;
pessoa = ['Leonardo', 'estudante', 18];
console.log(pessoa);
//pessoa = [18,'Leonardo','estudante']; erro de sintax
// acessando o valor de tuplas
var pessoa2;
pessoa2 = ['Leonardo', 'estudante', 18];
console.log(pessoa2[1]);
// usando spread operator em tuplas
var listaDeFrutas = ['banana', 'uva', 'melancia', 'caqui'];
console.log.apply(console, listaDeFrutas);
// label em tuplas
var pessoa3 = ['Leonardo', 'estudante', 18];
console.log(pessoa3);
//lista heterogena
var listaFrutas2 = __spreadArray([5, true], listaDeFrutas, true);
console.log(listaFrutas2);
//// tuplas em funcoes ///////
function listarPessoas(nome, idades) {
    return __spreadArray(__spreadArray([], nome, true), idades, true);
}
var resultado = listarPessoas(['leonardo', 'rafaella'], [19, 20]);
console.log(resultado);
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
console.log(criarPessoa('Leonardo', 'crozetta'));
