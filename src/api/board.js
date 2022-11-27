export default class Board {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getPhotoList() {
    return this.apiClient.getPhotoList({
      params: {
        page: 10,
        limit: 10
      }
    })
    .then((res) => res.data);
  }
}