class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            });
            const repsonse = await fetch(request);
            return await repsonse.json();
        } catch (e) {
            console.error(e);
        }
    }
}

export const apiService = new ApiService('https://nativejs-blog-991eb.firebaseio.com');