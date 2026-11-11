// Dữ liệu Chương 3 (Bộ 3) — chuyển từ Kiểm-thử-ôn-tập-Chương-3.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3); câu nhiều đáp án dùng mảng.
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[11] = {
  "title": "Chương 3: Kiểm thử tĩnh (Bộ 3)",
  "num": 3,
  "questions": [
    {
      "id": 1,
      "question": "Dựa trên mô hình chi phí sửa chữa sai sót phần mềm trong vòng đời phát triển, chi phí khắc phục lỗi thay đổi như thế nào từ giai đoạn Yêu cầu (Requirement) đến sau khi Phát hành (After Release)?",
      "options": [
        "Chi phí không thay đổi đáng kể giữa các giai đoạn vì khối lượng mã nguồn cần sửa chữa là tương đương nhau.",
        "Chi phí gia tăng theo cấp số nhân, từ mức cơ sở 1X ở giai đoạn Yêu cầu lên đến 16X sau khi sản phẩm đã phát hành.",
        "Chi phí giảm dần từ 16X ở giai đoạn Yêu cầu xuống 1X sau khi phát hành nhờ các công cụ tự động hóa.",
        "Chi phí ở giai đoạn Kiểm thử độc lập là cao nhất (16X) vì phải dựng lại toàn bộ môi trường thử nghiệm."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Sơ đồ chi phí khắc phục lỗi cho thấy việc phát hiện và sửa lỗi càng trễ sẽ làm tăng chi phí từ 1X (Yêu cầu), 2X (Thiết kế), 4X (Mã nguồn/Unit Test), 8X (Kiểm thử độc lập) đến 16X (Sau phát hành)."
    },
    {
      "id": 2,
      "question": "Trong một cuộc họp Đánh giá chính thức (Formal Review), vai trò nào chịu trách nhiệm điều hành cuộc họp, hòa giải các quan điểm trái chiều và đóng vai trò quyết định đối với sự thành công của buổi đánh giá?",
      "options": [
        "Facilitator / Moderator (Người điều hành)",
        "Review Leader (Trưởng nhóm review)",
        "Management (Ban quản lý)",
        "The Author (Tác giả)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Người điều hành chịu trách nhiệm dẫn dắt cuộc họp review, giải quyết bất đồng quan điểm và giữ vai trò then chốt cho sự thành công của buổi làm việc."
    },
    {
      "id": 3,
      "question": "Một nhóm phát triển tổ chức buổi làm việc trong đó tác giả của tài liệu trực tiếp hướng dẫn cả nhóm đi qua từng phần nội dung và giải thích tư duy thiết kế của mình nhằm đạt được sự hiểu biết chung. Đây là hình thức review nào?",
      "options": [
        "Inspection (Thanh tra)",
        "Walkthrough (Hướng dẫn / Thảo luận)",
        "Technical Review (Đánh giá kỹ thuật)",
        "Informal Review (Đánh giá không chính thức)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Đặc trưng của Walkthrough là tác giả trực tiếp dẫn dắt nhóm đi qua tài liệu và suy nghĩ của mình để mọi người cùng hiểu chung và đồng thuận trên các thay đổi."
    },
    {
      "id": 4,
      "question": "Những đặc điểm nào sau đây mô tả chính xác về hình thức kiểm tra/thanh tra (Inspection) trong kiểm thử tĩnh?",
      "options": [
        "Là dạng review hình thức nhất (most formal review type) và bắt buộc sử dụng các danh sách kiểm tra (checklists).",
        "Sử dụng các tiêu chí đầu vào (entry criteria) và tiêu chí kết thúc (exit criteria) được xác định rõ ràng.",
        "Cuộc họp thanh tra bắt buộc phải do Ban quản lý dự án trực tiếp chủ trì và ghi chép biên bản.",
        "Người dẫn dắt (Leader) của đội thanh tra phải được đào tạo bài bản và có chứng nhận theo yêu cầu."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Inspection quy định mức độ trang trọng cao nhất trong các loại review và phụ thuộc nhiều vào quy trình chuẩn cũng như danh sách kiểm tra. Thanh tra yêu cầu kiểm tra điều kiện đầu vào trước khi tiến hành và tiêu chí kết thúc để nghiệm thu sản phẩm công việc. Trưởng nhóm Inspection đòi hỏi phải có kỹ năng chuyên môn được đào tạo và chứng nhận để quản lý buổi thanh tra hiệu quả."
    },
    {
      "id": 5,
      "question": "Phát biểu nào sau đây KHÔNG ĐÚNG khi so sánh giữa các loại hình review?",
      "options": [
        "Walkthrough giúp các thành viên cùng đạt được một sự hiểu biết chung về tài liệu và nhất trí với các đề xuất sửa đổi.",
        "Inspection thu thập các số liệu đo lường (metrics) và kiểm tra việc tuân thủ các chuẩn mực chất lượng của tổ chức.",
        "Informal Review thường không yêu cầu tài liệu hóa, không tổ chức review meeting và rất phổ biến trong các mô hình Agile.",
        "Trong Technical Review, ban quản lý dự án bắt buộc phải tham dự để đánh giá hiệu suất làm việc của từng kỹ sư."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Technical Review là buổi đánh giá ngang hàng giữa các đồng nghiệp và chuyên gia kỹ thuật, quy định rõ ràng không có sự tham gia của cấp quản lý."
    },
    {
      "id": 6,
      "question": "Xét đoạn mã nguồn kiểm tra luồng dữ liệu sau:\n1: n := 0\n2: read (x)\n3: n := 1\n4: while x > y do\n5: begin\n6: read (y)\n7: write (n * y)\n8: x := x - n\n9: end\nNhững vấn đề hoặc lỗi phân tích luồng dữ liệu nào xuất hiện trong đoạn mã trên?",
      "options": [
        "Biến n bị lỗi chưa được khai báo trước khi thực hiện phép nhân ở dòng 7.",
        "Biến n gặp dòng dữ liệu bất thường do được định nghĩa tại dòng 1 nhưng bị ghi đè tại dòng 3 mà không qua sử dụng.",
        "Biến y gặp lỗi luồng dữ liệu do được sử dụng trong biểu thức điều kiện tại dòng 4 trước khi được định nghĩa ở dòng 6.",
        "Biến x bị lỗi do được đọc ở dòng 2 nhưng bị xóa khỏi vùng nhớ ở dòng 8."
      ],
      "correctAnswer": [
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Giá trị n:=0 được định nghĩa ở dòng 1 bị hủy bởi câu lệnh n:=1 ở dòng 3 mà không hề được truy cập hay sử dụng ở giữa hai câu lệnh này. Vòng lặp `while x > y` ở dòng 4 thực hiện so sánh biến y khi nó chưa từng được nhận giá trị khởi tạo hay đọc vào từ bàn phím."
    },
    {
      "id": 7,
      "question": "Một đoạn mã nguồn chương trình chứa 3 cấu trúc điều kiện `IF` độc lập và 1 vòng lặp `WHILE`. Độ phức tạp Cyclomatic (Cyclomatic Complexity) của đoạn mã này là bao nhiêu?",
      "options": [
        "4",
        "6",
        "3",
        "5"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Số điểm quyết định (decision points) là 3+1=4. Áp dụng công thức Độ phức tạp=S o ˆ ˊ  quy e ˆ ˊ t định+1, ta có 4+1=5."
    },
    {
      "id": 8,
      "question": "Đối tượng nào sau đây KHÔNG THỂ kiểm tra trực tiếp bằng các kỹ thuật kiểm thử tĩnh (Static testing)?",
      "options": [
        "Mã nguồn chương trình và quy tắc đặt tên hàm/thư mục.",
        "Hợp đồng phát triển phần mềm và tài liệu kịch bản kiểm thử (test cases).",
        "Tài liệu đặc tả yêu cầu phần mềm và các sơ đồ thiết kế giải pháp.",
        "Thời gian phản hồi thực tế của hệ thống dưới áp lực 10.000 truy cập đồng thời."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Thời gian phản hồi dưới tải thực tế đòi hỏi hệ thống phải được thực thi (chạy chương trình), đây là đối tượng thuộc về kiểm thử động."
    },
    {
      "id": 9,
      "question": "Khi thực hiện Duyệt đặc tả mức thấp (Low-level specification review), người đánh giá sử dụng danh sách kiểm tra (checklist) để tập trung xác minh khía cạnh nào?",
      "options": [
        "Đóng vai người dùng cuối để cảm nhận giao diện tổng thể và tính thẩm mỹ màu sắc.",
        "Chiến lược truyền thông thị trường và mô hình kinh doanh của khách hàng.",
        "Tính đầy đủ, tính chính xác (không nhập nhằng), tính khả thi, tính tương thích và khả năng kiểm thử của các yêu cầu.",
        "Đo lường dung lượng bộ nhớ RAM mà ứng dụng tiêu thụ khi vận hành."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Duyệt đặc tả mức thấp đi sâu vào chi tiết kỹ thuật của yêu cầu thông qua checklist về độ đầy đủ, rõ ràng, tính nhất quán và khả năng thẩm định."
    },
    {
      "id": 10,
      "question": "Cho các mô tả đặc điểm sau về các loại hình review:\n(1) Được dẫn dắt trực tiếp bởi tác giả của sản phẩm công việc.\n(2) Thường không cần tài liệu hóa, không có review meeting, rất hay áp dụng trong Agile.\n(3) Thành viên tham gia gồm đồng nghiệp và chuyên gia kỹ thuật, tuyệt đối không có quản lý tham gia.\n(4) Là loại review chính thức nhất, do người điều hành đã qua đào tạo dẫn dắt, áp dụng tiêu chí đầu vào và đầu ra.\nSắp xếp đúng các mô tả trên lần lượt tương ứng với các loại review [Inspection, Technical Review, Informal Review, Walkthrough] là gì?",
      "options": [
        "Inspection: (1), Technical Review: (3), Informal Review: (2), Walkthrough: (4)",
        "Inspection: (3), Technical Review: (4), Informal Review: (1), Walkthrough: (2)",
        "Inspection: (4), Technical Review: (1), Informal Review: (3), Walkthrough: (2)",
        "Inspection: (4), Technical Review: (3), Informal Review: (2), Walkthrough: (1)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Mô tả (4) là Inspection (chính thức nhất), (3) là Technical Review (không có quản lý), (2) là Informal Review (không meeting/tài liệu) và (1) là Walkthrough (tác giả dẫn dắt)."
    },
    {
      "id": 11,
      "question": "Những ưu điểm nào sau đây thể hiện rõ giá trị của kiểm thử tĩnh (Static testing) so với kiểm thử động (Dynamic testing)?",
      "options": [
        "Có thể thay thế hoàn toàn kiểm thử động để đo lường độ tin cậy và khả năng chịu tải của hệ thống dưới điều kiện vận hành.",
        "Có thể tìm thấy các lỗi cấu trúc bên trong mã nguồn như biến chưa khai báo, lệnh không đạt tới (unreachable code) hay vi phạm chuẩn viết mã.",
        "Giúp giảm thiểu chi phí sửa chữa sai sót vì chi phí khắc phục lỗi ở giai đoạn sớm thấp hơn nhiều so với giai đoạn kiểm thử hệ thống hay sau phát hành.",
        "Có thể phát hiện lỗi sớm ngay ở giai đoạn tài liệu yêu cầu và thiết kế trước khi bắt đầu viết mã nguồn."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Phân tích tĩnh phát hiện các khiếm khuyết tĩnh trong mã nguồn mà kiểm thử động khó hoặc không thể kích hoạt trực tiếp. Sửa lỗi trên tài liệu yêu cầu (1X) rẻ hơn rất nhiều so with sửa lỗi khi hệ thống đã vận hành (16X). Kiểm thử tĩnh áp dụng được trên tài liệu ở đầu vòng đời, giúp phát hiện sai sót trước khi mã nguồn được tạo ra."
    },
    {
      "id": 12,
      "question": "Điểm khác biệt cốt lõi giữa Phân tích luồng dữ liệu (Data Flow Analysis) và Phân tích luồng điều khiển (Control Flow Analysis) trong kiểm thử tĩnh là gì?",
      "options": [
        "Phân tích luồng dữ liệu đòi hỏi phải thực thi mã nguồn, còn phân tích luồng điều khiển chỉ áp dụng trên tài liệu thiết kế.",
        "Phân tích luồng điều khiển chỉ tìm lỗi chính tả, còn phân tích luồng dữ liệu đo lường tốc độ mạng.",
        "Phân tích luồng dữ liệu do quản lý dự án thực hiện, còn phân tích luồng điều khiển do khách hàng thực hiện.",
        "Phân tích luồng dữ liệu theo dõi trạng thái định nghĩa và sử dụng của các biến; trong khi phân tích luồng điều khiển nghiên cứu cấu trúc đường đi và thứ tự thực thi các câu lệnh trong đồ thị chương trình."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Luồng dữ liệu gắn liền với vòng đời của biến (d - defined, u - used), còn luồng điều khiển gắn liền với đồ thị luồng lệnh, các nút rẽ nhánh và vòng lặp."
    },
    {
      "id": 13,
      "question": "Xét các loại sai sót sau trong quá trình phát triển phần mềm:\n(1) Câu lệnh IF chứa điều kiện luôn sai khiến các lệnh bên trong không bao giờ được thực thi (unreachable code).\n(2) Lỗi tràn bộ nhớ thực tế xảy ra sau khi ứng dụng chạy được 48 giờ liên tục.\n(3) Lỗi đặt tên biến không tuân thủ quy tắc PascalCase của tổ chức.\n(4) Lỗi thiếu nhất quán giữa sơ đồ Use Case và tài liệu đặc tả yêu cầu chi tiết.\n(5) Biến được định nghĩa trong hàm nhưng không bao giờ được truy cập.\nNhững loại sai sót nào ở trên CÓ THỂ phát hiện được bằng kỹ thuật kiểm thử tĩnh?",
      "options": [
        "(2) Lỗi tràn bộ nhớ chỉ xuất hiện khi thực thi ứng dụng liên tục trong 48 giờ.",
        "(5) Biến không được sử dụng do phân tích luồng dữ liệu phát hiện.",
        "(3) Vi phạm quy tắc đặt tên do phân tích mã nguồn thủ công hoặc công cụ linter/static analyzer kiểm tra.",
        "(4) Thiếu nhất quán tài liệu do hoạt động review đặc tả tài liệu phát hiện.",
        "(1) Mã không đạt tới được (unreachable code) do phân tích luồng điều khiển phát hiện."
      ],
      "correctAnswer": [
        1,
        2,
        3,
        4
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Lỗi luồng dữ liệu bất thường (defined but never used) là đối tượng phát hiện tiêu biểu của kiểm thử tĩnh. Các quy tắc cấu trúc mã và đặt tên được kiểm tra tĩnh dễ dàng bằng quy tắc kiểm duyệt. Review tài liệu giúp đối chiếu tính đồng bộ giữa sơ đồ thiết kế và đặc tả chữ. Phân tích luồng điều khiển tĩnh phát hiện các nhánh logic không thể chạm tới."
    },
    {
      "id": 14,
      "question": "Trong hoạt động review tài liệu đặc tả, nội dung nào sau đây mô tả đúng trọng tâm của 'Duyệt đặc tả mức cao' (High-level specification review)?",
      "options": [
        "Quan sát ở mức tổng thể, đóng vai người khách hàng để hiểu họ thực sự cần gì, làm rõ các yếu tố ẩn (như an ninh, dễ sử dụng) và so sánh với chuẩn mực hiện hành/sản phẩm cạnh tranh.",
        "Sử dụng danh sách kiểm tra chi tiết để soi từng câu từ về tính không nhập nhằng và khả năng thẩm định của câu lệnh.",
        "Đếm tổng số dòng lệnh (LOC) và số lượng phương thức trong các lớp đối tượng.",
        "Kiểm tra cú pháp của câu lệnh biên dịch trong môi trường chạy thử."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Duyệt đặc tả mức cao tập trung vào cái nhìn bao quát, yêu cầu thực tế của khách hàng, chuẩn an ninh/người dùng và đối sánh cạnh tranh."
    },
    {
      "id": 15,
      "question": "Dựa trên sơ đồ chi phí khắc phục lỗi trong vòng đời phát triển phần mềm, nếu chi phí sửa chữa một lỗi ở giai đoạn Đặc tả Yêu cầu (Requirement) là 1X và giai đoạn Thiết kế (Design) là 2X, thì chi phí phát hiện và sửa chữa lỗi đó sau khi phát hành (After Release) sẽ cao gấp bao nhiêu lần so với giai đoạn Thiết kế?",
      "options": [
        "32 lần",
        "16 lần",
        "4 lần",
        "8 lần"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Chi phí khắc phục sau khi phát hành là 16X, trong khi ở giai đoạn Thiết kế là 2X, do đó tỷ lệ chi phí tăng lên là 16X/2X=8 lần."
    },
    {
      "id": 16,
      "question": "Những vấn đề hoặc loại sai sót nào sau đây CÓ THỂ được phát hiện bằng kỹ thuật kiểm thử tĩnh (static testing)?",
      "options": [
        "Các đoạn mã không thể đạt tới (unreachable code) trong cấu trúc điều khiển.",
        "Vi phạm các quy tắc đặt tên hàm, tên file và chuẩn cấu trúc mã nguồn của tổ chức.",
        "Biến được sử dụng trước khi được khai báo hoặc khởi tạo giá trị.",
        "Sự cố rò rỉ bộ nhớ (memory leak) chỉ phát sinh sau 24 giờ hệ thống vận hành liên tục dưới tải cao."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Phân tích tĩnh luồng điều khiển cho phép phát hiện các nhánh hoặc lệnh nằm sau các điều kiện luôn sai mà không cần chạy chương trình. Duyệt mã nguồn thủ công hoặc bằng công cụ phân tích tĩnh kiểm tra việc tuân thủ các quy tắc viết code mà không cần thi hành mã. Phân tích tĩnh luồng dữ liệu giúp theo dõi vòng đời của biến và chỉ ra bất thường khi một biến được truy cập trước khi có định nghĩa."
    },
    {
      "id": 17,
      "question": "Trong quy trình review chính thức 5 bước tiêu chuẩn (Lập kế hoạch → Khởi tạo → Đánh giá cá nhân → Phân tích & truyền thông vấn đề → Sửa chữa & báo cáo), hoạt động nào sau đây được thực hiện đúng trong bước 'Khởi tạo' (Initiate review)?",
      "options": [
        "Tạo báo cáo sai sót, sửa chữa lỗi trong work product và chấp nhận sản phẩm khi đạt tiêu chí kết thúc.",
        "Các cá nhân tự thực hiện đánh giá độc lập trên sản phẩm công việc và ghi chép lỗi tiềm năng.",
        "Xác định tiêu chí bắt đầu/kết thúc, ước lượng thời gian và lựa chọn các thành viên nhóm review.",
        "Phân chia các sản phẩm công việc (work products), tài liệu liên quan cho thành viên và giải thích phạm vi, mục đích, vai trò."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Bước khởi tạo tập trung vào việc bàn giao tài liệu và cung cấp ngữ cảnh, phạm vi cũng như hướng dẫn ban đầu cho các thành viên tham gia."
    },
    {
      "id": 18,
      "question": "Nhóm đặc trưng nào sau đây mô tả đúng về hình thức Thanh tra (Inspection) trong các loại hình review?",
      "options": [
        "Là dạng review chính thức nhất (the most formal review type).",
        "Người Leader của đội thanh tra phải được đào tạo và có chứng nhận yêu cầu đo lường.",
        "Sử dụng các tiêu chí đầu vào (entry criteria) và tiêu chí kết thúc (exit criteria) rõ ràng.",
        "Thực hiện tự do, không có cuộc họp review meeting và không yêu cầu tài liệu hóa."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Thanh tra đứng ở mức độ trang trọng cao nhất, đòi hỏi sự tuân thủ nghiêm ngặt các quy trình và tài liệu hóa. Vai trò Trưởng nhóm thanh tra yêu cầu kỹ năng chuyên môn được chứng nhận để đảm bảo quy trình diễn ra chuẩn xác. Hình thức này bắt buộc phải kiểm tra điều kiện trước khi bắt đầu và đối chiếu tiêu chí hoàn thành để nghiệm thu."
    },
    {
      "id": 19,
      "question": "Trong một cuộc họp Formal Review, vai trò nào chịu trách nhiệm chính trong việc điều hành cuộc họp, hòa giải các quan điểm trái chiều và quyết định trực tiếp đến sự thành công của buổi đánh giá?",
      "options": [
        "Facilitator / Moderator (Người điều hành)",
        "Scribe / Recorder (Người ghi chép)",
        "The Author (Tác giả)",
        "Review leader (Trưởng nhóm review)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Người điều hành giữ vai trò trung gian, dẫn dắt cuộc họp đi đúng hướng và giải quyết bất đồng ý kiến giữa các bên."
    },
    {
      "id": 20,
      "question": "Xét đoạn mã giả sau trong kiểm thử tĩnh:\n```text\nBuffsize: 1000\nMailboxmax: 1000\nIF Buffsize < Mailboxmax THEN\nError-Exit\nENDIF\n```\nKỹ thuật phân tích tĩnh sẽ chỉ ra vấn đề nào đối với đoạn mã này?",
      "options": [
        "Lỗi truy cập biến chưa được khai báo hoặc định nghĩa.",
        "Mệnh đề THEN chứa mã nguồn không thể đạt tới (unreachable code).",
        "Vòng lặp vô hạn xảy ra do điều kiện kiểm tra không thay đổi.",
        "Vi phạm biên của mảng do chỉ số vượt quá giới hạn 1000."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Vì `Buffsize` bằng `Mailboxmax` (1000=1000), biểu thức `1000 < 1000` luôn nhận giá trị sai, khiến khối `Error-Exit` không bao giờ được thực thi."
    },
    {
      "id": 21,
      "question": "Khi thực hiện 'Duyệt đặc tả mức thấp' (Low-level specification review), nhóm đánh giá sẽ tập trung vào các tiêu chí nào trong danh sách kiểm tra (checklist)?",
      "options": [
        "Tính đầy đủ, chính xác và không nhập nhằng của các nhóm yêu cầu.",
        "Các sơ đồ phân tích thiết kế hệ thống đúng cú pháp, nhất quán và trực quan.",
        "So sánh sản phẩm với các đối thủ cạnh tranh về mặt công nghệ và độ tin cậy.",
        "Khả thi và khả năng kiểm thử (testability) của yêu cầu."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Đặc tả mức thấp yêu cầu độ chi tiết cao, đảm bảo không sót yêu cầu và diễn đạt một nghĩa rõ ràng. Thiết kế mức chi tiết cần tuân thủ đúng quy tắc sơ đồ (UML/DFD) để các lập trình viên hiểu thống nhất. Các yêu cầu kỹ thuật phải thực sự chế tạo được và có thể đo lường/kiểm tra được bằng test case."
    },
    {
      "id": 22,
      "question": "Loại hình review ngang hàng / kỹ thuật (Peer review / Technical review) có những đặc điểm nào dưới đây?",
      "options": [
        "Bao gồm các đồng nghiệp và chuyên gia kỹ thuật tham gia, không có sự tham gia của quản lý (Management).",
        "Không cần chuẩn bị trước và tác giả tự do trình bày mà không ghi chép tài liệu.",
        "Đánh giá đôi khi có thể mang tính chủ quan giữa các chuyên gia.",
        "Có thực hiện tài liệu hóa và ghi lại danh sách các lỗi tìm được."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Technical review tập trung vào giải pháp kỹ thuật giữa các chuyên gia và đồng nghiệp mà không chịu áp lực quản lý. Do dựa trên kinh nghiệm và nhận định kỹ thuật cá nhân của các peer/expert nên kết quả có thể có sự chủ quan. Là một dạng formal review nên Technical review bắt buộc phải lưu trữ hồ sơ và theo dõi vết khiếm khuyết."
    },
    {
      "id": 23,
      "question": "Hình thức Review nào mà trong đó Tác giả (Author) chủ động hướng dẫn cả nhóm đi qua sản phẩm công việc và giải thích tư duy của mình nhằm đạt được sự hiểu biết chung và đồng thuận về các thay đổi?",
      "options": [
        "Walkthrough (Hướng dẫn)",
        "Inspection (Thanh tra)",
        "Static code analysis (Phân tích mã tự động)",
        "Informal review (Review không chính thức)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Trong Walkthrough, chính tác giả đóng vai trò dẫn dắt (walkthrough) nhóm qua từng phần tài liệu để giải thích ngữ cảnh và tư tưởng thiết kế."
    },
    {
      "id": 24,
      "question": "Trong kiểm thử tĩnh mã nguồn, kỹ thuật Phân tích luồng điều khiển (Control flow analysis) nhằm mục đích phát hiện các vấn đề nào?",
      "options": [
        "Các nút đồ thị không thể truy cập được từ nút bắt đầu.",
        "Sự xuất hiện của các vòng lặp vô hạn.",
        "Các câu lệnh nhảy (`goto`) tới nhãn chưa được định nghĩa hoặc các nhãn không bao giờ được nhảy tới.",
        "Tốc độ đọc ghi dữ liệu trên đĩa cứng của các câu lệnh I/O."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Phân tích cấu trúc đồ thị luồng phát hiện những nhánh mã chết (dead code) không bao giờ được chạm tới. Kiểm tra luồng điều khiển xác định các chu trình trong đồ thị không có đường thoát hợp lệ. Phân tích cú pháp điều hướng phát hiện sự đứt gãy hoặc dư thừa của các nhãn chuyển hướng trong chương trình."
    },
    {
      "id": 25,
      "question": "Phân tích luồng dữ liệu (Data flow analysis) trong kiểm thử tĩnh mã nguồn tập trung nghiên cứu đối tượng chính nào sau đây?",
      "options": [
        "Số lượng dòng comment có trong file mã nguồn.",
        "Tốc độ truyền gói tin giữa Client và Server trên mạng.",
        "Vòng đời của các biến (khai báo, định nghĩa/gán giá trị, và sử dụng giá trị).",
        "Số lượng các cổng logic gộp trong thiết kế vi mạch."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Luồng dữ liệu theo dõi trạng thái biến để đảm bảo biến được định nghĩa trước khi dùng và không bị ghi đè vô ích."
    },
    {
      "id": 26,
      "question": "Các công cụ như SonarQube, SonarLint, Codacy, Checkmarx, PMD được sử dụng cho mục đích nào trong tiến trình kiểm thử?",
      "options": [
        "Tự động đo tải và chịu lỗi của hệ thống dưới hàng triệu truy cập đồng thời.",
        "Kiểm tra sự tuân thủ các chuẩn viết code (coding style guides).",
        "Giả lập hành vi nhấp chuột của người dùng trên giao diện web.",
        "Thực hiện phân tích tĩnh mã nguồn tự động (Automation static analysis)."
      ],
      "correctAnswer": [
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Các công cụ này đối chiếu trực tiếp mã nguồn với các bộ quy tắc chuẩn của từng ngôn ngữ (Google Style, PSR...). Đây là các công cụ nổi tiếng giúp tự động quét mã nguồn để tìm bug, lỗ hổng bảo mật và code smell mà không cần chạy phần mềm."
    },
    {
      "id": 27,
      "question": "Hoạt động nào sau đây thuộc bước thứ 4 ('Phân tích và truyền thông vấn đề') trong quy trình review 5 bước?",
      "options": [
        "Phân chia tài liệu và giải thích mục đích, vai trò cho các thành viên.",
        "Lựa chọn các thành viên nhóm review và xác định tiêu chí bắt đầu/kết thúc.",
        "Thảo luận các vấn đề được xác định, gán người sở hữu work product và thiết đặt trạng thái cho vấn đề.",
        "Sửa chữa các sai sót trong work product và báo cáo trạng thái cập nhật defect."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Bước 4 tập trung trao đổi nhóm để làm rõ sai sót tiềm năng, phân công trách nhiệm khắc phục và đánh giá thuộc tính chất lượng."
    },
    {
      "id": 28,
      "question": "Những chỉ số / độ đo nào sau đây được sử dụng trong phân tích tĩnh mã nguồn?",
      "options": [
        "Độ sâu của cây thừa kế (Depth of Inheritance Tree) trong hướng đối tượng.",
        "Số lượng phản hồi HTTP 500 nhận được mỗi giây từ server.",
        "Số dòng code - Lines Of Code (LOC).",
        "Độ phức tạp Cyclomatic."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Đây là độ đo hướng đối tượng đánh giá mức độ phức tạp thiết kế lớp thông qua phân tích tĩnh. LOC là độ đo kích thước cơ bản được thu thập bằng phân tích tĩnh. Độ phức tạp Cyclomatic là chỉ số cấu trúc luồng điều khiển kinh điển trong phân tích tĩnh."
    },
    {
      "id": 29,
      "question": "Một người kiểm thử thực hiện soi mã nguồn C++ và phát hiện lỗi cú pháp gán nhầm phép so sánh trong câu lệnh: `if (a = 0)`. Đây là ví dụ về việc áp dụng kỹ thuật nào?",
      "options": [
        "Phân tích tĩnh mã nguồn (Static code analysis)",
        "Phân tích giá trị biên (Boundary Value Analysis)",
        "Kiểm thử giao diện (Interface Testing)",
        "Phân vùng tương đương (Equivalence Class Partitioning)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Lỗi gán `= ` thay vì so sánh `==` trong biểu thức điều kiện `if` được phát hiện thông qua việc đọc/quét mã nguồn tĩnh."
    },
    {
      "id": 30,
      "question": "Trong một dự án phần mềm, đội ngũ phát triển phát hiện một lỗi thiết kế nghiêm trọng trong giai đoạn kiểm thử độc lập (Independent Test). Nếu chi phí để sửa chữa lỗi này ở giai đoạn Yêu cầu (Requirement) ước tính là 500 USD, thì chi phí khắc phục lỗi đó ở giai đoạn Independent Test và giai đoạn Sau khi phát hành (After Release) lần lượt là bao nhiêu?",
      "options": [
        "8,000 USD và 16,000 USD",
        "4,000 USD và 16,000 USD",
        "2,000 USD và 8,000 USD",
        "4,000 USD và 8,000 USD"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Giai đoạn Independent Test có chi phí sửa lỗi gấp 8 lần (8×500=4,000 USD) và giai đoạn After Release có chi phí gấp 16 lần (16×500=8,000 USD) so với giai đoạn Requirement."
    },
    {
      "id": 31,
      "question": "Trong một buổi đánh giá thanh tra (Inspection) mã nguồn, hai lập trình viên nảy sinh tranh luận gay gắt về kiến trúc thiết kế và không thể đi đến thống nhất. Ai là người giữ vai trò chính trong việc điều hành cuộc họp và hòa giải các quan điểm trái chiều này?",
      "options": [
        "Management (Ban quản lý)",
        "Author (Tác giả)",
        "Scribe / Recorder (Người ghi chép)",
        "Facilitator / Moderator (Người điều hành)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Người điều hành chịu trách nhiệm dẫn dắt cuộc họp review và trung lập hòa giải các mâu thuẫn quan điểm giữa các thành viên."
    },
    {
      "id": 32,
      "question": "Doanh nghiệp A chuẩn bị tổ chức đánh giá một tài liệu thiết kế hệ thống ngân hàng. Họ bổ nhiệm một Trưởng nhóm đã qua đào tạo và có chứng nhận, xây dựng danh sách kiểm tra chi tiết, thiết lập tiêu chí bắt đầu/kết thúc nghiêm ngặt và lên kế hoạch thu thập ma trận đo lường lỗi. Hình thức review nào đang được áp dụng?",
      "options": [
        "Technical review (Review kỹ thuật)",
        "Inspection (Thanh tra)",
        "Walkthrough (Hướng dẫn)",
        "Informal review (Review không chính thức)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Inspection là hình thức đánh giá chính thức nhất, đòi hỏi Trưởng nhóm có chứng chỉ, tuân thủ danh sách kiểm tra, tiêu chí vào/ra và thu thập ma trận đo lường."
    },
    {
      "id": 33,
      "question": "Trưởng nhóm kiểm thử đang thiết lập trình tự các bước thực hiện cho một quy trình review chính thức. Trình tự nào sau đây phản ánh đúng quy trình chuẩn?",
      "options": [
        "Lập kế hoạch → Khởi tạo review → Review cá nhân → Truyền thông và phân tích vấn đề → Chỉnh sửa và báo cáo",
        "Lập kế hoạch → Review cá nhân → Khởi tạo review → Truyền thông và phân tích vấn đề → Chỉnh sửa và báo cáo",
        "Khởi tạo review → Lập kế hoạch → Review cá nhân → Chỉnh sửa và báo cáo → Truyền thông và phân tích vấn đề",
        "Khởi tạo review → Review cá nhân → Truyền thông và phân tích vấn đề → Lập kế hoạch → Chỉnh sửa và báo cáo"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Đây là trình tự 5 bước chuẩn của quy trình review được định nghĩa trong tài liệu."
    },
    {
      "id": 34,
      "question": "Trong cuộc họp review kỹ thuật chính thức, thành viên nào có nhiệm vụ thu thập, đối chiếu các khuyết điểm tìm được từ giai đoạn chuẩn bị cá nhân và ghi chép lại các phát hiện mới cùng các quyết định của cuộc họp?",
      "options": [
        "Review leader (Trưởng nhóm review)",
        "Author (Tác giả)",
        "Facilitator (Người điều hành)",
        "Scribe / Recorder (Người ghi chép)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Scribe/Recorder có vai trò ghi nhận biên bản, tập hợp lỗi từ review cá nhân và ghi lại các điểm phát sinh trong buổi họp."
    },
    {
      "id": 35,
      "question": "Một Kiến trúc sư phần mềm tổ chức buổi họp với đội ngũ lập trình. Anh ấy chủ động trình bày chi tiết từng phần của tài liệu thiết kế, giải thích luồng tư duy của mình để tất cả thành viên hiểu chung một mục tiêu và thống nhất các thay đổi cần thực hiện. Đây là dạng review nào?",
      "options": [
        "Walkthrough (Hướng dẫn)",
        "Technical review (Review kỹ thuật)",
        "Informal review (Buddy check)",
        "Inspection (Thanh tra)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Walkthrough là kỹ thuật do tác giả chủ động hướng dẫn nhóm thông qua tài liệu và tư duy của mình để đạt sự hiểu biết chung."
    },
    {
      "id": 36,
      "question": "Một lập trình viên cho rằng: 'Chỉ cần sử dụng công cụ phân tích tĩnh mã nguồn tự động thì không cần thực hiện kiểm thử động nữa'. Phát biểu nào sau đây chỉ ra đúng hạn chế của phân tích tĩnh để phản bác ý kiến trên?",
      "options": [
        "Phân tích tĩnh không thể đo đạc được các chỉ số độ phức tạp hay số dòng lệnh.",
        "Phân tích tĩnh không thể tìm được các lỗi ẩn sâu trong cấu trúc mã nguồn.",
        "Phân tích tĩnh tốn chi phí gấp 16 lần so với kiểm thử động ở giai đoạn phát hành.",
        "Phân tích tĩnh không thực thi mã nguồn nên không liên quan đến các điều kiện vận hành thực tế và khó phân biệt mã 'fail-safe' với lỗi lập trình."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Do không chạy chương trình trong môi trường thực, phân tích tĩnh không đánh giá được hành vi vận hành thực tế và dễ đưa ra cảnh báo quá tải cho mã xử lý ngoại lệ."
    },
    {
      "id": 37,
      "question": "Trong dự án phần mềm X, buổi review kỹ thuật chính thức cho kết quả không đạt yêu cầu và làm phát sinh chi phí vượt ngân sách. Vai trò nào có thẩm quyền thực hiện các quyết định kiểm soát và điều chỉnh ngân sách/nguồn lực?",
      "options": [
        "Management (Ban quản lý)",
        "Scribe (Người ghi chép)",
        "Author (Tác giả)",
        "Reviewer (Người đánh giá)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Ban quản lý chịu trách nhiệm phân bổ ngân sách, chi phí, giám sát hiệu quả và đưa ra quyết định kiểm soát khi kết quả không thỏa đáng."
    },
    {
      "id": 38,
      "question": "Cho các nhận định sau về Kiểm thử tĩnh và Kiểm thử động:\n1. Kiểm thử động thực thi hệ thống hoặc thành phần dưới các điều kiện kiểm thử để phát hiện sai sót.\n2. Kiểm thử tĩnh phân tích và đánh giá để phát hiện sai sót bên trong sản phẩm công việc mà không cần thực thi mã nguồn.\n3. Kiểm thử tĩnh chỉ áp dụng được cho mã nguồn, không áp dụng được cho tài liệu đặc tả yêu cầu.\n4. Phân tích luồng dữ liệu và phân tích luồng điều khiển là các kỹ thuật thuộc kiểm thử tĩnh.\n5. Kiểm thử hộp đen (Black Box) là một nhánh thuộc phương pháp kiểm thử tĩnh.\nTổ hợp các nhận định chính xác là:",
      "options": [
        "1, 4, 5",
        "2, 3, 4",
        "1, 2, 3, 5",
        "1, 2, 4"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Nhận định 1, 2 định nghĩa đúng kiểm thử động/tĩnh; nhận định 4 đúng vì phân tích luồng dữ liệu/điều khiển là tĩnh. Nhận định 3 sai vì tĩnh áp dụng cho mọi work product; nhận định 5 sai vì Black Box thuộc kiểm thử động."
    },
    {
      "id": 39,
      "question": "Cho các phát biểu sau về lợi ích của Kiểm thử tĩnh:\n1. Có thể tiến hành sớm trong vòng đời phát triển phần mềm và đưa ra phản hồi sớm về chất lượng.\n2. Giúp tăng thời gian phát triển phần mềm để đội ngũ kiểm thử làm việc kỹ hơn.\n3. Cải tiến năng suất của đội phát triển và giảm mức độ lỗi sản phẩm.\n4. Phát hiện lỗi sớm giúp giảm chi phí sửa chữa, chi phí kiểm thử và chi phí rủi ro.\n5. Cải thiện mối quan hệ hợp tác với khách hàng.\nTổ hợp các phát biểu chính xác là:",
      "options": [
        "2, 3, 5",
        "1, 2, 4, 5",
        "1, 2, 3, 4",
        "1, 3, 4, 5"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Các phát biểu 1, 3, 4, 5 phản ánh đúng các lợi ích đã được liệt kê. Phát biểu 2 sai vì kiểm thử tĩnh giúp 'Giảm thời gian phát triển' chứ không phải làm tăng."
    },
    {
      "id": 40,
      "question": "Xét các hoạt động sau trong quy trình review phần mềm:\n1. Xác định phạm vi review: mục tiêu và đối tượng review.\n2. Ước lượng thời gian và chi phí cho việc review.\n3. Giải thích phạm vi, mục đích, tiến trình cho các thành viên tham gia.\n4. Lựa chọn thành viên nhóm review và xác định kỹ thuật review áp dụng.\n5. Định nghĩa tiêu chí bắt đầu và kết thúc đối với các kỹ thuật review chính thức.\n6. Sửa chữa các sai sót trong các work products được review.\nCác hoạt động nào thuộc giai đoạn Lập kế hoạch đánh giá (Planning)?",
      "options": [
        "3, 4, 5, 6",
        "1, 2, 4, 5",
        "2, 3, 4, 5",
        "1, 2, 3, 6"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Hoạt động 1, 2, 4, 5 thuộc giai đoạn Lập kế hoạch. Hoạt động 3 thuộc giai đoạn Khởi tạo (Initiate); hoạt động 6 thuộc giai đoạn Chỉnh sửa và báo cáo (Fixing & reporting)."
    },
    {
      "id": 41,
      "question": "Cho các nhận định về vai trò của các thành viên trong Formal Review:\n1. Tác giả (Author) chịu trách nhiệm tạo ra work product và trực tiếp sửa chữa các sai sót trong đó.\n2. Trưởng nhóm review (Review leader) trực tiếp điều hành cuộc họp review meeting và hòa giải quan điểm trái chiều.\n3. Người điều hành (Facilitator/Moderator) đóng vai trò quyết định lớn đến sự thành công của buổi đánh giá.\n4. Người đánh giá (Reviewer) dựa vào nền tảng kỹ thuật/nghiệp vụ để chỉ định các sai sót.\n5. Ban quản lý (Management) trực tiếp ghi chép các lỗi tìm được trong cuộc họp review.\nTổ hợp nhận định đúng là:",
      "options": [
        "1, 4, 5",
        "1, 3, 4",
        "1, 2, 5",
        "2, 3, 4"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Nhận định 1, 3, 4 mô tả chính xác vai trò. Nhận định 2 sai vì hòa giải/điều hành là việc của Facilitator; nhận định 5 sai vì ghi chép lỗi là nhiệm vụ của Scribe."
    },
    {
      "id": 42,
      "question": "Cho các đặc điểm sau đây về hai hình thức review:\n1. Informal review có mục đích chính là phát hiện sai sót tiềm năng và đưa ra ý tưởng mới.\n2. Formal review yêu cầu tài liệu hóa quy trình, sử dụng checklist và có tiêu chí kết thúc.\n3. Informal review thường không cần tài liệu hóa, không có review meeting và rất phổ biến trong Agile.\n4. Formal review không cần bổ nhiệm các vai trò trách nhiệm cụ thể cho thành viên.\n5. Informal review có chi phí thực hiện cao hơn nhiều so với Formal review.\nNhững phát biểu ĐÚNG là:",
      "options": [
        "1, 2, 3",
        "2, 4, 5",
        "2, 3, 4",
        "1, 3, 5"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Phát biểu 1, 2, 3 nêu đúng bản chất của 2 dạng review. Phát biểu 4 sai vì Formal review bắt buộc bổ nhiệm vai trò; phát biểu 5 sai vì Informal review có chi phí thấp."
    },
    {
      "id": 43,
      "question": "Xét các phát biểu sau về phân loại các kỹ thuật review:\n1. Walkthrough là hình thức tác giả hướng dẫn nhóm đi qua tài liệu để thống nhất các thay đổi.\n2. Technical review bao gồm sự tham gia của đồng nghiệp và chuyên gia kỹ thuật, không có quản lý tham gia.\n3. Inspection là dạng review chính thức nhất, sử dụng danh sách kiểm tra và tiêu chí đầu vào/kết thúc.\n4. Informal review luôn cung cấp bằng chứng tài liệu rõ ràng để chứng minh kết quả đánh giá.\n5. Inspection không yêu cầu người Leader phải qua đào tạo hay chứng nhận.\nTổ hợp các phát biểu ĐÚNG là:",
      "options": [
        "3, 4, 5",
        "1, 3, 4",
        "2, 4, 5",
        "1, 2, 3"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Nhận định 1, 2, 3 chính xác. Nhận định 4 sai vì Informal review 'không ai có thể chứng minh kết quả'; nhận định 5 sai vì Inspection yêu cầu Leader phải được đào tạo/chứng nhận."
    },
    {
      "id": 44,
      "question": "Cho các tiêu chí trong danh sách kiểm tra (checklist) khi thực hiện Review tài liệu:\n1. Đầy đủ các nhóm yêu cầu chức năng và phi chức năng.\n2. Yêu cầu chính xác, không nhập nhằng, rõ ràng và nhất quán.\n3. Yêu cầu phải khả thi và có khả năng kiểm thử được.\n4. Các sơ đồ phân tích thiết kế hệ thống đúng cú pháp, nhất quán và trực quan.\n5. Đóng vai người khách hàng để tìm hiểu các yêu cầu an ninh, dễ sử dụng chưa được nêu ra.\nNhững tiêu chí nào thuộc về Duyệt đặc tả mức thấp (Low-level specification review)?",
      "options": [
        "2, 3, 4, 5",
        "1, 2, 3, 4",
        "1, 2, 5",
        "1, 3, 5"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Các mục 1, 2, 3, 4 thuộc danh sách kiểm tra duyệt đặc tả mức thấp. Mục 5 thuộc về duyệt đặc tả mức cao (High-level spec review)."
    },
    {
      "id": 45,
      "question": "Xét các nội dung sau liên quan đến review mã nguồn và phân tích tĩnh bằng trình biên dịch:\n1. Tuân thủ các quy tắc quản lý phiên bản mã nguồn, quy tắc đặt tên hàm/file và cấu trúc thư mục.\n2. Phát hiện các câu lệnh không thể đạt tới (unreachable statements).\n3. Phát hiện biến chưa được khai báo hoặc kiểu tham số không phù hợp.\n4. Phát hiện hàm/thủ tục không được gọi và lỗi vi phạm biên của mảng.\n5. Thực thi chương trình để đo thời gian phản hồi của các hàm xử lý.\nNhững nội dung nào phản ánh đúng khả năng của Kiểm thử tĩnh / Phân tích mã nguồn?",
      "options": [
        "1, 3, 5",
        "1, 2, 3, 4",
        "2, 4, 5",
        "1, 2, 5"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Các mục 1, 2, 3, 4 đều là khả năng của phân tích tĩnh dựa trên trình biên dịch/luồng mã. Mục 5 thuộc kiểm thử động vì yêu cầu thực thi chương trình."
    },
    {
      "id": 46,
      "question": "Cho các khái niệm và phát biểu về phân tích luồng dữ liệu (Data flow analysis):\n1. Biến được định nghĩa (defined) là nơi biến đang lưu trữ một dữ liệu.\n2. Biến được sử dụng (used) là nơi giá trị lưu trữ của biến có thể được truy cập.\n3. Lỗi luồng dữ liệu xảy ra khi một biến được sử dụng trước khi nó được định nghĩa.\n4. Bất thường luồng dữ liệu xảy ra khi một biến được định nghĩa mới nhưng giá trị cũ chưa từng được sử dụng.\n5. Phân tích luồng dữ liệu yêu cầu phải cho chương trình chạy thực tế với các bộ dữ liệu đầu vào.\nTổ hợp các phát biểu ĐÚNG là:",
      "options": [
        "1, 2, 3, 4",
        "2, 4, 5",
        "1, 3, 5",
        "1, 2, 5"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Các nhận định 1, 2, 3, 4 mô tả chuẩn xác về khái niệm định nghĩa/sử dụng và lỗi/bất thường luồng dữ liệu. Nhận định 5 sai vì đây là kỹ thuật kiểm thử tĩnh."
    },
    {
      "id": 47,
      "question": "Trong phân tích luồng điều khiển (Control flow analysis), công cụ phân tích tĩnh tập trung kiểm tra những vấn đề nổi bật nào?\n1. Các nút của đồ thị không thể truy cập được từ nút bắt đầu.\n2. Sự xuất hiện của các vòng lặp vô hạn hoặc vòng lặp có nhiều mục đầu vào.\n3. Kiểm tra các câu lệnh nhảy (`goto`) tới các nhãn chưa được định nghĩa.\n4. Kiểm tra sự tồn tại của các nhãn trong mã nguồn nhưng chưa từng được nhảy tới.\n5. Kiểm tra khả năng chịu tải của các đường dẫn điều khiển dưới 10,000 người dùng đồng thời.\nTổ hợp đáp án ĐÚNG là:",
      "options": [
        "1, 2, 3, 4",
        "2, 3, 5",
        "3, 4, 5",
        "1, 2, 5"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Mục 1, 2, 3, 4 là các lỗi luồng điều khiển tĩnh chuẩn được liệt kê. Mục 5 thuộc về kiểm thử tải/hiệu năng (kiểm thử động)."
    },
    {
      "id": 48,
      "question": "Cho các nhận định về Độ phức tạp Cyclomatic (Cyclomatic complexity):\n1. Độ phức tạp Cyclomatic là một độ đo độ phức tạp của đồ thị luồng điều khiển.\n2. Đồ thị luồng điều khiển càng phức tạp thì chỉ số Cyclomatic càng lớn.\n3. Công thức tính độ phức tạp Cyclomatic là: Độ phức tạp=S\no\nˆ\nˊ\nquy\ne\nˆ\nˊ\nt định+1.\n4. Một hàm không chứa câu lệnh rẽ nhánh/quyết định nào sẽ có độ phức tạp Cyclomatic bằng 1.\n5. Độ phức tạp Cyclomatic được tính bằng cách lấy tổng số dòng code (LOC) chia cho số lượng biến.\nTổ hợp nhận định ĐÚNG là:",
      "options": [
        "1, 3, 5",
        "1, 2, 3, 4",
        "1, 2, 5",
        "2, 4, 5"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Các phát biểu 1, 2, 3, 4 đều đúng theo công thức và lý thuyết. Phát biểu 5 sai vì công thức tính dựa trên điểm quyết định chứ không liên quan tới LOC/số biến."
    },
    {
      "id": 49,
      "question": "Trong kiểm thử tĩnh mã nguồn, các độ đo (metrics) nào sau đây được sử dụng để đánh giá chất lượng phần mềm?\n1. Số dòng code - Lines Of Code (LOC).\n2. Toán hạng và toán tử (Halstead’s metrics).\n3. fan-in và fan-out của các cổng mạch logic/thành phần.\n4. Mức độ lồng nhau của các khối lệnh và các lời gọi hàm lồng nhau.\n5. Các độ đo hướng đối tượng: Độ sâu cây thừa kế, số lượng phương thức, độ kết dính và ghép nối (cohesion & coupling).\nSố lượng độ đo đúng được đề cập trong bài học là:",
      "options": [
        "Chỉ có 2 độ đo (1, 5)",
        "Chỉ có 4 độ đo (1, 2, 3, 5)",
        "Chỉ có 3 độ đo (1, 2, 4)",
        "Tất cả 5 độ đo trên (1, 2, 3, 4, 5)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Cả 5 nhóm độ đo trên đều được trình bày đầy đủ trong mục 'Các độ đo khác' của bài học."
    },
    {
      "id": 50,
      "question": "Xét các hoạt động sau trong bước Truyền thông và phân tích vấn đề (Issue communication and analysis) của quy trình review:\n1. Truyền thông các vấn đề được xác định bằng cách thảo luận, họp nhóm.\n2. Phân tích các vấn đề tiềm năng và gán cho người sở hữu work product liên quan.\n3. Đánh giá và tài liệu hóa các thuộc tính chất lượng liên quan.\n4. Đánh giá sử dụng các tiêu chí kết thúc để phân loại mức độ nghiêm trọng của lỗi (reject, critical, major, minor defects).\n5. Sửa chữa các sai sót trong các work product và tạo báo cáo defect.\nCác hoạt động thuộc bước Truyền thông và phân tích vấn đề là:",
      "options": [
        "1, 2, 3, 4",
        "1, 2, 5",
        "2, 4, 5",
        "1, 3, 5"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Các mục 1, 2, 3, 4 thuộc giai đoạn Truyền thông & phân tích vấn đề. Mục 5 thuộc về bước 'Chỉnh sửa và báo cáo' (Fixing & reporting)."
    },
    {
      "id": 51,
      "question": "Cho các công việc sau trong giai đoạn Chỉnh sửa và báo cáo (Fixing and reporting):\n1. Tạo báo cáo sai sót cho các phát hiện cần thay đổi.\n2. Sửa chữa các sai sót trong các work product được review.\n3. Thu thập ma trận tổng hợp các defect được chỉnh sửa hoặc hoãn lại.\n4. Chấp nhận work product khi tiêu chí kết thúc được đạt tới.\n5. Lựa chọn thành viên nhóm review và xác định kỹ thuật áp dụng.\nTổ hợp các công việc chính xác của giai đoạn này là:",
      "options": [
        "1, 2, 3, 4",
        "1, 2, 5",
        "2, 3, 5",
        "3, 4, 5"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Các công việc 1, 2, 3, 4 thể hiện đúng nội dung của bước Chỉnh sửa & Báo cáo. Công việc 5 thuộc về bước Lập kế hoạch (Planning)."
    },
    {
      "id": 52,
      "question": "Cho các nhận định về kỹ thuật Duyệt đặc tả mức cao:\n1. Cần quan sát ở mức tổng thể và đóng vai người khách hàng để hiểu nhu cầu thực sự của họ.\n2. Cần lưu ý rằng khách hàng thường không nói ra những nhu cầu là hiển nhiên (ví dụ: an ninh, tính dễ sử dụng).\n3. Cần đối chiếu đặc tả với các chuẩn mực hiện hành (thuật ngữ, quy ước, chuẩn quốc tế, chuẩn an ninh,...).\n4. Cần so sánh với các sản phẩm cạnh tranh về chức năng, công nghệ, độ tin cậy và tính bảo mật.\n5. Cần kiểm tra chi tiết lỗi cú pháp của các dòng lệnh C++ trong thuật toán.\nTổ hợp nhận định ĐÚNG là:",
      "options": [
        "1, 2, 5",
        "2, 4, 5",
        "1, 2, 3, 4",
        "1, 3, 5"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhận định 1, 2, 3, 4 tóm tắt chính xác các khía cạnh duyệt đặc tả mức cao. Nhận định 5 sai vì kiểm tra cú pháp C++ thuộc về review mã nguồn."
    }
  ]
};
