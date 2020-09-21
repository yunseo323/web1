var Body = {
  SetColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  SetBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
var links = {
  SetColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i += 1;
    }
  },
};

function nightDayHandler(doc) {
  if (doc.value === "night") {
    //야간 모드
    Body.SetColor("white");
    Body.SetBackgroundColor("black");
    doc.value = "day";
    links.SetColor("powderblue");
  } else {
    //주간 모드
    Body.SetColor("black");
    Body.SetBackgroundColor("white");
    doc.value = "night";
    links.SetColor("blue");
  }
}
