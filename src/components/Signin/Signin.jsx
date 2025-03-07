import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import './Signin.css'

const Signin = ({ onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMail, setErrorMail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmailEmpty = !email.trim()
        const isPasswordEmpty = !password.trim()

        setErrorMail(isEmailEmpty)
        setErrorPassword(isPasswordEmpty)

        if (isEmailEmpty || isPasswordEmpty) {
            return
        }

        onSubmit({ email, password })
    }

    return (
        <form className='signin' onSubmit={handleSubmit}>
            <section>
                <InputField
                    type="email"
                    label="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введите ваш email"
                    disabled={false}
                    description="Это обязательное поле"
                    name="auth-email"
                    radius="5px"
                    asterisk={true}
                    error={errorMail}
                    size='sm'
                />
            </section>
            <section>
                <InputField
                    type="password"
                    label="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите ваш пароль"
                    disabled={false}
                    description="Это обязательное поле"
                    name="auth-password"
                    radius="5px"
                    asterisk={true}
                    error={errorPassword}
                    size='sm'
                />
            </section>
            <button type="submit">Войти</button>
        </form>
    )
}

export default Signin