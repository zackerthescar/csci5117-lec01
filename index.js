// should be a <ul>
const guestbookList = document.getElementById('guestbook-list');

// should be a <button>
const guestbookButton = document.getElementById('guestbook-button');

document.addEventListener('DOMContentLoaded', () => {

    guestbookButton.addEventListener('click', () => {
        const name = prompt('What is your name?');
        const li = document.createElement('li');
        li.textContent = name;
        guestbookList.appendChild(li);
    })
})