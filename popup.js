let wideIt = document.getElementById('wideIt');
let wide = false

wideIt.onclick = function(element) {

  wide = !wide

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if(wide){
      chrome.tabs.executeScript(tabs[0].id, {code: 'document.getElementById("notebook-container").classList.add("container-fluid")'})
      chrome.tabs.executeScript(tabs[0].id, {code: 'document.getElementById("notebook-container").classList.remove("container")'})
    } else {
      chrome.tabs.executeScript(tabs[0].id, {code: 'document.getElementById("notebook-container").classList.add("container")'})
      chrome.tabs.executeScript(tabs[0].id, {code: 'document.getElementById("notebook-container").classList.remove("container-fluid")'})
    }

  });
};
