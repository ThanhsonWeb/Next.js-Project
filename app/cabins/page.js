async function page() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	console.log(data);
	// server component 

	// 1. go to cabin page -> take some time to fetch data from the server 
	// 2. ->  send it to the browser -> client no need to fetch ! 

	return (
		<div>
			<h1>Cabin Page</h1>

			{data.map((user) => (
				<li key={user.id}> {user.name}</li>
			))}
		</div>
	);
}

export default page;
