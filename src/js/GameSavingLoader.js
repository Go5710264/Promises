import read from './read';
import json from './json';

export default class GameSavingLoader {
  static load() {
    read()
      .then(
        (response) => {
          json(response)
            .then(
              (resp) => {
                const GameSaving = JSON.parse(resp);
                return GameSaving;
              },
            );
        },
      );
  }
}
