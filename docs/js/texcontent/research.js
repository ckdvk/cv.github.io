import { getResearchItem, fetchResearchItems } from "../utils/fetch.js";
import { renderResearchInfo } from "../utils/render.js";




const pathCVResearch = '../../../items/research.tex'

const pathReferences = '../../../References.bib'

const researchItems = fetchResearchItems(pathCVResearch,pathReferences)

// console.log('researchItems: ', researchItems)

var html = ''
// for ( var item in Object.entries(researchItems)){ 
//     html = html + renderResearchInfo(item)
// }
for (var item of Object.entries(researchItems)){
    html = html + renderResearchInfo(item[1])
}

// console.log('html: ',html)
document.querySelector('#researchItems').innerHTML = html