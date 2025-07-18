function initParticles() {
    const getCSSVar = (name) =>
        getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const particlesConfig = {
        fpsLimit: 60,
        fullScreen: {
            enable: false
        },
        particles: {
            number: {value: 80, density: {enable: true, area: 800}},
            color: {value: getCSSVar('--primary') || '#ffffff'},
            shape: {type: "circle"},
            opacity: {value: 0.5},
            size: {value: 3, random: true},
            links: {
                enable: true,
                distance: 150,
                color: getCSSVar('--accent') || '#ffffff',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                outModes: {default: "bounce"}
            }
        },
        detectRetina: true
    };

    tsParticles.load("particles", particlesConfig);
}

// Rendi la funzione disponibile globalmente
window.initParticles = initParticles;
