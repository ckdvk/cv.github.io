
// imports the fetch library from the utils folder
import { fetchTexData } from '../utils/fetch.js';

        const texFilePath = 'items/education.tex'
        const environmentName = 'education'
        const fieldsList = ['position', 'institution', 'startDate', 'endDate']
        const data = fetchTexData(texFilePath, environmentName, fieldsList) 


        let html = '';
        var counter = 0;
        var lendata = data.length;

        const itemProperties = Object.keys(data[0])

        data.forEach(item =>{
                counter = counter + 1;
                item['position'] = item['position'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: var(--strong)">$2</a>');
                item['institution'] = item['institution'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: #808080;">$2</a>');
              
                function replaceAll(str, find, replace) {
                    return str.replace(new RegExp(find, 'g'), replace);
                }

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


                for (let property of itemProperties) {
                    for (let letter of  Object.keys(lettersAccentedDict)) {
                        item[property] = item[property].replaceAll( '\\\'' + letter , lettersAccentedDict[letter])
                    }
                }



                    if (counter < lendata) {
                        html = html + '<div class="itemtitle" style="color: var(--strong);">'+'<span style="color: var(--strong);font-size: 15pt;">"</span>'+
                        item['position'].toUpperCase()+' <span style="color:#808080">at '+item['institution']+'</span>, from '+item['startDate']+' to '+item['endDate']+'.<span style="color: var(--strong);font-size: 15pt;">",</span></div>'+
                            '<div class="itemcontent"> </div>'
                    }
                    else {
                        html = html + '<div class="itemtitle" style="color: var(--strong);">'+'<span style="color: var(--strong);font-size: 15pt;">"</span>'+
                        item['position'].toUpperCase()+' <span style="color:#808080">at '+item['institution']+'</span>, from '+item['startDate']+' to '+item['endDate']+'.<span style="color: var(--strong);font-size: 15pt;">"</span></div>'+
                            '<div class="itemcontent"> </div>'
                    }


                    
        })
        ;

        document.querySelector('#educationItems').innerHTML = html;
