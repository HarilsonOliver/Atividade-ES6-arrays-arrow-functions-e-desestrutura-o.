//const arr = [1,2,3,4,5,8,9]

//const newArr = arr.map(function(item){
  //  return item * 2;
//})

//const soma = arr.reduce(function(total, next){
  //  return total + next;
//})

//const filter = arr.filter(function(item){
  //  return item % 2 === 0;

//})

//const find = arr.find(function(item){
 //   return item === 4;
//})

//const newArr = arr.map(function(item){
  //  return item * 2;
//})

//const newArr = arr.map(item=>item * 2;)

//const teste = () => {return {nome: 'lucas'}}

//function soma(a,b){
  //  return a+b;
//}

//function soma2(a=1,b=2){
  //  return a+b;
//}

//console.log(soma2(1,5))

//_______________________________________________________________________________________________________________

//const usuario = {
    // nome: "lucas",
    //idade: 38,
    //endereco:{
    //    rua:"Rua E",
      //  cidade: "Jequié"
   // }
//}

//const nome = usuario.nome
//const idade = usuario.idade

//const {nome, idade, endereco:{cidade}} = usuario;
//console.log(nome)
//console.log(idade)
//console.log(cidade)

//function mostraNome(usuario){
  //  console.log(usuario.nome)
//}

//function mostraNome2({nome}){
  //  console.log(nome)
//}
//mostraNome(usuario)
//mostraNome2(usuario)

//const {nome, ...resto} = usuario
//console.log(nome)
//console.log(resto)

//const arr = [1,2,3,4]
//const[...c] = arr;
//console.log(c)

//function soma(a,b,c,d){
  //  return a+b+c+d
//}
//console.log(soma(1,2,3,4))

//function soma2(...params){
//    console.log(params)
//    return params.reduce((total, next)=> total+next);
//}   

//console.log(soma2 (1,2,3,4,5,6,7))

const usuario1 = {
    nome:"lucas",
    idade: 38,
    emepresa:"uesb"
}

const usuario2 = {...usuario1, nome:"Manoel"}
console.log(usuario2)

const idade = 38
const nome = "Lucas"

console.log('Meu nome é: '+nome+' minha idade é:'+idade+' anos')
console.log(`Meu nome é: ${nome} minha idade é: ${idade} anos`)

//const usuario_short = {
    //nome: nome,
    //idade: idade,
    //empresa: 'uesb'
//}

const usuario_short = {
    nome,
    idade,
    empresa: 'uesb'
}

console.log(usuario_short)

