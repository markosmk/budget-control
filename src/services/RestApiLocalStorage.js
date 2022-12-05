'use strict';

const NAME_DB = 'accounts';

export class RestApiLocalStorage {
  currentItems = [];

  constructor() {
    this.getData();
  }

  getData() {
    const DB = window.localStorage.getItem(NAME_DB);
    if (!DB || DB !== 'undefined') {
      this.currentItems = JSON.parse(DB);
    } else {
      this.currentItems = [];
      window.localStorage.setItem(NAME_DB, JSON.stringify(this.currentItems));
    }
  }

  saveData(data) {
    const newData = data ? [...this.currentItems, data] : this.currentItems;
    window.localStorage.setItem(NAME_DB, JSON.stringify(newData));
    this.getData();
  }

  getAll() {
    return this.currentItems;
  }

  get(id) {
    return this.currentItems.find((item) => item.id === id);
  }

  post(data) {
    this.saveData(data);
    return this.currentItems;
  }

  put(id, data) {
    this.currentItems = this.currentItems.map((item) => {
      if (item.id === id) {
        item = data;
      }
      return item;
    });
    this.saveData();
    return this.currentItems;
  }

  destroy(id) {
    this.currentItems = this.currentItems.filter((item) => item.id !== id);
    this.saveData();
    return this.currentItems;
  }
}

const instance = new RestApiLocalStorage();

export default instance;
