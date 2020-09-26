var dialog = document.createElement("dialog")
var image = document.createElement("img")
image.src = chrome.runtime.getURL("https://www.online-image-editor.com/online-image-editor-logo.png")
dialog.appendChild(image)
image.style.width = window.innerWidth + "px"
image.style.height = window.innerHeight + "px"
var close = document.createElement("button")
close.textContent = "Close"
close.addEventListener("click", function () {
    dialog.close()
})
dialog.appendChild(close)
document.body.appendChild(dialog)
dialog.showModal()