import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  const GameSaving = JSON.parse(saving);
  return GameSaving;
}, (error) => {
  console.log(error);
});
