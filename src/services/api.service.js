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
            return useRequest(request);
        } catch (e) {
            console.error(e);
        }
    }

    async fetchPosts() {
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method: 'get'
            });
            return useRequest(request);
        } catch (e) {
            console.log(e);
        }
    }
}

async function useRequest(request) {
    const repsonse = await fetch(request);
    return await repsonse.json();
}

export const apiService = new ApiService('https://nativejs-blog-991eb.firebaseio.com');