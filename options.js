function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    countryPrefix: document.querySelector("#countryPrefix").value
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#countryPrefix").value = result.countryPrefix || "1";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("countryPrefix");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
