import Cliente from './Cliente';
import Produto from './Produto';

class Venda {
  private _cliente: Cliente;
  private _produtos: Produto[] = [];
  private _metodoPagamento: string;
  private _desconto: number;

  constructor(
    cliente: Cliente,
    produtos: Produto[],
    metodoPagamento: string,
    desconto: number,
  ) {
    this._cliente = cliente;
    this.produtos = produtos;
    this._metodoPagamento = metodoPagamento;
    this._desconto = desconto;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }

  public set cliente(value: Cliente) {
    this._cliente = value;
  }

  public get produtos(): Produto[] {
    return this._produtos;
  }

  public set produtos(value: Produto[]) {
    if (value.length < 1) {
      throw new Error('A venda deve ter pelo menos 1 produto');
    }
    this._produtos = value;
  }

  public get metodoPagamento(): string {
    return this._metodoPagamento;
  }

  public set metodoPagamento(value: string) {
    this._metodoPagamento = value;
  }

  public get desconto(): number {
    return this._desconto;
  }

  public set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto deve ser positivo');
    }
    this._desconto = value;
  }
}

export default Venda;