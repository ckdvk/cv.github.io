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


    for (var key in researchItem) {
        researchItem[key] = normalize(researchItem[key])
    }
    console.log('value '+researchItem['journal'])

    var html = ''
    html = html + '<li class="researchItem">'+
    '<span style= "color: #808080;">'+
    researchItem['author']+
    '. </span><span  style= "color: var(--strong); font-weight:bold">“'+
        researchItem['title']+
    '”</span>. In: '+
    // italic
    '<span style= "font-style:italic; color: var(--strong); text-decoration: none" >'+
    researchItem['journal']+
    '</span> ('+researchItem['year']+
    ').</li> <br>\n'

    return html
}