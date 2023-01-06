import read from './read';
import json from './json';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((resp) => JSON.parse(resp))
      .then((objData) => new GameSaving(objData));
  }
}
