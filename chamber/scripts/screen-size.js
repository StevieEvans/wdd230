updateHeroLabel = () => {
    const spanTag = document.getElementById('screen-size');
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth <= 500){
        spanTag.textContent = 'Small';
    } else if (viewportWidth > 500  && viewportWidth < 1280){
        spanTag.textContent = 'Medium';
    } else {
        spanTag.textContent = 'Large';
    }
}

updateHeroLabel();

window.addEventListener('resize', updateHeroLabel);