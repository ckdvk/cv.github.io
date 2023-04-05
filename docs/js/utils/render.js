import { getResearchItem } from './fetch.js'



const lettersAccentedDict = {
    'a': 'á',
    'e': 'é',
    'i': 'í',
    'o': 'ó',
    'u': 'ú',
    'A': 'Á',
    'E': 'É',
    'I': 'Í',
    'O': 'Ó',
    'U': 'Ú',
    // 'n': 'ñ',
    // 'N': 'Ñ'
}

const strangeLettersAccentedDict = {
    'a': 'ä',
    'e': 'ë',
    'i': 'ï',
    'o': 'ö',
    'u': 'ü',
    'A': 'Ä',
    'E': 'Ë',
    'I': 'Ï',
    'O': 'Ö',
    'U': 'Ü',
}


export function normalize(text) {
    // removes accents, {}, etc
    // text: string
    // returns: string

    var normalizedText = text
    normalizedText = normalizedText.replaceAll('{', '').replaceAll('}', '')
    for (var letter in lettersAccentedDict) {
        normalizedText = normalizedText.replaceAll('\\\'' + letter , lettersAccentedDict[letter])
    }
    for (var letter in strangeLettersAccentedDict) {
        normalizedText = normalizedText.replaceAll('\\\"' + letter , strangeLettersAccentedDict[letter])
    }


    normalizedText = normalizedText.replace('--', '–')
    return normalizedText
}

export function renderResearchInfo(researchItem) {

    // renders the research item in the html page
    // researchItem: a dictionary with keys among the following: name, year, author, title, and journal 
    // returns a string with the html code to be inserted in the html page. Usual structure of a research item:
    // Ritva Hurri-Syrj\"anen et al. “On the BBM-
    // phenomenon in fractional Poincar\'e-Sobolev in-
    // equalities with weights”. In: Interna-
    // tional Mathematics Research Notices (Sept. 2022)

    // normalize: remove accents, {}, etc:


    for (var key in researchItem) {
        researchItem[key] = normalize(researchItem[key])
    }

    var html = ''
    html = html + '<li class="researchItem">'+
    '<span style= "color: #808080;">'+
    researchItem['author']+
    '. </span><span  style= "color: #FFFFFF; font-weight:bold">“'+
        researchItem['title']+
    '”</span>. In: '+
    // italic
    '<span style= "font-style:italic">'+
    researchItem['journal']+
    '</span> ('+researchItem['year']+
    ').</li> <br>\n'

    return html
}