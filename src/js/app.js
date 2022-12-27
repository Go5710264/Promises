import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  const GameSaving = JSON.parse(saving);
}, (error) => {
  console.log(error);
});
