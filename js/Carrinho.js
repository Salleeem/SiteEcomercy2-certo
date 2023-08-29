
    
        const produtos = [
            { nome: "Cotton T-shirt", preco: 44.00, imagem: "https://i.imgur.com/1GrakTl.jpg" },
            { nome: "Cotton T-shirt", preco: 44.00, imagem: "https://i.imgur.com/ba3tvGm.jpg" },
            { nome: "Cotton T-shirt", preco: 44.00, imagem: "https://i.imgur.com/pHQ3xT3.jpg" }
        ];

        let carrinho = [];

        function atualizarCarrinho() {
            const carrinhoContainer = document.querySelector(".cart");

            carrinhoContainer.innerHTML = ""; // Limpa o conteúdo anterior do carrinho

            for (let i = 0; i < carrinho.length; i++) {
                const produto = carrinho[i];

                const produtoHTML = `
                    <div class="row main align-items-center">
                        <div class="col-2"><img class="img-fluid" src="${produto.imagem}"></div>
                        <div class="col">
                            <div class="row text-muted">${produto.nome}</div>
                        </div>
                        <div class="col">
                            <a href="#" class="remove-from-cart border">Remover</a>
                        </div>
                        <div class="col">&euro; ${produto.preco.toFixed(2)}</div>
                    </div>
                `;

                carrinhoContainer.insertAdjacentHTML("beforeend", produtoHTML);

                // Adiciona evento de remoção ao botão "Remover" deste produto
                const botoesRemover = carrinhoContainer.querySelectorAll(".close");
                const ultimoBotaoRemover = botoesRemover[botoesRemover.length - 1];

                ultimoBotaoRemover.addEventListener("click", () => removerProduto(i));
            }

            // Calcule e atualize totais, quantidades, etc. e exiba onde necessário
        }

        // Restante do código (adicionarProduto, removerProduto) permanece igual
   

