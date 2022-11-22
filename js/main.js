// ----------------------------------------
// Projetos Botao - Ver mais
// ----------------------------------------

const botaoVerMais = document.querySelector('.btn-vermais')
const projetosEscondidos = document.querySelectorAll('.hidden')

function maisProjetos (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function cliqueVer() {
    projetosEscondidos.forEach( (elemento) => {
        if (elemento.classList.contains('hidden')) {
            elemento.classList.remove('hidden');
            elemento.classList.add('visible');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('hidden');
            elemento.classList.remove('visible');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    })
}

maisProjetos(botaoVerMais);

// ----------------------------------------
// Habilidades
// ----------------------------------------

 const habilidades = document.querySelectorAll('.habilidades')

habilidades.forEach(item => item.addEventListener('mouseover', mouseOver))
habilidades.forEach(item => item.addEventListener('mouseout', mouseOut))

function mouseOver () {
    const descricao = document.querySelector('#texto-padrao')
    descricao.classList.remove('show')

    const tabContentItem = document.querySelector(`#${this.id}-descricao`)
    tabContentItem.classList.add('show')

}

function mouseOut () {
    const tabContentItem = document.querySelector(`#${this.id}-descricao`)
    tabContentItem.classList.remove('show')

    const descricao = document.querySelector('#texto-padrao')
    descricao.classList.add('show')
}

// ----------------------------------------
// Mouse Over / Mouse Out - Projetos
// ----------------------------------------

const projetos = document.querySelectorAll('.projetos-items')

projetos.forEach(item => item.addEventListener('mouseover', mouseOverProjetos))
projetos.forEach(item => item.addEventListener('mouseout', mouseOutProjetos))

function mouseOverProjetos () {
    const tabContentItem = document.querySelector(`#${this.id}`)
    tabContentItem.style.transform = "scale(1.2)"

    const projetoTitulo = document.querySelector(`#${this.id}-titulo`)
    projetoTitulo.classList.add('hidden')

    const bikeInformation = document.querySelector(`#${this.id}-information`)
    bikeInformation.classList.add('visible')
}

function mouseOutProjetos () {
    projetos.forEach(item => item.style.transform = "scale(1.0)")

    const projetoTitulo = document.querySelector(`#${this.id}-titulo`)
    projetoTitulo.classList.remove('hidden')

    const bikeInformation = document.querySelector(`#${this.id}-information`)
    bikeInformation.classList.remove('visible')
}

// ----------------------------------------
// Menu responsivo
// ----------------------------------------

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener('click', toggle)

function toggle () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// Fechar a barra de navegação sempre que selecionar uma página
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))



window.sr = ScrollReveal({ reset: true });

sr.reveal('.showUp', {duration: 2000});




