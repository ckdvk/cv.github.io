import { fetchSpacedTex } from "../utils/fetch.js";

const techFamiliarSkillsPath = "../../../items/tech_familiarskills.tex";
const techProficientSkills =  "../../../items/tech_proficientskills.tex";
const softStrongSkills =  "../../../items/soft_strongskills.tex";
const softBasicSkills =  "../../../items/soft_basicskills.tex";

console.log('executing skills.js')


var skillsDict = {}
var technicalSkills = {}
var softSkills = {}

technicalSkills['Familiar with'] = fetchSpacedTex(techFamiliarSkillsPath)
technicalSkills['Proficient with'] = fetchSpacedTex(techProficientSkills)
softSkills['Strong'] = fetchSpacedTex(softStrongSkills)
softSkills['Basic knowledge'] = fetchSpacedTex(softBasicSkills)

skillsDict['Technical skills'] = technicalSkills
skillsDict['Soft skills'] = softSkills

let html = '';
var counter = 0;
var counterlist = 0;


for (let skillType of Object.keys(skillsDict)) {
    counter += 1
    counterlist = 0
    html += `
    <div class="skill-type">
        <span style="font-size: 13pt;">"${skillType}":{</span>
        `
    // </div>
    // `

    html += `<div class="skill-level">`
    for (let skillLevel of Object.keys(skillsDict[skillType])) {
        counterlist += 1

        if(counterlist < Object.keys(skillsDict[skillType]).length) {
        html += `
        <div>
            "${skillLevel}": <span style="color:#808080;">[
                <div class="skills-list">
                ${skillsDict[skillType][skillLevel]}</div>
                ],</span>
        </div>
        `
        } else {
        html += `
        <div>
            "${skillLevel}": <span style="color:#808080;">[
                <div class="skills-list">
                ${skillsDict[skillType][skillLevel]}</div>
                ]</span> 
        </div>
        `
        }



        }
        html += `</div>`


        if (counter < Object.keys(skillsDict).length ) {
        html += `
        <div class="skill-type">
            <span style="font-size: 13pt;">}, </span>
        </div>
        `   
        } else {
        html += `
        <div class="skill-type">
            <span style="font-size: 13pt;">}</span>
        </div>
        `
        }
        html += `</div>`
    }


    // console.log('SKILLS HTML', html)

    document.querySelector('#skillsItems').innerHTML = html;

