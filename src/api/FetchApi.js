class FetchApi{
  constructor() {
  }
  static getReports() {
    return fetch(`https://api.myjson.com/bins/1eei7h`, {
      method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
      return error;
    });
  }
}

export default FetchApi;