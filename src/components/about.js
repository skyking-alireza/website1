import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className={'w-full my-32'}>
                <div className={'max-w-[1240px] mx-auto'}>
                    <div className={'text-center'}>
                        <h2 className={'text-5xl font-bold'}>Trusted by developers across the world</h2>
                        <p className={'text-3xl py-6 text-gray-600'}>Lorem ipsum dolor sit amet, ne his invidunt verterem splendide. Illum scribentur per et. His augue tantas aliquam at. Pri no lorem adipiscing, ex dicant melius pro. Graecis molestie incorrupte quo ad, nam augue volumus ex.</p>
                    </div>
                    <div className={'grid md:grid-cols-3 gap-1 px-2 text-center'}>
                        <div className={'border py-8 rounded-xl shadow-xl mt-4 md:mt-0'}>
                            <p className={'text-6xl text-indigo-600 font-bold'}>100%</p>
                            <p className={'text-gary-600 mt-2 '}>Completion</p>
                        </div>
                        <div className={'border py-8 rounded-xl shadow-xl mt-4 md:mt-0'}>
                            <p className={'text-6xl text-indigo-600 font-bold'}>24/7</p>
                            <p className={'text-gary-600 mt-2 '}>Delivery</p>
                        </div>
                        <div className={'border py-8 rounded-xl shadow-xl mt-4 md:mt-0'}>
                            <p className={'text-6xl text-indigo-600 font-bold'}>100K</p>
                            <p className={'text-gary-600 mt-2 '}>Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About