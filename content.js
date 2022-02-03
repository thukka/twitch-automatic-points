function getStreamInfo() {
    setInterval(() => {
        const documentHtml = document.querySelectorAll("button[aria-label='Claim Bonus']");
        if (documentHtml[0] !== undefined) {
            documentHtml[0].click();
            chrome.storage.local.get('points', function (result) {
                chrome.storage.local.set({ 'points' : result.points + 50 });
            })
        }
    }, 60000);
};

getStreamInfo();