function ApoioCard({ apoio }) {
	return (
		<div className="apoio-card">
			<h3>{apoio.nome}</h3>
			<span className="categoria">{apoio.categoria}</span>
			<p>{apoio.descricao}</p>
		</div>
	);
}

export default ApoioCard;