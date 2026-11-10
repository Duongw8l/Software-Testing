// Dữ liệu Chương 1 (Bộ 2) — chuyển từ Chuong_1_cau_hoi_dap_an.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3).
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[5] = {
  "title": "Chương 1: Cơ bản về kiểm thử phần mềm (Bộ 2)",
  "num": 1,
  "questions": [
    {
      "id": 1,
      "question": "Trong quy trình kiểm thử phần mềm, \"Quản lý lỗi\" thường bao gồm các hoạt động nào?",
      "options": [
        "Đánh giá các yêu cầu và thay đổi trong kế hoạch kiểm thử.",
        "Thiết kế và thực hiện các bài kiểm thử mới.",
        "Tạo các trường hợp kiểm thử mới để cải thiện chất lượng phần mềm.",
        "Theo dõi và quản lý các lỗi được phát hiện, bao gồm việc phân loại, ưu tiên và xác nhận lỗi."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 2,
      "question": "Lợi ích của việc theo dõi giữa các tài liệu cơ bản kiểm thử và sản phẩm công việc kiểm thử là gì?",
      "options": [
        "Theo dõi có nghĩa là các tài liệu cơ bản kiểm thử và sản phẩm công việc kiểm thử không cần phải được xem xét.",
        "Theo dõi đảm bảo rằng số lượng sản phẩm công việc kiểm thử bị giới hạn để tiết kiệm thời gian sản xuất chúng.",
        "Theo dõi cho phép các nhà phát triển tạo mã dễ kiểm thử hơn.",
        "Theo dõi cho phép báo cáo tiến độ kiểm thử và lỗi liên quan đến các yêu cầu, điều này dễ hiểu hơn đối với các bên liên quan."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 3,
      "question": "Khi nào nên thực hiện giai đoạn \"Đánh giá và báo cáo\" trong quy trình kiểm thử?",
      "options": [
        "Ngay khi thiết kế kiểm thử được hoàn thành.",
        "Sau khi tất cả các bài kiểm thử đã được thực hiện và kết quả đã được ghi nhận.",
        "Trong giai đoạn phát triển phần mềm khi các lỗi mới được phát hiện.",
        "Trước khi thực hiện các bài kiểm thử để xác định phạm vi kiểm thử."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 4,
      "question": "Điều nào sau đây là một lý do chính để sử dụng kiểm thử tự động?",
      "options": [
        "Để kiểm tra tất cả các tình huống kiểm thử một cách thủ công.",
        "Để giảm thiểu việc phải viết mã phần mềm.",
        "Để đảm bảo rằng tất cả các yêu cầu chức năng được đáp ứng.",
        "Để tăng cường độ tin cậy của kết quả kiểm thử và tiết kiệm thời gian khi thực hiện kiểm thử lặp đi lặp lại."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 5,
      "question": "Một nhóm kiểm thử liên tục phát hiện số lượng lớn lỗi trong quá trình phát triển (kể cả kiểm thử hệ thống), nhưng ban giám đốc không hài lòng vì nhóm bỏ sót một số lỗi mà người dùng phát hiện sau khi phát hành (người dùng nhìn chung hài lòng, lỗi chủ yếu ảnh hưởng thấp). Nguyên lý kiểm thử nào giúp quản lý kiểm thử giải thích?",
      "options": [
        "Kiểm thử toàn diện là không thể.",
        "Sai lầm không có lỗi.",
        "Nghịch lý thuốc trừ sâu (Pesticide paradox).",
        "Tập trung lỗi."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 6,
      "question": "Nguyên tắc nào sau đây KHÔNG phải là nguyên tắc kiểm thử phần mềm? (bản 1)",
      "options": [
        "Kiểm thử sớm giúp phát hiện lỗi sớm hơn và giảm chi phí sửa chữa.",
        "Kiểm thử không thể phát hiện tất cả các lỗi.",
        "Các lỗi thường tập trung ở một số phần của phần mềm.",
        "Kiểm thử chỉ cần thực hiện một lần để đảm bảo rằng phần mềm hoạt động chính xác."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 7,
      "question": "Nguyên lý nào sau đây liên quan đến việc kiểm thử phần mềm là không thể kiểm tra tất cả các kịch bản và tình huống?",
      "options": [
        "Kiểm thử toàn diện là không thể.",
        "Tập trung lỗi.",
        "Nghịch lý thuốc trừ sâu.",
        "Sai lầm không có lỗi."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 8,
      "question": "Trong quy trình kiểm thử phần mềm, bước nào là giai đoạn đầu tiên trong quy trình phát triển kiểm thử?",
      "options": [
        "Xác minh yêu cầu.",
        "Lập kế hoạch kiểm thử.",
        "Thực hiện kiểm thử.",
        "Thiết kế kiểm thử."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 9,
      "question": "Điều nào sau đây KHÔNG phải là một kỹ thuật kiểm thử phần mềm?",
      "options": [
        "Kiểm thử ngoại vi.",
        "Kiểm thử phân tích.",
        "Kiểm thử chức năng.",
        "Kiểm thử dữ liệu."
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
        "Để đảm bảo rằng phần mềm được phát triển nhanh chóng.",
        "Để giảm chi phí phát triển phần mềm.",
        "Để phát hiện và sửa lỗi trước khi phần mềm được phát hành.",
        "Để kiểm tra khả năng hoạt động của phần mềm trong mọi điều kiện."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 11,
      "question": "Đâu là phát biểu đúng về đảm bảo chất lượng (Quality Assurance - QA)? (đáp án theo đề)",
      "options": [
        "QA bao gồm cả kiểm thử và phân tích nguyên nhân gốc rễ.",
        "QA và kiểm thử là giống nhau.",
        "Kiểm thử là kiểm soát chất lượng, không phải QA.",
        "QA không áp dụng cho kiểm thử."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 12,
      "question": "Có bao nhiêu tiêu chí để đánh giá một test case tốt?",
      "options": [
        "4",
        "5",
        "3",
        "2"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 13,
      "question": "Một báo cáo lỗi thường bao gồm các thông tin nào?",
      "options": [
        "Tên các nhà phát triển và phân tích thiết kế.",
        "Lịch trình kiểm thử và yêu cầu chức năng.",
        "Mô tả lỗi, bước để tái hiện lỗi, và ảnh chụp màn hình nếu có.",
        "Thời gian phát triển và chi phí."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 14,
      "question": "Với các sản phẩm công việc kiểm thử sau, xác định hoạt động chính tạo ra sản phẩm: 1. Lịch trình thực hiện kiểm thử. 2. Trường hợp kiểm thử. 3. Báo cáo tiến độ kiểm thử. 4. Báo cáo lỗi.",
      "options": [
        "1) Lập kế hoạch kiểm thử, 2) Thiết kế kiểm thử, 3) Thực hiện kiểm thử, 4) Triển khai kiểm thử.",
        "1) Thực hiện kiểm thử, 2) Phân tích kiểm thử, 3) Hoàn thành kiểm thử, 4) Thực hiện kiểm thử.",
        "1) Triển khai kiểm thử, 2) Thiết kế kiểm thử, 3) Giám sát kiểm thử, 4) Thực hiện kiểm thử.",
        "1) Kiểm soát kiểm thử, 2) Phân tích kiểm thử, 3) Giám sát kiểm thử, 4) Triển khai kiểm thử."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 15,
      "question": "Ghép các thuật ngữ với định nghĩa: 1. Tài liệu mô tả các điều kiện, đầu vào và kết quả mong đợi của một bài kiểm thử. 2. Quá trình xác minh rằng phần mềm đáp ứng các yêu cầu và tiêu chuẩn đã định. 3. Quy trình quản lý và theo dõi các lỗi được phát hiện trong quá trình kiểm thử.",
      "options": [
        "1) trường hợp kiểm thử, 2) kiểm tra, 3) quản lý lỗi.",
        "1) kế hoạch kiểm thử, 2) xác thực, 3) quản lý lỗi.",
        "1) trường hợp kiểm thử, 2) xác thực, 3) quản lý lỗi.",
        "1) trường hợp kiểm thử, 2) xác thực, 3) theo dõi lỗi."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 16,
      "question": "Việc đảm bảo thiết kế kiểm thử bắt đầu trong quá trình xác định yêu cầu là rất quan trọng. Mục tiêu kiểm thử nào hỗ trợ điều này?",
      "options": [
        "Tìm các lỗi thông qua kiểm thử động.",
        "Ngăn ngừa các lỗi trong hệ thống.",
        "Hoàn thành dự án đúng thời hạn.",
        "Tăng cường sự tin tưởng vào hệ thống."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 17,
      "question": "Trong giai đoạn \"Thực hiện kiểm thử\", nhóm kiểm thử thường thực hiện các hoạt động nào?",
      "options": [
        "Đánh giá các lỗi và cập nhật kế hoạch kiểm thử.",
        "Xác minh các yêu cầu và mục tiêu kiểm thử.",
        "Thiết kế các trường hợp kiểm thử và kịch bản kiểm thử.",
        "Chạy các trường hợp kiểm thử đã được thiết kế, ghi nhận kết quả và báo cáo lỗi."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 18,
      "question": "Điều nào sau đây KHÔNG phải là một loại kiểm thử?",
      "options": [
        "Kiểm thử chức năng.",
        "Kiểm thử phát triển.",
        "Kiểm thử hiệu suất.",
        "Kiểm thử hồi quy."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 19,
      "question": "Phát biểu nào về kiểm thử hồi quy (Regression Testing) là đúng?",
      "options": [
        "Kiểm thử hồi quy nhằm kiểm tra xem các thay đổi gần đây có gây ra lỗi cho các tính năng đã tồn tại không.",
        "Kiểm thử hồi quy chỉ nên thực hiện khi phần mềm được phát hành lần đầu tiên.",
        "Kiểm thử hồi quy được thực hiện để kiểm tra các tính năng mới trong phần mềm.",
        "Kiểm thử hồi quy tập trung vào việc cải thiện hiệu suất phần mềm."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 20,
      "question": "Trong kiểm thử phần mềm, 'tài liệu kiểm thử' thường chứa thông tin nào?",
      "options": [
        "Tất cả các tài liệu thiết kế hệ thống.",
        "Các hợp đồng và yêu cầu pháp lý.",
        "Mã nguồn và các tài liệu lập trình.",
        "Các kế hoạch kiểm thử, trường hợp kiểm thử, và báo cáo kiểm thử."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 21,
      "question": "Mục tiêu chính của giai đoạn \"Thiết kế kiểm thử\" trong quy trình kiểm thử là gì?",
      "options": [
        "Tạo ra các trường hợp kiểm thử và kịch bản kiểm thử dựa trên yêu cầu và thiết kế.",
        "Phát hiện và sửa lỗi trong phần mềm.",
        "Đánh giá hiệu suất của phần mềm dưới các điều kiện khác nhau.",
        "Xác định các yêu cầu kiểm thử và mục tiêu."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 22,
      "question": "Điều gì KHÔNG phải là lý do để kiểm thử?",
      "options": [
        "Để đóng góp vào chất lượng của các thành phần hoặc hệ thống.",
        "Để cho phép các nhà phát triển viết mã nhanh nhất có thể.",
        "Để giảm thiểu rủi ro lỗi trong quá trình vận hành.",
        "Để đáp ứng bất kỳ yêu cầu hợp đồng hoặc pháp lý."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 23,
      "question": "Trong một kế hoạch kiểm thử, các tiêu chí nào sau đây thường được xác định?",
      "options": [
        "Phạm vi của kiểm thử.",
        "Nhu cầu phần cứng cho phần mềm.",
        "Chi phí sản xuất phần mềm.",
        "Thời gian phát triển phần mềm."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 24,
      "question": "Nguyên lý nào sau đây KHÔNG phải là nguyên lý kiểm thử phần mềm? (bản 2)",
      "options": [
        "Kiểm thử nên tập trung vào các lỗi nghiêm trọng nhất trước tiên.",
        "Kiểm thử nên được thực hiện càng muộn càng tốt trong chu kỳ phát triển.",
        "Kiểm thử là một phần quan trọng của quy trình phát triển phần mềm.",
        "Kiểm thử không thể phát hiện tất cả các lỗi."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 25,
      "question": "Điều nào dưới đây là quan trọng nhất để thúc đẩy và duy trì mối quan hệ tốt giữa người kiểm thử và các nhà phát triển?",
      "options": [
        "Xác định các cách khắc phục lỗi tiềm năng cho khách hàng.",
        "Hiểu những gì các nhà quản lý coi trọng về kiểm thử.",
        "Thúc đẩy phần mềm chất lượng tốt hơn bất cứ khi nào có thể.",
        "Giải thích kết quả kiểm thử một cách trung lập."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 26,
      "question": "Ghép các thuật ngữ với định nghĩa: 1. Một lý do hoặc mục đích để thiết kế và thực hiện một bài kiểm thử. 2. Thành phần hoặc hệ thống sẽ được kiểm thử. 3. Xác nhận qua việc kiểm tra và cung cấp chứng cứ khách quan rằng các yêu cầu cho một mục đích hoặc ứng dụng cụ thể đã được hoàn thành.",
      "options": [
        "1) mục tiêu kiểm thử, 2) đối tượng kiểm thử, 3) kiểm chứng.",
        "1) đối tượng kiểm thử, 2) mục tiêu kiểm thử, 3) thẩm định.",
        "1) thẩm định, 2) cơ bản kiểm thử, 3) kiểm chứng.",
        "1) mục tiêu kiểm thử, 2) đối tượng kiểm thử, 3) thẩm định."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    }
  ]
};
