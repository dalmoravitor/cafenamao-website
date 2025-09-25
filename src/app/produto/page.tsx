
"use client";
import { Header } from "@/components/Header";
import produtos from "@/data/produtos.json";
import { CardProduto } from "@/components/CardProduto";
import "./produto.css";

export default function ProdutoPage() {
	return (
		<div className="produto-container">
			<Header />
			
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
				{produtos.map((produto) => (
					<CardProduto key={produto.id} id={produto.id} />
				))}
			</div>
		</div>
	);
}
