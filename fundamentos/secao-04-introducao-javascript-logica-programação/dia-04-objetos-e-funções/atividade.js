//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:


let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorente = 'Sim';

console.log('Bem-vinda, ' + info.personagem)
console.log(info)

for(let key in info){
  console.log(info[key]) //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
}