import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Roadmap from '../pages/Roadmap';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/roadmap' element={<Roadmap/>}/>
		</Routes>
	);
};

export default AppRoutes;
