// import { BsSearch } from 'react-icons/bs'
import Search from '../../components/common/Search';
function AdminHome() {
    return (
        <div className="grid grid-rows-[auto,auto,1fr,auto] gap-4 px-20 py-10">
            <div className="row-span-1 text-4xl font-bold text-white">CHRISTSPIRACY</div>
            <Search />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#741E12] rounded-xl text-white p-10 flex flex-col items-center gap-4">
                    <div className="">WATCH HOURS</div>
                    <div className="text-3xl">123:30:58</div>
                </div>
                <div className="bg-[#741E12] rounded-xl text-white p-10 flex flex-col items-center gap-4">
                    <div className="">VIEWS</div>
                    <div className="text-3xl">30,000</div>
                </div>
                <div className="bg-[#741E12] rounded-xl text-white p-10 flex flex-col items-center gap-4">
                    <div className="">SUBSCRIBERS</div>
                    <div className="text-3xl">400,000</div>
                </div>
                <div className="bg-[#741E12] rounded-xl text-white p-10 flex flex-col items-center gap-4">
                    <div className="">PAY IT FORWARDS</div>
                    <div className="text-3xl">403,000</div>
                </div>
            </div>

            <div className="row-span-1 relative text-white">
                <img src="/earthmap.png" className="w-full object-cover" />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className='text-center'>
                        <div className='font-thin'>Total View</div>
                        <div className='text-5xl font-bold'>20,000,000</div>
                    </div>
                    <div className='text-center'>
                        <div className='font-thin'>Countries reached</div>
                        <div className='text-5xl font-bold'>120</div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default AdminHome;