// Dữ liệu Chương 2 — chuyển từ chuong2.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3).
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[2] = {
  "title": "Chương 2: Kiểm thử trong vòng đời phát triển phần mềm",
  "questions": [
    {
      "id": 1,
      "question": "Ai thường thực hiện kiểm thử chấp nhận (Acceptance testing)?",
      "options": [
        "Các kỹ sư kiểm thử nội bộ.",
        "Các nhà phát triển phần mềm.",
        "Khách hàng hoặc người dùng cuối.",
        "Các chuyên gia kiểm thử độc lập."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 2,
      "question": "Các mức độ kiểm thử phần mềm (Test levels) thường bao gồm những gì?",
      "options": [
        "Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hệ thống, và kiểm thử chấp nhận.",
        "Kiểm thử chức năng, kiểm thử hiệu suất, kiểm thử bảo mật, và kiểm thử hồi quy.",
        "Kiểm thử hiệu suất, kiểm thử bảo trì, kiểm thử vận hành, và kiểm thử tích hợp.",
        "Kiểm thử chức năng, kiểm thử tích hợp, kiểm thử hồi quy, và kiểm thử chấp nhận."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 3,
      "question": "Cấp độ kiểm thử nào thường được thực hiện bởi nhân viên quản trị hệ thống (System Administrators) trong môi trường vận hành?",
      "options": [
        "Kiểm thử tích hợp hệ thống.",
        "Kiểm thử chấp nhận theo quy định.",
        "Kiểm thử hệ thống.",
        "Kiểm thử vận hành (Operational testing)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 4,
      "question": "Ghép nối đúng các tác nhân kích hoạt cho hoạt động bảo trì phần mềm:",
      "options": [
        "Chỉnh sửa: 2 và 3, Chuyển đổi: 1 và 5, Ngừng hoạt động: 4 và 6.",
        "Chỉnh sửa: 1 và 5, Chuyển đổi: 2 và 3, Ngừng hoạt động: 4 và 6.",
        "Chỉnh sửa: 2 và 3, Chuyển đổi: 1 và 5, Ngừng hoạt động: 5 và 6.",
        "Chỉnh sửa: 2 và 6 (Nâng cấp COTS và Vá lỗi bảo mật), Chuyển đổi: 1 và 4 (Chuyển dữ liệu và đổi Nền tảng/HĐH), Ngừng hoạt động: 3 và 5 (Lưu trữ và khôi phục dữ liệu)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Chỉnh sửa: vá lỗi bảo mật / nâng cấp COTS; Chuyển đổi: chuyển dữ liệu / đổi nền tảng, hệ điều hành; Ngừng hoạt động: lưu trữ / khôi phục dữ liệu. (File Word không liệt kê các tác nhân 1–6 trong đề.)"
    },
    {
      "id": 5,
      "question": "Khi nào kiểm thử chấp nhận (Acceptance testing) thường được thực hiện trong quy trình phát triển phần mềm?",
      "options": [
        "Trong giai đoạn thiết kế chi tiết của phần mềm.",
        "Trong khi viết mã nguồn của phần mềm.",
        "Trước khi phát triển phần mềm bắt đầu.",
        "Sau khi các thành phần phần mềm đã được kiểm thử đơn vị và kiểm thử tích hợp hoàn tất, và trước khi phần mềm được triển khai chính thức."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 6,
      "question": "Khi nào kiểm thử hệ thống (System testing) thường được thực hiện trong quy trình phát triển phần mềm?",
      "options": [
        "Trước khi phát triển phần mềm bắt đầu.",
        "Sau khi các thành phần phần mềm đã được kiểm thử đơn vị và kiểm thử tích hợp hoàn tất.",
        "Trong khi viết mã nguồn của phần mềm.",
        "Trong giai đoạn thiết kế chi tiết của phần mềm."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 7,
      "question": "Kiểm thử Beta là hình thức kiểm thử như thế nào?",
      "options": [
        "Được thực hiện bởi một nhóm kiểm thử độc lập tại công ty phát triển.",
        "Được thực hiện bởi khách hàng tại trang của nhà phát triển phần mềm.",
        "Được thực hiện bởi khách hàng/người dùng tại trang (môi trường) của họ.",
        "Hữu ích để kiểm thử phần mềm được phát triển riêng cho một khách hàng cụ thể."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 8,
      "question": "Kiểm thử hồi quy (Regression testing) có bản chất là gì?",
      "options": [
        "Sẽ kiểm tra các khu vực mới thay đổi của phần mềm để phát hiện lỗi mới.",
        "Sẽ kiểm tra các khu vực không thay đổi của phần mềm để đảm bảo chúng không bị ảnh hưởng xấu bởi các thay đổi.",
        "Luôn luôn phải được tự động hóa 100% trong mọi dự án.",
        "Chỉ được chạy duy nhất một lần trong toàn bộ vòng đời dự án."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 9,
      "question": "Loại kiểm thử nào sau đây thuộc nhóm kiểm thử chức năng (Functional testing)?",
      "options": [
        "Kiểm tra thông tin trên màn hình đặt chỗ trực tuyến và dữ liệu trong cơ sở dữ liệu so với thông tin trên thư gửi khách hàng.",
        "Kiểm tra tác động của lượng lớn lưu lượng truy cập đồng thời lên hệ thống tổng đài.",
        "Đo lường thời gian phản hồi của hệ thống đặt chỗ trực tuyến dưới tải cao.",
        "Kiểm tra mức độ dễ sử dụng của giao diện đối với người dùng khiếm thị."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 10,
      "question": "Kiểm thử phi chức năng (Non-functional testing) bao gồm những gì?",
      "options": [
        "Kiểm thử một tính năng hệ thống chỉ sử dụng phần mềm tối thiểu.",
        "Kiểm thử các thuộc tính chất lượng của hệ thống bao gồm độ tin cậy, hiệu năng và khả năng sử dụng.",
        "Kiểm thử để xem hệ thống hoàn toàn không hoạt động ở những điểm nào.",
        "Đạt được chữ ký chấp thuận của người dùng đối với giao diện hệ thống."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 11,
      "question": "Kiểm thử thành phần (Component testing) là gì?",
      "options": [
        "Kiểm thử toàn bộ hệ thống phần mềm để đảm bảo các module hoạt động cùng nhau.",
        "Kiểm tra một cách có hệ thống các thành phần phần mềm nhỏ nhất (đơn vị code, module riêng lẻ) một cách độc lập.",
        "Kiểm thử tính khả dụng của phần mềm đối với người dùng cuối trên môi trường thật.",
        "Kiểm thử hiệu năng của phần mềm khi xử lý nhiều tác vụ đồng thời."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 12,
      "question": "Lựa chọn nào sau đây là một loại hình kiểm thử (Testing type) trong phân loại kiểm thử?",
      "options": [
        "Kiểm thử chức năng.",
        "Kiểm thử chấp nhận.",
        "Kiểm thử thành phần.",
        "Kiểm thử hệ thống."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 13,
      "question": "Mục tiêu chính của kiểm thử chấp nhận (Acceptance testing) là gì?",
      "options": [
        "Đánh giá tính khả dụng và giao diện người dùng của phần mềm.",
        "Đảm bảo các thành phần phần mềm hoạt động đúng khi kiểm thử riêng lẻ.",
        "Kiểm tra hiệu suất của toàn bộ hệ thống dưới điều kiện tải cao.",
        "Xác minh rằng phần mềm đáp ứng các yêu cầu và mong đợi kinh doanh của người dùng cuối và các bên liên quan."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 14,
      "question": "Mục tiêu chính của kiểm thử hệ thống (System testing) là gì?",
      "options": [
        "Xác minh rằng toàn bộ hệ thống phần mềm hoạt động như một khối thống nhất và đáp ứng các yêu cầu chức năng lẫn phi chức năng.",
        "Đánh giá tính khả dụng và giao diện người dùng của phần mềm.",
        "Đảm bảo rằng các thành phần phần mềm hoạt động đúng khi kiểm thử riêng lẻ.",
        "Kiểm tra tính tương thích của phần mềm với phần cứng ngoài."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 15,
      "question": "Mục tiêu chính của kiểm thử thành phần (Component testing) là gì?",
      "options": [
        "Đánh giá tính khả dụng của phần mềm cho người dùng cuối.",
        "Xác minh rằng các thành phần riêng lẻ của phần mềm hoạt động đúng như mong đợi và đáp ứng các yêu cầu thiết kế kỹ thuật.",
        "Đảm bảo các thành phần hoạt động chính xác khi tích hợp với nhau.",
        "Kiểm tra hiệu suất toàn hệ thống dưới tải lớn."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 16,
      "question": "Mục tiêu chính của kiểm thử tích hợp (Integration testing) là gì?",
      "options": [
        "Đảm bảo rằng các thành phần phần mềm hoạt động đúng khi kiểm thử riêng lẻ.",
        "Xác minh phần mềm đáp ứng các yêu cầu chức năng của người dùng cuối.",
        "Kiểm tra xem các thành phần khi được kết hợp với nhau có hoạt động chính xác và tương thích hay không.",
        "Đánh giá hiệu suất tổng thể của hệ thống dưới điều kiện tải."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 17,
      "question": "Phát biểu nào sau đây là đúng về các mô hình phát triển phần mềm?",
      "options": [
        "Mô hình chữ V là mô hình lặp – tăng trưởng vì mỗi hoạt động phát triển có một hoạt động kiểm thử tương ứng.",
        "Các mô hình tuần tự luôn cung cấp tính năng cho người dùng nhanh hơn mô hình lặp.",
        "Trong các mô hình phát triển lặp – tăng trưởng, việc cung cấp phần mềm có thể sử dụng cho người dùng cuối diễn ra thường xuyên hơn so với các mô hình tuần tự.",
        "Các cấp độ kiểm thử trong mô hình tuần tự luôn chồng lấn mạnh mẽ hơn mô hình lặp."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 18,
      "question": "Trong kiểm thử hệ thống (System testing), yếu tố nào thường được kiểm tra để đảm bảo chất lượng?",
      "options": [
        "Tính khả dụng của hệ thống và sự tương thích với thiết bị ngoại vi đơn lẻ.",
        "Khả năng mở rộng của hệ thống và mức độ tuân thủ tiêu chuẩn đặt tên mã nguồn.",
        "Tính năng và khả năng hoạt động của hệ thống theo toàn bộ các yêu cầu chức năng và phi chức năng đã đề ra.",
        "Mã nguồn của từng hàm riêng lẻ và hiệu suất của từng module độc lập."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 19,
      "question": "Điều kiện tiên quyết nào cần được đáp ứng trước khi thực hiện kiểm thử tích hợp (Integration testing)?",
      "options": [
        "Các thành phần phần mềm liên quan phải được phát triển xong và kiểm thử thành phần (unit testing) phải hoàn tất.",
        "Toàn bộ hệ thống phần mềm phải được triển khai hoàn chỉnh sẵn sàng cho kiểm thử người dùng.",
        "Các yêu cầu chức năng phải được bảo lưu và chấp thuận bởi khách hàng lớn.",
        "Hệ thống bắt buộc phải trải qua kiểm thử hiệu suất chịu tải nặng trước."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 20,
      "question": "Điều nào sau đây là đúng về quy trình kiểm thử các bản sửa lỗi khẩn cấp (Emergency bug fixes / Hotfixes)?",
      "options": [
        "Chỉ cần chạy lại kiểm thử cho đúng lỗi thực sự vừa được sửa mà không cần bận tâm điều khác.",
        "Kiểm thử lại khu vực đã thay đổi, sau đó sử dụng đánh giá rủi ro để quyết định một tập hợp hợp lý các bài kiểm thử hồi quy cần chạy phòng trường hợp các phần khác bị ảnh hưởng.",
        "Luôn luôn bắt buộc phải chạy kiểm thử hồi quy đầy đủ toàn bộ hệ thống trong mọi trường hợp dù thời gian gấp gáp.",
        "Không có thời gian kiểm thử nên chỉ để lập trình viên tự triển khai trực tiếp lên môi trường thật mà không cần kiểm thử viên tham gia."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    }
  ]
};
