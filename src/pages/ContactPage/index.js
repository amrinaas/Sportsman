import React, { useEffect, useState } from "react";
import LeafletMap from "../../components/LeafletMap";
import Navbar from "../../components/Navbar2";
import { useDispatch, useSelector } from "react-redux";
import { postContact } from "../../redux/Action/userAction";

export default function ContactUs() {
	useEffect(() => {
		document.title = "Contact Us";
	}, []);

	const dispatch = useDispatch();
	const [input, setInput] = useState({
		email: "",
		suggest: "",
	});

	const token = localStorage.getItem("token");
	// const contact = useSelector((state) => state.users.contact);
	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// const body = {
		//   email: input.email,
		//   suggest: input.suggest,
		// };
		dispatch(postContact(token, input));
	};

	return (
		<div className="Contact">
			<Navbar />
			<div className="Contact__hello-drop">
				<h1>Say hello</h1>
				<p>drop us a line or ask anything you want</p>
			</div>

			<LeafletMap />

			<div className="Contact__i">
				<div className="Contact__i__msg">
					<h3>Drop us a message</h3>
				</div>
				<div className="Contact__i__input-email">
					<input
						onChange={handleChange}
						placeholder="email"
						name="email"
					/>
				</div>
				<div className="Contact__i__textarea-msg">
					<textarea
						onChange={handleChange}
						placeholder="How can we help?"
						name="suggest"
					/>
				</div>
				<div className="Contact__i__btn-send">
					<button onClick={handleSubmit} type="submit">
						Send
					</button>
				</div>
			</div>
		</div>
	);
}
