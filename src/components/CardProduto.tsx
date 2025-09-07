import produtos from "@/data/produtos.json";
import './cardproduto.css'
import Link from "next/link";

type CardProdutoProps = {
  id: number;
};

export function CardProduto({ id }: CardProdutoProps) {
  // Procura o produto pelo id
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <Link href={`/produto/${produto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-produto" tabIndex={0} style={{ cursor: 'pointer' }}>
        <img
          src={produto.foto}
          alt={produto.nome}
          className="card-produto-img"
        />
        <h3 className="card-produto-nome">{produto.nome}</h3>
        <p className="card-produto-descricao">{produto.descricao}</p>
        <span className="card-produto-tipo">{produto.tipoDeProduto}</span>
      </div>
    </Link>
  );
}