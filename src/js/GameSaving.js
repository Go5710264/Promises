export default class GameSaving {
  constructor(objectParameters) {
    this.id = objectParameters.id;
    this.created = objectParameters.created;
    this.userInfo = {
      id: objectParameters.userInfo.id,
      name: objectParameters.userInfo.name,
      level: objectParameters.userInfo.level,
      points: objectParameters.userInfo.points,
    };
  }
}
