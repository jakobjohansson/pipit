chrome.browserAction.onClicked.addListener(() =>
  chrome.tabs.executeScript({
    file: 'pip.js',
  })
);
