// import React, { useEffect, useState } from 'react';
// import { Switch, Route, NavLink } from 'react-router-dom';

// import Navbar from '../../components/Navbar2';
// import Profile from './DetailProfile/DetailProfileUser';
// import DetailProfilePass from './DetailProfile/DetailProfilePass';

// export default function Detail(props) {
// 	return (
// 		<>
// 			<Navbar />
// 			<div className='detail'>
// 				<div>
// 					<NavLink className='detail__tab' activeClassName='detail__tab--active' exact to='/profile/user'>
// 						Profile
// 					</NavLink>
// 					<NavLink className='detail__tab' activeClassName='detail__tab--active' exact to='/profile/privacy'>
// 						Privacy
// 					</NavLink>
// 				</div>

// 				<Switch>
// 					{/* <Route path='/movie/:id/character' exact component={() => <DetailTabCharacter movie={movie} />} />
// 					<Route path='/movie/:id/overview' exact>
// 						<DetailTabOverview movie={movie} />
// 					</Route> */}
// 					<Route path='/profile' exact component={Profile} />
// 					<Route path='/profile/privacy' exact component={DetailProfilePass} />
// 				</Switch>
// 			</div>
// 		</>
// 	);
// }
