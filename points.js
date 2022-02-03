let pointDiv = document.getElementById('point-total');

chrome.storage.local.get('points', function(result) {
    pointDiv.innerHTML = `Total points: </br> ${result.points}`;
});