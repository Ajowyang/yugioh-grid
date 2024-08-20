interface Category {
  checkFor: string;
  val: string | number;
  imgPath: string;
  text: string;
}

interface CategorySet {
  topCategories: Category[];
  leftCategories: Category[];
}

const categorySets: Record<string, CategorySet> = {
  '1': {
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
  '2': {
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

const currentGridId = 1;
const gridSize = 3;

console.log('Drew');

const $topCategories = document.querySelectorAll(
  '.top-cat',
) as NodeListOf<HTMLDivElement>;
if (!$topCategories) throw new Error('.top-cat query failed!');
const $leftCategories = document.querySelectorAll(
  '.left-cat',
) as NodeListOf<HTMLDivElement>;
if (!$leftCategories) throw new Error('left-cat query failed!');

function renderGridCategories(gridID: number): void {
  for (let i = 0; i < gridSize; i++) {
    const imgContainerTop: HTMLDivElement = document.createElement('div');
    imgContainerTop.classList.add('w-1/2', 'h-1/2', 'flex', 'justify-center');
    const catImgTop: HTMLImageElement = document.createElement('img');
    catImgTop.setAttribute(
      'src',
      categorySets[gridID].topCategories[i].imgPath,
    );
    imgContainerTop.appendChild(catImgTop);
    $topCategories[i].appendChild(imgContainerTop);
    const catText: HTMLHeadingElement = document.createElement('h1');
    catText.textContent = categorySets[gridID].topCategories[i].text;
    $topCategories[i].appendChild(catText);

    const imgContainerLeft: HTMLDivElement = document.createElement('div');
    imgContainerLeft.classList.add('w-1/2', 'h-1/2', 'flex', 'justify-center');
    const catImgLeft: HTMLImageElement = document.createElement('img');
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
} // function that renders Grid Categories based on what number Grid

renderGridCategories(currentGridId);

const $gridContainer = document.querySelector(
  '.grid-container',
) as HTMLDivElement;
if (!$gridContainer) throw new Error('.grid-container query failed!');
const $modal = document.querySelector('.modal') as HTMLDivElement;
if (!$modal) throw new Error('.modal query failed!');
const $input = document.querySelector('input') as HTMLInputElement;
if (!$input) throw new Error('input query failed');

$gridContainer.addEventListener('click', function (event: Event) {
  const element = event.target as HTMLElement;
  console.log(element.classList);
  if (element.classList.contains('game-square')) {
    console.log('game sq!');
    $modal.classList.remove('hidden');
    element.classList.add('bg-yellow-500', 'selected-sq');
  }
});

$modal.addEventListener('click', function (event: Event) {
  const element = event.target as HTMLElement;
  const $selectedSq = document.querySelector('.selected-sq') as HTMLDivElement;
  if (!$selectedSq) throw new Error('.selected-sq query failed!');

  if (element.tagName !== 'BUTTON' && element.tagName !== 'INPUT') {
    $input.value = '';
    $modal.classList.add('hidden');
    $selectedSq.classList.remove('bg-yellow-500');
  }
});

const $form = document.querySelector('form') as HTMLFormElement;
if (!$form) throw new Error('form query failed!');

$form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  const $selectedSq = document.querySelector('.selected-sq') as HTMLDivElement;
  if (!$selectedSq) throw new Error('.selected-sq query failed!');
  const usrInput: string = $input.value;
  console.log(usrInput);

  const rowCatNdxStr: string = $selectedSq
    .getAttribute('id')
    ?.charAt(4) as string;
  const rowCatNdx: number = parseInt(rowCatNdxStr);
  const rowCatCheckFor: string =
    categorySets[currentGridId].leftCategories[rowCatNdx].checkFor;
  const rowCatVal: number | string =
    categorySets[currentGridId].leftCategories[rowCatNdx].val;

  const colCatNdxStr: string = $selectedSq
    .getAttribute('id')
    ?.charAt(6) as string;
  const colCatNdx: number = parseInt(colCatNdxStr);
  const colCatCheckFor: string =
    categorySets[currentGridId].topCategories[colCatNdx].checkFor;
  const colCatVal: number | string =
    categorySets[currentGridId].topCategories[colCatNdx].val;

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

// function submitUsrInput(){
//   console.log($input.value)
// }
interface miscInfo {
  downvotes: number;
  formats: string[];
  has_effect: number;
  konami_id: number;
  md_rarity: string;
  ocg_date: string;
  tcg_date: string;
  treated_as: string;
  upvotes: number;
  views: number;
  viewsweek: number;
}

interface imageURLObj {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

interface pricesObj {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

interface setsObj {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

interface data {
  archetype: string;
  atk: number;
  attribute: string;
  card_images: imageURLObj[];
  card_prices: pricesObj[];
  card_sets: setsObj[];
  desc: string;
  frameType: string;
  id: number;
  linkmarkers: string[];
  linkval: number;
  misc_info: miscInfo[];
  name: string;
  race: string;
  type: string;
  ygoprodeck_url: string;
}
interface Card {
  data: data[];
}

async function fetchData(
  usrInput: string,
  rowCategory: string,
  colCategory: string,
  rowCatTarg: number | string,
  colCatTarg: number | string,
): Promise<void> {
  try {
    const apiUrl: string =
      'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' +
      usrInput.replace(/\s/g, '%20');
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const card = (await response.json()) as Card;
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
