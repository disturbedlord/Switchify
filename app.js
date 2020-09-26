document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function () {

        // fetch from chromes API's
        getAllLinks();

        chrome.browserAction.onClicked.addListener(function () {
            var w = 440;
            var h = 220;
            var left = (screen.width / 2) - (w / 2);
            var top = (screen.height / 2) - (h / 2);

            chrome.windows.create({
                'url': 'index.html',
                'type': 'popup',
                'width': w,
                'height': h,
                'left': left,
                'top': top
            }, function (window) {});
        });

    }, false);
}, false);


function getAllLinks() {
    // get all the tabs link
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
            console.log(tab);
        });
    });
}