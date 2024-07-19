import install from "./js/views/install_as_app.js";

resize();
function resize() {
    //resize check
    const edit = document.getElementById("edit");
    if (!edit) {
        return false;
    }
    const masterTable = document.getElementById("masterTable");

    if (Math.abs(window.innerHeight - screen.height) < 5) {
        //disable editing
        edit.contentEditable = "false";
        masterTable.style.cursor = "none";
        deleteSelection();
    } else {
        edit.contentEditable = "true";
        masterTable.style.cursor = "";
    }
}

function deleteSelection() {
    if (window.getSelection) {
        // Mozilla
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            window.getSelection().removeAllRanges();
        }
    }
}

//GSOD support
{
    const green = new URLSearchParams(window.location.search).has("g");
    if (green) {
        document.getElementById("body").style.backgroundColor = "#3A6D2F";
        document.getElementById("qr").style.filter = "hue-rotate(262deg)";
        document.getElementById("devicename").innerHTML = "Windows Insider Build";
    }
}

if (__USE_SERVICE_WORKERS__) {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js", { scope: "./" });
    }
    install(window, document);
}
