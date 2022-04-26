const app = {
  appName: "cradova app",
  hasFSAccess:
    "chooseFileSystemEntries" in window || "showOpenFilePicker" in window,
  isMac: navigator.userAgent.includes("Mac OS X"),
  isAndroid: navigator.userAgent.includes("Android"),
  isWindows: navigator.userAgent.includes("Windows"),
};

/**
 * Track successful app installs
 */
window.addEventListener("appinstalled", (e) => {
  //
  console.log("app installed!");
});

/**
 * Listen for 'beforeinstallprompt' event, and update the UI to indicate
 * text-editor can be installed.
 */
window.addEventListener("beforeinstallprompt", (e) => {
  // Don't show the mini-info bar
  e.preventDefault();

  // Save the deferred prompt
  app.installPrompt = e;

  // Show the install button
  butInstall.removeAttribute("disabled");
  butInstall.classList.remove("hide");
});

const butInstall = document.getElementById("butInstall");
// Handle the install button click
butInstall.addEventListener("click", () => {
  butInstall.setAttribute("disabled", true);
  app.installPrompt.prompt();
});

const unreadCount = 24;
navigator.setAppBadge(unreadCount).catch((err) => {
  console.log(err);
  // Do something with the error.
});

// Clear the badge
navigator.clearAppBadge().catch((error) => {
  // Do something with the error.
});
