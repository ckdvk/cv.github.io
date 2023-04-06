export function fetchTexData(texFilePath, environmentName, fieldsList) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', texFilePath, false);
        xhr.send(null);
        if (xhr.status === 200) {
            // console.log('tex file loaded')
            var jsonItems = [];
            var file = xhr.responseText;
            const codeblocks = file.split(new RegExp('\\\\begin{' + environmentName + '}')).map(block => block.replace(new RegExp('\\\\end{' + environmentName + '}'), '').trim());
            codeblocks.shift(); // remove the first element of the array, which is empty
            // add also the content of the \begin{firstenvironmentName} \end{firstenvironmentName} environment to codeblocks, if it exists
            if (file.includes('\\begin{first' + environmentName + '}')) {
                const codeblocks2 = file.split(new RegExp('\\\\begin{first' + environmentName + '}')).map(block => block.replace(new RegExp('\\\\end{first' + environmentName + '}'), '').trim());
                codeblocks.push(codeblocks2[1]);
            }
            for(let block of codeblocks){
                // Split the LaTeX code into lines
                const lines = block.split('\n').map(line => line.trim());
        
                // Find the start and end line of the environmentName environment
                const startLine = lines.findIndex(line => line === '\\begin{' + environmentName + '}');
                const endLine = lines.findIndex(line => line === '\\end{' + environmentName + '}');
                const fieldsDict = {};
                lines.slice(0, fieldsList.length).map((line, index) => {
                    const trimmedLine = line.replace(/^[^{]*{/, '').replace(/}\s*$/, ''); // Remove the outer braces and trim the line
                    const unescapedLine = trimmedLine.replace(/\\([{}_])/g, '$1'); // Unescape special characters
                    fieldsDict[fieldsList[index]] = unescapedLine;
                });

                // Create JSON object
                const item = fieldsDict;
                // Add the JSON object to the array
                jsonItems.push(item);
            }
            return jsonItems;
        } else {
            throw new Error(xhr.status);
        }
    }

    // export function fetch




export function getResearchItem(path, researchItem) {
    // picks the research item from the tex file in the path
    // and returns a dictionary with the fields

    // items usually have the following structure:
    //  @article{researchItem, 
    // year = {2022}, 
    // title = {Quantitative John–Nirenberg inequalities at different scales}, 
    // author = {Martínez-Perales, Javier C and Rela, Ezequiel and Rivera-Ríos, Israel P}, 
    // journal = {Revista Matemática Complutense}, 
    // issn = {1139-1138}, 
    // doi = {10.1007/s13163-022-00427-0}, 
    // abstract = {}, 
    // pages = {1--35}
    // }

    // I just need the fields year, author, title, and journal 

    // path: path to the tex file
    // researchItem: name of the research item
    // returns: dictionary with the fields
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, false);
    xhr.send(null);
    if (xhr.status === 200) {
        // console.log('tex file loaded, getting research item')
        var file = xhr.responseText;
        var listOfItems = file.split('@')
        // console.log('listOfItems', listOfItems)
        // search for the item called researchItem
        // console.log('researchItem', researchItem)
        var selectedItem = listOfItems.filter(item => item.includes(String(researchItem)))[0]
        // console.log('selectedItem', selectedItem)
        // get the fields, which are the elments, separated by commas, of the list, from the second element on
        var fields = selectedItem.split('\n')
        // create the dictionary
        var items = {}
        items['name'] = researchItem
        for (var field of fields){
            // console.log('field', field)
            if (field.includes('=')){ 

                // just catch = sign if it is not inside a curly bracket
                // if (field.includes('{') && field.includes('}')){
                //     var equalSign = field.indexOf('=')
                var key = field.split('=')[0].toLowerCase().trim()
                // console.log('key '+key)
                // value is the union of the remaining elements of field.split('=')
                var value = field.split('=').slice(1).join('=').trim().replaceAll(/\\href{([^}]*)}{([^}]*)}/g, '<a style="text-decoration: none; " href="$1" >$2</a>').replace('},','}');
                // var value = field.split('=')[1].trim().replace('},','}')
                // console.log(['year', 'title', 'author', 'journal', 'volume', 'number'].includes(key.toString()))
                if (['year', 'title', 'author', 'journal', 'volume', 'number'].includes(key.toString())){
                    // console.log('value in list', value)
                    items[key] = value
                }
                
            }
        }
    return items

    } else {
        console.log('Error loading tex file')
        throw new Error(xhr.status);
    }
}


export function fetchResearchItems(pathCVResearch,pathReferences) {
    var dictItems = {}
    var xhr = new XMLHttpRequest();
    xhr.open('GET', pathCVResearch, false);
    xhr.send(null);
    if (xhr.status === 200) {
        // console.log('tex file loaded, getting research items')
        var file = xhr.responseText;
        // split into lines
        var lines = file.split('\n').map(line => line.trim())
        // const lines = block.split('\n').map(line => line.trim());
        // get the lines that start with \item \fullcite{, but not with %\item \fullcite{
        var listOfItems = lines.filter(line => line.includes('\\item \\fullcite{') && !line.includes('%\\item \\fullcite{'))

        // get the names of the items
        var listOfItemsNames = listOfItems.map(item => item.split('{')[1].split('}')[0])
        // get the items dictionaries
        for (var item of listOfItemsNames){
            // console.log('getting item ' + item)
            dictItems[item] = getResearchItem(pathReferences, item)
        }
        return dictItems
    }
    else {
        console.log('error loading tex file')
        throw new Error(xhr.status);
    }
}



export function fetchSpacedTex(texPath) {

    // fetches the tex file and returns a string with the spaces between the words

    var xhr = new XMLHttpRequest();
    xhr.open('GET', texPath, false);
    xhr.send(null);
    console.log('trying to load tex file', texPath)
    if (xhr.status === 200) {
        var file = xhr.responseText;
        console.log('tex file loaded, getting spaced tex', file)
        
        // split by \spaced
        var spaced = file.split('\\spaced')
        // removes the \, which is present in the last member of the above list 
        spaced = spaced.map(item => item.replaceAll('\\LaTeX', 'LaTeX'))
        spaced[spaced.length-1] = spaced[spaced.length-1].split('\\,')[0]
        spaced = spaced.map(item => ' '+item.trim())

        console.log('spaced', spaced)
        // for all items, replace \LaTeX by LaTeX


        return spaced
    }
    else {
        console.log('error loading tex file')
        throw new Error(xhr.status);
    }

}