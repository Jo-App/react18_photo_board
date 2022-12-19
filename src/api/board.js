export default class Board {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getPhotoList(page, limit) {
    return this.apiClient.getPhotoList({
      params: {
        page,
        limit
      }
    })
    .then((res) => res.data);
  }

  async getPhotoDetail(id) {
    return this.apiClient.getPhotoDetail(id)
    .then((res) => res.data);
  }
}