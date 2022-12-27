# Promises

[![Build status](https://ci.appveyor.com/api/projects/status/1qm6e6q0s4m36cbm?svg=true)](https://ci.appveyor.com/project/Go5710264/promises)

Реализован класс `GameSavingLoader` с методом `load`, который загружает данные (с помощью функции `read`), парсит их (с помощью функции `json`) и возвращает объект типа:
```javascript
{
  "id": <number>, // id сохранения
  "created": <timestamp>, // timestamp создания
  "userInfo": {
    "id": <number>, // user id
    "name": <string>, // user name
    "level": <number>, // user level
    "points": <number> // user points
  }
}
```