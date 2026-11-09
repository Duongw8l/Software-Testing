// Dữ liệu Chương 1 — chuyển từ chuong1.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3).
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[1] = {
  "title": "Chương 1: Cơ bản về kiểm thử phần mềm",
  "questions": [
    {
      "id": 1,
      "question": "Lợi ích của việc theo dõi (traceability) giữa các tài liệu cơ bản kiểm thử và sản phẩm công việc kiểm thử là gì?",
      "options": [
        "Theo dõi cho phép báo cáo tiến độ kiểm thử và lỗi liên quan đến các yêu cầu, điều này dễ hiểu hơn đối với các bên liên quan.",
        "Theo dõi cho phép các nhà phát triển tạo mã dễ kiểm thử hơn.",
        "Theo dõi đảm bảo rằng số lượng sản phẩm công việc kiểm thử bị giới hạn để tiết kiệm thời gian sản xuất chúng.",
        "Theo dõi có nghĩa là các tài liệu cơ bản kiểm thử và sản phẩm công việc kiểm thử không cần phải được xem xét."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 2,
      "question": "Nguyên lý nào sau đây KHÔNG phải là nguyên lý kiểm thử phần mềm?",
      "options": [
        "Kiểm thử không thể phát hiện tất cả các lỗi.",
        "Kiểm thử nên tập trung vào các lỗi nghiêm trọng nhất trước tiên.",
        "Kiểm thử là một phần quan trọng của quy trình phát triển phần mềm.",
        "Kiểm thử nên được thực hiện càng muộn càng tốt trong chu kỳ phát triển."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 3,
      "question": "Trong một kế hoạch kiểm thử (Test Plan), tiêu chí nào sau đây thường được xác định?",
      "options": [
        "Thời gian phát triển phần mềm.",
        "Chi phí sản xuất phần mềm.",
        "Nhu cầu phần cứng cho phần mềm.",
        "Phạm vi của kiểm thử."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 4,
      "question": "Trong quy trình kiểm thử phần mềm, bước nào là giai đoạn đầu tiên trong quy trình phát triển kiểm thử?",
      "options": [
        "Thiết kế kiểm thử.",
        "Xác minh yêu cầu.",
        "Lập kế hoạch kiểm thử.",
        "Thực hiện kiểm thử."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 5,
      "question": "Điều nào sau đây KHÔNG phải là một kỹ thuật kiểm thử phần mềm chuẩn?",
      "options": [
        "Kiểm thử phân tích.",
        "Kiểm thử ngoại vi.",
        "Kiểm thử dữ liệu.",
        "Kiểm thử chức năng."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 6,
      "question": "Trong giai đoạn \"Thực hiện kiểm thử\" (Test Execution), nhóm kiểm thử thường thực hiện các hoạt động nào?",
      "options": [
        "Thiết kế các trường hợp kiểm thử và kịch bản kiểm thử.",
        "Chạy các trường hợp kiểm thử đã được thiết kế, ghi nhận kết quả và báo cáo lỗi.",
        "Đánh giá các lỗi và cập nhật kế hoạch kiểm thử.",
        "Xác minh các yêu cầu và mục tiêu kiểm thử."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 7,
      "question": "Điều nào dưới đây là quan trọng nhất để thúc đẩy và duy trì mối quan hệ tốt giữa người kiểm thử (Tester) và nhà phát triển (Developer)?",
      "options": [
        "Xác định các cách khắc phục lỗi tiềm năng cho khách hàng.",
        "Thúc đẩy phần mềm chất lượng tốt hơn bất cứ khi nào có thể.",
        "Hiểu những gì các nhà quản lý coi trọng về kiểm thử.",
        "Giải thích kết quả kiểm thử một cách trung lập."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 8,
      "question": "Ghép các thuật ngữ với định nghĩa tương ứng:\n1) Tài liệu mô tả các điều kiện, đầu vào và kết quả mong đợi của một bài kiểm thử.\n2) Quá trình xác minh rằng phần mềm đáp ứng các yêu cầu và tiêu chuẩn đã định.\n3) Quy trình quản lý và theo dõi các lỗi được phát hiện trong quá trình kiểm thử.",
      "options": [
        "1) kế hoạch kiểm thử, 2) xác thực, 3) quản lý lỗi.",
        "1) trường hợp kiểm thử, 2) xác thực, 3) quản lý lỗi.",
        "1) trường hợp kiểm thử, 2) kiểm tra, 3) quản lý lỗi.",
        "1) trường hợp kiểm thử, 2) xác thực, 3) theo dõi lỗi."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Quy trình quản lý và theo dõi các lỗi gọi là quản lý lỗi (defect management). Lưu ý: file Word vừa in đậm b vừa ghi \"(Đáp án đúng)\" ở d; đang chọn b."
    },
    {
      "id": 9,
      "question": "Mục tiêu chính của giai đoạn \"Thiết kế kiểm thử\" (Test Design) trong quy trình kiểm thử là gì?",
      "options": [
        "Tạo ra các trường hợp kiểm thử và kịch bản kiểm thử dựa trên yêu cầu và thiết kế.",
        "Phát hiện và sửa lỗi trong phần mềm.",
        "Xác định các yêu cầu kiểm thử và mục tiêu.",
        "Đánh giá hiệu suất của phần mềm dưới các điều kiện khác nhau."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 10,
      "question": "Điều nào dưới đây là mục tiêu chính của kiểm thử phần mềm?",
      "options": [
        "Để giảm chi phí phát triển phần mềm.",
        "Để phát hiện và sửa lỗi trước khi phần mềm được phát hành.",
        "Để đảm bảo rằng phần mềm được phát triển nhanh chóng.",
        "Để kiểm tra khả năng hoạt động của phần mềm trong mọi điều kiện."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 11,
      "question": "Trong quy trình kiểm thử phần mềm, \"Quản lý lỗi\" (Defect Management) thường bao gồm các hoạt động nào?",
      "options": [
        "Tạo các trường hợp kiểm thử mới để cải thiện chất lượng phần mềm.",
        "Theo dõi và quản lý các lỗi được phát hiện, bao gồm việc phân loại, ưu tiên và xác nhận lỗi.",
        "Thiết kế và thực hiện các bài kiểm thử mới.",
        "Đánh giá các yêu cầu và thay đổi trong kế hoạch kiểm thử."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 12,
      "question": "Khi nào nên thực hiện giai đoạn \"Đánh giá và báo cáo\" trong quy trình kiểm thử?",
      "options": [
        "Trước khi thực hiện các bài kiểm thử để xác định phạm vi kiểm thử.",
        "Trong giai đoạn phát triển phần mềm khi các lỗi mới được phát hiện.",
        "Ngay khi thiết kế kiểm thử được hoàn thành.",
        "Sau khi tất cả các bài kiểm thử đã được thực hiện và kết quả đã được ghi nhận."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 13,
      "question": "Nguyên tắc nào sau đây KHÔNG phải là nguyên tắc kiểm thử phần mềm?",
      "options": [
        "Kiểm thử sớm giúp phát hiện lỗi sớm hơn và giảm chi phí sửa chữa.",
        "Kiểm thử không thể phát hiện tất cả các lỗi.",
        "Kiểm thử chỉ cần thực hiện một lần để đảm bảo rằng phần mềm hoạt động chính xác.",
        "Các lỗi thường tập trung ở một số phần của phần mềm."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 14,
      "question": "Trong kiểm thử phần mềm, \"Tài liệu kiểm thử\" (Test Documentation) thường chứa thông tin nào?",
      "options": [
        "Các hợp đồng và yêu cầu pháp lý.",
        "Các kế hoạch kiểm thử, trường hợp kiểm thử, và báo cáo kiểm thử.",
        "Mã nguồn và các tài liệu lập trình.",
        "Tất cả các tài liệu thiết kế hệ thống."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 15,
      "question": "Có bao nhiêu tiêu chí tiêu chuẩn để đánh giá một trường hợp kiểm thử (Test Case) tốt?",
      "options": [
        "5",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 16,
      "question": "Đâu là phát biểu đúng về Đảm bảo chất lượng (Quality Assurance - QA)?",
      "options": [
        "Kiểm thử là kiểm soát chất lượng (QC), không phải QA.",
        "QA bao gồm cả kiểm thử và phân tích nguyên nhân gốc rễ.",
        "QA và kiểm thử là giống nhau.",
        "QA không áp dụng cho kiểm thử."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 17,
      "question": "Một báo cáo lỗi (Defect / Bug Report) thường bao gồm các thông tin nào?",
      "options": [
        "Tên các nhà phát triển và phân tích thiết kế.",
        "Mô tả lỗi, bước để tái hiện lỗi, và ảnh chụp màn hình nếu có.",
        "Lịch trình kiểm thử và yêu cầu chức năng.",
        "Thời gian phát triển và chi phí."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 18,
      "question": "Việc đảm bảo rằng thiết kế kiểm thử bắt đầu trong quá trình xác định yêu cầu hỗ trợ mục tiêu kiểm thử nào sau đây?",
      "options": [
        "Tìm các lỗi thông qua kiểm thử động.",
        "Ngăn ngừa các lỗi trong hệ thống.",
        "Tăng cường sự tin tưởng vào hệ thống.",
        "Hoàn thành dự án đúng thời hạn."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 19,
      "question": "Điều nào sau đây KHÔNG phải là một loại kiểm thử (Test Type) chuẩn?",
      "options": [
        "Kiểm thử chức năng.",
        "Kiểm thử hiệu suất.",
        "Kiểm thử hồi quy.",
        "Kiểm thử phát triển."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 20,
      "question": "Một nhóm kiểm thử phát hiện nhiều lỗi trong quá trình phát triển nhưng bị cấp trên phàn nàn vì người dùng phát hiện một số lỗi sau khi phát hành (dù người dùng hài lòng và lỗi chỉ ảnh hưởng thấp). Nguyên lý kiểm thử nào dưới đây giúp giải thích lý do vì sao một số lỗi có thể bị bỏ qua?",
      "options": [
        "Tập trung lỗi (Defect clustering).",
        "Nghịch lý thuốc trừ sâu (Pesticide paradox).",
        "Kiểm thử toàn diện là không thể (Exhaustive testing is impossible).",
        "Sai lầm không có lỗi (Absence-of-errors fallacy)."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    }
  ]
};
