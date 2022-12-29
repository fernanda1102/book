const btnFiltrarLivros = document.getElementById ('btnFiltrarLivrosFront')
btnFiltrarLivros.addEventListener('click', filtrarLivrosDeFront)

function filtrarLivros() {
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
    console.table(livrosFiltrados)
    
}