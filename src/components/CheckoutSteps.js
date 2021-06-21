import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="container checkout-steps">
      <div className={props.step1 ? 'active' : ''}>登入</div>
      <div className={props.step2 ? 'active' : ''}>運送</div>
      <div className={props.step3 ? 'active' : ''}>付款</div>
      <div className={props.step4 ? 'active' : ''}>下單</div>
    </div>
  );
}
