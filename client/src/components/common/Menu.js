import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { close } from '../../redux/menuSlice';
import { useEffect } from 'react';
function Menu() {
	const active = { color: 'aqua' };

	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menu.open);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1200) dispatch(close());
		});
	}, [dispatch]);

	return (
		<>
			<AnimatePresence>
				{menu && (
					<motion.nav
						id='mobilePanel'
						initial={{ opacity: 0, x: -280 }}
						animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
						exit={{ opacity: 0, x: -280, transition: { duration: 0.5 } }}
						onClick={() => {
							dispatch(close());
						}}
					>
						<h1>
							<Link to='/'>LOGO</Link>
						</h1>

						<ul id='gnbMo'>
							<li>
								<NavLink to='/department' activeStyle={active}>
									Department
								</NavLink>
							</li>
							<li>
								<NavLink to='/community' activeStyle={active}>
									Community
								</NavLink>
							</li>
							<li>
								<NavLink to='/gallery' activeStyle={active}>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to='/youtube' activeStyle={active}>
									Youtube
								</NavLink>
							</li>
							<li>
								<NavLink to='/contact' activeStyle={active}>
									Contact
								</NavLink>
							</li>
							<li>
								<NavLink to='/member' activeStyle={active}>
									Members
								</NavLink>
							</li>
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	);
}

export default Menu;
