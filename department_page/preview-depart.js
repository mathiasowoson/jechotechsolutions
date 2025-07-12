
const scrollGallery = document.getElementById('scrollGallery');

let isDragging = false;
let startX, scrollLeft;
let autoScrollInterval;
let autoScrollSpeed = 1; 

function startAutoScroll() {
    stopAutoScroll() // to prevent multiple interver

    autoScrollInterval = setInterval(() => {
        scrollGallery.scrollLeft += autoScrollSpeed;
        // loop when reaching end
        if (scrollGallery.scrollLeft + scrollGallery.clientWidth >= scrollGallery.scrollWidth) {
            scrollGallery.scrollLeft = 0;
        }
    }, 20);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}
// mouse drag to scroll
scrollGallery.addEventListener('mousedown', (e) => {
    isDragging = true;
    scrollGallery.classList.add('active');
    startX = e.pageX - scrollGallery.offsetLeft;
    scrollLeft = scrollGallery.scrollLeft;
    stopAutoScroll();
});

scrollGallery.addEventListener('mouseleave', () => {
    if (isDragging) startAutoScroll();
    isDragging = false;

    scrollGallery.classList.remove('active');
});

scrollGallery.addEventListener('mouseup', ()=> {
    isDragging = false;

    scrollGallery.classList.remove('active');
    startAutoScroll();
});

scrollGallery.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollGallery.offsetLeft;
    const walk = (x - startX) * 2;
    scrollGallery.scrollLeft = scrollLeft - walk;
});

// touch event (for mobile)
scrollGallery.addEventListener('touchstart', () => stopAutoScroll());
scrollGallery.addEventListener('touchend', () => startAutoScroll());
//  hover to pause
scrollGallery.addEventListener('mouseenter', () => stopAutoScroll());
scrollGallery.addEventListener('mouseleave', () => startAutoScroll());

// start autoscroll on load
window.addEventListener('load', startAutoScroll);