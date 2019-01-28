var popupScript = popupScript || {
    init: function(){
        popupScript.checkSite();

    },

    checkSite: function(){

        chrome.tabs.getSelected(null,function(tab) {
            var tablink = tab.url;

            // IF LINKEDIN
            if(tablink.indexOf("linkedin.com/in/") > -1) {
                document.getElementById("ceevIsLinkedin").style.display = "flex";
                document.getElementById("ceevNotLinkedin").style.display = "none";
            }else{ // ELSE
                document.getElementById("ceevIsLinkedin").style.display = "none";
                document.getElementById("ceevNotLinkedin").style.display = "flex";
            }
        });
    }

}
popupScript.init();


document.addEventListener('DOMContentLoaded', function() {

    var link = document.getElementById('ceevStart');
    // onClick's logic below:
    link.addEventListener('click', function() {

        chrome.windows.getCurrent(function (currentWindow) {
            chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
                activeTabs.map(function (tab) {

                    // jQuery First
                    chrome.tabs.executeScript(tab.id, { file: 'js/jquery/jquery.min.js', allFrames: false });

                    // Main inject last
                    chrome.tabs.executeScript(tab.id, { file: 'src/inject/inject.js', allFrames: false });


                    window.close();
                });
            });
        });
    });
});
