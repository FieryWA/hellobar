import React from 'react';
import { Form, Input, Button } from 'antd';
import style from '../styles/form-page.less';

const FormItem = Form.Item;
const InputGroup = Input.Group;

const formLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 12
  }
};

class FormPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style.loginform}>
        <Form.Item label="DT/SRC/REF.NO:" {...formLayout}>
          {getFieldDecorator('1', {
            rules: [{ required: true, message: 'Please input!' }],
          })(
            <InputGroup compact>
              <Input style={{ width: '30%' }} />
              <Input style={{ width: '30%' }} />
              <Input style={{ width: '40%' }} />
            </InputGroup>,
          )}
        </Form.Item>
        <Form.Item label="請求書番号:" {...formLayout}>
          {getFieldDecorator('2', {
            rules: [{ required: true, message: 'Please input!' }],
          })(
            <Input/>,
          )}
        </Form.Item>
        <Form.Item label="請求先:" {...formLayout}>
          {getFieldDecorator('3', {
            rules: [{ required: true, message: 'Please input!' }],
          })(
            <Input/>,
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className={style.loginbutton}>
            検索する
        </Button>
      </Form>
    );
  }
}

FormPage = Form.create()(FormPage);

export default FormPage;
