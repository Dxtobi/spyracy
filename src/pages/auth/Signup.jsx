import {FaUserAlt} from 'react-icons/fa'
import Inputs from '../../components/inputs/Inputs';
import { useState } from 'react';

function Signup() {
    const [name, onChangeName] = useState('')
    return (
        <div className="flex  flex-grow">
            <div className='flex flex-col w-[35%] p-10 gap-6'>
                <h1 className="uppercase text-6xl text-white mb-5">Sign in</h1>
               
                <div className='flex gap-5 flex-col   items-center w-[80%] mx-auto'>
                    <FaUserAlt className='text-9xl text-[#E93C24] text-center mb-8' />
                    <div className='text-white font-bold text-lg'>Sign In</div>
                    <Inputs name='EMAIL' type='EMAIL' placeholder='EMAIL' value={name} propsOnChange={onChangeName} />
                    <Inputs name='LOCATION' type='TEXT' placeholder='LOCATION' value={name} propsOnChange={onChangeName} />
                    <button className='rounded-full p-3 bg-[#E93C24] text-white'>CREATE AN ACCOUNT</button>
                </div>
                <div className='text-center my-2 text-white'>OR</div>
                <div className='text-center text-white flex flex-col'>
                    <button>Sign Up with Google</button>
                    <button>Sign Up with Facebook</button>
                    <button>Sign Up with Apple</button>
                    <button>Sign Up with Crypto Wallet</button>
                    <p>Already an admin <a href='/login' className='text-[#e25454]'>Log in</a></p>
                </div>

            </div>
            <div className='w-[65%] '>
                <img src='/pic1.png' className='object-contain w-full'/>
            </div>
            
        </div>
    );
}

export default Signup;