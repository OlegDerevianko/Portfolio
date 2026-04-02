function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const hoursElement = document.getElementById('clockHours');
    const minutesElement = document.getElementById('clockMinutes');
    const secondsElement = document.getElementById('clockSeconds');
    const dateElement = document.getElementById('clockDate');
    
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;
    
    if (dateElement) {
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

setInterval(updateClock, 1000);
updateClock();