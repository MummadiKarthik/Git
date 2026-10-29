function* conversation() {
  const answer = yield "What is your favorite color?";
  yield `Awesome, I like ${answer} too!`;
}

const chat = conversation();
console.log(chat.next().value);    // "What is your favorite color?"
console.log(chat.next('blue').value); // "Awesome, I like blue too!"
