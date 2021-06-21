import { useContext } from "react";
import { Row, Col, Spin } from "antd";
import { InputNumber } from "antd";
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";
import { LoadingOutlined } from '@ant-design/icons';


function ProductDetail( ) {
   const { state: { productDetail: { product, qty}, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
   const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;
   return (
      <div className="PDetail">
         {loading
            ? (
               <div className="spinner-wrap">
                  <Spin indicator={antIcon} className="spinner" />
               </div>
            ) : (
               <Row 
                  className="Pdetail-row"
                  >
                  <Col
                     
                     lg={{ span: 12 }}
                  >
                     <img
                        alt=""
                        className="product-image animate__animated animate__fadeIn"
                        src={product.image}
                     />
                  </Col>
                  <Col
                     lg={{ span: 12 }}
                  >
                     <div className="product-info--detail animate__animated animate__fadeIn animate__delay-1s">
                        <p className="product-id">
                           商品編號：{product.id}
                        </p>
                        <h3 className="product-name">
                           {product.name}
                        </h3>
                        
                        <h3 className="product-price">
                           {product.currency}
                           &nbsp;&nbsp; ${product.price}
                        </h3>
                        <div className="product-reminder">
                        <h3 className="product-reminder--underline">
                           運送 & 付款：
                        </h3>
                        <p>&nbsp;運送方式：<br/>&nbsp;&nbsp; 黑貓(星期一、日無法到貨)</p>
                        <p>&nbsp;付款方式：<br/>&nbsp;&nbsp; 信用卡ATM 虛擬帳號</p>
                        </div>
                        <div className="product-qty">
                           <h3 className="product-qty--underline">
                              數量：
                           </h3>
                           <InputNumber
                              className="product-qty--input"
                              defaultValue={qty}
                              value={qty}
                              max={product.countInStock} 
                              onChange={val => setProductDetail(dispatch, product.id, val)}
                           />
                        </div>       
                        <div className="product-button">
                           <AddToCart />   
                        </div>         
                     </div>
                  </Col>
               </Row>
            )
         }
         <Row
         className="Pdetail-row"
         gutter={[0, 32]}
         >
            <Col className="PDetail-Description--a">
               <h3 className="PDetail-Description--title">商品介紹</h3>
               <div className="PDetail-Description--textA">
                  <h3>{product.name}</h3>
                  <p>{product.description_partA}</p>
                  <p>{product.description_partB}</p>
                  <p>我是黃郁倫，我只做好貨。</p>
               </div>
            </Col>
         </Row>
         <Row
         className="Pdetail-row"
         gutter={[0, 32]}
         >
            <Col className="PDetail-Description--b">
               <h3 className="PDetail-Description--title">商品規格</h3>
               <div className="PDetail-Description--textB">
                  <h3>1. 尺寸</h3>
                  <p>{product.size}</p>
                  <p>{product.ifvg}</p>
                  <h3>2. 原料</h3>
                  <p>{product.ingredients}</p>
                  <p>{product.alert}</p>
               </div>
            </Col>
         </Row>
         <Row
         className="Pdetail-row"
         gutter={[0, 32]}
         >
            <Col className="PDetail-Description--a">
               <h3 className="PDetail-Description--title">注意事項</h3>
               <div className="PDetail-Description--textA">
                  <h3 className="PDetail-Description--notification">
                     1.冷凍配送，冷凍保存
                  </h3>
                  <p className="PDetail-Description--notitext">
                     食用前請冷藏7-8小時，到貨日起算可保存5天
                     <br/>(可依食用習慣自行調整)</p>
                  <h3 className="PDetail-Description--notification">
                     2.不提供退單服務
                  </h3>
                  <p className="PDetail-Description--notitext">
                     你訂購付款後，我就會採購原料，所以沒有辦法提供退單服務
                     <br/>(可依食用習慣自行調整)</p>
                  <h3 className="PDetail-Description--notification">
                     3.不提供餐具
                  </h3>
                  <p className="PDetail-Description--notitext">
                     因為限塑政策，所以沒有免費提供刀具、餐盤、蠟燭</p>
                  <h3 className="PDetail-Description--notification">
                     4.單筆訂單滿NT.1000免運費
                  </h3>
                  <h3 className="PDetail-Description--notification">
                     5.蛋糕包裝
                  </h3>
                  <p className="PDetail-Description--notitext">
                     因為宅配運送關係，盒內會有透明防撞內盒(大小約為6吋)
                     <br/>為防止碰撞，不含金色紙盤及品牌插卡
                     <br/>請注意蛋糕沾黏內盒為正常現象，垂直拿起蓋子即可不碰撞到上層擠花</p>
                  <h3 className="PDetail-Description--notification">
                     【如何讓你的冰箱冰的下收到的蛋糕】
                  </h3>
                  <p className="PDetail-Description--notitext">
                     綁上緞帶的這整個黑色盒子尺寸為長24cmx寬24cmx高25cm，而裡面的蛋糕有用透明防撞內盒裝大約為6吋大，所以你收到之後可以先拆開綁上緞帶的這整個黑色盒子，只冰透明防撞內盒
                     <br/>這樣就可以解決冰箱冰不下的問題</p>
                  <p className="PDetail-Description--notitext">
                     然後等真正要慶祝的時候，再放回黑色盒子綁上緞帶就可以
                     <br/>也請不要擔心，綁緞帶很簡單，比你想像中的容易很多</p>
               </div>
            </Col>
         </Row>
      </div>
   );
}

export default ProductDetail;