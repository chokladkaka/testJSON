const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://dimitrij.github.io/JSONAPI/persons.json', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {

    data.forEach(persons => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      const person = document.createElement('div');
      person.setAttribute('class', 'person');

      const h1 = document.createElement('h1');
      h1.textContent = persons.title;
      const p = document.createElement('p');
      persons.description = persons.description.substring(0, 300);
      p.textContent = `${persons.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      container.appendChild(person);
      person.appendChild(h1);
      person.appendChild(p);
    });
  } 
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}
request.send();