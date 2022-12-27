import read from './read';
import json from './json';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then(
          (response) => resolve(json(response)),
        );
    });
  }
}
