import React from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Footer from '../components/Footer';
import img from '../assets/real-estate.png';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero img={img} />
			<Main />
			<Footer />
		</div>
	);
};

export default Home;
