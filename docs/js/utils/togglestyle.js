
// This function toggles the light-theme class on the body element. This class is used to change the theme of the page. The class is defined in the docs\css\style.css file. it will be called in the index.html file, when the user clicks on the toggle button.



export function changeColors(strongColor, semiStrongColor, softColor, backgroundColor) {
    document.documentElement.style.setProperty('--strong-color', strongColor);
    document.documentElement.style.setProperty('--semi-strong-color', semiStrongColor);
    document.documentElement.style.setProperty('--soft-color', softColor);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    console.log('changeColors() called')
}