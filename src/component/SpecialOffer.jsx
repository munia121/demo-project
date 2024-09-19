import image from '../assets/offerCarimg.jpg'
const SpecialOffer = () => {
    return (
        <div className='lg:flex gap-5 container mx-auto'>
            <div className='w'>
                <img className='w-[700px] rounded-tl-[150px] border-4 border-[#ff4c30] rounded-br-[150px]' src={image} alt="" />
            </div>
            <div className='lg:w-[50%] mx-auto border'>
                <div>
                    <div className='text-center'>
                        <h2 className='text-[#ff4c30] text-5xl font-bold'>Our Special Offers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque dolor reprehenderit ut id quae possimus aliquid? Repellat quod eos dicta tempore cupiditate quos ex ea, inventore sed, excepturi animi.¸</p>
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            {/* ***** */}
                            <div className='md:w-[350px]  px-2 py-3 rounded-lg  mt-5  space-y-3 bg-[#ff4c30] text-white text-center '>
                                <h1 className='text-2xl'>Weekend Getaway</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qui?</p>
                                <div className=' '>
                                    <p className='bg-[#f4705c] w-36 p-1 mx-auto rounded-lg mt-5'>BOOK NOW</p>
                                    {/* <p className='absolute top-[75%] ml-[80%]  lg:ml-[18%] lg:top-[60%] md:ml-[18%] md:top-[60%]'>logo</p> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* ***** */}
                            <div className='md:w-[350px]  px-2 py-3 rounded-lg  mt-5  space-y-3 bg-[#ff4c30] text-white text-center '>
                                <h1 className='text-2xl'>Weekend Getaway</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qui?</p>
                                <div className=' '>
                                    <p className='bg-[#f4705c] w-36 p-1 mx-auto rounded-lg mt-5'>BOOK NOW</p>
                                    {/* <p className='absolute top-[75%] ml-[80%]  lg:ml-[18%] lg:top-[60%] md:ml-[18%] md:top-[60%]'>logo</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* ***** */}
                        <div className='md:w-[350px] mx-auto px-2 py-3 rounded-lg  mt-5  space-y-3 bg-[#ff4c30] text-white text-center '>
                            <h1 className='text-2xl'>Weekend Getaway</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qui?</p>
                            <div className=' '>
                                <p className='bg-[#f4705c] w-36 p-1 mx-auto rounded-lg mt-5'>BOOK NOW</p>
                                {/* <p className='absolute top-[75%] ml-[80%]  lg:ml-[18%] lg:top-[60%] md:ml-[18%] md:top-[60%]'>logo</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;