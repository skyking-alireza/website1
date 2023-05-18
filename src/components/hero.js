import React from 'react'
import {HiCloudUpload,HiDatabase,HiPaperAirplane,HiServer} from 'react-icons/hi'
import cyberimg from '../image/cyber.webp'
class Hero extends React.Component{
    render() {
        return(
            <div className={'w-full h-screen bg-zinc-200 flex flex-col justify-between'}>
                <div className={'grid md:grid-cols-2 max-w-[1920px] m-auto'}>
                    <div className={'flex flex-col justify-center md:items-start  w-full px-2 py-8'}>
                        <p className={'text-2xl'}>Unique Sequencing & Production</p>
                        <h1 className={'text-5xl py-3 font-bold md:text-7xl'}>Cloud Management</h1>
                        <p className={'text-2xl'}>This is oue Tech brand.</p>
                        <button className={'py-3 px-6 sm:w-[60%] my-4'}>Get Started</button>
                    </div>
                    <div>
                        <img className={'w-full md:max-w-[745px] '} src={cyberimg} alt={'cyberimg'}/>
                    </div>
                    <div className={'absolute flex flex-col py-8 md:min-w-[768px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 borderborder-slate-300 rounded-xl text-center shadow-xl '}>
                        <p>Data Services</p>
                        <div className={'flex justify-between flex-warp px-6'}>
                            <p className={'flex py-2 px-4 text-slate-500'}> <HiCloudUpload className={'h-6 text-indigo-600'}/> App security</p>
                            <p className={'flex py-2 px-4 text-slate-500'}> <HiDatabase className={'h-6 text-indigo-600'} /> Dashboard Design</p>
                            <p className={'flex py-2 px-4 text-slate-500'}> <HiServer className={'h-6 text-indigo-600'} /> Cloud Data</p>
                            <p className={'flex py-2 px-4 text-slate-500'}> <HiPaperAirplane className={'h-6 text-indigo-600'} /> API</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero