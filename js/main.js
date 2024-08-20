'use strict';
let categorySets = {
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
let currentGridId = 1;
let gridSize = 3;
console.log('Drew');
const $topCategories = document.querySelectorAll('.top-cat');
if (!$topCategories) throw new Error('.top-cat query failed!');
const $leftCategories = document.querySelectorAll('.left-cat');
if (!$leftCategories) throw new Error('left-cat query failed!');
function renderGridCategories(gridID) {
  for (let i = 0; i < gridSize; i++) {
    const imgContainerTop = document.createElement('div');
    imgContainerTop.classList.add('w-1/2', 'h-1/2', 'flex', 'justify-center');
    const catImgTop = document.createElement('img');
    catImgTop.setAttribute(
      'src',
      categorySets[gridID].topCategories[i].imgPath,
    );
    imgContainerTop.appendChild(catImgTop);
    $topCategories[i].appendChild(imgContainerTop);
    const catText = document.createElement('h1');
    catText.textContent = categorySets[gridID].topCategories[i].text;
    $topCategories[i].appendChild(catText);
    const imgContainerLeft = document.createElement('div');
    imgContainerLeft.classList.add('w-1/2', 'h-1/2', 'flex', 'justify-center');
    const catImgLeft = document.createElement('img');
    catImgLeft.setAttribute(
      'src',
      categorySets[gridID].leftCategories[i].imgPath,
    );
    imgContainerLeft.appendChild(catImgLeft);
    $leftCategories[i].appendChild(imgContainerLeft);
    const catTextLeft = document.createElement('h1');
    catTextLeft.textContent = categorySets[gridID].leftCategories[i].text;
    $leftCategories[i].appendChild(catTextLeft);
  }
} //function that renders Grid Categories based on what number Grid
renderGridCategories(currentGridId);
const $gridContainer = document.querySelector('.grid-container');
if (!$gridContainer) throw new Error('.grid-container query failed!');
const $modal = document.querySelector('.modal');
if (!$modal) throw new Error('.modal query failed!');
const $input = document.querySelector('input');
if (!$input) throw new Error('input query failed');
$gridContainer.addEventListener('click', function (event) {
  const element = event.target;
  console.log(element.classList);
  if (element.classList.contains('game-square')) {
    console.log('game sq!');
    $modal.classList.remove('hidden');
    element.classList.add('bg-yellow-500', 'selected-sq');
  }
});
$modal.addEventListener('click', function (event) {
  const element = event.target;
  const $selectedSq = document.querySelector('.selected-sq');
  if (!$selectedSq) throw new Error('.selected-sq query failed!');
  if (element.tagName !== 'BUTTON' && element.tagName !== 'INPUT') {
    $input.value = '';
    $modal.classList.add('hidden');
    $selectedSq.classList.remove('bg-yellow-500');
  }
});
const $form = document.querySelector('form');
if (!$form) throw new Error('form query failed!');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const $selectedSq = document.querySelector('.selected-sq');
  if (!$selectedSq) throw new Error('.selected-sq query failed!');
  let usrInput = $input.value;
  console.log(usrInput);
  let rowCatNdxStr = $selectedSq.getAttribute('id')?.charAt(4);
  let rowCatNdx = parseInt(rowCatNdxStr);
  let rowCatCheckFor =
    categorySets[currentGridId].leftCategories[rowCatNdx].checkFor;
  let rowCatVal = categorySets[currentGridId].leftCategories[rowCatNdx].val;
  let colCatNdxStr = $selectedSq.getAttribute('id')?.charAt(6);
  let colCatNdx = parseInt(colCatNdxStr);
  let colCatCheckFor =
    categorySets[currentGridId].topCategories[colCatNdx].checkFor;
  let colCatVal = categorySets[currentGridId].topCategories[colCatNdx].val;
  fetchData(usrInput, rowCatCheckFor, colCatCheckFor, rowCatVal, colCatVal);
  // if ($selectedSq.getAttribute('id')) {
  //   let rowCatNdx: number = parseInt($selectedSq.getAttribute('id')[4]); //leftCat(row) 0-2
  //   let colCatNdx: number = parseInt($selectedSq.getAttribute('id')[6]); //topCat(col) 0-2
  //   let rowCategory: string =
  //     categorySets[currentGridId].leftCategories[rowCatNdx].checkFor;
  //   let rowValue: string | number =
  //     categorySets[currentGridId].leftCategories[rowCatNdx].val;
  //   let colCategory =
  //     categorySets[currentGridId].topCategories[colCatNdx].checkFor;
  //   let colValue: string | number =
  //     categorySets[currentGridId].topCategories[colCatNdx].val;
  //   // if (
  //   //   response[rowCategory] === rowValue &&
  //   //   response[colCategory] === colValue
  //   // ) {
  //   // }
  // }
});
async function fetchData(
  usrInput,
  rowCategory,
  colCategory,
  rowCatTarg,
  colCatTarg,
) {
  try {
    let apiUrl =
      'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' +
      usrInput.replace(/\s/g, '%20');
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const card = await response.json();
    // const cardData: data = card.data[0];
    console.log(card);
    console.log(rowCategory);
    console.log(rowCatTarg);
    console.log(colCategory);
    console.log(colCatTarg);
    // if(rowCategory in cardData){
    // console.log(cardData[rowCategory]);
    // }
    // if (card.data[0][rowCategory] === rowCatTarg) {
    //   console.log('row category correct');
    // }
  } catch (error) {
    console.log('Error: ', error);
  }
}
