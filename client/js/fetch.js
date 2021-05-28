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
export function sendFetchData(url, dataToSend, successCallback) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: dataToSend,
  })
    .then((resp) => resp.json())
    .then((data) => successCallback(data))
    .catch((err) => console.error(err.message));
}
