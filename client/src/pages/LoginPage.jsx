export const LoginPage = () => (
    <>
        <form className='w-1/2 h-1/2 bg-transparent border-2 p-6 rounded-xl mx-auto mt-1/2' onSubmit={e=>e.preventDefault()}>
            <h1 className="mb-4 text-lg text-white drop-shadow cursor-default text-center">Sign In</h1>
            <label className='text-xs text-slate-400'>
                Username!
                <input type="text"
                placeholder='John Dou'
                       className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label>
            <label className='text-xs text-slate-400'>
                Password!
                <input type="password"
                       placeholder='**********'
                       className='text-center mt-1 text-black w-full rounded-lg bg-transparent border-2 py-1 px-2 outline-none placeholder:text-grey-400'
                />
            </label>
        </form>
    </>
);
