import axios from 'axios';
const API_URL = "https://picsum.photos/v2/list";

export default class BoardClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: API_URL,
    })
  };
  async getPhotoList(params) {
    return this.httpClient.get('', params);
  }
}