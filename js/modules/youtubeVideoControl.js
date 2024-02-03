export default () => {
    if(document.getElementById('player')) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
        var player;
        window.onYouTubeIframeAPIReady = function() {
            player = new YT.Player('player', {
                width: 1000,
                height: 530,
                videoId: 'lJIrF4YjHfQ',
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

    } else {
        return;
    }
}

