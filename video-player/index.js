const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')

$play.addEventListener('click', handlePlay )
$pausa.addEventListener('click', handlePausa)
$forward.addEventListener('click', handleForward)
$backward.addEventListener('click', handleBackward)

function handleBackward(){
    $video.currentTime -= 10
}
function handlePlay(){
    $video.play()
    $play.hidden = true
    $pausa.hidden = false
}
function handlePausa(){
    $video.pause()
    $pausa.hidden = true
    $play.hidden = false
}
function handleForward(){
    $video.currentTime +=10
}
const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handlerLoaded)
$video.addEventListener('timeupdate', handlerTimeUpdate)

function handlerLoaded(){
    $progress.max = $video.duration
}
function handlerTimeUpdate(){
  $progress.value = $video.currentTime;
}
$progress.addEventListener('input', handlerInput)

function handlerInput(){
    $video.currentTime = $progress.value
    
}