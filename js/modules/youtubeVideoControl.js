export default async () => {
    const playerBoxes = document.querySelectorAll('.js-video-box');

    if(playerBoxes.length > 0) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.defer = true;
        
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        Array.from(playerBoxes).forEach( playerBox => {
            var videoContainer = playerBox.firstElementChild;
            videoContainer.id = getRandomInt(4000);

            var videoId;
            videoContainer.dataset.youtubeId ? ( videoId = videoContainer.dataset.youtubeId ) : ( videoId = 'lJIrF4YjHfQ');

            var btn = playerBox.parentElement.querySelector('button');

            var player;
            
            window.onYouTubeIframeAPIReady = function() {
                player = new YT.Player( videoContainer.id, {
                    width: 1000,
                    height: 530,
                    videoId: videoId,
                    playerVars: { 'autoplay': 0, 'controls': 1 },
                    events: {
                        // 'onReady': onPlayerReady,
                        // 'onStateChange': onPlayerStateChange
                    }
                });
            }
        
            function onPlayerReady(event) {
                event.target.playVideo();
            }
        
            var done = false;
        
            function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING && !done) {
                    setTimeout(stopVideo, 6000);
                    done = true;
                }
            }
        
            function stopVideo() {
                player.stopVideo();
            }

            btn.addEventListener('click', () => {
                btn.closest('.article-video').classList.add('article-video--is-play');
                player.playVideo();
            })
        }) 
    
    } else {
        return;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}

