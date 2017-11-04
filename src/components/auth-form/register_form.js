import React, {Component} from 'react';
import AuthForm from './auth-form.js';

class RegisterForm extends Component {

    render() {
        return (
            <AuthForm>
                <input type="text" name="login" placeholder="Введите игровой логин *"/>
                <input type="text" name="nickname" placeholder="Введите форумный псевдоним *"/>
                <input type="text" name="email" placeholder="Введите ваш email *"/>
                <input type="password" name="password" placeholder="Введите ваш пароль *"/>

                <button className="button">Зарегистрироваться</button>
            </AuthForm>
        );
    }
}

export default RegisterForm;
