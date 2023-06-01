import Aluno from './entities/Aluno';

const aluno1 = new Aluno(123, 'João', [10, 8, 9, 9], [10, 9]);

console.log(`A média do aluno ${aluno1.nome} é ${aluno1.mediaNotas()}`);