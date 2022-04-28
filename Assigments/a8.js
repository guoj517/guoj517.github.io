const clickEventElement = document.querySelector('#click')
const clickEventFeedbackElement = document.querySelector('#click-feedback')
const a = document.querySelector("#user-output"),
  b = document.querySelector("form#user-input");
b.addEventListener("submit", (e) => {
  e.preventDefault();
  const t = e.target.querySelector("input");
  e = t.value;
  const u = document.createElement("li");
  (u.innerHTML = e), a.appendChild(u), (t.value = "");
});

// Click Events
clickEventElement.addEventListener('click', (event) => {
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Let's go with the dough!"
    clickEventFeedbackElement.appendChild(feedbackElement)
})

clickEventElement.addEventListener('dblclick', (event) => {
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Let's get this bread!"
    clickEventFeedbackElement.appendChild(feedbackElement)
})