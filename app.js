loadCurrwinList();

function setFocus() {
    document.getElementById("currwin-search").focus();
}



if (document.readyState === 'complete') {
    setFocus();
}

let currwinPage = document.querySelector('#currwin-page');

let currwinListWrapper = document.querySelector('#currwin-list-wrapper');

var currentTab;

function loadCurrwinList() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function (tabs) {
        const activeTab = tabs[0];
        // console.log(activeTab);
        currentTab = activeTab;
        currwinListWrapper.innerHTML = ''; // clear the currwin list
        chrome.tabs.query({
            currentWindow: true
        }, (tabs) => {
            let siteList = document.createElement('ul');
            siteList.className = 'site-list';
            for (let tab of tabs) {
                let siteItem = document.createElement('li');
                siteItem.className = 'site-item';
                siteItem.dataset.tabId = tab.id;
                siteItem.tabIndex = '0'; // this is for change focus

                // escape title with html special characters
                let tabText = document.createElement('p');
                tabText.className = "tab-style";
                const escaped_title = tab.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                tabText.innerText = escaped_title;

                let infoText = document.createElement('span');


                infoText.className = 'info-text';

                var imageMissing = "./assets/images/error.svg"

                if (tab.favIconUrl) {
                    var textFront = "<p class='tab-text' >";
                    infoText.innerHTML = '<img class="site-icon" ' +
                        'src="' + tab.favIconUrl + '">' + textFront + tabText.textContent + "</p></span>";
                } else {
                    // const spanStyle = 'display:inline-block; width:13.3333px; height:13.3333px; margin-right:6px;';
                    var textFront = "<p class='tab-text' >";
                    infoText.innerHTML = '<img class="site-icon" ' +
                        'src="' + imageMissing + '">' + textFront + tabText.textContent + "</p></span>";
                }

                // handle the click event for close tab
                let closeBtn = document.createElement('button');
                closeBtn.className = 'close-btn';
                closeBtn.innerHTML = 'X';
                closeBtn.style.cursor = "pointer";

                siteItem.appendChild(infoText);
                siteItem.appendChild(closeBtn);



                // handle the keyboard event for close tab
                siteItem.addEventListener('mouseover', (event) => {
                    event.currentTarget.focus();
                });
                siteItem.addEventListener('mouseleave', (event) => {
                    event.currentTarget.blur();
                });
                siteItem.addEventListener('keydown', (event) => {
                    if (event.code === 'KeyX') {
                        const tabId = event.currentTarget.dataset.tabId;
                        chrome.tabs.remove(parseInt(tabId));
                        // remove closed page list item
                        siteList.removeChild(event.currentTarget);
                    }
                });

                // display short note of tab url when hover list item
                siteItem.title = tab.url;

                siteList.appendChild(siteItem);
                // append siteList as the dragula containers
                // drake.containers.push(siteList);
            }



            currwinListWrapper.appendChild(siteList);
            // hate to do this, but this resolves the scrollbar width issue
            let textList = document.querySelectorAll('.info-text');
            for (let textItem of textList) {
                textItem.style.width = '100%';
            }
        });
    });


}


currwinListWrapper.addEventListener('click', (event) => {
    const siteItem = event.target.parentNode;
    const tabId = siteItem.dataset.tabId;
    if (event.target.matches('span.info-text')) {
        chrome.tabs.update(parseInt(tabId), {
            active: true
        });
    }
    if (event.target.matches('button.close-btn')) {
        chrome.tabs.remove(parseInt(tabId));
        // remove closed page list item
        let siteList = document.querySelector('.site-list');
        siteList.removeChild(siteItem);
    }
});

let searchInput = document.querySelector('#currwin-search');
searchInput.addEventListener('keyup', searchTabs);

function searchTabs() {
    let filterWord = searchInput.value.toLowerCase();
    let siteItems = document.querySelectorAll('#currwin-list-wrapper li');
    // let searchBar = document.getElementById("searchBar");
    // searchBar.style.position = fixed;
    var c = 0;
    for (let item of siteItems) {
        const itemText = item.querySelector('span').textContent;
        if (itemText.toLowerCase().indexOf(filterWord) > -1) {
            item.style.display = 'flex';
            c++;
        } else {
            item.style.display = 'none';
        }
    }
    searchBar.style.position = "unset";

}

var newWindow = document.getElementById("openNewWindow")
newWindow.addEventListener("click", (event) => {
    console.log("opeopoe");
    chrome.windows.create({

    });

});