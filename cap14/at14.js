const perfil = document.getElementById("perfil");
const fotoPerfil = document.getElementById("fotoPerfil");
const nomePerfil = document.getElementById("nomePerfil");
const cursoPerfil = document.getElementById("cursoPerfil");
const biografiaPerfil = document.getElementById("biografiaPerfil");

const temaSelect = document.getElementById("temaSelect");
const fonteRange = document.getElementById("fonteRange");
const valorFonte = document.getElementById("valorFonte");
const mostrarBio = document.getElementById("mostrarBio");

const emailInput = document.getElementById("emailInput");
const telefoneInput = document.getElementById("telefoneInput");

const emailExibido = document.getElementById("emailExibido");
const telefoneExibido = document.getElementById("telefoneExibido");

const contadorAcoes = document.getElementById("contadorAcoes");
const ultimaAcao = document.getElementById("ultimaAcao");

const btnAlterarNome = document.getElementById("btnAlterarNome");
const btnAlterarCurso = document.getElementById("btnAlterarCurso");
const btnAlterarFoto = document.getElementById("btnAlterarFoto");
const btnDestacarPerfil = document.getElementById("btnDestacarPerfil");
const btnRestaurar = document.getElementById("btnRestaurar");
const btnAtualizarContato = document.getElementById("btnAtualizarContato");

const nomeOriginal = "João Silva";

const cursoOriginal =
    "Curso: Técnico em Informática";

const fotoOriginal =
    "imagens/perfil1.jpg";

document.body.classList.add("tema-claro");

let totalAcoes = 0;

function registrarAcao(acao) {

    totalAcoes++;

    contadorAcoes.textContent = totalAcoes;

    ultimaAcao.textContent = acao;
}

btnAlterarNome.addEventListener("click", () => {

    nomePerfil.textContent =
        "Maria Oliveira";

    registrarAcao("Nome alterado");
});

btnAlterarCurso.addEventListener("click", () => {

    cursoPerfil.textContent =
        "Curso: Análise e Desenvolvimento de Sistemas";

    registrarAcao("Curso alterado");
});

btnAlterarFoto.addEventListener("click", () => {

    fotoPerfil.src =
        "imagens/perfil2.jpg";

    registrarAcao("Foto alterada");
});

btnDestacarPerfil.addEventListener("click", () => {

    perfil.classList.add(
        "perfil-destaque"
    );

    registrarAcao("Perfil destacado");
});

btnRestaurar.addEventListener("click", () => {

    nomePerfil.textContent =
        nomeOriginal;

    cursoPerfil.textContent =
        cursoOriginal;

    fotoPerfil.src =
        fotoOriginal;

    perfil.classList.remove(
        "perfil-destaque"
    );

    registrarAcao("Perfil restaurado");
});

temaSelect.addEventListener("change", () => {

    document.body.classList.remove(
        "tema-claro",
        "tema-escuro",
        "tema-azul"
    );

    document.body.classList.add(
        "tema-" + temaSelect.value
    );

    registrarAcao("Tema alterado");
});

fonteRange.addEventListener("input", () => {

    biografiaPerfil.style.fontSize =
        fonteRange.value + "px";

    valorFonte.textContent =
        fonteRange.value + "px";

    registrarAcao(
        "Tamanho da fonte alterado"
    );
});

mostrarBio.addEventListener("change", () => {

    if (mostrarBio.checked) {

        biografiaPerfil.style.display =
            "block";

    } else {

        biografiaPerfil.style.display =
            "none";
    }

    registrarAcao(
        "Visibilidade da biografia alterada"
    );
});

btnAtualizarContato.addEventListener("click", () => {

    emailExibido.textContent =
        "E-mail: " + emailInput.value;

    telefoneExibido.textContent =
        "Telefone: " + telefoneInput.value;

    registrarAcao(
        "Contato atualizado"
    );
});