
        // Disable right-click
        document.addEventListener("contextmenu", (e) => e.preventDefault());

        // Disable other keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
        document.addEventListener("keydown", (e) => {
            if (e.key == "F12" || (e.ctrlKey && e.shiftKey && e.key == "I") || (e.ctrlKey && e.key == "u")) {
                e.preventDefault();
            }
        });

        const videoFrame = document.getElementById('videoFrame');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const overlay = document.getElementById('overlay');

        // Button click functionality (optional, can use overlay click as well)
        playPauseBtn.addEventListener('click', () => {
            const isPlaying = videoFrame.src.includes('autoplay=1');
            if (isPlaying) {
                videoFrame.src = videoFrame.src.replace('autoplay=1', 'autoplay=0');
                // playPauseBtn.textContent = 'Play';
            } else {
                videoFrame.src = videoFrame.src.replace('autoplay=0', 'autoplay=1');
                // playPauseBtn.textContent = 'Pause';
            }
        });
        playPauseBtn.addEventListener("mouseover", () => {
            if (videoFrame.src.includes('autoplay=1')) {
                playPauseBtn.textContent = "⏯️"; // Show play/pause icon
            }
        });

        playPauseBtn.addEventListener("mouseout", () => {
            playPauseBtn.textContent = "";
        });

