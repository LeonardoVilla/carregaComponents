function carregaHtml(caminho, id){
    fetch(caminho)
    .then((response) => response.text())
    .then((html)=>{
        document.getElementById(id).innerHTML = html;
    });
}