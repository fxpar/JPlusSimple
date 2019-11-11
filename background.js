// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Ecrire la date du lendemain');
  chrome.tabs.executeScript({
    code: 'console.log("Ecrire la date du LENDEMAIN");var auj = new Date(); var livraison = new Date(); if (auj.getDay() == 5) {livraison.setDate(auj.getDate()+3); }else{livraison.setDate(auj.getDate()+1); } document.activeElement.value = livraison.toLocaleDateString("fr-FR")+document.activeElement.value;'
  });
});