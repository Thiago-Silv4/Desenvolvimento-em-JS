import {Calculadora} from './calculadora.js'
import {Form} from './formulario.js'


function testando(){

let c;
let d;

d = new Form('a',25,'rua x','@a.com')
c = new Calculadora(10,20)



d.display()
d.done()
c.somar()




// c.dividir()
// c.multiplicar()
// c.subtrair()


}



testando()
