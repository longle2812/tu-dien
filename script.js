document.getElementById("check").addEventListener("click",check);
function check () {
        let eng = ['time','year','people','way','day','man','thing','woman','life','child','world','school','state','family','student','group','country','problem','hand','part','place','case','week','company','system','program','question','work','government','number','night','point','home','water','room','mother','area','money','story','fact','month','lot','right','study','book','eye','job','word','business','issue','side','kind','head','house','service','friend','father','power','hour','game','line','end','member','law','car','city','community','name','president','team','minute','idea','kid','body','information','back','parent','face','others','level','office','door','health','person','art','war','history','party','result','change','morning','reason','research','girl','guy','moment','air','teacher','force','education','dick'];
        let vn = [' thời gian',' năm',' con người',' con đường',' ngày',' đàn ông',' sự vật',' phụ nữ',' cuộc sống',' con cái',' thế giới',' trường học',' trạng thái',' gia đình',' học sinh',' nhóm',' đất nước',' vấn đề',' bàn tay',' bộ phận',' vị trí',' trường hợp',' tuần',' công ty',' hệ thống','chương trình',' câu hỏi',' công việc',' chính phủ',' con số',' ban đêm',' điểm',' nhà',' nước',' căn phòng',' mẹ',' khu vực',' tiền bạc',' câu chuyện',' sự thật',' tháng',' từng phần',' quyền lợi',' học tập',' cuốn sách',' mắt',' nghề nghiệp',' từ',' kinh doanh',' vấn đề',' khía cạnh',' loại',' đầu',' ngôi nhà',' dịch vụ',' người bạn',' cha',' năng lượng',' giờ',' trò chơi',' vạch kẻ',' kết thúc',' thành viên',' luật pháp',' xe hơi',' thành phố',' cộng đồng',' tên gọi',' chủ tịch',' nhóm, đội',' phút',' ý tưởng',' trẻ con',' cơ thể',' thông tin',' phía sau',' phụ huynh',' gương mặt',' những cái khác',' cấp bậc',' văn phòng',' cánh cửa',' sức khỏe',' con người',' nghệ thuật',' chiến tranh',' lịch sử',' bữa tiệc',' kết quả',' thay đổi',' buổi sáng',' lý do',' nghiên cứu',' cô gái',' chàng trai',' hiện tại',' không khí',' giáo viên',' lực lượng',' giáo dục','con ciu'];
        let index ="a";
        let input = document.getElementById("input").value;
        searchEnglish ();
        translate ();

        function searchEnglish() {
            index = eng.indexOf(input);
        }

        function translate () {
            if (index != -1) {
                document.getElementById("result").innerHTML = (vn[index]);
            } else document.getElementById("result").innerHTML = ("Không có trong từ điển");
        }
}