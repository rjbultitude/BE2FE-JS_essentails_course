// DOM Traveral and manipulation

function domOps() {
  // Create an HTML Collection / Array like object
  const buttons = document.getElementsByClassName('button');
  const docBody = document.body;
  console.log('docBody', docBody);

  // Loop through the collection
  for (let index = 0; index < buttons.length; index++) {
    console.log(buttons[index]);
  }

  // Extract HTMLCollection
  const [firstButton] = buttons;

  console.log('firstButton', firstButton);
  console.log('prev el sibling ', firstButton.previousElementSibling);
  console.log('next el sibling ', firstButton.nextElementSibling);
}

export default domOps;
