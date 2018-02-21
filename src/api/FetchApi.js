class FetchApi{
  constructor() {
  }

  static getReports() {
    return fetch('https://api.myjson.com/bins/foj21', {
      method: 'GET'
    })
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static deleteReports(newData) {
    return fetch('https://api.myjson.com/bins/foj21', {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(newData),
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  static clearReports() {
  return fetch('https://api.myjson.com/bins/foj21', {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      errorsHistory: [],
      warningsHistory: [],
    }),
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
  }
}

export default FetchApi;

