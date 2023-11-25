import React from "react";
import  "../Css/footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Thông Tin Chung</h4>
            <ul className="list-unstyled">
              <li>Giới thiệu về CellphoneY</li>
              <li>Tin tức</li>
              <li>Tuyển dụng</li>
            </ul>
          </div>
          {/* 2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Hỗ Trợ Khách Hàng</h4>
            <ul className="list-unstyled">
              <li>Hướng dẫn mua hàng trực tuyến</li>
              <li>Hướng dẫn thanh toán</li>
              <li>Tra cứu bảo hành</li>
            </ul>
          </div>
          {/* 3 */}
          <div className="col-md-3 col-sm-6">
            <h4>Chính Sách Chung</h4>
            <ul className="list-unstyled">
              <li>Chính sách vận chuyển</li>
              <li>Chính sách bảo hành</li>
              <li>Bảo mật thông tin khách hàng</li>
            </ul>
          </div>
          {/* 4 */}
          <div className="col-md-3 col-sm-6">
            <h4>Tổng Đài Hỗ Trợ</h4>
            <ul className="list-unstyled">
              <li>
                <i class="fa-solid fa-fax"></i> Hà Nội: 0815.91.2222
              </li>
              <li>
                <i class="fa-solid fa-fax"></i> Đà Nẵng: 0886.22.8638
              </li>
              <li>
                <i class="fa-solid fa-fax"></i> Hồ Chí Minh: 0815.67.8888
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <b className=" text-xs-center">
            {" "}
            &copy;{new Date().getFullYear()} Bản Quyền Thuộc Về Công Ty - XT
            Capital
          </b>
        </div>
      </div>
    </div>
  );
}

export default Footer;
