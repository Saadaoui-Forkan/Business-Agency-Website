// navBar
const navBar      = document.querySelector('nav')
const toggleIcon  = document.querySelector('.toggle-icon')
const changeLine1 = document.querySelector('.toggle-icon .line1')
const changeLine3 = document.querySelector('.toggle-icon .line3')
const navList     = document.querySelector('.nav-list')

toggleIcon.addEventListener('click', ()=>{

    navBar.classList.toggle('changeNav')
    changeLine1.classList.toggle('changeLine1')
    changeLine3.classList.toggle('changeLine3')
    navList.classList.toggle('changeNavList')

})

// slide show -- banner heading
const banner = document.querySelectorAll('.banner')
let i=0

setInterval(()=>{

    if(i<banner.length-1){
        i++
        banner[i].classList.add("active")
        banner[i-1].classList.remove("active")
    } else{
        i=0
        banner[0].classList.add("active")
        banner[banner.length-1].classList.remove("active")
    }

},2000)

// section-2 custom video player
const video = document.querySelector('.video-wrapper video')

// play pause control
const playPause = document.querySelector('.play-pause')
function togglePlayPause(){
    if(video.paused){
        playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`
        video.play()
    } else{
        playPause.innerHTML = `<i class="fa-solid fa-play"></i>`
        video.pause()
    }
}

playPause.addEventListener('click', ()=>{
    togglePlayPause()
})

video.addEventListener('click', ()=>{
    togglePlayPause()
})

// volume control
const volumeIcon = document.querySelector('.volume-icon')
function toggleVolumeIcon() {
    let isMute = volumeIcon.getAttribute('data-mute')

    if (isMute === 'true') {
        volumeIcon.setAttribute('data-mute','false')
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
        video.volume = volumeProgress.value
    } else {
        volumeIcon.setAttribute('data-mute','true')
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
        video.volume = 0
    }
}
volumeIcon.addEventListener('click', ()=>{
    toggleVolumeIcon()
})

const volumeProgress = document.querySelector('.volume-progress')
volumeProgress.addEventListener('input', ()=>{
    let rangeVolume = volumeProgress.value
    video.volume = rangeVolume

    if (rangeVolume < 0.1) {
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    } else if(rangeVolume< 0.3) {
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-low"></i>`
    } else {
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    }
})

// time control
const inputProgressVideo = document.querySelector('.input-progress-video')
const timeHover          = document.querySelector('.time-hover')

video.addEventListener('timeupdate', ()=>{
    let timing = (video.currentTime/video.duration)*100
    inputProgressVideo.value = timing
    inputProgressVideo.style.setProperty('--seek-before-width', `${timing}%`);
})

inputProgressVideo.addEventListener('input', ()=>{
    video.currentTime = (video.duration /100)*inputProgressVideo.value
})

inputProgressVideo.addEventListener('mousemove', (e)=>{
    let time = (video.duration/100)*(e.offsetX/e.target.clientWidth)*100
    timeHover.textContent = convertTime(Math.round(time))
    timeHover.style.left = (e.offsetX/e.target.clientWidth)*100 + '%'
    timeHover.style.display = 'block'
})

inputProgressVideo.addEventListener('mouseout', (e)=>{
    timeHover.style.display = 'none'
})

const convertTime = (seconds) =>{
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)
    min = min<10 ? '0'+min : min
    sec = sec<10 ? '0'+sec : sec

    return `${min}:${sec}`
        
}

const videoWrapper = document.querySelector('.video-wrapper')
const videoControls = document.querySelector('.video-controls')
videoWrapper.addEventListener('mousemove', ()=>{
    videoControls.style.opacity = "1"
})
videoWrapper.addEventListener('mouseout', ()=>{
    videoControls.style.opacity = "0"
})

// using swiper js in section 3
var swiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
  });