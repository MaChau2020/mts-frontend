import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import requests from '../../../services/requests';
import '../Authority.scss';
import { actions } from '../../../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    this.tailLayout = {
      wrapperCol: { offset: 6, span: 16 },
    };
  }

  handleSubmit = (data) => {
    const request = requests.login;
    const params = Object.keys(data).map((key) => (`${key}=${data[key]}`)).join('&');
    const url = encodeURI(`${request.url}?${params}`);
    // fetch(url, { method: requests.method })
    //   .then((response) => response.json())
    //   .then((results) => {
    //     console.log(results);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // mock login
    sessionStorage.setItem('userName', 'MaChau');
    sessionStorage.setItem('userType', 'admin');
    this.props.onAuthChange();
    this.props.history.push('/home');
  };

  handleReject = () => {};

  render() {
    return (
      <Form
        className="login-form"
        {...this.layout}
        onFinish={this.handleSubmit}
        onFinishFailed={this.handleReject}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }, {
            validator: (rule, value, callback) => {
              const regExp = /^[a-zA-Z0-9_]*$/g;
              if (!regExp.test(value)) callback('用户名格式错误');
              else callback();
            },
          }]}
        >
          <Input maxLength={20} />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password maxLength={20} />
        </Form.Item>
        <Form.Item
          {...this.tailLayout}
          valuePropName="checked"
          name="role"
        >
          <Checkbox>以管理员身份登录</Checkbox>
        </Form.Item>
        <Form.Item {...this.tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  onAuthChange: actions.onAuthChange,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Login));