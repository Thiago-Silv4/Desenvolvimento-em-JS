class Pessoa{
    constructor(){ // auxiliador da class
    this.nome = 'Paula';
    this.ano_nascimento = 2000;
    this.endereco = 'Rua 10, bairro'
    this.curso = 'JS'
    this.peso = 50
    this.altura = 1.70
    }

    display(){
    console.log(this.nome)
    }
    
    displayName(){
        console.log(this.nome)

    }

    calcular_idade(){
        let ano_atual = parseInt(prompt('Digite o ano atual: '))
        let calculo = ano_atual - this.ano_nascimento
        console.log('Idade: ', calculo)
    }

    imc(){
        novo_imc = this.peso/this.altura ** 2
        console.log('IMC da ${this.nome} -> {novo_imc}')

    }

}

outra_pessoa = displayName()
outra.pessoa = calcular_Idade()
outra.pessoa.imc()