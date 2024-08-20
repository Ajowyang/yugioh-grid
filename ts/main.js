var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var categorySets = {
  1: {
    topCategories: [
      {
        checkFor: 'level',
        val: 4,
        imgPath: './images/levelstar.png',
        text: 'Level 4',
      },
      {
        checkFor: 'atk',
        val: 1800,
        imgPath: './images/ATK.png',
        text: '1800 ATK',
      },
      {
        checkFor: 'def',
        val: 2500,
        imgPath: './images/DEF.png',
        text: '2500 DEF',
      },
    ],
    leftCategories: [
      {
        checkFor: 'attribute',
        val: 'WATER',
        imgPath: './images/WATER.png',
        text: 'WATER',
      },
      {
        checkFor: 'frameType',
        val: 'normal',
        imgPath: './images/normal.png',
        text: 'Normal',
      },
      {
        checkFor: 'race',
        val: 'Warrior',
        imgPath: './images/warrior.png',
        text: 'Warrior',
      },
    ],
  },
  2: {
    topCategories: [
      {
        checkFor: 'race',
        val: 'Spellcaster',
        imgPath: './images/spellcaster.png',
        text: 'Spellcaster',
      },
      { checkFor: 'ATK', val: 1800, imgPath: './images', text: '1800 ATK' },
      {
        checkFor: 'atk',
        val: 2800,
        imgPath: './images/ATK.png',
        text: '2800 ATK',
      },
    ],
    leftCategories: [
      {
        checkFor: 'attribute',
        val: 'FIRE',
        imgPath: './images/FIRE.png',
        text: 'FIRE',
      },
      { checkFor: 'level', val: 7, imgPath: './images', text: 'Level 7' },
      {
        checkFor: 'frameType',
        val: 'synchro',
        imgPath: './images/synchro.png',
        text: 'Synchro',
      },
    ],
  },
};
var currentGridId = 1;
var gridSize = 3;
console.log('Drew');
var $topCategories = document.querySelectorAll('.top-cat');
if (!$topCategories) throw new Error('.top-cat query failed!');
var $leftCategories = document.querySelectorAll('.left-cat');
if (!$leftCategories) throw new Error('left-cat query failed!');
function renderGridCategories(gridID) {
  for (var i = 0; i < gridSize; i++) {
    var imgContainerTop = document.createElement('div');
    imgContainerTop.classList.add('w-1/2', 'h-1/2', 'flex', 'justify-center');
    var catImgTop = document.createElement('img');
    catImgTop.setAttribute(
      'src',
      categorySets[gridID].topCategories[i].imgPath,
    );
    imgContainerTop.appendChild(catImgTop);
    $topCategories[i].appendChild(imgContainerTop);
    var catText = document.createElement('h1');
    catText.textContent = categorySets[gridID].topCategories[i].text;
    $topCategories[i].appendChild(catText);
    var imgContainerLeft = document.createElement('div');
    imgContainerLeft.classList.add('w-1/2', 'h-1/2', 'flex', 'justify-center');
    var catImgLeft = document.createElement('img');
    catImgLeft.setAttribute(
      'src',
      categorySets[gridID].leftCategories[i].imgPath,
    );
    imgContainerLeft.appendChild(catImgLeft);
    $leftCategories[i].appendChild(imgContainerLeft);
    var catTextLeft = document.createElement('h1');
    catTextLeft.textContent = categorySets[gridID].leftCategories[i].text;
    $leftCategories[i].appendChild(catTextLeft);
  }
} //function that renders Grid Categories based on what number Grid
renderGridCategories(currentGridId);
var $gridContainer = document.querySelector('.grid-container');
if (!$gridContainer) throw new Error('.grid-container query failed!');
var $modal = document.querySelector('.modal');
if (!$modal) throw new Error('.modal query failed!');
var $input = document.querySelector('input');
if (!$input) throw new Error('input query failed');
$gridContainer.addEventListener('click', function (event) {
  var element = event.target;
  console.log(element.classList);
  if (element.classList.contains('game-square')) {
    console.log('game sq!');
    $modal.classList.remove('hidden');
    element.classList.add('bg-yellow-500', 'selected-sq');
  }
});
$modal.addEventListener('click', function (event) {
  var element = event.target;
  var $selectedSq = document.querySelector('.selected-sq');
  if (!$selectedSq) throw new Error('.selected-sq query failed!');
  if (element.tagName != 'BUTTON' && element.tagName != 'INPUT') {
    $input.value = '';
    $modal.classList.add('hidden');
    $selectedSq.classList.remove('bg-yellow-500');
  }
});
var $form = document.querySelector('form');
if (!$form) throw new Error('form query failed!');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var $selectedSq = document.querySelector('.selected-sq');
  if (!$selectedSq) throw new Error('.selected-sq query failed!');
  var usrInput = $input.value;
  console.log(usrInput);
});
function fetchData(usrInput) {
  return __awaiter(this, void 0, void 0, function () {
    var apiUrl, response, card, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4]);
          apiUrl =
            'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' +
            usrInput.replaceAll(' ', '%20');
          return [4 /*yield*/, fetch(apiUrl)];
        case 1:
          response = _a.sent();
          if (!response.ok) {
            throw new Error('HTTP error! Status: '.concat(response.status));
          }
          return [4 /*yield*/, response.json()];
        case 2:
          card = _a.sent();
          return [3 /*break*/, 4];
        case 3:
          error_1 = _a.sent();
          console.log('Error:', error_1);
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
}
