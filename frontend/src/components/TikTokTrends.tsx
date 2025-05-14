import React from 'react';
import TikTokTrendCard, { TikTokTrendCardProps } from './TikTokTrendCard';

const mockTikTokVideos: TikTokTrendCardProps[] = [
  {
    id: 'tiktok1',
    creatorName: 'DanceMachineX',
    creatorAvatarUrl: 'https://images.unsplash.com/photo-1611162617213-6d22e5050085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlrdG9rJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60',
    videoThumbnailUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    videoDescription: '🔥 New dance challenge alert! Can you keep up? #DanceChallenge #TikTokDance #Viral',
    likes: 1200000,
    commentsCount: 8500,
    aiExplanation: "This dance challenge is gaining traction due to its catchy audio, easy-to-learn moves, and high shareability. Influencer participation is also boosting its visibility.",
    isRisingFast: true,
  },
  {
    id: 'tiktok2',
    creatorName: 'ComedyCentralLaughs',
    creatorAvatarUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    videoThumbnailUrl: 'https://images.unsplash.com/photo-1516788879806-163923513c1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', // Placeholder - ideally a vertical video thumbnail
    videoDescription: "My cat's reaction to the new vacuum cleaner is PRICELESS #FunnyCat #Comedy #PetLife", // Removed emoji
    likes: 2300000,
    commentsCount: 12000,
    aiExplanation: "Relatable pet content combined with a humorous situation (cat vs. vacuum) has broad appeal. The genuine reaction elicits strong engagement (likes, comments, shares)."
  },
  {
    id: 'tiktok3',
    creatorName: 'DIYHacksQueen',
    creatorAvatarUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fHx8fHww&auto=format&fit=crop&w=100&q=60',
    videoThumbnailUrl: 'https://images.unsplash.com/photo-1580894732444-8ec0ef580200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', // Placeholder
    videoDescription: 'Transform your old jeans into a stylish bag! ✨ #DIYFashion #LifeHacks #Crafty',
    likes: 850000,
    commentsCount: 5300,
    aiExplanation: "DIY and life-hack content performs well, especially when it offers practical value and visual transformation. The 'trash to treasure' angle is highly engaging."
  },
  {
    id: 'tiktok4',
    creatorName: 'ChefReacts',
    creatorAvatarUrl: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fHx8fHww&auto=format&fit=crop&w=100&q=60',
    videoThumbnailUrl: 'https://images.unsplash.com/photo-1606791402970-52049f7136e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', // Placeholder
    videoDescription: 'Reacting to viral food tiktoks... some of these are WILD! 🤯 #FoodReview #TikTokFood #Chef',
    likes: 1500000,
    commentsCount: 9200,
    aiExplanation: "Reaction videos are a popular format. Combining this with viral food trends and a creator with perceived authority (Chef) creates a compelling content loop that drives views and discussion."
  },
];

const TikTokTrends: React.FC = () => {
  return (
    // Adjust grid for potentially taller cards, more spacing if needed
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {mockTikTokVideos.map((video) => (
        <TikTokTrendCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default TikTokTrends;
