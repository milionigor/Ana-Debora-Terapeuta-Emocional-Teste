document.addEventListener("DOMContentLoaded", function () {
  // 1. INICIALIZA AS ANIMAÇÕES (Essencial para o site não ficar branco)
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  });

  // 2. MENU MOBILE
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Troca ícone
      const icon = menuToggle.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Fecha menu ao clicar em link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      if (menuToggle) {
        menuToggle.querySelector("i").classList.remove("fa-times");
        menuToggle.querySelector("i").classList.add("fa-bars");
      }
    });
  });

  console.log("Site Ana Débora TRG - Carregado 100% e Responsivo");
});
