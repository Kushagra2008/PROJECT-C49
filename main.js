const blast = document.querySelector('#blast');
const monkey = document.querySelector('#monkey_bg');
const cat = document.querySelector('#cat_bg');
const lion = document.querySelector('#lion_bg');

blast.style.position = "absolute";
blast.style.left = "50%";
blast.style.top = "50%";
blast.style.transform = "translate(-50%, -50%)";
blast.style.width = "0";
blast.style.height = "0";
blast.style.pointerEvents = "none"

cat.addEventListener('click', e => {
    console.log(e)
    blast.style.transition = "2s ease-out";
    blast.style.background = "#C15640";
    blast.style.width = "100%";
    blast.style.height = "100vh";

    let p = document.createElement('p')
    p.innerText = "Loading...";
    p.setAttribute('style', `
            transition: 2s ease-out;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            text-justify: center;
            color: white;
            font-family: 'Poppins', cursive;
            font-size: 2em;
            z-index: 1000;
        `)
    document.body.appendChild(p)

    setTimeout(() => {
        let a = document.createElement('a');
        a.href = "pages/cat.html";
        a.click();
    }, 2500);
});
lion.addEventListener('click', e => {
    console.log(e)
    blast.style.transition = "2s ease-out";
    blast.style.background = "#FF9D3B";
    blast.style.width = "100%";
    blast.style.height = "100vh";

    let p = document.createElement('p')
    p.innerText = "Loading...";
    p.setAttribute('style', `
            transition: 2s ease-out;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            text-justify: center;
            color: white;
            font-family: 'Poppins', cursive;
            font-size: 2em;
            z-index: 1000;
        `)
    document.body.appendChild(p)

    setTimeout(() => {
        let a = document.createElement('a');
        a.href = "pages/lion.html";
        a.click();
    }, 2500);
});
monkey.addEventListener('click', e => {
    console.log(e)
    blast.style.transition = "2s ease-out";
    blast.style.background = "#CAD3A7";
    blast.style.width = "100%";
    blast.style.height = "100vh";

    let p = document.createElement('p')
    p.innerText = "Loading...";
    p.setAttribute('style', `
            transition: 2s ease-out;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            text-justify: center;
            color: white;
            font-family: 'Poppins', cursive;
            font-size: 2em;
            z-index: 1000;
        `)
    document.body.appendChild(p)

    setTimeout(() => {
        let a = document.createElement('a');
        a.href = "pages/monkey.html";
        a.click();
    }, 2500);
});