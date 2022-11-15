const popup = document.querySelector(".pop-up");

document.onclick = function (e) {
    if (e.target.className != "pop-up" && e.target.className != "li_cl") {
        document.querySelector(".pop-up").style.display = "none";
    };
};