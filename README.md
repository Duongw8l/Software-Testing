# Trắc nghiệm Kiểm thử phần mềm

Ứng dụng ôn tập trắc nghiệm môn Kiểm thử phần mềm (4 chương, 80 câu), viết bằng HTML/CSS/JavaScript thuần — không cần cài đặt, không cần server.

**Dùng online:** https://duongw8l.github.io/Software-Testing/

## Tính năng
- 4 chương: Cơ bản về kiểm thử · Kiểm thử trong vòng đời phát triển · Kiểm thử tĩnh · Kỹ thuật kiểm thử
- Lưới số câu (xanh = đúng, đỏ = sai), chuyển câu tự do, nút Trước / Kiểm Tra / Tiếp
- Câu một đáp án và nhiều đáp án, hiện đáp án đúng và giải thích
- Bảng kết quả, làm lại toàn bộ hoặc chỉ làm lại câu sai, lưu điểm cao nhất
- Xáo trộn câu hỏi / đáp án, chế độ sáng / tối, dùng tốt trên điện thoại
- Tiến độ lưu trong trình duyệt (localStorage)

## Chạy trên máy
Mở `index.html` bằng trình duyệt.

## Sửa câu hỏi
Dữ liệu nằm trong `data/chuong1.js` … `data/chuong4.js`. Mỗi câu có dạng:

```js
{
  id: 1,
  question: "Nội dung câu hỏi",
  options: ["Đáp án a", "Đáp án b", "Đáp án c", "Đáp án d"],
  correctAnswer: 3,        // chỉ số từ 0 (a=0 … d=3); câu nhiều đáp án dùng mảng, ví dụ [0, 2]
  type: "single",          // "single" | "multiple" | "image-upload"
  image: null,             // hoặc "images/ten_anh.png"
  explanation: ""          // giải thích (có thể để trống)
}
```

## Cấu trúc
```
index.html      trang chủ (danh sách chương)
quiz.html       trang làm bài (?chapter=1..4)
css/style.css   giao diện
js/app.js       logic chung (lưu trữ, chấm điểm, xáo trộn, giao diện sáng/tối)
js/home.js      trang chủ
js/quiz.js      trang làm bài
data/           câu hỏi từng chương
images/         hình minh hoạ
```
