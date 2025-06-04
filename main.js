
function openNav() {
    document.getElementById("sidebar").style.width = "180px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
}

function toggleNavPhone() {
    if ( document.getElementById("sidebar-p").style.height == "0px") {
            document.getElementById("sidebar-p").style.height = "500px";
    } 
    else {
            document.getElementById("sidebar-p").style.height = "0px";
    }
}

function acceptCookie() {
    document.getElementById("cookie").style.display = "none";
}


function iLikeCookies() {
    document.body.style.background = "red";
    document.html.style.background = "red";
    document.getElementById("cookie").style.display = "none";
    
}

function selfDestruction() {
    document.body.style.display = "none"
    document.body.style.backgroundImage = url("images/ceo-tim-cook-apple-conference-4ggdeq8rn6tijxr4.png");
}