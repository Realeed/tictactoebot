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
        let rand = () => {
            return Math.floor(Math.random() * 9 + 6);         
        }
        let pos1x = rand();
        for (let i = 6; i < 15; i++) {
            button[i].style.display = 'block';
            button[i].disabled = true;
        }
        table[0].style.display = 'none';
        table[1].style.visibility = 'visible';
        let first = () => {
            button[pos1x].innerHTML = 'X';
            button[pos1x].style.fontSize = '50px';
            button[pos1x].style.textAlign = 'center';
            button[pos1x].style.color = 'black';            
            if (window.matchMedia('(max-width: 1600px)').matches) {
                button[pos1x].style.fontSize = '45px';
            }
            for (let i = 6; i < 15; i++) {
                if (i != pos1x) {
                    button[i].disabled = false
                }
            }
        }
        setTimeout(first, 1000);
        for (let pos1o = 6; pos1o < 15; pos1o++) {
            button[pos1o].onclick = () => {
                button[pos1o].innerHTML = 'O';
                button[pos1o].style.fontSize = '50px';
                button[pos1o].style.textAlign = 'center';
                button[pos1o].style.color = 'black';
                if (window.matchMedia('(max-width: 1600px)').matches) {
                    button[pos1o].style.fontSize = '45px';
                }
                for (let i = 6; i < 15; i++) {
                    button[i].disabled = true
                }
                let second = () => {
                    let pos2x = rand();
                    while (pos2x == pos1x || pos2x == pos1o) {
                        pos2x = rand()
                    }
                    button[pos2x].innerHTML = 'X';
                    button[pos2x].style.fontSize = '50px';
                    button[pos2x].style.textAlign = 'center';
                    button[pos2x].style.color = 'black';           
                    if (window.matchMedia('(max-width: 1600px)').matches) {
                        button[pos2x].style.fontSize = '45px';
                    }
                    for (let i = 6; i < 15; i++) {
                        if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                            button[i].disabled = false;
                        }                   
                    }
                    for (let pos2o = 6; pos2o < 15; pos2o++) {
                        button[pos2o].onclick = () => {
                            button[pos2o].innerHTML = 'O';
                            button[pos2o].style.fontSize = '50px';
                            button[pos2o].style.textAlign = 'center';
                            button[pos2o].style.color = 'black';
                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                button[pos2o].style.fontSize = '45px';
                            }
                            for (let i = 6; i < 15; i++) {
                                button[i].disabled = true;
                            }
                            let third = () => {
                                let pos3x = rand();
                                while (pos3x == pos1x || pos3x == pos1o || pos3x == pos2x || pos3x == pos2o) {
                                    pos3x = rand()
                                }
                                button[pos3x].innerHTML = 'X';
                                button[pos3x].style.fontSize = '50px';
                                button[pos3x].style.textAlign = 'center';
                                button[pos3x].style.color = 'black';           
                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                    button[pos3x].style.fontSize = '45px';
                                }
                                for (let i = 6; i < 15; i++) {
                                    if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                                        button[i].disabled = false;
                                    }                   
                                }
                                if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[6].innerHTML == button[9].innerHTML && button[9].innerHTML == button[12].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[6].innerHTML == button[10].innerHTML && button[10].innerHTML == button[14].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[8].innerHTML == button[11].innerHTML && button[11].innerHTML == button[14].innerHTML && button[8].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[8].innerHTML == button[10].innerHTML && button[10].innerHTML == button[12].innerHTML && button[8].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[9].innerHTML == button[10].innerHTML && button[10].innerHTML == button[11].innerHTML && button[9].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[12].innerHTML == button[13].innerHTML && button[13].innerHTML == button[14].innerHTML && button[12].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[7].innerHTML == button[10].innerHTML && button[10].innerHTML == button[13].innerHTML && button[7].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                for (let pos3o = 6; pos3o < 15; pos3o++) {
                                    button[pos3o].onclick = () => {
                                        button[pos3o].innerHTML = 'O';
                                        button[pos3o].style.fontSize = '50px';
                                        button[pos3o].style.textAlign = 'center';
                                        button[pos3o].style.color = 'black';
                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                            button[pos3o].style.fontSize = '45px';
                                        }
                                        for (let i = 6; i < 15; i++) {
                                            button[i].disabled = true;
                                        }
                                        if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        if (button[6].innerHTML == button[9].innerHTML && button[9].innerHTML == button[12].innerHTML && button[6].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        if (button[6].innerHTML == button[10].innerHTML && button[10].innerHTML == button[14].innerHTML && button[6].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        if (button[8].innerHTML == button[11].innerHTML && button[11].innerHTML == button[14].innerHTML && button[8].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        if (button[8].innerHTML == button[10].innerHTML && button[10].innerHTML == button[12].innerHTML && button[8].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        if (button[9].innerHTML == button[10].innerHTML && button[10].innerHTML == button[11].innerHTML && button[9].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        if (button[12].innerHTML == button[13].innerHTML && button[13].innerHTML == button[14].innerHTML && button[12].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        if (button[7].innerHTML == button[10].innerHTML && button[10].innerHTML == button[13].innerHTML && button[7].innerHTML != '') {
                                            for (let i = 6; i < 15; i++) {
                                                button[i].disabled = 'true';
                                            }
                                            let winner = document.createElement('h1');
                                            winner.innerHTML = 'First player won!';
                                            winner.style.textAlign = 'center';
                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                            winner.style.backgroundSize = '100%';
                                            winner.style.color = 'gray';
                                            winner.style.fontSize = '80px';
                                            document.body.append(winner);
                                            let replay = document.createElement('button');
                                            replay.innerHTML = 'Rematch';
                                            replay.style.textAlign = 'center';
                                            replay.style.color = 'gray';
                                            replay.style.fontSize = '80px';
                                            replay.style.cursor = 'pointer';
                                            document.body.append(replay);
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                winner.style.fontSize = '60px';
                                                replay.style.fontSize = '60px';
                                            }
                                            replay.onclick = () => {
                                                window.location.reload();
                                            }
                                        }
                                        let fourth = () => {
                                            let pos4x = rand();
                                            while (pos4x == pos1x || pos4x == pos1o || pos4x == pos2x || pos4x == pos2o || pos4x == pos3x || pos4x == pos3o) {
                                                pos4x = rand()
                                            }
                                            button[pos4x].innerHTML = 'X';
                                            button[pos4x].style.fontSize = '50px';
                                            button[pos4x].style.textAlign = 'center';
                                            button[pos4x].style.color = 'black';           
                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                button[pos4x].style.fontSize = '45px';
                                            }
                                            for (let i = 6; i < 15; i++) {
                                                if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                                                    button[i].disabled = false;
                                                }                   
                                            }
                                            if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[6].innerHTML == button[9].innerHTML && button[9].innerHTML == button[12].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[6].innerHTML == button[10].innerHTML && button[10].innerHTML == button[14].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[8].innerHTML == button[11].innerHTML && button[11].innerHTML == button[14].innerHTML && button[8].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[8].innerHTML == button[10].innerHTML && button[10].innerHTML == button[12].innerHTML && button[8].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[9].innerHTML == button[10].innerHTML && button[10].innerHTML == button[11].innerHTML && button[9].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[12].innerHTML == button[13].innerHTML && button[13].innerHTML == button[14].innerHTML && button[12].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[7].innerHTML == button[10].innerHTML && button[10].innerHTML == button[13].innerHTML && button[7].innerHTML != '') {
                                                for (let i = 6; i < 15; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                if (window.matchMedia('(max-width: 1600px)').matches) {
                                                    winner.style.fontSize = '60px';
                                                    replay.style.fontSize = '60px';
                                                }
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            for (let pos4o = 6; pos4o < 15; pos4o++) {
                                                button[pos4o].onclick = () => {
                                                    button[pos4o].innerHTML = 'O';
                                                    button[pos4o].style.fontSize = '50px';
                                                    button[pos4o].style.textAlign = 'center';
                                                    button[pos4o].style.color = 'black';
                                                    if (window.matchMedia('(max-width: 1600px)').matches) {
                                                        button[pos4o].style.fontSize = '45px';
                                                    }
                                                    for (let i = 6; i < 15; i++) {
                                                        button[i].disabled = true;
                                                    }
                                                    if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[6].innerHTML == button[9].innerHTML && button[9].innerHTML == button[12].innerHTML && button[6].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[6].innerHTML == button[10].innerHTML && button[10].innerHTML == button[14].innerHTML && button[6].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[8].innerHTML == button[11].innerHTML && button[11].innerHTML == button[14].innerHTML && button[8].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[8].innerHTML == button[10].innerHTML && button[10].innerHTML == button[12].innerHTML && button[8].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[9].innerHTML == button[10].innerHTML && button[10].innerHTML == button[11].innerHTML && button[9].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[12].innerHTML == button[13].innerHTML && button[13].innerHTML == button[14].innerHTML && button[12].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[7].innerHTML == button[10].innerHTML && button[10].innerHTML == button[13].innerHTML && button[7].innerHTML != '') {
                                                        for (let i = 6; i < 15; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'First player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            winner.style.fontSize = '60px';
                                                            replay.style.fontSize = '60px';
                                                        }
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    let fifth = () => {
                                                        let pos5x = rand();
                                                        while (pos5x == pos1x || pos5x == pos1o || pos5x == pos2x || pos5x == pos2o || pos5x == pos3x || pos5x == pos3o || pos5x == pos4x || pos5x == pos4o) {
                                                            pos5x = rand()
                                                        }
                                                        button[pos5x].innerHTML = 'X';
                                                        button[pos5x].style.fontSize = '50px';
                                                        button[pos5x].style.textAlign = 'center';
                                                        button[pos5x].style.color = 'black';           
                                                        if (window.matchMedia('(max-width: 1600px)').matches) {
                                                            button[pos5x].style.fontSize = '45px';
                                                        }
                                                        for (let i = 6; i < 15; i++) {
                                                            if (button[i].innerHTML != 'X' && button[i].innerHTML != 'O') {
                                                                button[i].disabled = false;
                                                            }                   
                                                        }
                                                        if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                        if (button[6].innerHTML == button[9].innerHTML && button[9].innerHTML == button[12].innerHTML && button[6].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                        if (button[6].innerHTML == button[10].innerHTML && button[10].innerHTML == button[14].innerHTML && button[6].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                        if (button[8].innerHTML == button[11].innerHTML && button[11].innerHTML == button[14].innerHTML && button[8].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                        if (button[8].innerHTML == button[10].innerHTML && button[10].innerHTML == button[12].innerHTML && button[8].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                        if (button[9].innerHTML == button[10].innerHTML && button[10].innerHTML == button[11].innerHTML && button[9].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                        if (button[12].innerHTML == button[13].innerHTML && button[13].innerHTML == button[14].innerHTML && button[12].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                        if (button[7].innerHTML == button[10].innerHTML && button[10].innerHTML == button[13].innerHTML && button[7].innerHTML != '') {
                                                            for (let i = 6; i < 15; i++) {
                                                                button[i].disabled = 'true';
                                                            }
                                                            let winner = document.createElement('h1');
                                                            winner.innerHTML = 'First player won!';
                                                            winner.style.textAlign = 'center';
                                                            winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                            winner.style.backgroundSize = '100%';
                                                            winner.style.color = 'gray';
                                                            winner.style.fontSize = '80px';
                                                            document.body.append(winner);
                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = 'Rematch';
                                                            replay.style.textAlign = 'center';
                                                            replay.style.color = 'gray';
                                                            replay.style.fontSize = '80px';
                                                            replay.style.cursor = 'pointer';
                                                            document.body.append(replay);
                                                            if (window.matchMedia('(max-width: 1600px)').matches) {
                                                                winner.style.fontSize = '60px';
                                                                replay.style.fontSize = '60px';
                                                            }
                                                            replay.onclick = () => {
                                                                window.location.reload();
                                                            }
                                                        }
                                                    }
                                                    setTimeout(fifth, 1000)
                                                }
                                            }
                                        }
                                        setTimeout(fourth, 1000)  
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
})