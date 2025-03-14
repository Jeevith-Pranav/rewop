const eventDetails = {
    'paper-presentation': {
        title: 'Paper Presentation',
        rules: `“Registration should be in advance”<br>
        <br>
*TEAM COMPOSITION     : Minimum 2 members or Max 3 members per team.<br>
*TOPIC                : Open Topic<br>
*SLIDES               : Min 10 slides<br>
*PRESENTATION DURATION: 6-7 minutes<br>
*VIVA SESSION         : 2-3 minutes<br>
*PAPER CONTENTS      : Problematic statement, Aim, Introduction, Objective, Methodology, Scope, Block Diagram, Analysis Data, Results, and Conclusions.<br>

“The best preparation will be announced as winner”<br>`
    },
    'poster-presentation': {
        title: 'Poster Presentation',
        rules: `“Registration should be in advance”<br>
        <br>
*TEAM COMPOSITION     : Minimum 2 members or Max 3 members per team.<br>
*TOPIC                : open topic<br>
*SIZE                 : poster size should be in A3 sheet(Hard Copy)<br>
*PRESENTATION DURATION: 6-7 minutes<br>
*VIVA SESSION         : 2-3 minutes<br>
*POSTER CONTENTS      : Problematic statement, Aim, Introduction, Objective, Methodology, Scope, Block Diagram, Analysis Data, Results, and Conclusions.<br>

“The best preparation will be announced as winner”<br>`
    },
    'circuit-debugging': {
        title: 'Circuit Debugging',
        rules:`●participants should be registered earlier<br>
        ●participants should have ID card<br>
        ●2 per Team<br>
        ●Two Rounds will be conducted.<br><br>
        First round will be written test for 40 minutes in which 20 Mcq's will be given .<br>
        Top 10 teams will be qualified to 2nd round.<br><br>
        2 nd will be practical round for 15 minutes (may vary depending on participants) where the participants have to debug the given circuit (Hardware).<br>
        ●Kit will be provided for the practical round.<br>
        ● Participants should be in time.<br>
        ● No extra time will be provided.<br>
        ●Participants will be allowed carry a plain paper for working out and calculators for the written round<br>`
    },
    'workshop': {
        title: 'Advancement and Challenges in Electric Vechile Technology',
        rules: `
        ●participants should be registered earlier<br>
        ●participants should have ID card<br><br>
        This Session Aims To Provide Insights Into The Advancements And Challenges That Characterize The Dynamic Landscape Of The Ev Sector.<br>
        The Shift Towards Evs Is Creating New Job Opportunities In Manufacturing, Research And Development, And Infrastructure Development. <br>
        The Speaker Will Share The 1 Challenges In Infrastructure Development, Range Anxiety, Cost And Supply Chain Challenges. <br>
        The Opportunities In The Ev Sector Are Vast, Driven By A Global Commitment To Sustainable Transportation.<br>`
    },
    'ipl-auction': {
        title: 'IPL Auction',
        rules: `•1. Each team must consist of 4 members in a group.<br>
2. The team leader’s name should be announced in the 
form.<br>
3. Only the team leader can bid during the auction <br>
other team members’ bids are not considerable.<br>
4. Bidding will be conducted with the player’s name, 
base price, country (e.g., Name: Virat Kohli, Base
Price: 200L, Country: India ).<br>
5. Each team is required to select 6 players:<br>
- 2 Batsmen<br>
- 1 Wicket Keeper<br>
- 1 All-Rounder<br>
- 2 Bowlers<br>
6. A maximum of 2 foreign players can be in the playing 6.<br>
7. If a team successfully buys the maximum number of
players in each category (role), subsequent bids for 
players in the same category will not be considerable.<br>
8. For example, if Team 1 has already bought 2 batsmen, 
any further bids for batsmen from Team 1 will not be 
considered.<br>
9. Purse: Each team starts with a total purse of 50cr.<br>
- Bids under 5cr are increased by 25L.<br>
- Bids after reaching 5cr are increased by 50L.<br>
10. Ratings will be revealed after the completion of each <br>
set(winners is chosen based on the rating of the
players)
Further Rules will be conveyed during the 
auction.`
    },
    'music-fest': {
        title: 'Music Fest',
        rules: `• Participants must register in advance.<br>
• There will be three rounds.<br>
• Two members per team.<br>
• Id card must.<br>
• Clue will be given if no one knows answer.<br>
• If they find it difficult to answer clue will be given in common<br>
<br>
Game Rules:<br>
<br>
• If the game starts with 20 participants, only 10 will move to the next round.<br>
• In the second round, 5 out of 10 will qualify for the final round.<br>
• The final round will determine the winner.<br>
• In case of a tie, the participant/team that answered the fastest will qualify for the next round.<br>
<br>
Round 1: Translate & Identify<br>
<br>
• A song clip (middle stanza or BGM) will be played.<br>
• Players must translate the lyrics into English and identify the song.<br>
• Each correct answer = 10 points.<br>
• Top 10 players with the highest scores move to the next round.<br>
• Tie-breaker: The fastest correct translator and identifier moves forward.<br>
<br>
Round 2: Song Association<br>
<br>
• A random word will be given to the players.<br>
• They must sing a song that contains the given word.<br>
• Players must start singing within 10 seconds.<br>
• Each correct response = 10 points.<br>
• Top 5 players with the highest scores move to the final round.<br>
• Tie-breaker: The fastest correct response moves forward.<br>
<br>
Final Round: Reverse Song Challenge<br>
<br>
• A song clip will be played in reverse.<br>
• Players must guess the correct song within 15 seconds.<br>
• Each correct answer = 15 points.<br>
• Negative Points Rule:<br>
• Wrong answer = -5 points.<br>
• In case of a tie, the fastest correct guesser wins.<br>`
    },
    'meme-creation': {
        title: 'Meme Creation',
        rules:`●Participants should be registered earlier<br>
        ●ID must<br>
        ●No extra time will be given.<br>
        ●Event consists of only one round for 45 minutes.<br>
        ● Contents for the meme will be given.<br>
        ● Participants must have devices like phone or laptop for creating memes.<br>
        ●This is purely fun based event,using inappropriate template, photos,  content or words will lead to disqualification.<br>`
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
    if (sectionId === 'contact-us' || sectionId === 'location') {
        sectionToShow.classList.add('show');
    }
    if (sectionId !== 'home') {
        document.getElementById('countdown').style.display = 'none';
    } else {
        document.getElementById('countdown').style.display = 'block';
    }
    if (closeMenu && window.innerWidth <= 768) {
        toggleMenu();
    }
}

function showEventDetails(eventKey, category) {
    const event = eventDetails[eventKey];
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-rules').innerHTML = event.rules; // Use innerHTML instead of textContent
    const backButton = document.getElementById('back-button');
    backButton.textContent = `Back to ${category.replace('-', ' ')} page`;
    backButton.setAttribute('onclick', `showSection('${category}', false)`);
    showSection('event-details', false);
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

function exploreEvents() {
    const modal = document.getElementById('selection-modal');
    modal.style.display = 'block';
}

function navigateToSection(sectionId) {
    const modal = document.getElementById('selection-modal');
    modal.style.display = 'none';
    showSection(sectionId, false);
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

// Event listener for the "Explore Events" button
document.querySelector('.hero-button').addEventListener('click', (event) => {
    event.preventDefault();
    exploreEvents();
});
