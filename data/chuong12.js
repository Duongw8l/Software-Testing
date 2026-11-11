// Dữ liệu Chương 4 (Bộ 3) — chuyển từ Kiểm-thử-ôn-tập-Chương-4.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3); câu nhiều đáp án dùng mảng.
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[12] = {
  "title": "Chương 4: Kỹ thuật kiểm thử (Bộ 3)",
  "num": 4,
  "questions": [
    {
      "id": 1,
      "question": "Trong kỹ thuật phân lớp tương đương (Equivalence Partitioning), đâu là nguyên lý nền tảng để giải thích tại sao chỉ cần chọn một test case đại diện cho mỗi lớp tương đương?",
      "options": [
        "Tất cả các test case trong cùng một lớp tương đương kích hoạt thành phần phần mềm thực hiện cùng một hành vi nhóm.",
        "Phần lớn mã nguồn lập trình luôn được tối ưu hóa để xử lý tất cả các phần tử trong miền đầu vào theo các quy tắc cố định.",
        "Việc kiểm thử vét cạn tất cả các giá trị trong một lớp tương đương là điều bắt buộc để đảm bảo phần mềm không có lỗi.",
        "Các test case đại diện luôn có khả năng phát hiện lỗi ở các vị trí ranh giới miền dữ liệu tốt hơn các giá trị khác."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Kỹ thuật này dựa trên nguyên lý các test case trong cùng nhóm thực hiện cùng một hành vi; nếu test case đại diện gây ra lỗi thì các test case khác trong nhóm cũng được kỳ vọng gây ra lỗi tương tự."
    },
    {
      "id": 2,
      "question": "Giả sử một thuộc tính đầu vào của thành phần phần mềm được xác định là một khoảng số thực liên tục. Theo hướng dẫn lựa chọn đại diện cho lớp tương đương, số lượng test case tối đa được khuyến nghị thiết kế cho mỗi lớp tương đương (bao gồm hợp lệ và không hợp lệ) là bao nhiêu?",
      "options": [
        "Đúng 7 test case bao gồm cả hai giá trị ngoài biên cực tiểu và cực đại.",
        "Tối thiểu 4 test case đại diện cho 4 vùng phân bố xác suất lỗi.",
        "Đúng 5 test case tương ứng với các cực trị min, min+, nom, max-, max.",
        "Từ 1 tới 3 test case (1 hợp lệ ở giữa khoảng và 2 không hợp lệ nằm phía dưới và phía trên khoảng)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu chỉ rõ: chọn 1 đại diện hợp lệ nằm trong khoảng liên tục và nếu muốn lấy thêm 2 test cases không hợp lệ nằm phía dưới và phía trên khoảng (tổng từ 1 tới 3)."
    },
    {
      "id": 3,
      "question": "Trong ví dụ bài toán 'quản lý nguồn nhân lực' (quyết định tuyển dụng theo tuổi: <16 không thuê, 16≤tuổi<18 thuê bán thời gian, 18≤tuổi<55 thuê toàn thời gian, 55≤tuổi≤99 không thuê), những nhận định nào sau đây phản ánh đúng hạn chế hoặc nguy cơ của việc chỉ dùng test case đại diện?",
      "options": [
        "Phân lớp tương đương có thể bỏ sót các lỗi phát sinh ngay tại ranh giới chuyển giao giữa các khoảng tuổi (như tại 16, 18, 55).",
        "Phân lớp tương đương hoàn toàn không thể áp dụng cho miền dữ liệu đầu ra của bài toán này.",
        "Kỹ thuật phân lớp tương đương bắt buộc phải duyệt qua đủ 100 trường hợp tuổi từ 0 đến 99 để đạt hiệu quả tối đa.",
        "Nếu lập trình viên viết mã tồi bằng các câu lệnh so sánh bằng trực tiếp (ví dụ: if (applicantAge == 16) qd = \"PART\";), việc dùng test case đại diện (như 17 tuổi) sẽ không phát hiện được lỗi xử lý cho tuổi 16."
      ],
      "correctAnswer": [
        0,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Hạn chế chung của phân vùng tương đương là có thể thiếu lỗi ở biên do chỉ chọn 1 giá trị đại diện ở khoảng giữa của miền tương đương. Tài liệu lấy ví dụ mã tồi chỉ kiểm tra chính xác giá trị đơn lẻ, nên test case đại diện nằm ở giữa nhóm sẽ bị lọt lỗi đối với các giá trị khác trong nhóm."
    },
    {
      "id": 4,
      "question": "Phương pháp Phân tích giá trị biên (Boundary Value Analysis - BVA) dựa trên giả thuyết khiếm khuyết đơn (Single Fault Assumption). Nội dung cốt lõi của giả thuyết này là gì?",
      "options": [
        "Một biến đầu vào bị lỗi sẽ luôn kéo theo sự sụp đổ của tất cả các biến đầu vào còn lại.",
        "Lỗi phần mềm chỉ tập trung tại biên đầu vào mà không bao giờ xuất hiện tại biên đầu ra.",
        "Hỏng hóc của phần mềm rất hiếm khi xảy ra do hai hoặc nhiều khiếm khuyết cùng xuất hiện đồng thời.",
        "Mỗi test case kiểm thử biên chỉ được phép phát hiện tối đa một lỗi duy nhất trong suốt quá trình thực thi."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Giả thuyết khiếm khuyết đơn phát biểu rằng hỏng hóc xảy ra hiếm khi do hai (hoặc hơn) khiếm khuyết cùng xảy ra, nên chỉ cần giữ các biến khác ở giá trị bình thường và thay đổi lần lượt từng biến."
    },
    {
      "id": 5,
      "question": "Cho một chương trình nhận n biến đầu vào độc lập. Nếu áp dụng kỹ thuật Phân tích giá trị biên chuẩn (Standard BVA) với giả thuyết khiếm khuyết đơn (chọn 5 giá trị cho mỗi biến: min,min+,nom,max−,max), tổng số ca kiểm thử (test cases) cần thiết là bao nhiêu?",
      "options": [
        "2n+1",
        "5ⁿ",
        "6n+1",
        "4n+1"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Với mỗi biến trong n biến, ta chọn 4 giá trị biên (min,min+,max−,max) trong khi giữ các biến khác ở giá trị bình thường (nom), cộng thêm 1 ca kiểm thử mà tất cả các biến đều nhận giá trị nom, tổng là 4n+1."
    },
    {
      "id": 6,
      "question": "Giả sử một biến đầu vào x₁ thỏa mãn điều kiện a≤x₁≤b. Theo phương pháp Phân tích giá trị biên (BVA) tiêu chuẩn, tập 5 giá trị đại diện được chọn cho biến x₁ là gì?",
      "options": [
        "a, a+1, (a+b)/2, b−1, b",
        "a−1, a+1, (a+b)/2, b−1, b+1",
        "a, a+0.5, (a+b)/2, b−0.5, b",
        "a−1, a, (a+b)/2, b, b+1"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu quy định rõ với a≤x₁≤b, 5 giá trị được chọn là a (min), a+1 (min+), (a+b)/2 (nom), b−1 (max−), b (max)."
    },
    {
      "id": 7,
      "question": "Điểm khác biệt cơ bản giữa Kiểm thử biên mạnh (Robustness testing) và Phân tích giá trị biên (BVA) chuẩn là gì?",
      "options": [
        "Kiểm thử biên mạnh bắt buộc kiểm thử tất cả các tổ hợp đồng thời của các biến thay vì giả định lỗi đơn.",
        "Kiểm thử biên mạnh loại bỏ hoàn toàn các giá trị nằm trong miền hợp lệ để tập trung vào dữ liệu lỗi.",
        "Kiểm thử biên mạnh chỉ áp dụng cho ngôn ngữ lập trình có kiểm tra kiểu mạnh như Java hay C++.",
        "Kiểm thử biên mạnh bổ sung thêm 2 giá trị ngoài biên (max+ và min−) nhằm xem phần mềm có kiểm tra tính hợp lệ của đầu vào hay không."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu ghi rõ: Kiểm thử biên mạnh là mở rộng của BVA, bổ sung giá trị ngay trên max (max+) và ngay dưới min (min−) để kiểm tra xử lý dữ liệu ngoại lệ."
    },
    {
      "id": 8,
      "question": "Khi kiểm thử trường dữ liệu 'Customer name' trong một biểu mẫu đăng ký vay vốn với điều kiện hợp lệ là từ 2 đến 64 ký tự, những giá trị độ dài nào sau đây được phân loại là biên không hợp lệ?",
      "options": [
        "0 ký tự",
        "65 ký tự",
        "1 ký tự",
        "2 ký tự"
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Độ dài 0 ký tự đại diện cho chuỗi rỗng nằm trong vùng không hợp lệ. Độ dài 65 ký tự nằm ngay trên biên tối đa (64 ký tự), do đó là biên không hợp lệ. Độ dài 1 ký tự nằm ngay dưới biên tối thiểu (2 ký tự), do đó là biên không hợp lệ."
    },
    {
      "id": 9,
      "question": "Trong trường hợp nào người thiết kế test case bắt buộc phải áp dụng Kiểm thử biên tổ hợp (Combinatorial boundary testing / Worst-case testing) thay vì BVA chuẩn?",
      "options": [
        "Khi các biến đầu vào có sự tương tác và phụ thuộc lẫn nhau.",
        "Khi số lượng biến đầu vào lớn hơn 100 biến nhằm tiết kiệm thời gian chạy test case.",
        "Khi miền giá trị đầu vào là tập rời rạc gồm các chuỗi ký tự không có thứ tự.",
        "Khi hệ thống được phát triển trên các ngôn ngữ lập trình kiểm tra kiểu mạnh."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu ghi rõ: Khi các biến có tương tác với nhau thì cần kiểm tra các bộ giá trị kết hợp các cực trị này."
    },
    {
      "id": 10,
      "question": "Theo hướng dẫn áp dụng BVA trong tài liệu, bên cạnh miền giá trị đầu vào, BVA còn có thể áp dụng hiệu quả cho những đối tượng nào khác trong chương trình?",
      "options": [
        "Miền giá trị đầu ra (Output domain).",
        "Các biến đếm, vòng lặp và biến trung gian.",
        "Chỉ số mảng và con trỏ (Array indices & Pointers).",
        "Mã định danh tác giả viết mã nguồn phần mềm."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Tài liệu khẳng định có thể áp dụng BVA cho miền giá trị (đầu ra). Tài liệu đưa ra gợi ý áp dụng BVA cho biến đếm, vòng lặp, biến trung gian. Tài liệu liệt kê chỉ số mảng và con trỏ là các biến trong chương trình có thể áp dụng BVA."
    },
    {
      "id": 11,
      "question": "Thứ tự chính xác của các bước trong kỹ thuật Thiết kế test case dựa trên Đồ thị nhân - quả (Cause & Effect Graphing) là gì?",
      "options": [
        "Chuyển ngữ nghĩa thành đồ thị → Tạo bảng quyết định → Phân chia hệ thống → Xác định causes & effects → Thiết lập test cases.",
        "Xác định causes & effects → Phân chia hệ thống → Tạo bảng quyết định → Vẽ đồ thị → Thiết lập test cases.",
        "Tạo bảng quyết định → Vẽ đồ thị nhân - quả → Xác định causes & effects → Phân chia hệ thống → Thiết lập test cases.",
        "Phân chia hệ thống thành các vùng hoạt động → Xác định causes & effects → Chuyển ngữ nghĩa đặc tả thành đồ thị → Chuyển đồ thị thành bảng quyết định → Thiết lập danh sách test cases."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Đây là quy trình 5 bước được trình bày chi tiết từ B1 đến B5 trong tài liệu giảng dạy."
    },
    {
      "id": 12,
      "question": "Trong đồ thị nhân - quả, ký hiệu ràng buộc E (Exclude) giữa hai nguyên nhân a và b có ý nghĩa ngữ nghĩa nào sau đây?",
      "options": [
        "Bắt buộc duy nhất một và chỉ một nguyên nhân a hoặc b bằng 1 (không được phép cả hai bằng 0).",
        "Chỉ có a hoặc b có thể là 1, hay a và b không thể đồng thời bằng 1.",
        "Bắt buộc ít nhất một trong hai nguyên nhân a hoặc b phải bằng 1.",
        "Nếu nguyên nhân a có giá trị bằng 1 thì kết quả b bắt buộc phải bằng 0."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu giải thích: Ràng buộc E (Exclude - loại trừ) nghĩa là chỉ có a hoặc b có thể là 1, hay a hoặc b không thể đồng thời là 1."
    },
    {
      "id": 13,
      "question": "Trong đồ thị nhân - quả, ký hiệu ràng buộc R (Request) giữa hai nút a và b mang ý nghĩa gì?",
      "options": [
        "Trạng thái của a hoàn toàn độc lập và không ảnh hưởng đến b.",
        "Khi a có giá trị bằng 1 thì b bị che khuất và bắt buộc phải bằng 0.",
        "Khi a có giá trị bằng 1 thì trạng thái b bắt buộc cũng phải bằng 1.",
        "Cả a và b không thể cùng nhận giá trị bằng 0."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu ghi rõ: R (Request - yêu cầu) có nghĩa là khi a là 1 thì kết quả b cũng phải là 1."
    },
    {
      "id": 14,
      "question": "Trong quy tắc dò theo đồ thị nhân - quả để xây dựng bảng quyết định, xét một nút cổng logic AND có các nhánh vào a,b,c và đầu ra x. Khi xem xét trường hợp đầu ra x=0, hướng dẫn xử lý trường hợp trạng thái nào sau đây là đúng?",
      "options": [
        "Nếu x=0, không quan tâm về tất cả các trường hợp vì cổng AND chỉ có hiệu lực khi x=1.",
        "Chỉ xét duy nhất trường hợp a=b=c=0 và bỏ qua các trường hợp có một hoặc hai biến bằng 1.",
        "Liệt kê tất cả mọi tổ hợp nhị phân 2³=8 trường hợp không bỏ sót tổ hợp nào.",
        "Bao gồm 1 trường hợp mà a=b=c=0 và bao gồm chỉ 1 trường hợp cho mỗi trạng thái trong số các trạng thái 001,010,100,011,101,110."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu quy định ở phần 'Những xem xét được sử dụng khi dò theo đồ thị': Nếu x=0 đối với cổng AND, bao gồm chỉ 1 trường hợp mà a=b=c=0 và chỉ 1 trường hợp cho mỗi trạng thái 001,010,100,011,101,110."
    },
    {
      "id": 15,
      "question": "Trong bài toán kiểm thử tính tiền bảo hiểm xe hơi (Nữ <65 tuổi: 500$; Nam <25 tuổi: 3000$; Nam 25−64 tuổi: 1000$; Tuổi ≥65: 1500$), những kết hợp nguyên nhân (Causes) nào sau đây dẫn đến kết quả (Effect) là 'Premium is 1500$'?",
      "options": [
        "Giới tính Nam (1) AND Tuổi ≥65 (5)",
        "Giới tính Nữ (2) AND Tuổi từ 25 đến 64 (4)",
        "Giới tính Nữ (2) AND Tuổi ≥65 (5)",
        "Giới tính Nam (1) AND Tuổi <25 (3)"
      ],
      "correctAnswer": [
        0,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Đặc tả nêu rõ nếu tuổi ≥65 bất kể giới tính nam hay nữ đều có mức phí 1500$ (CEG #3). Người từ 65 tuổi trở lên (dù là Nam hay Nữ) đều nhận kết quả phí bảo hiểm 1500$."
    },
    {
      "id": 16,
      "question": "Mục đích chính của kỹ thuật Đoán lỗi (Error Guessing) trong kiểm thử phần mềm là gì?",
      "options": [
        "Tự động hóa quá trình sinh test case dựa trên thuật toán xác suất lỗi ngẫu nhiên.",
        "Tập trung hoạt động kiểm thử vào các khu vực chưa được xử lý bởi các kỹ thuật chính xác hơn như phân vùng tương đương và phân tích giá trị biên.",
        "Đảm bảo độ bao phủ mã nguồn (code coverage) đạt 100% trong kiểm thử hộp trắng.",
        "Thay thế hoàn toàn bảng quyết định và đồ thị nhân - quả để giảm bớt chi phí thiết kế test case."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu ghi rõ: Mục đích của đoán lỗi là tập trung vào các hoạt động kiểm thử trên các lĩnh vực chưa được xử lý bởi các kỹ thuật chính xác hơn... nhằm bù đắp cho sự không hoàn toàn an toàn của các kỹ thuật đó."
    },
    {
      "id": 17,
      "question": "Theo tài liệu giảng dạy, một kiểm thử viên có thể dựa vào những cơ sở kiến thức nào để thực hiện kỹ thuật Đoán lỗi đạt hiệu quả cao?",
      "options": [
        "Kinh nghiệm kiểm thử các hệ thống tương tự và các lỗi cài đặt điển hình (như chia cho 0, tràn bộ đệm).",
        "Số dòng mã nguồn (LOC) được viết bởi mỗi lập trình viên trong dự án.",
        "Hiểu biết về ứng dụng đang kiểm thử (AUT) như phương pháp thiết kế và kỹ thuật cài đặt.",
        "Kết quả của các pha kiểm thử trước đó, đặc biệt là trong kiểm thử hồi quy."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Kinh nghiệm thực chiến với các hệ thống tương đương mang lại trực giác đoán lỗi tốt. Đây là một trong các cơ sở được tài liệu liệt kê trực tiếp. Lịch sử lỗi cũ trong các đợt kiểm thử trước giúp đoán được nơi dễ tái phát lỗi."
    },
    {
      "id": 18,
      "question": "Một hạn chế lớn nhất của kỹ thuật Đoán lỗi khi áp dụng trong một đội ngũ kiểm thử là gì?",
      "options": [
        "Đoán lỗi tiêu tốn quá nhiều thời gian tính toán toán học hơn so với phương pháp BVA.",
        "Không thể tạo ra một bộ test case hoàn chỉnh, thống nhất vì kết quả phụ thuộc hoàn toàn vào kinh nghiệm và trực giác của từng cá nhân tester.",
        "Đoán lỗi yêu cầu phải có công cụ tự động hóa đắt tiền mới thực hiện được.",
        "Kỹ thuật này không thể áp dụng cho các mô-đun chức năng phổ biến như Đăng nhập hay Tìm kiếm."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu ghi rõ hạn chế: Mỗi người có kinh nghiệm khác nhau thì sẽ có bộ kiểm thử khác nhau nên không có bộ test case hoàn chỉnh, thống nhất."
    },
    {
      "id": 19,
      "question": "Khái niệm nền tảng của Kiểm thử dựa trên mô hình (Model-Based Testing - MBT) là gì?",
      "options": [
        "Tạo ra một hệ thống phần mềm giả lập để thay thế hoàn toàn hệ thống thực khi chạy test case.",
        "Thực hiện kiểm thử giao diện người dùng dựa trên mô hình phác thảo Wireframe của thiết kế UI/UX.",
        "Dựa trên mô hình cơ sở dữ liệu quan hệ (ERD) để tạo các câu lệnh truy vấn SQL kiểm thử.",
        "Các ca kiểm thử được sinh ra từ một mô hình biểu diễn trừu tượng mô tả hành vi của hệ thống đang được kiểm thử."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu định nghĩa: Kiểm thử dựa trên mô hình là phương pháp kiểm thử nơi mà các ca kiểm thử được sinh ra từ mô hình đặc tả hành vi của hệ thống đang được kiểm thử."
    },
    {
      "id": 20,
      "question": "Trong Kiểm thử dựa trên Otomat đơn định hữu hạn trạng thái (Deterministic Finite State Automaton - DFA), biểu thức đại diện cho DFA là một bộ 5 thành phần DFA=(S,Act,T,q₀,F). Thành phần Act đại diện cho yếu tố nào?",
      "options": [
        "Tập hợp các trạng thái kết thúc hoàn thành tác vụ.",
        "Tập hợp tất cả các đường đi hợp lệ trong biểu đồ.",
        "Trạng thái khởi tạo ban đầu của hệ thống.",
        "Tập hợp các sự kiện (hành động kích hoạt chuyển trạng thái)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Trong bộ 5 của DFA: S là tập trạng thái, Act là tập các sự kiện (actions/events), T là tập chuyển trạng thái, q₀ là trạng thái khởi đầu, F là tập trạng thái kết thúc."
    },
    {
      "id": 21,
      "question": "Khi sinh ca kiểm thử từ biểu đồ Otomat DFA, quy tắc bắt buộc cho mỗi ca kiểm thử (test case) đường đi là gì?",
      "options": [
        "Mỗi ca kiểm thử bắt buộc phải đi qua toàn bộ tất cả các nút trạng thái có trong sơ đồ DFA đúng một lần.",
        "Các ca kiểm thử không được phép kích hoạt sự kiện nhập dữ liệu từ người dùng.",
        "Mỗi ca kiểm thử là một đường đi từ trạng thái ban đầu đến trạng thái kết thúc và phải có ít nhất một phép chuyển trạng thái.",
        "Mỗi ca kiểm thử phải chứa một vòng lặp vô hạn giữa trạng thái lỗi và trạng thái khởi đầu."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu ghi rõ: Mỗi ca kiểm thử là đường đi từ trạng thái ban đầu đến trạng thái kết thúc. Mỗi ca kiểm thử phải có ít nhất một phép chuyển trạng thái."
    },
    {
      "id": 22,
      "question": "Xét ví dụ trang web đăng nhập hệ thống đăng ký môn học được biểu diễn bằng DFA với các trạng thái: S_index (chờ đăng nhập), username (đã nhập user), usr+pass (đã nhập đủ thông tin), Admin_main (trang quản trị), error_log (trạng thái lỗi). Những chuỗi chuyển trạng thái nào dưới đây tạo thành test case hợp lệ?",
      "options": [
        "S_index∗t_usrname=Admin_main",
        "S_index∗t_usrname=username∗c_submit=error_log",
        "S_index∗t_usrname=username∗t_passwd=usr+pass∗c_submit=Admin_main",
        "S_index∗c_submit=error_log"
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Chỉ nhập username rồi bấm submit sẽ báo lỗi thiếu password, chuyển sang trạng thái lỗi kết thúc. Chuỗi thao tác nhập user → nhập pass → submit thành công vào trang Admin là một kịch bản hoàn chỉnh. Từ trạng thái ban đầu chưa nhập thông tin, nhấn submit (c_submit) sẽ chuyển ngay tới trạng thái lỗi (error_log), tạo thành 1 test case hợp lệ."
    },
    {
      "id": 23,
      "question": "Những ưu điểm nổi bật nào sau đây thuộc về phương pháp Kiểm thử dựa trên mô hình (MBT)?",
      "options": [
        "Sớm phát hiện lỗi và sự không rõ ràng ngay trong tài liệu đặc tả kỹ thuật và thiết kế.",
        "Dễ dàng kết hợp với các công cụ kiểm thử tự động và sinh lại ca kiểm thử nhanh chóng khi phần mềm tiến hóa.",
        "Loại bỏ hoàn toàn yêu cầu hiểu biết chi tiết về hệ thống đối với kiểm thử viên.",
        "Tự động tạo và kiểm tra nhằm tránh các ca kiểm thử trùng nhau hoặc không hữu hiệu."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Quá trình xây dựng mô hình đòi hỏi làm rõ mọi luồng hành vi, giúp phát hiện mâu thuẫn trong tài liệu yêu cầu từ sớm. Khi mô hình thay đổi, công cụ có thể tự động sinh lại tập test case mới cập nhật. Mô hình toán học giúp tối ưu tập đường đi, tránh dư thừa test case."
    },
    {
      "id": 24,
      "question": "Những rào cản hoặc hạn chế chính khi triển khai Kiểm thử dựa trên mô hình (MBT) trong thực tế dự án phần mềm là gì?",
      "options": [
        "Yêu cầu cao về kỹ năng của kiểm thử viên (phải có kiến thức về phân tích thiết kế và các phương pháp đặc tả hình thức).",
        "Tạo giá trị đầu ra mong đợi (expected output) là một bước rất khó khăn trong MBT.",
        "MBT chỉ thực hiện được nếu kiểm thử viên truy cập và chỉnh sửa trực tiếp mã nguồn của lập trình viên.",
        "Việc xây dựng một mô hình chính xác là công việc khó khăn, tốn kém và bản thân mô hình cũng tiềm ẩn lỗi."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Tester không chỉ chạy test mà phải am hiểu lý thuyết mô hình hóa và toán rời rạc/otomat. Tài liệu ghi nhận: 'Tạo giá trị đầu ra mong đợi là bước khó khăn nhất của kiểm thử dựa trên mô hình'. Tài liệu chỉ rõ khó khăn khi tạo mô hình chính xác và chi phí xây dựng mô hình lớn."
    },
    {
      "id": 25,
      "question": "Cho bài toán kiểm thử điều kiện tạo thành tam giác từ 3 số nhập vào a,b,c. Các nguyên nhân (Causes) được xác định như sau: 1-Cả 3 số là số nguyên dương; 2-Tổng 2 số bất kỳ lớn hơn số còn lại; 3-Hai trong 3 số bằng nhau; 4-Ba số bằng nhau. Những kết hợp nào sau đây dẫn đến kết quả R3: Thông báo ba giá trị tạo thành tam giác đều?",
      "options": [
        "Nguyên nhân 1 = 1, Nguyên nhân 3 = 1, Nguyên nhân 4 = 0",
        "Nguyên nhân 1 = 1, Nguyên nhân 2 = 1, Nguyên nhân 4 = 1",
        "Nguyên nhân 1 = 1, Nguyên nhân 2 = 1, Nguyên nhân 3 = 0, Nguyên nhân 4 = 0",
        "Nguyên nhân 1 = 0"
      ],
      "correctAnswer": [
        1
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Để tạo thành tam giác đều, dữ liệu phải là 3 số nguyên dương (Cause 1), thỏa mãn bất đẳng thức tam giác (Cause 2) và có cả 3 số bằng nhau (Cause 4)."
    },
    {
      "id": 26,
      "question": "Kỹ thuật đoán lỗi khuyên kiểm thử viên không chỉ tìm kiếm lỗi xuất hiện trong mã nguồn (code) mà còn phải tìm kiếm lỗi ở những công đoạn nào khác?",
      "options": [
        "Trong Yêu cầu (Requirements), Thiết kế (Design), Mã hóa, Xây dựng, Kiểm thử và Sử dụng.",
        "Chỉ duy nhất trong phần cấu hình tài liệu hướng dẫn người dùng cuối.",
        "Chỉ trong các truy vấn cơ sở dữ liệu bị chậm.",
        "Chỉ ở các phần cứng máy chủ nơi ứng dụng thực thi."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu lưu ý: 'Nhớ tìm kiếm các lỗi không chỉ có ở code. Tìm kiếm lỗi trong yêu cầu, thiết kế, mã hóa, xây dựng, kiểm thử, sử dụng'."
    },
    {
      "id": 27,
      "question": "Trong đồ thị nhân - quả, các ký hiệu ràng buộc nào sau đây được áp dụng để hạn chế các kết hợp nguyên nhân không thể xảy ra do lý do ngữ nghĩa hoặc môi trường?",
      "options": [
        "M (Mask)",
        "E (Exclude) và I (Include)",
        "O (Only) và R (Request)",
        "NOT và OR"
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "M (Mask - Mặt nạ) là ký hiệu ràng buộc thể hiện sự che khuất giữa các điều kiện. E và I là các ký hiệu ràng buộc trên các đầu vào (Causes) của đồ thị nhân - quả. O và R là các ký hiệu ràng buộc bổ sung thể hiện mối quan hệ loại trừ duy nhất hoặc yêu cầu kéo theo."
    },
    {
      "id": 28,
      "question": "Nhận định nào sau đây mô tả đúng nhất về ứng dụng và hạn chế của phương pháp Phân tích giá trị biên (BVA)?",
      "options": [
        "BVA hoạt động tốt nhất khi các tham số đầu vào có mối quan hệ phụ thuộc lẫn nhau phức tạp.",
        "BVA là kỹ thuật kiểm thử hộp trắng giúp phát hiện 100% lỗi logic rẽ nhánh trong thuật toán.",
        "BVA giúp loại bỏ hoàn toàn nhu cầu phải thực hiện kỹ thuật Phân lớp tương đương.",
        "BVA rất hiệu quả đối với các chương trình có các đầu vào độc lập đại diện cho đại lượng vật lý bị chặn, nhưng chỉ tập trung vào biên mà không tính đến chức năng của hàm hay ý nghĩa của các biến."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu kết luận ở phần Ưu/Nhược điểm và Tính ứng dụng: BVA lấy các ca kiểm thử mà không tính đến chức năng của hàm hay ý nghĩa các biến, hiệu quả khi đầu vào độc lập và có miền giới hạn."
    },
    {
      "id": 29,
      "question": "Trong Đồ thị Nhân - Quả (Cause-Effect Graphing), các ký hiệu ràng buộc nào sau đây được sử dụng để thể hiện hạn chế giữa các nguyên nhân do ngữ nghĩa hoặc môi trường?",
      "options": [
        "Ký hiệu I (Include): khẳng định ít nhất 1 trong các nguyên nhân luôn luôn bằng 1.",
        "Ký hiệu E (Exclude): khẳng định hai nguyên nhân không thể đồng thời bằng 1.",
        "Ký hiệu M (Mask): khẳng định nếu nguyên nhân này bằng 1 thì nguyên nhân kia bắt buộc phải bằng 1.",
        "Ký hiệu O (Only): khẳng định có 1 và chỉ duy nhất 1 nguyên nhân bằng 1."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Ràng buộc Include đòi hỏi tập hợp các nguyên nhân phải có ít nhất một nguyên nhân xuất hiện. Ràng buộc Exclude đảm bảo tối đa chỉ có 1 trong các nguyên nhân được xảy ra tại một thời điểm. Ràng buộc Only yêu cầu chính xác một nguyên nhân duy nhất được bật lên 1."
    },
    {
      "id": 30,
      "question": "Trong Đồ thị Nhân - Quả, ý nghĩa của ký hiệu ràng buộc M (Mask) giữa hai nút a và b là gì?",
      "options": [
        "Chỉ có duy nhất một trong hai nút a hoặc b được nhận giá trị 1.",
        "Nếu a=1 thì kết quả/nguyên nhân b bắt buộc phải bằng 0.",
        "Nếu a=1 thì kết quả b bắt buộc phải bằng 1.",
        "Cả hai nút a và b không thể đồng thời nhận giá trị 0."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Ràng buộc Mask (Mặt nạ) thể hiện sự che đậy: khi a xuất hiện (1) thì nó ngăn cản/triệt tiêu sự xuất hiện của b (0)."
    },
    {
      "id": 31,
      "question": "Trong quy trình 5 bước xây dựng kịch bản kiểm thử bằng kỹ thuật Đồ thị Nhân - Quả, bước thứ 4 là gì?",
      "options": [
        "Xác định danh sách các nguyên nhân (causes) và hệ quả (effects).",
        "Thiết lập danh sách các test case cụ thể ứng với từng cột của bảng quyết định.",
        "Phân chia hệ thống thành các vùng hoạt động và chức năng con.",
        "Chuyển đổi đồ thị nhân - quả thành bảng quyết định (Decision Table)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Sau khi vẽ xong đồ thị liên kết ngữ nghĩa (B3), bước B4 là truy ngược đồ thị để lập bảng quyết định."
    },
    {
      "id": 32,
      "question": "Kỹ thuật Đoán lỗi (Error guessing) dựa chủ yếu vào yếu tố nào để thiết kế các ca kiểm thử?",
      "options": [
        "Mô hình toán học và máy trạng thái hữu hạn DFA.",
        "Bảng quyết định kết hợp đồ thị nguyên nhân - kết quả.",
        "Các công thức tính toán độ bao phủ mã nguồn theo nhánh và câu lệnh.",
        "Kinh nghiệm, tri thức lịch sử và trực giác của kiểm thử viên (tester)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Đoán lỗi dựa vào cảm nhận, kinh nghiệm thực chiến và hiểu biết về các lỗi cài đặt điển hình của tester."
    },
    {
      "id": 33,
      "question": "Trong Kiểm thử dựa trên mô hình (Model-Based Testing - MBT), một Otomat hữu hạn trạng thái đơn định (DFA) được định nghĩa là một bộ 5 thành phần (S,Act,T,q₀,F). Trong đó T biểu diễn cho thành phần nào?",
      "options": [
        "Tập hợp hữu hạn các trạng thái (states).",
        "Tập hợp các chuyển trạng thái (state transitions).",
        "Tập hợp các sự kiện đầu vào (events).",
        "Trạng thái khởi đầu (initial state)."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Thành phần T đại diện cho tập hợp các dịch chuyển từ trạng thái này sang trạng thái khác dưới tác động của sự kiện."
    },
    {
      "id": 34,
      "question": "Các ưu điểm nổi bật của phương pháp Kiểm thử dựa trên mô hình (Model-Based Testing - MBT) bao gồm những điều nào dưới đây?",
      "options": [
        "Dễ dàng kết hợp với các công cụ kiểm thử tự động và tự động tạo test case tránh trùng lặp.",
        "Giúp sớm phát hiện lỗi và sự không rõ ràng ngay trong tài liệu đặc tả yêu cầu và thiết kế.",
        "Khi phần mềm tiến hóa, có thể dễ dàng cập nhật mô hình để sinh thêm các test case mới một cách nhanh chóng.",
        "Không đòi hỏi kiểm thử viên phải có kỹ năng phân tích thiết kế hay kiến thức đặc tả hình thức."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Mô hình chuẩn hóa cho phép các thuật toán tự động sinh ra kịch bản kiểm thử không trùng lặp. Quá trình xây dựng mô hình đòi hỏi làm rõ mọi luồng hành vi, giúp lộ ra mâu thuẫn trong đặc tả từ sớm. Chỉ cần bảo trì mô hình trung tâm, bộ test case mới sẽ được tái sinh tự động."
    },
    {
      "id": 35,
      "question": "Những khó khăn/hạn chế chính khi triển khai Kiểm thử dựa trên mô hình (MBT) trong thực tế là gì?",
      "options": [
        "Không thể tận dụng các tài liệu phân tích thiết kế hệ thống có sẵn để xác định kịch bản kiểm thử.",
        "Tạo giá trị đầu ra mong đợi (expected output) từ mô hình là một bước phức tạp và khó khăn.",
        "Đòi hỏi người kiểm thử phải có kỹ năng cao về phân tích, thiết kế hệ thống và kiến thức đặc tả hình thức.",
        "Việc xây dựng được một mô hình chính xác là rất khó khăn, tốn kém và tiềm ẩn nguy cơ có lỗi trong chính mô hình."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Xác định đúng output dự kiến cho mọi chuỗi trạng thái trên mô hình là thử thách lớn. Tester cần trình độ chuyên môn cao mới có thể đọc hiểu và biểu diễn hệ thống bằng toán học/lý thuyết đồ thị. Mô hình hóa hệ thống đòi hỏi nhiều công sức và nếu mô hình sai thì toàn bộ test case sinh ra cũng sai."
    },
    {
      "id": 36,
      "question": "Cho đặc tả trường 'Loan amount requested' có miền giá trị hợp lệ từ £500 đến £9000. Khi kết hợp Phân vùng tương đương và Phân tích giá trị biên, hai giá trị £499 và £9001 đóng vai trò là:",
      "options": [
        "Các giá trị đại diện nằm giữa phân vùng hợp lệ.",
        "Các biên không hợp lệ (Invalid boundaries).",
        "Các giá trị thuộc lớp tương đương không bị chặn.",
        "Các biên hợp lệ (Valid boundaries)."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "£499 ngay dưới ngưỡng tối thiểu £500, và £9001 ngay trên ngưỡng tối đa £9000, nên chúng đại diện cho các vị trí biên không hợp lệ."
    },
    {
      "id": 37,
      "question": "Một tester dự đoán ứng dụng sẽ bị ngắt đột ngột (crash) nếu người dùng nhập ký tự khoảng trắng vào đầu ô tìm kiếm hoặc truyền con trỏ NULL vào hàm xử lý. Tester này đang áp dụng kỹ thuật kiểm thử nào?",
      "options": [
        "Kiểm thử dựa trên Otomat đơn định.",
        "Đoán lỗi (Error guessing).",
        "Phân lớp tương đương (Equivalence partitioning).",
        "Phân tích giá trị biên (Boundary value analysis)."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Việc đưa ra các tình huống đặc biệt dựa vào phán đoán nhạy bén về các lỗi cài đặt lập trình điển hình chính là bản chất của Đoán lỗi."
    },
    {
      "id": 38,
      "question": "Những khẳng định nào sau đây miêu tả đúng về ưu điểm và ứng dụng của Phân tích giá trị biên (BVA)?",
      "options": [
        "BVA thường tìm ra nhiều lỗi với số ít test case do lỗi phần mềm có xu hướng tập trung ở ranh giới miền giá trị.",
        "BVA hiệu quả nhất với các chương trình có các đầu vào độc lập với nhau và biểu diễn đại lượng vật lý bị chặn.",
        "BVA tự động phân tích sâu ngữ nghĩa chức năng phức tạp giữa các biến mà không cần dựa trên miền xác định.",
        "BVA có thể áp dụng cho cả miền giá trị đầu ra cũng như các biến nội bộ (vòng lặp, biến đếm, chỉ số mảng)."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Lập trình viên rất dễ mắc lỗi so sánh (như dùng < thay vì <=), làm lỗi tập trung chủ yếu ở ranh giới. BVA phát huy tối đa sức mạnh khi các biến độc lập và có khoảng giá trị hữu hạn rõ ràng. Không chỉ đầu vào, BVA còn được áp dụng cho cấu trúc lặp, bộ đếm và miền kết quả ra."
    },
    {
      "id": 39,
      "question": "Một hàm nhận 2 đầu vào độc lập x₁∈[1,100] và x₂∈[1,50]. Sử dụng phương pháp BVA tiêu chuẩn (dựa trên giả thuyết khiếm khuyết đơn), số lượng ca kiểm thử thu được là bao nhiêu và các biến được phối hợp như thế nào?",
      "options": [
        "Tạo ra 25 ca kiểm thử đại diện cho tất cả các tích tổ hợp cực trị của x₁ và x₂.",
        "Tạo ra 4 ca kiểm thử tương ứng với 4 góc cực tiểu/cực đại của không gian 2 chiều.",
        "Tạo ra 13 ca kiểm thử do phải tính thêm các điểm ngoài biên min− và max+ cho cả 2 biến.",
        "Tạo ra 9 ca kiểm thử; khi 1 biến thay đổi qua các giá trị cực trị thì biến còn lại được giữ cố định ở giá trị bình thường (xₙₒₘ)."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Áp dụng công thức 4n+1=4(2)+1=9 ca kiểm thử, trong đó duy nhất 1 biến biến đổi cực trị tại mỗi bước."
    },
    {
      "id": 40,
      "question": "Trong quy trình thực hiện Kiểm thử dựa trên mô hình (MBT), bước đầu tiên cần tiến hành là gì?",
      "options": [
        "So sánh kết quả thực tế thu được với đầu ra kỳ vọng trong báo cáo.",
        "Sinh các ca kiểm thử và bộ dữ liệu mong đợi từ mô hình.",
        "Tạo mô hình biểu diễn hành vi dựa trên các yêu cầu của phần mềm/hệ thống.",
        "Chạy các kịch bản kiểm thử trên sản phẩm thực tế."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Bước khởi đầu bắt buộc của MBT là xây dựng mô hình trừu tượng (như DFA, FSM) từ tài liệu đặc tả yêu cầu."
    },
    {
      "id": 41,
      "question": "Trong Kiểm thử dựa trên mô hình (MBT), mô hình biểu diễn đặc tả hành vi của hệ thống có thể được thể hiện bằng những dạng nào sau đây?",
      "options": [
        "Máy trạng thái hữu hạn (FSM) hoặc Otomat đơn định hữu hạn trạng thái (DFA).",
        "Đặc tả đại số (Algebraic specification).",
        "Biểu đồ trạng thái UML (UML Statechart).",
        "Sơ đồ lớp tĩnh (Static Class Diagram) không chứa thông tin chuyển trạng thái."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "FSM và DFA là các mô hình hình thức phổ biến hàng đầu để diễn tả sự chuyển đổi trạng thái của phần mềm. Đặc tả đại số là một dạng mô hình toán học hình thức được dùng để biểu diễn hành vi hệ thống. UML Statechart cung cấp công cụ trực quan hóa trạng thái và sự kiện chuẩn hóa trong kỹ thuật phần mềm."
    },
    {
      "id": 42,
      "question": "Vì sao việc kết hợp giữa Phương pháp Phân tích giá trị biên (BVA) và Phân vùng tương đương lại được ứng dụng rất phổ biến trong thực tế thiết kế test case?",
      "options": [
        "BVA giúp loại bỏ hoàn toàn việc phải kiểm thử trên các miền dữ liệu không hợp lệ.",
        "Phân vùng tương đương giúp chia nhỏ miền dữ liệu thành các nhóm đồng nhất, còn BVA bổ trợ kiểm thử các điểm ranh giới nơi dễ phát sinh lỗi nhất của các nhóm đó.",
        "Sự kết hợp này đảm bảo vét cạn 100% tất cả các tổ hợp dữ liệu mà không cần chạy kiểm thử tự động.",
        "Phân vùng tương đương tự động chuyển đổi mã nguồn thành bảng quyết định mà không cần đọc đặc tả."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Sự kết hợp này vừa giúp tối ưu hóa số lượng ca kiểm thử (nhờ phân vùng) vừa khắc phục triệt để nhược điểm bỏ sót lỗi biên của phân vùng tương đương."
    },
    {
      "id": 43,
      "question": "Cho các thuật ngữ kỹ thuật kiểm thử hộp đen:\n1. Phân lớp tương đương\n2. Phân tích giá trị biên (BVA)\n3. Đồ thị nhân quả - Bảng quyết định\n4. Đoán lỗi (Error guessing)\nGhép với các bản chất/nguyên lý tương ứng:\na. Tập trung vào các giá trị nằm ở ranh giới của miền dữ liệu đầu vào hoặc đầu ra.\nb. Chia miền dữ liệu thành các nhóm mà các phần tử trong đó kích hoạt cùng một hành vi của phần mềm.\nc. Dựa vào kinh nghiệm, trực giác của kiểm thử viên để dự đoán vùng có khả năng chứa lỗi.\nd. Xác định các mối kết hợp giữa các điều kiện đầu vào và kết quả đầu ra thu được.\nPhương án ghép nào sau đây là chính xác?",
      "options": [
        "1-c, 2-a, 3-d, 4-b",
        "1-b, 2-d, 3-a, 4-c",
        "1-b, 2-a, 3-d, 4-c",
        "1-a, 2-b, 3-c, 4-d"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Phân lớp tương đương chia dữ liệu thành các nhóm có cùng hành vi (1-b), BVA tập trung vào biên ranh giới (2-a), Đồ thị nhân quả liên kết các điều kiện và kết quả (3-d), và Đoán lỗi dựa trên kinh nghiệm/trực giác (4-c)."
    },
    {
      "id": 44,
      "question": "Cho các biến thể/mở rộng của phương pháp Phân tích giá trị biên (BVA):\n1. Phân tích giá trị biên tiêu chuẩn (Standard BVA)\n2. Kiểm thử biên mạnh (Robustness testing)\n3. Kiểm thử giá trị đặc biệt (Special value testing)\n4. Kiểm thử biên tổ hợp (Combinatorial boundary testing)\nGhép với cách thức chọn dữ liệu thử tương ứng:\na. Sử dụng tri thức kỹ nghệ và kinh nghiệm miền ứng dụng (như kiểm tra ngày 29/2 năm nhuận).\nb. Bổ sung thêm các giá trị ngay ngoài biên (min−, max+) bên cạnh 5 giá trị biên tiêu chuẩn.\nc. Giả định khiếm khuyết đơn, chọn 5 giá trị (min,min+,nom,max−,max) cho mỗi biến độc lập.\nd. Kiểm tra sự kết hợp của nhiều biến khi chúng đồng thời nhận các giá trị gần cực trị.\nPhương án ghép nào đúng?",
      "options": [
        "1-c, 2-d, 3-a, 4-b",
        "1-c, 2-b, 3-a, 4-d",
        "1-a, 2-b, 3-c, 4-d",
        "1-b, 2-c, 3-a, 4-d"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "BVA tiêu chuẩn kiểm tra 5 giá trị dựa trên khiếm khuyết đơn (1-c), Kiểm thử biên mạnh mở rộng thêm min− và max+ (2-b), Giá trị đặc biệt dựa vào tri thức nghiệp vụ cụ thể (3-a), còn Biên tổ hợp xét sự tương tác đồng thời của các cực trị (4-d)."
    },
    {
      "id": 45,
      "question": "Trong Đồ thị nhân - quả, các ký hiệu ràng buộc giữa các nguyên nhân bao gồm:\n1. Ký hiệu E (Exclude)\n2. Ký hiệu I (Include)\n3. Ký hiệu O (Only)\n4. Ký hiệu R (Request)\n5. Ký hiệu M (Mask)\nGhép với ý nghĩa ngữ nghĩa tương ứng:\na. Khẳng định có ít nhất 1 trong các nguyên nhân luôn bằng 1.\nb. Khẳng định có đúng và duy nhất 1 nguyên nhân bằng 1.\nc. Hai nguyên nhân không thể đồng thời bằng 1 (chỉ có tối đa 1 nguyên nhân bằng 1).\nd. Nếu nguyên nhân a bằng 1 thì kết quả/nguyên nhân b bắt buộc phải bằng 0.\ne. Khi nguyên nhân a bằng 1 thì yêu cầu nguyên nhân b cũng phải bằng 1.\nKết quả ghép nào đúng?",
      "options": [
        "1-c, 2-a, 3-b, 4-e, 5-d",
        "1-a, 2-c, 3-b, 4-e, 5-d",
        "1-c, 2-a, 3-e, 4-b, 5-d",
        "1-b, 2-a, 3-c, 4-d, 5-e"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "E thể hiện loại trừ (tối đa 1 bằng 1) (1-c), I thể hiện bao hàm (ít nhất 1 bằng 1) (2-a), O thể hiện duy nhất 1 bằng 1 (3-b), R thể hiện yêu cầu kéo theo (4-e), M thể hiện mặt nạ triệt tiêu (5-d)."
    },
    {
      "id": 46,
      "question": "Trong phương pháp kiểm thử dựa trên mô hình Otomat hữu hạn trạng thái đơn định (DFA), một DFA được định nghĩa là bộ 5 thành phần (S,Act,T,q₀,F). Ghép các ký hiệu với định nghĩa tương ứng:\n1. S\n2. Act\n3. T\n4. q₀\n5. F\na. Tập hợp các chuyển trạng thái.\nb. Tập hữu hạn các trạng thái của hệ thống.\nc. Tập hợp các trạng thái kết thúc.\nd. Trạng thái khởi đầu của hệ thống.\ne. Tập hợp các sự kiện / hành động tác động.\nPhương án ghép đúng là gì?",
      "options": [
        "1-e, 2-b, 3-a, 4-d, 5-c",
        "1-b, 2-a, 3-e, 4-c, 5-d",
        "1-b, 2-e, 3-a, 4-d, 5-c",
        "1-a, 2-e, 3-b, 4-d, 5-c"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "S là tập trạng thái (1-b), Act là tập sự kiện (2-e), T là tập các chuyển trạng thái (3-a), q₀ là trạng thái đầu (4-d), F là tập trạng thái kết thúc (5-c)."
    },
    {
      "id": 47,
      "question": "Xét các thành phần cấu trúc hệ thống trong quá trình phân chia vùng hoạt động (Bước 1 của kỹ thuật Đồ thị nhân - quả):\n1. Component logic (Thành phần logic)\n2. Function (Chức năng)\n3. Sub-function (Chức năng con)\nGhép với các ví dụ cụ thể tương ứng trong hệ thống quản lý người dùng:\na. Tiếp nhận & kiểm tra tên đăng nhập (Accept & Validate User Name)\nb. Thêm người dùng vào cơ sở dữ liệu (Add User to Database)\nc. Lưu thông tin người dùng vào bản ghi mới (Store User Info in New Record)\nPhương án ghép đúng là gì?",
      "options": [
        "1-a, 2-b, 3-c",
        "1-c, 2-b, 3-a",
        "1-b, 2-c, 3-a",
        "1-b, 2-a, 3-c"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "'Thêm người dùng vào CSDL' là thành phần logic mức cao nhất (1-b), 'Lưu thông tin người dùng vào bản ghi mới' là chức năng trực thuộc (2-c), và 'Tiếp nhận & kiểm tra tên đăng nhập' là chức năng con chi tiết hơn (3-a)."
    },
    {
      "id": 48,
      "question": "Cho các quy tắc lựa chọn test case đại diện cho lớp tương đương:\n1. Dữ liệu nhập là số thực liên tục hoặc số nguyên liên tục trong một khoảng hợp lệ.\n2. Dữ liệu dạng liệt kê rời rạc gồm 1 giá trị hợp lệ và nhiều giá trị không hợp lệ.\n3. Dữ liệu dạng liệt kê rời rạc gồm n giá trị hợp lệ và m giá trị không hợp lệ.\nGhép với số lượng test case được đề xuất thiết kế cho mỗi lớp tương đương:\na. Chọn 1 testcase có giá trị hợp lệ và nếu muốn chọn 2 testcase miêu tả 2 giá trị không hợp lệ (số testcase từ 1 đến 3).\nb. Chọn 1 testcase đại diện có giá trị hợp lệ nằm trong khoảng, và nếu muốn lấy 2 testcases miêu tả giá trị không hợp lệ nằm phía dưới và phía trên khoảng (số testcase từ 1 đến 3).\nc. Chọn 1 testcase có giá trị hợp lệ và nếu muốn 2 testcase miêu tả 2 giá trị không hợp lệ, nhưng cho dù chọn thế nào cũng không đại diện tốt cho các trường hợp còn lại (số testcase từ 1 đến 3).\nKết quả ghép chính xác là gì?",
      "options": [
        "1-c, 2-a, 3-b",
        "1-a, 2-b, 3-c",
        "1-b, 2-a, 3-c",
        "1-b, 2-c, 3-a"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Dữ liệu liên tục chọn điểm trong khoảng và 2 miền ngoài (1-b), dữ liệu rời rạc 1 hợp lệ chọn 1 hợp lệ và chọn thử không hợp lệ (2-a), dữ liệu rời rạc nhiều giá trị n,m thì việc chọn 1-2 đại diện không thể bao phủ tốt các trường hợp còn lại (3-c)."
    },
    {
      "id": 49,
      "question": "Những nhận định nào dưới đây phản ánh ĐÚNG nguyên lý và phạm vi ứng dụng của Phân tích giá trị biên (BVA)?",
      "options": [
        "BVA đạt hiệu quả cao nhất khi các biến đầu vào có sự phụ thuộc chặt chẽ lẫn nhau.",
        "BVA đặc biệt cần thiết cho các ngôn ngữ lập trình không có kiểm tra kiểu mạnh như JavaScript, PHP, Visual Basic.",
        "BVA hoàn toàn loại bỏ được việc phải tính đến chức năng của hàm hay ý nghĩa của các biến.",
        "BVA dựa trên giả thiết khiếm khuyết đơn: hỏng hóc xảy ra hiếm khi do hai hay nhiều khiếm khuyết cùng xảy ra đồng thời."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Các ngôn ngữ kiểm tra kiểu yếu dễ phát sinh lỗi do ép kiểu ngầm định hoặc vượt biên dữ liệu, nên cần BVA để kiểm soát. BVA lấy các ca kiểm thử dựa trên ranh giới miền giá trị mà không cần tính đến chức năng hay ý nghĩa ngữ nghĩa của biến. BVA tạo các ca kiểm thử bằng cách giữ nguyên các biến ở giá trị bình thường và lần lượt thay đổi một biến đến giá trị cực trị."
    },
    {
      "id": 50,
      "question": "Một bài toán kiểm thử phần mềm yêu cầu xác định tính hợp lệ của độ dài 3 cạnh tam giác a,b,c thuộc khoảng [1,200]. Nếu áp dụng kỹ thuật Kiểm thử biên mạnh (Robustness testing) với giả thuyết khiếm khuyết đơn, số lượng ca kiểm thử sinh ra là bao nhiêu?",
      "options": [
        "125",
        "13",
        "19",
        "12"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Số ca kiểm thử của Kiểm thử biên mạnh cho n biến là 6n+1. Với n=3, số testcase là 6(3)+1=19."
    },
    {
      "id": 51,
      "question": "Giả sử một chương trình P(x₁,x₂) nhận 2 biến đầu vào thỏa mãn a≤x₁≤b và c≤x₂≤d. Theo phương pháp BVA tiêu chuẩn, tập hợp các bộ giá trị kiểm thử T nào sau đây biểu diễn chính xác nguyên tắc chọn dữ liệu?",
      "options": [
        "T={<x₁ₘᵢₙ,x₂ₘᵢₙ>,<x₁ₘᵢₙ,x₂ₘₐₓ>,<x₁ₘₐₓ,x₂ₘᵢₙ>,<x₁ₘₐₓ,x₂ₘₐₓ>}",
        "T={<x₁ₙₒₘ,x₂ₘᵢₙ>,<x₁ₙₒₘ,x₂ₘᵢₙ₊>,<x₁ₙₒₘ,x₂ₙₒₘ>,<x₁ₙₒₘ,x₂ₘₐₓ₋>,<x₁ₙₒₘ,x₂ₘₐₓ>,<x₁ₘᵢₙ,x₂ₙₒₘ>,<x₁ₘᵢₙ₊,x₂ₙₒₘ>,<x₁ₘₐₓ₋,x₂ₙₒₘ>,<x₁ₘₐₓ,x₂ₙₒₘ>}",
        "T={<x₁ₘᵢₙ,x₂ₙₒₘ>,<x₁ₘₐₓ,x₂ₙₒₘ>,<x₁ₙₒₘ,x₂ₘᵢₙ>,<x₁ₙₒₘ,x₂ₘₐₓ>}",
        "T={<x₁ₙₒₘ,x₂ₘᵢₙ₋>,<x₁ₙₒₘ,x₂ₘₐₓ₊>,<x₁ₘᵢₙ₋,x₂ₙₒₘ>,<x₁ₘₐₓ₊,x₂ₙₒₘ>}"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Tập T bao gồm 1 điểm chuẩn (x₁ₙₒₘ,x₂ₙₒₘ) cùng các điểm thay đổi từng biến đơn lẻ qua 4 cực trị (min,min+,max−,max), tổng cộng 4(2)+1=9 ca kiểm thử."
    },
    {
      "id": 52,
      "question": "Xét Đồ thị nhân - quả cho bài toán tính phí bảo hiểm xe hơi có quy tắc: 'Đối với nữ dưới 65 tuổi, phí bảo hiểm là 500$'.\nCác nguyên nhân (Causes) được định nghĩa:\n- Nguyên nhân 1: Sex is Male\n- Nguyên nhân 2: Sex is Female\n- Nguyên nhân 3: Age is < 25\n- Nguyên nhân 4: Age is >= 25 and < 65\n- Nguyên nhân 5: Age is >= 65\nBiểu diễn logic nào sau đây tạo ra Hệ quả (Effect) 103 (Premium is $500)?",
      "options": [
        "Nguyên nhân 2 OR Nguyên nhân 3 OR Nguyên nhân 4",
        "(Nguyên nhân 2 AND Nguyên nhân 3) OR (Nguyên nhân 2 AND Nguyên nhân 4)",
        "(Nguyên nhân 2 AND Nguyên nhân 5) OR (Nguyên nhân 1 AND Nguyên nhân 3)",
        "Nguyên nhân 2 AND Nguyên nhân 3 AND Nguyên nhân 4"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Nữ dưới 65 tuổi bao gồm hai nhóm: Nữ dưới 25 tuổi (2 AND 3) hoặc Nữ từ 25 đến dưới 65 tuổi (2 AND 4)."
    },
    {
      "id": 53,
      "question": "Cho bài tập về hệ thống đăng ký tạo Username mới với các quy tắc:\n- Độ dài: từ 6 đến 20 ký tự.\n- Loại ký tự: chỉ chứa chữ cái (a-z, A-Z) và chữ số (0-9).\n- Ký tự cấm: không chứa ký tự đặc biệt hoặc khoảng trắng.\nCho các trường hợp kiểm thử (test case):\nTC1: Username = 'User1'\nTC2: Username = 'Admin1234567890123456'\nTC3: Username = 'John_Doe'\nTC4: Username = 'ValidUser123'\nGhép các test case trên với lớp tương đương tương ứng:\na. Lớp hợp lệ (độ dài 6-20, chỉ gồm chữ và số).\nb. Lớp không hợp lệ về độ dài (nhỏ hơn 6 ký tự).\nc. Lớp không hợp lệ về độ dài (lớn hơn 20 ký tự).\nd. Lớp không hợp lệ về loại ký tự (chứa ký tự đặc biệt/khoảng trắng).\nPhương án ghép nào đúng?",
      "options": [
        "TC1-b, TC2-d, TC3-c, TC4-a",
        "TC1-a, TC2-b, TC3-c, TC4-d",
        "TC1-b, TC2-c, TC3-d, TC4-a",
        "TC1-c, TC2-b, TC3-d, TC4-a"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "'User1' có 5 ký tự (<6) (TC1-b), 'Admin1234567890123456' có 21 ký tự (>20) (TC2-c), 'John_Doe' chứa ký tự '_' (TC3-d), 'ValidUser123' có 12 ký tự hợp lệ (TC4-a)."
    },
    {
      "id": 54,
      "question": "Trong quy trình thực hiện Kỹ thuật Kiểm thử dựa trên mô hình (Model-Based Testing - MBT), thứ tự chuẩn của các bước là gì?",
      "options": [
        "Sinh các ca kiểm thử → Tạo mô hình hệ thống → So sánh kết quả → Chạy kịch bản kiểm thử → Đánh giá.",
        "Tạo mô hình từ yêu cầu → Sinh các ca kiểm thử từ mô hình → Chạy các kịch bản kiểm thử → So sánh kết quả thực tế với kết quả dự kiến → Quyết định hành động tiếp theo.",
        "Tạo mô hình → Chạy kịch bản kiểm thử → Sinh ca kiểm thử → So sánh kết quả → Đánh giá.",
        "Phân tích yêu cầu → Chạy kiểm thử vét cạn → Dựng mô hình → Báo cáo kết quả."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Đây là trình tự chuẩn: bắt đầu bằng việc xây dựng mô hình biểu diễn, tự động/bán tự động sinh test case, thực thi, so sánh đầu ra và đưa ra quyết định đánh giá/chỉnh sửa."
    },
    {
      "id": 55,
      "question": "Trong ví dụ kiểm thử trang web đăng nhập hệ thống đăng ký môn học bằng DFA, kịch bản chuyển trạng thái nào dưới đây mô tả trường hợp người dùng nhập thành công tài khoản Quản trị hệ thống (Admin)?",
      "options": [
        "S_index * c_submit = error_log * t_usrname = Admin_main",
        "S_index * t_usrname = username * c_submit = Admin_main",
        "S_index * t_usrname = username * t_passwd = usr + pass * c_submit = Admin_main",
        "S_index * t_passwd = password * c_submit = PDT_main"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Từ S_index, nhập username chuyển sang username, tiếp tục nhập password chuyển sang usr + pass, nhấn nút submit (c_submit) chuyển đến trạng thái kết thúc Admin_main."
    },
    {
      "id": 56,
      "question": "Xét bài toán quyết định tam giác với 3 số nguyên dương. Bảng quyết định sinh ra 5 cột quy tắc ứng với các kết quả R1 (Tam giác thường), R2 (Tam giác cân), R3 (Tam giác đều), R4 (Không lập thành tam giác), R5 (Thông báo lỗi nhập dữ liệu). Bộ dữ liệu thử nào dưới đây sẽ kích hoạt kết quả R5?",
      "options": [
        "Input: (3, 3, 4)",
        "Input: (2, 3, 4)",
        "Input: (-1, 1, 1) hoặc ('A', 2, 2) hoặc (1.1, 1, 1)",
        "Input: (1, 2, 4)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "R5 xử lý sự cố tồn tại ít nhất một giá trị không phải là số nguyên dương (số âm, ký tự chữ, hoặc số thực)."
    },
    {
      "id": 57,
      "question": "Xét quy tắc chọn dữ liệu thử nghiệm trong BVA: 'Nếu dữ liệu vào thuộc vào một danh sách các giá trị rời rạc có thứ tự', các phần tử nào nên được ưu tiên lựa chọn?",
      "options": [
        "Chọn ngẫu nhiên 50% số lượng phần tử trong danh sách.",
        "Chọn tất cả các phần tử trong danh sách mà không bỏ sót phần tử nào.",
        "Chỉ chọn phần tử nằm chính giữa danh sách.",
        "Phần tử thứ nhất, phần tử thứ 2, phần tử kế cuối và phần tử cuối."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Theo nguyên tắc BVA cho danh sách có thứ tự, ta chọn 2 phần tử ở hai đầu ranh giới: phần tử 1, phần tử 2 (đầu) và phần tử kế cuối, phần tử cuối (đuôi)."
    },
    {
      "id": 58,
      "question": "Dưới áp lực thời gian và nguồn lực dự án có hạn, thứ tự ưu tiên lựa chọn các nhóm test case nào dưới đây thường mang lại hiệu quả phát hiện nhiều lỗi nhất theo kinh nghiệm kiểm thử?",
      "options": [
        "Phân vùng hợp lệ nằm giữa khoảng",
        "Biên hợp lệ (Valid boundaries)",
        "Phân vùng không hợp lệ nằm xa biên",
        "Biên không hợp lệ (Invalid boundaries)"
      ],
      "correctAnswer": [
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Các điểm biên hợp lệ có xác suất chứa lỗi cao do lập trình viên dễ nhầm lẫn các toán tử so sánh (< với ≤). Các điểm biên không hợp lệ giúp phát hiện ngay các lỗi xử lý ngoại lệ hoặc thiếu kiểm tra ràng buộc đầu vào."
    },
    {
      "id": 59,
      "question": "Cho các nhận định sau về kỹ thuật Phân lớp tương đương (Equivalence Partitioning):\n1. Tất cả các test case trong cùng một lớp tương đương kích hoạt cùng một nhóm hành vi của thành phần phần mềm.\n2. Nếu một test case đại diện trong lớp tương đương phát hiện được lỗi, các test case khác cùng lớp được kỳ vọng cũng sẽ gây ra lỗi tương tự.\n3. Kỹ thuật này luôn đảm bảo phát hiện tốt tất cả các lỗi tại vùng biên tiếp giáp giữa các khoảng giá trị.\n4. Việc áp dụng phân vùng tương đương có thể thực hiện trên cả miền dữ liệu đầu vào và miền dữ liệu đầu ra.\nCác nhận định ĐÚNG là:",
      "options": [
        "2, 3 và 4",
        "1, 2 và 4",
        "1, 3 và 4",
        "1, 2 và 3"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Theo tài liệu, các test case trong cùng lớp tương đương kích hoạt cùng hành vi, có khả năng phát hiện lỗi tương tự nhau, và có thể áp dụng cho cả miền đầu vào lẫn đầu ra; điểm yếu của nó là có thể bỏ sót lỗi ở ranh giới biên."
    },
    {
      "id": 60,
      "question": "Cho các phát biểu sau về các kỹ hiệu ràng buộc trong Đồ thị nhân - quả (Cause-Effect Graphing):\n1. Ràng buộc E (Exclude) khẳng định rằng hai nguyên nhân a và b không thể đồng thời bằng 1.\n2. Ràng buộc I (Include) khẳng định rằng ít nhất một trong các nguyên nhân được liên kết luôn luôn bằng 1.\n3. Ràng buộc O (Only) khẳng định rằng một và chỉ duy nhất một trong các nguyên nhân bằng 1.\n4. Ràng buộc R (Request) quy định rằng khi nguyên nhân a bằng 1 thì kết quả b bắt buộc phải bằng 0.\nSố phát biểu ĐÚNG là:",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Các phát biểu 1, 2, 3 hoàn toàn đúng theo định nghĩa. Phát biểu 4 sai vì ràng buộc R (Request) có nghĩa là khi a=1 thì b cũng phải bằng 1 (còn a=1⇒b=0 là ràng buộc Mask - M)."
    },
    {
      "id": 61,
      "question": "Một hệ thống xử lý hồ sơ tuyển dụng yêu cầu phân loại ứng viên theo độ tuổi x (số nguyên dương) như sau:\n- 0≤x<16: Không thuê\n- 16≤x<18: Thuê bán thời gian\n- 18≤x<55: Thuê toàn thời gian\n- 55≤x≤99: Không thuê\nNếu áp dụng phương pháp Phân tích giá trị biên (BVA) cho vùng tuổi 16≤x<18, tập các giá trị tuổi nào sau đây đại diện chính xác cho các biên hợp lệ và biên không hợp lệ kề cận?",
      "options": [
        "15, 16, 17, 18",
        "16, 18",
        "16, 17, 18, 19",
        "0, 16, 18, 55"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Biên hợp lệ là 16 (cận dưới) và 17 (cận trên vì x<18 với số nguyên). Biên không hợp lệ kề cận là 15 (16−1) và 18 (17+1)."
    },
    {
      "id": 62,
      "question": "Xét mô hình Máy trạng thái hữu hạn (DFA) đại diện cho chức năng Đăng nhập. Một DFA được xác định bởi bộ 5 phần tử (S,Act,T,q₀,F). Trong bài toán kiểm thử dựa trên mô hình (MBT), phát biểu nào sau đây thể hiện ĐÚNG nguyên tắc sinh ca kiểm thử từ DFA?",
      "options": [
        "Tất cả các ca kiểm thử sinh ra đều phải đi qua toàn bộ các trạng thái có trong tập S để đạt độ bao phủ 100%.",
        "Mỗi ca kiểm thử đại diện cho một đường đi từ trạng thái ban đầu q₀ đến một trạng thái kết thúc thuộc tập F, và phải chứa ít nhất một phép chuyển trạng thái.",
        "Các trạng thái trong tập F chỉ bao gồm các trạng thái kết thúc thành công, không bao gồm trạng thái xử lý lỗi.",
        "DFA chỉ sinh được duy nhất một ca kiểm thử tối ưu nhất đại diện cho luồng đăng nhập thành công."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu chỉ rõ: 'Sinh các ca kiểm thử. Mỗi ca kiểm thử là đường đi từ trạng thái ban đầu đến trạng thái kết thúc. Mỗi ca kiểm thử phải có ít nhất một phép chuyển trạng thái.'"
    },
    {
      "id": 63,
      "question": "Trong bài toán phân loại tam giác với 3 cạnh a,b,c là số nguyên dương, quy trình xây dựng Đồ thị nhân - quả xác định các kết quả sau:\n- R1: Tam giác thường\n- R2: Tam giác cân\n- R3: Tam giác đều\n- R4: Không lập thành tam giác\n- R5: Lỗi nhập dữ liệu\nNếu dữ liệu đầu vào là bộ 3 số (3,3,5), kết quả mong đợi R thu được từ bảng quyết định tương ứng sẽ là gì?",
      "options": [
        "R3",
        "R2",
        "R1",
        "R4"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Cả 3 số nguyên dương, thỏa mãn bất đẳng thức tam giác (3+3>5) và có đúng 2 cạnh bằng nhau (a=b=3), nên hệ thống thông báo tam giác cân (R2)."
    },
    {
      "id": 64,
      "question": "Cho các nhận định về phương pháp Kiểm thử dựa trên mô hình (Model-Based Testing - MBT):\n1. MBT cho phép phát hiện sớm các lỗi và sự không rõ ràng ngay trong tài liệu đặc tả và thiết kế.\n2. Lập các ca kiểm thử từ mô hình giúp dễ dàng kết hợp với các công cụ kiểm thử tự động.\n3. Xây dựng mô hình chính xác là công việc đơn giản, ít tốn kém và không đòi hỏi kỹ năng phân tích thiết kế cao.\n4. Khi phần mềm tiến hóa, có thể dễ dàng sinh thêm các ca kiểm thử bằng cách cập nhật mô hình.\nCác nhận định ĐÚNG bao gồm:",
      "options": [
        "1, 3 và 4",
        "2, 3 và 4",
        "1, 2 và 3",
        "1, 2 và 4"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Các nhận định 1, 2, 4 phản ánh đúng các ưu điểm của MBT. Nhận định 3 sai vì việc xây dựng mô hình rất khó khăn, tốn kém và đòi hỏi kỹ năng phân tích thiết kế hệ thống cao."
    },
    {
      "id": 65,
      "question": "Sự khác biệt căn bản giữa Kiểm thử biên chuẩn (Boundary Value Analysis - BVA) và Kiểm thử biên mạnh (Robustness Testing) là gì?",
      "options": [
        "Kiểm thử biên mạnh chỉ áp dụng cho các dữ liệu dạng chuỗi ký tự không chặn.",
        "Kiểm thử biên mạnh bổ sung thêm các giá trị nằm ngoài biên hợp lệ (min− và max+).",
        "Mục đích chính của kiểm thử biên mạnh là xem chương trình có kiểm tra tính hợp lệ của dữ liệu đầu vào khi gặp giá trị ngoại lệ hay không.",
        "Đối với n biến, số ca kiểm thử của kiểm thử biên mạnh dựa trên giả thuyết khiếm khuyết đơn là 6n+1."
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
      "id": 66,
      "question": "Trong Đồ thị nhân - quả (Cause-Effect Graphing), nếu nguyên nhân A đại diện cho điều kiện 'Đã nhập sai Password' và nguyên nhân B đại diện cho 'Đã ấn nút Đăng nhập', hệ quả C là 'Hiển thị thông báo lỗi'. Mối quan hệ giữa A,B để tạo ra C được biểu diễn bằng cổng logic nào?",
      "options": [
        "Cổng NOT",
        "Cổng AND (∧)",
        "Cổng OR (∨)",
        "Ràng buộc Mask (M)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Thông báo lỗi chỉ xuất hiện khi ĐỒNG THỜI nhập sai Password VÀ nhấn nút Đăng nhập. Do đó hai nguyên nhân phải kết hợp qua cổng AND."
    },
    {
      "id": 67,
      "question": "Trong các trường hợp lựa chọn ca kiểm thử cho lớp đại diện tương đương đối với dữ liệu đầu vào, tài liệu đưa ra các hướng dẫn nào?",
      "options": [
        "Nếu là số thực liên tục, chọn 1 test case hợp lệ nằm trong khoảng liên tục và có thể lấy 2 test case đại diện cho giá trị không hợp lệ nằm phía dưới và phía trên.",
        "Nếu là dữ liệu dạng liệt kê rời rạc gồm 1 trị hợp lệ và nhiều trị không hợp lệ, chọn 1 test case hợp lệ và có thể chọn 2 test case miêu tả giá trị không hợp lệ.",
        "Với mọi loại dữ liệu, bắt buộc phải duyệt vét cạn 100% tất cả các giá trị có thể có trong miền xác định.",
        "Nếu là số nguyên liên tục, chọn 1 giá trị đại diện hợp lệ ở khoảng giữa và 2 giá trị không hợp lệ ở hai phía ngoài khoảng."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": ""
    },
    {
      "id": 68,
      "question": "Giả sử một hàm nhận 2 biến đầu vào x₁,x₂ thỏa mãn 10≤x₁≤50 và 1≤x₂≤5. Nếu áp dụng phương pháp Phân tích giá trị biên (BVA) chuẩn với tập giá trị {min,min+,nom,max−,max}, bộ test case nào sau đây đại diện cho biến x₁ khi x₂ nhận giá trị bình thường x₂ₙₒₘ=3?",
      "options": [
        "⟨9,3⟩,⟨10,3⟩,⟨30,3⟩,⟨50,3⟩,⟨51,3⟩",
        "⟨10,1⟩,⟨10,2⟩,⟨10,3⟩,⟨10,4⟩,⟨10,5⟩",
        "⟨10,3⟩,⟨11,3⟩,⟨30,3⟩,⟨49,3⟩,⟨50,3⟩",
        "⟨10,5⟩,⟨50,1⟩,⟨30,3⟩"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Giá trị của x₁ biến đổi qua 5 điểm cực trị (min=10,min+=11,nom=30,max−=49,max=50) trong khi x₂ giữ cố định ở mức trung bình nom=3."
    },
    {
      "id": 69,
      "question": "Bài toán giải phương trình bậc nhất ax+b=0 (a,b là các số nguyên nhập từ bàn phím). Để kiểm thử tính đúng đắn của chương trình bằng phương pháp Phân tích giá trị biên và Giá trị đặc biệt, trường hợp kiểm thử nào sau đây là BẮT BUỘC phải có để phát hiện lỗi logic chia cho 0?",
      "options": [
        "Test case với a>0,b>0 (Ví dụ: a=2,b=4)",
        "Test case với a=0,b",
        "Test case với a=1,b=0",
        "Test case với a<0,b<0 (Ví dụ: a=−2,b=−4)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "=0 (Ví dụ: a=0,b=5) Khi a=0, nghiệm x=−b/a sẽ gây ra lỗi chia cho 0 (Divide by Zero) nếu phần mềm không kiểm tra điều kiện a=0 trước khi tính toán."
    },
    {
      "id": 70,
      "question": "Những nguyên nhân nào sau đây khiến việc áp dụng Phân tích giá trị biên (BVA) đạt hiệu quả cao trong thực tế?",
      "options": [
        "Các ngôn ngữ không có kiểm tra kiểu mạnh (như JavaScript, PHP, Visual Basic) rất cần kiểm thử giá trị biên.",
        "Lỗi phần mềm thường có xu hướng xuất hiện tập trung ở gần các giá trị biên của miền dữ liệu.",
        "BVA có thể phát hiện hiệu quả các lỗi phức tạp do sự tương tác đồng thời giữa nhiều biến phụ thuộc nhau.",
        "BVA giúp tìm ra nhiều lỗi chỉ với số lượng test case tương đối ít."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Tài liệu ghi rõ lý do BVA tập trung vào biên là vì lỗi thường xuất hiện ở gần các giá trị biên này. Đây là ưu điểm nổi bật của BVA được trình bày trong mục Ưu nhược điểm của BVA."
    },
    {
      "id": 71,
      "question": "Tại sao trong phương pháp Phân tích giá trị biên (BVA), việc giả định 'Khiếm khuyết đơn' (Single Fault Assumption) lại được ưu tiên áp dụng rộng rãi hơn so với kiểm thử biên tổ hợp?",
      "options": [
        "Vì giả thuyết khiếm khuyết đơn không cần xác định các giá trị cực trị của đầu vào.",
        "Vì giả thuyết khiếm khuyết đơn đảm bảo tìm ra 100% tất cả các lỗi tương tác giữa các biến.",
        "Vì kiểm thử biên tổ hợp yêu cầu số lượng ca kiểm thử ít hơn kiểm thử biên đơn.",
        "Vì thực tế sự hỏng hóc hiếm khi xảy ra do hai hoặc nhiều khiếm khuyết cùng đồng thời xuất hiện, giúp giảm đáng kể số lượng ca kiểm thử cần thực hiện."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu trích dẫn nguyên lý: 'Hỏng hóc xảy ra hiếm khi do hai (hoặc hơn) khiếm khuyết cùng xảy ra'."
    },
    {
      "id": 72,
      "question": "Những khẳng định nào sau đây thể hiện đúng vai trò của Bảng quyết định (Decision Table) thu được từ Đồ thị nhân - quả?",
      "options": [
        "Bảng quyết định loại bỏ hoàn toàn các trường hợp không thể xảy ra nhờ áp dụng các ràng buộc (E, I, O, R, M).",
        "Mỗi cột trong bảng quyết định tương ứng với đúng một ca kiểm thử (Test case).",
        "Bảng quyết định tập trung biểu diễn sự kết hợp giữa các điều kiện đầu vào (causes) để tạo ra các trạng thái đầu ra (effects).",
        "Bảng quyết định chỉ có thể áp dụng cho dữ liệu đầu vào là các số thực liên tục."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Các ràng buộc ngữ cảnh giúp loại bỏ những tổ hợp vô lý, làm gọn số lượng cột trong bảng quyết định."
    },
    {
      "id": 73,
      "question": "Trong ví dụ kiểm thử trang web đăng nhập môn học bằng mô hình DFA, chuỗi thao tác: S_index * t_usrname = username * t_passwd = usr + pass * del_usrname = password * c_submit sẽ chuyển hệ thống đến trạng thái nào?",
      "options": [
        "Admin_main",
        "error_log",
        "S_index",
        "Stu_main"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Do hành động del_usrname đã xóa mất username, khiến hệ thống chỉ còn password, khi ấn c_submit sẽ dẫn tới trạng thái lỗi đăng nhập (error_log)."
    },
    {
      "id": 74,
      "question": "Dựa trên tài liệu, khi kiểm thử một module tìm kiếm trên website bằng kỹ thuật Đoán lỗi (Error guessing), trường hợp nào sau đây thể hiện việc kiểm thử một 'lỗi cài đặt điển hình'?",
      "options": [
        "Nhập một chuỗi tìm kiếm cực dài hoặc chứa các ký tự điều khiển SQL (như ' OR '1'='1) để xem hệ thống có bị rò rỉ dữ liệu hoặc tràn bộ đệm không.",
        "Nhập đúng từ khóa có trong CSDL và kiểm tra xem danh sách trả về có chứa từ khóa đó không.",
        "Kiểm tra xem nút 'Tìm kiếm' có màu xanh đúng theo file thiết kế UI hay không.",
        "Nhấn nút Tìm kiếm khi chưa nhập bất kỳ chữ nào và kỳ vọng hệ thống báo hãy nhập từ khóa."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Đây là suy đoán dựa trên kinh nghiệm về các lỗi bảo mật/cài đặt điển hình như SQL Injection hoặc Buffer Overflow."
    },
    {
      "id": 75,
      "question": "Những lý do nào khiến việc kết hợp Phân lớp tương đương (EP) và Phân tích giá trị biên (BVA) trở thành một chiến lược kiểm thử hộp đen tối ưu?",
      "options": [
        "Hai kỹ thuật này bổ sung cho nhau giúp tối ưu hóa cả về mặt bao phủ miền dữ liệu và tiết kiệm thời gian kiểm thử.",
        "Phân tích giá trị biên tập trung kiểm tra chính xác tại ranh giới giữa các lớp, khắc phục nhược điểm bỏ sót lỗi biên của phân lớp tương đương.",
        "Phân lớp tương đương giúp giảm bớt số lượng lớn các ca kiểm thử bằng cách chọn các đại diện trong vùng.",
        "Sự kết hợp này đảm bảo phát hiện được tất cả các lỗi logic phức tạp dựa trên trạng thái của hệ thống mà không cần dùng đến đồ thị hay mô hình."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Đây là lợi ích kết hợp được minh họa qua ví dụ bài toán vay vốn ngân hàng trong tài liệu. BVA bù đắp trực tiếp điểm yếu lớn nhất của EP bằng cách chọn giá trị sát ranh giới. EP chia miền giá trị thành các lớp đồng nhất để giảm khối lượng test case."
    }
  ]
};
