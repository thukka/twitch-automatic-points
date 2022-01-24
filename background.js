async function getStreamInfo() {
    setInterval(() => {
        const documentHtml = document.querySelectorAll("button[aria-label='Claim Bonus']");
        if (documentHtml[0] !== undefined) {
            documentHtml[0].click();
            console.log('added +50');
        }
    }, 60000);
}

getStreamInfo()