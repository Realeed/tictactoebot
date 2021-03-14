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
    let score1 = 0;
    let score2 = 0;
    let score1st = document.getElementsByTagName('h2')[0];
    score1st.innerHTML = `1st Player: ${score1}`;
    score1st.style.display = 'none';
    let score2nd = document.getElementsByTagName('h2')[1];
    score2nd.innerHTML = `2nd Player: ${score2}`;
    score2nd.style.display = 'none';
    let table = document.getElementsByTagName('table');
    table[1].style.visibility = 'hidden';
    let button = document.getElementsByTagName('button');
    let td = document.getElementsByTagName('td');
    if (!localStorage.getItem('Volume')) {
        localStorage.setItem('Volume', 'ON')
    }
    let xSound = new Audio('Xclicksound.mp3');
    let oSound = new Audio('Oclicksound.mp3');
    let onePlayer = document.createElement('button');
    let twoPlayer = document.createElement('button');
    let beginner = document.createElement('button');
    let medium = document.createElement('button');
    let pro = document.createElement('button');
    let winner = document.createElement('h1');
    winner.style.textAlign = 'center';
    winner.style.backgroundColor = 'rgb(237, 237, 237)';
    winner.style.backgroundSize = '100%';
    winner.style.color = 'gray';
    winner.style.fontSize = '80px';
    let replay = document.createElement('button');
    replay.innerHTML = 'Rematch';
    replay.style.textAlign = 'center';
    replay.style.color = 'gray';
    replay.style.fontSize = '80px';
    replay.style.cursor = 'pointer';
    let replaytwo = document.createElement('button');
    replaytwo.innerHTML = 'Rematch';
    replaytwo.style.textAlign = 'center';
    replaytwo.style.color = 'gray';
    replaytwo.style.fontSize = '80px';
    replaytwo.style.cursor = 'pointer';
    replay.onclick = () => {
        for (let i = 10; i < 19; i++) {
            button[i].innerHTML = ''
            button[i].disabled = true
        }
        winner.innerHTML = '';
        winner.style.display = 'none';
        replay.style.display = 'none';
        bStart()
    }
    replaytwo.onclick = () => {
        for (let i = 7; i < 16; i++) {
            button[i].innerHTML = ''
            button[i].disabled = false
        }
        winner.innerHTML = '';
        winner.style.display = 'none';
        replaytwo.style.display = 'none';
        twoStart()
    }
    if (window.matchMedia('(max-width: 1600px)').matches) {
        winner.style.fontSize = '60px';
        replay.style.fontSize = '60px';
        replaytwo.style.fontSize = '60px'
    }
    onePlayer.innerHTML = '1 player';
    onePlayer.style.color = 'black';
    onePlayer.style.cursor = 'pointer';
    twoPlayer.innerHTML = '2 players';
    twoPlayer.style.color = 'black';
    twoPlayer.style.cursor = 'pointer';
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
        onePlayer.style.fontSize = '27px';
        onePlayer.style.height = '40px'
        onePlayer.style.margin = '8px';
        twoPlayer.style.fontSize = '27px';
        twoPlayer.style.height = '40px'
        twoPlayer.style.margin = '8px';
        twoPlayer.style.marginTop = '8px';
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
        onePlayer.style.fontSize = '35px';
        onePlayer.style.height = '50px';
        onePlayer.style.margin = '10px';
        onePlayer.style.marginTop = '0px';
        twoPlayer.style.fontSize = '35px';
        twoPlayer.style.height = '50px';
        twoPlayer.style.margin = '10px';
        twoPlayer.style.marginTop = '12px';
        beginner.style.fontSize = '35px';
        beginner.style.height = '50px';
        beginner.style.margin = '10px';
        beginner.style.marginTop = '0px';
        medium.style.fontSize = '35px';
        medium.style.height = '50px';
        medium.style.margin = '10px';
        medium.style.marginTop = '12px';
        pro.style.fontSize = '35px';
        pro.style.height = '50px';
        pro.style.margin = '10px';
        pro.style.marginTop = '12px';
    }
    button[0].onclick = () => {
        for (let i = 0; i < 5; i++) {
            button[i].style.display = 'none';
        }
        td[0].append(onePlayer);
        td[1].append(twoPlayer);
        onePlayer.onclick = () => {
            onePlayer.style.display = 'none';
            twoPlayer.style.display = 'none';
            td[0].append(beginner);
            td[1].append(medium);
            td[2].append(pro);
        }

    }
    beginner.onclick = () => {
        bStart()
    }
    twoPlayer.onclick = () => {
        twoStart()
    }
    let win = player => {
        for (let i = 10; i < 19; i++) {
            button[i].disabled = 'true';
        }      
        winner.innerHTML = `${player} player won!`;
        winner.style.display = 'block';
        replay.style.display = 'block';
        document.body.append(winner);
        document.body.append(replay);
        if (player == 'First') {
            score1++
            score1st.innerHTML = `1st Player: ${score1}`;
        } else if (player == 'Second') {
            score2++
            score2nd.innerHTML = `2nd Player: ${score2}`;
        }
    }
    let wintwo = player => {
        for (let i = 7; i < 16; i++) {
            button[i].disabled = 'true';
        }      
        winner.innerHTML = `${player} player won!`;
        winner.style.display = 'block';
        replay.style.display = 'block';
        document.body.append(winner);
        document.body.append(replaytwo);
        if (player == 'First') {
            score1++
            score1st.innerHTML = `1st Player: ${score1}`;
        } else if (player == 'Second') {
            score2++
            score2nd.innerHTML = `2nd Player: ${score2}`;
        }
    }
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
    let volume = document.createElement('button');
        volume.innerHTML = `Volume: ${localStorage.getItem('Volume')}`
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
        volume.style.display = 'none';
        ret.style.display = 'none';
        td[0].append(volume);
        td[1].append(ret);
        volume.onclick = () => {
            if (localStorage.getItem('Volume') == 'ON') {
                localStorage.setItem('Volume', 'OFF')
            }
            else {
                localStorage.setItem('Volume', 'ON')
            }
            volume.innerHTML = `Volume: ${localStorage.getItem('Volume')}`
        }
        ret.onclick = () => {
            volume.style.display = 'none';
            ret.style.display = 'none';
            button[0].style.display = 'block';
            button[2].style.display = 'block';
            button[4].style.display = 'block';
        }
    button[2].onclick = () => {
        for (let i = 0; i < 5; i++) {
            button[i].style.display = 'none';
        }
        volume.style.display = 'block';
        ret.style.display = 'block';
    }
    const bStart = () => {
        score1st.style.display = 'block';
        score2nd.style.display = 'block';
        let rand = () => {
            return Math.floor(Math.random() * 9 + 10);         
        }
        let pos1x = rand();
        for (let i = 10; i < 19; i++) {
            button[i].style.display = 'block';
            button[i].disabled = true;
        }
        table[0].style.display = 'none';
        table[1].style.visibility = 'visible';
        let first = () => {
            if (localStorage.getItem('Volume') == 'ON') {
                xSound.play()
            }
            button[pos1x].innerHTML = 'X';
            button[pos1x].style.fontSize = '50px';
            button[pos1x].style.textAlign = 'center';
            button[pos1x].style.color = 'black';            
            if (window.matchMedia('(max-width: 1600px)').matches) {
                button[pos1x].style.fontSize = '45px';
            }
            for (let i = 10; i < 19; i++) {
                if (i != pos1x) {
                    button[i].disabled = false
                }
            }
        }
        setTimeout(first, 1000);
        for (let pos1o = 10; pos1o < 19; pos1o++) {
            button[pos1o].onclick = () => {
                if (localStorage.getItem('Volume') == 'ON') {
                    oSound.play()
                }
                button[pos1o].innerHTML = 'O';
                button[pos1o].style.fontSize = '50px';
                button[pos1o].style.textAlign = 'center';
                button[pos1o].style.color = 'black';
                if (window.matchMedia('(max-width: 1600px)').matches) {
                    button[pos1o].style.fontSize = '45px';
                }
                for (let i = 10; i < 19; i++) {
                    button[i].disabled = true
                }
                let second = () => {
                    let pos2x = rand();
                    while (pos2x == pos1x || pos2x == pos1o) {
                        pos2x = rand()
                    }
                    if (localStorage.getItem('Volume') == 'ON') {
                        xSound.play()
                    }
                    button[pos2x].innerHTML = 'X';
                    button[pos2x].style.fontSize = '50px';
                    button[pos2x].style.textAlign = 'center';
                    button[pos2x].style.color = 'black';           
                    if (window.matchMedia('(max-width: 1600px)').matches) {
                        button[pos2x].style.fontSize = '45px';
                    }
                    for (let i = 10; i < 19; i++) {
                        if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                            button[i].disabled = false;
                        }                   
                    }
                    for (let pos2o = 10; pos2o < 19; pos2o++) {
                        button[pos2o].onclick = () => {
                            if (localStorage.getItem('Volume') == 'ON') {
                                oSound.play()
                            }
                            button[pos2o].innerHTML = 'O';
                            button[pos2o].style.fontSize = '50px';
                            button[pos2o].style.textAlign = 'center';
                            button[pos2o].style.color = 'black';
                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                button[pos2o].style.fontSize = '45px';
                            }
                            for (let i = 10; i < 19; i++) {
                                button[i].disabled = true;
                            }
                            let third = () => {
                                let pos3x = rand();
                                while (pos3x == pos1x || pos3x == pos1o || pos3x == pos2x || pos3x == pos2o) {
                                    pos3x = rand()
                                }
                                if (localStorage.getItem('Volume') == 'ON') {
                                    xSound.play()
                                }
                                button[pos3x].innerHTML = 'X';
                                button[pos3x].style.fontSize = '50px';
                                button[pos3x].style.textAlign = 'center';
                                button[pos3x].style.color = 'black';           
                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                    button[pos3x].style.fontSize = '45px';
                                }
                                for (let i = 10; i < 19; i++) {
                                    if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                                        button[i].disabled = false;
                                    }                   
                                }
                                            if (button[10].innerHTML == button[11].innerHTML && button[11].innerHTML == button[12].innerHTML && button[10].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[10].innerHTML == button[13].innerHTML && button[13].innerHTML == button[16].innerHTML && button[10].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[10].innerHTML == button[14].innerHTML && button[14].innerHTML == button[18].innerHTML && button[10].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[12].innerHTML == button[15].innerHTML && button[15].innerHTML == button[18].innerHTML && button[12].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[12].innerHTML == button[14].innerHTML && button[14].innerHTML == button[16].innerHTML && button[12].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[13].innerHTML == button[14].innerHTML && button[14].innerHTML == button[15].innerHTML && button[13].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[16].innerHTML == button[17].innerHTML && button[17].innerHTML == button[18].innerHTML && button[16].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[11].innerHTML == button[14].innerHTML && button[14].innerHTML == button[17].innerHTML && button[11].innerHTML != '') {
                                                win('First');
                                            }
                                for (let pos3o = 10; pos3o < 19; pos3o++) {
                                    button[pos3o].onclick = () => {
                                        if (localStorage.getItem('Volume') == 'ON') {
                                            oSound.play()
                                        }
                                        button[pos3o].innerHTML = 'O';
                                        button[pos3o].style.fontSize = '50px';
                                        button[pos3o].style.textAlign = 'center';
                                        button[pos3o].style.color = 'black';
                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                            button[pos3o].style.fontSize = '45px';
                                        }
                                        for (let i = 10; i < 19; i++) {
                                            button[i].disabled = true;
                                        }
                                        if (button[10].innerHTML == button[11].innerHTML && button[11].innerHTML == button[12].innerHTML && button[10].innerHTML != '') {
                                            win('Second');
                                        }
                                        if (button[10].innerHTML == button[13].innerHTML && button[13].innerHTML == button[16].innerHTML && button[10].innerHTML != '') {
                                            win('Second');
                                        }
                                        if (button[10].innerHTML == button[14].innerHTML && button[14].innerHTML == button[18].innerHTML && button[10].innerHTML != '') {
                                            win('Second');
                                        }
                                        if (button[12].innerHTML == button[15].innerHTML && button[15].innerHTML == button[18].innerHTML && button[12].innerHTML != '') {
                                            win('Second');
                                        }
                                        if (button[12].innerHTML == button[14].innerHTML && button[14].innerHTML == button[16].innerHTML && button[12].innerHTML != '') {
                                            win('Second');
                                        }
                                        if (button[13].innerHTML == button[14].innerHTML && button[14].innerHTML == button[15].innerHTML && button[13].innerHTML != '') {
                                            win('Second');
                                        }
                                        if (button[16].innerHTML == button[17].innerHTML && button[17].innerHTML == button[18].innerHTML && button[16].innerHTML != '') {
                                            win('Second');
                                        }
                                        if (button[11].innerHTML == button[14].innerHTML && button[14].innerHTML == button[17].innerHTML && button[11].innerHTML != '') {
                                            win('Second');
                                        }
                                        let fourth = () => {
                                            let pos4x = rand();
                                            while (pos4x == pos1x || pos4x == pos1o || pos4x == pos2x || pos4x == pos2o || pos4x == pos3x || pos4x == pos3o) {
                                                pos4x = rand()
                                            }
                                            if (localStorage.getItem('Volume') == 'ON') {
                                                xSound.play()
                                            }
                                            button[pos4x].innerHTML = 'X';
                                            button[pos4x].style.fontSize = '50px';
                                            button[pos4x].style.textAlign = 'center';
                                            button[pos4x].style.color = 'black';           
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                button[pos4x].style.fontSize = '45px';
                                            }
                                            for (let i = 10; i < 19; i++) {
                                                if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                                                    button[i].disabled = false;
                                                }                   
                                            }
                                            if (button[10].innerHTML == button[11].innerHTML && button[11].innerHTML == button[12].innerHTML && button[10].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[10].innerHTML == button[13].innerHTML && button[13].innerHTML == button[16].innerHTML && button[10].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[10].innerHTML == button[14].innerHTML && button[14].innerHTML == button[18].innerHTML && button[10].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[12].innerHTML == button[15].innerHTML && button[15].innerHTML == button[18].innerHTML && button[12].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[12].innerHTML == button[14].innerHTML && button[14].innerHTML == button[16].innerHTML && button[12].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[13].innerHTML == button[14].innerHTML && button[14].innerHTML == button[15].innerHTML && button[13].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[16].innerHTML == button[17].innerHTML && button[17].innerHTML == button[18].innerHTML && button[16].innerHTML != '') {
                                                win('First');
                                            }
                                            if (button[11].innerHTML == button[14].innerHTML && button[14].innerHTML == button[17].innerHTML && button[11].innerHTML != '') {
                                                win('First');
                                            }
                                            for (let pos4o = 10; pos4o < 19; pos4o++) {
                                                button[pos4o].onclick = () => {
                                                    if (localStorage.getItem('Volume') == 'ON') {
                                                        oSound.play()
                                                    }
                                                    button[pos4o].innerHTML = 'O';
                                                    button[pos4o].style.fontSize = '50px';
                                                    button[pos4o].style.textAlign = 'center';
                                                    button[pos4o].style.color = 'black';
                                                    if (window.matchMedia('(max-width: 1600px)').matches) {
                                                        button[pos4o].style.fontSize = '45px';
                                                    }
                                                    for (let i = 10; i < 19; i++) {
                                                        button[i].disabled = true;
                                                    }
                                                    if (button[10].innerHTML == button[11].innerHTML && button[11].innerHTML == button[12].innerHTML && button[10].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    if (button[10].innerHTML == button[13].innerHTML && button[13].innerHTML == button[16].innerHTML && button[10].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    if (button[10].innerHTML == button[14].innerHTML && button[14].innerHTML == button[18].innerHTML && button[10].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    if (button[12].innerHTML == button[15].innerHTML && button[15].innerHTML == button[18].innerHTML && button[12].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    if (button[12].innerHTML == button[14].innerHTML && button[14].innerHTML == button[16].innerHTML && button[12].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    if (button[13].innerHTML == button[14].innerHTML && button[14].innerHTML == button[15].innerHTML && button[13].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    if (button[16].innerHTML == button[17].innerHTML && button[17].innerHTML == button[18].innerHTML && button[16].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    if (button[11].innerHTML == button[14].innerHTML && button[14].innerHTML == button[17].innerHTML && button[11].innerHTML != '') {
                                                        win('Second');
                                                    }
                                                    let fifth = () => {
                                                        let pos5x = rand();
                                                        while (pos5x == pos1x || pos5x == pos1o || pos5x == pos2x || pos5x == pos2o || pos5x == pos3x || pos5x == pos3o || pos5x == pos4x || pos5x == pos4o) {
                                                            pos5x = rand()
                                                        }
                                                        if (localStorage.getItem('Volume') == 'ON') {
                                                            xSound.play()
                                                        }
                                                        button[pos5x].innerHTML = 'X';
                                                        button[pos5x].style.fontSize = '50px';
                                                        button[pos5x].style.textAlign = 'center';
                                                        button[pos5x].style.color = 'black';           
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            button[pos5x].style.fontSize = '45px';
                                                        }
                                                        for (let i = 10; i < 19; i++) {
                                                            if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                                                                button[i].disabled = false;
                                                            }                   
                                                        }
                                                        if (button[10].innerHTML == button[11].innerHTML && button[11].innerHTML == button[12].innerHTML && button[10].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (button[10].innerHTML == button[13].innerHTML && button[13].innerHTML == button[16].innerHTML && button[10].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (button[10].innerHTML == button[14].innerHTML && button[14].innerHTML == button[18].innerHTML && button[10].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (button[12].innerHTML == button[15].innerHTML && button[15].innerHTML == button[18].innerHTML && button[12].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (button[12].innerHTML == button[14].innerHTML && button[14].innerHTML == button[16].innerHTML && button[12].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (button[13].innerHTML == button[14].innerHTML && button[14].innerHTML == button[15].innerHTML && button[13].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (button[16].innerHTML == button[17].innerHTML && button[17].innerHTML == button[18].innerHTML && button[16].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (button[11].innerHTML == button[14].innerHTML && button[14].innerHTML == button[17].innerHTML && button[11].innerHTML != '') {
                                                            win('First');
                                                        }
                                                        if (winner.innerHTML == '') {
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'It was a draw!'
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            replay.onclick = () => {
                                                                for (let i = 10; i < 19; i++) {
                                                                    button[i].innerHTML = ''
                                                                    button[i].disabled = true
                                                                }
                                                                winner.innerHTML = '';
                                                                winner.style.display = 'none';
                                                                replay.style.display = 'none';
                                                                bStart()
                                                            }
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            document.body.append(winner);
                                                            document.body.append(replay)
                                                        }
                                                    }
                                                    if (!(winner.innerHTML == 'Second player won!')) {
                                                        setTimeout(fifth, 1000)
                                                    } 
                                                }
                                            }
                                        }
                                        if (!(winner.innerHTML == 'Second player won!')) {
                                            setTimeout(fourth, 1000)  
                                        } 
                                    }
                                }
                            }
                            setTimeout(third, 1000)
                        }
                    }
                }
                setTimeout(second, 1000)
            }
        }
    }
    const twoStart = () => {
        score1st.style.display = 'block';
        score2nd.style.display = 'block';
        for (let i = 7; i < 16; i++) {
            button[i].style.display = 'block';
        }
        table[0].style.display = 'none';
        table[1].style.visibility = 'visible';
        for (let pos1x = 7; pos1x < 16; pos1x++) {
            button[pos1x].onclick = () => {
                if (localStorage.getItem('Volume') == 'ON') {
                    xSound.play()
                }
                button[pos1x].innerHTML = 'X';
                button[pos1x].style.fontSize = '50px';
                button[pos1x].style.textAlign = 'center';
                button[pos1x].style.color = 'black';
                if (window.matchMedia('(max-width: 1600px)').matches) {
                    button[pos1x].style.fontSize = '45px';
                }
                button[pos1x].disabled = true;
                for (let pos1o = 7; pos1o < 16; pos1o++) {
                    button[pos1o].onclick = () => {
                        if (localStorage.getItem('Volume') == 'ON') {
                            oSound.play()
                        }
                        button[pos1o].innerHTML = 'O';
                        button[pos1o].style.fontSize = '50px';
                        button[pos1o].style.textAlign = 'center';
                        button[pos1o].style.color = 'black';
                        if (window.matchMedia('(max-width: 1600px)').matches) {
                            button[pos1o].style.fontSize = '45px';
                        }
                        button[pos1o].disabled = true;
                        for (let pos2x = 7; pos2x < 16; pos2x++) {
                            button[pos2x].onclick = () => {
                                if (localStorage.getItem('Volume') == 'ON') {
                                    xSound.play()
                                }
                                button[pos2x].innerHTML = 'X';
                                button[pos2x].style.fontSize = '50px';
                                button[pos2x].style.textAlign = 'center';
                                button[pos2x].style.color = 'black';
                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                    button[pos2x].style.fontSize = '45px';
                                }
                                button[pos2x].disabled = true;
                                for (let pos2o = 7; pos2o < 16; pos2o++) {
                                    button[pos2o].onclick = () => {
                                        if (localStorage.getItem('Volume') == 'ON') {
                                            oSound.play()
                                        }
                                        button[pos2o].innerHTML = 'O';
                                        button[pos2o].style.fontSize = '50px';
                                        button[pos2o].style.textAlign = 'center';
                                        button[pos2o].style.color = 'black';
                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                            button[pos2o].style.fontSize = '45px';
                                        }
                                        button[pos2o].disabled = true;
                                        for (let pos3x = 7; pos3x < 16; pos3x++) {
                                            button[pos3x].onclick = () => {
                                                if (localStorage.getItem('Volume') == 'ON') {
                                                    xSound.play()
                                                }
                                                button[pos3x].innerHTML = 'X';
                                                button[pos3x].style.fontSize = '50px';
                                                button[pos3x].style.textAlign = 'center';
                                                button[pos3x].style.color = 'black';
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    button[pos3x].style.fontSize = '45px';
                                                }
                                                button[pos3x].disabled = true;
                                                if (button[7].innerHTML == button[8].innerHTML && button[8].innerHTML == button[9].innerHTML && button[7].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                                if (button[7].innerHTML == button[10].innerHTML && button[10].innerHTML == button[13].innerHTML && button[7].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                                if (button[7].innerHTML == button[11].innerHTML && button[11].innerHTML == button[15].innerHTML && button[7].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                                if (button[9].innerHTML == button[12].innerHTML && button[12].innerHTML == button[15].innerHTML && button[9].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                                if (button[9].innerHTML == button[11].innerHTML && button[11].innerHTML == button[13].innerHTML && button[9].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                                if (button[10].innerHTML == button[11].innerHTML && button[11].innerHTML == button[12].innerHTML && button[10].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                                if (button[13].innerHTML == button[14].innerHTML && button[14].innerHTML == button[15].innerHTML && button[13].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                                if (button[8].innerHTML == button[11].innerHTML && button[11].innerHTML == button[14].innerHTML && button[8].innerHTML != '') {
                                                    wintwo('First');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
})