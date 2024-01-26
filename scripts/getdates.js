// toLocaleDateString
// const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById('last-modified').textContent = `Last Updated: ${document.lastModified}` 
document.getElementById('current-year').textContent = new Date().getFullYear()
