// Dữ liệu Chương 3 — chuyển từ chuong3.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3).
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[3] = {
  "title": "Chương 3: Kiểm thử tĩnh",
  "questions": [
    {
      "id": 1,
      "question": "Mục tiêu chính của kiểm thử tĩnh là gì?",
      "options": [
        "Đánh giá tài liệu và mã nguồn mà không cần thực thi.",
        "Phát hiện lỗi bằng cách chạy chương trình.",
        "Đảm bảo sản phẩm đạt yêu cầu khách hàng.",
        "Tăng tốc quá trình phát triển phần mềm."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 2,
      "question": "Phát biểu nào sau đây là một ưu điểm của kiểm thử tĩnh?",
      "options": [
        "Nó có thể thay thế kiểm thử động hoàn toàn.",
        "Nó yêu cầu ít thời gian hơn so với kiểm thử động.",
        "Nó không yêu cầu bất kỳ kỹ năng đặc biệt nào.",
        "Nó giúp tìm ra lỗi mà kiểm thử động có thể bỏ qua."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 3,
      "question": "Những hoạt động chính nào sau đây thuộc quy trình xem xét (review) sản phẩm công việc?\n(1. Lập kế hoạch, 2. Khởi tạo đánh giá, 3. Chọn người đánh giá, 4. Đánh giá cá nhân, 5. Cuộc họp đánh giá, 6. Đánh giá các phát hiện xem xét so với tiêu chí, 7. Phân tích và truyền thông vấn đề, 8. Sửa lỗi và báo cáo).",
      "options": [
        "1, 2, 3, 5, 7",
        "1, 4, 5, 6, 7",
        "2, 3, 4, 5, 8",
        "1, 2, 4, 7, 8"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Theo chuẩn ISTQB: Lập kế hoạch, Khởi tạo đánh giá, Đánh giá cá nhân, Phân tích & truyền thông vấn đề, Sửa lỗi và báo cáo"
    },
    {
      "id": 4,
      "question": "Phát biểu nào dưới đây về vai trò trong đánh giá là đúng?",
      "options": [
        "Ban quản lý chịu trách nhiệm lập kế hoạch đánh giá; người điều phối giám sát tính hiệu quả về chi phí.",
        "Ban quản lý đảm bảo các cuộc họp đánh giá diễn ra hiệu quả; lãnh đạo đánh giá quyết định ai sẽ tham gia.",
        "Ban quản lý quyết định việc thực hiện các đánh giá; người điều phối thường là người quản lý hoặc điều hành chung quy trình.",
        "Ban quản lý tổ chức thời gian và địa điểm diễn ra các cuộc đánh giá; lãnh đạo đánh giá phân bổ nhân sự, ngân sách và thời gian."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 5,
      "question": "Điểm khác biệt chính giữa kiểm thử tĩnh và kiểm thử động là gì?",
      "options": [
        "Kiểm thử tĩnh luôn được thực hiện sau kiểm thử động.",
        "Kiểm thử tĩnh chỉ dành cho các tài liệu không phải mã nguồn.",
        "Kiểm thử tĩnh yêu cầu sử dụng công cụ tự động.",
        "Kiểm thử tĩnh kiểm tra phần mềm mà không chạy mã."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 6,
      "question": "Các buổi kiểm tra (inspection) khác với các buổi thảo luận (walkthrough) như thế nào?",
      "options": [
        "Kiểm tra có cấu trúc chặt chẽ, tuân theo quy trình trang trọng và sử dụng tiêu chí đầu vào/đầu ra rõ ràng.",
        "Thảo luận yêu cầu phải có điều phối viên chuyên nghiệp bắt buộc.",
        "Thảo luận chỉ dành cho người dùng cuối tham gia.",
        "Kiểm tra được thực hiện mà không cần tài liệu."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 7,
      "question": "Phát biểu nào sau đây là đúng về kiểm thử tĩnh?",
      "options": [
        "Kiểm thử tĩnh chỉ có thể được thực hiện bởi nhà phát triển.",
        "Kiểm thử tĩnh chỉ có thể áp dụng cho mã nguồn.",
        "Kiểm thử tĩnh có thể được thực hiện mà không cần chạy chương trình.",
        "Kiểm thử tĩnh yêu cầu phải có các công cụ tự động để thực hiện."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 8,
      "question": "Phương pháp nào sau đây không phải là kỹ thuật kiểm thử tĩnh?",
      "options": [
        "Đọc mã nguồn bằng tay (code review).",
        "Chạy kiểm thử đơn vị tự động (unit test execution).",
        "Thảo luận về thiết kế (design walkthrough).",
        "Xem xét tài liệu yêu cầu (requirements review)."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 9,
      "question": "Phát biểu nào về kiểm thử tĩnh và kiểm thử động là đúng?",
      "options": [
        "Kiểm thử tĩnh có thể tìm ra một số loại lỗi (như lỗi thiết kế, yêu cầu) với ít nỗ lực hơn và sớm hơn so với kiểm thử động.",
        "Kiểm thử tĩnh và kiểm thử động tìm ra chính xác cùng một loại lỗi.",
        "Kiểm thử tĩnh phát hiện lỗi thông qua các lỗi hệ thống; kiểm thử động tìm ra lỗi trực tiếp.",
        "Kiểm thử tĩnh và kiểm thử động có các mục tiêu hoàn toàn khác nhau."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 10,
      "question": "Đặc điểm nào sau đây là của buổi kiểm tra (inspection)?",
      "options": [
        "Được dẫn dắt bởi người quản lý dự án.",
        "Sử dụng danh sách kiểm tra (checklist) các lỗi tiềm năng và quy trình trang trọng.",
        "Chỉ tập trung vào hiệu suất của phần mềm.",
        "Không yêu cầu tài liệu trước khi bắt đầu."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 11,
      "question": "Hoạt động nào sau đây không phải là một phần của kiểm thử tĩnh?",
      "options": [
        "Phân tích mã nguồn bằng tay.",
        "Thảo luận nhóm về thiết kế phần mềm.",
        "Thực thi mã trên môi trường kiểm thử để phát hiện lỗi.",
        "Xem xét tài liệu yêu cầu."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 12,
      "question": "Phát biểu nào sau đây mô tả đúng về kiểm thử tĩnh?",
      "options": [
        "Kiểm thử tĩnh có thể bao gồm các cuộc họp đánh giá tài liệu, thiết kế và mã nguồn.",
        "Kiểm thử tĩnh chỉ bao gồm đánh giá mã nguồn.",
        "Kiểm thử tĩnh không thể phát hiện lỗi bảo mật.",
        "Kiểm thử tĩnh luôn yêu cầu một công cụ tự động."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 13,
      "question": "[Thiếu nội dung câu hỏi trong file Word gốc] Chọn tổ hợp phát biểu đúng:",
      "options": [
        "2, 3 và 4.",
        "2 và 3.",
        "1, 2 và 4.",
        "1 và 4."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "File Word gốc không có nội dung câu 13 (chỉ có các phương án và đáp án c)."
    },
    {
      "id": 14,
      "question": "Phát biểu nào sau đây về các yếu tố thành công trong đánh giá là đúng?\n(1. Người đánh giá nên cố gắng đánh giá càng nhiều sản phẩm làm việc càng tốt; 2. Tác giả thừa nhận và đánh giá cao các lỗi được phát hiện; 3. Mỗi cuộc đánh giá có các mục tiêu rõ ràng; 4. Những người kiểm thử không bao giờ tham gia đánh giá; 5. Danh sách kiểm tra nên được chuẩn hóa và sử dụng cho tất cả các loại).",
      "options": [
        "1, 2 và 4",
        "2, 3 và 5",
        "1, 2 và 3",
        "2 và 3"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Ý 2 và 3 là yếu tố thành công cốt lõi; ý 1 phản ánh việc đánh giá quá tải, ý 4 sai vì tester vẫn tham gia, ý 5 sai vì danh sách kiểm tra cần tùy chỉnh theo loại sản phẩm"
    },
    {
      "id": 15,
      "question": "Mục tiêu chính của các buổi thảo luận (walkthrough) là gì?",
      "options": [
        "Đảm bảo mã nguồn không có lỗi hoàn toàn.",
        "Thảo luận các giải pháp kỹ thuật cho vấn đề trong phần mềm.",
        "Giúp các thành viên hiểu rõ tài liệu, mã nguồn và chia sẻ kiến thức.",
        "Phát hiện lỗi mã nguồn theo quy trình kiểm tra nghiêm ngặt nhất."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 16,
      "question": "Kỹ thuật nào sau đây thuộc kiểm thử tĩnh?",
      "options": [
        "Đánh giá mã nguồn và tài liệu mà không cần thực thi.",
        "Đánh giá hiệu suất phần mềm dưới tải cao.",
        "Thực thi mã nguồn để phát hiện lỗi logic khi chạy.",
        "Phát hiện lỗi trong quá trình chạy thử nghiệm hộp đen."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 17,
      "question": "Trong các phương pháp xem xét (review), ai thường là người chịu trách nhiệm dẫn dắt buổi xem xét/kiểm tra chính thức?",
      "options": [
        "Tác giả của tài liệu.",
        "Nhóm phát triển phần mềm.",
        "Điều phối viên (moderator/facilitator) đã qua đào tạo.",
        "Người quản lý dự án."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 18,
      "question": "Một trong những lợi ích chính của kiểm thử tĩnh là gì?",
      "options": [
        "Phát hiện lỗi sớm trong chu kỳ phát triển phần mềm (SDLC), giúp giảm chi phí sửa lỗi.",
        "Giảm thời gian thực thi mã nguồn khi chạy chương trình.",
        "Cải thiện giao diện người dùng trực quan ngay lập tức.",
        "Giúp phát hiện lỗi khi chạy chương trình thực tế."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 19,
      "question": "Phát biểu nào về các cuộc đánh giá (reviews) là đúng?",
      "options": [
        "Các đánh giá kỹ thuật được dẫn dắt bởi một lãnh đạo đã qua đào tạo, kiểm tra thì không.",
        "Kiểm tra (Inspections) thường được dẫn dắt bởi một điều phối viên (moderator) đã qua đào tạo, nhưng điều này không bắt buộc đối với tất cả các loại đánh giá kỹ thuật nhẹ.",
        "Những người tham gia buổi thảo luận luôn cần được đào tạo kỹ lưỡng trước khi tham gia.",
        "Trong một buổi thảo luận (walkthrough), tác giả không bao giờ được tham gia."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 20,
      "question": "Khi nào nên sử dụng kiểm thử tĩnh trong dự án phần mềm?",
      "options": [
        "Ngay từ giai đoạn phát triển yêu cầu và thiết kế ban đầu.",
        "Sau khi mã nguồn đã được triển khai lên môi trường Production.",
        "Khi phần mềm đã sẵn sàng phát hành chính thức.",
        "Chỉ khi kiểm thử động đã thất bại hoàn toàn."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    }
  ]
};
