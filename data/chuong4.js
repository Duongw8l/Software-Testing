// Dữ liệu Chương 4 — chuyển từ chuong4.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3).
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[4] = {
  "title": "Chương 4: Kỹ thuật kiểm thử",
  "questions": [
    {
      "id": 1,
      "question": "Kỹ thuật kiểm thử hộp đen nào giúp phát hiện các lỗi có thể xảy ra khi nhập giá trị ở các ranh giới của phạm vi đầu vào?",
      "options": [
        "Kiểm thử dựa trên cấu trúc",
        "Kiểm thử chuyển trạng thái",
        "Kiểm thử hệ thống",
        "Phân tích giá trị biên"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 2,
      "question": "Khi chọn kỹ thuật kiểm thử để sử dụng trong một tình huống nhất định, những yếu tố nào sau đây cần được xem xét?\n(U. Kinh nghiệm về loại lỗi trong hệ thống; V. Kiến thức hiện có của tester; W. Tiêu chuẩn quy định; X. Công cụ kiểm thử; Y. Sản phẩm công việc có sẵn; Z. Kinh nghiệm với ngôn ngữ phát triển)",
      "options": [
        "U, X và Y",
        "V, W và Y",
        "U, V, W và Y",
        "V, W, Y và Z"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 3,
      "question": "Khi kiểm thử chức năng đăng nhập, trường hợp kiểm thử nào sau đây tập trung vào khía cạnh kiểm tra tính bảo mật của thông tin?",
      "options": [
        "Đăng nhập với tài khoản không có quyền truy cập vào trang quản trị",
        "Kiểm tra xem hệ thống có chấp nhận tên người dùng và mật khẩu rỗng không",
        "Nhập tên người dùng/mật khẩu đúng và kiểm tra mật khẩu có bị hiển thị dạng văn bản rõ (plain text) hay không",
        "Nhập đúng mật khẩu nhưng chọn tính năng quên mật khẩu"
      ],
      "correctAnswer": [
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "File Word đánh dấu cả C và D là đáp án đúng."
    },
    {
      "id": 4,
      "question": "Tại sao các kỹ thuật kiểm thử dựa trên kinh nghiệm (Experience-based testing) lại hữu ích?",
      "options": [
        "Chúng được sử dụng hiệu quả nhất khi có các tài liệu đặc tả hoàn chỉnh",
        "Chúng đảm bảo rằng tất cả các dòng mã nguồn đều được bao phủ",
        "Chúng có thể phát hiện các lỗi mà kỹ thuật hộp đen và hộp trắng bỏ sót",
        "Chúng không yêu cầu kỹ năng hay đào tạo để đạt hiệu quả cao"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 5,
      "question": "Khi kiểm thử chức năng đăng nhập của một ứng dụng, điều nào sau đây KHÔNG phải là một trường hợp kiểm thử hợp lý?",
      "options": [
        "Nhập tên người dùng và mật khẩu vượt quá độ dài cho phép, sau đó bấm nút “Đăng ký”",
        "Để trống cả trường tên người dùng lẫn mật khẩu, sau đó bấm nút “Đăng nhập”",
        "Nhập đúng tên người dùng nhưng nhập sai mật khẩu, sau đó bấm nút “Đăng nhập”",
        "Nhập đúng cả tên người dùng và mật khẩu hợp lệ, sau đó bấm nút “Đăng nhập”"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 6,
      "question": "Trong kỹ thuật kiểm thử hộp đen, mục tiêu chính của việc phân tích giá trị biên (Boundary Value Analysis) là gì?",
      "options": [
        "Phát hiện các lỗi xảy ra khi giá trị đầu vào nằm tại hoặc sát ranh giới của phạm vi cho phép",
        "Đo lường tỷ lệ bao phủ mã nguồn của các trường hợp kiểm thử",
        "Phát hiện các sai sót trong logic xử lý bên trong của hệ thống",
        "Xác định cú pháp sai lệch trong mã nguồn phần mềm"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 7,
      "question": "Các kỹ thuật kiểm thử hộp trắng sẽ được áp dụng phù hợp nhất vào những trường hợp nào dưới đây?\n(1. Ranh giới giữa các mức lãi suất thế chấp; 2. Chuyển đổi không hợp lệ giữa các trạng thái nợ; 3. Luồng quy trình kinh doanh phê duyệt khoản vay; 4. Luồng điều khiển của chương trình để tính toán thanh toán)",
      "options": [
        "1, 2 và 3",
        "2, 3 và 4",
        "2 và 4",
        "4 (Luồng điều khiển mã nguồn)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 8,
      "question": "Kỹ thuật kiểm thử hộp đen nào thường được sử dụng để kiểm tra các quy tắc nghiệp vụ phức tạp phụ thuộc vào nhiều điều kiện đầu vào và kết quả đầu ra khác nhau?",
      "options": [
        "Kiểm thử bảng quyết định (Decision Table Testing)",
        "Kiểm thử hồi quy (Regression Testing)",
        "Kiểm thử chuyển trạng thái (State Transition Testing)",
        "Phân tích giá trị biên (Boundary Value Analysis)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 9,
      "question": "Cước phí bưu điện được tính: $0.25 cho thư đến 10g; $0.35 cho thư từ trên 10g đến 50g; cộng thêm $0.10 cho mỗi 25g tiếp theo cho đến 100g. Áp dụng kỹ thuật phân vùng tương đương (EP), bộ đầu vào kiểm thử nào (tính bằng gram) là phù hợp nhất?",
      "options": [
        "10, 50, 75, 100",
        "8, 42, 82, 102",
        "5, 20, 60, 85, 120",
        "4, 15, 65, 92, 159"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 10,
      "question": "Loại kiểm thử hộp đen nào tập trung kiểm tra hành vi phản hồi của hệ thống khi nhận các sự kiện kích hoạt chuyển đổi giữa các trạng thái khác nhau?",
      "options": [
        "Kiểm thử hồi quy",
        "Kiểm thử chức năng",
        "Kiểm thử chuyển trạng thái",
        "Kiểm thử hiệu năng"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 11,
      "question": "Khẳng định nào sau đây là đúng về việc gia tăng độ bao phủ câu lệnh (Statement coverage) và độ bao phủ quyết định (Decision coverage)?",
      "options": [
        "Tăng độ bao phủ câu lệnh giúp tìm lỗi ở các nhánh chưa được xét kết quả Đúng/Sai",
        "Tăng độ bao phủ câu lệnh chỉ kiểm tra lại các phần mã đã đi qua trước đó",
        "Tăng độ bao phủ quyết định giúp tìm ra lỗi tại các nhánh mà kiểm thử trước đó chưa xét đủ các kết quả Đúng và Sai",
        "Độ bao phủ quyết định không thể áp dụng cho các bài kiểm thử hộp trắng"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 12,
      "question": "Phương pháp kiểm thử hộp đen nào thích hợp nhất để xác minh các chức năng hoặc hành vi mà hệ thống KHÔNG ĐƯỢC PHÉP thực hiện?",
      "options": [
        "Kiểm thử phi chức năng",
        "Kiểm thử hồi quy",
        "Kiểm thử hộp trắng",
        "Kiểm thử chức năng"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 13,
      "question": "Kỹ thuật kiểm thử nào dưới đây KHÔNG thuộc nhóm kỹ thuật kiểm thử hộp đen (Black-box testing)?",
      "options": [
        "Phân tích các tình huống sử dụng (Use Case Analysis)",
        "Phân tích đường đi (Path Analysis)",
        "Kiểm thử chuyển trạng thái (State Transition Testing)",
        "Phân vùng tương đương (Equivalence Partitioning)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 14,
      "question": "Khi xây dựng các trường hợp kiểm thử bằng kỹ thuật Bảng quyết định (Decision Table), yếu tố nào sau đây KHÔNG CẦN xem xét?",
      "options": [
        "Các kết quả đầu ra có thể xảy ra của hệ thống",
        "Các kết hợp của các điều kiện đầu vào",
        "Luồng quy tắc quyết định nghiệp vụ của hệ thống",
        "Cấu trúc mã nguồn bên trong của phần mềm"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 15,
      "question": "Mục tiêu nào dưới đây KHÔNG PHẢI là mục tiêu chính của các kỹ thuật kiểm thử hộp đen?",
      "options": [
        "Kiểm tra hành vi phản hồi của hệ thống thông qua đầu vào và đầu ra",
        "Xác định mức độ đáp ứng so với tài liệu đặc tả yêu cầu",
        "Phát hiện lỗi và đánh giá cấu trúc logic bên trong chương trình",
        "Phát hiện các ngoại lệ phát sinh khi người dùng thao tác sai quy định"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 16,
      "question": "Khi sử dụng kỹ thuật kiểm thử hộp đen, tester dựa vào cơ sở nào để thiết kế các dữ liệu đầu vào và kết quả mong đợi?",
      "options": [
        "Việc đọc và duyệt mã nguồn ứng dụng",
        "Cấu trúc các nhánh điều khiển trong mã",
        "Luồng dữ liệu nội bộ của thuật toán",
        "Tài liệu đặc tả yêu cầu phần mềm"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 17,
      "question": "Khi áp dụng kỹ thuật Phân vùng tương đương (Equivalence Partitioning), nhận định nào sau đây là chính xác?",
      "options": [
        "Tất cả các giá trị thuộc từng phân vùng đều phải được đưa vào kiểm thử",
        "Chỉ cần chọn đại diện một giá trị từ mỗi phân vùng tương đương để kiểm thử",
        "Kỹ thuật này chỉ có thể sử dụng cho kiểm thử phi chức năng",
        "Bắt buộc phải kiểm thử mọi giá trị nằm sát biên của phân vùng"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 18,
      "question": "Tại sao việc kết hợp cả hai kỹ thuật kiểm thử hộp đen và kiểm thử hộp trắng lại mang lại hiệu quả cao?",
      "options": [
        "Vì các đặc tả hệ thống thường thiếu tính nhất quán",
        "Vì áp dụng càng nhiều kỹ thuật thì sản phẩm càng hoàn hảo",
        "Vì mỗi kỹ thuật có khả năng phát hiện các nhóm loại lỗi khác nhau",
        "Vì hai kỹ thuật này hỗ trợ tìm ra cùng một tập hợp lỗi như nhau"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 19,
      "question": "Đối tượng nào sau đây KHÔNG thuộc phạm vi kiểm tra của kiểm thử hộp đen?",
      "options": [
        "Logic xử lý chi tiết bên trong mã nguồn",
        "Các yêu cầu chức năng nghiệp vụ của hệ thống",
        "Kết quả đầu ra dự kiến tương ứng với từng đầu vào",
        "Phản ứng của hệ thống khi dữ liệu đầu vào bị sai định dạng"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 20,
      "question": "Trong trường hợp kiểm thử chức năng đăng nhập, kịch bản nào sau đây áp dụng kỹ thuật Phân tích giá trị biên (Boundary Value Analysis)?",
      "options": [
        "Nhập tên người dùng và mật khẩu ngắn hơn độ dài tối thiểu cho phép",
        "Nhập tên người dùng và mật khẩu giống hệt lần đăng nhập thành công trước",
        "Nhập mật khẩu chỉ chứa duy nhất 1 ký tự và ghi nhận phản hồi",
        "Nhập tên người dùng có độ dài đạt đúng giới hạn tối đa cho phép (ví dụ: 20 ký tự) và mật khẩu hợp lệ"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    }
  ]
};
