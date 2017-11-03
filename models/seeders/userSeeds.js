db.users.insert(
	{
		email: 'roper@gmail.com',
		username:'Roper',
		password:'roper',
		messages: [
			{
				title: 'First Private',
				body: 'Hello, Omni!'
			}
		],
		loggedIn: false
	}
)
