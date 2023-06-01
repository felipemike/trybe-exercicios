class Produto {
  private _nome: string;
  private _valor: number;

  constructor(nome: string, valor: number) {
    this._nome = nome;
    this._valor = valor;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    }
    this._nome = value;
  }

  public get valor(): number {
    return this._valor;
  }

  public set valor(value: number) {
    if (value < 0) {
      throw new Error('O valor deve ser positivo');
    }
    this._valor = value;
  }
}

export default Produto;