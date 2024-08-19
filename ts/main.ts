
interface Category{
  checkFor: string;
  val: string|number;
  imgPath: string;
  text: string
}

interface CategorySet{
  topCategories: Category[]
  leftCategories: Category[]
}

let categorySets : Record<string, CategorySet> =
{
    '1':{
      topCategories: [{checkFor: 'level', val: 4, imgPath:'./images/levelstar.png', text: 'Level 4'}, {checkFor: 'atk', val: 1800 , imgPath:'./images/ATK.png', text: '1800 ATK'}, {checkFor: 'def', val: 2500, imgPath:'./images/DEF.png', text: '2500 DEF'} ],
      leftCategories:[{checkFor: 'attribute', val: 'WATER', imgPath:'./images/WATER.png', text: 'WATER'},{checkFor: 'frameType', val: 'normal', imgPath:'./images/normal.png', text: 'Normal'},{checkFor: 'race', val: 'Warrior', imgPath:'./images/warrior.png', text: 'Warrior'}]
      },
    '2':{
      topCategories:[{checkFor:'race', val:'Spellcaster', imgPath:'./images/spellcaster.png', text: 'Spellcaster'},{checkFor:'ATK', val:1800, imgPath:'./images', text: '1800 ATK'},{checkFor:'atk', val:2800, imgPath:'./images/ATK.png', text: '2800 ATK'}],
      leftCategories:[{checkFor:'attribute', val:'FIRE', imgPath:'./images/FIRE.png', text: 'FIRE'},{checkFor:'level', val:7, imgPath:'./images', text: 'Level 7'},{checkFor:'frameType', val:'synchro', imgPath:'./images/synchro.png', text: 'Synchro'}]
      }
}

let currentGridId = 1
let gridSize = 3

console.log("Drew")

const $topCategories = document.querySelectorAll('.top-cat') as NodeListOf<HTMLDivElement>
if(!$topCategories) throw new Error('.top-cat query failed!')
const $leftCategories = document.querySelectorAll('.left-cat') as NodeListOf<HTMLDivElement>
if(!$leftCategories) throw new Error('left-cat query failed!')

function renderGridCategories(gridID: number){
    for(let i = 0; i < gridSize; i++){

      const imgContainerTop:HTMLDivElement = document.createElement('div')
      imgContainerTop.classList.add('w-1/2','h-1/2', 'flex', 'justify-center')
      const catImgTop :HTMLImageElement = document.createElement('img')
      catImgTop.setAttribute('src', categorySets[gridID].topCategories[i].imgPath)
      imgContainerTop.appendChild(catImgTop)
      $topCategories[i].appendChild(imgContainerTop)
      const catText : HTMLHeadingElement= document.createElement('h1')
      catText.textContent = categorySets[gridID].topCategories[i].text
      $topCategories[i].appendChild(catText)

      const imgContainerLeft :HTMLDivElement = document.createElement('div')
      imgContainerLeft.classList.add('w-1/2', 'h-1/2', 'flex', 'justify-center')
      const catImgLeft:HTMLImageElement = document.createElement('img')
      catImgLeft.setAttribute('src', categorySets[gridID].leftCategories[i].imgPath)
      imgContainerLeft.appendChild(catImgLeft)
      $leftCategories[i].appendChild(imgContainerLeft)
      const catTextLeft = document.createElement('h1')
      catTextLeft.textContent = categorySets[gridID].leftCategories[i].text
      $leftCategories[i].appendChild(catTextLeft)
    }

}//function that renders Grid Categories based on what number Grid

renderGridCategories(currentGridId)


const $gridContainer = document.querySelector('.grid-container') as HTMLDivElement
if(!$gridContainer) throw new Error('.grid-container query failed!');
const $modal = document.querySelector('.modal') as HTMLDivElement
if(!$modal) throw new Error('.modal query failed!');

$gridContainer.addEventListener('click', function(event:Event){
  const element = event.target as HTMLElement
  console.log(element.classList)
  if(element.classList.contains('game-square')){
    console.log('game sq!')
    $modal.classList.remove('hidden')
  }

})
