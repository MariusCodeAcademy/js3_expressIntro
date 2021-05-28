export function generateList(data) {
  // generavimas
  // sukurti ol el, ir jo vidue sugeneruoti sarasa kur kiekviename saraso el, yra
  //   duomenys apie person
  const olEl = document.createElement('ol');
  olEl.className = 'list-group';
  let listString = '';
  data.forEach((person) => {
    listString += `
    <li class="list-group-item">
      <p>id: ${person.id}</p>
      <p>name: ${person.name}</p>
      <p>surname: ${person.surname}</p>
      <p>sex: ${person.sex}</p>
      <p>age: ${person.age}</p>
      <p>married: ${person.married}</p>
    </li>
    `;
  });

  olEl.innerHTML = listString;
  return olEl;
}
