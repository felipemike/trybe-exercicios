class Aluno {
  private _matricula: number;
  private _nome: string;
  private _provas: number[];
  private _trabalhos: number[];

  constructor(
    matricula: number,
    nome: string,
    provas: number[],
    trabalhos: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._provas = provas;
    this._trabalhos = trabalhos;
  }

  somaProvas(): number {
    let soma = 0;
    for (let i = 0; i < this._provas.length; i += 1) {
      soma += this._provas[i];
    }
    return soma;
  }

  mediaProvas(): number {
    return this.somaProvas() / this._provas.length;
  }
}

export default Aluno;