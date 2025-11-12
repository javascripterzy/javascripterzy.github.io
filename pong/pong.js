//-------------------------zmienne (które muszą być na górze z powodów przeróżnych)-------------------------
let game = false;
let b = document.getElementById("ball");
let bX = 0;
let bY = 0;

//-------------------------menu-------------------------

//podawanie nicków
let p1nickInput = document.getElementById("p1nickInput");
let p2nickInput = document.getElementById("p2nickInput");
let p1nickText = document.getElementById("p1nick");
let p2nickText = document.getElementById("p2nick");
let p1nick = "Gracz1";
let p2nick = "Gracz2";

p1nickInput.addEventListener("input",()=>{
    if(document.getElementById("p1nickInput").value != ""){
        p1nickInput.classList.add("set");
        p1nickInput.classList.remove("notset");
    }else{
        p1nickInput.classList.remove("set");
        p1nickInput.classList.add("notset");
    }
    
})

p2nickInput.addEventListener("input",()=>{
    if(document.getElementById("p2nickInput").value != ""){
        p2nickInput.classList.add("set");
        p2nickInput.classList.remove("notset");
    }else{
        p2nickInput.classList.remove("set");
        p2nickInput.classList.add("notset");
    }
    
})

//funkcja pokazująca odliczanie
let countSpace = document.getElementById("count");
let counter = document.getElementById("counter");
function count(){
    setTimeout(()=>{
        counter.textContent = "2";
    },1000)
    setTimeout(()=>{
        counter.textContent = "1";
    },2000)
    setTimeout(()=>{
        counter.textContent = "zaczynamyyy!";
    },3000)
    setTimeout(()=>{
        countSpace.style.display = "none";
        game = true;
        b.style.left = "100%";
        bY =  Math.floor(Math.random() * (85 - 10 + 1)) + 10;
        b.style.top = bY + "%";
    },4000)


    
}

//klikniecie przycisku start
let startBtn = document.getElementById("start");
let menu = document.getElementById("menu");
let gameSpace = document.getElementById("gameSpace");
startBtn.addEventListener("click",()=>{
    menu.style.display = "none";
    gameSpace.style.display = "block";
    if(p1nickInput.value != ""){
        p1nick = p1nickInput.value;
    }
    if(p2nickInput.value != ""){
        p2nick = p2nickInput.value;
    }

    p1nickText.textContent = p1nick;
    p2nickText.textContent = p2nick;
    count();
})


//-------------------------gra-------------------------

//gracze
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let turn = 0;

//wynik
let p1scoreText = document.getElementById("p1score");
let p2scoreText = document.getElementById("p2score");
let p1score = 0;
let p2score = 0;

//pozycja graczy
let p1pos = 50;
let p2pos = 50;

//predkosc
let s = 5;

//funkcja do czekowania kolizji
function isColliding(a,b) {
  const rectA = a.getBoundingClientRect();
  const rectB = b.getBoundingClientRect();

  return !(
    rectA.right <= rectB.left ||
    rectA.left >= rectB.right ||
    rectA.bottom <= rectB.top ||
    rectA.top >= rectB.bottom
  );
}

//obsługa wyjścia piłki poza mapę
function miss(){
    b.style.transition = "none";
    b.style.left = "49%";
    b.style.top = "50%";
    setTimeout(()=>{
        b.style.transition = "2s linear";
        if(turn == 1){
            b.style.left = "100%";
            bY =  Math.floor(Math.random() * (85 - 10 + 1)) + 10;
            b.style.top = bY + "%";
        }else{
            b.style.left = "-40px";
            bY =  Math.floor(Math.random() * (85 - 10 + 1)) + 10;
            b.style.top = bY + "%";
        }
    },10);
}

let path = 0;
let borderTop = document.getElementById("borderTop");
let borderBottom = document.getElementById("borderBottom");

function moveBall(path){ 
    if(path == 1){
        if(turn == 2){
            bX = "100%";
        }else{
            bX = "-40px";
        }
        bY =  Math.floor(Math.random() * (85 - 10 + 1)) + 10 + "%";
    }
    else if(path == 2){
    b.style.transition = "2s linear";
    bY = "96%"
    bX = Math.floor(Math.random() * (60 - 40 + 1)) + 40 + "%"
    setTimeout(()=>{
        moveBall(1);
    },2000)
    }
    else if(path == 3){
    b.style.transition = "2s linear";
    bY = "1%"
    bX = Math.floor(Math.random() * (60 - 40 + 1)) + 40 + "%"
    setTimeout(()=>{
        moveBall(1);
    },2000)
    }
    b.style.left = bX;
    b.style.top = bY;
}

//iwent lisner do czekowania jaki przycisk jest wciśnięty
document.addEventListener("keydown", (e)=>{btn = e.key;});
let btn = "";

//pętla gry (musi być żeby gra się cały czas odświeżała a nie stała w miejscu)
function gameLoop(){
    //ten if czekuje czy był gra wystartowała wgl
    if(game){
    //tutaj znowu bajo jajo z przyciskami i ustawianie pozycji
    if(btn == "s"){
        if(p1.style.top != "77%"){
            p1pos += s;
            p1.style.top = p1pos + "%";
        } 
    }
    if(btn == "w"){
        if(p1.style.top != "5%"){
            p1pos -= s;
            p1.style.top = p1pos + "%";
        }
    }

    if(btn == "ArrowDown"){
        if(p2.style.top != "77%"){
            p2pos += s;
            p2.style.top = p2pos + "%";
        }
    }
    if(btn == "ArrowUp"){
        if(p2.style.top != "5%"){
            p2pos -= s;
            p2.style.top = p2pos + "%";
        }
    }

    //obsługa kolizji dla gracza1
    if (isColliding(p1, b)) {
    turn = 2;
    p1score++;
    p1scoreText.textContent = p1score;
    
    path = Math.floor(Math.random() * 3) + 1;
    b.style.transition = "2s linear";
    moveBall(path);

    p1scoreText.classList.add("scoreGain");
    p1scoreText.addEventListener("transitionend",()=>{
        p1scoreText.classList.remove("scoreGain");
    })
    }

    //obsługa kolizji dla gracza2
    if (isColliding(p2, b)) {
    turn = 1;
    p2score++;
    p2scoreText.textContent = p2score;
    
    path = Math.floor(Math.random() * 3) + 1;
    b.style.transition = "2s linear";

    moveBall(path);

    p2scoreText.classList.add("scoreGain");
    p2scoreText.addEventListener("transitionend",()=>{
        p2scoreText.classList.remove("scoreGain");
    })
    }

    //jeśli piłka wyjdzie poza mapę
    if(!isColliding(b,gameSpace)){
        miss();
    }


    //tu się zmienna btn odświeża bo tak musi być po prostu (inaczej przycisk jest tak jakby cały czas wciśnięty i np gracz idzie cały czas do góry)
    btn = "";
}
//to musi być po prostu żeby ta pętla działała
requestAnimationFrame(gameLoop);
}

//wywołanie pętli
gameLoop();












