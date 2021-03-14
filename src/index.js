module.exports = function toReadable (number) {
  let result = '';
  do {
      switch (Math.floor(number / 100)) {
          case 0: switch (Math.floor(number / 10)) {
              case 0: switch (number % 10) {
                  case 0: result += ' zero'; break;
                  case 1: result += ' one'; number -= 1; break;
                  case 2: result += ' two'; number -= 2; break;
                  case 3: result += ' three'; number -= 3; break;
                  case 4: result += ' four'; number -= 4; break;
                  case 5: result += ' five'; number -= 5; break;
                  case 6: result += ' six'; number -= 6; break;
                  case 7: result += ' seven'; number -= 7; break;
                  case 8: result += ' eight'; number -= 8; break;
                  case 9: result += ' nine'; number -= 9; break;
              }; break;
              case 1: switch (number % 10) {
                  case 0: result += ' ten'; number -= 10; break;
                  case 1: result += ' eleven'; number -= 11; break;
                  case 2: result += ' twelve'; number -= 12; break;
                  case 3: result += ' thirteen'; number -= 13; break;
                  case 4: result += ' fourteen'; number -= 14; break;
                  case 5: result += ' fifteen'; number -= 15; break;
                  case 6: result += ' sixteen'; number -= 16; break;
                  case 7: result += ' seventeen'; number -= 17; break;
                  case 8: result += ' eighteen'; number -= 18; break;
                  case 9: result += ' nineteen'; number -= 19; break;
              }; break;
              case 2: result += ' twenty'; number -= 20; break;
              case 3: result += ' thirty'; number -= 30; break;
              case 4: result += ' forty'; number -= 40; break;
              case 5: result += ' fifty'; number -= 50; break;
              case 6: result += ' sixty'; number -= 60; break;
              case 7: result += ' seventy'; number -= 70; break;
              case 8: result += ' eighty'; number -= 80; break;
              case 9: result += ' ninety'; number -= 90; break;
          }; break;
          case 1: result += ' one hundred'; number -= 100; break;
          case 2: result += ' two hundred'; number -= 200; break;
          case 3: result += ' three hundred'; number -= 300; break;
          case 4: result += ' four hundred'; number -= 400; break;
          case 5: result += ' five hundred'; number -= 500; break;
          case 6: result += ' six hundred'; number -= 600; break;
          case 7: result += ' seven hundred'; number -= 700; break;
          case 8: result += ' eight hundred'; number -= 800; break;
          case 9: result += ' nine hundred'; number -= 900; break;
      }
  } while (number !== 0);
  return result.substr(1);
}
