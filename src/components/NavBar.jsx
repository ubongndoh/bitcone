import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function Navbar() {
	const mystyle = {
		color: 'white',
		// backgroundColor: '#017a5b',
	};

	return (
		<>
			{/* navbar */}
			<nav
				className='relative flex flex-wrap items-center justify-between py-3  mb-3  text-warmGray-50'
				style={mystyle}
			>
				<div className='lg:px-4 px-1 w-full  flex  items-center justify-between'>
					<div className=' flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link
							to='/'
							className=' lg:text-xl text-lg font-bold leading-relaxed inline-block ml-10 py-2 whitespace-nowrap uppercase text-white'
						>
							<img src={logo} alt='' className='lg:h-12 lg:w-full h-8' />
						</Link>
					</div>
					<div className='flex items-center lg:pt-0 pt-3'>
						<ul className='flex  flex-row list-none '>
							<Link to='/'>
								<li className='lg:px-10 px-2 lg:text-base text-sm'>Home</li>
							</Link>
							<Link to='/about'>
								<li className='lg:px-10 px-2 lg:text-base text-sm'>About</li>
							</Link>
							<Link to='/roadmap'>	
							<li className='lg:px-10 px-2 lg:text-base text-sm'>Roadmap</li>
							</Link>
						
						</ul>
					</div>
					{/* <div className='flex items-center  mr-20'>
						<ul className='flex  flex-row list-none '>
							<li className='lg:px-3 px-1 py-2 flex  items-center '>
								<button className='  hover:scale-105 btn font-medium text-lg   px-8 py-2 rounded-lg'>
									Login
								</button>
							</li>
						</ul>
					</div> */}
				</div>
			</nav>
		</>
	);
}
