
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.data){
        localStorage["linkedInResume"] = JSON.stringify(request.data);
    }

    // Send data to Ceev Site
    if(request.type == "getLinkedInResume"){
        sendResponse({data: JSON.parse(localStorage['linkedInResume'])});
    }

    // Else just let site know you have the extension
    else if(request.type == "checkForExtension"){
        if(localStorage['ceevPlus']){
            sendResponse({data: [true]});
        }else{
            sendResponse({data: [false]});
        }
    }

    else{
        sendResponse({});
    }

    return true;
});
