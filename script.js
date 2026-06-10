const STORAGE_KEY_PREFIX = 'concert_challenge_';

function saveProgress(key, value) {
    localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(value));
}

function loadProgress(key) {
    const data = localStorage.getItem(STORAGE_KEY_PREFIX + key);
    return data ? JSON.parse(data) : null;
}

function clearProgress() {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith(STORAGE_KEY_PREFIX)) {
            localStorage.removeItem(key);
        }
    });
}

function navigateTo(page) {
    window.location.href = page;
}

function updateLevelLocks() {
    const level1Completed = loadProgress('level1_completed');
    const level2Completed = loadProgress('level2_completed');
    const level3Completed = loadProgress('level3_completed');

    const level2Card = document.getElementById('level2-card');
    const level2Button = document.getElementById('start-level2');
    if (level2Card && level2Button) {
        if (level1Completed) {
            level2Card.classList.remove('locked');
            level2Card.querySelector('.lock-icon').style.display = 'none';
            level2Button.disabled = false;
            level2Button.onclick = () => navigateTo('level2.html');
        }
    }

    const level3Card = document.getElementById('level3-card');
    const level3Button = document.getElementById('start-level3');
    if (level3Card && level3Button) {
        if (level2Completed) {
            level3Card.classList.remove('locked');
            level3Card.querySelector('.lock-icon').style.display = 'none';
            level3Button.disabled = false;
            level3Button.onclick = () => navigateTo('level3.html');
        }
    }

    const knowCard = document.getElementById('knowledge-card');
    const knowButton = document.getElementById('view-knowledge');
    if (knowCard && knowButton && level3Completed) {
        knowCard.classList.remove('locked');
        knowCard.querySelector('.lock-icon').style.display = 'none';
        knowButton.disabled = false;
        knowButton.onclick = () => navigateTo('question-bank.html');
    }
}

function initializeScores() {
    if (loadProgress('level1_score') === null) saveProgress('level1_score', 0);
    if (loadProgress('level2_score') === null) saveProgress('level2_score', 0);
    if (loadProgress('level3_score') === null) saveProgress('level3_score', 0);
}

initializeScores();