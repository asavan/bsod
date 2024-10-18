import install from "./js/views/install-as-app.js";

//GSOD support
{
    const green = new URLSearchParams(window.location.search).has("g");
    if (green) {
        document.querySelector("#body").style.backgroundColor = "#3A6D2F";
        document.querySelector("#qr").style.filter = "hue-rotate(262deg)";
        document.querySelector("#devicename").innerHTML = "Windows Insider Build";
    }
}

if (__USE_SERVICE_WORKERS__) {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js", { scope: "./" });
    }
    install(window, document);
}
