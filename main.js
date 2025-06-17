
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
    document.getElementById("cookie").style.display = "none";
    document.body.style.background = "red";
}

function selfDestruction() {
    document.body.style.display = "none"
}
function leftArrow() {
    document.getElementById('onas-container').scrollBy({top:0, left:-1220, behavior: 'smooth'})
}

function rightArrow() {
    document.getElementById('onas-container').scrollBy({top:0, left:1220, behavior: 'smooth'})
}
function openDia() {
    
    document.getElementById("obr2").style.opacity = "0.2";
    document.getElementById("obr3").style.opacity = "0.2";
    document.getElementById("taskbar").style.opacity = "0.2";
    document.getElementById("taskbar").style.zIndex= "0";
    document.getElementById("obr1").style.transform= "translate(85%, -9%)";
    document.getElementById("obr1").style.zIndex = "4";
    document.getElementById("obr1").style.height= "98vh";
    document.getElementById("obr-nav").style.opacity= "1";
}
function openDia2() {
    document.getElementById("obr1").style.opacity = "0.2";
    document.getElementById("obr3").style.opacity = "0.2";
    document.getElementById("taskbar").style.opacity = "0.2";
    document.getElementById("taskbar").style.zIndex= "0";
    document.getElementById("obr2").style.transform= "translate(0%, -9%)";
    document.getElementById("obr2").style.zIndex = "4";
    document.getElementById("obr2").style.height= "98vh";
    document.getElementById("obr-nav").style.opacity= "1";
}
function openDia3() {
    document.getElementById("obr1").style.opacity = "0.2";
    document.getElementById("obr2").style.opacity = "0.2";
    document.getElementById("taskbar").style.opacity = "0.2";
    document.getElementById("taskbar").style.zIndex= "0";
    document.getElementById("obr3").style.transform= "translate(-85%, -9%)";
    document.getElementById("obr3").style.zIndex = "4";
    document.getElementById("obr3").style.height= "98vh";
    document.getElementById("obr-nav").style.opacity= "1";
}