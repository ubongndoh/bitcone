/* src/App.jsx */
import React from 'react';
import './App.css';
import AppRoutes from './routes/Routes';
// import Home from './pages/Home';
import ScrollToTop from './components/scrollToTop';

function App() {
	return (
		<>
		<ScrollToTop/>
			<AppRoutes />
		</>
	);
}

export default App;
