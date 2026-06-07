function Button({ children, onClick, filter, activeFilter }) {
	return (
		<button
			className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-blue-800 text-primary-50 " : ""} `}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
