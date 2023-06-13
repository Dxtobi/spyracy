import { FaUserCircle } from "react-icons/fa";
import { RiSendPlane2Fill } from 'react-icons/ri'

function AdminCommunity() {
    return (
        <div className="text-white py-6 px-10 flex flex-col gap-4">
            <div className="text-4xl uppercase ">community</div>
            <div>Join the conversation</div>


            <div className="flex flex-col gap-6">
                <div className="text-black bg-[#DEE5D3] rounded-xl p-2 px-10">
                    <div className="flex gap-3 items-center">
                        <FaUserCircle size={30} />
                        <div className="text-2xl">Happy Golucky</div>
                    </div>
                    <div className="font-extralight text-gray-400 flex gap-20 px-20">
                        <div>2:57pm</div>
                        <div>8 days ago</div>
                    </div>
                    <div>Thank you so much for paying forward, allowing me the opportunity to experience Christspiracy </div>
                </div>

                <div className="text-black bg-[#DEE5D3] rounded-xl p-2 px-10">
                    <div className="flex gap-3 items-center">
                        <FaUserCircle size={30} />
                        <div className="text-2xl">Happy Golucky</div>
                    </div>
                    <div className="font-extralight text-gray-400 flex gap-20 px-20">
                        <div>2:57pm</div>
                        <div>8 days ago</div>
                    </div>
                    <div>Thank you so much for paying forward, allowing me the opportunity to experience Christspiracy </div>
                </div>

                <div className="text-black bg-[#DEE5D3] rounded-xl p-2 px-10">
                    <div className="flex gap-3 items-center">
                        <FaUserCircle size={30} />
                        <div className="text-2xl">Happy Golucky</div>
                    </div>
                    <div className="font-extralight text-gray-400 flex gap-20 px-20">
                        <div>2:57pm</div>
                        <div>8 days ago</div>
                    </div>
                    <div>Thank you so much for paying forward, allowing me the opportunity to experience Christspiracy </div>
                </div>

                <div className="text-black bg-[#DEE5D3] rounded-xl p-2 px-10">
                    <div className="flex gap-3 items-center">
                        <FaUserCircle size={30} />
                        <div className="text-2xl">Happy Golucky</div>
                    </div>
                    <div className="font-extralight text-gray-400 flex gap-20 px-20">
                        <div>2:57pm</div>
                        <div>8 days ago</div>
                    </div>
                    <div>Thank you so much for paying forward, allowing me the opportunity to experience Christspiracy </div>
                </div>
            </div>

            <br />

            <div className="row-span-1 border border-[#741E12] w-1/2 p-3 rounded-2xl flex items-center">
                <input placeholder="" className="text-white placeholder:text-white bg-transparent w-full p-2 outline-none rounded-2xl" />
                <RiSendPlane2Fill color={'#741E12'} size={30} />
            </div>
            <span>comment</span>




            <div className="mt-20">
                <div>LOTS OF PEOPLE ARE WATCHING THIS, JOIN THE CONVESATION!</div>
                <div className="grid grid-cols-2 gap-4 mt-10">

                    <video controls width="640" height="360">
                        <source src="https://www.youtube.com/watch?v=rQynPesbj3E" />
                        Your browser does not support the video tag.
                    </video>
                    <video controls width="640" height="360">
                        <source src="https://www.youtube.com/watch?v=rQynPesbj3E" />
                        Your browser does not support the video tag.
                    </video>
                    <video controls width="640" height="360">
                        <source src="https://www.youtube.com/watch?v=rQynPesbj3E" />
                        Your browser does not support the video tag.
                    </video>
                    <video controls width="640" height="360">
                        <source src="https://www.youtube.com/watch?v=rQynPesbj3E" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </div>
    );
}

export default AdminCommunity;