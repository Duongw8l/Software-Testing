// Dữ liệu Chương 1 (Bộ 3) — chuyển từ Tài-liệu-không-có-tiêu-đề-3.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3); câu nhiều đáp án dùng mảng.
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[9] = {
  "title": "Chương 1: Cơ bản về kiểm thử phần mềm (Bộ 3)",
  "num": 1,
  "questions": [
    {
      "id": 1,
      "question": "Trong một ứng dụng ngân hàng, lập trình viên đã viết sai công thức tính lãi suất trong mã nguồn. Khi hệ thống chạy thực tế, phần mềm đã tính sai số tiền lãi và trích xuất không đúng số tiền từ tài khoản của khách hàng. Theo thuật ngữ kiểm thử phần mềm (IEEE), sự kiện \"phần mềm tính sai và hiển thị sai số tiền khi thực thi\" được gọi là gì?",
      "options": [
        "Error (Lỗi)",
        "Fault (Sai sót / Khiếm khuyết)",
        "Failure (Thất bại)",
        "Root Cause (Nguyên nhân gốc rễ)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Failure là sự sai lệch của phần mềm so với kết quả và dịch vụ mong đợi xảy ra khi hệ thống được thực thi."
    },
    {
      "id": 2,
      "question": "Sự khác biệt bản chất giữa hoạt động Kiểm thử (Testing) và Gỡ lỗi (Debugging) là gì?",
      "options": [
        "Kiểm thử dùng để xác định sự tồn tại của khiếm khuyết, trong khi Gỡ lỗi là quá trình định vị, phân tích và loại bỏ khiếm khuyết.",
        "Kiểm thử do lập trình viên thực hiện, còn Gỡ lỗi do kiểm thử viên độc lập thực hiện.",
        "Kiểm thử luôn thực hiện bằng tay, còn Gỡ lỗi luôn thực hiện bằng công cụ tự động.",
        "Kiểm thử bao gồm việc sửa chữa mã nguồn, trong khi Gỡ lỗi chỉ tìm kiếm vị trí xảy ra sự cố."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử tìm kiếm lỗi và không bao gồm sửa chữa; gỡ lỗi đảm nhận việc tìm nguyên nhân và loại bỏ khiếm khuyết đó."
    },
    {
      "id": 3,
      "question": "Nhận định nào sau đây là ĐÚNG khi nói về mối quan hệ giữa độ tin cậy (Reliability) và sai sót (Fault) trong phần mềm?",
      "options": [
        "Phần mềm không có sai sót (fault-free) luôn luôn đảm bảo sẽ hoạt động tin cậy trong mọi hoàn cảnh.",
        "Một hệ thống vẫn có thể đạt độ tin cậy cao ngay cả khi trong mã nguồn vẫn còn chứa sai sót.",
        "Độ tin cậy là số lượng sai sót đã được phát hiện và loại bỏ khỏi hệ thống trong quá trình kiểm thử.",
        "Mục tiêu duy nhất của kiểm thử là biến hệ thống phần mềm thành tuyệt đối không có sai sót."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Độ tin cậy được đo bằng xác suất phần mềm chạy không thất bại trong điều kiện cụ thể; nếu các sai sót nằm ở vùng mã ít khi thực thi, phần mềm vẫn rất tin cậy."
    },
    {
      "id": 4,
      "question": "Những phát biểu nào sau đây thể hiện đúng các mục tiêu chính của hoạt động kiểm thử phần mềm? (Chọn tất cả các phương án đúng)",
      "options": [
        "Tìm kiếm các khiếm khuyết và giảm mức độ rủi ro cho hệ thống.",
        "Chứng minh rằng phần mềm hoàn toàn không chứa bất kỳ lỗi hay khiếm khuyết nào.",
        "Đánh giá các sản phẩm công việc và kiểm chứng việc đáp ứng các yêu cầu đã đặc tả.",
        "Đạt được sự tự tin về chất lượng của sản phẩm phần mềm."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 5,
      "question": "Giả sử một hệ thống gồm 20 màn hình, trung bình mỗi màn hình có 10 trường nhập liệu, mỗi trường nhận 2 loại dữ liệu với 100 giá trị có thể có, kết hợp cùng các menu lựa chọn. Lý do cốt lõi khiến việc \"Kiểm thử toàn diện\" (Exhaustive testing) cho hệ thống này là không khả thi trong thực tế là gì?",
      "options": [
        "Công cụ kiểm thử tự động hiện nay không thể xử lý các hệ thống có trên 10 màn hình.",
        "Số lượng tổ hợp giữa các đầu vào và tiền điều kiện quá lớn, đòi hỏi thời gian thực thi không thực tế.",
        "Kiểm thử toàn diện chỉ áp dụng được đối với các phần mềm mã nguồn mở.",
        "Quy tắc đạo đức chuyên môn cấm kiểm thử viên thực hiện quá 10.000 test case cho một dự án."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Với hàng trăm nghìn bài kiểm thử (như ví dụ tính ra 480.000 tests), thời gian thực hiện sẽ tốn hàng trăm giờ hoặc vô hạn nếu tính thêm các yếu tố lại."
    },
    {
      "id": 6,
      "question": "Nguyên tắc kiểm thử \"Kiểm thử chỉ ra sự có mặt của khiếm khuyết\" (Testing shows presence of defects) đưa ra kết luận quan trọng nào sau đây?",
      "options": [
        "Một đợt kiểm thử thất bại nếu nó không tìm ra bất kỳ khiếm khuyết nào.",
        "Nếu chạy hết tất cả các test case theo kế hoạch thì phần mềm sẽ chắc chắn sạch lỗi.",
        "Kiểm thử viên chỉ cần tập trung vào việc tìm lỗi ở giai đoạn nghiệm thu của khách hàng.",
        "Dù kiểm thử không tìm thấy lỗi nào thì vẫn không thể khẳng định phần mềm hoàn toàn đúng đắn."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử làm giảm xác suất lỗi ẩn còn lại, nhưng không thể chứng minh phần mềm 100% không có lỗi."
    },
    {
      "id": 7,
      "question": "Một đội ngũ kiểm thử lặp đi lặp lại cùng một tập hợp 100 ca kiểm thử tự động trong suốt 6 tháng phát triển dự án mà không cập nhật hay thêm mới. Kết quả là tập kiểm thử này không còn phát hiện thêm lỗi mới nào nữa. Hiện tượng này minh họa cho nguyên tắc kiểm thử nào?",
      "options": [
        "Kiểm thử là công việc phụ thuộc ngữ cảnh (Context dependent).",
        "Không có lỗi chỉ là ngụy biện (Absence-of-errors is a fallacy).",
        "Cẩn thận với nghịch lý thuốc trừ sâu (Pesticide paradox).",
        "Các khiếm khuyết thường có phân cụm (Defect clustering)."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nghịch lý thuốc trừ sâu chỉ ra rằng nếu lặp lại các bài kiểm tra giống nhau, tập test case đó sẽ dần mất khả năng tìm thấy lỗi mới."
    },
    {
      "id": 8,
      "question": "Nguyên tắc \"Các khiếm khuyết thường có phân cụm thay vì phân tán\" (Defect clustering) gợi ý điều gì cho kiểm thử viên khi phân bổ nguồn lực?",
      "options": [
        "Chia đều số lượng test case cho tất cả các mô-đun trong phần mềm bất kể độ phức tạp.",
        "Chỉ kiểm thử các mô-đun do lập trình viên mới viết, bỏ qua mã nguồn của các lập trình viên kinh nghiệm.",
        "Ngừng kiểm thử ngay khi phát hiện được lỗi đầu tiên trong một mô-đun.",
        "Tập trung nỗ lực kiểm thử vào một số ít mô-đun phức tạp hoặc có lịch sử chứa nhiều lỗi nhất."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Hầu hết các lỗi tìm thấy thường tập trung ở một số ít mô-đun trọng yếu, do đó phân tích rủi ro giúp dự đoán và tập trung kiểm thử các cụm lỗi này."
    },
    {
      "id": 9,
      "question": "Một doanh nghiệp phát triển ứng dụng quản lý bán hàng đã tìm và sửa toàn bộ các lỗi phát hiện bởi kiểm thử viên. Tuy nhiên khi bàn giao, khách hàng vẫn từ chối nghiệm thu vì giao diện quá khó thao tác và không đúng quy trình nghiệp vụ thực tế. Tình huống này là ví dụ điển hình cho nguyên tắc nào?",
      "options": [
        "Kiểm thử toàn diện là không thực tế.",
        "Không có lỗi chỉ là sai lầm, ngụy biện (Absence-of-errors is a fallacy).",
        "Kiểm thử sớm càng sớm càng tốt.",
        "Các khiếm khuyết thường phân cụm."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Chỉ tập trung tìm và sửa lỗi không đảm bảo sự thành công của hệ thống nếu phần mềm không đáp ứng được nhu cầu và mong đợi của người dùng."
    },
    {
      "id": 10,
      "question": "Trong hệ thống tài liệu kế hoạch kiểm thử, tài liệu nào được phát triển ở mức độ công ty (phòng IT/QA), mang tính chất ổn định (tĩnh) và cho biết ý nghĩa của kiểm thử đối với toàn bộ tổ chức?",
      "options": [
        "Kế hoạch kiểm thử chi tiết (Detailed Test Plan)",
        "Kế hoạch kiểm thử mức cao (High Level Test Plan)",
        "Chiến lược kiểm thử (Test strategy)",
        "Chính sách kiểm thử (Test policy)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Chính sách kiểm thử là tài liệu mức rất cao của tổ chức, nêu rõ ý nghĩa và cách đo lường sự thành công của hoạt động kiểm thử."
    },
    {
      "id": 11,
      "question": "Theo tài liệu bài giảng, những đặc tính nào sau đây định nghĩa một ca kiểm thử tốt (Good test case)? (Chọn tất cả các phương án đúng)",
      "options": [
        "Cheap to use (Chi phí sử dụng và thực thi thấp)",
        "Finds faults (Khả năng tìm lỗi cao)",
        "Easy to maintain (Dễ bảo trì và tiến hóa)",
        "Represents others (Đại diện cho nhiều trường hợp khác)"
      ],
      "correctAnswer": [
        0,
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 12,
      "question": "Tại sao việc lập trình viên tự kiểm thử chương trình do chính mình viết ra thường chỉ tìm được từ 30% đến 50% số lỗi?",
      "options": [
        "Lập trình viên không có kỹ năng sử dụng các thiết bị máy tính.",
        "Lập trình viên không được phép chạy mã nguồn sau khi đã hoàn thành công đoạn biên dịch.",
        "Lập trình viên bị ảnh hưởng bởi lối suy nghĩ, giả định chủ quan và thiên kiến xác nhận công việc của chính họ.",
        "Quy trình ISO bắt buộc lập trình viên không được tự chạy các kịch bản kiểm thử."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Khi tự kiểm tra sản phẩm của mình, người tạo ra nó dễ nhìn thấy những gì họ 'dự định' làm thay vì những gì đang 'tồn tại' thực tế."
    },
    {
      "id": 13,
      "question": "Theo Bộ quy tắc đạo đức chuyên môn (ACM/IEEE) dành cho kiểm thử viên, những nguyên tắc nào dưới đây bắt buộc kiểm thử viên được chứng nhận phải tuân thủ? (Chọn tất cả các phương án đúng)",
      "options": [
        "CÔNG CỘNG (PUBLIC): Hành động nhất quán vì lợi ích công cộng.",
        "ĐÁNH GIÁ (JUDGMENT): Duy trì tính liêm khiết và độc lập trong đánh giá chuyên môn.",
        "SẢN PHẨM (PRODUCT): Đảm bảo sản phẩm chuyển giao đáp ứng các tiêu chuẩn chuyên môn cao nhất có thể.",
        "KHÁCH HÀNG VÀ NGƯỜI SỬ DỤNG LAO ĐỘNG (CLIENT AND EMPLOYER): Hành động có lợi nhất cho khách hàng và chủ lao động, phù hợp lợi ích công cộng."
      ],
      "correctAnswer": [
        0,
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 14,
      "question": "Trong nhiệm vụ thiết kế và xây dựng ca kiểm thử, điểm khác biệt cốt lõi giữa \"Ca kiểm thử logic\" (Logical / High-level test case) và \"Ca kiểm thử cụ thể\" (Concrete / Low-level test case) là gì?",
      "options": [
        "Ca kiểm thử cụ thể đã xác định rõ các giá trị dữ liệu đầu vào và kết quả mong đợi chi tiết, trong khi ca kiểm thử logic chỉ mô tả điều kiện kiểm thử ở mức tổng quát.",
        "Ca kiểm thử logic dùng cho kiểm thử tự động, còn ca kiểm thử cụ thể dùng cho kiểm thử thủ công.",
        "Ca kiểm thử logic do khách hàng viết, còn ca kiểm thử cụ thể do lập trình viên viết.",
        "Ca kiểm thử cụ thể chỉ dùng ở giai đoạn đóng dự án, còn ca kiểm thử logic dùng ở giai đoạn lập kế hoạch."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Ca kiểm thử logic trình bày quy tắc nghiệp vụ tổng quan (ví dụ: quy tắc tính thưởng), còn ca kiểm thử cụ thể gán các con số/dữ liệu thực tế và đầu ra dự kiến."
    },
    {
      "id": 15,
      "question": "Cho các phát biểu sau về khái niệm Kiểm thử và Gỡ lỗi (Debugging):\n(1) Kiểm thử là quá trình khảo sát hoặc đánh giá hệ thống nhằm xác minh hệ thống thỏa mãn các yêu cầu đặc tả.\n(2) Gỡ lỗi là quá trình định vị, phân tích và loại bỏ các khiếm khuyết (faults) gây ra thất bại.\n(3) Kiểm thử bao gồm cả việc định vị lỗi và trực tiếp sửa chữa mã nguồn bị hỏng.\n(4) Sau khi quá trình gỡ lỗi hoàn tất, nên thực hiện kiểm thử xác nhận (confirmation testing).\nPhát biểu nào đúng?",
      "options": [
        "(2), (3) và (4)",
        "Tất cả các phát biểu trên đều đúng",
        "(1), (2) và (4)",
        "(1), (3) và (4)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử nhằm xác định sự tồn tại của khiếm khuyết chứ không bao gồm sửa chữa mã nguồn, trong khi gỡ lỗi đảm nhận việc định vị và loại bỏ khiếm khuyết, sau đó cần kiểm thử xác nhận lại."
    },
    {
      "id": 16,
      "question": "Cho các mệnh đề về các khái niệm Error, Fault, và Failure trong phần mềm:\n(1) Error là hành động của con người tạo ra một kết quả không đúng.\n(2) Failure là một trạng thái ẩn tiềm tàng trong mã nguồn do lỗi của con người gây ra.\n(3) Fault là biểu hiện của một error trong phần mềm, còn được gọi là defect hay bug.\n(4) Failure là sự kiện phần mềm sai lệch so với kết quả hoặc dịch vụ được mong đợi khi vận hành.\nTập hợp các mệnh đề ĐÚNG là:",
      "options": [
        "(1), (2), (4)",
        "(2), (3), (4)",
        "(1), (3), (4)",
        "(1), (2), (3)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Error là hành động sai sai của con người, dẫn đến Fault (trạng thái khiếm khuyết/bug trong mã), và khi mã đó thực thi sẽ gây ra Failure (sự kiện thất bại khi vận hành)."
    },
    {
      "id": 17,
      "question": "Xét các phát biểu sau về mối quan hệ giữa độ tin cậy (Reliability) và sai sót (Fault):\n(1) Một hệ thống phần mềm có thể đáng tin cậy mặc dù trong mã nguồn vẫn tồn tại lỗi (fault).\n(2) Một phần mềm không có lỗi (fault-free) luôn luôn đảm bảo 100% mức độ tin cậy trong mọi hoàn cảnh thực tế.\n(3) Độ tin cậy là xác suất phần mềm chạy không gây ra thất bại (failure) trong một khoảng thời gian cụ thể dưới các điều kiện cụ thể.\nCác phát biểu nào chính xác?",
      "options": [
        "Chỉ có (3)",
        "(2) và (3)",
        "(1) và (2)",
        "(1) và (3)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Độ tin cậy đo lường xác suất không xảy ra thất bại khi thực thi; một hệ thống vẫn có thể tin cậy nếu các đoạn mã chứa fault không bao giờ được thực thi trong môi trường vận hành thực tế."
    },
    {
      "id": 18,
      "question": "Trong các mục tiêu dưới đây, những mục tiêu nào trực tiếp thuộc về quá trình kiểm thử phần mềm?",
      "options": [
        "Kiểm chứng xem các yêu cầu đặc tả đã được đáp ứng đầy đủ hay chưa.",
        "Tìm kiếm các khiếm khuyết (defects) còn ẩn giấu trong phần mềm.",
        "Cung cấp thông tin đánh giá chất lượng và giúp giảm thiểu mức độ rủi ro.",
        "Trực tiếp sửa chữa các đoạn mã nguồn phát sinh lỗi trong quá trình vận hành."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 19,
      "question": "Cho các phát biểu sau về nguyên nhân dẫn đến các sai sót (faults) trong phần mềm:\n(1) Phần mềm do con người phát triển dưới áp lực thời gian và giới hạn kỹ năng.\n(2) Độ phức tạp của kiến trúc, thiết kế hoặc mã nguồn ngày càng cao.\n(3) Hiểu nhầm trong giao tiếp giữa các thành viên dự án hoặc giữa các thành phần hệ thống.\n(4) Máy tính tự phát sinh các lỗi ngẫu nhiên trong mã nguồn mà không do con người tác động.\nCác phát biểu đúng là:",
      "options": [
        "(1), (2) và (4)",
        "(1), (2) và (3)",
        "(2), (3) và (4)",
        "Tất cả (1), (2), (3), (4)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Sai sót phần mềm bắt nguồn từ lỗi của con người dưới áp lực công việc, độ phức tạp công nghệ và sự thiếu sót trong giao tiếp."
    },
    {
      "id": 20,
      "question": "Những nhận định nào sau đây là ĐÚNG về tâm lý học kiểm thử và tính độc lập trong kiểm thử phần mềm?",
      "options": [
        "Mục đích chính của kiểm thử là chứng minh rằng chương trình hoàn toàn 100% không chứa lỗi.",
        "Kiểm thử viên cần có hiểu biết cơ bản về lập trình và ngược lại lập trình viên cũng cần có kiến thức về kiểm thử.",
        "Kiểm thử viên độc lập (không thuộc nhóm phát triển trực tiếp) giúp đưa ra góc nhìn khách quan hơn khi tìm kiếm khiếm khuyết.",
        "Lập trình viên thường gặp khó khăn khi tìm lỗi trong chính chương trình do mình viết ra do thiên vị tâm lý chủ quan."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 21,
      "question": "Trong kiểm thử phần mềm, thuật ngữ 'Error' (Lỗi) được định nghĩa chính xác như thế nào?",
      "options": [
        "Sự sai lệch của phần mềm so với kết quả và dịch vụ được mong đợi khi vận hành.",
        "Trạng thái phần mềm ngừng hoạt động do lỗi truy cập bộ nhớ.",
        "Hành động của con người tạo ra một kết quả không đúng.",
        "Biểu hiện của một khiếm khuyết nằm bên trong mã nguồn phần mềm."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Định nghĩa này chỉ rõ sai lầm do con người thực hiện, là nguyên nhân gốc rễ dẫn đến sai sót trong phần mềm."
    },
    {
      "id": 22,
      "question": "Theo biểu đồ chi phí khiếm khuyết trong phát triển phần mềm, chi phí để phát hiện và sửa chữa một khiếm khuyết biến đổi như thế nào theo thời gian?",
      "options": [
        "Giữ nguyên không đổi ở mọi giai đoạn trong vòng đời phát triển.",
        "Giảm dần theo thời gian vì phần mềm đã dần đi vào ổn định.",
        "Đạt đỉnh ở giai đoạn Thiết kế (Design) và giảm mạnh ở giai đoạn Kiểm thử (Test).",
        "Tăng liên tục từ giai đoạn Yêu cầu (Requirements) đến khi Đưa vào sử dụng (Live use)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Càng phát hiện lỗi muộn ở các giai đoạn sau, chi phí khắc phục càng tăng cao do phải điều chỉnh nhiều sản phẩm công việc liên quan."
    },
    {
      "id": 23,
      "question": "Theo các nguyên tắc kiểm thử cơ bản, nguyên tắc 'Nghịch lý thuốc trừ sâu' (Pesticide paradox) hàm ý điều gì?",
      "options": [
        "Các lỗi phần mềm luôn phân bố đều ở tất cả các mô-đun trong hệ thống.",
        "Nếu lặp đi lặp lại cùng một bộ kiểm thử, đến một lúc nào đó chúng sẽ không tìm thêm được khiếm khuyết mới.",
        "Kiểm thử phần mềm có thể chứng minh sản phẩm đã hoàn toàn sạch lỗi.",
        "Việc kiểm thử phần mềm quá nhiều sẽ gây lãng phí tài nguyên giống như dùng quá nhiều hóa chất."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Giống như vi kịch ứng thuốc trừ sâu, các ca kiểm thử cần được xem xét và cập nhật thường xuyên để phát hiện các lỗi mới."
    },
    {
      "id": 24,
      "question": "Những phát biểu nào dưới đây mô tả đúng về 7 nguyên tắc kiểm thử phần mềm?",
      "options": [
        "Kiểm thử toàn diện (Exhaustive testing) là điều không thực tế trong thực tế.",
        "Kiểm thử là công việc phụ thuộc vào ngữ cảnh.",
        "Kiểm thử chỉ ra sự có mặt của khiếm khuyết chứ không chứng minh phần mềm không có lỗi.",
        "Nếu phần mềm đã qua kiểm thử và không phát hiện lỗi thì chắc chắn sẽ thành công trên thị trường."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Do số lượng kết hợp đầu vào và tiền điều kiện quá lớn, việc kiểm thử tất cả kịch bản là không khả thi. Các loại hệ thống khác nhau (như phần mềm an toàn bay vs phần mềm bán hàng) đòi hỏi cách thức kiểm thử khác nhau. Kiểm thử làm giảm xác suất lỗi còn lại nhưng không thể khẳng định phần mềm đúng tuyệt đối 100%."
    },
    {
      "id": 25,
      "question": "Khái niệm 'Kiểm thử toàn diện' (Exhaustive testing) được hiểu như thế nào?",
      "options": [
        "Thực hiện kiểm thử cho đến khi toàn bộ đội ngũ kiểm thử viên kiệt sức.",
        "Chạy hoàn tất tất cả các ca kiểm thử đã được viết trong bản kế hoạch kiểm thử chi tiết.",
        "Thực hiện tất cả các kết hợp giữa đầu vào và tiền điều kiện của hệ thống.",
        "Kiểm thử tự động 100% tất cả các giao diện người dùng của phần mềm."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử toàn diện nghĩa là thử nghiệm mọi giá trị đầu vào có thể cùng tất cả các trạng thái tiền điều kiện."
    },
    {
      "id": 26,
      "question": "Căn cứ chính nào được sử dụng để quyết định nên ưu tiên kiểm thử cái gì trước và phân bổ thời gian kiểm thử bao nhiêu là đủ?",
      "options": [
        "Sự lựa chọn ngẫu nhiên của lập trình viên.",
        "Số lượng dòng lệnh (LOC) của hệ thống.",
        "Phân tích rủi ro (Risk).",
        "Số lượng kiểm thử viên có trong dự án."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Sử dụng rủi ro giúp xác định các thành phần quan trọng cần ưu tiên kiểm thử trước và kiểm thử kỹ nhất trong thời gian giới hạn."
    },
    {
      "id": 27,
      "question": "Theo chuẩn IEEE 829 về kế hoạch kiểm thử, các cấp độ kế hoạch kiểm thử bao gồm những loại nào?",
      "options": [
        "Chính sách kiểm thử và chiến lược kiểm thử ở mức độ công ty/tổ chức.",
        "Kế hoạch gỡ lỗi chi tiết dành cho từng lập trình viên.",
        "Kế hoạch kiểm thử chi tiết (Detailed Test Plan) ở mức độ giai đoạn kiểm thử.",
        "Kế hoạch kiểm thử mức cao (High Level Test Plan) ở mức độ dự án."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Mức độ công ty định ra các chính sách và chiến lược kiểm thử chung áp dụng cho các dự án. Mỗi giai đoạn (như thành phần, hệ thống...) có thể có kế hoạch chi tiết riêng. Mỗi dự án sẽ có một kế hoạch kiểm thử mức cao (High Level Test Plan) điều phối chung."
    },
    {
      "id": 28,
      "question": "Sau khi quá trình gỡ lỗi (Debugging) hoàn tất để sửa một lỗi trong phần mềm, hoạt động kiểm thử nào nên được tiến hành ngay sau đó?",
      "options": [
        "Kiểm thử tĩnh (Static testing).",
        "Kiểm thử xác nhận (Confirmation testing).",
        "Kiểm thử hiệu năng (Performance testing).",
        "Kiểm thử chấp nhận (Acceptance testing)."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử xác nhận được thực hiện để đảm bảo rằng lỗi ban đầu đã thực sự được khắc phục thành công."
    },
    {
      "id": 29,
      "question": "Theo chuỗi mối quan hệ nhân quả Error - Fault - Failure, sự kiện nào xảy ra khi phần mềm thể hiện sự sai lệch so với kết quả hoặc dịch vụ được mong đợi trong quá trình vận hành?",
      "options": [
        "Failure (Thất bại)",
        "Error (Lỗi)",
        "Fault (Sai sót / Khiếm khuyết)",
        "Root Cause (Nguyên nhân gốc rễ)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Failure là sự sai lệch quan sát được của phần mềm so với kết quả/dịch vụ mong đợi khi chương trình được thực thi."
    },
    {
      "id": 30,
      "question": "Một hệ thống phần mềm vẫn còn tồn tại Fault (khiếm khuyết/bug trong mã nguồn) thì có thể đáng tin cậy (reliable) khi vận hành hay không?",
      "options": [
        "Có, vì nếu Fault nằm ở đoạn mã không được thực thi hoặc không bị kích hoạt dưới các điều kiện vận hành cụ thể thì hệ thống sẽ không gây ra Failure.",
        "Không, vì chỉ cần chứa một Fault duy nhất thì hệ thống chắc chắn sẽ bị sụp đổ ngay khi khởi chạy.",
        "Có, vì độ tin cậy chỉ phụ thuộc vào cấu hình phần cứng chứ không liên quan đến chất lượng mã nguồn phần mềm.",
        "Không, vì khái niệm 'độ tin cậy' bắt buộc hệ thống phải ở trạng thái hoàn toàn không có sai sót (fault-free)."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Độ tin cậy đo lường xác suất không gây ra thất bại (Failure). Một phần mềm có thể chứa lỗi (Fault) nhưng nếu lỗi đó không bị kích hoạt khi thực thi thì phần mềm vẫn hoạt động tin cậy."
    },
    {
      "id": 31,
      "question": "Dựa trên tài liệu về phân cấp kế hoạch kiểm thử, những tài liệu nào dưới đây đại diện cho cấp độ toàn công ty / tổ chức (Company Level / High Level)?",
      "options": [
        "Chính sách kiểm thử (Test Policy)",
        "Báo cáo nhật ký kiểm thử (Test Log)",
        "Chiến lược kiểm thử (Test Strategy)",
        "Kế hoạch kiểm thử chi tiết (Detailed Test Plan)"
      ],
      "correctAnswer": [
        0,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Chính sách kiểm thử là tài liệu tĩnh mức rất cao do phòng IT/QA phát triển, thể hiện ý nghĩa kiểm thử và thước đo thành công của toàn tổ chức. Chiến lược kiểm thử áp dụng ở cấp độ công ty/chương trình bao gồm nhiều dự án, định nghĩa mục tiêu, phạm vi, loại kiểm thử và tiêu chí dừng."
    },
    {
      "id": 32,
      "question": "Nguyên tắc kiểm thử thứ 7 phát biểu rằng 'Không có lỗi chỉ là sai lầm, ngụy biện' (Absence-of-errors fallacy). Bản chất của ngụy biện này là gì?",
      "options": [
        "Giả định rằng nếu kiểm thử viên đủ giỏi thì họ có thể chạy tất cả các thử nghiệm và tìm ra 100% số lỗi.",
        "Kỳ vọng rằng phần mềm sau khi gỡ lỗi sẽ tự động nâng cao độ tin cậy mà không cần kiểm thử xác nhận.",
        "Tin rằng các lỗi phần mềm luôn phân bố đồng đều giữa các mô đun trong chương trình.",
        "Việc chỉ tập trung tìm và sửa nhiều lỗi không đảm bảo hệ thống thành công nếu phần mềm không đáp ứng đúng nhu cầu và mong đợi của người dùng."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Ngụy biện này cảnh báo rằng một hệ thống có thể được sửa hết các lỗi kỹ thuật phát hiện được nhưng vẫn thất bại nếu nó xây dựng sai yêu cầu người dùng hoặc không thể sử dụng được."
    },
    {
      "id": 33,
      "question": "Một đội ngũ kiểm thử đã chạy toàn bộ các ca kiểm thử theo kế hoạch cho một phân hệ phần mềm và không phát hiện thêm khiếm khuyết nào. Nhóm đưa ra kết luận rằng phân hệ này 'hoàn toàn không có lỗi và đảm bảo 100% chất lượng'. Kết luận trên vi phạm những nguyên tắc kiểm thử nào?",
      "options": [
        "Kiểm thử chỉ ra sự có mặt của khiếm khuyết và Không có lỗi chỉ là ngụy biện.",
        "Cẩn thận với nghịch lý thuốc trừ sâu và Phân cụm khiếm khuyết.",
        "Kiểm thử càng sớm càng tốt và Phân cụm khiếm khuyết.",
        "Kiểm thử toàn diện là không thực tế và Kiểm thử phụ thuộc vào ngữ cảnh."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử chỉ làm giảm xác suất lỗi còn lại chứ không thể chứng minh phần mềm hoàn toàn không có lỗi, đồng thời việc cho rằng không tìm thấy lỗi đồng nghĩa với việc phần mềm thành công là một ngụy biện."
    },
    {
      "id": 34,
      "question": "Một bộ kịch bản kiểm thử tự động được giữ nguyên và chạy lặp đi lặp lại qua 10 phiên bản xây dựng (build) liên tiếp. Ở các phiên bản cuối, bộ kịch bản này hầu như không tìm thêm được lỗi nào mới. Để giải quyết vấn đề này theo đúng nguyên tắc kiểm thử, hành động nào là phù hợp nhất?",
      "options": [
        "Dừng toàn bộ hoạt động kiểm thử vì phần mềm đã đạt trạng thái hoàn hảo.",
        "Tăng tốc độ thực thi của bộ kịch bản tự động để hoàn thành sớm hơn.",
        "Thay đổi, cập nhật các ca kiểm thử hiện có và viết thêm các dữ liệu kiểm thử mới.",
        "Chuyển toàn bộ các ca kiểm thử tự động trở lại thành kiểm thử thủ công."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Để vượt qua 'nghịch lý thuốc trừ sâu', cần định kỳ xem xét và sửa đổi các ca kiểm thử cũng như dữ liệu kiểm thử để phát hiện ra các lỗi mới."
    },
    {
      "id": 35,
      "question": "Theo tài liệu phân cấp kiểm thử, những nội dung nào dưới đây thường thuộc phạm vi xác định của Chiến lược kiểm thử (Test strategy) ở cấp độ tổ chức/chương trình?",
      "options": [
        "Tiêu chí bắt đầu, tiêu chí kết thúc và tiêu chí dừng kiểm thử.",
        "Phân công nhiệm vụ chi tiết theo ngày cho từng kiểm thử viên cụ thể.",
        "Mức độ kiểm thử và các loại kiểm thử (chức năng / phi chức năng) được áp dụng.",
        "Cách tiếp cận quản lý lỗi, phân loại lỗi và chiến lược kiểm thử hồi quy."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 36,
      "question": "Điểm khác biệt căn bản giữa Kế hoạch kiểm thử mức cao dự án (High Level Test Plan) và Kế hoạch kiểm thử chi tiết (Detailed Test Plan) theo chuẩn IEEE 829 là gì?",
      "options": [
        "High Level Test Plan chứa mã nguồn kiểm thử, còn Detailed Test Plan chỉ chứa báo cáo lỗi.",
        "High Level Test Plan dành cho kiểm thử tự động, còn Detailed Test Plan dành cho kiểm thử thủ công.",
        "High Level Test Plan bao quát cho toàn bộ dự án, còn Detailed Test Plan dành riêng cho từng giai đoạn kiểm thử cụ thể trong dự án.",
        "High Level Test Plan chỉ do Giám đốc dự án viết, còn Detailed Test Plan do Khách hàng phê duyệt."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Kế hoạch mức cao xác định khung tổng thể cho dự án (1 kế hoạch/dự án), trong khi kế hoạch chi tiết tập trung cụ thể vào từng giai đoạn (như kiểm thử thành phần, kiểm thử tích hợp, kiểm thử hệ thống)."
    },
    {
      "id": 37,
      "question": "Một công ty phát triển hai phần mềm: một là Hệ thống quản lý chuyển mạch đường sắt và hai là Ứng dụng xem phim trực tuyến. Đội ngũ QA quyết định áp dụng các tiêu chí kiểm thử an toàn nghiêm ngặt hơn hẳn cho hệ thống đường sắt. Nguyên tắc kiểm thử nào giải thích rõ nhất quyết định này?",
      "options": [
        "Không có lỗi chỉ là sai lầm, ngụy biện.",
        "Cẩn thận với nghịch lý thuốc trừ sâu.",
        "Kiểm thử là công việc phụ thuộc ngữ cảnh.",
        "Các khiếm khuyết thường có phân cụm thay vì phân tán."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nguyên tắc 6 khẳng định kiểm thử được thực hiện khác nhau trong các bối cảnh khác nhau, đặc biệt đối với các hệ thống an toàn - quan trọng (safety-critical)."
    },
    {
      "id": 38,
      "question": "Theo tài liệu bài giảng và chuẩn IEEE 829, những yếu tố nào dưới đây xuất hiện trong Kế hoạch kiểm thử mức dự án (Project Level Test Plan) nhưng KHÔNG có trong Chiến lược kiểm thử cấp công ty?",
      "options": [
        "Ước lượng kiểm thử (Test estimation) và Lịch trình kiểm thử (Test schedule) cụ thể.",
        "Danh sách các sản phẩm chuyển giao (Test deliverables) và các báo cáo kiểm thử của dự án.",
        "Tổ chức đội ngũ kiểm thử, vai trò và trách nhiệm của từng thành viên dự án.",
        "Định nghĩa tổng quan về ý nghĩa của hoạt động kiểm thử đối với sự tồn tại của công ty."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 39,
      "question": "Một tổ chức phát triển phần mềm đang xây dựng tài liệu quy định cấp chương trình (áp dụng cho nhiều dự án). Tài liệu này xác định các loại kiểm thử sẽ thực hiện, phương pháp thiết kế ca kiểm thử, các công cụ kiểm thử được áp dụng, và chiến lược quản lý cũng như phân loại lỗi. Tài liệu này thuộc cấp độ nào trong phân cấp kế hoạch kiểm thử?",
      "options": [
        "Chính sách kiểm thử (Test Policy)",
        "Kế hoạch kiểm thử chi tiết (Detailed Test Plan)",
        "Chiến lược kiểm thử (Test Strategy)",
        "Kế hoạch kiểm thử mức dự án (Project Level Test Plan)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Chiến lược kiểm thử quy định các định hướng chung cấp hệ thống/chương trình như loại kiểm thử, công cụ, phương pháp thiết kế ca kiểm thử và quy trình quản lý lỗi."
    },
    {
      "id": 40,
      "question": "Theo chuẩn IEEE 829 và tài liệu phân cấp kiểm thử, những yếu tố nào dưới đây xuất hiện trong Kế hoạch kiểm thử mức dự án (Project Level Test Plan) nhưng thường KHÔNG có trong Chiến lược kiểm thử (Test Strategy) cấp công ty/chương trình?",
      "options": [
        "Tổ chức kiểm thử, vai trò và trách nhiệm cụ thể của các thành viên trong dự án.",
        "Ước lượng kiểm thử và lịch trình thực hiện kiểm thử chi tiết của dự án.",
        "Phương pháp thiết kế ca kiểm thử và cách tiếp cận kiểm thử tự động.",
        "Các sản phẩm bàn giao (deliverables) và báo cáo kiểm thử của dự án."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Việc phân công nhân sự và trách nhiệm cá nhân mang tính thực thi trực tiếp theo cấu trúc dự án cụ thể. Thời gian và tiến độ cụ thể gắn liền với từng dự án riêng biệt nên thuộc về kế hoạch kiểm thử cấp dự án. Danh mục sản phẩm cần chuyển giao và kết quả báo cáo là kết quả đầu ra cụ thể của một dự án."
    },
    {
      "id": 41,
      "question": "Trong các nội dung sau, những yếu tố nào nằm trong phạm vi xác định của Chiến lược kiểm thử (Test Strategy) ở cấp độ tổ chức hoặc chương trình?",
      "options": [
        "Phân loại lỗi và quy trình quản lý lỗi trong hệ thống.",
        "Cách tiếp cận tái kiểm thử (retesting) và kiểm thử hồi quy (regression testing).",
        "Phân công công việc hàng ngày cho từng kiểm thử viên trong tuần.",
        "Tiêu chí bắt đầu, kết thúc và dừng kiểm thử ở các giai đoạn."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Cách thức định danh mức độ nghiêm trọng và vòng đời của lỗi cần được thống nhất đồng bộ ở cấp chiến lược. Quy trình xử lý sau khi sửa lỗi và tần suất kiểm thử lại thuộc định hướng phương pháp của chiến lược kiểm thử. Chiến lược kiểm thử đặt ra các tiêu chuẩn đầu vào/đầu ra để kiểm soát việc chuyển giao giữa các mức độ kiểm thử."
    },
    {
      "id": 42,
      "question": "Một nhóm phát triển thực hiện chạy 100% các ca kiểm thử đã chuẩn bị và không phát hiện bất kỳ lỗi nào. Trưởng nhóm kết luận: 'Phần mềm này hoàn toàn không còn lỗi và chắc chắn sẽ làm hài lòng mọi nhu cầu người dùng'. Kết luận này vi phạm những nguyên tắc kiểm thử cơ bản nào?",
      "options": [
        "Nguyên tắc 1 (Kiểm thử chỉ ra sự có mặt của khiếm khuyết) và Nguyên tắc 7 (Không có lỗi chỉ là ngụy biện).",
        "Nguyên tắc 2 (Kiểm thử toàn diện là không thực tế) và Nguyên tắc 5 (Nghịch lý thuốc trừ sâu).",
        "Nguyên tắc 3 (Kiểm thử càng sớm càng tốt) và Nguyên tắc 4 (Khiếm khuyết thường phân cụm).",
        "Nguyên tắc 4 (Khiếm khuyết thường phân cụm) và Nguyên tắc 6 (Kiểm thử phụ thuộc ngữ cảnh)."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử không thể chứng minh phần mềm không có lỗi (Nguyên tắc 1) và việc sửa hết lỗi tìm thấy chưa chắc đảm bảo phần mềm đáp ứng đúng nhu cầu thực tế của người dùng (Nguyên tắc 7)."
    },
    {
      "id": 43,
      "question": "Một lập trình viên gặp áp lực về tiến độ nên đã hiểu sai yêu cầu nghiệp vụ và viết nhầm công thức trong mã nguồn. Khi phần mềm chạy thực tế, khách hàng thực hiện giao dịch và hệ thống tính sai tiền tệ, dẫn đến báo lỗi trên giao diện. Theo chuẩn thuật ngữ kiểm thử, hành động hiểu sai của lập trình viên, đoạn mã nhầm công thức, và việc tính sai tiền tệ trên giao diện lần lượt là gì?",
      "options": [
        "Failure (Thất bại) -> Fault (Sai sót) -> Error (Lỗi).",
        "Error (Lỗi) -> Fault/Defect (Sai sót/Khiếm khuyết) -> Failure (Thất bại).",
        "Error (Lỗi) -> Failure (Thất bại) -> Fault (Sai sót).",
        "Fault (Sai sót) -> Error (Lỗi) -> Failure (Thất bại)."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Error là hành động sai của con người, tạo ra Fault trong mã nguồn, và khi Fault được thực thi sẽ gây ra Failure trong quá trình vận hành."
    },
    {
      "id": 44,
      "question": "Dựa trên mô hình biểu thị chi phí khiếm khuyết theo thời gian trong phát triển phần mềm, những nhận định nào sau đây là ĐÚNG?",
      "options": [
        "Chi phí phát hiện và khắc phục lỗi ở giai đoạn Kiểm thử (Test) luôn bằng với giai đoạn Thiết kế (Design).",
        "Phát hiện lỗi ở giai đoạn Yêu cầu (Requirements) có chi phí khắc phục rẻ nhất.",
        "Chi phí tìm và sửa chữa khiếm khuyết tăng phi tuyến tính theo thời gian trong vòng đời dự án.",
        "Lỗi lọt lưới đến giai đoạn vận hành thực tế (Live use) thường gây ra chi phí và tổn thất cao nhất."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Sửa đổi tài liệu văn bản ở giai đoạn yêu cầu tốn ít nỗ lực và tài nguyên nhất so với sửa mã nguồn hay kiến trúc. Đường cong chi phí cho thấy sự tăng vọt khi thời gian phát triển kéo dài về các giai đoạn sau. Khi sản phẩm đã phát hành, việc sửa lỗi bao gồm chi phí khắc phục, phát hành lại bản vá và cả rủi ro mất uy tín kinh doanh."
    },
    {
      "id": 45,
      "question": "Theo quy trình kiểm thử cơ bản được trình bày trong tài liệu, trình tự sắp xếp các hoạt động kiểm thử nào sau đây là ĐÚNG?",
      "options": [
        "Lập kế hoạch -> Phân tích -> Thiết kế -> Triển khai -> Thực thi -> Hoàn thành",
        "Lập kế hoạch -> Thiết kế -> Phân tích -> Thực thi -> Triển khai -> Hoàn thành",
        "Thực thi -> Phân tích -> Thiết kế -> Triển khai -> Lập kế hoạch -> Hoàn thành",
        "Phân tích -> Thiết kế -> Lập kế hoạch -> Thực thi -> Triển khai -> Hoàn thành"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Quy trình kiểm thử tuân theo thứ tự logic từ lập kế hoạch, phân tích điều kiện kiểm thử, thiết kế ca kiểm thử, cài đặt/triển khai, thực thi và kết thúc."
    },
    {
      "id": 46,
      "question": "Đội ngũ dự án bắt đầu rà soát tài liệu yêu cầu (Requirements) và thiết kế kiến trúc ngay từ tuần đầu tiên của dự án để phát hiện lỗi logic trước khi lập trình viên viết mã. Hoạt động này thể hiện trực tiếp nguyên tắc kiểm thử nào?",
      "options": [
        "Kiểm thử sớm (Early testing).",
        "Các khiếm khuyết thường phân cụm.",
        "Không có lỗi chỉ là sai lầm, ngụy biện.",
        "Kiểm thử là công việc phụ thuộc ngữ cảnh (Context dependent)."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Nguyên tắc kiểm thử sớm yêu cầu thực hiện các hoạt động kiểm thử ngay từ những giai đoạn đầu của vòng đời phát triển phần mềm để phát hiện lỗi sớm."
    },
    {
      "id": 47,
      "question": "Trong quy trình lập kế hoạch kiểm thử theo chuẩn IEEE 829 và thực tiễn quản lý dự án, sự phân cấp giữa các tài liệu kế hoạch kiểm thử thể hiện qua những đặc điểm nào sau đây?",
      "options": [
        "Kế hoạch kiểm thử chi tiết (Detailed Test Plan) tập trung vào ước lượng, lịch trình, phân công vai trò và sản phẩm giao nộp cho từng giai đoạn kiểm thử cụ thể.",
        "Kế hoạch kiểm thử mức dự án thay thế hoàn toàn Chính sách kiểm thử và làm cho Chiến lược kiểm thử trở nên không cần thiết.",
        "Chiến lược kiểm thử (Test Strategy) xác định phạm vi, mức độ kiểm thử, tiêu chí bắt đầu/kết thúc và cách tiếp cận quản lý lỗi áp dụng cho một hệ thống hoặc chương trình.",
        "Chính sách kiểm thử (Test Policy) là tài liệu mức rất cao, mang tính tĩnh, xác định ý nghĩa và cách đo lường thành công của kiểm thử cho toàn tổ chức."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Kế hoạch kiểm thử mức giai đoạn/chi tiết cụ thể hóa các hoạt động, nguồn lực và tiến độ cho một đợt kiểm thử thành phần hoặc kiểm thử hệ thống. Chiến lược kiểm thử quy định các phương pháp kỹ thuật và nguyên tắc chung được áp dụng xuyên suốt cho các dự án trong cùng một chương trình/hệ thống. Chính sách kiểm thử do phòng IT/QA định ra nhằm cung cấp khung định hướng dài hạn và tiêu chuẩn đo lường chung cho toàn bộ doanh nghiệp."
    },
    {
      "id": 48,
      "question": "Dựa trên mô hình chi phí khiếm khuyết (Cost of defects) thể hiện sự thay đổi chi phí tìm và sửa lỗi theo thời gian trong hình, phát biểu nào sau đây giải thích chính xác nhất lý do nên áp dụng nguyên tắc \"Kiểm thử sớm\" ngay từ giai đoạn Yêu cầu (Requirements)?",
      "options": [
        "Giai đoạn Yêu cầu chiếm 90% tổng ngân sách phát triển phần mềm nên kiểm thử sớm sẽ giúp cắt giảm chi phí này.",
        "Việc kiểm thử ở giai đoạn Live use hoàn toàn không tốn chi phí vì người dùng sẽ tự tìm và báo lỗi cho nhà phát triển.",
        "Chi phí tìm và sửa chữa khiếm khuyết tăng mạnh theo thời gian, do đó phát hiện lỗi ở giai đoạn Yêu cầu sẽ tránh được việc phải làm lại ở các giai đoạn Design, Build và Test.",
        "Chi phí khắc phục khiếm khuyết là một đường hằng số không đổi xuyên suốt các giai đoạn của vòng đời phần mềm."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": "images/ch1_bo3_cost_of_defects.jpg",
      "explanation": "Sửa lỗi ở giai đoạn Yêu cầu chỉ tốn chi phí cập nhật tài liệu đặc tả, trong khi để lỗi lọt sang giai đoạn vận hành (Live use) sẽ tốn chi phí khổng lồ để thiết kế lại, viết lại mã và bồi thường."
    },
    {
      "id": 49,
      "question": "Trong quy trình kiểm thử phần mềm chuẩn, những sự ghép nối nào giữa Hoạt động kiểm thử và Sản phẩm công việc (Work Products) tạo ra là chính xác?",
      "options": [
        "Hoạt động Thực thi kiểm thử (Test Execution) tạo ra Kế hoạch kiểm thử tổng thể (Test Plan).",
        "Hoạt động Triển khai kiểm thử (Test Implementation) tạo ra các Ca kiểm thử cụ thể (Low-level test cases), Quy trình/Kịch bản thực thi và Lịch trình thực thi kiểm thử.",
        "Hoạt động Thiết kế kiểm thử (Test Design) tạo ra các Ca kiểm thử mức cao (High-level test cases) và yêu cầu về Môi trường, Dữ liệu kiểm thử.",
        "Hoạt động Phân tích kiểm thử (Test Analysis) tạo ra các Điều kiện kiểm thử (Test conditions)."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 50,
      "question": "Một tổ chức áp dụng cùng một bộ tiêu chí kiểm thử, cùng số lượng ca kiểm thử và quy trình kiểm thử giống hệt nhau cho hai dự án: (1) Phần mềm điều khiển hệ thống phanh tự động của xe ô tô, và (2) Trang web bán quần áo thời trang nhỏ. Cách tiếp cận này vi phạm nghiêm trọng nhất nguyên tắc kiểm thử nào?",
      "options": [
        "Kiểm thử toàn diện là không thực tế (Exhaustive testing is impossible).",
        "Các khiếm khuyết thường có phân cụm (Defects cluster together).",
        "Kiểm thử chỉ ra sự có mặt của khiếm khuyết (Testing shows presence of defects).",
        "Kiểm thử là công việc phụ thuộc ngữ cảnh (Context dependent)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Các phần mềm có độ rủi ro và bản chất khác nhau (an toàn sinh mạng so với ứng dụng thương mại điện tử) đòi hỏi chiến lược, mức độ kỹ lưỡng và tiêu chí kiểm thử hoàn toàn khác nhau."
    },
    {
      "id": 51,
      "question": "Trong tâm lý học kiểm thử, việc để lập trình viên tự kiểm thử hoàn toàn sản phẩm mã nguồn do chính mình viết ra (thiếu tính độc lập trong kiểm thử) thường gặp phải những chướng ngại nào?",
      "options": [
        "Lập trình viên là người duy nhất hiểu rõ kiến trúc nên luôn phát hiện ra 100% lỗi phi chức năng tốt hơn kiểm thử viên độc lập.",
        "Lập trình viên thường có sự gắn bó tình cảm với sản phẩm của mình, dẫn đến tâm lý không muốn hoặc chủ động phủ định sự tồn tại của lỗi.",
        "Thực tế kiểm thử công việc của chính mình thường chỉ tìm ra khoảng 30% - 50% số lỗi do bản thân tạo ra.",
        "Lập trình viên có xu hướng nhìn thấy những gì họ dự định viết chứ không phải những gì thực sự đang tồn tại trong mã nguồn."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 52,
      "question": "Trong quy trình kiểm thử phần mềm, hoạt động nào sau đây thuộc về bước \"Triển khai/Cài đặt kiểm thử\" (Test Implementation)?",
      "options": [
        "Chuẩn bị các kịch bản kiểm thử (test scripts), dữ liệu kiểm thử (test data) và sắp xếp lịch trình thực thi.",
        "Xác định Chính sách kiểm thử và các đo lường thành công cho toàn bộ tập đoàn.",
        "Phân tích tài liệu đặc tả và xác định các điều kiện kiểm thử (test conditions).",
        "So sánh kết quả thực tế với kết quả mong đợi và ghi nhận các điểm sai lệch."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Bước triển khai kiểm thử tập trung chuyển đổi ca kiểm thử mức cao thành các thủ tục kiểm thử cụ thể, chuẩn bị dữ liệu và lịch trình chạy kiểm thử."
    },
    {
      "id": 53,
      "question": "Quan sát hình thể hiện mối quan hệ giữa Error, Fault/Bug và Failure. Phương pháp \"Kiểm thử tĩnh\" (Static testing) và \"Kiểm thử động\" (Dynamic testing) tác động trực tiếp vào đối tượng/tầng nào trong sơ đồ này?",
      "options": [
        "Cả hai phương pháp kiểm thử đều tác động trực tiếp vào hành vi gỡ lỗi (Debugging) của lập trình viên.",
        "Kiểm thử tĩnh và kiểm thử động đều chỉ tác động trực tiếp vào tầng Error made by a human.",
        "Kiểm thử tĩnh tác động vào Fault or bug, còn kiểm thử động tác động vào Failure.",
        "Kiểm thử tĩnh tác động vào Failure, trong khi kiểm thử động tác động vào Fault or bug."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": "images/ch1_bo3_error_fault_failure.jpg",
      "explanation": "Sơ đồ hiển thị rõ mũi tên Static testing chỉ trực tiếp vào tầng Fault or bug (phát hiện khiếm khuyết trong tài liệu/mã mà không cần chạy), trong khi Dynamic testing chỉ vào tầng Failure (khi hệ thống thực thi)."
    }
  ]
};
