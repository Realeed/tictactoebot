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
    table[1].style.visibility = 'hidden';
    let button = document.getElementsByTagName('button');
    let td = document.getElementsByTagName('td')
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
    let beginner = document.createElement('button');
    let medium = document.createElement('button');
    let pro = document.createElement('button');
    button[0].onclick = () => {
        for (let i = 0; i < 5; i++) {
            button[i].style.display = 'none';
        }
        beginner.innerHTML = 'Beginner';
        beginner.style.color = 'black';
        beginner.style.cursor = 'pointer';
        medium.innerHTML = 'Medium';
        medium.style.color = 'black';
        medium.style.cursor = 'pointer';  
        pro.innerHTML = 'Pro';
        pro.style.color = 'black';
        pro.style.cursor = 'pointer';  
        if (window.matchMedia('(max-width: 1600px)').matches) {
            beginner.style.fontSize = '27px';
            beginner.style.height = '40px'
            beginner.style.margin = '8px';
            medium.style.fontSize = '27px';
            medium.style.height = '40px'
            medium.style.margin = '8px';
            medium.style.marginTop = '8px';
            pro.style.fontSize = '27px';
            pro.style.height = '40px'
            pro.style.margin = '8px';
            pro.style.marginTop = '8px';
        }
        if (window.matchMedia('(min-width: 1601px)').matches) {
            beginner.style.fontSize = '35px';
            beginner.style.height = '50px';
            beginner.style.margin = '10px';
            beginner.style.marginTop = '0px'
            medium.style.fontSize = '35px';
            medium.style.height = '50px';
            medium.style.margin = '10px';
            medium.style.marginTop = '12px';
            pro.style.fontSize = '35px';
            pro.style.height = '50px';
            pro.style.margin = '10px';
            pro.style.marginTop = '12px';
        }
        td[0].append(beginner);
        td[1].append(medium);
        td[2].append(pro);
    }
    button[1].onclick = () => {
        for (let i = 0; i < 3; i++) {
            button[i].style.display = 'none';
        }
        let volume = document.createElement('button');
        volume.innerHTML = 'Volume: ON';
        volume.style.color = 'black';
        volume.style.cursor = 'pointer';        
        let ret = document.createElement('button');
        ret.innerHTML = 'Return';
        ret.style.color = 'black';
        ret.style.cursor = 'pointer';    
        if (window.matchMedia('(max-width: 1600px)').matches) {
            volume.style.fontSize = '27px';
            volume.style.height = '40px'
            volume.style.margin = '8px';
            ret.style.fontSize = '27px';
            ret.style.height = '40px'
            ret.style.margin = '8px';
            ret.style.marginTop = '8px';
        }
        if (window.matchMedia('(min-width: 1601px)').matches) {
            volume.style.fontSize = '35px';
            volume.style.height = '50px';
            volume.style.margin = '10px';
            volume.style.marginTop = '0px'
            ret.style.fontSize = '35px';
            ret.style.height = '50px';
            ret.style.margin = '10px';
            ret.style.marginTop = '12px';

        }
        td[0].append(volume);
        td[1].append(ret);
        volume.onclick = () => {
            if (volume.innerHTML == 'Volume: ON') {
                volume.innerHTML = 'Volume: OFF'
            }
            else {
                volume.innerHTML = 'Volume: ON'
            }
        }
        ret.onclick = () => {
            volume.style.display = 'none';
            ret.style.display = 'none';
            button[0].style.display = 'block';
            button[2].style.display = 'block';
            button[4].style.display = 'block';
        }
    }
    beginner.onclick = () => {
        for (let i = 6; i < 15; i++) {
            button[i].style.display = 'block'
        }
        table[0].style.display = 'none';
        table[1].style.visibility = 'visible';
        let pos = Math.floor(Math.random() * 10 + 6);
        let first = () => { 
            button[pos].innerHTML = 'X';
            button[pos].innerHTML = 'X';
            button[pos].style.fontSize = '50px';
            button[pos].style.textAlign = 'center';
            button[pos].style.color = 'black';
            button[pos].disabled = 'true';
            if (window.matchMedia('(max-width: 1600px)').matches) {
                button[pos].style.fontSize = '45px';
            }
        }
        setTimeout(first, 1000);
        for (let i = 6; i < 15; i++) {
            button[i].onclick = () => {
                button[i].innerHTML = 'O';
                button[i].style.fontSize = '50px';
                button[i].style.textAlign = 'center';
                button[i].style.color = 'black';
                for (let i = 6; i < 15; i++) {
                    button[i].style.disabled = 'true'
                }
                if (window.matchMedia('(max-width: 1600px)').matches) {
                    button[i].style.fontSize = '45px';
                }
            }
        }
    }
})