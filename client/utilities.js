export function getUsername() {
  const username = sessionStorage.getItem("username");
  console.log("Runnn");
  if (username) return username;

  let newUsername = prompt("Please enter a username", "");

  if (!newUsername) {
    const randomNum = Math.floor(Math.random() * 1000);
    newUsername = "user" + randomNum;
  }

  sessionStorage.setItem("username", newUsername);

  return newUsername;
}

export function addUser(id, username) {
  document
    .querySelector(".users")
    .insertAdjacentHTML(
      "beforeend",
      `<option value=${id}>${username}</option>`
    );
}

export function clearUsers() {
  document.querySelector(".users").innerHTML = "";
}

export function removeUser(id) {
  const optionToRemove = document.querySelector(`.users option[value="${id}"]`);

  if (optionToRemove) {
    optionToRemove.parentNode.removeChild(optionToRemove);
  }
}

export function clearUserInput() {
  document.querySelector(".input").value = "";
}

export function addMessage(username, message) {
  document
    .querySelector(".messages")
    .insertAdjacentHTML(
      "beforeend",
      `<li><span>${username}: </span>${message}</li>`
    );

  window.scrollTo(0, document.body.scrollHeight);
}
