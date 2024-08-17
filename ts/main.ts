
interface Category{
  checkFor: string;
  val: string|number;
}

interface CategorySet{
  topCategories: Category[]
  leftCategories: Category[]
}

let categorySets : Record<string, CategorySet> =
{
    '1':{
      topCategories: [{checkFor: 'level', val: 4}, {checkFor: 'atk', val: 1800 }, {checkFor: 'def', val: 2000} ],
      leftCategories:[{checkFor: 'attribute', val: 'WATER'},{checkFor: 'frameType', val: 'normal'},{checkFor: 'race', val: 'Warrior'}]
      },
    '2':{
      topCategories:[{checkFor:'race', val:'Spellcaster'},{checkFor:'ATK', val:1800},{checkFor:'atk', val:2800}],
      leftCategories:[{checkFor:'attribute', val:'FIRE'},{checkFor:'level', val:7},{checkFor:'frameType', val:'synchro'}]
      }
}

let currentGridId = 1
let gridSize = 3

console.log("Drew")

const $topCategories = document.querySelectorAll('.top-cat') as NodeListOf<HTMLDivElement>
if(!$topCategories) throw new Error('.top-cat query failed!')

function renderGridCategories(gridID: number){
    for(let i = 0; i < gridSize; i++){
      console.log('yes')
      const catText : HTMLHeadingElement= document.createElement('h1')
      catText.textContent = categorySets[gridID].topCategories[i].checkFor
      console.log(catText.textContent)
      $topCategories[i].prepend(catText)
    }
   //appendchild text = topCategories[i].checkFor
}

renderGridCategories(currentGridId)
