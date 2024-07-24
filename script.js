document.addEventListener('DOMContentLoaded', (event) => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        setTimeout(() => {
            shape.style.animation = `move${index + 1} 10s linear infinite`;
        }, index * 1000);
    });
});

const createKeyframes = () => {
    let styleSheet = document.styleSheets[0];
    for (let i = 1; i <= 4; i++) {
        let keyframes = `
        @keyframes move${i} {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * 500}px, ${Math.random() * 500}px); }
            50% { transform: translate(${Math.random() * 500}px, ${Math.random() * 500}px); }
            75% { transform: translate(${Math.random() * 500}px, ${Math.random() * 500}px); }
            100% { transform: translate(0, 0); }
        }`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
}

createKeyframes();
