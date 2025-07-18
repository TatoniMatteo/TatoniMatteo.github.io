function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Funzione per animare in sequenza
async function animateSequentially(elements) {
    for (const el of elements) {
        const speed = parseInt(el.dataset.typewriter, 10) || 100;
        el.classList.remove('invisible');
        const text = el.textContent;
        await typeWriter(el, text, speed);
    }
}

// Setup
window.addEventListener('DOMContentLoaded', () => {
    const allTargets = Array.from(document.querySelectorAll('[data-typewriter]'));

    // nascondi tutti
    allTargets.forEach(el => el.classList.add('invisible'));

    async function handleScroll() {
        const visibleTargets = allTargets.filter(
            el => el.classList.contains('invisible') && isInViewport(el) && el.dataset.processed !== "true"
        );
        for (const visible of visibleTargets) {
            visible.dataset.processed = "true";
        }

        if (visibleTargets.length > 0) {
            await animateSequentially(visibleTargets);
        }
    }

    // prima chiamata + scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    initParticles();
});
