// pernaudojame fetch funckija
export function fetchGet(url, successCallback) {
  console.log(`sending get request to ${url} using fetchGet`);
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => successCallback(data))
    .catch((err) => console.error(err.message));
}

//use pvz
//fetchGet('/api/people', (data) => console.log(data))

// send post data fetch json
// document.getElementById('send-data').addEventListener('click', () => {
//   console.log('deleting post data');
//   fetch('/api/people/2', {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((resp) => resp.json())
//     .then((data) => console.log(' data post rq', data))
//     .catch((err) => console.error(err.message));
// });
