var tree = {
    father: { 
        value: "<div class='shape' style='background-color: #dafff1; color: #000000; text-align:center;'>\
                    <b>CEO</b><br/>\
                    <span>bùi văn ninh</span>\
                </div>", 
        parent: ""  
    },
    lva1: { 
    value: "<div class='shape' style='background-color: #66e869; color: #7f2126;'>\
                    <b>bộ phận marketing</b><br/>\
                    <span></span>\
                </div>", 
    parent: "father" 
    },
    lvb1a1: { 
            value: "<div class='shape' style='background-color: #fffdc5; color: #ff0909;'>\
                        <b>Quản trị web</b><br/>\
                        <span></span>\
                    </div>", 
            parent: "lva1" 
    },
    lvc1b1: {
        value: "<div class='shape' style='background-color: #e1801f; color: #ffffff;'>\
                    <b>Leader SEO</b><br/>\
                    <span>Trần Việt</span>\
                </div>",
        parent: "lvb1a1"
    },
    lvd1c1: {
        value: "<div class='shape' style='background-color: #fbd5c0; color: #2678ea;'>\
                    <b>Phó Leader SEO</b><br/>\
                    <span>Phát Nguyễn</span>\
                </div>",
        parent: "lvc1b1"
    },
    lve1d1: {
        value: "<div class='shape' style='background-color: #dbfff5; color: #fd3280;'>\
                    <b>Coder</b><br/>\
                    <span>Hữu Duy</span>\
                </div>",
        parent: "lvd1c1"
    },
    lvf1e1: {
        value: "<div class='shape' style='background-color: #dbfff5; color: #fd3280;'>\
                    <b>Coder</b><br/>\
                    <span>Nghĩa</span>\
                </div>",
        parent: "lve1d1"
    },
    lvg1f1: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Chỉnh sửa thông tin</b><br/>\
                    <span>A.Cường</span>\
                </div>",
        parent: "lvf1e1"
    },
    lvh1g1: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Editor</b><br/>\
                    <span>Trọng</span>\
                </div>",
        parent: "lvg1f1"
    },
    lve2d1: {
        value: "<div class='shape' style='background-color: #dbfff5; color: #fd3280;'>\
                    <b>Leader Content</b><br/>\
                    <span>Ngọc Hương</span>\
                </div>",
        parent: "lvd1c1"
    },
    lvf1e2: {
        value: "<div class='shape' style='background-color: #dbfff5; color: #fd3280;'>\
                    <b>CSKH</b><br/>\
                    <span>Lương Hải</span>\
                </div>",
        parent: "lve2d1"
    },
    lvItemf1e21: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Content</b><br/>\
                    <span>Đậm</span>\
                </div>",
        parent: "lvf1e2"
    },
    lvItemf1e22: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Content</b><br/>\
                    <span>Đậm</span>\
                </div>",
        parent: "lvItemf1e21"
    },
    lvItemf1e23: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Content</b><br/>\
                    <span>hà</span>\
                </div>",
        parent: "lvItemf1e22"
    },
    lvItemf1e24: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Content</b><br/>\
                    <span>Uyên</span>\
                </div>",
        parent: "lvItemf1e23"
    },
    lvItemf1e25: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Content</b><br/>\
                    <span>Nhung</span>\
                </div>",
        parent: "lvItemf1e24"
    },
    lvItemf1e26: {
        value: "<div class='shape' style='background-color: #bfe4ff; color: #000000;'>\
                    <b>Content</b><br/>\
                    <span>Như Trân</span>\
                </div>",
        parent: "lvItemf1e25"
    },
    lvb2a1: { 
        value: "<div class='shape' style='background-color: #fffdc5; color: #ff0909;'>\
                    <b>Phòng kinh doanh</b><br/>\
                    <span></span>\
                </div>", 
    parent: "lva1" 
    },
    lvc1b2: {
        value: "<div class='shape' style='background-color: #0058aa; color: #ffffff;'>\
                    <b>Trưởng Phòng kinh doanh</b><br/>\
                    <span>Đạo Hoàng Lân</span>\
                </div>",
        parent: "lvb2a1"
    },
    lvdPhoPhonngKinhDoanh: {
        value: "<div class='shape' style='background-color: #22a9ff; color: #ffffff;'>\
                    <b>Phó Phòng kinh doanh</b><br/>\
                    <span>Bảo Ngọc</span>\
                </div>",
        parent: "lvc1b2"
    },
    lvdNhanVienMap: {
        value: "<div class='shape' style='background-color: #ffeef8; color: #0168f1;'>\
                    <b>Nhân viên Maps</b><br/>\
                    <span>Phạm Quỳnh</span>\
                </div>",
        parent: "lvdPhoPhonngKinhDoanh"
    },
    lva2: { 
        value: "<div class='shape' style='background-color: #66e869; color: #7f2126;'>\
                        <b>bộ phận</b><br/>\
                        <b>hành chính - nhân sự</b>\
                    </div>", 
        parent: "father" 
    },
    lvTaiChinh: {
        value: "<div class='shape' style='background-color: #dbfff6; color: #fc1a19;'>\
                        <b>Tài chính</b><br/>\
                        <b>Diễm My</b>\
                    </div>",
        parent: "lva2"
    },
    lvKeToanTongHop: {
        value: "<div class='shape' style='background-color: #e4f8ff; color: #0168f1;'>\
                        <b>Kế toán tổng hợp</b><br/>\
                        <b>Diễm Quỳnh</b>\
                    </div>",
        parent: "lvTaiChinh"
    },
    lva3: { 
        value: "<div class='shape' style='background-color: #66e869; color: #7f2126;'>\
                        <b>bộ phận celler center</b><br/>\
                        <b></b>\
                    </div>", 
        parent: "father" 
    },
    lvTruongPhongQuanLi: {
        value: "<div class='shape' style='background-color: #fffdc5; color: #ff0000;'>\
                        <b>Trưởng phòng quản lí và kiểm soát chất lượng</b><br/>\
                        <b>Anh Hùng Cường</b>\
                    </div>",
        parent: "lva3"
    },
    lvQuanliVivu: {
        value: "<div class='shape' style='background-color: #e4f8ff; color: #207cf3;'>\
                        <b>Quản lí Vivutoday</b><br/>\
                        <b>Huyền Tâm</b>\
                    </div>",
        parent: "lvTruongPhongQuanLi"
    },
    lvItemvivu1: {
        value: "<div class='shape' style='background-color: #ff3d00; color: #ffffff;'>\
                        <b>Kim yến</b><br/>\
                        <b></b>\
                    </div>",
        parent: "lvQuanliVivu"
    },
    lvItemvivu3: {
        value: "<div class='shape' style='background-color: #ff3d00; color: #ffffff;'>\
                        <b>Bích Trâu</b><br/>\
                        <b></b>\
                    </div>",
        parent: "lvItemvivu1"
    },
    lvItemvivu2: {
        value: "<div class='shape' style='background-color: #ff3d00; color: #ffffff;'>\
                        <b>Huyền Ngân</b><br/>\
                        <b></b>\
                    </div>",
        parent: "lvQuanliVivu"
    },
    lvItemvivu4: {
        value: "<div class='shape' style='background-color: #ff3d00; color: #ffffff;'>\
                        <b>Bích Trân</b><br/>\
                        <b></b>\
                    </div>",
        parent: "lvItemvivu2"
    },
    lvQuanGoilaco: {
        value: "<div class='shape' style='background-color: #e4f8ff; color: #207cf3;'>\
                        <b>Quản lí Goilaco</b><br/>\
                        <b>Mỹ Linh</b>\
                    </div>",
        parent: "lvTruongPhongQuanLi"
    },
    lvQuanTechwise: {
        value: "<div class='shape' style='background-color: #e4f8ff; color: #207cf3;'>\
                        <b>Quản lí Techwise</b><br/>\
                        <b>Ngọc Thư</b>\
                    </div>",
        parent: "lvTruongPhongQuanLi"
    },
    lvQuanOnline: {
        value: "<div class='shape' style='background-color: #e4f8ff; color: #207cf3;'>\
                        <b>Quản lí Online</b><br/>\
                        <b>kim Chi</b>\
                    </div>",
        parent: "lvTruongPhongQuanLi"
    },
};

TreeData(tree, "#element");