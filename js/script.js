function updatePlayerCount() {
    const playerCountElement = document.getElementById('playerCount');
    let currentCount = parseInt(playerCountElement.textContent, 10);

    const change = Math.floor(Math.random() * 21) - 10;
    currentCount += change;
    if (currentCount < 0) {
        currentCount = 0;
    }
    playerCountElement.textContent = currentCount;
}
setInterval(updatePlayerCount, 2000);

function randomizePosition(coin) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const depth = Math.random() * 200 - 100; 
    coin.style.transform = `translate3d(${x}px, ${y}px, ${depth}px)`;
}

function animateCoins() {
    const coins = document.querySelectorAll('.coins_paralax div');
    coins.forEach(coin => {
        randomizePosition(coin);
    });
}

window.onload = animateCoins;
function fetchMessagesAndImages() {
    fetch('msg_file/msg.json')
      .then(response => response.json())
      .then(data => {
        const messages = data.messages;
        const messagesCount = messages.length;
        
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
  
        let index = messagesCount - 1;
        const intervalId = setInterval(() => {
          if (index >= 0) {
            const message = messages[index];
            const imgIndex = getRandomInt(1, 30);
            const imgSrc = `img/${imgIndex}.jpg`;
  
            const messageBlock = document.createElement('div');
            messageBlock.classList.add('message');
  
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img_msg');
  
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = '';
  
            imgContainer.appendChild(imgElement);
            messageBlock.appendChild(imgContainer);
  
            const textContainer = document.createElement('div');
            textContainer.classList.add('text_msg');
  
            const textParagraph = document.createElement('p');
            textParagraph.textContent = message;
  
            textContainer.appendChild(textParagraph);
            messageBlock.appendChild(textContainer);
  
            const messagesContainer = document.getElementById('going_chat');
            messagesContainer.prepend(messageBlock);
  
            index--;

          } else {
            clearInterval(intervalId); 
          }
        },1000);
      })
      .catch(error => console.error('Error fetching messages:', error));
}

fetchMessagesAndImages();


function openPopup() {
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}

setTimeout(openPopup,19000);

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('vidosic');
    video.muted = true;
    video.play().catch(error => {
        console.error('Error attempting to play the video:', error);
    });
});