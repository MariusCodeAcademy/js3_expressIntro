console.log('hello client');
import { fetchGet } from './fetch.js';
import { generateList } from './generateHtml.js';
// get people fetch
document.getElementById('ppl').addEventListener('click', () => {
  fetchGet('/api/people', (data) => console.log(data));
});

fetchGet('/api/people', (data) => {
  //   data.forEach((person) => {
  //     console.log({ name: person.name, age: person.age });
  //   });
  const olElGenerated = generateList(data);
  console.log(olElGenerated);
  document.body.append(olElGenerated);
});

// pasitikrinti ar turim klaidu query parametruose
// jei turim tai atvaizduojam formoje
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('errorName');

console.log(myParam);
// jei gryzo klaida is back end
if (myParam) {
  const nameInput = document.getElementById('name');
  nameInput.classList.add('is-invalid');
}
