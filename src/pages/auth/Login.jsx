import {FaUserAlt} from 'react-icons/fa'
import Inputs from '../../components/inputs/Inputs';
import { useState } from 'react';

function Login() {
    const [name, onChangeName] = useState('')

  
    return (
        <div className="flex  flex-grow">
            <div className='flex flex-col w-[35%] p-20 gap-6'>
                <h1 className="uppercase text-6xl text-white mb-5">Sign Up</h1>
               
                <div className='flex gap-5 flex-col   items-center w-[80%] mx-auto'>
                    <FaUserAlt className='text-9xl text-[#E93C24] text-center mb-8' />
                    <div className='text-white font-bold text-lg'>Sign Up</div>
                    <Inputs name='NAME' type='TEXT' placeholder='NAME' value={name} propsOnChange={onChangeName} />
                    <Inputs name='EMAIL' type='EMAIL' placeholder='EMAIL' value={name} propsOnChange={onChangeName} />
                    <Inputs name='LOCATION' type='TEXT' placeholder='LOCATION' value={name} propsOnChange={onChangeName} />
                    <button className='rounded-full p-3 bg-[#E93C24] w-1/2 text-white'>SIGN UP</button>
                </div>
            </div>
            <div className='w-[65%] '>
                <img src='/pic1.png' className='object-contain w-full'/>
            </div>
            
        </div>
    );
}

export default Login;