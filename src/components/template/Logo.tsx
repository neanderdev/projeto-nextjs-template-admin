export default function Logo() {
    return (
        <div
            className='flex flex-col justify-center items-center bg-white w-12 h-12 rounded-full'
        >
            <div className='w-3 h-3 rounded-full bg-red-600 mb-0.5' />

            <div className='flex mt-0.5'>
                <div className='w-3 h-3 rounded-full bg-yellow-600 mr-0.5' />

                <div className='w-3 h-3 rounded-full bg-green-600 ml-0.5' />
            </div>
        </div>
    );
}