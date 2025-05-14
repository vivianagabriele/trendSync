import React, { useState } from "react";

interface Comment {
  id: string;
  text: string;
  username: string;
  timestamp: string;
  userId: string;
}

interface Props {
  trendId: string; // To associate comments with a specific trend item
}

const MOCK_CURRENT_USER_ID = "user123"; // Placeholder for logged-in user

const CommentSection: React.FC<Props> = ({ trendId }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      text: "This is a great trend! Really insightful.",
      username: "TrendFollower_Max",
      timestamp: "2025-05-13T10:30:00Z",
      userId: "user001",
    },
    {
      id: "2",
      text: "Interesting take, I wonder how this will evolve.",
      username: "DigitalNativeDave",
      timestamp: "2025-05-13T11:15:00Z",
      userId: "user002",
    },
    {
      id: "3",
      text: "I saw this picking up steam yesterday too!",
      username: "SocialSavvySarah",
      timestamp: "2025-05-13T12:00:00Z",
      userId: MOCK_CURRENT_USER_ID, // Mock owner for delete testing
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const newCommentObj: Comment = {
      id: String(Date.now()), // Simple unique ID
      text: newComment,
      username: "CurrentUser_Mock", // Placeholder
      timestamp: new Date().toISOString(),
      userId: MOCK_CURRENT_USER_ID,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleDeleteComment = (commentId: string) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="mt-8 py-6 border-t border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-gray-100">Discussion</h3>
      <div className="mb-6">
        <textarea
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ease-in-out resize-none"
          rows={3}
          placeholder="Share your thoughts on this trend..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          Add Comment
        </button>
      </div>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <div className="flex justify-between items-start mb-2"> {/* Adjusted margin */}
              <p className="font-semibold text-blue-400">{comment.username}</p>
              <p className="text-xs text-gray-500">
                {/* Formatted time and date */}
                {new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(comment.timestamp).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })}
              </p>
            </div>
            <p className="text-gray-300 mb-3 leading-relaxed">{comment.text}</p> {/* Adjusted margin and line height */}
            {comment.userId === MOCK_CURRENT_USER_ID && (
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-xs text-red-500 hover:text-red-400 transition-colors duration-150 ease-in-out"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-gray-500">Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;