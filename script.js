let tabLinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-content")

function openTab(tabName){
    for(const tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for (const tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.target.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}