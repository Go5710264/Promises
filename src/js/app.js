import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  const GameSaving = saving;
  return GameSaving;
}, (error) => {
  console.log(error);
});
