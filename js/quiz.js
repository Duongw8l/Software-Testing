/* =========================================================
 * quiz.js — Trang làm bài: quiz.html?chapter=1..10
 * Bố cục: thanh bên (lưới số câu) + khung câu hỏi + nút Trước/Kiểm tra/Tiếp.
 * Tiến độ mỗi chương được lưu vào localStorage, tải lại trang không mất bài.
 * ========================================================= */
(function () {
  "use strict";
  var A = window.QuizApp;
  var I = A.icon;

  var chapter = null;   // số chương
  var data = null;      // dữ liệu chương (title, questions)
  var questions = [];   // câu hỏi gốc trong file dữ liệu
  var P = null;         // tiến độ hiện tại (xem newProgress)
  var draft = [];       // đáp án đang chọn (chỉ số GỐC) ở câu hiện tại, chưa bấm Kiểm tra
  var shownQi = null;   // câu đang hiển thị, để biết khi nào cần chạy hiệu ứng chuyển câu

  function $(id) { return document.getElementById(id); }

  /* ================= Tiến độ ================= */
  /* P = {
   *   sig:      mã bộ câu hỏi (đổi dữ liệu thì làm lại từ đầu),
   *   order:    [chỉ số câu gốc theo thứ tự hiển thị],
   *   optOrder: { chỉ số câu: [chỉ số đáp án gốc theo thứ tự hiển thị] },
   *   history:  { chỉ số câu: { selected: [chỉ số đáp án gốc], correct: true/false } },
   *   pos:      vị trí câu đang xem,
   *   retry:    null hoặc [các vị trí đang làm lại câu sai],
   *   done:     đã hiện bảng kết quả hay chưa
   * } */
  function newProgress() {
    var s = A.getSettings();
    var valid = A.range(questions.length).filter(function (i) { return A.isValidQuestion(questions[i]); });
    var optOrder = {};
    valid.forEach(function (i) {
      var idx = A.range(questions[i].options.length);
      optOrder[i] = s.shuffleOptions ? A.shuffle(idx) : idx;
    });
    return {
      sig: A.signature(questions),
      order: s.shuffleQuestions ? A.shuffle(valid) : valid,
      optOrder: optOrder,
      history: {},
      pos: 0,
      retry: null,
      done: false
    };
  }
  function loadProgress() {
    var p = A.load("progress:" + chapter, null);
    if (!p || p.sig !== A.signature(questions) || !Array.isArray(p.order) || !p.order.length) return newProgress();
    return p;
  }
  function saveProgress() { A.save("progress:" + chapter, P); }

  function total() { return P.order.length; }
  function qAt(pos) { return questions[P.order[pos]]; }
  function histAt(pos) { return P.history[P.order[pos]]; }
  function counts() {
    var c = 0, w = 0;
    P.order.forEach(function (qi) { var h = P.history[qi]; if (h) { if (h.correct) c++; else w++; } });
    return { correct: c, wrong: w, answered: c + w };
  }

  /* ================= Khởi tạo ================= */
  document.addEventListener("DOMContentLoaded", function () {
    var n = parseInt(new URLSearchParams(location.search).get("chapter"), 10);
    if (A.CHAPTERS.indexOf(n) === -1) return showError("Không tìm thấy chương. Đường dẫn cần có dạng quiz.html?chapter=1 đến 10.");
    chapter = n;
    var res = A.getChapter(n);
    var title = res.data && res.data.title ? res.data.title : "Chương " + n;
    document.title = title + " · Trắc nghiệm";
    $("pageTitle").textContent = title;
    if (!res.ok) return showError(res.error);
    data = res.data;
    questions = data.questions;
    P = loadProgress();
    if (!total()) return showError("Dữ liệu câu hỏi của chương này không hợp lệ.");
    if (P.pos >= total()) P.pos = 0;

    $("menuBtn").addEventListener("click", function () { toggleSidebar(true); });
    $("sbClose").addEventListener("click", function () { toggleSidebar(false); });
    $("backdrop").addEventListener("click", function () { toggleSidebar(false); });
    $("resetBtn").addEventListener("click", openResetModal);
    $("retryBtn").addEventListener("click", retryWrong);
    $("grid").addEventListener("click", function (e) {
      var b = e.target.closest("[data-pos]");
      if (b) goTo(+b.getAttribute("data-pos"));
    });
    renderAll();
  });

  function showError(msg) {
    document.body.classList.add("no-sidebar");
    $("app").innerHTML = '<div class="card pad notice"><div class="notice-icon">' + I("warn", 28) + '</div>' +
      '<h2>Không thể mở bài trắc nghiệm</h2><p class="muted">' + A.escapeHtml(msg) + '</p>' +
      '<a class="btn primary" href="index.html">' + I("home", 18) + ' Về danh sách chương</a></div>';
  }

  function toggleSidebar(open) { document.body.classList.toggle("sidebar-open", open); }

  /* ================= Hiển thị ================= */
  function renderAll() {
    renderSidebar();
    renderHeader();
    renderQuestion();
  }

  // Lưới số câu: xanh = đúng, đỏ = sai, viền xanh dương = câu đang xem
  function renderSidebar() {
    $("sbTitle").textContent = "Câu hỏi (" + total() + ")";
    var html = "";
    for (var pos = 0; pos < total(); pos++) {
      var h = histAt(pos);
      var cls = "cell" + (h ? (h.correct ? " ok" : " bad") : "") + (pos === P.pos ? " current" : "") +
        (P.retry && P.retry.indexOf(pos) === -1 ? " dim" : "");
      html += '<button class="' + cls + '" data-pos="' + pos + '" aria-label="Câu ' + (pos + 1) + '">' + (pos + 1) + "</button>";
    }
    $("grid").innerHTML = html;
    var wrong = counts().wrong;
    $("retryBtn").hidden = wrong === 0;
    $("retryBtn").innerHTML = I("redo", 16) + " Làm lại câu sai (" + wrong + ")";
  }

  function renderHeader() {
    var c = counts();
    $("scoreOk").textContent = c.correct;
    $("scoreBad").textContent = c.wrong;
    $("progressText").textContent = c.answered + "/" + total();
    $("progressBar").style.width = (c.answered / total() * 100) + "%";
  }

  function renderQuestion() {
    var q = qAt(P.pos);
    var qi = P.order[P.pos];
    var h = histAt(P.pos);
    var multi = A.isMulti(q);
    var correct = A.correctOf(q);
    var checked = !!h;
    var selected = checked ? h.selected : draft;
    var order = P.optOrder[qi] || A.range(q.options.length);

    // --- Hình minh hoạ ---
    var media = "";
    if (q.image) {
      media = '<figure class="q-image"><img src="' + A.escapeHtml(q.image) + '" alt="' + A.escapeHtml(q.imageDesc || "Hình minh hoạ") + '">' +
        (q.imageDesc ? "<figcaption>" + A.escapeHtml(q.imageDesc) + "</figcaption>" : "") + "</figure>";
    } else if (q.type === "image-upload" || q.imageDesc) {
      media = uploadBox(q, qi);
    }

    // --- Các phương án ---
    var opts = order.map(function (orig, i) {
      var isSel = selected.indexOf(orig) !== -1;
      var isRight = correct.indexOf(orig) !== -1;
      var cls = "option";
      if (isSel) cls += " selected";
      var mark = "";
      if (checked) {
        if (isRight) { cls = "option correct"; mark = '<span class="mark ok">' + I("check") + "</span>"; }
        else if (isSel) { cls = "option wrong"; mark = '<span class="mark bad">' + I("x") + "</span>"; }
        else cls = "option faded";
      }
      var filled = isSel || (checked && isRight);
      var box = multi
        ? '<span class="box square' + (filled ? " filled" : "") + '">' + (isSel ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : "") + "</span>"
        : '<span class="box round' + (filled ? " filled" : "") + '"></span>';
      return '<button class="' + cls + '" data-orig="' + orig + '"' + (checked ? " disabled" : "") + ">" + box +
        '<span class="opt-text">' + A.letter(i) + ". " + A.escapeHtml(q.options[orig]) + "</span>" + mark + "</button>";
    }).join("");

    // --- Kết quả câu + giải thích ---
    var middle;
    if (checked) {
      middle = '<div class="verdict ' + (h.correct ? "ok" : "bad") + '">' + I(h.correct ? "check" : "x") + (h.correct ? " Chính xác!" : " Sai rồi") + "</div>";
    } else {
      middle = '<button class="btn primary check" id="checkBtn"' + (draft.length ? "" : " disabled") + ">Kiểm Tra</button>";
    }
    var explain = checked && q.explanation
      ? '<div class="explain">💡 ' + A.escapeHtml(q.explanation) + "</div>" : "";

    var nav = navTargets();
    // Chỉ chạy hiệu ứng hiện dần khi CHUYỂN sang câu khác.
    // (Trước đây hiệu ứng chạy lại sau mỗi lần chọn / kiểm tra → khung câu hỏi bị "giật".)
    var animate = shownQi !== qi;
    shownQi = qi;
    $("app").innerHTML =
      '<div class="card qcard' + (animate ? " fade-in" : "") + '">' +
      '<div class="q-head"><span class="badge">Câu ' + (P.pos + 1) + "/" + total() +
      (multi ? '<span class="badge-note">(Chọn nhiều đáp án)</span>' : "") + "</span>" +
      (P.retry ? '<span class="badge retry">Làm lại câu sai</span>' : "") +
      '<h2 class="q-text">' + A.escapeHtml(q.question) + "</h2></div>" +
      (media ? '<div class="q-media">' + media + "</div>" : "") +
      '<div class="options" id="options">' + opts + "</div>" + explain +
      '<div class="q-foot">' +
      '<button class="btn" id="prevBtn"' + (nav.prev === null ? " disabled" : "") + ">" + I("left", 18) + '<span class="hide-xs">Trước</span></button>' +
      middle +
      '<button class="btn" id="nextBtn"' + (nav.next === null ? " disabled" : "") + '><span class="hide-xs">Tiếp</span>' + I("right", 18) + "</button>" +
      "</div></div>";

    $("options").addEventListener("click", function (e) {
      var b = e.target.closest(".option");
      if (b && !b.disabled) choose(+b.getAttribute("data-orig"));
    });
    if ($("checkBtn")) $("checkBtn").addEventListener("click", check);
    $("prevBtn").addEventListener("click", function () { if (nav.prev !== null) goTo(nav.prev); });
    $("nextBtn").addEventListener("click", function () { if (nav.next !== null) goTo(nav.next); });
    bindUpload(qi);
  }

  /* ================= Ô tải ảnh (câu có hình nhưng chưa có file ảnh) ================= */
  function imgKey(qi) { return "img:" + chapter + ":" + qi; }
  function uploadBox(q, qi) {
    var url = A.load(imgKey(qi), null) || memImages[qi];
    var desc = q.imageDesc ? '<p class="up-desc">"' + A.escapeHtml(q.imageDesc) + '"</p>' : "";
    if (url) {
      return '<div class="upload has-img"><img src="' + A.escapeHtml(url) + '" alt="Ảnh đã tải lên">' +
        '<div class="up-actions"><button class="link" id="upBtn">' + I("upload", 14) + " Thay đổi ảnh</button>" +
        '<button class="link danger" id="upDel">' + I("close", 14) + " Xoá ảnh</button></div>" +
        '<input type="file" accept="image/*" id="upInput" hidden></div>';
    }
    return '<div class="upload"><div class="up-icon">' + I("image", 32) + "</div>" +
      '<p class="up-title">Câu hỏi này có hình ảnh</p>' + desc +
      '<button class="btn" id="upBtn">' + I("upload", 16) + " Tải ảnh lên từ máy</button>" +
      '<input type="file" accept="image/*" id="upInput" hidden></div>';
  }
  var memImages = {}; // ảnh quá lớn không lưu được vào localStorage thì giữ tạm trong bộ nhớ
  function bindUpload(qi) {
    if (!$("upBtn")) return;
    $("upBtn").addEventListener("click", function () { $("upInput").click(); });
    $("upInput").addEventListener("change", function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onloadend = function () {
        memImages[qi] = reader.result;
        if (!A.save(imgKey(qi), reader.result)) {
          toast("Ảnh quá lớn để lưu lâu dài, ảnh chỉ hiện đến khi tải lại trang. Nên chép ảnh vào thư mục images/ và khai báo trường image.");
        }
        renderQuestion();
      };
      reader.readAsDataURL(file);
    });
    if ($("upDel")) $("upDel").addEventListener("click", function () {
      delete memImages[qi];
      A.remove(imgKey(qi));
      renderQuestion();
    });
  }

  /* ================= Thao tác ================= */
  function choose(orig) {
    var q = qAt(P.pos);
    if (histAt(P.pos)) return;
    if (A.isMulti(q)) {
      var k = draft.indexOf(orig);
      if (k === -1) draft.push(orig); else draft.splice(k, 1);
    } else {
      draft = [orig];
    }
    updateSelection();
  }

  // Cập nhật trạng thái chọn ngay trên các nút có sẵn, không vẽ lại cả khung câu hỏi
  function updateSelection() {
    var multi = A.isMulti(qAt(P.pos));
    document.querySelectorAll("#options .option").forEach(function (el) {
      var on = draft.indexOf(+el.getAttribute("data-orig")) !== -1;
      el.classList.toggle("selected", on);
      var box = el.querySelector(".box");
      box.classList.toggle("filled", on);
      if (multi) {
        box.innerHTML = on ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : "";
      }
    });
    if ($("checkBtn")) $("checkBtn").disabled = draft.length === 0;
  }

  function check() {
    if (!draft.length || histAt(P.pos)) return;
    var q = qAt(P.pos);
    P.history[P.order[P.pos]] = { selected: draft.slice(), correct: A.isCorrect(q, draft) };
    draft = [];
    saveProgress();
    renderAll();
    if ($("nextBtn") && !$("nextBtn").disabled) $("nextBtn").focus({ preventScroll: true });
    if (!P.done && counts().answered === total()) finish();
  }

  // Vị trí câu trước/sau. Khi đang "làm lại câu sai" chỉ di chuyển giữa các câu sai.
  function navTargets() {
    var list = P.retry || A.range(total());
    var k = list.indexOf(P.pos);
    if (k === -1) {
      var after = list.filter(function (p) { return p > P.pos; });
      var before = list.filter(function (p) { return p < P.pos; });
      return { prev: before.length ? before[before.length - 1] : null, next: after.length ? after[0] : null };
    }
    return { prev: k > 0 ? list[k - 1] : null, next: k < list.length - 1 ? list[k + 1] : null };
  }

  function goTo(pos) {
    if (pos < 0 || pos >= total()) return;
    P.pos = pos;
    draft = [];
    saveProgress();
    toggleSidebar(false);
    renderAll();
    var cur = document.querySelector(".cell.current");
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest" });
    $("content").scrollTop = 0;
  }

  // Xoá kết quả các câu sai để làm lại (không tính vào điểm cao nhất)
  function retryWrong() {
    var wrongPos = [];
    for (var pos = 0; pos < total(); pos++) {
      var h = histAt(pos);
      if (h && !h.correct) { wrongPos.push(pos); delete P.history[P.order[pos]]; }
    }
    if (!wrongPos.length) return;
    P.retry = wrongPos;
    P.done = false;
    closeModal();
    goTo(wrongPos[0]);
  }

  /* ================= Hộp thoại ================= */
  function openModal(html) {
    $("modal").innerHTML = '<div class="overlay"><div class="dialog fade-in" role="dialog" aria-modal="true">' + html + "</div></div>";
    $("modal").querySelector(".overlay").addEventListener("click", function (e) {
      if (e.target.classList.contains("overlay")) closeModal();
    });
  }
  function closeModal() { $("modal").innerHTML = ""; }
  function modalOpen() { return !!$("modal").firstChild; }

  function openResetModal() {
    var s = A.getSettings();
    openModal(
      '<div class="dlg-head danger"><span class="dlg-icon">' + I("warn", 24) + "</span><h3>Làm lại từ đầu?</h3></div>" +
      '<p class="muted">Mọi kết quả của chương này sẽ bị xoá (ảnh đã tải lên vẫn được giữ lại).</p>' +
      '<label class="switch"><input type="checkbox" id="optQ"' + (s.shuffleQuestions ? " checked" : "") + "><span></span> Xáo trộn thứ tự câu hỏi</label>" +
      '<label class="switch"><input type="checkbox" id="optO"' + (s.shuffleOptions ? " checked" : "") + "><span></span> Xáo trộn thứ tự đáp án</label>" +
      '<div class="dlg-actions"><button class="btn ghost" id="dlgCancel">Huỷ</button>' +
      '<button class="btn danger" id="dlgOk">Đồng ý</button></div>'
    );
    $("dlgCancel").addEventListener("click", closeModal);
    $("dlgOk").addEventListener("click", function () {
      A.saveSettings({ shuffleQuestions: $("optQ").checked, shuffleOptions: $("optO").checked });
      P = newProgress();
      draft = [];
      saveProgress();
      closeModal();
      goTo(0);
    });
  }

  // Bảng kết quả khi đã làm hết các câu
  function finish() {
    var c = counts();
    var percent = Math.round(c.correct / total() * 100);
    var record = false;
    if (!P.retry) record = A.saveBest(chapter, { correct: c.correct, total: total(), percent: percent, date: new Date().toISOString() });
    P.done = true;
    saveProgress();
    var best = A.getBest(chapter);
    var tone = percent >= 80 ? "ok" : percent >= 50 ? "mid" : "bad";
    openModal(
      '<div class="result"><div class="result-icon ' + tone + '">' + I("trophy", 30) + "</div>" +
      "<h3>" + (P.retry ? "Hoàn thành phần làm lại!" : "Hoàn thành bài!") + "</h3>" +
      '<div class="score ' + tone + '">' + percent + "%</div>" +
      '<div class="stats"><div><strong class="t-ok">' + c.correct + "</strong><span>Đúng</span></div>" +
      '<div><strong class="t-bad">' + c.wrong + "</strong><span>Sai</span></div>" +
      "<div><strong>" + total() + "</strong><span>Tổng</span></div></div>" +
      (record ? '<p class="record">🎉 Kỷ lục mới của chương!</p>'
        : best ? '<p class="muted">Điểm cao nhất: ' + best.correct + "/" + best.total + " (" + best.percent + "%)</p>" : "") +
      (P.retry ? '<p class="muted small">Lượt làm lại câu sai không tính vào điểm cao nhất.</p>' : "") +
      '<div class="dlg-actions center">' +
      (c.wrong ? '<button class="btn primary" id="rWrong">' + I("redo", 16) + " Làm lại câu sai (" + c.wrong + ")</button>" : "") +
      '<button class="btn" id="rAgain">' + I("reset", 16) + " Làm lại</button>" +
      '<button class="btn ghost" id="rReview">Xem lại bài</button></div></div>'
    );
    if ($("rWrong")) $("rWrong").addEventListener("click", retryWrong);
    $("rAgain").addEventListener("click", openResetModal);
    $("rReview").addEventListener("click", closeModal);
  }

  var toastTimer;
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 6000);
  }

  /* ================= Phím tắt =================
   * 1–9 hoặc A–I: chọn đáp án · Enter: kiểm tra / sang câu tiếp · ← →: chuyển câu · Esc: đóng hộp thoại */
  document.addEventListener("keydown", function (e) {
    if (!P || e.ctrlKey || e.metaKey || e.altKey) return;
    if (modalOpen()) { if (e.key === "Escape") closeModal(); return; }
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    var q = qAt(P.pos);
    var order = P.optOrder[P.order[P.pos]] || A.range(q.options.length);
    var k = e.key.toUpperCase();
    var idx = /^[1-9]$/.test(k) ? +k - 1 : (/^[A-I]$/.test(k) ? k.charCodeAt(0) - 65 : -1);
    if (idx >= 0 && idx < order.length) {
      e.preventDefault();
      choose(order[idx]);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (!histAt(P.pos)) check();
      else if ($("nextBtn") && !$("nextBtn").disabled) $("nextBtn").click();
    } else if (e.key === "ArrowRight" && !$("nextBtn").disabled) {
      $("nextBtn").click();
    } else if (e.key === "ArrowLeft" && !$("prevBtn").disabled) {
      $("prevBtn").click();
    } else if (e.key === "Escape") {
      toggleSidebar(false);
    }
  });
})();
