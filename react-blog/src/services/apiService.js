import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

const apiService = {

  //Get all posts
  getPosts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts`);
      return response.data.posts;

    }catch (error) {
      console.error('Error fetching posts:', error);
      throw error; 
    } 
  },

  //Get post by id
  getPostById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with id ${id}:`, error);
      throw error; 
    }
  },

  //Get all users
  getUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; 
    }
  },

  //Create a new post
  createPost: async (postData) => {
    try {
      const formattedData = {
        title: postData.title,
        body: postData.body,
        userId: 1  // DummyJSON requires userId
      };
      const response = await axios.post(`${API_BASE_URL}/posts/add`, formattedData);
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error; 
    }
  },

  //Get all comments for a post
  getCommentsByPostId: async (postId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`);
      return response.data.comments;
    } catch (error) {
      console.error(`Error fetching comments for post with id ${postId}:`, error);
      throw error; 
    }
  },
}
export default apiService;