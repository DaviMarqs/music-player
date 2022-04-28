let musics = [
    {
        title: 'Happier Then Ever',
        artist: 'Billie Eilish',
        src: 'musics/Billie Eilish - Happier Then Ever.mpeg',
        img: 'images/Happier Then Ever - Billie Eilish.jpg'
    },
    {
        title: 'I Wanna Be Yours',
        artist: 'Arctic Monkeys',
        src: 'musics/Arctic Monkeys - I Wanna Be Yours.mpeg',
        img: 'images/Arctic Monkey - I wanna be yours.jpg'
    },
    {
        title: 'Another Love',
        artist: 'Tom Odell',
        src: 'musics/Tom Odell - Another Love.mpeg',
        img: 'images/Tom Odell - Another Love.jpg'
    },
    {
        title: 'Shy Away',
        artist: 'Twenty One Pilots',
        src: 'musics/Twenty One Pilots - Shy Away.mpeg',
        img: 'images/Shy Away - top.jpg'
    },
    {
        title: 'Fallen Star',
        artist: 'The Neighbourhood',
        src: 'musics/The Neighbourhood - Fallen Star.mpeg',
        img: 'images/The nbhd - Fallen Star.jpg'
    },
    {
        title: 'Call Out My Name',
        artist: 'The Weeknd',
        src: 'musics/The Weeknd - Call Out My Name.mpeg',
        img: 'images/The weeknd - Call out my name.jpg'
    },
];

let music = document.querySelector("audio");
let musicIndex = 0;

let musicDuration = document.querySelector(".end");
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let artistName = document.querySelector('.description i');

renderMusic(musicIndex);


// Eventos
document.querySelector(".play-button").addEventListener("click", playMusic);

document.querySelector(".pause-button").addEventListener("click", pauseMusic);

music.addEventListener("timeupdate", attBar);

document.querySelector('.previous').addEventListener('click', () => {
    musicIndex--;
    if( musicIndex < 0) {
        musicIndex = 5;
    }
    renderMusic(musicIndex);
    playMusic();
});

document.querySelector('.next').addEventListener('click', () => {
    musicIndex++;
    if( musicIndex > 5) {
        musicIndex = 0;
    }
    renderMusic(musicIndex);
    playMusic();
});

// Funções

function renderMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].title;
        artistName.textContent = musics[index].artist;
        image.src = musics[index].img;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

function playMusic() {
  music.play();
  document.querySelector(".pause-button").style.display = "block";
  document.querySelector(".play-button").style.display = "none";
}

function pauseMusic() {
  music.pause();
  document.querySelector(".pause-button").style.display = "none";
  document.querySelector(".play-button").style.display = "block";
}

function attBar() {
  let bar = document.querySelector("progress");
  bar.style.width =
    Math.floor((music.currentTime / music.duration) * 100) + "%";
  let elapsedTime = document.querySelector(".beginning");
  elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(seconds) {
  let minutesField = Math.floor(seconds / 60);
  let secondsField = seconds % 60;
  if (secondsField < 10) {
    secondsField = "0" + secondsField;
  }

  return minutesField + ":" + secondsField;
}


