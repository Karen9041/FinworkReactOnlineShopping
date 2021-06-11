import LOGO from '../img/logo.jpg'

export default function Footer() {
    return (
        <footer className="footer">
            <img
                    alt="LOGO"
                    src={LOGO}
                    className="Footer-LOGO"
                />
            <p></p>
            <p>
                我是黃郁倫，我只做好貨
            </p>
        </footer>           
    );
}