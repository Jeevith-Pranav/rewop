const eventDetails = {
    'paper-presentation': {
        title: 'Paper Presentation',
        rules: 'Rules for Paper Presentation...'
    },
    'poster-presentation': {
        title: 'Poster Presentation',
        rules: 'Rules for Poster Presentation...'
    },
    'circuit-debugging': {
        title: 'Circuit Debugging',
        rules: 'Rules for Circuit Debugging...'
    },
    'workshop': {
        title: 'Workshop',
        rules: 'Rules for Workshop...'
    },
    'ipl-auction': {
        title: 'IPL Auction',
        rules: 'Rules for IPL Auction...'
    },
    'music-fest': {
        title: 'Music Fest',
        rules: 'Rules for Music Fest...'
    },
    'meme-creation': {
        title: 'Meme Creation',
        rules: 'Rules for Meme Creation...'
    }
};

function showSection(sectionId, closeMenu = true) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
        if (section.classList.contains('show')) {
            section.classList.remove('show');
        }
    });
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
    if (sectionId === 'contact-us' || sectionId === 'organizers') {
        sectionToShow.classList.add('show');
    }
    if (closeMenu && window.innerWidth <= 768) {
        toggleMenu();
    }
}

function showEventDetails(eventKey) {
    const event = eventDetails[eventKey];
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-rules').textContent = event.rules;
    showSection('event-details', false);
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Countdown Timer
const countdown = () => {
    const eventDate = new Date('2025-03-19T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown-timer').innerHTML = 'The event has started!';
    }
};

const timerInterval = setInterval(countdown, 1000);