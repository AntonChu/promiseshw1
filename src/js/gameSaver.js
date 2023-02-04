import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read().then(result => { // eslint-disable-line
      return json(result);
    }).then(result => { // eslint-disable-line
      return result;
    });
  }
}
