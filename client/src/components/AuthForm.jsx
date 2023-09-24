import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { login, register } from "../constants/links";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

export const AuthForm = ({ type }) => {
        const [ username, setUsername ] = useState('')
        const [ password, setPassword ] = useState('')
        const [ email, setEmail ] = useState('')
        const { status, error } = useSelector((state) => state.auth)
        const dispatch = useDispatch();

        useEffect(() => {
            if (status) {
                error ? toast.error(status) : toast.success(status)
            }
        }, [ status, error ])

        const usernameHandler = ({ target }) => {
            setUsername(target.value)
        }
        const passwordHandler = ({ target }) => {
            setPassword(target.value)
        }
        const emailHandler = ({ target }) => {
            setEmail(target.value)
        }
        const resetState = () => {
            setEmail('')
            setUsername('')
            setPassword('')
        }

        const submitHandler = async () => {
            try {
                dispatch(registerUser({ username, password }))
                resetState()
            } catch (error) {
                console.log(error)
            }
        }

        const formData = {};
        if (type === 'login') {
            formData.title = 'Sign In'
            formData.buttonText = 'Login'
            formData.linkText = 'Do not have an account?'
            formData.linkTo = register.link
            formData.isEmailRequired = false
        } else if (type === 'register') {
            formData.title = 'Sign Up'
            formData.buttonText = 'Create'
            formData.linkText = 'Do you have an account?'
            formData.linkTo = login.link
            formData.isEmailRequired = true
        }

        const { title, buttonText, linkText, linkTo, isEmailRequired } = formData

        return <form className='w-1/2 max-w-md max-h-min bg-transparent border-2 p-6 rounded-xl mx-auto mt-1/2'
                     onSubmit={ e => e.preventDefault() }>
            <h1 className="mb-4 text-lg text-white drop-shadow cursor-default text-center">{ title }</h1>
            <label className='text-xs text-slate-400'>
                Username
                <input
                    type="text"
                    value={ username }
                    onInput={ usernameHandler }
                    placeholder='John Dou'
                    className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 hover:border-green-300 focus:border-green-400 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label>
            { isEmailRequired
            &&
            <label className='text-xs text-slate-400'>
                Email
                <input
                    type="email"
                    value={ email }
                    onInput={ emailHandler }
                    placeholder='johndou@anymail.com'
                    className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 hover:border-green-300 focus:border-green-400 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label> }
            <label className='text-xs text-slate-400'>
                Password
                <input
                    type="password"
                    value={ password }
                    onInput={ passwordHandler }
                    placeholder='**********'
                    className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 hover:border-green-300 focus:border-green-400 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label>
            <div className="flex gap-8 justify-between text-white mt-12">
                <Link className='py-2 hover:text-green-400' to={ linkTo }>{ linkText }</Link>
                <button
                    type='submit'
                    onClick={ submitHandler }
                    className="flex justify-center hover:bg-green-400 items-center uppercase border-2 border-white rounded py-2 px-8">
                    { buttonText }
                </button>
            </div>
            { username } { password } { isEmailRequired && email }
        </form>

    }
;
