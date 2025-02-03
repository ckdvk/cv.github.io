import { getResearchItem, fetchResearchItems } from "../utils/fetch.js";
import { renderResearchInfo } from "../utils/render.js";




const pathCVResearch = 'items/research.tex'

const pathReferences = 'References.bib'

const researchItems = fetchResearchItems(pathCVResearch,pathReferences)


var html = ''

for (var item of Object.entries(researchItems)){
    html = html + renderResearchInfo(item[1])
}

document.querySelector('#researchItems').innerHTML = html