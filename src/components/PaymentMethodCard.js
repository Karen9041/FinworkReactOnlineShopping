import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Radio, Button } from "antd";
import { savePaymentMethod } from "../actions"
import { StoreContext } from "../store";

export default function PaymentMethodCard() {
   const { state: { cart: { paymentMethod } }, dispatch } = useContext(StoreContext);
   const history = useHistory()
   const [form] = Form.useForm();

   const handleSubmit = (values) => {
      savePaymentMethod(dispatch, values);
      history.push('/placeorder');
   };

   return (
      <Form
         onFinish={handleSubmit}
         name="normal_login"
         className="register-form paymentMethod-block"
         initialValues={{paymentMethod}}
         form={form}
      >

         <Form.Item  name="paymentMethod" label="付款方式: ">
            <Radio.Group className="paymentMethod-group">
               <Radio value="Google"><p className="paymentMethod-select">Google</p></Radio>
               <Radio value="PayPal"><p className="paymentMethod-select">PayPal</p></Radio>
               <Radio value="Line"><p className="paymentMethod-select">Line</p></Radio>
            </Radio.Group>
         </Form.Item>

         <Form.Item>
            <Button
               type="primary"
               htmlType="submit"
               className="login-form__button"
            >
              <h3>繼續</h3>
        </Button>
         </Form.Item>
      </Form>
   );
}

