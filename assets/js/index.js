document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.Top-img');
    let currentIndex = 0;

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const offset = currentIndex * -100;
        slider.style.transform = `translateX(${offset}%)`;
    }
    setInterval(autoSlide, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const slideImg = document.querySelector('.slide-img');
    let currentPosition = 0;
    let isHovered = false;

    function slideAnimation() {
        if (!isHovered) {
            currentPosition -= 500;
            if (currentPosition <= -slideImg.scrollWidth) {
                currentPosition = 0; // リセット
            }
            slideImg.style.transform = `translateX(${currentPosition}px)`;
        }
    }

    setInterval(slideAnimation, 4000);

    slideImg.addEventListener('mouseover', () => {
        isHovered = true;
    });

    slideImg.addEventListener('mouseout', () => {
        isHovered = false;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const footerImgs = document.querySelectorAll('.Footer-imgs img');
    let currentIndex = 0;

    function showNextImage() {
        // 現在の画像を非アクティブにする
        footerImgs[currentIndex].classList.remove('active');

        // 次の画像を計算
        currentIndex = (currentIndex + 1) % footerImgs.length;

        // 次の画像をアクティブにする
        footerImgs[currentIndex].classList.add('active');
    }

    // 最初の画像をアクティブにする
    footerImgs[currentIndex].classList.add('active');

    // 画像切り替えのインターバルを少し長くして、より落ち着いた切り替えに
    setInterval(showNextImage, 4000); // 4秒ごとに切り替え
});






