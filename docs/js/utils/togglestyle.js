



export function changeColors(strongColor, semiStrongColor, softColor, backgroundColor) {
    document.documentElement.style.setProperty('--strong-color', strongColor);
    document.documentElement.style.setProperty('--semi-strong-color', semiStrongColor);
    document.documentElement.style.setProperty('--soft-color', softColor);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    console.log('changeColors() called')
}