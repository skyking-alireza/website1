import React from 'react'
import {HiPhone , HiOutlineArrowSmRight,HiChip,HiSupport} from 'react-icons/hi'
import support from '../image/support.webp'
class Support extends React.Component{
    render() {
        return(
            <div className={'w-full h-screen mt-24'}>
                <div className={'w-full h-[700px] bg-gray-900/90 absolute'}>
                    <img className={'w-full h-full object-cover mix-blend-overlay'} src={support} alt={'img-support'} />
                </div>
                <div className={'max-w-[1240px] mx-auto text-white relative'}>
                    <div className={'py-12 px-4'}>
                        <h2 className={'pt-8 text-3xl text-slate-300 uppercase text-center'}>Support</h2>
                        <h3 className={'text-5xl font-bold text-center py-6'}>Finding the right team</h3>
                        <p className={'py-4 text-3xl text-slate-300 '}>Lorem ipsum dolor sit amet, ne his invidunt verterem splendide. Illum scribentur per et. His augue tantas aliquam at. Pri no lorem adipiscing, ex dicant melius pro. Graecis molestie incorrupte quo ad, nam augue volumus ex.</p>
                    </div>
                    <div className={'grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'}>
                        <div className={'bg-white rounded-xl shadow-2xl '}>
                            <div className={'p-8'}>
                                <HiPhone className={'w-16 h-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]'} />
                                <h3 className={'font-bold text-2xl my-6'}>Sales</h3>
                                <p className={'text-gray-600 text-xl'}>Lorem ipsum dolor sit amet, ne his invidunt verterem splendide. Illum scribentur per et. His augue tantas aliquam at. Pri no lorem adipiscing, ex dicant melius pro. Graecis molestie incorrupte quo ad, nam augue volumus ex.</p>
                            </div>
                            <div className={'bg-slate-100 pl-8 py-4'}>
                                <p className={'flex items-center text-indigo-600'}>Contact Us <HiOutlineArrowSmRight className={'w-5 ml-2'} /></p>
                            </div>
                        </div>
                        <div className={'bg-white rounded-xl shadow-2xl '}>
                            <div className={'p-8'}>
                                <HiSupport className={'w-16 h-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]'} />
                                <h3 className={'font-bold text-2xl my-6'}>Teach Support</h3>
                                <p className={'text-gray-600 text-xl'}>Lorem ipsum dolor sit amet, ne his invidunt verterem splendide. Illum scribentur per et. His augue tantas aliquam at. Pri no lorem adipiscing, ex dicant melius pro. Graecis molestie incorrupte quo ad, nam augue volumus ex.</p>
                            </div>
                            <div className={'bg-slate-100 pl-8 py-4'}>
                                <p className={'flex items-center text-indigo-600'}>Contact Us <HiOutlineArrowSmRight className={'w-5 ml-2'} /></p>
                            </div>
                        </div>
                        <div className={'bg-white rounded-xl shadow-2xl '}>
                            <div className={'p-8'}>
                                <HiChip className={'w-16 h-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]'} />
                                <h3 className={'font-bold text-2xl my-6'}>Media Inquiries </h3>
                                <p className={'text-gray-600 text-xl'}>Lorem ipsum dolor sit amet, ne his invidunt verterem splendide. Illum scribentur per et. His augue tantas aliquam at. Pri no lorem adipiscing, ex dicant melius pro. Graecis molestie incorrupte quo ad, nam augue volumus ex.</p>
                            </div>
                            <div className={'bg-slate-100 pl-8 py-4'}>
                                <p className={'flex items-center text-indigo-600'}>Contact Us <HiOutlineArrowSmRight className={'w-5 ml-2'} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Support