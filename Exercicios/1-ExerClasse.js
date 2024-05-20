/*
Exercício 1: Criação de Classe
Crie uma classe Pessoa com as propriedades nome e idade. Em seguida, crie dois objetos pessoa1 e pessoa2 dessa classe e imprima suas informações no console.
 

Exercício 2: Adição de Método
Adicione um método cumprimentar() à classe Pessoa, que imprime uma saudação usando o nome da pessoa. Chame o método cumprimentar() para os objetos pessoa1 e pessoa2 criados no exercício anterior.

Exercício 3: Herança
Crie uma classe Aluno que herda da classe Pessoa e adiciona uma propriedade curso. Crie um objeto aluno1 dessa classe e imprima suas informações no console.

Exercício 4: Sobrescrita de Método
Na classe Aluno, sobrescreva o método cumprimentar() para incluir uma mensagem específica para alunos. Chame o método cumprimentar() para o objeto aluno1.

  Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma 
    mensagem com o nome e a idade da pessoa.

    Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o 
    perímetro do retângulo.

    Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e
    verificar o saldo.

    Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular
    o valor total do produto (preço * quantidade).

    Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as
    informações do carro.

    Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para
    calcular a média das notas.
*/

class Pessoa {

    constructor(nome,idade)
    {
        this.nome = nome;
        this.idade = idade;
    }
    cumprimentar()
    {
        console.log("Ola , tudo bem")
    }
    apresentar()
    {
        console.log("meu nome é:",this.nome)
        console.log("minha idade é:",this.idade)
    }

    

}
const pessoa1 = new Pessoa ("rodrigo",43)
const pessoa2 = new Pessoa ("maria",32)

console.log(pessoa1.nome)
console.log(pessoa2.nome)

pessoa1.cumprimentar();
pessoa2.cumprimentar();

class Aluno extends Pessoa{

    constructor(nome,idade,curso)
    {
        super(nome,idade)
        this.curso = curso;
    }
    cumprimentar()
    {
        console.log("aula de hoje")
    }
    

}    
const aluno = new Aluno("Atila",22,"tecnico de informatica")
console.log(aluno)
aluno.cumprimentar();
aluno.apresentar();

class Retangulo {
    constructor(largura, altura)
    {
        this.largura = largura;
        this.altura = altura;
    }
      get area(){
        return this.largura * this.altura;
    }

    get Perimetro() 
    {
        return 2 * (this.largura + this.altura);
    }
     
}
const retangulo = new Retangulo(5, 7);
console.log("Área do retângulo:", retangulo.area);
console.log("Perímetro do retângulo:", retangulo.Perimetro);

class ContaBancaria
{
constructor(saldo, titular)
{
    this.saldo = saldo
    this.titular = titular
}
 deposita(valor)
 {
     this.saldo = this.saldo + valor
 }
 sacar(valor)
 {
     this.saldo = this.saldo - valor
 }
 verificar()
 {
      console.log("meu saldo é", this.saldo)
 }
}
const cb = new ContaBancaria(1000,"Manoel")
cb.verificar()
cb.deposita(500)
cb.verificar()
cb.sacar(800)
cb.verificar()

    







