export default class GetService {
  constructor(props) {
    this._apiBase = "http://localhost:3001/";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  getAllItems = async item_type => {
    const result = await this.getResource(item_type);
    return result.map(this._transformItem);
  };

  _transformItem(item) {
    const id =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
    return {
      name: item.name,
      url: item.url,
      price: item.price,
      country: item.country ? item.country : null,
      desc: item.description ? item.description : null,
      id: id
    };
  }
}
