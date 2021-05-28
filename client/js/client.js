console.log('hello client');
import { fetchGet, sendFetchData } from './fetch.js';
import { generateList } from './generateHtml.js';

const divOut = document.createElement('div');
document.body.append(divOut);

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
  divOut.append(olElGenerated);
});

const mainForm = document.getElementById('add-user-form');

mainForm.addEventListener('submit', function (event) {
  // sustabdyti forma nuo issiuntimo su psl perkrovimu
  event.preventDefault();
  console.log('sustabdem');

  // pasiimti formos duomenis pagal name atributa
  const formData = new FormData(mainForm);
  // pasidarom paprsta js objekta is formDataObject
  const formDataPlain = Object.fromEntries(formData.entries());
  console.log(' formDataPlain', formDataPlain);
  // pasidarom JSON objekta
  const formDataInJson = JSON.stringify(formDataPlain);

  sendFetchData('/api/people', formDataInJson, (data) => {
    if (data.error) {
      document.getElementById('name').classList.add('is-invalid');
    } else {
      document.getElementById('name').classList.remove('is-invalid');
    }
  });

  fetchGet('/api/people', (data) => {
    //   data.forEach((person) => {
    //     console.log({ name: person.name, age: person.age });
    //   });
    const olElGenerated = generateList(data);
    divOut.innerHTML = null;
    divOut.append(olElGenerated);
  });
});
