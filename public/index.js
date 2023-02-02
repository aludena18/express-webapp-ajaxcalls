$(".btn-auth").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    method: "POST",
    url: "/login",
    data: {
      user: $(".user-input").val(),
      pass: $(".password-input").val(),
    },
  }).done(function (data) {
    console.log(data);
    renderResult($("#collapseAuthResult"), $(".res-auth"), data);
  });
});

$(".btn-ulist").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    method: "POST",
    url: "/ulist",
    data: {
      units: $(".ulist-input").val(),
    },
  }).done(function (data) {
    console.log(data);
    renderResult($("#collapseUListResult"), $(".res-ulist"), data);
  });
});

const renderResult = function (card, el, data) {
  console.log(el, data);
  el.html(data);
  card.addClass("show");
};
