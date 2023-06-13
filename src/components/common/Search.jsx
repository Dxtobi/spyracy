import {BsSearch} from 'react-icons/bs'

function Search() {
    return (
        <div className="row-span-1 border border-[#741E12] w-1/2 p-3 rounded-2xl flex items-center">
                <input placeholder="SEARCH" className="text-white placeholder:text-white bg-transparent w-full p-2 outline-none rounded-2xl" />
                <BsSearch color={'#741E12'} size={30} />
            </div>
    );
}

export default Search;