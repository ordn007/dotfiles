// Inject.js
// Show loading, pull data.

var linkedInResume = [];

var userDetails = [];

// Set Variables
var userExperience = [];
var userEducation = [];
var userVolunteering = [];
var userProfile = [];

var userSkills = [];
var tempUserSkills = [];
var userLanguages = [];
var userProjects = [];
var userCourses = [];


// Wait to preventDefault clicks until UI loads
var uiLoaded = false;

var runAttempts = 0;

// Variables to capture sections
function startCeev(e){

    runAttempts++;

    // Show Loading Screen
    // Show Loading Screen
    // Show Loading Screen
    $("head").append('<link href="' + chrome.extension.getURL('src/inject/loading/loading.css') + '" rel="stylesheet">');

    $.get(chrome.extension.getURL('src/inject/loading/loading.html'), function (data) {
        $("body").append(data);
        $("#ceevLoadingLogos").append("<img src='" + chrome.extension.getURL('src/img/ceev-logo.png') + "'/>")
        $("#ceevLoadingLogos").append("<img src='" + chrome.extension.getURL('src/img/logo128.png') + "' class='ceev-loading-spinner'/>")
    });


    // Scroll page to reveal hidden elements
    // Scroll page to reveal hidden elements
    // Scroll page to reveal hidden elements
    $("html, body")
        .animate({ scrollTop: $(document).height() }, 1400)
        .promise()
        .then(function() {

        $("html, body")
            .animate({ scrollTop: $(document).height() }, 600)
            .promise()
            .then(function() {


            // Scroll back to top
            $("html, body")
                .animate({ scrollTop: 0 }, 1000)
                .promise()
                .then(function() {

                    $("html, body").animate({ scrollTop: 0 }, 1000);

                    // Save Basics
                    // Save Basics
                    // Save Basics
                    // $(".contact-see-more-less").click().promise().then(function(){

                    setTimeout(function(){
                        var userName = $(".pv-top-card-section__name").html();
                        var userHeadline = $(".pv-top-card-section__headline").html();
                        var userPhoto = $(".pv-top-card-section__profile-photo-container img").attr("src");
                        var userLocation = $(".pv-top-card-section__location").text().trim();
                        if (userLocation.indexOf(", Greater") >= 0){ // Remove "Greater XX Area" if it exists
                            userLocation = userLocation.split(',')[0] + ", " + userLocation.split(',')[2];
                        }
                        console.log(userPhoto);
                        if($(".pv-profile-section__header-add-action").length){
                            var linkedin = $(".pv-profile-section__header-add-action").attr("href").replace("/edit/position/new/", "");
                            linkedin = "linkedin.com" + linkedin;
                            console.log("LINKEDIN")
                            console.log("LINKEDIN")
                            console.log(linkedin)
                        }

                        if(userName || userHeadline || userLocation || linkedin){
                            userDetails.push({
                                name : userName,
                                headline : userHeadline,
                                location : userLocation,
                                website : linkedin
                            })
                        }

                        console.log("Contact:");
                        console.log(userDetails);

                    }, 800);


                    // If summary is collapsed, show it.
                    if($(".pv-top-card-section__summary-toggle-button li-icon").attr("type") == "chevron-down-icon"){
                        $(".pv-top-card-section__summary-toggle-button").click();
                    }
                    setTimeout(function(){
                        if($(".pv-top-card-section__summary-text").length > 0){
                            userSummary = $(".pv-top-card-section__summary-text").clone().find("button").remove().end().html();
                            if(userSummary){
                                userProfile.push({
                                    line5 : userSummary
                                })
                            }
                        }
                    }, 500);



                    // Pull Experience
                    // Pull Experience
                    // Pull Experience

                    // Save Experience
                    $('.pv-profile-section__see-more-inline').each(function () {
                        $(this).click();
                    });
                    setTimeout(function(){
                        $('.experience-section .pv-profile-section__section-info li').each(function (index) {
                            var jobTitle = $(this).find(".pv-entity__summary-info h3").text().trim();
                            var jobEmployer = $(this).find(".pv-entity__secondary-title").text().trim();
                            var jobDate = $(this).find(".pv-entity__date-range span").not(".visually-hidden").text().trim();
                            var jobLocation = $(this).find(".pv-entity__location span").not(".visually-hidden").text().trim();
                            var jobDescription = $(this).find(".pv-entity__description").html();

                            if(jobTitle || jobEmployer || jobDate || jobLocation || jobDescription){
                                userExperience.push({
                                    line1 : jobTitle,
                                    line2 : jobEmployer,
                                    line3 : jobDate,
                                    line4 : jobLocation,
                                    line5 : jobDescription
                                });
                            }

                        });
                        console.log("Experience:");
                        console.log(userExperience);

                        // Call function to open app.ceev.io
                    }, 900);



                    // Save Education
                    // Save Education
                    // Save Education
                    setTimeout(function(){
                        $('.education-section .pv-profile-section__section-info li').each(function (index) {
                            var school = $(this).find(".pv-entity__degree-info h3").text().trim();
                            var degree = $(this).find(".pv-entity__degree-name span").not(".visually-hidden").text().trim();
                            var field = $(this).find(".pv-entity__fos span").not(".visually-hidden").text().trim();
                            var date = $(this).find(".pv-entity__dates span").not(".visually-hidden").text().trim();
                            var activities = $(this).find(".activities-societies").text().trim();
                            var educationDescription = $(this).find(".pv-entity__description").html();

                            if(degree || field || school || date || educationDescription){
                                userEducation.push({
                                    line1 : degree,
                                    line2 : field,
                                    line3 : school,
                                    line4 : date,
                                    line5 : educationDescription
                                })
                            }
                        });
                    }, 900);

                    console.log("Education:");
                    console.log(userEducation);


                    // Save Volunteering
                    // Save Volunteering
                    // Save Volunteering
                    $('.volunteering-section .pv-profile-section__section-info li').each(function (index) {
                        var title = $(this).find(".pv-entity__summary-info h3").text().trim();
                        var organization = $(this).find(".pv-entity__secondary-title").text().trim();
                        var date = $(this).find(".pv-entity__date-range span").not(".visually-hidden").text().trim();
                        var description = $(this).find(".pv-entity__description").html();

                        if(title || organization || date || description){
                            userVolunteering.push({
                                line1 : title,
                                line2 : organization,
                                line3 : date,
                                line5 : description
                            })
                        }

                    });
                    console.log("Volunteering:");
                    console.log(userVolunteering);


                    // Save Skills
                    // Save Skills
                    // Save Skills
                    setTimeout(function(){
                        $(".pv-skills-section__additional-skills").click().promise().then(function(){
                            setTimeout(function(){
                                $('.pv-skill-category-entity__name').each(function () {
                                    if($(this).text()){
                                        tempUserSkills.push($(this).text().trim())
                                    }
                                });
                            }, 500);
                        });
                    }, 500);

                    setTimeout(function(){
                        if(!tempUserSkills[0]){
                            console.log("No skills found")
                            return;
                        }else{
                            if(tempUserSkills){
                                userSkills.push({
                                    line5 : tempUserSkills.join(", ")
                                })
                            }
                            console.log("Skills:");
                            console.log(userSkills);
                        }
                    }, 1400);



                    // Save Languages
                    // Save Languages
                    // Save Languages
                    setTimeout(function(){
                        $(".languages .pv-accomplishments-block__expand").click().promise().then(function(){
                            $('.languages .pv-accomplishments-block__list li').each(function (index) {
                                var language = $(this).find(".pv-accomplishment-entity__title").clone().children().remove().end().text().trim();
                                var level = $(this).find(".pv-accomplishment-entity__subtitle").text().replace("proficiency", "").trim();

                                if(language || level){
                                    userLanguages.push({
                                        line1 : language,
                                        line2 : level
                                    })
                                }

                            });
                            console.log("Languages");
                            console.log(userLanguages);
                        });
                    }, 1000);




                    // Save Projects
                    // Save Projects
                    // Save Projects
                    $(".projects .pv-accomplishments-block__expand").click().promise().then(function(){
                        $('.projects .pv-accomplishments-block__list li').each(function (index) {
                            var projectTitle = $(this).find(".pv-accomplishment-entity__title").clone().children().remove().end().text().trim();
                            var projectDate = $(this).find(".pv-accomplishment-entity__subtitle").text().trim();
                            var projectDescription = $(this).find(".pv-accomplishment-entity__description").clone().children().remove().end().html();
                            var projectLink = $(this).find(".pv-accomplishment-entity__external-source").attr('href');

                            if(projectTitle || projectLink || projectDate || projectDescription){
                                userProjects.push({
                                    line1 : projectTitle,
                                    line2 : projectLink,
                                    line3 : projectDate,
                                    line5 : projectDescription,
                                })
                            }

                        });
                        console.log("Projects:");
                        console.log(userProjects);
                    });



                    // Save Courses
                    // Save Courses
                    // Save Courses
                    $(".courses .pv-accomplishments-block__expand").click().promise().then(function(){
                        $('.courses .pv-accomplishments-block__list li').each(function (index) {
                            var course = $(this).find(".pv-accomplishment-entity__title").clone().children().remove().end().text().trim();
                            var number = $(this).find(".pv-accomplishment-entity__subtitle").clone().children().remove().end().text().trim();
                            if(course || number){
                                userCourses.push({
                                    line1 : course,
                                    line2 : number
                                })
                            }
                        });
                        console.log("COURSES");
                        console.log(userCourses);
                    });


                    // Timeout, then done
                    setTimeout(function(){
                        resumeReady();
                    }, 2800);


                }); // End promise after scroll up


        }); // End promsie after scroll down
    }); // End promsie after scroll down

} // End startceev
startCeev();


