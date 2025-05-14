import React from 'react';
import InstagramTrendCard, { InstagramTrendCardProps } from './InstagramTrendCard';

const mockInstagramPosts: InstagramTrendCardProps[] = [
  {
    id: 'insta1',
    username: 'CreativeCoder',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    imageUrl: 'https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
    caption: 'Exploring the beauty of algorithmic art. #generativeart #creativecoding #digitalart',
    likes: 1205,
    commentsCount: 88,
    aiExplanation: "This post is trending due to its unique visual appeal, showcasing a popular niche (algorithmic art) with high engagement from the creative tech community. The use of relevant hashtags broadens its reach.",
    isRisingFast: true,
  },
  {
    id: 'insta2',
    username: 'TravelExplorer',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
    caption: 'Chasing sunsets and dreams. This view was breathtaking! #travel #adventure #wanderlust #sunset',
    likes: 2567,
    commentsCount: 152,
    aiExplanation: "Stunning sunset visuals are consistently popular on Instagram. This post leverages high-quality photography and evocative hashtags related to travel, a highly engaging content category."
  },
  {
    id: 'insta3',
    username: 'FoodieAdventures',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fHx8fHww&auto=format&fit=crop&w=100&q=60',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
    caption: 'Delicious brunch spread from this hidden gem. Highly recommend the avocado toast! 🥑 #foodie #brunch #foodphotography #delicious',
    likes: 980,
    commentsCount: 65,
    aiExplanation: "Food content, especially well-photographed brunch items, performs well. The 'hidden gem' aspect creates intrigue, and specific recommendations like 'avocado toast' are relatable."
  },
   {
    id: 'insta4',
    username: 'FitnessJourney',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBwcm9maWxlfGVufDB8fHx8fHww&auto=format&fit=crop&w=100&q=60',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
    caption: 'Pushing limits and crushing goals. Morning workouts are the best! 💪 #fitnessmotivation #gymlife #healthy #workout',
    likes: 1850,
    commentsCount: 110,
    aiExplanation: "Motivational fitness content often resonates widely. This post combines an aspirational message with popular fitness hashtags, tapping into a large and active community."
  },
];

const InstagramTrends: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockInstagramPosts.map((post) => (
        <InstagramTrendCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default InstagramTrends;
