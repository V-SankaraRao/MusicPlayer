let pbtn=document.getElementById("playicon");
let song=document.getElementById("song");
let progress=document.getElementById("progress");


song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playorpause(){
    if(pbtn.classList.contains("fa-pause")){
        song.pause();
        pbtn.classList.remove("fa-pause");
        pbtn.classList.add("fa-play");
    }
    else{
        song.play();
        pbtn.classList.add("fa-pause");
        pbtn.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
}
progress.onchange=function(){
    song.currentTime=progress.value;
    pbtn.classList.add("fa-pause");
    pbtn.classList.remove("fa-play");
}
