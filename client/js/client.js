console.log('hello client');
import { fetchGet } from './fetch.js';
// get people fetch
document.getElementById('ppl').addEventListener('click', () => {
  fetchGet('/api/people', (data) => console.log(data));
});

fetchGet('/api/people', (data) => console.log(data));
