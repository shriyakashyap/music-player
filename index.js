<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    // playlist to play songs from
    const songs = [
        {title: "ive - blue heart", file: "IVE - Blue Heart.mp3", img: "ive switch.png"},
        {title: "newjeans - new jeans", file: "NewJeans - New Jeans.mp3", img: "new jeans get up.png"},
        {title: "katseye - touch", file: "Katseye - Touch.mp3", img: "katseye touch.png"},
        {title: "le sserafim - hot", file: "LE SSERAFIM - HOT.mp3", img: "le sserafim hot.png"},
        {title: "twice - strategy", file: "TWICE - Strategy.mp3", img: "twice strategy.png"}
    ];

    // declare variables
    let audioPlayer = document.getElementById("audio-player");
    let songTitle = document.getElementById("song-title");
    let songImage = document.getElementById("song-img");
    let progressBar = document.getElementById("progress-bar");
    let playPause = document.getElementById("play-pause");
    let timestamp = document.getElementById("progress");
    let songDuration = document.getElementById("duration");
    let currentSongIndex = 0;

    // updates 
    function updatePlayer() {
        currentSong = songs[currentSongIndex];
        songTitle.textContent = currentSong.title;
        songImage.src = currentSong.img;
        audioPlayer.src = currentSong.file;
        progressBar.value = 0;
        audioPlayer.load();
        playPause.src = "pause-button.png";
        audioPlayer.play();
    }

    playPause.addEventListener("click", function() {
        if (audioPlayer.paused) {
            playPause.src = "pause-button.png";
            audioPlayer.play();
        }
        else {
            playPause.src = "play-button.png";
            audioPlayer.pause();
        }
    });

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    audioPlayer.addEventListener("timeupdate", function() {
        if (audioPlayer.duration) {
            const progressTime = (audioPlayer.currentTime / audioPlayer.duration * 1000);
            progressBar.value = progressTime;

            timestamp.textContent = formatTime(audioPlayer.currentTime);
            songDuration.textContent = formatTime(audioPlayer.duration);

            if (progressBar.value == 1000) {
                currentSongIndex++;
                updatePlayer();
            }
        }
    });

    progressBar.addEventListener("input", function() {
        audioPlayer.currentTime = (progressBar.value / 1000 * audioPlayer.duration);
    });

    document.getElementById("next").addEventListener("click", function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updatePlayer();
    });

    document.getElementById("prev").addEventListener("click", function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updatePlayer();
    });
=======
document.addEventListener("DOMContentLoaded", function() {
    // playlist to play songs from
    const songs = [
        {title: "ive - blue heart", src: "IVE - Blue Heart.mp3"},
        {title: "newjeans - new jeans", src: "NewJeans - New Jeans.mp3"}
    ];

    let audioPlayer = document.getElementById("audio-player");
    let songTitle = document.getElementById("song-title");
    let currentSongIndex = 0;

    function updatePlayer() {
        currentSong = songs[currentSongIndex];
        songTitle.textContent = currentSong.title;
        audioPlayer.src = currentSong.src;
        audioPlayer.load();
    }

    document.getElementById("next").addEventListener("click", function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updatePlayer();
        audio.play();
    });

    document.getElementById("prev").addEventListener("click", function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updatePlayer();
        audio.play();
    });
>>>>>>> 4fb314311d8d1b427a46cc9893ab334039b48c03
});