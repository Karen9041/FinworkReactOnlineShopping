import NavBar from "./NavBar";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Button } from 'antd';



export default function Header() {
    return (
       
       <div className="header">
            <div className="header-left">
                <Button 
                    type="link" 
                    icon={<FaBars 
                    size="100%" /> }/>
            </div>
            <div className="header-right">
                <Button 
                    type="link" 
                    icon={<FaFacebookSquare 
                    size="100%" /> }
                    href="https://www.facebook.com/lunroom86/"/>
                <Button 
                    type="link" 
                    icon={<FaInstagram 
                    size="100%" /> }
                    href="https://www.instagram.com/lun_dessert/?hl=zh-tw"/>
                <Button 
                    type="link" 
                    icon={<AiOutlineUser 
                    size="100%" /> }/>
                <Button 
                    type="link" 
                    icon={<AiOutlineShoppingCart 
                    size="100%" /> }/>
            </div>
            {/* <NavBar /> */}
        </div>
    );
}


