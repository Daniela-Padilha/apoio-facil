import { useState } from "react";
import apoios from "../data/apoios.json";
import ApoioCard from "../components/ApoioCard";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [categoria, setCategoria] = useState("Todos");

	const categorias = ["Todos", ...new Set(apoios.map((a) => a.categoria))];

	const filteredApoios = apoios.filter((apoio) => {
		const text = `${apoio.nome} ${apoio.descricao} ${apoio.categoria}`.toLowerCase();
		const matchesText = text.includes(searchTerm.toLowerCase());
		const matchesCategoria = categoria === "Todos" || apoio.categoria === categoria;
		
		return (matchesText && matchesCategoria);
	});

	return (
		<div>
			<h2>Apoios disponíveis</h2>
			<input 
				type="text" 
				placeholder="Pesquisar apoios..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			>
			</input>

			<div className="categorias">
				{categorias.map((cat) => (
					<button
						key={cat}
						onClick={() => setCategoria(cat)}
						className={categoria === cat ? "active" : ""}
					>
						{cat}
					</button>
				))}
			</div>
			{filteredApoios.map((apoio) => (
				<ApoioCard key={apoio.id} apoio={apoio} />
			))}

			{filteredApoios.length === 0 && (
				<p>Nenhum apoio encontrado.</p>
			)}
		</div>
	);
}

export default Home;