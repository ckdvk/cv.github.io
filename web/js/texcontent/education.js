
// imports the fetch library from the utils folder
import { fetchTexData } from '../utils/fetch.js';

        const texFilePath = '../../../items/education.tex'
        const environmentName = 'education'
        const fieldsList = ['position', 'institution', 'startDate', 'endDate']
        const data = fetchTexData(texFilePath, environmentName, fieldsList) 
        // converts data into an iterable Array
        // data = Object.keys(data).map(key => data[key]);
// transforms the above into a list of dictionaries

        // console.log(data)


        // const data = jsonEmployments
        // fs.writeFileSync(path.join(__dirname, 'employment.json'), json);
        // Create a variable to store the HTML string
        let html = '';
        // Loop through the data and create the HTML structure for each item
        var counter = 0;
        var lendata = data.length;

        const itemProperties = Object.keys(data[0])
        // console.log(itemProperties)

        // console.log(lendata)

        data.forEach(item =>{
                // console.log(item)
                counter = counter + 1;
                item['position'] = item['position'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: #FFFFFF">$2</a>');
                item['institution'] = item['institution'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: #808080;">$2</a>');
                // item['description'] = item['description'].replace(/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" style="text-decoration: none; color: #808080;">$2</a>');
    

                // writes spanish accents as they are, that is, replace \'{a} with á and so on 
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
                    // 'n': 'ñ',
                    // 'N': 'Ñ'
                }


                for (let property of itemProperties) {
                    for (let letter of  Object.keys(lettersAccentedDict)) {
                        item[property] = item[property].replaceAll( '\\\'' + letter , lettersAccentedDict[letter])
                    }
                }

    
                // html = html + '<div class="itemtitle" style="color: white;">'+'<span style="color: white;font-size: 15pt;">"</span>'+
                // item['position'].toUpperCase()+' <span style="color:#808080">at '+item['institution']+'</span>, from '+item['startDate']+' to '+item['endDate']+'.<span style="color: white;font-size: 15pt;">"</span></div>'+
                //     '<div class="itemcontent"> </div>'
                //     if (counter < lendata) {
                //         html = html + '<span style="color: white;font-size: 15pt;">,</span>'
                //     }
                //     else {
                //         html = html + '<span style="color: white;font-size: 15pt;"></span>'
                //     }
    
                //     html = html + '</div>';



                    if (counter < lendata) {
                        html = html + '<div class="itemtitle" style="color: white;">'+'<span style="color: white;font-size: 15pt;">"</span>'+
                        item['position'].toUpperCase()+' <span style="color:#808080">at '+item['institution']+'</span>, from '+item['startDate']+' to '+item['endDate']+'.<span style="color: white;font-size: 15pt;">",</span></div>'+
                            '<div class="itemcontent"> </div>'
                    }
                    else {
                        html = html + '<div class="itemtitle" style="color: white;">'+'<span style="color: white;font-size: 15pt;">"</span>'+
                        item['position'].toUpperCase()+' <span style="color:#808080">at '+item['institution']+'</span>, from '+item['startDate']+' to '+item['endDate']+'.<span style="color: white;font-size: 15pt;">"</span></div>'+
                            '<div class="itemcontent"> </div>'
                    }


                    
        })
        ;

        // console.log(html)
        // Insert the HTML string into the DOM
        document.querySelector('#educationItems').innerHTML = html;
        // your code for parsing the file goes here
    // });
    
