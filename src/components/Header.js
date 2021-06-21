import NavBar from "./NavBar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import CartSummary from "./CartSummary";
import { Button } from 'antd';



export default function Header() {
        return (
       
       <div className="header">
            <div className="header-left">
                <NavBar />
            </div>
            <div className="header-right">
                <Button 
                    className="header-button"
                    type="link" 
                    icon={<FaFacebookSquare 
                    size="100%" /> }
                    href="https://www.facebook.com/lunroom86/"/>
                <Button 
                    className="header-button"
                    type="link" 
                    icon={<FaInstagram 
                    size="100%" /> }
                    href="https://www.instagram.com/lun_dessert/?hl=zh-tw"/>
                <Button 
                    className="header-button"
                    type="link" 
                    icon={<AiOutlineUser 
                    size="100%" /> }/>
                <Button 
                    className="header-button"
                    type="link" 
                >
                <CartSummary />
                </Button>
                {/* <Button 
                    className="header-button"
                    type="link" 
                    icon={<AiOutlineShoppingCart 
                    size="100%" /> }/> */}
            </div>
        </div>
    );
}


