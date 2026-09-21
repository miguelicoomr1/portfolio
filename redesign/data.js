window.PORTFOLIO = {
  projects: [
    { name: "Mosco Events", url: "https://www.moscoevents.com/index.html", logo: "../assets/logos/moscoevents.png",
      description: "Web para una organización de partidas de airsoft realistas. Los jugadores se inscriben, consultan las imágenes de los eventos y contactan con el propietario.",
      tags: ["Inscripciones", "Galería de imágenes", "Contacto"] },
    { name: "Supremo Barber", url: "https://supremo-1uh.pages.dev", logo: "../assets/logos/supremo.png",
      description: "Web para una barbería de ciudad, con sistema de registro de citas y una zona privada desde la que el negocio administra su agenda.",
      tags: ["Reserva de citas", "Zona privada", "Administración"] },
    { name: "Los Tres Pacos", url: "https://los-tres-pacos.pages.dev/", logo: "https://los-tres-pacos.pages.dev/assets/img/icon-192.png",
      description: "Web para un café-bar de Portmán, con carta, galería, información de contacto y un formulario para solicitar reserva de mesa.",
      tags: ["Carta", "Reservas", "Galería"] },
    { name: "CLIMATSOL", url: "https://miguelicoomr1.github.io/Jefa-Casau/", logo: "https://miguelicoomr1.github.io/Jefa-Casau/assets/logo/apple-touch-icon.png",
      description: "Web para una empresa de climatización en Murcia, con catálogo de servicios, solicitud de presupuestos y una galería ilustrativa de equipos e instalaciones.",
      tags: ["Catálogo", "Presupuestos", "Galería"] },
    { name: "La Rusticana", url: "https://miguelicoomr1.github.io/rusticana/es/", logo: "https://miguelicoomr1.github.io/rusticana/apple-touch-icon.png",
      description: "Web multilingüe para un restaurante familiar de Atamaría (Cartagena), con carta, galería de imágenes, información de contacto y reserva de mesa.",
      tags: ["Carta", "Reservas", "Multilingüe"] }
  ],
  contact: [
    { label: "Email", value: "miguel26mra@gmail.com", href: "mailto:miguel26mra@gmail.com" },
    { label: "Instagram", value: "@miguelicoomr1", href: "https://instagram.com/miguelicoomr1", ext: true },
    { label: "WhatsApp", value: "+34 676 30 83 56", href: "https://wa.me/34676308356", ext: true }
  ],
  host(p) { return new URL(p.url).hostname; },
  // Carga la vista previa; si falla, el marco conserva su fondo y el nombre del dominio.
  shot(el, p) {
    const img = new Image();
    img.alt = "Vista previa de " + p.name;
    img.onload = () => el.insertBefore(img, el.firstChild);
    img.src = "https://image.thum.io/get/width/1400/crop/875/" + p.url;
  },
  logo(img, p) { img.src = p.logo; img.alt = ""; img.onerror = () => img.remove(); },
  reveal(sel) {
    const els = document.querySelectorAll(sel);
    if (!("IntersectionObserver" in window)) return els.forEach(e => e.classList.add("in"));
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .2 });
    els.forEach(e => io.observe(e));
  }
};
