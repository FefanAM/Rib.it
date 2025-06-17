
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
    if (document.getElementById("obrdiv1").style.opacity == "0") {
        javascript:void(0)
    }
    else {
    document.getElementById("taskbar").style.opacity = "0.2";
    document.getElementById("taskbar").style.zIndex= "0";
    document.getElementById("obr1").style.transform= "translate(85%, -9%)";
    document.getElementById("obr1").style.zIndex = "2";
    document.getElementById("obr1").style.height= "98vh";
    document.getElementById("obr-nav").style.opacity= "1";
    document.getElementById("obr-nav").style.zIndex= "1";
    document.getElementById("obrdiv2").style.opacity= "0";
    document.getElementById("obrdiv3").style.opacity= "0";
    }
}
function openDia2() {
    if (document.getElementById("obrdiv2").style.opacity == "0") {
        javascript:void(0)
    }
    else {
    document.getElementById("taskbar").style.opacity = "0.2";
    document.getElementById("taskbar").style.zIndex= "0";
    document.getElementById("obr2").style.transform= "translate(0%, -9%)";
    document.getElementById("obr2").style.zIndex = "2";
    document.getElementById("obr2").style.height= "98vh";
    document.getElementById("obr-nav").style.opacity= "1";
    document.getElementById("obr-nav").style.zIndex= "1";
    document.getElementById("obrdiv1").style.opacity= "0";
    document.getElementById("obrdiv3").style.opacity= "0";
    }
}
function openDia3() {
    if (document.getElementById("obrdiv3").style.opacity == "0") {
        javascript:void(0)
    }
    else {
    document.getElementById("taskbar").style.opacity = "0.2";
    document.getElementById("taskbar").style.zIndex= "0";
    document.getElementById("obr3").style.transform= "translate(-85%, -9%)";
    document.getElementById("obr3").style.zIndex = "2";
    document.getElementById("obr3").style.height= "98vh";
    document.getElementById("obr-nav").style.opacity= "1";
    document.getElementById("obr-nav").style.zIndex= "1";
    document.getElementById("obrdiv2").style.opacity= "0";
    document.getElementById("obrdiv1").style.opacity= "0";
    }
}
function closeDia() {
    const elements = document.querySelectorAll("#obrdiv1, #obrdiv2, #obrdiv3");
    elements.forEach(Element => {
        Element.style.opacity= "1";
        Element.style.zIndex= "1";
        
    })
    const elements2 = document.querySelectorAll("#obr1, #obr2, #obr3")
    elements2.forEach(Element => {
        Element.style.height= "70vh";
        Element.style.transform= "translate(0%, 0%)";
        Element.style.zIndex= "1";
    })
    document.getElementById("obr-nav").style.opacity = "0";
    document.getElementById("obr-nav").style.zIndex= "-10";
    document.getElementById("taskbar").style.opacity = "1";
    document.getElementById("taskbar").style.zIndex = "2";
}
function left() {
    if (document.getElementById("obr1").style.zIndex > "1") {
        closeDia()
        openDia3()
    }
    else if (document.getElementById("obr3").style.zIndex > "1"){
        closeDia()
        openDia2()
    }
    else {
        closeDia()
        openDia()
    }
}
function right() {
    if (document.getElementById("obr1").style.zIndex > "1") {
        closeDia()
        openDia2()
    }
    else if (document.getElementById("obr3").style.zIndex > "1"){
        closeDia()
        openDia()
    }
    else {
        closeDia()
        openDia3()
    }
}