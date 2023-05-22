import { Link } from "react-router-dom";

export const AuthForm = ({ type }) => {
        const formData = {};
        if (type === 'login') {
            formData.title = 'Sign In'
            formData.buttonText = 'Login'
            formData.linkText = 'Do not have an account?'
            formData.linkTo = '/register'
            formData.isEmailRequired = false
        } else if (type === 'register') {
            formData.title = 'Sign Up'
            formData.buttonText = 'Create'
            formData.linkText = 'Do you have an account?'
            formData.linkTo = '/login'
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
                    placeholder='johndou@anymail.com'
                    className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 hover:border-green-300 focus:border-green-400 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label> }
            <label className='text-xs text-slate-400'>
                Password
                <input
                    type="password"
                    placeholder='**********'
                    className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 hover:border-green-300 focus:border-green-400 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label>
            <div className="flex gap-8 justify-between text-white mt-12">
                <Link className='py-2 hover:text-green-400' to={ linkTo }>{ linkText }</Link>
                <button
                    type='submit'
                    className="flex justify-center hover:bg-green-400 items-center uppercase border-2 border-white rounded py-2 px-8">
                    { buttonText }
                </button>
            </div>
        </form>

    }
;
