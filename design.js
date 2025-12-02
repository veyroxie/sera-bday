const playBtn = document.getElementById("playSongBtn");
    const loveNoteBtn = document.getElementById("loveNoteBtn");
    const loveNote = document.getElementById("loveNote");

    playBtn.addEventListener("click", () => {
        document.querySelector(".spotify-embed").scrollIntoView({ behavior: "smooth" });
        playBtn.innerHTML = '<span class="icon">🎧</span> Now playing: you + this song';
    });

    loveNoteBtn.addEventListener("click", () => {
        loveNote.classList.toggle("visible");
        loveNoteBtn.innerHTML = loveNote.classList.contains("visible")
        ? '<span class="icon">😉</span> Hide the soft stuff'
        : '<span class="icon">💌</span> Click for a slightly illegal level of flirt';
    });