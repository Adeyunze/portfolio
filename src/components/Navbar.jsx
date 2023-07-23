import React from 'react';
// import { Link } from 'react-router-dom';

const Top = () => {
  return (
		<header className="">
			<nav className="flex justify-between py-5 text-white items-center border-b border-slate-400 md:px-16 px-5">
				<div className="name">
					<h1 className="md:text-lg logo tracking-widest">Yandsdesign</h1>
				</div>
				<div className="links flex justify-between">
					<a
						href="#work"
						className="md:pl-10 pl-5 text-sm tracking-wide uppercase"
					>
						Work
					</a>
					{/* <a href='/'>About</a> */}
					<a
						href="#contact"
						className="md:pl-10 pl-5 text-sm tracking-wide uppercase"
					>
						Contact
					</a>
				</div>
			</nav>

			<h1 className="md:text-5xl text-2xl md:mt-40 mt-20 md:w-[80%] md:leading-[60px] header-h1 md:mx-16 mx-5">
				Software Developer devoted to crafting beautiful web interface and user
				experiences focused on simplicity and purpose using modern technologies.
			</h1>
		</header>
	);
}

export default Top