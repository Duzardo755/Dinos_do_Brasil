function pesquisar() {
  // Obtém uma referência à seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o termo de pesquisa inserido pelo usuário
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campo de pesquisa estiver vazio, exibe uma mensagem e sai da função
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Digite algo para pesquisar</p>";
    return;
  }

  // Converte o termo de pesquisa para minúsculas para uma busca que não diferencia maiúsculas de minúsculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa variáveis para armazenar os resultados da pesquisa e dados temporários
  let resultados = "";
  let titulo = "";
  let tags = "";

  // Itera sobre cada objeto de dinossauro no array 'dados'
  for (let dado of dados) {
    // Converte o título e a descrição do dinossauro para minúsculas para comparação
    titulo = dado.titulo.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Se o termo de pesquisa for encontrado no título ou na descrição
    if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Adiciona o código HTML para exibir as informações do dinossauro à string 'resultados'
      resultados += `
          <div class="item-resultado">
              <h2>
              <a href="#" target=_blank">${dado.titulo} </a> 
              </h2> 
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank" >Mais informações</a> 
          </div>
          `;
    }
  }

  // Se nenhum resultado for encontrado, exibe uma mensagem de "não encontrado"
  if (!resultados) { // Verifica se 'resultados' está vazio
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atualiza o conteúdo HTML da 'seção' com os resultados da pesquisa
  section.innerHTML = resultados;
}