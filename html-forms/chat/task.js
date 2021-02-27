'use strict';
const chatWidget = document.querySelector('.chat-widget');
const messages = document.getElementById('chat-widget__messages');
const input = document.querySelector('.chat-widget__input');
let container = document.querySelector('.chat-widget__messages-container');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

const messagesRobot = [
  'кто тут?',
  'никогда больше не пишите!',
  'вам здесь не рады',
  'вам не ответят',
  'сначала покупайте, потом спрашивайте. a лучше вообще не спрашивайте',
  'рабочий день закончен, уйдите!',
  'глаза бы мои вас не видели!',
  'грубить могу только я!',
  'тут никого нет. и не будет',
];

const robotsMsg = () => {
  return messagesRobot[Math.floor(Math.random() * messagesRobot.length)];
};

const sendMsg = (text) => {
  const date = new Date().toTimeString().substring(0, 5);
  return `
    <div class="message ${text ? 'message_client' : ''}">
      <div class="message__time">${date}</div>
      <div class="message__text">
        ${text ? text : robotsMsg()}
      </div>
    </div>
  `;
};

input.addEventListener('keydown', (event) => {
  let value = event.target.value;
  if (event.key === 'Enter' && value) {
    messages.innerHTML += sendMsg(value);
    input.value = '';

    messages.innerHTML += sendMsg();
    scrollChat();
  }
});

const scrollChat = () => {
  container.scrollTo(0, container.scrollHeight);
};
