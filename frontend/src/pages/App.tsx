import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, TrendingUp, MessageSquare } from 'lucide-react';
import { useCurrentUser, auth } from 'app'; // Import useCurrentUser and auth

export default function LandingPage() {
  const navigate = useNavigate();
  const { user, loading } = useCurrentUser(); // Get user state

  const handleLogout = async () => {
    await auth.signOut();
    // Optional: navigate to home or login page after logout, though Firebase often handles redirect contextually
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-6 sm:p-8">
      {/* Header - Updated for Auth State */}
      <header className="w-full max-w-6xl mx-auto py-6 fixed top-0 left-0 right-0 px-6 bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-400 cursor-pointer" onClick={() => navigate('/')}>TrendSync</h1>
          <div>
            {loading ? (
              <p className="text-gray-400">Loading...</p>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">Hi, {user.displayName || user.email}</span>
                <Button 
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-900 transition-colors duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-colors duration-300"
                onClick={() => navigate('/login')}
              >
                Login / Sign Up
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center pt-20 sm:pt-24">
        <section className="w-full max-w-3xl mx-auto py-16 sm:py-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              TrendSync
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-8">
            Your Daily Pulse on Digital Waves.
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Discover what's buzzing across social media. TrendSync summarizes the latest trends, provides AI-powered explanations for why they're trending, and lets you dive into community discussions.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate('/dashboard-page')}
          >
            Explore Trends Now
          </Button>
        </section>

        {/* Key Features Section */}
        <section id="features" className="w-full max-w-5xl mx-auto py-16 sm:py-24">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-blue-300">Why TrendSync?</h3>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[{
              icon: <TrendingUp size={48} className="text-pink-400 mb-4" />,
              title: "Cross-Platform Insights",
              description: "See what's trending across TikTok, Instagram, YouTube, and more – all in one unified dashboard."
            }, {
              icon: <Zap size={48} className="text-yellow-400 mb-4" />,
              title: "AI-Powered Explanations",
              description: "Understand the 'why' behind each trend with intelligent summaries and contextual insights generated by AI."
            }, {
              icon: <MessageSquare size={48} className="text-green-400 mb-4" />,
              title: "Community Discussions",
              description: "Join the conversation. Share your take, read diverse opinions, and connect with others on the latest digital waves."
            }].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                {feature.icon}
                <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-100">{feature.title}</h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Simple for landing page */}
      <footer className="w-full max-w-6xl mx-auto py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TrendSync. All rights reserved.
      </footer>
    </div>
  );
}
