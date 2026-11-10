// Dữ liệu Chương 4 (Bộ 2) — chuyển từ Chuong_4_cau_hoi_dap_an.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3).
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[8] = {
  "title": "Chương 4: Kỹ thuật kiểm thử (Bộ 2)",
  "num": 4,
  "questions": [
    {
      "id": 1,
      "question": "Câu nào sau đây về kiểm thử dựa trên danh sách kiểm tra là đúng?",
      "options": [
        "Danh sách kiểm tra có thể được sử dụng cho kiểm thử chức năng, nhưng không áp dụng cho kiểm thử phi chức năng.",
        "Danh sách kiểm tra nên luôn được sử dụng đúng như đã viết và không nên chỉnh sửa bởi người kiểm thử.",
        "Danh sách kiểm tra có thể dựa trên kinh nghiệm về lý do và cách phần mềm thất bại.",
        "Một danh sách kiểm tra chứa các điều kiện kiểm thử và các trường hợp kiểm thử chi tiết cũng như các quy trình."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 2,
      "question": "Biện pháp nào sau đây có thể được sử dụng để đo lường độ bao phủ trong kiểm thử chuyển trạng thái? V. Tất cả các trạng thái đã được tiếp cận. W. Thời gian phản hồi cho mỗi giao dịch là đủ. X. Mọi chuyển đổi đã được thực hiện. Y. Tất cả các biên đã được kiểm thử. Z. Các chuỗi chuyển đổi cụ thể đã được thực hiện.",
      "options": [
        "X, Y và Z",
        "W, X và Y",
        "V, X, Y và Z",
        "V, X và Z"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 3,
      "question": "Câu nào sau đây về kiểm thử dựa trên việc tăng độ bao phủ câu lệnh hoặc quyết định là đúng?",
      "options": [
        "Tăng độ bao phủ câu lệnh có thể tìm ra lỗi mà các kiểm thử khác chưa xét đến cả kết quả đúng và sai.",
        "Tăng độ bao phủ quyết định có thể tìm ra lỗi trong mã đã được kiểm thử bởi các kiểm thử khác.",
        "Tăng độ bao phủ quyết định có thể tìm ra lỗi mà các kiểm thử khác chưa xét đến cả kết quả đúng và sai.",
        "Tăng độ bao phủ câu lệnh có thể tìm ra lỗi trong mã đã được kiểm thử bởi các kiểm thử khác."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 4,
      "question": "Loại kiểm thử hộp đen nào tập trung vào hành vi của hệ thống khi các trạng thái khác nhau được kích hoạt?",
      "options": [
        "Kiểm thử chuyển trạng thái.",
        "Kiểm thử hiệu năng.",
        "Kiểm thử chức năng.",
        "Kiểm thử hồi quy."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 5,
      "question": "Khi kiểm thử chức năng đăng nhập, điều nào sau đây KHÔNG phải là một trường hợp kiểm thử hợp lý?",
      "options": [
        "Nhập tên người dùng đúng nhưng sai mật khẩu, sau đó bấm “Đăng nhập”.",
        "Nhập đúng tên người dùng và mật khẩu, sau đó bấm “Đăng nhập”.",
        "Để trống cả tên người dùng và mật khẩu, sau đó bấm “Đăng nhập”.",
        "Nhập tên người dùng và mật khẩu dài hơn số ký tự cho phép, sau đó bấm “Đăng ký”."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 6,
      "question": "Kỹ thuật kiểm thử nào sau đây KHÔNG phải là một phần của kiểm thử hộp đen?",
      "options": [
        "Phân tích đường đi (Path analysis).",
        "Kiểm thử trạng thái và chuyển trạng thái (State transition testing).",
        "Phân vùng tương đương (Equivalence partitioning).",
        "Phân tích các tình huống sử dụng (Use case analysis)."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 7,
      "question": "Câu nào sau đây về mối quan hệ giữa độ bao phủ câu lệnh và độ bao phủ quyết định là đúng?",
      "options": [
        "Đạt 100% độ bao phủ quyết định nếu độ bao phủ câu lệnh lớn hơn 90%.",
        "100% độ bao phủ câu lệnh luôn có nghĩa là 100% độ bao phủ quyết định.",
        "100% độ bao phủ quyết định luôn có nghĩa là 100% độ bao phủ câu lệnh.",
        "Đạt 100% độ bao phủ câu lệnh nếu độ bao phủ quyết định lớn hơn 90%."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 8,
      "question": "Các kỹ thuật kiểm thử hộp trắng sẽ được áp dụng vào trường hợp nào sau đây? 1. Ranh giới giữa các mức lãi suất thế chấp. 2. Một chuyển đổi không hợp lệ giữa hai trạng thái nợ quá hạn khác nhau. 3. Các luồng quy trình kinh doanh để phê duyệt khoản vay thế chấp. 4. Luồng điều khiển của chương trình để tính toán khoản thanh toán.",
      "options": [
        "2, 3 và 4.",
        "3 và 4.",
        "1, 2 và 3.",
        "2 và 4."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 9,
      "question": "Tại sao các kỹ thuật kiểm thử dựa trên kinh nghiệm lại hữu ích?",
      "options": [
        "Chúng có thể phát hiện lỗi mà các kỹ thuật kiểm thử hộp đen và hộp trắng bỏ sót.",
        "Chúng không yêu cầu đào tạo để hiệu quả như các kỹ thuật chính thức.",
        "Chúng được sử dụng hiệu quả nhất khi có các đặc tả tốt.",
        "Chúng sẽ đảm bảo rằng tất cả mã hoặc hệ thống được kiểm thử."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 10,
      "question": "Kỹ thuật kiểm thử hộp đen nào thường được sử dụng để kiểm tra các quy tắc phức tạp liên quan đến nhiều điều kiện đầu vào và đầu ra?",
      "options": [
        "Kiểm thử bảng quyết định.",
        "Kiểm thử hồi quy.",
        "Kiểm thử trạng thái và chuyển trạng thái.",
        "Phân tích giá trị biên."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 11,
      "question": "Khi áp dụng kiểm thử hộp đen, điều nào sau đây KHÔNG nên được kiểm tra?",
      "options": [
        "Các kết quả đầu ra dự kiến của hệ thống.",
        "Các yêu cầu chức năng của hệ thống.",
        "Logic bên trong của mã nguồn.",
        "Hành vi của hệ thống khi gặp lỗi đầu vào."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 12,
      "question": "Giá bưu điện cho thư nhẹ là $0.25 cho đến 10g, $0.35 cho đến 50g cộng thêm $0.10 cho mỗi 25g thêm cho đến 100g. Những đầu vào kiểm thử nào (gram) sẽ được chọn sử dụng phân vùng tương đương (EP)?",
      "options": [
        "8, 42, 82, 102.",
        "5, 20, 40, 60, 80.",
        "10, 50, 75, 100.",
        "4, 15, 65, 92, 159."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 13,
      "question": "Kiểm thử trường hợp sử dụng có hữu ích cho trường hợp nào sau đây? P. Thiết kế các bài kiểm thử chấp nhận với người dùng hoặc khách hàng. Q. Đảm bảo các quy trình kinh doanh chính được kiểm tra. R. Tìm lỗi trong tương tác giữa các thành phần. S. Xác định giá trị lớn nhất và nhỏ nhất cho mỗi trường nhập. T. Xác định tỷ lệ phần trăm câu lệnh được kiểm tra bởi một tập hợp các bài kiểm thử.",
      "options": [
        "Q, S và T.",
        "P, Q và S.",
        "R, S và T.",
        "P, Q và R."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 14,
      "question": "Trong kiểm thử chức năng đăng nhập, trường hợp kiểm thử nào sau đây áp dụng kỹ thuật phân tích giá trị biên (BVA)?",
      "options": [
        "Nhập tên người dùng và mật khẩu ngắn hơn độ dài tối thiểu cho phép.",
        "Nhập tên người dùng với đúng độ dài tối đa cho phép (ví dụ: 20 ký tự) và mật khẩu hợp lệ.",
        "Nhập mật khẩu chỉ có một ký tự và kiểm tra phản hồi của hệ thống.",
        "Nhập tên người dùng và mật khẩu trùng khớp từ lần đăng nhập trước."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 15,
      "question": "Trong một cuộc thi, ruy băng được trao: dưới 12 mét không có ruy băng, vàng cho khoảng cách lên đến 25 mét, đỏ lên đến 35 mét, xanh cho khoảng cách xa hơn. Những khoảng cách nào (mét) sẽ được chọn sử dụng kỹ thuật BVA?",
      "options": [
        "0, 12, 13, 26, 27, 36, 37.",
        "0, 11, 12, 25, 26, 35, 36.",
        "11, 12, 13, 29, 30, 31, 40.",
        "7, 18, 32, 39."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 16,
      "question": "Ví dụ nào sau đây là kiểm thử bảng quyết định cho một ứng dụng tài chính, được áp dụng ở mức kiểm thử hệ thống?",
      "options": [
        "Một bảng chứa các quy tắc cho các giao diện giữa các thành phần.",
        "Một bảng chứa các quy tắc cho số học cơ bản đến hai chữ số thập phân.",
        "Một bảng chứa các quy tắc cho các tổ hợp đầu vào vào hai trường trên màn hình.",
        "Một bảng chứa các quy tắc cho các ứng dụng thế chấp."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 17,
      "question": "Kỹ thuật nào sau đây không phải là một phương pháp kiểm thử hộp đen?",
      "options": [
        "Kiểm thử bảng quyết định (Decision table testing).",
        "Phân vùng tương đương (Equivalence partitioning).",
        "Đo lường độ bao phủ quyết định.",
        "Phân tích giá trị biên (Boundary value analysis)."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 18,
      "question": "Trường hợp kiểm thử nào sau đây phù hợp để kiểm tra chức năng quên mật khẩu trên hệ thống đăng nhập?",
      "options": [
        "Đăng nhập thành công mà không cần đặt lại mật khẩu.",
        "Nhập tên người dùng và mật khẩu hợp lệ nhưng không sử dụng chức năng quên mật khẩu.",
        "Nhập địa chỉ email không tồn tại và kiểm tra phản hồi của hệ thống.",
        "Kiểm tra xem mật khẩu mới có được gửi đến email sau khi yêu cầu đặt lại không."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 19,
      "question": "Kỹ thuật kiểm thử hộp đen nào dưới đây tập trung vào các chức năng mà hệ thống phải thực hiện?",
      "options": [
        "Kiểm thử hiệu năng.",
        "Kiểm thử chức năng.",
        "Kiểm thử hộp trắng.",
        "Kiểm thử tích hợp."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 20,
      "question": "Kiểm thử dựa trên chuyển trạng thái (State transition testing) thường được sử dụng để kiểm tra điều gì?",
      "options": [
        "Hiệu suất của hệ thống khi tải cao.",
        "Mã nguồn của hệ thống.",
        "Tốc độ xử lý của các lệnh trong hệ thống.",
        "Chuyển đổi giữa các trạng thái hệ thống dựa trên các đầu vào."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 21,
      "question": "Trong kiểm thử hộp đen, loại lỗi nào dễ bị bỏ sót nếu chỉ sử dụng các trường hợp kiểm thử từ phân vùng tương đương?",
      "options": [
        "Lỗi giao diện người dùng.",
        "Lỗi chức năng chính.",
        "Lỗi thời gian phản hồi.",
        "Lỗi biên."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 22,
      "question": "Khi chọn kỹ thuật kiểm thử nào để sử dụng trong một tình huống nhất định, các yếu tố nào cần được xem xét? U. Kinh nghiệm trước đây về các loại lỗi được tìm thấy trong hệ thống này hoặc hệ thống tương tự. V. Kiến thức hiện có của những người kiểm thử. W. Các tiêu chuẩn quy định áp dụng. X. Công cụ thực thi kiểm thử sẽ được sử dụng. Y. Các sản phẩm công việc có sẵn. Z. Kinh nghiệm trước đây với ngôn ngữ phát triển.",
      "options": [
        "U, V, W và Y.",
        "V, W, Y và Z.",
        "V, W và Y.",
        "U, X và Y."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 23,
      "question": "Phương pháp kiểm thử hộp đen nào thích hợp nhất để kiểm thử các chức năng mà hệ thống không nên thực hiện?",
      "options": [
        "Kiểm thử phi chức năng.",
        "Kiểm thử hồi quy.",
        "Kiểm thử chức năng.",
        "Kiểm thử hộp trắng."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 24,
      "question": "Khi áp dụng kỹ thuật phân vùng tương đương trong kiểm thử hộp đen, câu nào sau đây là đúng?",
      "options": [
        "Tất cả các giá trị trong mỗi phân vùng đều cần được kiểm tra.",
        "Chỉ cần kiểm tra một trường hợp từ mỗi phân vùng.",
        "Phải kiểm tra mỗi giá trị tại biên của mỗi phân vùng.",
        "Kỹ thuật này chỉ áp dụng cho kiểm thử phi chức năng."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 25,
      "question": "Tại sao cả hai kỹ thuật kiểm thử hộp đen và hộp trắng đều hữu ích?",
      "options": [
        "Bởi vì các đặc tả thường không có cấu trúc.",
        "Chúng phát hiện ra các loại lỗi khác nhau.",
        "Cả hai đều phát hiện ra cùng loại lỗi.",
        "Sử dụng nhiều kỹ thuật hơn luôn tốt hơn."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 26,
      "question": "Điều nào sau đây KHÔNG phải là mục tiêu chính của kiểm thử hộp đen?",
      "options": [
        "Kiểm tra hành vi của hệ thống dựa trên đầu vào và đầu ra.",
        "Xác định lỗi dựa trên đặc tả yêu cầu.",
        "Phát hiện các lỗi xảy ra khi người dùng sử dụng hệ thống sai cách.",
        "Xác định các lỗi trong logic nội bộ của chương trình."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 27,
      "question": "Trong kiểm thử hộp đen, điều nào sau đây là mục tiêu chính của kiểm thử giá trị biên?",
      "options": [
        "Đo lường độ bao phủ của các trường hợp kiểm thử.",
        "Xác định lỗi trong mã nguồn.",
        "Phát hiện lỗi xảy ra khi các giá trị đầu vào nằm tại hoặc gần biên của phạm vi đầu vào.",
        "Phát hiện các lỗi logic trong hệ thống."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 28,
      "question": "Bộ nào sau đây có thể được sử dụng để đánh giá độ bao phủ đạt được cho các kỹ thuật kiểm thử hộp đen? V. Các kết quả quyết định đã được kiểm tra. W. Các phân vùng đã được kiểm tra. X. Các biên đã được kiểm tra. Y. Các chuyển trạng thái đã được kiểm tra. Z. Các câu lệnh đã được kiểm tra.",
      "options": [
        "V, W, Y hoặc Z.",
        "W, X, Y hoặc Z.",
        "W, X hoặc Y.",
        "V, X hoặc Z."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 29,
      "question": "Khi kiểm thử chức năng đăng nhập, trường hợp kiểm thử nào sau đây cần kiểm tra khả năng xử lý lỗi của hệ thống?",
      "options": [
        "Đăng xuất khỏi hệ thống sau khi đăng nhập thành công.",
        "Nhập tên người dùng và mật khẩu hợp lệ, sau đó bấm “Đăng nhập”.",
        "Nhập tên người dùng và mật khẩu hợp lệ nhưng gặp sự cố kết nối Internet.",
        "Đăng nhập với tài khoản có quyền truy cập vào tất cả các chức năng của hệ thống."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 30,
      "question": "Khi sử dụng kỹ thuật kiểm thử bảng quyết định, điều nào sau đây KHÔNG phải là một yếu tố quan trọng cần xem xét?",
      "options": [
        "Các kết hợp đầu vào có thể có.",
        "Các kết quả đầu ra có thể có.",
        "Luồng quyết định của hệ thống.",
        "Cấu trúc mã của hệ thống."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 31,
      "question": "Đặc điểm chính của các kỹ thuật kiểm thử hộp trắng là gì?",
      "options": [
        "Chúng chủ yếu được sử dụng để đánh giá cấu trúc của đặc tả.",
        "Chúng sử dụng một mô hình chính thức hoặc không chính thức của phần mềm hoặc thành phần.",
        "Chúng được sử dụng cả để đo lường độ bao phủ và thiết kế các kiểm thử để tăng độ bao phủ.",
        "Chúng dựa trên kỹ năng và kinh nghiệm của người kiểm thử."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 32,
      "question": "Kiểm thử chức năng đăng nhập bao gồm trường hợp kiểm thử nào để kiểm tra tính bảo mật?",
      "options": [
        "Kiểm tra xem hệ thống có chấp nhận tên người dùng và mật khẩu rỗng không.",
        "Đăng nhập với tài khoản không có quyền truy cập vào trang quản trị.",
        "Nhập mật khẩu sai ba lần liên tiếp và kiểm tra xem tài khoản có bị khóa tạm thời không.",
        "Nhập tên người dùng và mật khẩu đúng nhưng kiểm tra xem mật khẩu có hiển thị bằng văn bản rõ ràng trên màn hình không."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 33,
      "question": "Kỹ thuật kiểm thử hộp đen nào giúp phát hiện các lỗi có thể xảy ra khi nhập giá trị ở các ranh giới của phạm vi đầu vào?",
      "options": [
        "Phân tích giá trị biên.",
        "Kiểm thử dựa trên cấu trúc.",
        "Kiểm thử chuyển trạng thái.",
        "Kiểm thử hệ thống."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 34,
      "question": "Khi sử dụng kỹ thuật kiểm thử hộp đen, điều nào sau đây là đúng khi kiểm tra tính chính xác của các trường hợp đầu vào?",
      "options": [
        "Phân tích dòng điều khiển chương trình.",
        "Dựa vào đặc tả yêu cầu để xác định các đầu vào.",
        "Tạo các trường hợp kiểm thử dựa trên cấu trúc mã.",
        "Xem xét mã nguồn phần mềm."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    }
  ]
};
