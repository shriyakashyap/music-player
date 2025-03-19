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
});