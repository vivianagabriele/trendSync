import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import CommentSection from '../components/CommentSection'; // Import CommentSection

export interface InstagramTrendCardProps {
  id: string;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  caption: string;
  likes: number;
  commentsCount: number;
  aiExplanation: string; // Added AI explanation
  isRisingFast?: boolean;
}

const InstagramTrendCard: React.FC<InstagramTrendCardProps> = ({
  username,
  avatarUrl,
  imageUrl,
  caption,
  likes,
  commentsCount,
  aiExplanation, // Added AI explanation
  isRisingFast,
}) => {
  return (
    <div 
      className={`bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl 
                  ${isRisingFast ? 'ring-2 ring-blue-500 shadow-blue-500/30' : 'ring-1 ring-gray-700'}`}
    >
      {/* Card Header */}
      <div className="flex items-center p-3 bg-gray-800 border-b border-gray-700">
        <img src={avatarUrl} alt={`${username}'s avatar`} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <span className="font-semibold text-gray-200">{username}</span>
      </div>

      {/* Image */}
      <div className="aspect-[4/5] bg-gray-700"> {/* Instagram-like aspect ratio for image placeholder */}
        <img src={imageUrl} alt={caption.substring(0, 50)} className="w-full h-full object-cover" />
      </div>
      

      {/* Card Content */}
      <div className="p-4">
        <p className="text-gray-300 text-sm mb-2 leading-relaxed whitespace-pre-line">
          <span className="font-semibold text-gray-100">{username}</span> {caption}
        </p>

        {/* AI Explanation */}
        <div className="mt-3 pt-3 border-t border-gray-700/50">
          <h4 className="text-xs font-semibold text-blue-300 mb-1">AI Insights ✨</h4>
          <p className="text-xs text-gray-400 leading-normal italic">
            {aiExplanation}
          </p>
        </div>

        <div className="flex items-center justify-between text-gray-400 mt-3">
          <div className="flex items-center space-x-2">
            <button className="flex items-center text-red-500 hover:text-red-400 transition-colors">
              <Heart size={20} className="mr-1" /> 
              <span>{likes.toLocaleString()}</span>
            </button>
            <button className="flex items-center hover:text-gray-200 transition-colors">
              <MessageCircle size={20} className="mr-1" /> 
              <span>{commentsCount.toLocaleString()}</span>
            </button>
          </div>
          {isRisingFast && (
            <span className="text-xs font-semibold bg-blue-500 text-white px-2 py-1 rounded-full">Rising Fast</span>
          )}
        </div>
      </div>

      {/* Comment Section */}
      <div className="p-4 border-t border-gray-700/50">
        <CommentSection trendId={id} />
      </div>

    </div>
  );
};

export default InstagramTrendCard;