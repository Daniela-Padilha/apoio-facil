import { useState } from "react";
import apoios from "../data/apoios.json";
import ApoioCard from "../components/ApoioCard";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredApoios = apoios.filter((apoio) => {
		const text = `${apoio.nome} ${apoio.descricao} ${apoio.categoria}`.toLowerCase();
		return (text.includes(searchTerm.toLowerCase()));
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