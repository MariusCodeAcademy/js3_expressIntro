console.log('hello client');
import { fetchGet } from './fetch.js';
import { generateList } from './generateHtml.js';
// get people fetch
document.getElementById('ppl').addEventListener('click', () => {
  fetchGet('/api/people', (data) => console.log(data));
});

fetchGet('/api/people', (data) => {
  data.forEach((person) => {
    console.log({ name: person.name, age: person.age });
  });
});
