import axios from 'axios';
const API_URL = "https://picsum.photos";

export default class BoardClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: API_URL,
    })
  };
  async getPhotoList(params) {
    return this.httpClient.get('/v2/list', params);
  }
  async getPhotoDetail(id) {
    console.log(id)
    return this.httpClient.get(`/id/`+id+`/info`);
  }
}