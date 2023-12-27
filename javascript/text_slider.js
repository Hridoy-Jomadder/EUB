        const slider = document.getElementById('text-slider');
        let currentIndex = 0;

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slider.children.length;
            updateSlider();
        }

        function updateSlider() {
            const translateValue = -currentIndex * 100 + '%';
            slider.style.transform = `translateX(${translateValue})`;
        }

        setInterval(nextSlide, 2000); // Change slide every 2 seconds (adjust as needed)