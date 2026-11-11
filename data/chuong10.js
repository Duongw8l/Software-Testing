// Dữ liệu Chương 2 (Bộ 3) — chuyển từ Kiểm-thử-ôn-tập-chương-2.docx
// Sửa câu hỏi trực tiếp tại đây. correctAnswer là chỉ số bắt đầu từ 0 (a=0, b=1, c=2, d=3); câu nhiều đáp án dùng mảng.
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[10] = {
  "title": "Chương 2: Kiểm thử trong vòng đời phát triển phần mềm (Bộ 3)",
  "num": 2,
  "questions": [
    {
      "id": 1,
      "question": "Trong mô hình chữ V (V-Model), vai trò cốt lõi của nhánh bên phải là gì?",
      "options": [
        "Lập trình và cài đặt mã nguồn cho từng thành phần đơn lẻ của hệ thống.",
        "Thực hiện việc phân tích yêu cầu và thiết kế kiến trúc kỹ thuật chi tiết cho phần mềm.",
        "Định nghĩa các mức độ kiểm thử tương ứng phản ứng lại từng hoạt động phát triển ở nhánh bên trái.",
        "Bỏ qua các hoạt động xác minh (Verification) để tập trung duy nhất vào hoạt động thẩm định (Validation)."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhánh phải của sơ đồ V-Model được thiết kế đặc thù để đối ứng và kiểm tra lại các sản phẩm công việc tương ứng ở từng cấp độ của nhánh phát triển bên trái."
    },
    {
      "id": 2,
      "question": "Đơn vị nhỏ nhất bên trong kiến trúc phần mềm có thể được kiểm tra độc lập trong kiểm thử thành phần (Component testing) thường là gì và cơ sở kiểm thử (Test basis) chính của nó là gì?",
      "options": [
        "Đơn vị nhỏ nhất là tập hợp các hệ phụ (subsystems); cơ sở kiểm thử chính là tài liệu thiết kế kiến trúc tổng thể.",
        "Đơn vị nhỏ nhất là lớp, hàm, phương thức hoặc module; cơ sở kiểm thử chính là đặc tả thành phần (component specification).",
        "Đơn vị nhỏ nhất là quy trình nghiệp vụ của người dùng; cơ sở kiểm thử chính là hợp đồng kinh tế.",
        "Đơn vị nhỏ nhất là toàn bộ hệ thống đã đóng gói; cơ sở kiểm thử chính là tài liệu hướng dẫn sử dụng."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Thành phần nhỏ nhất trong kiến trúc như hàm hay lớp được kiểm thử dựa trên đặc tả thành phần để kiểm tra logic nội tại và điều kiện ràng buộc đầu vào/đầu ra."
    },
    {
      "id": 3,
      "question": "Những loại kiểm thử nào sau đây thuộc về kiểm thử chấp nhận (Acceptance testing)?",
      "options": [
        "Kiểm thử chấp nhận hợp đồng (Contract acceptance testing).",
        "Kiểm thử đơn vị (Unit testing).",
        "Kiểm thử vận hành (Operational acceptance testing).",
        "Kiểm thử sự chấp nhận của người dùng (User acceptance testing)."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Dạng kiểm thử này đánh giá sản phẩm dựa trên các tiêu chí cụ thể và cam kết tuân thủ pháp lý đã được thỏa thuận trong hợp đồng với khách hàng. Hình thức này do đội ngũ quản trị hệ thống thực hiện nhằm kiểm tra khả năng sao lưu, khôi phục thảm họa, bảo mật và quản lý người dùng trước khi vận hành. Phương pháp này tập trung vào kịch bản sử dụng và quy trình nghiệp vụ điển hình để đảm bảo phần mềm đáp ứng kỳ vọng của các nhóm người dùng tương lai."
    },
    {
      "id": 4,
      "question": "Trong môi trường kiểm thử thành phần, khái niệm \"Test driver\" được hiểu như thế nào?",
      "options": [
        "Là phần mã giả được viết để thay thế cho một thành phần cấp dưới chưa hoàn thành mà thành phần hiện tại đang gọi đến.",
        "Là kiểm thử viên đóng vai trò người lái thử để đánh giá giao diện người dùng chuyên biệt.",
        "Là một thành phần phần mềm hoặc công cụ đảm nhận việc điều khiển và/hoặc gọi tới thành phần cần kiểm thử để ghi lại kết quả.",
        "Là thiết bị phần cứng bắt buộc để kết nối hệ thống với mạng diện rộng."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Test driver giả lập môi trường gọi đến thành phần cần kiểm tra bằng cách truyền dữ liệu vào interface và ghi nhận phản ứng thực tế."
    },
    {
      "id": 5,
      "question": "Các dạng kiểm thử nào dưới đây thuộc nhóm kiểm thử phi chức năng (Non-functional testing)?",
      "options": [
        "Load testing (Kiểm thử tải) nhằm đo lường hành vi hệ thống khi tăng số lượng truy cập đồng thời.",
        "Decision testing (Kiểm thử quyết định) nhằm bao phủ tất cả các nhánh quyết định trong mã nguồn.",
        "Security testing (Kiểm thử bảo mật) nhằm kiểm tra khả năng chống lại truy cập trái phép và tấn công mạng.",
        "Usability testing (Kiểm thử tính dễ sử dụng) nhằm đánh giá độ dễ học, dễ dùng của giao diện đối với người dùng."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Đo lường sự thay đổi hiệu năng và độ ổn định của ứng dụng khi quy mô người dùng tăng lên là mục tiêu trọng tâm của kiểm thử tải. Hình thức này đánh giá các đặc tính bảo vệ dữ liệu, lỗ hổng hệ thống và khả năng chống lại các cuộc tấn công trái phép."
    },
    {
      "id": 6,
      "question": "Kiểm thử biên mạnh (Robustness testing) chủ yếu nhằm mục đích gì trong kiểm thử phần mềm?",
      "options": [
        "Đo tốc độ xử lý và thời gian phản hồi của các chức năng trong điều kiện vận hành bình thường.",
        "Đảm bảo mọi dòng lệnh trong mã nguồn đều được thực thi ít nhất một lần.",
        "Thẩm định xem sản phẩm có đáp ứng đúng tất cả các điều khoản quy định trong hợp đồng hay không.",
        "Đánh giá phản ứng của thành phần hoặc hệ thống đối với các dữ liệu đầu vào không hợp lệ hoặc điều kiện môi trường áp lực."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Robustness testing sử dụng các negative test cases để đảm bảo thành phần không bị phá hỏng hay xử lý sai khi gặp dữ liệu không hợp lệ hoặc ngoại lệ."
    },
    {
      "id": 7,
      "question": "Nhược điểm cốt lõi của chiến lược kiểm thử tích hợp từ dưới lên (Bottom-up integration testing) là gì?",
      "options": [
        "Không thể thực hiện kiểm thử giao tiếp đối với các phần cứng hoặc môi trường bên ngoài.",
        "Bắt buộc phải tích hợp tất cả các thành phần cùng một lúc ngay từ giai đoạn đầu.",
        "Hệ thống hoàn chỉnh ở mức điều khiển tổng thể chưa thể hoạt động được cho đến tận đường cơ sở tích hợp cuối cùng.",
        "Cần phải viết rất nhiều Stubs để mô phỏng các thành phần ở mức thấp hơn."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Do các thành phần điều khiển cấp cao được tích hợp sau cùng, người phát triển không thể thấy một hệ thống hoàn chỉnh hoạt động cho đến giai đoạn cuối."
    },
    {
      "id": 8,
      "question": "Nhận định nào sau đây đúng về các chiến lược kiểm thử tích hợp Ad-hoc, Backbone và Bigbang?",
      "options": [
        "Chiến lược Bigbang tích hợp tất cả thành phần cùng lúc, gây khó khăn lớn trong việc định vị và cô lập lỗi.",
        "Chiến lược Ad-hoc tích hợp các thành phần ngay khi chúng hoàn thành, giúp tiết kiệm thời gian nhưng đòi hỏi stubs và drivers.",
        "Chiến lược Bigbang là giải pháp tối ưu nhất cho các hệ thống lớn vì không cần đến bất kỳ test driver hay stub nào.",
        "Chiến lược Backbone tạo một khung sườn cố định để dần tích hợp các thành phần vào theo thứ tự bất kỳ."
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
      "id": 9,
      "question": "Mục đích chính của kiểm thử hồi quy (Regression testing) là gì?",
      "options": [
        "Xác nhận xem một lỗi cụ thể đã báo cáo trước đó đã được sửa thành công hay chưa.",
        "Thu thập ý kiến phản hồi của người dùng cuối trong môi trường sản xuất thực tế.",
        "Đánh giá tính dễ bảo trì và chất lượng chú thích (comment) trong mã nguồn của nhà phát triển.",
        "Phát hiện các tác dụng phụ không mong muốn (side effects) xuất hiện ở các phần chưa thay đổi sau khi phần mềm hoặc môi trường bị chỉnh sửa."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử hồi quy tập trung phát hiện lỗi phát sinh ngoài ý muốn ở những vùng phần mềm cũ vốn đang chạy tốt sau khi có thay đổi mã hoặc môi trường."
    },
    {
      "id": 10,
      "question": "Sự khác biệt bản chất giữa Tái kiểm thử (Re-testing) và Kiểm thử hồi quy (Regression testing) là gì?",
      "options": [
        "Tái kiểm thử dành cho kiểm thử phi chức năng, còn kiểm thử hồi quy chỉ áp dụng cho kiểm thử chức năng.",
        "Tái kiểm thử chỉ thực hiện bằng tay, trong khi kiểm thử hồi quy bắt buộc phải dùng công cụ tự động hóa.",
        "Tái kiểm thử diễn ra ở giai đoạn kiểm thử chấp nhận, còn kiểm thử hồi quy chỉ thực hiện ở mức kiểm thử thành phần.",
        "Tái kiểm thử chạy lại đúng các ca kiểm thử thất bại để xác nhận lỗi đã được sửa, còn kiểm thử hồi quy kiểm tra xem các vùng không sửa đổi có bị ảnh hưởng tiêu cực hay không."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tái kiểm thử nhằm xác nhận lỗi cũ đã biến mất bằng cách chạy lại test case bị trượt, trong khi kiểm thử hồi quy bảo đảm sửa lỗi không làm hỏng các tính năng khác."
    },
    {
      "id": 11,
      "question": "Trong các mô hình phát triển lặp và tăng trưởng (bao gồm phát triển linh hoạt Agile), hoạt động kiểm thử có những đặc điểm nào?",
      "options": [
        "Hoạt động kiểm thử chỉ được bắt đầu thực hiện sau khi toàn bộ sản phẩm của dự án đã được cài đặt hoàn chỉnh.",
        "Số lượng ca kiểm thử tăng liên tục qua các vòng lặp khiến tự động hóa kiểm thử trở thành giải pháp phù hợp.",
        "Chu kỳ phát hành rất ngắn đòi hỏi hoạt động kiểm thử phải điều chỉnh để đáp ứng tần suất phát hành nhanh.",
        "Các ca kiểm thử thành phần cần được thiết kế sao cho dễ tái sử dụng và áp dụng tức thì cho các vòng tăng trưởng mới."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Số lượng ca kiểm thử tích lũy qua từng sprint khiến việc kiểm thử thủ công tốn thời gian, do đó tự động hóa kiểm thử hồi quy là giải pháp cần thiết. Vòng lặp phát hành ngắn trong Agile buộc hoạt động kiểm thử phải diễn ra liên tục và thích ứng nhanh với từng đợt tăng trưởng. Ca kiểm thử thành phần được thiết kế mô-đun hóa giúp dễ dàng chạy lại tự động ngay khi có bản build mới trong tích hợp liên tục."
    },
    {
      "id": 12,
      "question": "Quy trình cốt lõi của kiểm thử trước (Test-first) trong TDD (Test-Driven Development) ở mức kiểm thử thành phần được thực hiện như thế nào?",
      "options": [
        "Lập trình hoàn chỉnh thành phần, sau đó viết test cases để bao phủ 100% mã nguồn đã viết.",
        "Tự động hóa toàn bộ quy trình kiểm thử hệ thống trước khi bắt đầu giai đoạn phân tích yêu cầu.",
        "Thực hiện kiểm thử chấp nhận với người dùng trước khi tiến hành thiết kế kiến trúc chi tiết.",
        "Viết test cases trước, sau đó viết mã nguồn sao cho vượt qua các test cases đó, rồi tiếp tục tiến hóa tập test cases để hoàn thiện đặc tả."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "TDD tuân theo chu trình viết test case thất bại trước, viết mã vừa đủ để pass test case, sau đó tối ưu hóa mã và mở rộng tập test case."
    },
    {
      "id": 13,
      "question": "Khác biệt chính giữa Alpha testing và Beta testing trong kiểm thử thực địa (Field testing) là gì?",
      "options": [
        "Alpha testing do khách hàng thực hiện, còn Beta testing do đội ngũ lập trình viên tự kiểm tra.",
        "Alpha testing là kiểm thử tự động, còn Beta testing là kiểm thử tĩnh kiểm tra tài liệu.",
        "Alpha testing áp dụng cho phần mềm đặt hàng riêng, còn Beta testing chỉ áp dụng cho hệ thống nhúng IoT.",
        "Alpha testing được thực hiện tại nơi sản xuất/phát triển phần mềm, còn Beta testing được thực hiện ở phía môi trường của khách hàng/người dùng đại diện."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Alpha testing được tổ chức ngay tại môi trường của nhà sản xuất, trong khi Beta testing được giao cho người dùng chạy trực tiếp tại môi trường thực tế của họ."
    },
    {
      "id": 14,
      "question": "Theo các slide nội dung bài học, một cách tiếp cận kiểm thử tốt nên có những tính chất nào sau đây?",
      "options": [
        "Hoạt động kiểm thử nên được đưa vào quy trình phát triển càng sớm càng tốt.",
        "Phân tích cơ sở kiểm thử và thiết kế ca kiểm thử chỉ được bắt đầu sau khi giai đoạn lập trình hoàn tất hoàn toàn.",
        "Kiểm thử viên cần tham gia sớm và liên tục trong quá trình làm mịn các sản phẩm công việc (như yêu cầu, thiết kế, mã nguồn).",
        "Cần lập kế hoạch và thực hiện kiểm thử cho mỗi hoạt động phát triển sản phẩm."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Bắt đầu kiểm thử sớm giúp phát hiện và khắc phục các sai sót ngay từ giai đoạn yêu cầu hay thiết kế, làm giảm đáng kể chi phí sửa lỗi. Sự tham gia sớm của kiểm thử viên vào quá trình làm mịn yêu cầu và tài liệu thiết kế giúp đảm bảo tính rõ ràng và có thể kiểm thử được của sản phẩm. Mỗi giai đoạn phát triển phần mềm đều tạo ra các sản phẩm công việc tương ứng cần được lập kế hoạch kiểm tra phù hợp."
    },
    {
      "id": 15,
      "question": "Nhận định nào sau đây mô tả đúng nhất về Kiểm thử hệ thống (System testing)?",
      "options": [
        "Kiểm tra các tiêu chí chấp nhận đã thống nhất trong hợp đồng do chính khách hàng thực hiện.",
        "Kiểm tra sự tương tác và giao tiếp giữa các nhóm thành phần đã được tích hợp với nhau.",
        "Kiểm tra các đơn vị mã nguồn nhỏ nhất một cách độc lập bằng công cụ như JUnit hoặc NUnit.",
        "Kiểm tra hệ thống hoàn chỉnh sẵn sàng vận hành để xác minh hệ thống thỏa mãn các yêu cầu đặc tả, bao gồm cả kiểm thử chức năng và phi chức năng."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử hệ thống đánh giá toàn bộ sản phẩm đã tích hợp trên môi trường vận hành đại diện để đảm bảo thỏa mãn đầy đủ các yêu cầu đặc tả."
    },
    {
      "id": 16,
      "question": "Theo tài liệu bài giảng, quy trình phát triển phần mềm phổ biến được chia thành 2 nhóm mô hình chính nào?",
      "options": [
        "Mô hình Hướng đối tượng và Mô hình Hướng cấu trúc.",
        "Mô hình Thác nước và Mô hình chữ V.",
        "Mô hình Scrum và Mô hình Kanban.",
        "Mô hình phát triển tuần tự và Mô hình lặp & tăng trưởng."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Đây là 2 phân loại mô hình phát triển phần mềm lớn được nêu trực tiếp trong nội dung chương."
    },
    {
      "id": 17,
      "question": "Theo tài liệu bài giảng, quy trình phát triển phần mềm phổ biến được chia thành 2 nhóm mô hình chính nào?",
      "options": [
        "Mô hình Hướng đối tượng và Mô hình Hướng cấu trúc.",
        "Mô hình Thác nước và Mô hình chữ V.",
        "Mô hình Scrum và Mô hình Kanban.",
        "Mô hình phát triển tuần tự và Mô hình lặp & tăng trưởng."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Đây là 2 phân loại mô hình phát triển phần mềm lớn được nêu trực tiếp trong nội dung chương."
    },
    {
      "id": 18,
      "question": "Ý tưởng cơ bản cốt lõi nhất của Mô hình chữ V (V-Model) là gì?",
      "options": [
        "Nhánh bên phải chữ V đại diện cho thiết kế kiến trúc, còn nhánh bên trái đại diện cho kiểm thử.",
        "Hoạt động kiểm thử chỉ được bắt đầu lập kế hoạch sau khi mã nguồn đã được cài đặt xong.",
        "Kiểm thử và phát triển là các hoạt động có giá trị tương đương nhau, đại diện bởi 2 nhánh của chữ V.",
        "Kiểm thử hệ thống là mức độ kiểm thử duy nhất cần thiết trong quy trình."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Mô hình thể hiện sự cân bằng và mối quan hệ 1-1 giữa mỗi giai đoạn phát triển (nhánh trái) và mức độ kiểm thử tương ứng (nhánh phải)."
    },
    {
      "id": 19,
      "question": "Trong nhánh phát triển (nhánh bên trái) của mô hình chữ V, thứ tự thực hiện đúng các bước từ trên xuống dưới là gì?",
      "options": [
        "Programming -> Component specification -> Technical design -> Functional design -> Requirements definition.",
        "Component specification -> Functional design -> Technical design -> Requirements definition -> Programming.",
        "Requirements definition -> Technical design -> Functional design -> Component specification -> Programming.",
        "Requirements definition -> Functional design -> Technical design -> Component specification -> Programming."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Đây là thứ tự giảm dần độ trừu tượng từ đặc tả yêu cầu tổng thể cho đến lập trình chi tiết."
    },
    {
      "id": 20,
      "question": "Trong mô hình chữ V, mức độ kiểm thử nào ở nhánh bên phải đối ứng trực tiếp với bước 'Technical system design' ở nhánh bên trái?",
      "options": [
        "Component test (Kiểm thử thành phần).",
        "Integration test (Kiểm thử tích hợp).",
        "System test (Kiểm thử hệ thống).",
        "Acceptance test (Kiểm thử chấp nhận)."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử tích hợp đảm bảo các nhóm thành phần tương tác với nhau đúng theo đặc tả bởi thiết kế kỹ thuật."
    },
    {
      "id": 21,
      "question": "Mức độ kiểm thử nào ở nhánh bên phải của V-Model dùng để kiểm tra xem hệ thống có tuân thủ các tiêu chí chấp nhận của khách hàng và người dùng cuối hay không?",
      "options": [
        "Component test (Kiểm thử thành phần).",
        "Integration test (Kiểm thử tích hợp).",
        "Acceptance test (Kiểm thử chấp nhận)."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử chấp nhận kiểm tra sản phẩm so với hợp đồng và thỏa thuận tiêu chí chấp nhận với người dùng."
    },
    {
      "id": 22,
      "question": "Những nhận định nào sau đây là ĐÚNG khi quan sát và phân tích mô hình chữ V (V-Model)?",
      "options": [
        "Các mức độ kiểm thử kiểm tra các sản phẩm công việc ở các mức độ trừu tượng khác nhau.",
        "Kiểm thử chỉ được tiến hành sau khi hoạt động lập trình ở đáy chữ V hoàn thành tuyệt đối.",
        "Mỗi mức độ kiểm thử phản ứng lại mức độ phát triển tương ứng.",
        "Các hoạt động cài đặt và kiểm thử là phân biệt nhưng đều quan trọng ngang nhau."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Mỗi mức kiểm thử ở nhánh phải tương ứng với một mức độ chi tiết/trừu tượng của tài liệu thiết kế ở nhánh trái. Mục tiêu kiểm thử của mỗi mức được dẫn dắt bởi đặc tả của giai đoạn phát triển đối ứng. V-Model thể hiện hai nhánh đối xứng phản ánh tầm quan trọng tương đương của phát triển và kiểm thử."
    },
    {
      "id": 23,
      "question": "Sự khác biệt cốt lõi trong hoạt động kiểm thử giữa mô hình phát triển linh hoạt (Agile) và mô hình tuần tự truyền thống là gì?",
      "options": [
        "Trong mô hình tuần tự, số lượng kịch bản kiểm thử tăng lên nhanh hơn so với Agile.",
        "Agile không áp dụng kiểm thử thành phần mà chỉ thực hiện kiểm thử chấp nhận.",
        "Agile hoàn toàn loại bỏ việc sử dụng kiểm thử tự động.",
        "Các bản phát hành trong Agile được tạo ra trong thời gian rất ngắn, đòi hỏi kiểm thử phải điều chỉnh thích ứng theo từng chu kỳ ngắn."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Mô hình Agile thực hiện theo các vòng lặp/bản tăng trưởng ngắn (tuần/tháng) nên hoạt động kiểm thử phải diễn ra liên tục và lặp lại."
    },
    {
      "id": 24,
      "question": "Vì sao việc tự động hóa kiểm thử (automation testing) lại trở thành giải pháp phù hợp và quan trọng trong phát triển phần mềm linh hoạt (Agile)?",
      "options": [
        "Vì kiểm thử thủ công không thể thực hiện được ở mức độ kiểm thử hệ thống.",
        "Số lượng test cases tăng dần theo thời gian qua mỗi bản tăng trưởng đòi hỏi phải thực thi lặp đi lặp lại nhanh chóng.",
        "Vì tự động hóa loại bỏ nhu cầu phân tích cơ sở kiểm thử.",
        "Vì kiểm thử tự động có thể thay thế hoàn toàn vai trò của lập trình viên."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Khi các tính năng mới liên tục được thêm vào, tự động hóa giúp kiểm tra nhanh các tính năng cũ lẫn mới trong chu trình ngắn."
    },
    {
      "id": 25,
      "question": "Những yếu tố nào thuộc về bối cảnh dự án và sản phẩm ảnh hưởng đến việc lựa chọn tiếp cận kiểm thử?",
      "options": [
        "Ưu tiên nghiệp vụ và mục tiêu dự án (ví dụ: thời gian ra mắt thị trường).",
        "Rủi ro sản phẩm đã được xác định (ví dụ: phần mềm liên quan đến an toàn tính mạng).",
        "Số lượng dòng lệnh (LOC) tối đa một lập trình viên phải viết trong một ngày.",
        "Kích thước và quy mô của sản phẩm phần mềm."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Áp lực thời gian ra mắt sản phẩm sẽ quyết định phạm vi và độ sâu của hoạt động kiểm thử. Mức độ rủi ro cao đòi hỏi kiểm thử nghiêm ngặt hơn và độ bao phủ cao hơn. Sản phẩm lớn thường đòi hỏi áp dụng quy trình kiểm thử chặt chẽ với nhiều mô hình phối hợp."
    },
    {
      "id": 26,
      "question": "Theo các tính chất của một cách tiếp cận kiểm thử tốt, hoạt động phân tích cơ sở kiểm thử và thiết kế kịch bản kiểm thử nên bắt đầu khi nào?",
      "options": [
        "Bắt đầu trong giai đoạn phát triển tương ứng ngay khi sản phẩm công việc được tạo ra.",
        "Bắt đầu sau khi hoàn thành giai đoạn lập trình và đóng gói phần mềm.",
        "Bắt đầu ở giai đoạn bảo trì sản phẩm.",
        "Bắt đầu sau khi sản phẩm đã bàn giao cho khách hàng kiểm thử chấp nhận."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Tester cần tham gia sớm ngay khi các tài liệu yêu cầu hoặc thiết kế vừa hoàn thành để phát hiện lỗi sớm."
    },
    {
      "id": 27,
      "question": "Trong kiểm thử phần mềm, 'Thành phần' (Component / Unit) được định nghĩa là gì?",
      "options": [
        "Toàn bộ giao diện người dùng của hệ thống ứng dụng.",
        "Một hệ quản trị cơ sở dữ liệu hoàn chỉnh.",
        "Tài liệu hướng dẫn cài đặt phần mềm.",
        "Đơn vị nhỏ nhất bên trong kiến trúc phần mềm có thể được kiểm tra một cách độc lập."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Thành phần là các đơn vị mã nguồn như class, function, module có thể tách ra kiểm tra độc lập."
    },
    {
      "id": 28,
      "question": "Cơ sở kiểm thử (test basis) chính của Kiểm thử thành phần (Component testing) là gì?",
      "options": [
        "Đặc tả thành phần (Component specification).",
        "Kiến trúc hệ thống tổng thể (System architecture).",
        "Kịch bản tiến trình nghiệp vụ (Business process scenario).",
        "Tài liệu yêu cầu người dùng (User requirement document)."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Đặc tả thành phần định nghĩa giá trị đầu vào/ra, ràng buộc và hành vi của thành phần đó."
    },
    {
      "id": 29,
      "question": "Trong thực tế, các kỹ thuật kiểm thử hộp trắng và hộp đen được áp dụng thế nào ở mức kiểm thử thành phần?",
      "options": [
        "Không sử dụng cả hai kỹ thuật trên mà chỉ dùng kiểm thử chấp nhận.",
        "Tất cả các thành phần đều bắt buộc phải áp dụng kiểm thử hộp trắng 100%.",
        "Kiểm thử hộp đen hoàn toàn không thể áp dụng ở mức độ thành phần.",
        "Mặc dù hộp trắng phù hợp, hầu hết kiểm thử thành phần trong thực tế là hộp đen; hộp trắng chỉ áp dụng cho thành phần quan trọng."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu chỉ ra rằng thực tế người ta chủ yếu dùng thiết kế hộp đen cho đa số thành phần, và chọn lọc kiểm thử hộp trắng cho các module cốt lõi."
    },
    {
      "id": 30,
      "question": "Khác biệt cốt lõi về công cụ hỗ trợ giữa chiến lược tích hợp Top-down và Bottom-up là gì?",
      "options": [
        "Cả hai chiến lược đều hoàn toàn không cần đến các Stub hay Driver.",
        "Top-down cần dùng các Stub để mô phỏng thành phần cấp dưới, còn Bottom-up cần dùng các Driver để gọi thành phần cấp dưới.",
        "Top-down cần dùng Driver, còn Bottom-up chỉ cần dùng Stub.",
        "Top-down kiểm thử môi trường phần cứng trước, còn Bottom-up kiểm thử kiến trúc trước."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Top-down đi từ module điều khiển xuống nên cần Stub thay thế module con chưa viết; Bottom-up đi từ module con lên nên cần Driver để kích hoạt."
    },
    {
      "id": 31,
      "question": "Nhược điểm lớn nhất của chiến lược tích hợp Bigbang là gì?",
      "options": [
        "Bắt buộc phải thực hiện trên môi trường của khách hàng.",
        "Không thể kiểm thử được các yêu cầu phi chức năng.",
        "Phải tốn rất nhiều công sức để viết các Stub và Driver phức tạp nhất.",
        "Lãng phí thời gian chờ đợi hoàn thành tất cả thành phần và rất khó khăn trong việc định vị, cô lập lỗi."
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Do tích hợp tất cả cùng lúc ở giai đoạn cuối nên khi phát sinh lỗi rất khó biết lỗi xuất phát từ module nào."
    },
    {
      "id": 32,
      "question": "Cơ sở kiểm thử (test basis) chủ yếu của Kiểm thử hệ thống (System testing) bao gồm những gì?",
      "options": [
        "Đặc tả giao diện chi tiết giữa hai thành phần đơn lẻ.",
        "Đặc tả yêu cầu phần mềm/hệ thống, hồ sơ phân tích rủi ro, hướng dẫn sử dụng.",
        "Các tiêu chuẩn mã hóa (coding standards) của doanh nghiệp.",
        "Chỉ duy nhất mã nguồn và các comment của lập trình viên."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử hệ thống đánh giá sản phẩm hoàn chỉnh dựa trên các tài liệu đặc tả ở cấp độ toàn hệ thống."
    },
    {
      "id": 33,
      "question": "Loại kiểm thử chấp nhận nào nhằm đảm bảo các Quản trị viên hệ thống (System administrators) chấp nhận sản phẩm qua các công việc như Backup/Restore, Khôi phục sau thảm họa?",
      "options": [
        "Alpha testing (Kiểm thử Alpha).",
        "User acceptance testing (Kiểm thử sự chấp nhận của người dùng).",
        "Operational acceptance testing (Kiểm thử chấp nhận vận hành).",
        "Contractual acceptance testing (Kiểm thử chấp nhận hợp đồng)."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "OAT tập trung vào các khía cạnh vận hành hệ thống như sao lưu, khôi phục, quản trị người dùng và bảo mật."
    },
    {
      "id": 34,
      "question": "Nhận định nào sau đây phân biệt ĐÚNG giữa Alpha testing và Beta testing trong kiểm thử thực địa (Field testing)?",
      "options": [
        "Beta testing được thực hiện ở môi trường phía khách hàng/người dùng.",
        "Beta testing diễn ra trước Alpha testing trong chu kỳ phát hành.",
        "Alpha testing chỉ kiểm thử hiệu năng, còn Beta testing chỉ kiểm thử chức năng.",
        "Alpha testing được thực hiện tại nơi sản xuất/phát triển phần mềm."
      ],
      "correctAnswer": [
        0,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Beta test được gửi ra bên ngoài cho khách hàng tiềm năng trải nghiệm trực tiếp tại môi trường thực tế của họ. Alpha test diễn ra ở môi trường của nhà sản xuất với sự tham gia của người dùng đại diện hoặc đội ngũ nội bộ."
    },
    {
      "id": 35,
      "question": "Loại kiểm thử phi chức năng nào tập trung quan sát hành vi của phần mềm khi hệ thống rơi vào tình trạng bị quá tải cực hạn?",
      "options": [
        "Stress testing.",
        "Usability testing.",
        "Load testing.",
        "Volume testing."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Stress testing kiểm tra khả năng chịu đựng và xử lý của hệ thống khi tài nguyên bị áp lực vượt quá mức tải bình thường."
    },
    {
      "id": 36,
      "question": "Kỹ thuật kiểm thử nào sau đây thuộc nhóm Kiểm thử dựa trên cấu trúc (Structure-based / White-box testing)?",
      "options": [
        "Equivalence partitioning (Phân vùng tương đương).",
        "Data flow testing (Kiểm thử luồng dữ liệu).",
        "Statement testing (Kiểm thử câu lệnh).",
        "Branch / Decision testing (Kiểm thử nhánh/quyết định)."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Dựa trên việc theo dõi sự khởi tạo và sử dụng biến số trong mã nguồn. Dựa trên việc phân tích và bao phủ các câu lệnh trong mã nguồn. Dựa trên việc bao phủ các nhánh rẽ hướng trong cấu trúc mã chương trình."
    },
    {
      "id": 37,
      "question": "Mục đích cốt lõi của Kiểm thử hồi quy (Regression testing) là gì?",
      "options": [
        "Đánh giá mức độ dễ học của tài liệu hướng dẫn sử dụng.",
        "Phát hiện các tác dụng phụ không mong muốn (hiệu ứng lề) trên các phần phần mềm không bị thay đổi sau khi có sự sửa đổi.",
        "Xác nhận xem một sai sót cụ thể đã được lập trình viên sửa hay chưa.",
        "Đo lường thời gian phản hồi của máy chủ khi tăng số lượng người dùng."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử hồi quy nhằm đảm bảo việc sửa lỗi hoặc cập nhật tính năng mới không làm hỏng các chức năng đang chạy ổn định trước đó."
    },
    {
      "id": 38,
      "question": "Để bảo trì bộ trường hợp kiểm thử hồi quy khi số lượng test cases ngày càng phình to, kiểm thử viên nên thực hiện những giải pháp nào?",
      "options": [
        "Loại bỏ các kiểm thử lặp đi lặp lại hoặc các kiểm thử không tìm thấy lỗi trong thời gian dài.",
        "Gộp/kết hợp các kiểm thử nếu chúng luôn được thực hiện cùng nhau.",
        "Xóa toàn bộ các kịch bản kiểm thử cũ và chỉ viết test cases cho tính năng mới.",
        "Lựa chọn một tập con thích hợp của bộ kiểm thử hồi quy đầy đủ cho mỗi lần thực hiện."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Giúp tinh giản bộ test case, tập trung tài nguyên vào các vùng có rủi ro cao hơn. Tối ưu hóa quy trình thực thi và giảm bớt các thao tác cài đặt trùng lặp. Lựa chọn tập con dựa trên phân tích vùng ảnh hưởng giúp tiết kiệm thời gian mà vẫn đảm bảo độ bao phủ."
    },
    {
      "id": 39,
      "question": "Một công ty ngân hàng đang phát triển ứng dụng di động mới. Trong giai đoạn khởi tạo, đội ngũ phát triển bàn giao tài liệu 'Đặc tả yêu cầu phần mềm' (Requirements Definition) đã được ký duyệt. Dựa trên mô hình chữ V (V-Model), mức độ kiểm thử nào tương ứng trực tiếp nhất được dùng để thẩm định sản phẩm công việc này?",
      "options": [
        "Integration Test (Kiểm thử tích hợp)",
        "Component Test (Kiểm thử thành phần)",
        "System Test (Kiểm thử hệ thống)",
        "Acceptance Test (Kiểm thử chấp nhận)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Trong mô hình chữ V, giai đoạn Đề xuất/Đặc tả yêu cầu (Requirements Definition) ở đỉnh nhánh trái tương ứng trực tiếp với Kiểm thử chấp nhận ở đỉnh nhánh phải nhằm xác minh hệ thống thỏa mãn yêu cầu người dùng."
    },
    {
      "id": 40,
      "question": "Trong dự án phần mềm quản lý kho, kiến trúc sư hệ thống hoàn thành bản 'Thiết kế kỹ thuật' (Technical System Design) mô tả chi tiết giao diện API, cấu trúc cơ sở dữ liệu và giao tiếp giữa các mô-đun. Theo mô hình chữ V, mức độ kiểm thử nào sẽ kiểm tra trực tiếp các sản phẩm của giai đoạn này?",
      "options": [
        "Integration Test (Kiểm thử tích hợp)",
        "System Test (Kiểm thử hệ thống)",
        "Component Test (Kiểm thử thành phần)",
        "Acceptance Test (Kiểm thử chấp nhận)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử tích hợp có cơ sở kiểm thử chính là Thiết kế hệ thống kỹ thuật, nhằm đảm bảo các nhóm thành phần tương tác đúng theo kiến trúc và giao diện đã định."
    },
    {
      "id": 41,
      "question": "Nhà phát triển viết một hàm `calculate_price()` tính toán giá trị xe hơi VSR-II dựa trên `baseprice`, `discount`, `specialprice` và `extras`. Để gọi và điều khiển hàm này độc lập trước khi có giao diện người dùng, lập trình viên tạo một đoạn mã phụ trợ để truyền tham số đầu vào và ghi nhận kết quả trả về. Thành phần phụ trợ này được gọi là gì?",
      "options": [
        "Test stub (Thành phần thế thân)",
        "System simulator (Bộ mô phỏng hệ thống)",
        "Test case harness (Bộ công cụ kiểm thử)",
        "Test driver (Trình điều khiển kiểm thử)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Test driver là một thành phần phần mềm hoặc công cụ đóng vai trò gọi giao diện của thành phần cần kiểm thử, cung cấp dữ liệu đầu vào và ghi nhận kết quả thực tế thu được."
    },
    {
      "id": 42,
      "question": "Nhà phát triển chuẩn bị kiểm thử hàm `calculate_price()` cho hệ thống bán xe. Đặc tả yêu cầu xử lý như sau: 'Nếu khách hàng mua từ 3 đến 4 tính năng bổ sung (extras) thì giảm giá 10% cho tính năng bổ sung; nếu mua từ 5 tính năng trở lên thì giảm giá 15%'. Kiểm thử viên thiết kế ca kiểm thử truyền vào giá trị `baseprice = -50000` USD. Loại kiểm thử nào đang được áp dụng ở đây?",
      "options": [
        "Robustness testing (Kiểm thử biên mạnh / kiểm thử độ bền)",
        "Efficiency testing (Kiểm thử tính hiệu quả)",
        "Maintainability testing (Kiểm thử khả năng bảo trì)",
        "Functional acceptance testing (Kiểm thử chấp nhận chức năng)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Robustness testing đánh giá phản ứng của thành phần hoặc hệ thống trước các dữ liệu đầu vào không hợp lệ (như giá trị âm) hoặc điều kiện ngoại lệ để đảm bảo phần mềm không sụp đổ."
    },
    {
      "id": 43,
      "question": "Một trang web thương mại điện tử chuẩn bị tổ chức sự kiện 'Flash Sale' Ngày Phụ nữ 20/10. Đội kiểm thử thực hiện mô phỏng 100.000 người dùng đồng thời đăng nhập và thực hiện thao tác thanh toán trong khoảng thời gian 5 phút nhằm đo tốc độ phản hồi và hành vi sụp đổ của hệ thống. Đây là hình thức kiểm thử phi chức năng nào?",
      "options": [
        "Volume testing và Maintainability testing",
        "Usability testing và Reliability testing",
        "Security testing và Robustness testing",
        "Load testing và Stress testing"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Tăng số lượng truy cập đồng thời để đo lường hành vi là Load testing; khi lượng truy cập vượt quá khả năng chịu tải để xem hệ thống ứng xử ra sao khi quá tải là Stress testing."
    },
    {
      "id": 44,
      "question": "Trong một ứng dụng xử lý tài chính ngân hàng, sau khi kiểm thử viên phát hiện lỗi tính sai tiền lãi ở chức năng 'Gửi tiết kiệm trực tuyến', lập trình viên đã cập nhật mã nguồn để sửa lỗi này. Lập trình viên bàn giao lại bản build mới. Kiểm thử viên tiến hành chạy lại chính ca kiểm thử đã phát hiện lỗi trước đó để xác nhận lỗi đã được khắc phục hoàn toàn. Hoạt động kiểm thử này được gọi là gì?",
      "options": [
        "Re-testing (Kiểm thử lại / Confirmation testing)",
        "Regression testing (Kiểm thử hồi quy)",
        "Alpha testing (Kiểm thử Alpha)",
        "System integration testing (Kiểm thử tích hợp hệ thống)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Re-testing (hoặc Confirmation testing) là việc thực hiện lại các ca kiểm thử đã từng thất bại nhằm xác minh rằng sai sót thực sự đã được khắc phục thành công."
    },
    {
      "id": 45,
      "question": "Sau khi lập trình viên sửa xong lỗi tính lãi suất tiết kiệm ở ví dụ trên, kiểm thử viên tiếp tục thực thi lại toàn bộ các ca kiểm thử thuộc chức năng 'Rút tiền' và 'Chuyển khoản' (vốn không bị thay đổi mã trực tiếp) để đảm bảo không có tác dụng phụ tiêu cực phát sinh. Hoạt động này gọi là gì?",
      "options": [
        "Kiểm thử cấu trúc (Structure-based testing)",
        "Kiểm thử tính tương thích (Compatibility testing)",
        "Tái kiểm thử (Re-testing)",
        "Kiểm thử hồi quy (Regression testing)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử hồi quy nhằm phát hiện các tác dụng phụ không mong muốn (unintended side-effects) trên các phần chức năng chưa bị sửa đổi sau khi mã nguồn hoặc môi trường có sự thay đổi."
    },
    {
      "id": 46,
      "question": "Một công ty sản xuất phần mềm quản lý bệnh viện chuẩn bị bàn giao phiên bản 2.0 cho một bệnh viện quốc tế. Trưởng nhóm quản trị hệ thống thông tin của bệnh viện yêu cầu thực hiện kiểm thử chu kỳ Sao lưu/Khôi phục dữ liệu (Backup/Restore), quy trình Khôi phục sau thảm họa (Disaster recovery) và các lỗ hổng bảo mật người dùng. Dạng kiểm thử chấp nhận nào đang được thực hiện?",
      "options": [
        "Beta testing (Kiểm thử Beta)",
        "Contract acceptance testing (Kiểm thử chấp nhận hợp đồng)",
        "Operational acceptance testing (Kiểm thử chấp nhận vận hành)",
        "User acceptance testing (Kiểm thử sự chấp nhận của người dùng)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Operational acceptance testing (OAT) do quản trị viên hệ thống thực hiện nhằm đảm bảo các khía cạnh vận hành như backup/restore, khôi phục sau thảm họa, bảo mật và quản lý người dùng sẵn sàng cho sản xuất."
    },
    {
      "id": 47,
      "question": "Mô hình quy trình Agile (như Scrum) ngày càng phổ biến trong các dự án phát triển phần mềm hiện đại. Phát biểu nào sau đây phản ánh đúng nhất thách thức đối với công tác kiểm thử trong các mô hình lặp và tăng trưởng này?",
      "options": [
        "Các bản phát hành tạo ra trong chu kỳ rất ngắn đòi hỏi bộ ca kiểm thử hồi quy tăng nhanh theo thời gian, thúc đẩy nhu cầu tự động hóa kiểm thử.",
        "Không cần thiết phải viết hay tái sử dụng các test cases kiểm thử thành phần do thời gian phát triển quá ngắn.",
        "Agile loại bỏ hoàn toàn giai đoạn kiểm thử hệ thống và kiểm thử chấp nhận.",
        "Kiểm thử chỉ diễn ra duy nhất một lần ở cuối toàn bộ dự án sau khi tất cả các vòng lặp hoàn thành."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Trong Agile, mỗi Sprint/chu kỳ tạo ra một bản tăng trưởng mới. Số lượng chức năng và test cases tăng nhanh khiến việc kiểm thử hồi quy thủ công trở nên quá tải, do đó tự động hóa là giải pháp thiết yếu."
    },
    {
      "id": 48,
      "question": "Công ty phần mềm X triển khai phương pháp Test-Driven Development (TDD) khi xây dựng giải pháp giải phương trình bậc nhất ax+b=0. Quy trình làm việc tiêu chuẩn của nhà phát triển theo tiếp cận Test-first này là gì?",
      "options": [
        "Viết toàn bộ mã nguồn hoàn chỉnh -> Thiết kế test case -> Thực thi kiểm thử hộp trắng -> Lập tài liệu đặc tả.",
        "Viết ca kiểm thử (test case) trước -> Tạo mã nguồn vừa đủ để vượt qua ca kiểm thử -> Tối ưu/tiến hóa mã và tập test cases.",
        "Đặc tả chi tiết thuật toán -> Thực thi kiểm thử hệ thống -> Viết mã nguồn -> Tái kiểm thử.",
        "Thực hiện kiểm thử chấp nhận người dùng -> Viết test driver -> Lập trình phần mềm."
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Test-Driven Development (TDD) tuân theo nguyên tắc Test-first: viết test case trước, sau đó lập trình mã nguồn để trôi qua (passed) test case đó, rồi mới tái cấu trúc và hoàn thiện theo đặc tả."
    },
    {
      "id": 49,
      "question": "Công ty phần mềm Y phát triển một ứng dụng đọc sách thương mại COTS (Commercial Off-The-Shelf) chạy trên nhiều nền tảng Android và iOS. Để kiểm tra ảnh hưởng của môi trường vận hành thực tế ở phía người dùng, công ty gửi một bản phát hành trước (pre-release) tương đối ổn định cho nhóm khách hàng thân thiết dùng thử và phản hồi lỗi từ nhà của họ. Đây là hình thức kiểm thử gì?",
      "options": [
        "Beta testing (Kiểm thử Beta)",
        "Alpha testing (Kiểm thử Alpha)",
        "Contract acceptance testing (Kiểm thử chấp nhận hợp đồng)",
        "Component testing (Kiểm thử thành phần)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Beta testing thuộc Field testing, được thực hiện bởi người sử dụng đại diện/khách hàng tiềm năng tại chính môi trường vận hành thực tế của khách hàng."
    },
    {
      "id": 50,
      "question": "Một kỹ sư kiểm thử đang phân tích mã nguồn của hàm `calculate_price()` để đo lường tỷ lệ các dòng lệnh (statements) và nhánh quyết định (branches) được thực thi bởi bộ dữ liệu test. Kỹ thuật thiết kế ca kiểm thử này thuộc nhóm nào?",
      "options": [
        "Requirements-based testing (Kiểm thử dựa trên yêu cầu / Hộp đen)",
        "Structure-based testing (Kiểm thử dựa trên cấu trúc / Hộp trắng)",
        "Operational testing (Kiểm thử vận hành)",
        "Random testing (Kiểm thử ngẫu nhiên)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Structure-based testing (White-box) dựa vào phân tích cấu trúc mã chương trình (như câu lệnh, nhánh, luồng dữ liệu) để thiết kế các ca kiểm thử."
    },
    {
      "id": 51,
      "question": "Khi thực hiện kiểm thử một hệ thống IoT kết nối nhà thông minh, kiểm thử viên nhận thấy tài liệu hướng dẫn sử dụng ghi: 'Ấn giữ nút Reset trong 3 giây để đèn LED chớp đỏ và khôi phục cài đặt gốc'. Tuy nhiên khi thao tác thực tế, đèn LED lại sáng xanh liên tục và thiết bị tự khởi động lại ngay lập tức mà không khôi phục cài đặt gốc. Ca kiểm thử này phát hiện sự bất hợp lý thuộc loại kiểm thử phi chức năng nào?",
      "options": [
        "Volume testing (Kiểm thử khối lượng)",
        "Portability testing (Kiểm thử tính di động)",
        "Testing of document compliance (Kiểm thử tính tuân thủ tài liệu với hành vi hệ thống)",
        "Stress testing (Kiểm thử quá tải)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử tính tuân thủ tài liệu kiểm tra xem các tài liệu hệ thống (như hướng dẫn sử dụng, tài liệu hướng dẫn vận hành) có mô tả đúng chính xác hành vi thực tế của phần mềm/thiết bị hay không."
    },
    {
      "id": 52,
      "question": "Nhóm kiểm thử thực hiện đánh giá thành phần mã nguồn `calculate_price()` về chất lượng chú thích (comment quality), cấu trúc mã và tính mô-đun hóa nhằm phục vụ cho việc đọc, hiểu và nâng cấp mã sau này của các nhà phát triển mới. Mục tiêu chính của hoạt động này là gì?",
      "options": [
        "Load testing (Kiểm thử tải)",
        "Performance testing (Kiểm thử hiệu năng)",
        "Checking maintainability (Kiểm tra khả năng bảo trì)",
        "Security testing (Kiểm thử bảo mật)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Kiểm tra khả năng bảo trì đánh giá mức độ dễ/khó trong việc đọc, hiểu, chỉnh sửa và nâng cấp đơn vị chương trình thông qua cấu trúc mã, tính mô-đun và chất lượng chú thích."
    },
    {
      "id": 53,
      "question": "Một kỹ sư QA thực hiện kiểm thử một hệ thống phần mềm quản lý kho hàng. Anh ta chuẩn bị tập dữ liệu đầu vào gồm các file XML chứa 1.000.000 bản ghi đơn hàng để kiểm tra xem cơ sở dữ liệu và hệ thống xử lý ra sao trước khối lượng dữ liệu cực lớn này. Kỹ thuật kiểm thử phi chức năng nào đang được áp dụng?",
      "options": [
        "Statement testing (Kiểm thử câu lệnh)",
        "Usability testing (Kiểm thử tính dễ sử dụng)",
        "Configuration testing (Kiểm thử cấu hình)",
        "Volume testing (Kiểm thử khối lượng)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Volume testing kiểm tra hành vi của hệ thống khi phải xử lý hoặc lưu trữ một khối lượng dữ liệu rất lớn trong cơ sở dữ liệu hoặc qua các tệp tin."
    },
    {
      "id": 54,
      "question": "Vì sao trong thực tế, kiểm thử ở mức thành phần (Component Testing) dù rất thích hợp với kỹ thuật kiểm thử hộp trắng (White-box testing), nhưng người ta vẫn sử dụng phần lớn các kỹ thuật kiểm thử hộp đen (Black-box testing)?",
      "options": [
        "Vì mô hình V-Model cấm sử dụng kỹ thuật hộp trắng ở mức kiểm thử thành phần.",
        "Vì lập trình viên không có quyền truy cập vào mã nguồn của thành phần do chính mình viết ra.",
        "Vì kiểm thử dựa trên đặc tả (hộp đen) giúp đảm bảo thành phần đáp ứng đúng yêu cầu chức năng đầu ra/đầu vào mong đợi, còn kiểm thử hộp trắng đòi hỏi chi phí cao nên chỉ ưu tiên cho các thành phần quan trọng/độ rủi ro cao.",
        "Vì kiểm thử hộp trắng không thể phát hiện được các lỗi tính toán sai hay vi phạm ràng buộc."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Thực tế kiểm thử thành phần kết hợp cả hai, nhưng kiểm thử hộp đen được áp dụng rộng rãi để kiểm tra hành vi vào-ra theo đặc tả thành phần; hộp trắng tốn thời gian nên chỉ tập trung vào các thành phần có ưu tiên và độ rủi ro cao."
    },
    {
      "id": 55,
      "question": "Những kỹ thuật thiết kế ca kiểm thử nào sau đây thuộc nhóm Kỹ thuật dựa trên yêu cầu / Hộp đen (Requirements-based / Black-box testing)? (Chọn các đáp án đúng)",
      "options": [
        "Statement testing (Kiểm thử câu lệnh mã nguồn)",
        "Equivalence partitioning (Phân vùng tương đương)",
        "State transition testing (Kiểm thử chuyển trạng thái)",
        "Boundary value analysis (Phân tích giá trị biên)"
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Phân vùng tương đương thuộc nhóm kỹ thuật thiết kế ca kiểm thử hộp đen dựa trên đặc tả yêu cầu. Kiểm thử chuyển trạng thái dựa trên mô hình trạng thái thuộc nhóm kỹ thuật hộp đen. Phân tích giá trị biên là kỹ thuật kiểm thử hộp đen phổ biến."
    },
    {
      "id": 56,
      "question": "Những kỹ thuật thiết kế ca kiểm thử nào dưới đây thuộc nhóm Kỹ thuật dựa trên cấu trúc / Hộp trắng (Structure-based / White-box testing)? (Chọn các đáp án đúng)",
      "options": [
        "Cause-effect graphing (Đồ thị nguyên nhân - kết quả)",
        "Modified Condition / Decision Coverage (MCDC)",
        "Data flow testing (Kiểm thử dòng dữ liệu)",
        "Branch / Decision testing (Kiểm thử nhánh / quyết định)"
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "MCDC kiểm tra kết hợp các điều kiện đơn trong mã lệnh, thuộc kỹ thuật hộp trắng nâng cao. Kiểm thử dòng dữ liệu theo dõi việc khởi tạo và sử dụng biến trong mã nguồn, thuộc nhóm hộp trắng. Kiểm thử nhánh/quyết định phân tích các nhánh điều kiện trong mã nguồn, thuộc nhóm hộp trắng."
    },
    {
      "id": 57,
      "question": "Trong bối cảnh quản lý dự án phần mềm, những yếu tố nào sau đây ảnh hưởng trực tiếp đến việc lựa chọn chiến lược và mô hình kiểm thử? (Chọn các đáp án đúng)",
      "options": [
        "Khía cạnh văn hóa và cơ cấu tổ chức của đội ngũ phát triển.",
        "Kích thước và quy mô của sản phẩm phần mềm.",
        "Điều kiện môi trường kỹ thuật (ví dụ: phần mềm IoT gồm thiết bị, nền tảng, dịch vụ đa dạng).",
        "Hồ sơ rủi ro sản phẩm và yêu cầu ưu tiên nghiệp vụ (ví dụ: thời gian ra mắt thị trường)."
      ],
      "correctAnswer": [
        0,
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Văn hóa làm việc và sự phân tán địa lý ảnh hưởng đến giao tiếp và phương pháp kiểm thử (ví dụ Agile gặp khó khăn nếu truyền thông kém). Sản phẩm quy mô lớn thường đòi hỏi áp dụng phối hợp nhiều mô hình và quy trình kiểm thử chặt chẽ. Môi trường IoT đa dạng đòi hỏi các cách tiếp cận kiểm thử tích hợp phức tạp cho từng thành phần phần cứng/phần mềm. Mức độ rủi ro và thời hạn ra mắt ảnh hưởng trực tiếp đến độ sâu và thời lượng kiểm thử."
    },
    {
      "id": 58,
      "question": "Những lý do nào sau đây bắt buộc dự án phải thực hiện Kiểm thử hồi quy (Regression testing)? (Chọn các đáp án đúng)",
      "options": [
        "Khi triển khai các bản sửa lỗi khẩn cấp (hotfix).",
        "Khi phần mềm vừa trải qua đợt chỉnh sửa mã nguồn để khắc phục các sai sót (defects).",
        "Khi môi trường vận hành phần mềm có sự thay đổi (ví dụ: nâng cấp hệ điều hành, nâng cấp cơ sở dữ liệu), ngay cả khi chức năng ứng dụng giữ nguyên.",
        "Nhằm mục đích duy nhất là kiểm tra xem lỗi cũ đã sửa thành công hay chưa."
      ],
      "correctAnswer": [
        0,
        1,
        2
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Các bản hotfix gấp gáp dễ gây lỗi tác dụng phụ nên rất cần bộ ca kiểm thử hồi quy nhanh. Sửa lỗi mã nguồn có thể vô tình làm hỏng các đoạn mã liên quan khác, cần chạy kiểm thử hồi quy. Thay đổi môi trường thực thi có thể ảnh hưởng đến hành vi ứng dụng, đòi hỏi kiểm thử hồi quy."
    },
    {
      "id": 59,
      "question": "Các hoạt động nào nằm trong phạm vi của Kiểm thử chấp nhận vận hành (Operational Acceptance Testing - OAT)? (Chọn các đáp án đúng)",
      "options": [
        "Thực hiện chu kỳ Sao lưu và Khôi phục dữ liệu (Backup and Restore).",
        "Quản trị người dùng và phân quyền hệ thống (User management).",
        "So sánh mã nguồn với sơ đồ thiết kế chi tiết thuật toán của lập trình viên.",
        "Thử nghiệm quy trình Khôi phục sau thảm họa (Disaster recovery)."
      ],
      "correctAnswer": [
        0,
        1,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Backup và Restore là nội dung trọng tâm của OAT để đảm bảo an toàn dữ liệu khi sự cố xảy ra. Quản lý người dùng và quyền hạn vận hành thuộc nội dung OAT. Khôi phục thảm họa đảm bảo tính sẵn sàng cao của hệ thống do đội vận hành kiểm tra."
    },
    {
      "id": 60,
      "question": "Nhận định nào sau đây là ĐÚNG về sự khác biệt giữa hai mô hình tuần tự phổ biến: Mô hình Thác nước (Waterfall) và Mô hình chữ V (V-Model)? (Chọn các đáp án đúng)",
      "options": [
        "Mô hình Thác nước cho phép quay lại chỉnh sửa yêu cầu ở bất kỳ thời điểm nào mà không tốn chi phí.",
        "Mô hình chữ V giúp phát hiện các bất hợp lý trong tài liệu yêu cầu và thiết kế sớm hơn so với mô hình Thác nước truyền thống.",
        "Trong Mô hình Thác nước, hoạt động kiểm thử thường diễn ra nối tiếp sau khi toàn bộ giai đoạn phát triển đã hoàn tất.",
        "Mô hình chữ V lập kế hoạch cho các hoạt động kiểm thử song song tương ứng với từng giai đoạn phát triển ngay từ đầu."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Nhờ hoạt động Verification & Validation ở từng mức, V-Model giúp phát hiện sai sót sớm hơn. Thác nước thực hiện các giai đoạn theo thứ tự tuyến tính, kiểm thử đứng ở giai đoạn cuối. Mô hình chữ V gắn kết mỗi mức độ phát triển ở nhánh trái với một mức độ kiểm thử ở nhánh phải."
    },
    {
      "id": 61,
      "question": "Những nguyên tắc nào dưới đây thể hiện một tiếp cận kiểm thử phần mềm hiệu quả và chuyên nghiệp? (Chọn các đáp án đúng)",
      "options": [
        "Đưa kiểm thử và các hoạt động liên quan vào quy trình phát triển càng sớm càng tốt.",
        "Tách rời hoàn toàn kiểm thử viên khỏi giai đoạn phân tích câu chuyện người dùng (user story) để đảm bảo tính khách quan.",
        "Cần lập kế hoạch và thực hiện kiểm thử tương ứng cho từng hoạt động phát triển sản phẩm.",
        "Ngay khi sản phẩm công việc (yêu cầu, tài liệu thiết kế, mã nguồn) được tạo ra, kiểm thử viên cần tham gia sớm và liên tục làm mịn sản phẩm công việc."
      ],
      "correctAnswer": [
        0,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Kiểm thử sớm giúp phát hiện lỗi ngay từ khâu yêu cầu/thiết kế, giảm tối đa chi phí sửa lỗi. Sự tham gia liên tục của tester giúp làm mịn tiêu chí chấp nhận và làm rõ tài liệu."
    },
    {
      "id": 62,
      "question": "Trong mô hình chữ V (V-Model), điểm khác biệt cốt lõi về mặt định nghĩa giữa mức độ 'Thiết kế kỹ thuật' (Technical system design) và 'Đặc tả thành phần' (Component specification) ở nhánh phát triển là gì?",
      "options": [
        "Thiết kế kỹ thuật trực tiếp định nghĩa các tiêu chí kiểm thử chấp nhận; trong khi đặc tả thành phần chỉ phục vụ cho việc lập kế hoạch kiểm thử hệ thống.",
        "Thiết kế kỹ thuật chỉ tập trung vào mã nguồn chương trình; trong khi đặc tả thành phần mô tả tiến trình nghiệp vụ tổng thể của khách hàng.",
        "Thiết kế kỹ thuật ánh xạ các thiết kế chức năng sang kiến trúc, giao diện và cấu trúc dữ liệu lưu trữ; trong khi đặc tả thành phần xác định chi tiết nhiệm vụ, cấu trúc bên trong và giao tiếp của một thành phần cụ thể.",
        "Thiết kế kỹ thuật do người dùng cuối chịu trách nhiệm biên soạn; trong khi đặc tả thành phần do chuyên viên kiểm thử (tester) độc lập xây dựng."
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Thiết kế kỹ thuật định hình kiến trúc chung và giao tiếp dữ liệu, còn đặc tả thành phần đi sâu vào cấu trúc nội bộ và nhiệm vụ cụ thể của từng mô-đun đơn lẻ."
    },
    {
      "id": 63,
      "question": "Theo V-Model, những nhận định nào sau đây là ĐÚNG khi nói về mối quan hệ giữa các hoạt động phát triển ở nhánh trái và các mức độ kiểm thử tương ứng ở nhánh phải?",
      "options": [
        "Kiểm thử hệ thống (System test) đối ứng trực tiếp với hoạt động Lập trình (Programming) chi tiết.",
        "Kiểm thử thành phần (Component test) xác minh các thành phần đơn lẻ thỏa mãn đặc tả được định nghĩa ở bước Đặc tả thành phần (Component specification).",
        "Kiểm thử tích hợp (Integration test) kiểm tra xem các nhóm thành phần có tương tác với nhau theo đúng đặc tả của Thiết kế kỹ thuật (Technical system design) hay không.",
        "Kiểm thử chấp nhận (Acceptance test) kiểm tra xem toàn bộ hệ thống có tuân thủ các tiêu chí chấp nhận đã thỏa thuận tại bước Định nghĩa yêu cầu (Requirements definition) hay không."
      ],
      "correctAnswer": [
        1,
        2,
        3
      ],
      "type": "multiple",
      "image": null,
      "explanation": "Kiểm thử thành phần đối ứng trực tiếp với mức đặc tả chi tiết nội bộ của thành phần đó. Kiểm thử tích hợp phản ánh đúng mức độ trừu tượng của thiết kế kỹ thuật (kiến trúc và giao diện giữa các mô-đun). Kiểm thử chấp nhận đánh giá sản phẩm dựa trên yêu cầu ban đầu của khách hàng và người dùng."
    },
    {
      "id": 64,
      "question": "Đặc điểm quan trọng nhất của 'Kiểm thử chấp nhận hợp đồng' (Contract acceptance testing) là gì?",
      "options": [
        "Áp dụng cho sản phẩm dành riêng cho một khách hàng, trong đó tiêu chí kiểm thử là các tiêu chí chấp nhận được xác định và phát biểu tường minh trong hợp đồng.",
        "Do các lập trình viên thực hiện nhằm kiểm tra tính đúng đắn của thuật toán bên trong mã nguồn.",
        "Là quá trình kiểm thử ngẫu nhiên không cần tài liệu hay kịch bản định trước.",
        "Chỉ tập trung vào việc đo lường dung lượng bộ nhớ chiếm dụng trên máy chủ của nhà phát triển."
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Kiểm thử chấp nhận hợp đồng dựa trực tiếp vào các điều khoản và tiêu chí chấp nhận đã ký kết pháp lý trong hợp đồng phần mềm theo yêu cầu (customer-specific)."
    },
    {
      "id": 65,
      "question": "Cho các nhận định sau về mô hình V-Model trong kiểm thử phần mềm:\n(1) Nhánh bên trái của V-Model đại diện cho các hoạt động phát triển từ mức trừu tượng cao đến thấp, kết thúc bằng việc lập trình.\n(2) Nhánh bên phải của V-Model định nghĩa các mức độ kiểm thử tương ứng phản ứng lại mức độ phát triển ở nhánh bên trái.\n(3) Kiểm thử thành phần (Component test) ở nhánh bên phải được thiết kế đối ứng với đặc tả thiết kế kỹ thuật (Technical system design).\n(4) Hoạt động kiểm thử chấp nhận (Acceptance test) kiểm tra xem hệ thống có tuân thủ các tiêu chí chấp nhận của khách hàng dựa trên đặc tả yêu cầu (Requirements definition).\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (4)",
        "(1), (2), (3), (4)",
        "(1), (3), (4)",
        "(2), (3), (4)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Các phát biểu (1), (2) và (4) phản ánh chính xác cấu trúc và mối tương quan trong V-Model, trong khi phát biểu (3) sai vì kiểm thử thành phần đối ứng với đặc tả thành phần (Component specification) chứ không phải thiết kế kỹ thuật."
    },
    {
      "id": 66,
      "question": "Cho các nhận định về kiểm thử trong các mô hình phát triển phần mềm tuần tự:\n(1) Trong mô hình thác nước, hoạt động kiểm thử diễn ra liên tục song song trong suốt quá trình phát triển mã nguồn.\n(2) Mô hình chữ V thể hiện rõ việc tích hợp quy trình kiểm thử vào vòng đời phát triển phần mềm.\n(3) Trong V-Model, cài đặt và kiểm thử là hai hoạt động phân biệt nhưng có giá trị và vai trò quan trọng ngang nhau.\n(4) Mỗi mức độ kiểm thử trong V-Model đều có thể bao gồm các hoạt động xác minh (Verification) và thẩm định (Validation).\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (3)",
        "(1), (2), (4)",
        "(1), (3), (4)",
        "(2), (3), (4)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": ""
    },
    {
      "id": 67,
      "question": "Cho các nhận định sau về kiểm thử trong mô hình phát triển lặp và tăng trưởng (bao gồm Agile):\n(1) Phát triển phần mềm linh hoạt (Agile) là một trường hợp đặc biệt của mô hình lặp và tăng trưởng.\n(2) Do các bản phát hành trong Agile được tạo ra trong chu kỳ rất ngắn, việc tự động hóa kiểm thử trở nên cần thiết khi số lượng test cases tăng lên theo thời gian.\n(3) Trong phát triển tăng trưởng, các test cases kiểm thử thành phần phải được thiết kế sao cho dễ dàng lặp lại và áp dụng ngay cho vòng tăng trưởng mới.\n(4) Kiểm thử trong Agile chỉ thực hiện kiểm thử hệ thống ở cuối dự án mà không cần tái sử dụng các test cases thành phần cũ.\nCác nhận định đúng là:",
      "options": [
        "(1), (3), (4)",
        "(1), (2), (4)",
        "(2), (3), (4)",
        "(1), (2), (3)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Các nhận định (1), (2), (3) thể hiện đúng tinh thần Agile đòi hỏi kiểm thử thích ứng với chu kỳ ngắn, tái sử dụng test case và tự động hóa; nhận định (4) sai vì Agile yêu cầu liên tục tái sử dụng và kiểm thử ở mọi vòng tăng trưởng."
    },
    {
      "id": 68,
      "question": "Cho các nhận định về tính chất của một cách tiếp cận kiểm thử hiệu quả trong dự án phần mềm:\n(1) Hoạt động kiểm thử nên được đưa vào quy trình phát triển càng sớm càng tốt.\n(2) Phân tích cơ sở kiểm thử (test basis) và thiết kế các trường hợp kiểm thử nên bắt đầu sau khi toàn bộ mã nguồn đã được viết xong.\n(3) Cần lập kế hoạch và thực hiện kiểm thử phù hợp cho mỗi hoạt động phát triển sản phẩm.\n(4) Kiểm thử viên cần tham gia sớm và liên tục trong quá trình làm mịn các sản phẩm công việc (yêu cầu, user story, tài liệu thiết kế...).\nCác nhận định đúng là:",
      "options": [
        "(1), (3), (4)",
        "(1), (2), (3)",
        "(1), (2), (4)",
        "(2), (3), (4)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (2) sai vì phân tích cơ sở kiểm thử và thiết kế test case phải bắt đầu ngay trong giai đoạn phát triển tương ứng chứ không chờ đến khi hoàn thành toàn bộ mã nguồn."
    },
    {
      "id": 69,
      "question": "Cho các nhận định sau về Kiểm thử thành phần (Component testing):\n(1) Thành phần (Component) là đơn vị nhỏ nhất bên trong kiến trúc phần mềm có thể được kiểm tra độc lập.\n(2) Cơ sở kiểm thử (Test basis) của kiểm thử thành phần là đặc tả thành phần (Component specification).\n(3) Mục tiêu chính của kiểm thử thành phần là phát hiện các sai sót trong giao tiếp và sự tương tác giữa các nhóm thành phần tích hợp.\n(4) Kiểm thử thành phần tập trung kiểm tra một thành phần riêng lẻ để phát hiện các lỗi bên trong từng thành phần đó.\nCác nhận định đúng là:",
      "options": [
        "(1), (3), (4)",
        "(1), (2), (4)",
        "(2), (3), (4)",
        "(1), (2), (3)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (3) là mục tiêu của kiểm thử tích hợp (Integration testing), trong khi các phát biểu (1), (2), (4) định nghĩa chính xác bản chất và mục tiêu của kiểm thử thành phần."
    },
    {
      "id": 70,
      "question": "Cho các nhận định về môi trường kiểm thử và công cụ trong kiểm thử thành phần:\n(1) Test driver là một thành phần phần mềm hoặc công cụ kiểm tra đảm nhận việc điều khiển và/hoặc gọi thành phần được kiểm thử.\n(2) Các nhà phát triển (Dev) thường viết test driver vì họ là người hiểu rõ nhất mã nguồn và giao diện của thành phần.\n(3) Kiểm thử thành phần hoàn toàn đồng nhất và không có sự khác biệt nào với quá trình gỡ lỗi (Debugging).\n(4) Có các framework như JUnit, NUnit hỗ trợ nhà phát triển thực hiện kiểm thử tự động ở mức thành phần.\nCác nhận định đúng là:",
      "options": [
        "(2), (3), (4)",
        "(1), (2), (4)",
        "(1), (2), (3)",
        "(1), (3), (4)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Tài liệu chỉ rõ kiểm thử thành phần thường bị nhầm lẫn nhưng bản chất khác với gỡ lỗi (debugging), do đó nhận định (3) sai; các phát biểu (1), (2), (4) hoàn toàn chính xác."
    },
    {
      "id": 71,
      "question": "Cho các nhận định về Kiểm thử biên mạnh (Robustness testing) ở mức thành phần:\n(1) Kiểm thử biên mạnh nhằm đảm bảo thành phần không bị truy cập hoặc sử dụng không đúng với đặc tả của nó.\n(2) Robustness tests chỉ đánh giá kết quả của thành phần dựa trên tập dữ liệu đầu vào hoàn toàn hợp lệ.\n(3) Các trường hợp kiểm thử đánh giá phản ứng của thành phần trên dữ liệu đầu vào không hợp lệ hoặc phát sinh ngoại lệ được gọi là negative test cases.\n(4) Việc truyền một giá trị niêm yết âm (`baseprice < 0`) vào hàm tính giá xe `calculate_price()` là một ví dụ về negative test case.\nCác nhận định đúng là:",
      "options": [
        "(1), (3), (4)",
        "(1), (2), (3)",
        "(1), (2), (4)",
        "(2), (3), (4)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (2) sai vì kiểm thử biên mạnh tập trung đánh giá kết quả trên các đầu vào KHÔNG hợp lệ hoặc điều kiện môi trường áp lực."
    },
    {
      "id": 72,
      "question": "Cho các nhận định về kiểm thử tính hiệu quả (Efficiency testing) và khả năng bảo trì (Maintainability testing) ở mức thành phần:\n(1) Kiểm thử tính hiệu quả đo lường các yếu tố như bộ nhớ chiếm dụng, thời gian tính toán, thời gian truy cập mạng và độ phức tạp thuật toán.\n(2) Kiểm thử khả năng bảo trì đánh giá mức độ dễ hay khó trong việc đọc, viết, hiểu và nâng cấp mã nguồn của thành phần.\n(3) Cấu trúc mã nguồn, tính module hóa và chất lượng comment là các khía cạnh được xem xét trong kiểm thử khả năng bảo trì.\n(4) Kiểm thử tính hiệu quả chỉ có thể thực hiện ở mức kiểm thử hệ thống chứ không áp dụng được ở mức thành phần.\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (4)",
        "(2), (3), (4)",
        "(1), (2), (3)",
        "(1), (3), (4)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì kiểm thử tính hiệu quả vẫn được áp dụng đối với các phần quan trọng ở mức thành phần khi đặc tả yêu cầu rõ ràng."
    },
    {
      "id": 73,
      "question": "Cho các nhận định về chiến lược kiểm thử thành phần và phương pháp Test-first (TDD):\n(1) Mặc dù kỹ thuật hộp trắng phù hợp với kiểm thử thành phần, nhưng trong thực tế hầu hết kiểm thử thành phần lại là kiểm thử hộp đen.\n(2) Kiểm thử hộp trắng thường chỉ áp dụng cho một số thành phần được lựa chọn có độ ưu tiên cao hoặc đòi hỏi tính chính xác lớn.\n(3) Trong tiếp cận Test-first (như TDD), lập trình viên hoàn thiện toàn bộ mã nguồn trước rồi mới viết các test cases để kiểm tra.\n(4) Tiếp cận Test-first đòi hỏi viết test cases trước, tạo mã nguồn để vượt qua test cases đó, sau đó tiến hóa tập test cases để hoàn thiện yêu cầu.\nCác nhận định đúng là:",
      "options": [
        "(1), (3), (4)",
        "(1), (2), (3)",
        "(2), (3), (4)",
        "(1), (2), (4)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (3) mô tả sai quy trình Test-first/TDD; bản chất của TDD là viết ca kiểm thử trước khi viết mã chương trình."
    },
    {
      "id": 74,
      "question": "Cho các nhận định sau về Kiểm thử tích hợp (Integration testing):\n(1) Kiểm thử tích hợp được thực hiện tốt nhất sau khi đã kiểm thử thành phần và các lỗi ở mức thành phần đã được sửa chữa.\n(2) Kiểm thử tích hợp tập trung làm lộ ra các sai sót trong giao tiếp và sự tương tác giữa các thành phần được tích hợp.\n(3) Cơ sở kiểm thử (Test basis) của kiểm thử tích hợp bao gồm thiết kế hệ thống, kiến trúc hệ thống, workflows và use cases.\n(4) Kiểm thử tích hợp chỉ quan tâm đến logic nội bộ bên trong một hàm mà bỏ qua các giao diện liên kết.\nCác nhận định đúng là:",
      "options": [
        "(2), (3), (4)",
        "(1), (3), (4)",
        "(1), (2), (3)",
        "(1), (2), (4)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì logic nội bộ bên trong một hàm thuộc phạm vi của kiểm thử thành phần, trong khi kiểm thử tích hợp tập trung vào giao diện và sự tương tác giữa các đơn vị."
    },
    {
      "id": 75,
      "question": "Cho các nhận định về Kiểm thử hệ thống (System testing):\n(1) Kiểm thử hệ thống được thực hiện sau khi hoàn tất kiểm thử tích hợp nhằm đảm bảo toàn bộ hệ thống thỏa mãn các yêu cầu được đặc tả.\n(2) Đối tượng kiểm thử của kiểm thử hệ thống là hệ thống hoàn chỉnh sẵn sàng chạy vận hành.\n(3) Mặc dù thực hiện trong môi trường của nhà phát triển, môi trường kiểm thử hệ thống nên sát nhất với môi trường thực thi thực tế.\n(4) Kiểm thử hệ thống chỉ đánh giá các chức năng nghiệp vụ (functional) và không bao gồm các khía cạnh phi chức năng (non-functional).\nCác nhận định đúng là:",
      "options": [
        "(2), (3), (4)",
        "(1), (2), (4)",
        "(1), (3), (4)",
        "(1), (2), (3)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì kiểm thử hệ thống bắt buộc phải bao gồm cả kiểm thử chức năng và kiểm thử phi chức năng."
    },
    {
      "id": 76,
      "question": "Cho các nhận định sau về Kiểm thử chấp nhận (Acceptance testing):\n(1) Kiểm thử chấp nhận tập trung vào quan điểm của khách hàng và người sử dụng trước khi sản phẩm được cài đặt thực tế.\n(2) Mức độ kiểm thử chấp nhận bao nhiêu là đủ phụ thuộc hoàn toàn vào rủi ro sản phẩm.\n(3) Cơ sở kiểm thử chấp nhận bao gồm các tài liệu mô tả từ quan điểm người dùng/khách hàng như use cases, quy trình nghiệp vụ, báo cáo, luật lệ...\n(4) Kiểm thử chấp nhận sự chấp nhận người dùng (UAT) là loại kiểm thử chấp nhận duy nhất tồn tại trong thực tế dự án.\nCác nhận định đúng là:",
      "options": [
        "(1), (3), (4)",
        "(1), (2), (3)",
        "(2), (3), (4)",
        "(1), (2), (4)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì kiểm thử chấp nhận còn bao gồm nhiều loại khác như kiểm thử chấp nhận hợp đồng, kiểm thử chấp nhận vận hành (OAT) và kiểm thử thực địa."
    },
    {
      "id": 77,
      "question": "Cho các nhận định về Kiểm thử chấp nhận vận hành (Operational Acceptance Testing - OAT) và UAT:\n(1) UAT được thực hiện như là pha cuối cùng của quá trình thẩm định (Validation) với sự tham gia của khách hàng và người dùng cuối.\n(2) Trong UAT, các ca kiểm thử thường được tổ chức dựa trên tiến trình nghiệp vụ hoặc các kịch bản sử dụng điển hình.\n(3) Kiểm thử chấp nhận vận hành (OAT) nhằm đảm bảo các quản trị viên hệ thống (System administrators) chấp nhận hệ thống.\n(4) Khôi phục sau thảm họa, chu kỳ Sao lưu/Khôi phục dữ liệu và quản trị người dùng thuộc nội dung của UAT chứ không liên quan tới OAT.\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (4)",
        "(1), (2), (3)",
        "(1), (3), (4)",
        "(2), (3), (4)"
      ],
      "correctAnswer": 1,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì sao lưu/khôi phục, phục hồi thảm họa và quản trị người dùng chính là các nội dung trọng tâm thuộc về Kiểm thử chấp nhận vận hành (OAT)."
    },
    {
      "id": 78,
      "question": "Cho các nhận định về Kiểm thử thực địa (Field testing - Alpha và Beta testing):\n(1) Kiểm thử thực địa được áp dụng khi phần mềm chạy trong nhiều môi trường vận hành khác nhau (ví dụ hệ thống COTS như Windows).\n(2) Alpha testing là hình thức kiểm thử thực địa được thực hiện ở nơi sản xuất (phía nhà phát triển).\n(3) Beta testing là hình thức kiểm thử thực địa được thực hiện ở phía khách hàng bởi người sử dụng đại diện.\n(4) Cả Alpha testing và Beta testing đều bắt buộc phải do chính các lập trình viên dự án trực tiếp đóng vai người dùng và thực hiện tại công ty.\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (3)",
        "(2), (3), (4)",
        "(1), (2), (4)",
        "(1), (3), (4)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì kiểm thử thực địa được thực hiện bởi các người sử dụng đại diện hoặc khách hàng tiềm năng, và Beta testing diễn ra tại phía khách hàng."
    },
    {
      "id": 79,
      "question": "Cho các nhận định sau về các loại kiểm thử phi chức năng (Non-functional testing):\n(1) Performance testing đo tốc độ xử lý và thời gian phản hồi cho các trường hợp sử dụng cụ thể.\n(2) Load testing đo lường hành vi của hệ thống khi gia tăng tải (ví dụ tăng số người truy cập đồng thời).\n(3) Stress testing quan sát hành vi của hệ thống khi hệ thống bị rơi vào trạng thái quá tải.\n(4) Volume testing kiểm tra khả năng phòng chống tấn công từ chối dịch vụ (DDoS) của hệ thống.\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (3)",
        "(2), (3), (4)",
        "(1), (3), (4)",
        "(1), (2), (4)"
      ],
      "correctAnswer": 0,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì kiểm tra tấn công từ chối dịch vụ thuộc Security testing; còn Volume testing là quan sát hành vi hệ thống phụ thuộc vào khối lượng dữ liệu xử lý (ví dụ file dung lượng lớn)."
    },
    {
      "id": 80,
      "question": "Cho các nhận định về các kỹ thuật kiểm thử phi chức năng khác:\n(1) Stability/Reliability testing đánh giá khả năng vận hành liên tục qua các chỉ số như thời gian trung bình giữa các lần lỗi (MTBF).\n(2) Configuration testing kiểm tra hệ thống trên các phiên bản hệ điều hành, ngôn ngữ người dùng hoặc nền tảng phần cứng khác nhau.\n(3) Usability testing đánh giá tính dễ dùng, dễ học và dễ hiểu đầu ra hệ thống đối với các nhóm người dùng chuyên biệt.\n(4) Kiểm thử việc cấu hình hệ thống trên nhiều môi trường phần cứng/hệ điều hành khác nhau (Configuration testing) còn được gọi là White-box testing.\nCác nhận định đúng là:",
      "options": [
        "(2), (3), (4)",
        "(1), (3), (4)",
        "(1), (2), (3)",
        "(1), (2), (4)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì kiểm thử các cấu hình khác nhau của hệ thống được gọi là Back-to-back testing chứ không phải White-box testing."
    },
    {
      "id": 81,
      "question": "Cho các nhận định về Kiểm thử dựa trên yêu cầu (Requirements-based) và Kiểm thử dựa trên cấu trúc (Structure-based):\n(1) Kiểm thử dựa trên yêu cầu là kiểm thử dựa trên đặc tả, sử dụng các kỹ thuật thiết kế hộp đen (Black-box techniques).\n(2) Phân vùng tương đương (Equivalence partitioning) và Phân tích giá trị biên (Boundary value analysis) là các kỹ thuật thuộc kiểm thử dựa trên yêu cầu.\n(3) Kiểm thử dựa trên cấu trúc là kiểm thử dựa trên mã nguồn, sử dụng các kỹ thuật thiết kế hộp trắng (White-box techniques).\n(4) Kiểm thử dòng dữ liệu (Data flow testing) và Kiểm thử câu lệnh (Statement testing) là các kỹ thuật kiểm thử hộp đen dựa trên đặc tả yêu cầu.\nCác nhận định đúng là:",
      "options": [
        "(2), (3), (4)",
        "(1), (3), (4)",
        "(1), (2), (3)",
        "(1), (2), (4)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì Data flow testing và Statement testing là các kỹ thuật hộp trắng (White-box) dựa trên cấu trúc mã nguồn."
    },
    {
      "id": 82,
      "question": "Cho các nhận định về bối cảnh dự án và sản phẩm ảnh hưởng tới cách tiếp cận kiểm thử:\n(1) Mục tiêu nghiệp vụ và thời gian ra mắt thị trường (Time to market) có ảnh hưởng đến việc lựa chọn ưu tiên kiểm thử.\n(2) Các sản phẩm phần mềm kích thước lớn thường yêu cầu áp dụng kết hợp nhiều mô hình quy trình phát triển và kiểm thử.\n(3) Phần mềm IoT gồm nhiều đối tượng (thiết bị, nền tảng) phát triển theo nhiều mô hình vòng đời khác nhau sẽ gặp khó khăn khi cập nhật phiên bản mới.\n(4) Văn hóa tổ chức và đội ngũ phát triển đa quốc gia hoàn toàn không gặp bất kỳ khó khăn truyền thông nào khi áp dụng Agile.\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (4)",
        "(1), (3), (4)",
        "(2), (3), (4)",
        "(1), (2), (3)"
      ],
      "correctAnswer": 3,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì tài liệu nêu rõ đội phát triển cộng tác đa quốc gia có thể gặp khó khăn trong công tác truyền thông khi áp dụng mô hình Agile."
    },
    {
      "id": 83,
      "question": "Cho các nhận định sau về các kỹ thuật thuộc nhóm Kiểm thử dựa trên cấu trúc (White-box testing):\n(1) Kiểm thử câu lệnh (Statement testing) và Kiểm thử nhánh/quyết định (Branch/Decision testing) là các kỹ thuật dựa trên cấu trúc.\n(2) MC/DC (Modified condition decision testing) là một kỹ thuật thuộc nhóm kiểm thử hộp đen dựa trên yêu cầu đặc tả.\n(3) Kiểm thử chuỗi mã tuyến tính và nhảy (Linear Code Sequence and Jump testing - LCSAJ) là kỹ thuật kiểm thử dựa trên cấu trúc.\n(4) Kiểm thử dòng dữ liệu (Data flow testing) thuộc nhóm kỹ thuật dựa trên cấu trúc mã nguồn.\nCác nhận định đúng là:",
      "options": [
        "(2), (3), (4)",
        "(1), (2), (4)",
        "(1), (3), (4)",
        "(1), (2), (3)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (2) sai vì MC/DC là kỹ thuật kiểm thử hộp trắng (White-box / Structure-based) tiên tiến dựa trên cấu trúc mã nguồn."
    },
    {
      "id": 84,
      "question": "Cho các nhận định về thứ tự và bản chất của các mức độ kiểm thử trong V-Model:\n(1) Nhánh bên phải của V-Model sắp xếp các mức kiểm thử theo thứ tự từ thấp đến cao: Component test -> Integration test -> System test -> Acceptance test.\n(2) Integration test kiểm tra đảm bảo các nhóm thành phần tương tác với nhau theo đúng đặc tả của thiết kế kỹ thuật (Technical system design).\n(3) System test kiểm tra xem toàn bộ hệ thống có hoạt động theo đúng đặc tả thiết kế chức năng / yêu cầu hệ thống hay không.\n(4) Tất cả các mức độ kiểm thử trong V-Model có thể tiến hành cùng lúc ngay lập tức mà không cần phân biệt cấp độ trừu tượng hay thứ tự phát triển.\nCác nhận định đúng là:",
      "options": [
        "(1), (2), (4)",
        "(2), (3), (4)",
        "(1), (2), (3)",
        "(1), (3), (4)"
      ],
      "correctAnswer": 2,
      "type": "single",
      "image": null,
      "explanation": "Nhận định (4) sai vì các mức độ kiểm thử là phân biệt, phản ánh các mức độ phát triển tương ứng và xử lý các sản phẩm công việc ở các mức độ trừu tượng khác nhau."
    }
  ]
};
