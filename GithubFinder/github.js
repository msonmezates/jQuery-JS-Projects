class Github {
	constructor() {
		this.client_id = '03dac7be1f0adaac3118';
		this.client_secret = 'ded75a883a7886018582aa36ab1db062ba04a47a';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this
				.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		};
	}
}
