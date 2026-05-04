import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./footer.css"
function Footer() {
    return (
        <div className="Footer">
            <div className="footernav">
                <div className="footericon">
                       <img src="https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-vector-illustration_500223-481.jpg" alt="" />

                    <h2>CLOTHING STORE</h2>
                </div>
            </div>
           <div className="footersosial">
           
            <h2> CLOTHING STORE SOSIAL</h2>
           <div className="fottericons">
            <p> <FaSquareXTwitter /></p>
           <p> <FaInstagram /></p>
           <p> <FaGithub /></p>
           </div>
           </div>
           <div className="footercontact">
            <h2>CONTACT</h2>
            <p>Phone:+994 412 12 12</p>
            <p>Email:ehmedehmedli@gmail.com</p>
            <p>Unvan:Bakı şəhəri Əhmədli küçəsi</p>
           </div>
           {/* <div className="end">
              © 2026 Your Brand. All rights reserved.
           </div> */}
        </div>
    )
}
export default Footer;