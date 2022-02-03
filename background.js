let points = 0;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ points });
});