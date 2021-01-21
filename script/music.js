 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('youtube', {
     height: '0px',
     width: '0px',
     videoId: 'vjl_uRTeOfU',
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.pauseVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
        var playing = Image('30px', '30px');
     done = true;
   }
 }

 function stopVideo() {
   player.stopVideo();
 }
 function playVideo(){
     player.playVideo();
 }
 function pauseVideo() {
    player.pauseVideo();
  }
  function nextVideo(){
    player.nextVideo(); // 다음곡 실행
}
function previousVideo(){
    player.previousVideo();  // 이전곡 실행
}

var i = 0;
var arrMusic = new Array();

function addMusic(){
    var newMusic = prompt("추가를 원하는 URL ID를 입력해주세요");
    var music_list = $("#playlist")
     music_list.append("<li id=playlist>"+i+newMusic+"</li>");
    arrMusic[i] = newMusic;
    i++;
}
function startAddMusic(){
    player.loadPlaylist( arrMusic, 0,0, 'small')
}
