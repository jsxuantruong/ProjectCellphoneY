import React from "react";
import "../Css/menutop.css";
import Carousel from "react-bootstrap/Carousel";
import banner from'../assets/images/banner-bottom.png'
export default function MenuTop() {
  return (
    <div className="main-menu">
      <div className="container">
        <div className="row">
          <div className="menu-right">
            {/*  */}
            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
                <li>
                  <i class="fa-solid fa-mobile-screen-button"></i> Điện thoại,
                  Tablet
                </li>
                <li>
                  <i class="fa-solid fa-laptop"></i> Laptop
                </li>
                <li>
                  <i class="fa-solid fa-headphones"></i> Âm thanh
                </li>
                <li>
                  <i class="fa-solid fa-camera"></i> Đồng hồ, Camera
                </li>
                <li>
                  <i class="fa-solid fa-house-signal"></i> Gia dụng, Smarthome
                </li>
                <li>
                  <i class="fa-brands fa-usb"></i> Phụ kiện
                </li>
                <li>
                  <i class="fa-solid fa-computer"></i> Pc, Màn hình
                </li>
                <li>
                  <i class="fa-solid fa-tv"></i> Tivi
                </li>
                <li>
                  <i class="fa-solid fa-file-invoice-dollar"></i> Thu cũ đổi mới
                </li>
                <li>
                  <i class="fa-solid fa-arrow-right-arrow-left"></i> Hàng cũ
                </li>
                <li>
                  <i class="fa-regular fa-bell"></i> Khuyến mại
                </li>
                <li>
                  <i class="fa-regular fa-newspaper"></i> Tin công nghệ
                </li>
              </ul>
            </div>
          </div>

          {/*  */}
          <div className="col">
            <Carousel>
              <Carousel.Item interval={1500}>
                <img
                  className="img"
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/khai-truong-pthiet-sliding-th10.jpg"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="img" src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/xiaomi-13t-sliding-0004-giamngay.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="img"
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/s23-ultra-th10-sli.png"
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>
          {/*  */}
          <div className="col">
            
              <img
                className="img-banner"
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/iphone-15-sliding-hs-07102023-cuoituan.png"
                alt=""
              />
              <img
                className="img-banner"
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/ipad-102-th9-001231-11.png"
                alt=""
              />
              <img
                className="img-banner"
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/asus%20vivobook%20oled.jpg"
                alt=""
              />
          
          </div>
          <img className="img-bottom" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}
