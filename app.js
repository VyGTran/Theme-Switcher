const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const LilNasXButton = document.getElementById('LilNasX');
const body = document.body;

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    body.classList.replace('LilNasX', 'dark')
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    body.classList.replace('LilNasX', 'light');
};

 LilNasXButton.onclick = () => {
    body.classList.replace('light', 'LilNasX');
    body.classList.replace('dark', 'LilNasX');
};