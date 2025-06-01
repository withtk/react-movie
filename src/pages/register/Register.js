import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, Row, Col, Alert } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { FORM_SIZES, BUTTON_TYPES, FORM_LAYOUTS, STYLES, ROUTES } from '../../utils/constants';

const { Title } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    setError('');
    
    // 여기에서 실제 회원가입 API 호출
    console.log('회원가입 요청 데이터:', values);
    
    // 임시 회원가입 처리 (실제로는 API 호출)
    setTimeout(() => {
      setLoading(false);
      // 회원가입 성공 시 로그인 페이지로 이동
      navigate(ROUTES.LOGIN, { state: { message: '회원가입이 완료되었습니다. 로그인해주세요.' } });
    }, 1500);
  };

  const cardStyle = {
    maxWidth: STYLES.CARD.MAX_WIDTH,
    margin: STYLES.CARD.MARGIN,
    borderRadius: STYLES.CARD.BORDER_RADIUS,
    boxShadow: STYLES.CARD.BOX_SHADOW
  };

  const formStyle = {
    padding: STYLES.FORM.PADDING
  };

  const buttonGroupStyle = {
    display: STYLES.BUTTON_GROUP.DISPLAY,
    justifyContent: STYLES.BUTTON_GROUP.JUSTIFY_CONTENT,
    marginTop: STYLES.BUTTON_GROUP.MARGIN_TOP
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: STYLES.ROW.MIN_HEIGHT }}>
      <Col xs={22} sm={20} md={16} lg={12}>
        <Card style={cardStyle}>
          <Title level={2} style={{ textAlign: STYLES.TITLE.TEXT_ALIGN, marginBottom: STYLES.TITLE.MARGIN_BOTTOM }}>
            회원가입
          </Title>
          
          {error && <Alert message={error} type="error" showIcon style={{ marginBottom: STYLES.ALERT.MARGIN_BOTTOM }} />}
          
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout={FORM_LAYOUTS.VERTICAL}
            style={formStyle}
          >
            <Form.Item
              name="username"
              label="이름"
              rules={[{ required: true, message: '이름을 입력해주세요' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="이름" 
                size={FORM_SIZES.CUSTOM}
              />
            </Form.Item>
            
            <Form.Item
              name="email"
              label="이메일"
              rules={[
                { required: true, message: '이메일을 입력해주세요' },
                { type: 'email', message: '유효한 이메일 주소를 입력해주세요' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="이메일" 
                size={FORM_SIZES.CUSTOM}
              />
            </Form.Item>
            
            <Form.Item
              name="phone"
              label="전화번호"
              rules={[
                { required: true, message: '전화번호를 입력해주세요' },
                { pattern: /^[0-9]{10,11}$/, message: '올바른 전화번호 형식을 입력해주세요' }
              ]}
            >
              <Input 
                prefix={<PhoneOutlined />} 
                placeholder="전화번호 (- 없이 입력)" 
                size={FORM_SIZES.CUSTOM}
              />
            </Form.Item>
            
            <Form.Item
              name="password"
              label="비밀번호"
              rules={[
                { required: true, message: '비밀번호를 입력해주세요' },
                { min: 6, message: '비밀번호는 최소 6자 이상이어야 합니다' }
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="비밀번호" 
                size={FORM_SIZES.CUSTOM}
              />
            </Form.Item>
            
            <Form.Item
              name="confirmPassword"
              label="비밀번호 확인"
              dependencies={['password']}
              rules={[
                { required: true, message: '비밀번호 확인을 입력해주세요' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('비밀번호가 일치하지 않습니다'));
                  },
                }),
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="비밀번호 확인" 
                size={FORM_SIZES.CUSTOM}
              />
            </Form.Item>

            <div style={buttonGroupStyle}>
              <Button type={BUTTON_TYPES.DEFAULT}>
                <Link to={ROUTES.LOGIN}>로그인 페이지로 돌아가기</Link>
              </Button>
              <Button type={BUTTON_TYPES.PRIMARY} htmlType="submit" loading={loading}>
                가입하기
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
