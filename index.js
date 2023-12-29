const audioPlayer = document.querySelector('#audioPlayer')

const skipBack = document.querySelector('#skip-back')
const playMedia = document.querySelector('#play')
const skipAhead = document.querySelector('#skip-ahead')

const timeProgress = document.querySelector('#time-progress')
const timeEnd = document.querySelector('#time-end')

const progress = document.querySelector('.progress-bar .progress')

const formatTimeProgress = (timeInSeconds) => {
    const seconds = Math.floor(timeInSeconds % 60)
    const minutes = Math.floor(timeInSeconds / 60)

    const formatedSeconds = seconds.toString().padStart(2, '0')
    const formatedMinutes = minutes.toString().padStart(2, '0')

    return `${formatedMinutes}:${formatedSeconds}`
}

const updateProgressBar = () => {
    const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100
    progress.style.width = `${progressPercentage}%`;
}

const updateMusicProgress = () => {
    const progressInSeconds = audioPlayer.currentTime;
    const durationInSeconds = audioPlayer.duration

    timeProgress.textContent = formatTimeProgress(progressInSeconds)
    timeEnd.textContent = formatTimeProgress(durationInSeconds - progressInSeconds)

    updateProgressBar()
}

const playAudio = () => {
    if(audioPlayer.paused){
        audioPlayer.play()
        setInterval(updateMusicProgress, 500);
    }else{
        audioPlayer.pause()
    }   
}

playMedia.addEventListener('click', playAudio)

skipBack.addEventListener('click', () => {
    audioPlayer.currentTime -= 10
    updateProgressBar()
})

skipAhead.addEventListener('click', () => {
    audioPlayer.currentTime += 10
    updateProgressBar()
})