async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}
document.addEventListener('DOMContentLoaded', function() {
    getCurrentTab()
        .then(value => {
            let url = value.url;
            let domain = (new URL(url));
            var hostname = domain.hostname;
            chrome.storage.sync.get(["toggled"], function(result) {
                res = result.toggled;
                chrome.storage.sync.set({ "toggled": !res }, function() {
                    chrome.tabs.query({}, function(tabs) {
                        for (var o = 0; o < tabs.length; o++) {
                            chrome.tabs.update(tabs[o].id, { url: tabs[o].url });
                        }
                    })
                    window.close();
                })
            });
        })
        .catch(err => {
            console.log(err);
        });
})