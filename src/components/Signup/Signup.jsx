import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import './Signup.css'

const Signup = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [nameError, setNameError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [genderError, setGenderError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const comparePasswords = () => {        
        return password === confirmPassword
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isNameEmpty = !name.trim()
        const isUsernameEmpty = !username.trim()
        const isEmailEmpty = !email.trim()
        const isGenderEmpty = !gender.trim()
        const isPasswordEmpty = !password.trim()
        const isConfirmPasswordEmpty = !confirmPassword.trim()
        const isComparePassword = !comparePasswords()

        setNameError(isNameEmpty)
        setUsernameError(isUsernameEmpty)
        setEmailError(isEmailEmpty)
        setGenderError(isGenderEmpty)
        setPasswordError(isPasswordEmpty)
        setConfirmPasswordError(isConfirmPasswordEmpty)

        if (isNameEmpty || isUsernameEmpty || isEmailEmpty || isGenderEmpty || isConfirmPasswordEmpty || isComparePassword) {
            return
        }

        onSubmit({ name, username, email, gender, password, confirmPassword })
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <section>
                <InputField
                    type="text"
                    label="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите ваше имя"
                    disabled={false}
                    description="Это обязательное поле"
                    name="name"
                    radius="5px"
                    asterisk={true}
                    error={nameError}
                    size='sm'
                />
            </section>
            <section>
                <InputField
                    type="text"
                    label="Ник"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Введите ваш ник"
                    disabled={false}
                    description="Это обязательное поле"
                    name="username"
                    radius="5px"
                    asterisk={true}
                    error={usernameError}
                    size='sm'
                />
            </section>
            <section>
                <InputField
                    type="email"
                    label="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введите ваш email"
                    disabled={false}
                    description="Это обязательное поле"
                    name="email"
                    radius="5px"
                    asterisk={true}
                    error={emailError}
                    size='sm'
                />
            </section>
            <section className='gender'>
                <label className={genderError ? 'error': ''}>Пол:</label>
                <div>
                    <label className={genderError ? 'error': ''}>
                        М
                        <input
                            type="radio"
                            value="male"
                            onChange={(e) => setGender(e.target.value)}
                            name="gender"
                        />
                    </label>
                    <label className={genderError ? 'error': ''}>
                        Ж
                        <input
                            type="radio"
                            value="female"
                            onChange={(e) => setGender(e.target.value)}
                            name="gender"
                        />
                    </label>
                </div>
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
                    name="password"
                    radius="5px"
                    asterisk={true}
                    error={passwordError}
                    size='sm'
                />
            </section>
            <section>
                <InputField
                    type="password"
                    label="Повторите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Повторите ваш пароль"
                    disabled={false}
                    description="Это обязательное поле"
                    name="repeat-password"
                    radius="5px"
                    asterisk={true}
                    error={confirmPasswordError}
                    size='sm'
                />
            </section>
            <button type="submit">Зарегистрироваться</button>
        </form>
    )
}

export default Signup