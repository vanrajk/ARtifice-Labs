document.addEventListener('DOMContentLoaded', () => {
    
    let lastScrollTop = 0;
    const navbar = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
let lastBubbleTime = 0;
const bubbleInterval = 100; // Time interval between bubbles in milliseconds

document.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();

    if (currentTime - lastBubbleTime > bubbleInterval) {
        const bubbleContainer = document.getElementById('bubbleContainer');

        // Create a new bubble element
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        // Set the position of the bubble
        bubble.style.left = `${e.pageX - 10}px`; // Adjust position to center the bubble
        bubble.style.top = `${e.pageY - 10}px`;

        // Add the bubble to the container
        bubbleContainer.appendChild(bubble);

        // Remove the bubble after the animation completes
        bubble.addEventListener('animationend', () => {
            bubbleContainer.removeChild(bubble);
        });

        // Update the time of the last bubble
        lastBubbleTime = currentTime;
    }
});
