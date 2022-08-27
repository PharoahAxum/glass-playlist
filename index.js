const trackTitle = document.getElementById("track-title")
const trackImage = document.getElementById("track-image")
const myAudio = document.getElementById("my-audio")

const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const playBtn = document.getElementById("play-btn")

let isPlaying = false

let trackList = [
    {
        title: "Forest",
        image: "images/green.png",
        path: "track/forest-pixabay.mp3",
        background: "images/forest.png"
    },
    {
        title: "Sea",
        image: "images/blue.png",
        path: "track/sea-pixabay.mp3",
        background: "images/sea.png"
    },
    {
        title: "Meadow",
        image: "images/pink.png",
        path: "track/meadow-pixabay.mp3",
        background: "images/meadow.png"
    },
]

let trackPosition = 0
const totalTrack = trackList.length

playBtn.addEventListener("click", function() {
    playPause()
})

prevBtn.addEventListener("click", prevTrack)
nextBtn.addEventListener("click", nextTrack)


function playPause() {

    if (!isPlaying) {
        loadTrack(trackList[trackPosition])
        playTrack()    
    } else { 
        pauseTrack()
    } 
}


function loadTrack(track) {
    const {title, image, path, background} = track

    document.body.style.backgroundImage = `url("${background}")`
    trackTitle.innerHTML = `<h2 data-aos="fade-in" data-aos-duration="3000">${title}</h2>`
    trackImage.innerHTML = `<img data-aos="fade-in" data-aos-duration="3000" src="${image}" alt="">`
    myAudio.innerHTML = `<source src="${path}">`
    myAudio.load()
    
}

function playTrack() {
    myAudio.play()
    isPlaying = true
    playBtn.innerHTML = `<i class='bx bx-pause' ></i>`

}

function pauseTrack() {
    myAudio.pause()
    isPlaying = false
    playBtn.innerHTML = `<i class='bx bx-play' ></i>`
}


function nextTrack() {
    
    if (trackPosition === totalTrack - 1) {
        trackPosition = 0
    } else {
        trackPosition += 1
    }

    loadTrack(trackList[trackPosition])
    playTrack()
}

function prevTrack() {
    

    if (trackPosition === 0) {
        trackPosition = totalTrack - 1
    } else {
        trackPosition -= 1
    }

    loadTrack(trackList[trackPosition])
    playTrack()

}



