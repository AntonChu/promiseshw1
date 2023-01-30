import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static load() {
    const data = read();
    .then (() => {
      const value = json(data);
      return value;
    })
  }
}
