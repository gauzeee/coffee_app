//const data = require("./db.jsondb.json");

export default class GetService {
  constructor(props) {
    this._apiBase = "db.json";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json().then(res => {
      return res[url];
    });
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
