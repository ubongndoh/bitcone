/* src/App.jsx */
import React from 'react';
import './App.css';
import AppRoutes from './routes/Routes';
// import Home from './pages/Home';
import ScrollToTop from './components/scrollToTop';

function App() {
	return (
		<div className=' overflow-hidden'>
			<ScrollToTop />
			<AppRoutes />
		</div>
	);
}

export default App;
