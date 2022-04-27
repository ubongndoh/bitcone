import React from 'react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<>
			<footer className='relative bg-black pt-10 pb-6 footer '>
				<div className='container mx-auto px-20'>
					<div className=''>
						<img src={logo} alt='...' className=' h-12 w-48 my-10' />
					</div>
					<div className=' grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 '>
						<div>
							<div className=' font-bold text-2xl my-4'>Explore</div>
							<div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2'>
								<div>
									<Link to='/'>
										<div>Home</div>
									</Link>
									<Link to='/about'>
										<div>About</div>
									</Link>
									<Link to='/roadmap'>
										<div>Roadmap</div>
									</Link>
								</div>
								<div>
									<div>Support</div>
									<div>Careers</div>
									<div>Community</div>
								</div>
							</div>
						</div>

						<div>
							<div className=' font-bold text-2xl my-4'>Legal</div>
							<div>Site Terms</div>
							<div>Terms & Conditions</div>
							<div>Privacy Policy</div>
						</div>
						<div>
							<div className=' font-bold text-2xl my-4'>Documents</div>
							<div>White Paper</div>
							<div>Code of Ethics</div>
						</div>
					</div>
					<div className='text-center mt-10'>
						Copyright © <Link to='/'> urentech</Link> 2022. All rights reserved
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
