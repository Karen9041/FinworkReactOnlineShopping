
import CheckoutSteps from "./CheckoutSteps";

export default function ShippingHeader(props) {

  return (
    <header className="CheckoutSteps">
      <h1 className="Plist-title">-結帳-</h1>
      <CheckoutSteps {...props}></CheckoutSteps>
    </header>
  );
}
