import { fetchTexData } from '../utils/fetch.js';

const texFilePath = 'items/employment.tex';
const environmentName = 'employment';
const fieldsList = ['position', 'institution', 'startDate', 'endDate', 'description'];
const data = fetchTexData(texFilePath, environmentName, fieldsList);

let html = '';

data.forEach((item, index) => {
  // Reemplazar \href por enlaces HTML
  const clean = str =>
    str.replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: var(--strong);">$2</a>');

  const position = clean(item['position']);
  const institution = clean(item['institution']);
  const description = clean(item['description']);
  const dates = `from ${item['startDate']} to ${item['endDate']}`;

  html += `
    <div class="employment-item" style="margin-bottom: 1.5rem;">
      <div class="employment-header" style="font-size: 1rem; color: white;">
        <span class="brillante"
          style="color: var(--green); font-weight: bold; cursor: pointer;" 
          onclick="document.getElementById('desc-${index}').classList.toggle('visible')"
        >

		<span style="color: var(--green); font-size: 1.2rem;">//</span>
          ${position}
        </span>
        <div class="brillante" style="cursor: default;"> at ${institution}, <b style="color:var(--green);">${dates}</b></div>
      </div>
      <div 
        class="employment-description" 
        id="desc-${index}" 
        style="margin-top: 0.5rem; color: #ccc;"
      >
        ${description}
      </div>
    </div>
  `;

  
});

document.querySelector('#employmentItems').innerHTML = html;