function resumeReady(){

    if(!userDetails[0].name){

        if(runAttempts == 2){
            $(".ceev-loading").remove();
            alert("Something went wrong with the extension. First, try disabling your adblocker, refresh the page, and try again. If this problem continues, please contact me at hello@ceev.io and let me know so I can try to fix it.")
        }else{
            document.getElementById("ceevLoadingMessage").innerHTML = "Something happened. Trying again.";
            setTimeout(function(){
                $(".ceev-loading").remove();
                startCeev();
            }, 1500);
        }
    }else{
        $(".ceev-loading").remove();


        localStorage["linkedInResume"] = "";
        // Remove loading screen
        var finalEntries = {}

        if(userExperience[0]){finalEntries['experience'] = userExperience}
        if(userEducation[0]){finalEntries['education'] = userEducation}
        if(userLanguages[0]){finalEntries['languages'] = userLanguages}
        if(userCourses[0]){finalEntries['courses'] = userCourses}
        if(userProjects[0]){finalEntries['projects'] = userProjects}
        if(userSkills[0]){finalEntries['skills'] = userSkills}
        if(userVolunteering[0]){finalEntries['volunteering'] = userVolunteering}
        if(userProfile[0]){finalEntries['profile'] = userProfile}

        var finalPersonal = {};
        if(userDetails[0].name){finalPersonal['name'] = userDetails[0].name.trim()};
        if(userDetails[0].headline){finalPersonal['headline'] = userDetails[0].headline.trim()};
        if(userDetails[0].email){finalPersonal['email'] = userDetails[0].email.trim()};
        if(userDetails[0].phone){finalPersonal['phone'] = userDetails[0].phone.trim()};
        if(userDetails[0].website){finalPersonal['website'] = userDetails[0].website.trim()};
        if(userDetails[0].location){finalPersonal['location'] = userDetails[0].location.trim()};

        linkedInResume.push({
            personal : finalPersonal,
            entries : finalEntries
        });
        console.log(linkedInResume);

        chrome.runtime.sendMessage({data: linkedInResume}, function(response) {});

        var win = window.open("https://ceev.io/create/linkedin", '_blank');
        win.focus();
    }


}
