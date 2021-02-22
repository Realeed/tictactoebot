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
    let table = document.getElementsByTagName('table');
    table[1].style.display = 'none';
    let button = document.getElementsByTagName('button');
    for (let i = 0; i < 3; i++) {
        button[i].style.color = 'black';
        button[i].style.cursor = 'pointer';
        if (window.matchMedia('(max-width: 1600px)').matches) {
            button[i].style.fontSize = '27px';
            button[i].style.height = '40px'
            button[i].style.margin = '8px';
        }
        if (window.matchMedia('(min-width: 1601px)').matches) {
            button[i].style.fontSize = '35px';
            button[i].style.height = '50px';
            button[i].style.margin = '10px';
        }
    }
    button[0].onclick = () => {
        table[0].style.display = 'none';
        table[1].style.display = 'block';
        table[1].style.margin = 'auto';
        table[1].style.width = '18%';
    }
    button[1].onclick = () => {
        for (let i = 0; i < 3; i++) {
            button[i].style.display = 'none';
        }
        let volume = document.createElement('button');
        volume.innerHTML = 'Volume: ON';
        volume.style.color = 'black';
        volume.style.cursor = 'pointer';
        if (window.matchMedia('(max-width: 1600px)').matches) {
            volume.style.fontSize = '27px';
            volume.style.height = '40px'
            volume.style.margin = '8px';
        }
        if (window.matchMedia('(min-width: 1601px)').matches) {
            volume.style.fontSize = '35px';
            volume.style.height = '50px';
            volume.style.margin = '10px';
        }
        document.body.table.appendChild(volume)
    }  
})