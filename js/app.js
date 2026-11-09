/* =========================================================
 * app.js — Logic dùng chung: lưu trữ, giao diện sáng/tối,
 * xáo trộn, chấm điểm, biểu tượng SVG.
 * Nạp bằng <script> thường (không module) để chạy được qua file://
 * ========================================================= */
(function () {
  "use strict";

  // Danh sách chương hiển thị trên trang chủ
  var CHAPTERS = [1, 2, 3, 4];
  var PREFIX = "quizapp:";

  /* ---------- localStorage an toàn (có thể bị chặn ở chế độ riêng tư / file://) ---------- */
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }
  // Trả về false nếu không lưu được (ví dụ: ảnh quá lớn làm đầy bộ nhớ)
  function save(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }
  function remove(key) {
    try { localStorage.removeItem(PREFIX + key); } catch (e) { /* bỏ qua */ }
  }

  /* ---------- Biểu tượng SVG (không cần thư viện ngoài) ---------- */
  var ICON_PATHS = {
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    x: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    left: '<polyline points="15 18 9 12 15 6"/>',
    right: '<polyline points="9 18 15 12 9 6"/>',
    menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    reset: '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>',
    warn: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    redo: '<path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>',
    trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/>'
  };
  function icon(name, size) {
    size = size || 20;
    return '<svg class="icon" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON_PATHS[name] || "") + "</svg>";
  }

  /* ---------- Chế độ sáng / tối ---------- */
  function getTheme() {
    var t = load("theme", null);
    if (t === "light" || t === "dark") return t;
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.innerHTML = icon(theme === "dark" ? "sun" : "moon");
      btn.title = theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";
      btn.setAttribute("aria-label", btn.title);
    }
  }
  function toggleTheme() {
    var next = getTheme() === "dark" ? "light" : "dark";
    save("theme", next);
    applyTheme(next);
  }
  // Áp dụng ngay khi nạp file (đặt trong <head>) để không bị nháy màu
  applyTheme(getTheme());
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getTheme());
    var btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  });

  /* ---------- Cài đặt xáo trộn ---------- */
  function getSettings() {
    var s = load("settings", {});
    return { shuffleQuestions: s.shuffleQuestions === true, shuffleOptions: s.shuffleOptions === true };
  }
  function saveSettings(s) { save("settings", s); }

  /* ---------- Điểm cao nhất mỗi chương (tính theo %) ---------- */
  function getBest(chapter) { return load("best:" + chapter, null); }
  function saveBest(chapter, result) {
    var old = getBest(chapter);
    if (!old || result.percent > old.percent) {
      save("best:" + chapter, result);
      return true; // kỷ lục mới
    }
    return false;
  }

  /* ---------- Dữ liệu chương ---------- */
  // Trả về { ok, data, error } — không ném lỗi để trang không bị hỏng
  function getChapter(n) {
    var all = window.CHAPTER_DATA || {};
    var data = all[n];
    if (!data) return { ok: false, error: "Chương " + n + " chưa có dữ liệu (thiếu hoặc lỗi file data/chuong" + n + ".js)." };
    if (!Array.isArray(data.questions) || data.questions.length === 0) {
      return { ok: false, data: data, error: "Chương " + n + " chưa có câu hỏi nào." };
    }
    return { ok: true, data: data };
  }

  /* ---------- Chuẩn hoá đáp án đúng: luôn trả về mảng chỉ số hợp lệ ---------- */
  function correctOf(q) {
    var arr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
    return arr.filter(function (i) { return typeof i === "number" && i >= 0 && i < q.options.length; });
  }
  // Câu chọn nhiều đáp án nếu type là "multiple" hoặc có hơn 1 đáp án đúng
  function isMulti(q) { return q.type === "multiple" || correctOf(q).length > 1; }
  // Câu hỏi có hợp lệ để hiển thị không
  function isValidQuestion(q) {
    return !!q && typeof q.question === "string" && Array.isArray(q.options) && q.options.length > 0 && correctOf(q).length > 0;
  }

  /* ---------- Chấm một câu: đúng khi chọn ĐỦ và KHÔNG THỪA ---------- */
  function isCorrect(q, selected) {
    var correct = correctOf(q);
    if (selected.length !== correct.length) return false;
    return selected.every(function (i) { return correct.indexOf(i) !== -1; });
  }

  /* ---------- Xáo trộn (Fisher–Yates), trả về mảng mới ---------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function range(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }

  // Mã nhận diện bộ câu hỏi: nếu file dữ liệu bị sửa thì tiến độ cũ không còn hợp lệ
  function signature(questions) {
    var s = questions.map(function (q) { return (q && q.question) + "|" + (q && q.options ? q.options.length : 0); }).join("#");
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return questions.length + ":" + h;
  }

  // Ký hiệu a, b, c, ... (giống trang mẫu)
  function letter(i) { return String.fromCharCode(97 + i); }

  // Chống chèn HTML khi hiển thị nội dung câu hỏi
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  window.QuizApp = {
    CHAPTERS: CHAPTERS,
    load: load, save: save, remove: remove,
    icon: icon,
    getChapter: getChapter,
    getSettings: getSettings, saveSettings: saveSettings,
    getBest: getBest, saveBest: saveBest,
    correctOf: correctOf, isMulti: isMulti, isValidQuestion: isValidQuestion, isCorrect: isCorrect,
    shuffle: shuffle, range: range, signature: signature,
    letter: letter, escapeHtml: escapeHtml
  };
})();
