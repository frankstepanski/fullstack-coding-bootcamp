class API {
  constructor() {
    this.url = 'https://626adc4f6a86cd64adb45a12.mockapi.io/movies';
  }

  get = async () => {

    try {

      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }

  }

  put = async (id, data) => {

    try {

      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error);
    }
  }
   
  post = async (data) => {

    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  delete = async (id) => {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE'
      });
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

export default API;