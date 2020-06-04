// // Hamburger for nav
// $(document).ready(function () {
//     $(".mbicon").click(function(){
//         document.getElementById("cnt").style.display = "block"
//         document.getElementsByClassName("mbicon").style.display = "none"
//         document.getElementsByClassName("nbicon").style.display = "block"

//     })
// });
// // cancle hamburger for nav
// $(document).ready(function () {
//     $(".nbicon").click(function(){
//         document.getElementById("cnt").style.display = "none"
//     })
// });
// Sign up
$(document).ready(function () {
    $("#qq").click(function(){
       document.getElementById("signuppa").style.display = "none"
        document.getElementById("signinpa").style.display = "block"


    })
});

$(document).ready(function () {
    $("#qa").click(function(){
        document.getElementById("signinpa").style.display = "none"
        document.getElementById("signuppa").style.display = "block"


    })
});