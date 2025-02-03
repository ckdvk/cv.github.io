export function fetchTexData(texFilePath, environmentName, fieldsList) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', texFilePath, false);
        xhr.send(null);
        if (xhr.status === 200) {
            var jsonItems = [];
            var file = xhr.responseText;
            const codeblocks = file.split(new RegExp('\\\\begin{' + environmentName + '}')).map(block => block.replace(new RegExp('\\\\end{' + environmentName + '}'), '').trim());
            codeblocks.shift(); // remove the first element of the array, which is empty
            if (file.includes('\\begin{first' + environmentName + '}')) {
                const codeblocks2 = file.split(new RegExp('\\\\begin{first' + environmentName + '}')).map(block => block.replace(new RegExp('\\\\end{first' + environmentName + '}'), '').trim());
                codeblocks.push(codeblocks2[1]);
            }
            for(let block of codeblocks){
                const lines = block.split('\n').map(line => line.trim());
        
                const startLine = lines.findIndex(line => line === '\\begin{' + environmentName + '}');
                const endLine = lines.findIndex(line => line === '\\end{' + environmentName + '}');
                const fieldsDict = {};
                lines.slice(0, fieldsList.length).map((line, index) => {
                    const trimmedLine = line.replace(/^[^{]*{/, '').replace(/}\s*$/, ''); // Remove the outer braces and trim the line
                    const unescapedLine = trimmedLine.replace(/\\([{}_])/g, '$1'); // Unescape special characters
                    fieldsDict[fieldsList[index]] = unescapedLine;
                });

                const item = fieldsDict;
                jsonItems.push(item);
            }
            return jsonItems;
        } else {
            throw new Error(xhr.status);
        }
    }





export function getResearchItem(path, researchItem) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, false);
    xhr.send(null);
    if (xhr.status === 200) {
        var file = xhr.responseText;
        var listOfItems = file.split('@')

        var selectedItem = listOfItems.filter(item => item.includes(String(researchItem)))[0]
        
        var fields = selectedItem.split('\n')
        var items = {}
        items['name'] = researchItem
        for (var field of fields){
            if (field.includes('=')){ 

                
                var key = field.split('=')[0].toLowerCase().trim()

                var value = field.split('=').slice(1).join('=').trim().replaceAll(/\\href{([^}]*)}{([^}]*)}/g, '<a style="text-decoration: none; " href="$1" >$2</a>').replace('},','}');

                if (['year', 'title', 'author', 'journal', 'volume', 'number'].includes(key.toString())){

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
        var file = xhr.responseText;
        var lines = file.split('\n').map(line => line.trim())
        var listOfItems = lines.filter(line => line.includes('\\item \\fullcite{') && !line.includes('%\\item \\fullcite{'))

        var listOfItemsNames = listOfItems.map(item => item.split('{')[1].split('}')[0])
        for (var item of listOfItemsNames){
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


    var xhr = new XMLHttpRequest();
    xhr.open('GET', texPath, false);
    xhr.send(null);
    console.log('trying to load tex file', texPath)
    if (xhr.status === 200) {
        var file = xhr.responseText;
        console.log('tex file loaded, getting spaced tex', file)
        
        var spaced = file.split('\\spaced')
        spaced = spaced.map(item => item.replaceAll('\\LaTeX', 'LaTeX'))
        spaced[spaced.length-1] = spaced[spaced.length-1].split('\\,')[0]
        spaced = spaced.map(item => ' '+item.trim())

        console.log('spaced', spaced)


        return spaced
    }
    else {
        console.log('error loading tex file')
        throw new Error(xhr.status);
    }

}