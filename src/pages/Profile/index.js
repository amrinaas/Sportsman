import React from 'react';
import _ from 'lodash';
import { NavLink, Switch, Route } from 'react-router-dom';

import DetailProfile from './DetailProfile/DetailProfile';
import DetailProfilePass from './DetailProfile/DetailProfilePass';
import Navbar from '../../components/Navbar2';

const Profile = () => {
	return (
		<>
			<Navbar />
			<div className='pr__container'>
				<div className='back-page'>
					<aside className='pr__aside'>
						<tr className='table-prof'>
							<NavLink className='detail__tab' activeClassName='detail__tab--active' style={{ textDecoration: 'none' }} exact to='/profile'>
								<td className='detail__tab__td'>Profile</td>
							</NavLink>
							<NavLink className='detail__tab' activeClassName='detail__tab--active' style={{ textDecoration: 'none' }} exact to='/profile/privacy'>
								<td className='detail__tab__td'>Privacy</td>
							</NavLink>
							<NavLink className='detail__tab' activeClassName='detail__tab--active' style={{ textDecoration: 'none' }} exact to='/profile/subscription'>
								<td className='detail__tab__td'>Subscription</td>
							</NavLink>
						</tr>
					</aside>
					<main className='pr__main'>
						<Switch>
							<Route path='/profile' exact component={DetailProfile} />
							<Route path='/profile/privacy' exact component={DetailProfilePass} />
						</Switch>
					</main>
				</div>
			</div>
		</>
	);
};

export default Profile;
