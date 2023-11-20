var filmesFavoritosNome = ["Homem-Aranha: Dentro do Aranhaverso","Besouro Azul","Tick, Tick... Boom!","Duna"];
var filmesFavoritosImagem = ['https://upload.wikimedia.org/wikipedia/pt/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg','https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2023/08/bruna-marquezine-besouro-azul-divulgacao-greve-atores-hollywood-2.jpg','https://br.web.img2.acsta.net/pictures/21/10/05/10/14/4942486.jpg','https://1.bp.blogspot.com/-gPttHkCZ6qI/YaLhwjd98DI/AAAAAAAACDg/azy5f1YvXwAvtLWgwuAJplmv51WT5fr_gCNcBGAsYHQ/s400/ca5b9160371f176a522a110136e2dcc1.jpg'];
var filmesFavoritosTrailer = ['https://www.youtube.com/watch?v=_4is7I_ZxTg','https://www.youtube.com/watch?v=IZw2slPIoGs','https://www.youtube.com/watch?v=T0aAzbvzgEQ','https://www.youtube.com/watch?v=dnBpZuSUISQ'];

var seriesFavoritasNome = ['Stranger Things','One Piece'];
var seriesFavoritasImagem = ['https://miro.medium.com/v2/resize:fit:803/1*VDDTtK7f0MLBdn5SOdcs1g.jpeg','https://uploads.jovemnerd.com.br/wp-content/uploads/2023/08/poster_live_action_one_piece__81n1ue0-760x950.jpeg'];
var seriesFavoritosTrailer = ['https://www.youtube.com/watch?v=JCGtuh4AEms','https://www.youtube.com/watch?v=YC8SLpnxsL4'];

function idValor(valorDoId){
  return document.getElementById(valorDoId);
}

var tipoDeLista = idValor("listaFilmes");
var elementoListaFilmes = tipoDeLista;

function carregarListas(){
  for (var i = 0 ; i < filmesFavoritosNome.length; i++){
    idValor("listaFilmes").innerHTML += `<div class="item"><a title="${filmesFavoritosNome[i]}" href="${filmesFavoritosTrailer[i]}" target="_blank"><img class="itemCartaz" alt="${filmesFavoritosNome[i]}" src="${filmesFavoritosImagem[i]}"></a><br><p class="itemTitulo">${filmesFavoritosNome[i]}</p><button title="Remover" class="botao__remover" onClick="removerFilme(this)">X</button></div>`;
  }
  for (var i = 0 ; i < seriesFavoritasNome.length; i++){
    idValor("listaSeries").innerHTML += `<div class="item"><a title="${seriesFavoritasNome[i]}" href="${seriesFavoritosTrailer[i]}" target="_blank"><img class="itemCartaz" alt="${seriesFavoritasNome[i]}" src="${seriesFavoritasImagem[i]}"></a><br><p class="itemTitulo">${seriesFavoritasNome[i]}</p><button title="Remover" class="botao__remover" onClick="removerFilme(this)">X</button></div>`;
  }
}

carregarListas();

function defineCategoria(){
  var categoriaTipo = idValor("categoria__tipo").value;
  if (categoriaTipo == "filme"){
    tipoDeLista = idValor("listaFilmes");
  } else {
    tipoDeLista = idValor("listaSeries");
  }
}

function adicionarFilme(){
  var oNome = idValor("filme__titulo").value;
  var aImagem = idValor("filme__imagem").value;
  var oTrailer = idValor("filme__trailer").value;
  var elementoListaFilmes = tipoDeLista;
  elementoListaFilmes.innerHTML +=
    `
    <div class="item">
    <a title="${oNome}" href="${oTrailer}" target="_blank">
    <img class="itemCartaz" alt="${oNome}" src="${aImagem}">
    </a><br>
    <p class="itemTitulo">${oNome}</p>
    <button title="Remover" class="botao__remover" onClick="removerFilme(this)">X</button></div>
    `;
  
  var verificaLista = idValor("categoria__tipo").value;
  if (verificaLista == "filme"){
    filmesFavoritosNome.push(oNome);
    filmesFavoritosImagem.push(aImagem);
    filmesFavoritosTrailer.push(oTrailer);
  } else if (verificaLista == "serie"){
    seriesFavoritasNome.push(oNome);
    seriesFavoritasImagem.push(aImagem);
    seriesFavoritosTrailer.push(oTrailer);
  } else {
    alert ("Erro");
  }
  
  console.log(filmesFavoritosNome);
}

function removerFilme(divFilho) {
  // Obtém a referência à div pai do botão clicado
  var divPai = divFilho.parentNode;
  // Remove a div pai
  divPai.remove();
  
  verificaSeListaTemFilmes();
}

function verificaSeListaTemFilmes(){
  var verificaFilme = idValor("listaFilmes");
  if (filmesFavoritosNome.length < 0){
    verificaFilme.parentNode.style.display ="none";
  } else {
    verificaFilme.parentNode.style.display="block";
  }
  
  var verificaSerie = idValor("listaSeries");
  
   if (seriesFavoritasNome.length < 0){
    verificaSerie.parentNode.style.display ="none";
  } else {
    verificaSerie.parentNode.style.display ="block";
  }
}

verificaSeListaTemFilmes();