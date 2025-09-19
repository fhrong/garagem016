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
    galleryBg.style.opacity = 0;
    setTimeout(() => {
        galleryBg.style.backgroundImage = `url('${images[index]}')`;
        galleryBg.style.opacity = 1;
    }, 300);
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
        btn.blur();
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
