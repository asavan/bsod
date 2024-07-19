export default function install(window, document) {
    const btnAdd = document.querySelector(".butInstall");
    if (!btnAdd) {
        console.log("No button add");
        return;
    }
    let deferredPrompt;
    btnAdd.addEventListener("click", (e) => {
        e.preventDefault();
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((resp) => {
            console.log(JSON.stringify(resp));
        });
    });

    window.addEventListener("beforeinstallprompt", (e) => {
        // Prevent the mini-info bar from appearing.
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
    });
    return btnAdd;
}
