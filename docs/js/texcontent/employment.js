
import { fetchTexData } from '../utils/fetch.js';
 
        const texFilePath = 'items/employment.tex'
        const environmentName = 'employment'
        const fieldsList = ['position', 'institution', 'startDate', 'endDate', 'description']
        const data = fetchTexData(texFilePath, environmentName, fieldsList)

        let html = '';
        var counter = 0;
        var lendata = data.length;

        data.forEach(item =>{
                counter = counter + 1;
                item['position'] = item['position'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: var(--strong)">$2</a>');
                item['institution'] = item['institution'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: var(--strong);">$2</a>');
                item['description'] = item['description'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: #808080;">$2</a>');

                html = html + '<div class="itemtitle" style="color: --strong;">'+'<span style="color: --strong;font-size: 15pt;">"</span>'+
                item['position'].toUpperCase()+' at '+item['institution']+', from '+item['startDate']+' to '+item['endDate']+'.</div>'+
                    '<div class="itemcontent">'+
                    item['description']
    
                    if (counter < lendata) {
                        html = html + '<span style="color: var(--strong);font-size: 15pt;">",</span>'
                    }
                    else {
                        html = html + '<span style="color: var(--strong);font-size: 15pt;">"</span>'
                    }
    
                    html = html + '</div>';
                    
        })
        ;


        document.querySelector('#employmentItems').innerHTML = html;
    
