/* home.js — Hiển thị danh sách chương trên trang chủ */
(function () {
  "use strict";
  var A = window.QuizApp;

  // Đọc tiến độ đang làm dở (nếu dữ liệu chương không đổi)
  function progressOf(n, questions) {
    var p = A.load("progress:" + n, null);
    if (!p || p.sig !== A.signature(questions) || !Array.isArray(p.order)) return null;
    var c = 0, w = 0;
    p.order.forEach(function (qi) { var h = p.history && p.history[qi]; if (h) { if (h.correct) c++; else w++; } });
    return { correct: c, wrong: w, answered: c + w, total: p.order.length };
  }

  function render() {
    var list = document.getElementById("chapterList");
    list.innerHTML = A.CHAPTERS.map(function (n) {
      var res = A.getChapter(n);
      var title = res.data && res.data.title ? res.data.title : "Chương " + n;

      if (!res.ok) {
        // Chương lỗi / chưa có dữ liệu: thẻ bị khoá kèm thông báo
        return '<div class="card chapter disabled"><div class="chapter-num">' + n + "</div>" +
          '<div class="chapter-body"><h2>' + A.escapeHtml(title) + "</h2>" +
          '<p class="warn-text">' + A.escapeHtml(res.error) + "</p></div></div>";
      }

      var count = res.data.questions.length;
      var best = A.getBest(n);
      var prog = progressOf(n, res.data.questions);
      var pct = prog ? Math.round(prog.answered / prog.total * 100) : 0;

      var meta = '<span class="chip">' + count + " câu hỏi</span>" +
        (best ? '<span class="chip ok">' + A.icon("trophy", 14) + " Cao nhất " + best.correct + "/" + best.total + " (" + best.percent + "%)</span>"
          : '<span class="chip">Chưa hoàn thành lần nào</span>');
      var progress = prog && prog.answered
        ? '<div class="mini-progress"><div style="width:' + pct + '%"></div></div>' +
          '<p class="muted small">Đang làm: ' + prog.answered + "/" + prog.total +
          ' · <span class="t-ok">' + prog.correct + ' đúng</span> · <span class="t-bad">' + prog.wrong + " sai</span></p>"
        : "";

      return '<a class="card chapter" href="quiz.html?chapter=' + n + '">' +
        '<div class="chapter-num">' + (res.data.num || n) + "</div>" +
        '<div class="chapter-body"><h2>' + A.escapeHtml(title) + "</h2>" +
        '<div class="chips">' + meta + "</div>" + progress + "</div>" +
        '<span class="chev">' + A.icon("right", 22) + "</span></a>";
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", render);
  // Quay lại bằng nút Back của trình duyệt thì cập nhật lại tiến độ
  window.addEventListener("pageshow", function (e) { if (e.persisted) render(); });
})();
