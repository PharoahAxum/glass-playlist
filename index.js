import {trackList} from "./data.js"


const myAudio = document.getElementById("my-audio") 

const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const playBtn = document.getElementById("play-btn")


let isPlaying = false

let trackPosition = 0
const totalTrack = trackList.length

loadTrack(trackList[0])

playBtn.addEventListener("click", function() {
    playPause()
})

prevBtn.addEventListener("click", prevTrack)
nextBtn.addEventListener("click", nextTrack)


function loadTrack(track) {
    const {title, image, path, background} = track
    document.body.style.backgroundImage = `url("${background}")`
    document.getElementById("track-image").innerHTML = `<img data-aos="fade-in" data-aos-duration="3000" src="${image}" alt="">`
    document.getElementById("track-title").innerHTML = `<h2 data-aos="fade-in" data-aos-duration="3000">${title}</h2>`
    myAudio.innerHTML = `<source src="${path}">`
    myAudio.load()
}


function playPause() {
    if (!isPlaying) {
        playTrack()    
    } else { 
        pauseTrack()
    } 
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



