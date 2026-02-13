//Feature 1 (UPDATED)
const heading = document.querySelector("#heading");

const changeFontColor = () => {
    heading.classList.toggle("blue-text");
};

heading.addEventListener("click", changeFontColor);

//Feature 2
const subtitle = document.querySelector ("#subheading");

const changeSubtitleColor = () => {
    subtitle.classList.toggle ("#blue-text");
};

subtitle.addEventListener("click", changeSubtitleColor);

//Feature 3
const replyBtn = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");

const showReply = () => {
    replyMessage.classList.remove("hidden");
};

replyBtn.addEventListener("click", showReply);

//Feature 4
const sendBtn = document.querySelector("#send-button");
const cancelBtn = document.querySelector("#cancel-button");

const hideReply = () => {
    replyMessage.classList.add("hidden");
};

sendBtn.addEventListener("click", hideReply);
cancelBtn.addEventListener("click", hideReply);

//Feature 5
const openBtn = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");
const inboxMessage = document.querySelector("#inbox-message");
const unreadBtn = document.querySelector("#mark-button");

const openMessage = () => {
    inbox.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    unreadBtn.classList.remove("hidden");
};

openBtn.addEventListener("click", openMessage);

//Feature 6
const closeBtn = document.querySelector("#close");

const closeMessage = () => {
    inboxMessage.classList.add("hidden");
};

closeBtn.addEventListener("click", closeMessage);

//Feature 7
const markUnread = () => {
    inboxMessage.classList.add("hidden");
    inbox.classList.remove("is-read");
    unreadBtn.classList.add("hidden");
};

unreadBtn.addEventListener("click", markUnread);

//Feature 8
const targetElement = document.querySelector("#target");

const toggleCustomClass = () => {
    if (targetElement.classList.contains("my-custom-class")) {
        targetElement.classList.remove("my-custom-class");
    } else {
        targetElement.classList.add("my-custom-class");
    }
};

subtitle.addEventListener("click", toggleCustomClass);

//Feature 10
const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#action-buttons");

const handleCheckbox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
};

checkbox.addEventListener("click", handleCheckbox);

//Feature 11
const deleteBtn = document.querySelector("#delete-button");

const handleDelete = () => {
    inbox.classList.toggle("hidden");

    if (deleteBtn.innerHTML === "Delete Message(s)") {
        deleteBtn.innerHTML = "Undo Deletion";
    } else {
        deleteBtn.innerHTML = "Delete Message(s)";
    }
};

deleteBtn.addEventListener("click", handleDelete);

//Feature 12
const readBtn = document.querySelector("#read-button");

const markRead = () => {
    unreadBtn.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.add("is-read");
    checkbox.checked = false;
};

readBtn.addEventListener("click", markRead);

//Feature 13
const darkModeBtn = document.querySelector("#darkmode-button");
const body = document.querySelector("body");

const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
};

darkModeBtn.addEventListener("click", toggleDarkMode);