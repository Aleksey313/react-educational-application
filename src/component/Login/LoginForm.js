import React from "react";
import Style from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {Input} from "../common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={Style.form} onSubmit={handleSubmit}>
            <Field className={Style.input} placeholder={'Email'}
                   name={'email'} component={Input} validate={[required]}/>
            <Field className={Style.input} placeholder={'Password'}
                   name={'password'} type={'password'}
                   component={Input} validate={[required]}/>
            {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl && <Field className={Style.input}
                                  placeholder={'Symbols from image'} name={'captcha'}
                                  component={Input} validate={[required]}/>}

            {error && <div className={Style.formSummaryError}>{error}</div>}
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
            <button className={Style.button}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

export default LoginReduxForm
