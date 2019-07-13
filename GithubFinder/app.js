const searchUser = document.getElementById('searchUser');

const github = new Github();
const ui = new UI();

searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value;
	if (userText !== '') {
		github.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				// Show alert
				ui.showAlert('User not found', 'alert alert-danger');
			} else {
				// Show profile
				ui.showProfile(data.profile);
				// Show repos
				ui.showRepos(data.repos);
			}
		});
	} else {
		// Clear profile
		ui.clearProfile();
	}
});
