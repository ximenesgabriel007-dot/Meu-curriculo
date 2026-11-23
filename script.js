document.addEventListener("DOMContentLoaded", () => {
    const spanAno = document.getElementById("ano-atual");
    if (spanAno) {
        spanAno.textContent = new Date().getFullYear();

    const modalProjeto = document.getElementById("modalProjeto");
    const carrosselModalEl = document.getElementById("carrosselModalProjeto");

    if (modalProjeto && carrosselModalEl) {
        modalProjeto.addEventListener("show.bs.modal", (event) => {
            const cardClicado = event.relatedTarget;
            if (!cardClicado) return;

            const titulo = cardClicado.getAttribute("data-titulo");
            const periodo = cardClicado.getAttribute("data-periodo");
            const tecnologias = cardClicado.getAttribute("data-tecnologias");
            const descricao = cardClicado.getAttribute("data-descricao");
            const imagem = cardClicado.getAttribute("data-img");

            document.getElementById("modalProjetoTitulo").textContent = titulo;
            document.getElementById("modalProjetoPeriodo").textContent = periodo;
            document.getElementById("modalProjetoTech").textContent = tecnologias;
            document.getElementById("modalProjetoDescricao").textContent = descricao;
            document.getElementById("modalImgResumo").src = imagem;
            document.getElementById("modalImgAmpliada").src = imagem;

            const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carrosselModalEl);
            bsCarousel.to(0);
        });
    }
    }

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const menuCollapse = document.getElementById("navbarCurriculo");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menuCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(menuCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    const sections = document.querySelectorAll("section[id], footer[id]");

    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY + 120;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});