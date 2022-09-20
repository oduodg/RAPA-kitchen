import React from 'react';
import logo from '../imgs/logo.png';

export default function Header() {
	return (
		<>
			<img src={logo} alt="logo" className='block mx-auto w-24 mt-7'></img>
			<div className='font-bold text-[#253554] text-5xl mt-2'>RAPA.</div>
			<p className='font-normal text-lg text-[#919BAB] mt-2'>The Best lunch for you of <span className='font-medium'>September 2022.</span></p>
			<hr className='mt-4 w-5/6 mx-auto'/>
		</>
	)
}
