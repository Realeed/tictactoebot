addEventListener('DOMContentLoaded', () => {
    document.body.style.userSelect = 'none';
    document.body.style.backgroundImage = 'url(tic.jpg)';
    document.body.style.backgroundSize = '100%';
    document.body.style.overflow = 'hidden';
    let icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = 'icon.png';
    document.head.append(icon);
    document.title = 'Tic-Tac-Toe';
    document.getElementsByTagName('table')[1].style.display = 'none';
    for (let i = 0; i < 3; i++) {
        let button = document.getElementsByTagName('button')[i];
        if (window.matchMedia('(max-width: 1600px)').matches) {
            button.style.color = 'black';
            button.style.outline = 'none';
            button.style.fontSize = '30px';
            button.style.height = '40px'
            button.style.margin = '8px';
            button.style.cursor = 'pointer';
        }
        if (window.matchMedia('(min-width: 1601px)').matches) {
            button.style.color = 'black';
            button.style.outline = 'none';
            button.style.fontSize = '40px';
            button.style.height = '50px'
            button.style.margin = '10px';
            button.style.cursor = 'pointer';
            }
    }
})