let xadrez = 'Torre';

let result = xadrez.toLowerCase();

switch (result) {
  case 'bispo':
    console.log('anda pro lado direito');
    break;
  case 'rainha':
    console.log('anda pro lado esquerdo')
    break;
    case 'cavalo':
      console.log('anda pra frente');
      break
    case 'peão':
        console.log('anda pra tras');
    break
    case 'torre':
        console.log('anda para todos os lados');
    break
  default:
    console.log('Erro peça invalida');
}