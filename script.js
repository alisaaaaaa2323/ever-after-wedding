// Плавное появление элементов при прокрутке

const elements = document.querySelectorAll(
    '.section .eyebrow, .section h2, .section p, .timeline div, .palette'
);

elements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(element => {
    observer.observe(element);
});
