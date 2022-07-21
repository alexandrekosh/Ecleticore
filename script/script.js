const conjuntos = [
	{
		id: 0,
		tipo: "conj.",
		nome: "Sweet",
		descrição: "Conjunto bonito",
		img: "sweet.jpg",
		quantidade: 0,
	},
	{
		id: 1,
		tipo: "conj.",
		nome: "Praiano",
		descrição: "Conjunto praiano",
		img: "praiano.jpg",
		quantidade: 0,
	},
	{
		id: 2,
		tipo: "conj.",
		nome: "Lover",
		descrição: "Conjunto Lover",
		img: "lover.jpg",
		quantidade: 0,
	},
	{
		id: 3,
		tipo: "conj.",
		nome: "Light Blue",
		descrição: "Conjunto Light Blue",
		img: "light.jpg",
		quantidade: 0,
	},
	{
		id: 4,
		tipo: "conj.",
		nome: "Dark Blue",
		descrição: "Conjunto Dark Blue",
		img: "dark.jpg",
		quantidade: 0,
	},
];

criarProdutos = () => {
	var box = document.getElementById("box");

	conjuntos.map((val) => {
		box.innerHTML +=
			`
        <div class="acessorios-box">
		<img src="./assets/` +
			val.img +
			`" alt="imagen ` +
			val.nome +
			`" class="acessorios-img">
		    <h3>` +
			val.nome +
			`</h3>
		    <h4>` +
			val.nome +
			`</h4>
		    <p>` +
			val.descrição +
			`</p>
		    <a href="#acarrinho" class="acessorios-box-btn" key="` +
			val.id +
			`">Adicionar ao carrinho</a>
		</div>
        `;
	});
};
criarProdutos();

atualizarCarrinho = () => {
	var carrinho = document.getElementById("carrinho");
	carrinho.innerHTML = "";
	conjuntos.map((val) => {
		if (val.quantidade > 0) {
			carrinho.innerHTML +=
				`
            <p>` +
				val.nome +
				` | qtd: ` +
				val.quantidade +
				`</p>
            </hr>
            `;
		}
	});
};

var links = document.querySelectorAll(".acessorios-box-btn");
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function () {
		let key = this.getAttribute("key");
		conjuntos[key].quantidade++;
		atualizarCarrinho();
		return false;
	});
}
