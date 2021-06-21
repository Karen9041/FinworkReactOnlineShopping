import React, {useContext, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { checkLogin, loginToFirebase, rememberLoginUser } from '../actions'
import { StoreContext } from "../store"

const LoginCard = ({ redirect }) => {
  const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await loginToFirebase(dispatch, values);
  };

  const onChange = e => {
    rememberLoginUser(dispatch, e.target.checked);
  }

  useEffect(() => {    
    if( userInfo && checkLogin(dispatch) ) history.push(redirect);
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="Login">
      <h1 className="Plist-title">-會員登入-</h1>
      <Form
        name="normal_login"
        className="login-form"
        // layout="horizontal"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h3 className="login-inputtitle">帳號</h3>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "請輸入帳號",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="E-Mail"
            className="login-input"
          />
        </Form.Item>
        <h3 className="login-inputtitle">密碼</h3>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "請輸入密碼",
            },
          ]}
          hasFeedback
          
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="passwrd"
            placeholder="Password"
            className="login-input"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
              name="remember"
              noStyle
          >
            <Checkbox onChange={onChange} checked={remember}>
              <p className="login-form__remember">記住我</p>
            </Checkbox>
          </Form.Item>
          <Link className="login-form__forgot" to={"/"}>
            <p>忘記密碼？</p>
          </Link>
          <Link className="login-form__regist" to={"/register"}>
            <p>前往註冊</p>
          </Link>
        </Form.Item>
        <Form.Item>
          {loading ? (
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form__button"
              loading
            >
              <h3>登入</h3>
            </Button>
          ) : (
            <Button 
            type="primary" 
            htmlType="submit" 
            className="login-form__button"
            >
              <h3>登入</h3>
            </Button>
          )}
          {error === "" ? (
            <></>
          ) : (
            <div className="login-form__error-wrap">
              <h3 className="login-form__error-title">
                <WarningOutlined className="site-form-item-icon" />
                {"  "}再確認一次吧？
              </h3>
              <p className="login-form__error-message">{error}</p>
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginCard;
