import { useState, useEffect } from "react";
import apiService from "../services/apiService";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        const [postData, commentsData] = await Promise.all([
          apiService.getPostById(id),
          apiService.getCommentsByPostId(id),
        ]);
        setPost(postData);
        setComments(commentsData || []);
      } catch (err) {
        setError("Failed to load post data. Please try again later.");
        console.error("Error fetching post data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPostData();
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center m-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center m-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container text-center m-5">
        <h1 className="text-warning">Post not found.</h1>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{post.title}</h2>
      <p className="mb-4">{post.body}</p>

      <h3 className="mb-3">Comments</h3>
      {comments && comments.length > 0 ? (
        comments.map((c) => (
          <div key={c.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{c.user?.fullName || c.user?.username || "Anonymous"}</h5>
              <p className="card-text">{c.body}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-info">No comments available for this post.</div>
      )}
    </div>
  );
};

export default PostDetail;