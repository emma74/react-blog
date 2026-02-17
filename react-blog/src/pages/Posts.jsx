import CreatePostForms from "../components/CreatePostForms";
import apiService from "../services/apiService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const allPosts = await apiService.getPosts();
      setPosts(allPosts.slice(0, 20));
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const HandlePostCreated = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
    setShowForm(false);
  }

  const routeToPostDetailsPage = (postId) => {
    navigate(`/posts/${postId}`);
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Blog Posts</h1>
        <button
          className={`btn ${showForm ? 'btn-secondary' : 'btn-success'}`}
          onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'Create new Form'}
        </button>
      </div>
      {showForm && <CreatePostForms onPostCreated={HandlePostCreated} />}
      {isLoading ? (
        <div className="text-center m-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading posts...</p>
        </div>
      ) : (
        <div className="m-4">
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id}>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}</p>
                  <button onClick={() => routeToPostDetailsPage(`${post.id}`)} className="btn btn-outline-success">
                    Read More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-info">
              No posts available. Please create a new post using the form above.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default Posts;
