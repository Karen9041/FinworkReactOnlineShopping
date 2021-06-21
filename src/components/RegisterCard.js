import { Link, useHistory } from "react-router-dom";
import React, {useContext} from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { registerToFirebase } from '../actions'
import { StoreContext } from "../store"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const RegisterCard = () => {
  const { state:{ userRegister: { loading, error } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const user = await registerToFirebase(dispatch, values);
    user && history.push("/profile");
  };
 
   return (
    <div className="Register">
      <h1 className="Plist-title">-會員註冊-</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        className="register-form"
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="您的名字"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "請輸入您的名字",
              whitespace: true,
            },
          ]}
        >
          <Input className="register-input register-input--fixed"/>
        </Form.Item>
        <Form.Item
          name="email"
          label="帳號E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "請輸入您的E-mail",
            },
          ]}
        >
          <Input className="register-input register-input--fixed"/>
        </Form.Item>

        <Form.Item
          name="password"
          label="密碼"
          rules={[
            {
              required: true,
              message: "請輸入您的密碼",
            },
          ]}
          hasFeedback
        >
          <Input.Password className="register-input"/>
        </Form.Item>

        <Form.Item
          name="rePassword"
          label="確認密碼"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "請再次輸入您的密碼",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password className="register-input"/>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("請閱讀完後勾選")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox className="register-reminder">
           我已經閱讀 <Link to={"/"} className="register-reminder">同意書</Link>
         </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
        {loading ? (
            <Button
              type="primary"
              className="register-form__button"
              htmlType="submit"
              loading
            >
              <h3>建立帳號</h3>
            </Button>
          ) : (
            <Button
              type="primary"
              className="register-form__button"
              htmlType="submit"
            >
              <h3>建立帳號</h3>
            </Button>
        )}
          <p className="register-reminder">已經是會員了嗎？{" "}  
            <Link to={"/login?redirect=shipping"} className="register-reminder">登入</Link>
          </p>
          {error === "" ? (
           <></>
         ) : (
           <div className="login-form__error-wrap">
             <h3 className="login-form__error-title">
               <WarningOutlined className="site-form-item-icon" />
               {"  "}There was a problem
             </h3>
             <p className="login-form__error-message">{error}</p>
           </div>
         )}
        </Form.Item>
      </Form>
     </div>
   );
};
export default RegisterCard;
