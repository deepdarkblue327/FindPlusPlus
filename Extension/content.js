chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log("Received");
      console.log(request.greeting);
    sendResponse({farewell: "Done"});
});
