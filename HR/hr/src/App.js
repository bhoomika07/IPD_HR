import './App.css';
// import Register from './components/Register'
// import FindCandidates from './components/findCandidates';
// import Login from './components/Login';
import CreateTest from './components/CreateTest';
// import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App () {
	
	return (
		<div className="container">
		<CreateTest/>
		</div>
	// <Router>
	// 	<div className='container'>
	// 		<Routes>
	// 		<Route path='/register' element={<Register/>} />
	// 		<Route path='/login' element={<Login/>} />
	// 		</Routes>
	// 	</div>
	// </Router>
	)
}

export default App
