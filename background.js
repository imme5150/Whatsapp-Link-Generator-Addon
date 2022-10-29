/*
Create all the context menu item.
*/
browser.contextMenus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("menuItemName"),
  contexts: ["selection"]
});

/*
The click event listener
*/
browser.contextMenus.onClicked.addListener((info, tab) => {
  const newTabIndex = tab.index + 1;
  const selection = info.selectionText.replace(/\D+/g, "");
  browser.storage.sync.get("countryPrefix", (result) => {
    browser.tabs.create({
      url:`https://web.whatsapp.com/send/?phone=${result.countryPrefix || '1'}${selection}`,
      index:newTabIndex
    });
  });
});
