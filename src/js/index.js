// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.
    

    //passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
    //Formato variáveis exemplo: const (declaração) botao (nome da variável) = document.getElementById('chopper') (atribuição);



const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, índice) =>{
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        
         const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        
        botao.classList.add("selecionado");
        
        personagens[índice].classList.add("selecionado");
        
            });
        });

        const personagens = document.querySelectorAll(".personagem")



//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações dele
    //passo 1 - pegar os personagens no JS para     poder mostrar ou esconder ele

    




            //passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele

            //OBJ 2 passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seçeção dele




            //OBJ 2 passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou







             //passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        
  

    //OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações dele
    //passo 1 - pegar os personagens no JS para     poder mostrar ou esconder ele



   




   

   

