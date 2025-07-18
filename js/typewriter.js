function typeWriter(element, text, speed = 100) {
    return new Promise(resolve => {
        element.textContent = '';
        let i = 0;

        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                resolve();
            }
        }

        typing();
    });
}