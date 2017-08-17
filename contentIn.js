
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    s.setAttribute('name', file);
    th.appendChild(s);
}
injectScript( chrome.extension.getURL('/colourScheme.js'), 'head');
injectScript( chrome.extension.getURL('/pretty.js'), 'head');
