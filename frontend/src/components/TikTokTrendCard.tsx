import React from 'react';
import { Heart, MessageCircle, Play } from 'lucide-react';
import CommentSection from '../components/CommentSection'; // Import CommentSection

export interface TikTokTrendCardProps {
  id: string;
  creatorName: string;
  creatorAvatarUrl: string;
  videoThumbnailUrl: string;
  videoDescription: string;
  likes: number;
  commentsCount: number;
  aiExplanation: string; // Made non-optional for this step
  isRisingFast?: boolean;
}

const TikTokTrendCard: React.FC<TikTokTrendCardProps> = ({
  id,
  creatorName,
  creatorAvatarUrl,
  videoThumbnailUrl,
  videoDescription,
  likes,
  commentsCount,
  aiExplanation,
  isRisingFast,
}) => {
  return (
    <div 
      className={`bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl 
                  ${isRisingFast ? 'ring-2 ring-pink-500 shadow-pink-500/30' : 'ring-1 ring-gray-700'}`}
    >
      {/* Video Thumbnail - Vertical Emphasis */}
      <div className="relative aspect-[9/16] w-full bg-black group">
        <img 
          src={videoThumbnailUrl} 
          alt={videoDescription.substring(0, 30)} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play size={64} className="text-white opacity-75" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Creator Info */}
        <div className="flex items-center mb-2">
          <img src={creatorAvatarUrl} alt={`${creatorName}'s avatar`} className="w-8 h-8 rounded-full mr-2 object-cover" />
          <span className="font-semibold text-sm text-gray-200 truncate">{creatorName}</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-xs mb-3 leading-normal flex-grow whitespace-pre-line">
          {videoDescription.length > 100 ? `${videoDescription.substring(0, 100)}...` : videoDescription}
        </p>

        {/* Stats & Rising Fast Badge */}
        <div className="flex items-center justify-between text-gray-400 mt-auto pt-2 border-t border-gray-700/50">
          <div className="flex items-center space-x-3">
            <button className="flex items-center text-red-500 hover:text-red-400 transition-colors">
              <Heart size={18} className="mr-1" /> 
              <span className="text-xs">{likes.toLocaleString()}</span>
            </button>
            <button className="flex items-center hover:text-gray-200 transition-colors">
              <MessageCircle size={18} className="mr-1" /> 
              <span className="text-xs">{commentsCount.toLocaleString()}</span>
            </button>
          </div>
          {isRisingFast && (
            <span className="text-xs font-semibold bg-pink-500 text-white px-2 py-0.5 rounded-full">Rising Fast</span>
          )}
        </div>

        {/* AI Explanation */}
        {aiExplanation && (
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <h4 className="text-xs font-semibold text-pink-400 mb-1">AI Insights ✨</h4>
            <p className="text-xs text-gray-400 leading-normal italic">
              {aiExplanation}
            </p>
          </div>
        )}

        {/* Comment Section */}
        <div className="mt-3 pt-3 border-t border-gray-700/50">
          <CommentSection trendId={id} />
        </div>
      </div>
    </div>
  );
};

export default TikTokTrendCard;
