const gallerySection = document.querySelector('#gallery');
const galleryBg = gallerySection.querySelector('.gallery-bg');
let currentIndex = 0;
let intervalId;

function setBg(index) {
    galleryBg.classList.remove("fade-in");
    void galleryBg.offsetWidth;
    galleryBg.style.backgroundImage = `url('${images[index]}')`;
    galleryBg.classList.add("fade-in");

    const indicators = gallerySection.querySelectorAll('.carousel-indicators button');
    indicators.forEach((btn, i) => {
        console.log(`btn ${i}: was ${btn.classList.contains('active')}, should be ${i === index}`);
        btn.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

gallerySection.querySelectorAll('.carousel-indicators button').forEach((btn, i) => {
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
