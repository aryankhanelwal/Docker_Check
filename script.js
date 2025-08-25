// Counter for button clicks
let clickCounter = 0;

// Messages to display when button is clicked
const messages = [
    "🎉 Hello from inside the Docker container!",
    "🐳 This app is running on Ubuntu base image!",
    "🚀 Docker makes deployment so easy!",
    "⭐ You clicked the button again!",
    "🌟 Keep clicking, you're doing great!",
    "💫 Each click proves the JavaScript is working!",
    "🎊 Container orchestration at its finest!",
    "🔥 Hot reloading... just kidding, it's containerized!",
    "🌈 Colors and animations work perfectly in Docker!",
    "⚡ Lightning fast response from the container!"
];

// DOM elements
const interactBtn = document.getElementById('interactBtn');
const messageDiv = document.getElementById('message');
const counterDisplay = document.getElementById('counter');
const timestampDisplay = document.getElementById('timestamp');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐳 Docker Web App loaded successfully!');
    updateTimestamp();
    
    // Add fade-in effect to main elements
    setTimeout(() => {
        document.querySelector('.hero').classList.add('fade-in');
        document.querySelector('.features').classList.add('fade-in');
        document.querySelector('.stats').classList.add('fade-in');
    }, 100);
});

// Button click event handler
interactBtn.addEventListener('click', function() {
    clickCounter++;
    
    // Update counter display
    counterDisplay.textContent = clickCounter;
    counterDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
    
    // Display random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageDiv.textContent = randomMessage;
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        messageDiv.style.transition = 'all 0.3s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 50);
    
    // Add some visual feedback to the button
    interactBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        interactBtn.style.transform = 'scale(1)';
    }, 100);
    
    // Change button text temporarily
    const originalText = interactBtn.textContent;
    interactBtn.textContent = 'Clicked! 🎉';
    setTimeout(() => {
        interactBtn.textContent = originalText;
    }, 500);
    
    console.log(`Button clicked ${clickCounter} times`);
});

// Update timestamp every second
function updateTimestamp() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timestampDisplay.textContent = timeString;
}

setInterval(updateTimestamp, 1000);

// Add some keyboard interaction
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        interactBtn.click();
    }
});

// Add mouse enter/leave effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console welcome message
console.log(`
🐳 ================================
   Welcome to Docker Web App!
   Running in containerized environment
   Built with HTML, CSS, and JavaScript
   Base image: Ubuntu
🐳 ================================
`);

// Check if we're running in Docker (basic detection)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Running in development mode');
} else {
    console.log('🚀 Running in production/containerized mode');
}

// Add performance monitoring
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
});
