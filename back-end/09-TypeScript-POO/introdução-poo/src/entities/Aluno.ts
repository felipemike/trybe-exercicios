class Aluno {
  private _matricula: number;
  private _nome: string;
  private _provas: number[] = [];
  private _trabalhos: number[] = [];

  constructor(
    matricula: number,
    nome: string,
    provas: number[],
    trabalhos: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this.provas = provas;
    this.trabalhos = trabalhos;
  }

  public get matricula(): number {
    return this._matricula;
  }

  public set matricula(value: number) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get provas(): number[] {
    return this._provas;
  }

  public set provas(value: number[]) {
    if (value.length !== 4) {
      throw new Error('O aluno deve ter 4 notas de prova');
    }
    this._provas = value;
  }

  public get trabalhos(): number[] {
    return this._trabalhos;
  }

  public set trabalhos(value: number[]) {
    if (value.length !== 2) {
      throw new Error('O aluno deve ter 2 notas de trabalho');
    }
    this._trabalhos = value;
  }

  somaNotas(): number {
    const soma = [...this._provas, ...this._trabalhos]
      .reduce((acc, nota) => acc + nota, 0);
    return soma;
  }

  mediaNotas(): number {
    return this.somaNotas() / this._provas.length + this._trabalhos.length;
  }
}

export default Aluno;
