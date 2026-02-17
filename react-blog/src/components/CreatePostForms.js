import { useState } from "react";
import apiService from "../services/apiService";

const CreatePostForms = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const newPost = {
        title,
        body,
        id: 1
      }

      const createdPost = await apiService.createPost(newPost);
      alert('Post created successfully!');
      
      onPostCreated(createdPost);
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Failed to create post:', error);
      alert('Failed to create post. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-bold">Title</label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Enter a post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label fw-bold">Content</label>
        <textarea
          className="form-control"
          id="postContent"
          placeholder="Enter a post content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  )
}
export default CreatePostForms;
