import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { saveShippingAddress } from "../actions"
import { StoreContext } from "../store";

export default function ShippingAddressCard() {
  const { state: { cart: { shippingAddress } }, dispatch } = useContext(StoreContext);
  const history = useHistory()
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    saveShippingAddress(dispatch, values)
    history.push('/payment');
  };

  return (
    <div className="shipping">
        <Form
          onFinish={handleSubmit}
          name="normal_login"
          className="shipping-form"
          initialValues={shippingAddress}
          form={form}
        >
          <Form.Item
            label="姓名: "
            name="fullName"
            rules={[
              {
                type: "string",
              },
              {
                required: true,
                message: "欄位不可空白",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          <Form.Item
            label="地址: "
            name="address"
            rules={[
              {
                type: "string",
              },
              {
                required: true,
                message: "欄位不可空白",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Address" />
          </Form.Item>
          <Form.Item
            label="郵遞區號: "
            name="postalCode"
            rules={[
              {
                required: true,
                message: "欄位不可空白",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter postalCode" />
          </Form.Item>

          <Form.Item
            label="電子郵件: "
            name="Email"
            rules={[
              {
                required: true,
                message: "欄位不可空白",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            label="手機號碼: "
            name="phone"
            rules={[
              {
                required: true,
                message: "欄位不可空白",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter phone" />
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
    </div>
  );
  
}

