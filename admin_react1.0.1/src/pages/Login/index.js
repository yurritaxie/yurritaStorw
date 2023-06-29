import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,message} from 'antd';
import { useDispatch } from 'react-redux';
import {getUserInfo} from '../../store/reducers/loginReducer'
import {getUserToken} from '../../store/reducers/navListReducer'
import {Loginpost} from '../../http/api/Login'
import { useNavigate } from 'react-router-dom';
import './index.scss'

function Login(){
    let dispatch=useDispatch()
    let navigate=useNavigate()
    const onFinish = (values) => {
    //发送登录请求
        Loginpost('/login',values).then(res=>{
            if(res.code===200){
                //将用户名和密码存在全局状态中
                dispatch(getUserInfo(values))
                //将token存储在本地
                sessionStorage.setItem('token',res.token)
                dispatch(getUserToken(res.token))
                //提示用户登录成功
                message.success('登录成功');
                navigate('/',{replace:true})
            }else{
                message.error('网络错误');
            }
        })
      }

    return (
    <div id='login'>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: '用户名是必填项!',
                },
                ]}
                >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名：admin or user" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: '密码是必填项!',
                },
                ]}
            >
                <Input.Password 
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="current-password"
                placeholder="密码：123456 or 666666"
                autoComplete='on'
                />
            </Form.Item>
            <Form.Item>
                <Form.Item valuePropName="checked" noStyle>
                    <Checkbox>自动登录</Checkbox>
                    <div className='forgetpsw'>忘记密码？</div>
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                   登录
                </Button>
            </Form.Item>
        </Form>
    </div>
    )
}

export default Login
