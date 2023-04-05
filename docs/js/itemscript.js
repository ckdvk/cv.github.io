const elements = document.querySelectorAll('.itemcontent');

elements.forEach(element => {
    const originalText = element.textContent.trim();
    const newText =   originalText + '<span style="color: white;font-size: 15pt;">",</span>';
    element.innerHTML = newText; // Use innerHTML instead of textContent
});

const titleelements = document.querySelectorAll('.itemtitle');

titleelements.forEach(element => {
    const originalTextTitle = element.textContent.trim();
    const newText = '<span style="color: white;font-size: 15pt;">"</span>' + originalTextTitle 
    element.innerHTML = newText; // Use innerHTML instead of textContent
});