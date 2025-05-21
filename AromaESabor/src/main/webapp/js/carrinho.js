// Atualiza o contador de itens no carrinho
function atualizarContadorCarrinho() {
    const iframe = document.getElementById("menuIframe"); // referencia o <iframe> do menu
    const menuIframeWindow = iframe.contentWindow; // referencia a janela do iframe
    const contador = menuIframeWindow.document.getElementById("contadorCarrinho"); // referencia ao elemento contador no iframe

    contador.innerHTML = parseInt(contador.innerHTML) + 1;
}

// Adiciona o item ao carrinho
function adicionarAoCarrinho(botao) {
    const card = botao.closest('.card');
    const nome = card.querySelector('.nomeItem').textContent;
    const preco = card.querySelector('.precoItem').textContent;

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

