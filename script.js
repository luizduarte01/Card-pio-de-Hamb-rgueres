const produtos = [
    { nome: "X-Salada", preco: 30, imagem: "assets/xsalada.jpeg" },
    { nome: "X-Bacon", preco: 34, imagem: "assets/xbacon.png" },
    { nome: "X-Bacon Egg", preco: 39, imagem: "assets/bacon-egg.png" },
    { nome: "Monstruoso", preco: 50, imagem: "assets/monstruoso.png" },
    { nome: "Big Vegano", preco: 55, imagem: "assets/monstruoso-vegan.png" },
    { nome: "X-Vegan", preco: 45, imagem: "assets/xvegan.png" }
];

const cardContainer = document.getElementById('card-container');

function renderCards(items) {
    cardContainer.innerHTML = '';
    items.forEach(item => {
        cardContainer.innerHTML += `
            <div class="card">
                <img src="${item.imagem}" alt="${item.nome}">
                <h3>${item.nome}</h3>
                <p class="price">R$ ${item.preco.toFixed(2)}</p>
            </div>
        `;
    });
}

function showAll() {
    renderCards(produtos);
}

function mapItems() {
    const discountedItems = produtos.map(item => ({
        ...item,
        preco: item.preco * 0.9 // Aplicando 10% de desconto
    }));
    renderCards(discountedItems);
}
function sumPrices() {
    const total = produtos.reduce((acc, item) => acc + item.preco, 0);
    alert(`O preço total é: R$ ${total.toFixed(2)}`);
}

function filterItems() {
    const filteredItems = produtos.filter(item => item.preco > 40);
    renderCards(filteredItems);
}

// Exibir todos os itens ao carregar a página
showAll();
