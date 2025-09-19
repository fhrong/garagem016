const images = [
    "/assets/imagens/oficina-automotiva-ribeirao-preto-vista-45graus.webp",
    "/assets/imagens/oficina-fachada-exterior-ribeirao-preto.webp",
    "/assets/imagens/oficina-interior-ribeirao-preto-servicos.webp",
    "/assets/imagens/mecanica-oficina-ribeirao-preto.webp"
];

const galleryBg = document.querySelector('.gallery-bg');
const indicators = document.querySelectorAll('.carousel-indicators button');
let currentIndex = 0;
let intervalId;

function setBg(index) {
    galleryBg.classList.remove("fade-in");
    void galleryBg.offsetWidth;
    galleryBg.style.backgroundImage = `url('${images[index]}')`;
    galleryBg.classList.add("fade-in");

    indicators.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

indicators.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        clearInterval(intervalId);
        setBg(i);
        startAuto();
    });
});

function startAuto() {
    intervalId = setInterval(() => {
        let idx = (currentIndex + 1) % images.length;
        setBg(idx);
    }, 5000);
}

setBg(0);
startAuto();