var listaFilmes= [{nome:"The Last of Us", imagem:"https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg", trailer:"https://www.youtube.com/watch?v=lW5kiEUVlpo"}, {nome:"Round 06", imagem:"https://m.media-amazon.com/images/I/7118ecsxO3L.jpg", trailer:"https://www.youtube.com/watch?v=oqxAJKy0ii4"}, {nome:"Game of Thrones", imagem:"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg", trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ"}, {nome:"Bird Box", imagem:"https://kbimages1-a.akamaihd.net/2352a6df-3541-4474-9a9d-44fce5c9f3b8/1200/1200/False/bird-box-1.jpg", trailer:"https://www.youtube.com/watch?v=JeGdtrLQoiY"}, {nome: "Invencível", imagem:"https://br.web.img3.acsta.net/r_1280_720/pictures/21/02/26/16/32/3176360.jpg", trailer: "https://www.youtube.com/watch?v=chcPVeszoUo"}, {nome: "A rede social", imagem:"https://images.justwatch.com/poster/270188247/s592/a-rede-social", trailer:"https://www.youtube.com/watch?v=kAwIKMYN6UU"}, {nome: "Não olhe para cima", imagem: "https://www.atoupeira.com.br/wp-content/uploads/2021/11/nao-olhe-para-cima-poster-nacional.jpg", trailer:"https://www.youtube.com/watch?v=c1nToClX_3w"}, {nome: "Parasita", imagem: "https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.jpg", trailer:"https://www.youtube.com/watch?v=m4jfE-TxC24"}, {nome: "Duna", imagem: "https://assets-prd.ignimgs.com/2021/08/09/dune-insta-vert-main-dom-1638x2048-1628522913715.jpg", trailer:"https://www.youtube.com/watch?v=dnBpZuSUISQ"}, {nome: "Stranger Things", imagem: "https://img.elo7.com.br/product/original/3041510/big-poster-serie-stranger-things-netflix-lo001-90x60-cm-geek.jpg", trailer:"https://www.youtube.com/watch?v=fLL0_Vy2Wlo"}, {nome: "A Grande Família", imagem: "https://gabinetedeartes.com.br/wp-content/uploads/2016/07/83b3532fd2a5b88b338a5e8ebe097f72.jpg", trailer:"https://www.youtube.com/watch?v=IIvsyDGAEiw"}, {nome: "Vovó...zona", imagem: "https://br.web.img2.acsta.net/pictures/14/05/06/21/20/243550.jpg", trailer:"https://www.youtube.com/watch?v=hmf4gHBa-Zw"}]

var elementoListaFilmes = document.getElementById("listaFilmes") //É o elementoListaFilmes que mostra o que aparece na tela.

function exibirNaTela(){
  // Limpa o campo de input.
  document.getElementById("filme").value = "" 
  document.getElementById("trailer").value = ""
  document.getElementById("nome").value = ""
  
  elementoListaFilmes.innerHTML = null  //Limpo a tela eliminando todos as imagens já adicionadas.
  
  //Adiciono todos os filmes e trailers na tela
  
  for (var i = 0; i < listaFilmes.length; i++){
    elementoListaFilmes.innerHTML += `

    <a href=${listaFilmes[i].trailer} target="blank">${listaFilmes[i].nome}<img src=" ${listaFilmes[i].imagem}" style="transition: transform 0.5s;"> </a>
                          

    
    
    `    
}
}

exibirNaTela()
  



function adicionarFilme(){
  
  //Armazeno a informação digitada pelo usuário
  var filmeInserido = document.getElementById("filme").value
  var trailerFilme = document.getElementById("trailer").value
  var nomeFilme = document.getElementById("nome").value
  
  
  var listaFormatosImagem = ["jpg", "jpeg", "png", "tif", "tiff", "bmp", "gif"]
  var FormatoInserido = filmeInserido.slice(-3)
  
  if (nomeFilme == ""){
    alert("Insira um nome válido")
  }else if (listaFormatosImagem.includes(FormatoInserido)){
    //Adiciona a imagem à lista "listaFilmes"
    listaFilmes.push({nome: nomeFilme, imagem:filmeInserido, trailer:trailerFilme})
    exibirNaTela()
    }else if (filmeInserido != ""){
      alert("O link que você inseriu não é de uma imagem. \n\n Insira um link que termine com uma extensão de imagem (.jpg, .png, .jpeg, ...) \n \n ex: https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg")
      
    }
 }