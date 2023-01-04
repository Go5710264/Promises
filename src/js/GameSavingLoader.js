import read from './read';
import json from './json';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((response) => {
          json(response)
            .then((resp) => {
              resolve(JSON.parse(resp));
            });
        });
    });
    // read()
    //   .then(response => {
    //     json(response)
    //       .then(resp => {
    //         return JSON.parse(resp);
    //       })
    //   })
  }
}
