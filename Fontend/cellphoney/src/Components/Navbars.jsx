import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/cellphoney.png";
import  "../Css/logo.css";

function Navbars() {
  return (
    <div className="1">
      <Navbar bg="primary" data-bs-theme="light" className="navbar">
        <Container>
          <img className="logo" src={logo} alt="" />
          <Navbar.Brand className="size" href="home">
            Trang chủ
          </Navbar.Brand>
          <input type="text" className="search" placeholder="Bạn Cần Tìm Gì?" />
          <button className="btnserch">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <Nav className="me-auto">
            <Nav.Link className="size" href="#home">
              <i class="fa-solid fa-list"></i> Danh mục
              {/* <DropdownButton id="dropdown-basic-button" title=" Danh mục">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton> */}
            </Nav.Link>
            <Nav.Link className="size" href="#features">
              <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng
            </Nav.Link>
            <Nav.Link className="size" href="login">
              <i class="fa-solid fa-user"></i>  Đăng nhập
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;


