$(document).ready(function () {
   $("#btnClick").click(() => alert("I miss her"));
   $("#btnHide").click(() => $("#hideText").hide());
   $("#btnShow").click(() => $("#showText").show());
   $("#btnToggle").click(() => $("#toggleText").toggle());
   $("#btnSlideDown").click(() => $("#slideDownText").slideDown());
   $("#btnSlideUp").click(() => $("#slideUpText").slideUp());
   $("#btnSlideToggle").click(() => $("#slideToggleText").slideToggle());
   $("#btnFadeIn").click(() => $("#fadeInText").fadeIn());
   $("#btnFadeOut").click(() => $("#fadeOutText").fadeOut());
   $("#btnAddClass").click(() => $("#addClassText").addClass("highlight"));
   $("#btnBefore").click(() => $("#beforeText").before("<p>I am his past</p>"));
   $("#btnAfter").click(() => $("#afterText").after("<p>Hi, I am after him</p>"));
   $("#btnAppend").click(() => $("#appendText").append(" B. Panesa"));
   $("#btnHtml").click(() => $("#htmlText").html("<b>Html bold text!</b>"));
   $("#btnAttr").click(() => $("#attrImage").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hanni_OLENS_2.jpg/250px-Hanni_OLENS_2.jpg"));
   $("#btnVal").click(() => alert($("#valInput").val()));
   $("#btnText").click(() => $("#textText").text("Jacob Padilla"));
});


/* this is better and clean way to do function by doing =>. Below is the normal way but also a bit messy function method*/