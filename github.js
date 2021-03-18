class Github{
    constructor() {
        this.client_id= '13d535297e30dbf6f554';
        this.client_secret='0d665e161baba631950a58b163f53b7623057d2a';
        this.repos_count= 5;
        this.repos_sort='created: asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}