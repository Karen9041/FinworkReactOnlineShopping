import { Row, Col } from "antd";
import LOGO from '../img/logo.jpg'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Introduction() {
    return (
        <div className="Intro">
            <div className="Intro-block block1">
                <img
                    alt="LOGO"
                    src={LOGO}
                    className="Intro-LOGO"
                />
                <div className="Intro-info">
                    <h1 className="Intro-name">
                        工典甜點
                    </h1>
                    <h3 className="Intro-slogan">
                        我是黃郁倫，我只做好貨
                    </h3>
                </div>
                <Link to={`/AllProducts`} className="product-link">
                    <Button 
                        className="Intro-Button"
                        ghost
                        >
                        全部商品
                    </Button>
                </Link>
            </div>
            <div className="Intro-block block2">
                <Row>
                    <Col flex={4} className="Intro-text">
                        <div className="Intro-text-a">
                            <h1 className="Intro-text-title-a">
                                我是黃郁倫
                            </h1>
                            <h3 >
                                我有5件事情想跟你說，分別是：
                            </h3>
                            <br></br>
                            <h3>
                                1. 黑貓運送蛋糕時的保護措施
                            </h3>
                            <h3>
                                2. 如何讓你的冰箱冰的下收到的蛋糕
                            </h3>
                            <h3>
                                3. 蛋糕使用的原料
                            </h3>
                            <h3>
                                4. 關於蛋糕的價錢
                            </h3>
                            <h3>
                                5. 我給你的承諾
                            </h3>
                        </div>
                    </Col>
                    <Col flex={8} className="Intro-selfie-a">
                    </Col>
                </Row>
            </div>
            <div className="Intro-block block3">
                <Row>
                    <Col flex={5} className="Intro-selfie-b">
                    </Col>
                    <Col flex={3} className="Intro-text">
                        <div className="Intro-text-b">
                            <h3 className="Intro-text-title-b1">
                                黑貓運送蛋糕時的保護措施
                            </h3>
                            <br></br>
                            <p>
                                就像照片你看到的這樣，漂亮的包裝加上綁好緞帶，直接送到你<br/>
                                手上，看起來很不可思議，但是因為我做過無數次的實驗。
                            </p>
                            <p>
                                外箱的厚版設計，還有內箱塞了防撞和吸震包材，可以把蛋糕保<br/>
                                護的很好，然後由黑貓宅配安全送到你手上，這件事你可以放心<br/>
                                交給我。
                            </p>
                            <br></br>
                            <h3 className="Intro-text-title-b2">
                                如何讓你的冰箱冰的下收到的蛋糕
                            </h3>
                            <br></br>
                            <p>
                                綁上緞帶的這整個黑色盒子，尺寸為長24cmx寬24cmx高25cm，<br/>
                                而裡面的蛋糕有用透明防撞內盒裝，大約為6吋大。
                            </p>
                            <p>
                                所以你收到之後，可以先拆開綁上緞帶的這整個黑色盒子，只冰<br/>
                                透明防撞內盒，這樣就可以解決冰箱冰不下的問題，然後等真正<br/>
                                要慶祝的時候，再放回黑色盒子，綁上緞帶就可以，也請不要擔<br/>
                                心，綁緞帶很簡單，比想像中的容易很多。
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="Intro-block block4">
                <Row>
                    <Col flex={4} className="Intro-text">
                         <div className="Intro-text-c">
                            <h3 className="Intro-text-title-c1">
                                蛋糕使用的原料
                            </h3>
                            <br></br>
                            <p>
                                水果都有季節性，例如 : 愛文芒果、荔枝、水蜜桃等等，<br/>
                                時間到了，就會停止接單，等到這些水果在隔年最好吃<br/>
                                的季節到來時，我會再次上架，你只要有空留意一下IG<br/>
                                的公告訊息即可。<br/>
                                只要在官網你買的到的商品，都是經過我把關，是最美<br/>
                                味的狀態。
                            </p>
                            <br></br>
                            <h3 className="Intro-text-title-c2">
                                關於蛋糕的價錢
                            </h3>
                            <br></br>
                            <p>
                                所有蛋糕和點心，都不會降價，也沒有特賣優惠。
                            </p>
                            <p>
                                原因就是我都買好的原料來做蛋糕（蛋糕內頁有寫使<br/>
                                用的原料牌子），所以整個蛋糕價格相對就會高，也<br/>
                                沒有降價空間，但是當有特別的傳統大節慶，我會推<br/>
                                出新禮盒，以優惠加價購的方式推出，以感謝老顧客<br/>
                                的支持。<br/>
                                或是有非常特殊的蛋糕新品上架時，我會在IG上公告<br/>
                                現金優惠碼，在限時的時間內可以使用優惠碼(約7-9<br/>
                                天)，除此之外，商品不會有其他的折扣優惠。
                            </p>
                        </div>
                    </Col>
                    <Col flex={9} className="Intro-selfie-c">
                    </Col>
                </Row>
            </div>
            <div className="Intro-block block5">
                <Row>
                    <Col flex={5} className="Intro-selfie-d">
                    </Col>
                    <Col flex={3} className="Intro-text">
                        <div className="Intro-text-c">
                            <h3 className="Intro-text-title-d">
                                我給你的承諾
                            </h3>
                            <br></br>
                            <p>
                                你會買我的蛋糕來送人或是慶祝，那個人在你心中一定是<br/>
                                很重要的人，光憑這一點，我保證繃緊神經，讓自己處於<br/>
                                完全專注的狀態，做出最完美的作品給你，這關係到我個<br/>
                                人名譽，也代表我對你的重視。
                            </p>
                            <br></br>
                            <br></br>
                            <h3 >
                                &nbsp;最後，謝謝你喜歡我的作品，我也很喜歡。
                            </h3>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}