import React from 'react';
import {HiMenu,HiX} from 'react-icons/hi'

class Navbar extends React.Component{
    state = {nav:false}
    constructor(props) {
        super(props);
        this.navset = () =>{
            this.setState({nav:!this.state.nav })
        }
    }
    render() {
        return(
            <div className={'w-screen h-[80px] z-10 bg-zinc-200  fixed drop-shadow-lg'}>
                <div className={'px-2 flex justify-between items-center w-full h-full'}>
                    <div className={'flex items-center'}>
                        <h1 className={'text-3xl md:text-4xl font-bold mr-4'}>BRAND</h1>
                        <ul className={'hidden md:flex pr-4'}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Apps</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className={'hidden md:flex '}>
                        <button className={'border-none bg-transparent text-black mr-4'}>Sign up</button>
                        <button className={'px-8 py-2'}>Login</button>
                    </div>
                    <div className={'md:hidden mr-4'}>
                        {this.state.nav ? <HiX onClick={this.navset} className={'w-5 text-4xl cursor-pointer'} /> :<HiMenu onClick={this.navset} className={'w-5 text-4xl cursor-pointer'} /> }
                    </div>
                </div>
                <ul className={this.state.nav > 0 ? 'absolute  bg-zinc-200 w-full px-8' : 'hidden'}>
                    <li className={'border-b-2 border-zinc-300 w-full'}>Home</li>
                    <li className={'border-b-2 border-zinc-300 w-full'}>About</li>
                    <li className={'border-b-2 border-zinc-300 w-full'}>Services</li>
                    <li className={'border-b-2 border-zinc-300 w-full'}>Apps</li>
                    <li className={'border-b-2 border-zinc-300 w-full'}>Support</li>
                    <div className={'flex flex-col my-4'}>
                        <button className={'px-8 py-3 bg-transparent text-indigo-600 mb-4'}>Sign up</button>
                        <button className={'px-8 py-3'}>Login</button>
                    </div>
                </ul>

            </div>
        )
    }
}
export default Navbar