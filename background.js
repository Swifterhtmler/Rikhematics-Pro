chrome.runtime.onInstalled.addListener(() => {
    console.log('Math Oracle Extension installed');
  });
  
  // This will help debug any issues with bundle.js
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'logError') {
      console.error('Error in content script:', message.error);
    }
  });