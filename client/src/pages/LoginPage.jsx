import { Link } from "react-router-dom";

export const LoginPage = () => (
    <>
        <form className='w-1/2 max-w-md max-h-min bg-transparent border-2 p-6 rounded-xl mx-auto mt-1/2'
              onSubmit={ e => e.preventDefault() }>
            <h1 className="mb-4 text-lg text-white drop-shadow cursor-default text-center">Sign In</h1>
            <label className='text-xs text-slate-400'>
                Username
                <input
                    type="text"
                    placeholder='John Dou'
                    className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 hover:border-green-300 focus:border-green-400 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label>
            <label className='text-xs text-slate-400'>
                Password
                <input
                    type="password"
                    placeholder='**********'
                    className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 hover:border-green-300 focus:border-green-400 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label>
            <div className="flex gap-8 justify-between text-white mt-12">
                <Link className='py-2 hover:text-green-400' to='/register'>Do not have an account?</Link>
                <button
                    type='submit'
                    className="flex justify-center hover:bg-green-400 items-center uppercase border-2 border-white rounded py-2 px-8">Login
                </button>
            </div>
        </form>
    </>
);
