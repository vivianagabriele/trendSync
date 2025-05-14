import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import InstagramTrends from "../components/InstagramTrends";
import TikTokTrends from "../components/TikTokTrends";
import { useCurrentUser, auth } from 'app'; // Import auth utilities
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from "@/components/ui/button"; // Import Button for logout

const platforms = [
  { name: "Twitter", icon: "🐦", style: "rounded-lg" }, 
  { name: "TikTok", icon: "🎵", style: "rounded-md" }, // Slightly less rounded for TikTok
  { name: "Instagram", icon: "📸", style: "rounded-xl" }, // More rounded for Instagram
  { name: "YouTube", icon: "▶️", style: "rounded-lg" },
  { name: "Google", icon: "🔍", style: "rounded-lg" },
];

// Helper function to determine platform-specific button styles
const getPlatformButtonStyle = (platformName: string, isSelected: boolean) => {
  let baseStyle = "";
  const platform = platforms.find(p => p.name === platformName);
  if (platform) {
    baseStyle = platform.style; // e.g., 'rounded-xl' for Instagram
  }

  if (isSelected) {
    return `${baseStyle} bg-blue-600 text-white shadow-md scale-105`;
  }
  return `${baseStyle} bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white`;
};

export default function DashboardPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(platforms[0].name);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { user, loading } = useCurrentUser(); // Get user state
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/'); // Redirect to landing page after logout
  };

  // If loading and not yet user, or if not loading and still no user (on a protected route)
  // UserGuard should handle redirection, but this provides a fallback UI.
  if (loading) {
    return (
      <div className="flex flex-col h-screen bg-gray-900 text-gray-100 items-center justify-center">
        <p className="text-xl text-gray-400">Loading dashboard...</p>
      </div>
    );
  }

  // UserGuard should ideally prevent this page from rendering if not authenticated.
  // If user is null after loading, it implies an issue or direct access attempt to a protected route without auth.
  // Redirecting or showing a message is an option here, but UserGuard is the primary gatekeeper.
  // For this example, we'll assume UserGuard handles redirection if user is null.

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-md py-3 px-4 sm:px-6 flex justify-between items-center fixed w-full top-0 left-0 z-50 h-16">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="md:hidden mr-3 text-gray-300 hover:text-white focus:outline-none"
          >
            {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-blue-400">TrendSync Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-gray-300 hidden sm:block">Hi, {user.displayName || user.email}</span>
              <Button 
                variant="outline"
                size="sm"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-900 transition-colors duration-300"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            // This case should ideally not be reached on a protected page due to UserGuard
            <Button 
              variant="outline"
              size="sm"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-colors duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </header>

      {/* Main content area with sidebar */}
      <div className="flex flex-1 pt-16"> 
        {/* Sidebar */}
        <aside 
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-800 p-6 space-y-4 overflow-y-auto transition-transform duration-300 ease-in-out z-40 md:translate-x-0 
                      ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <h2 className="text-lg font-semibold text-gray-400 mb-4 border-b border-gray-700 pb-2">Platforms</h2>
          <nav>
            <ul className="space-y-2">
              {platforms.map((platform) => (
                <li key={platform.name}>
                  <button
                    onClick={() => setSelectedPlatform(platform.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg 
                                ${getPlatformButtonStyle(platform.name, selectedPlatform === platform.name)}`}
                  >
                    <span className="text-xl">{platform.icon}</span>
                    <span className="font-medium">{platform.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 sm:p-8 md:ml-64"> 
          {/* Overlay for mobile when sidebar is open */}
          {isMobileSidebarOpen && (
            <div 
              onClick={() => setIsMobileSidebarOpen(false)} 
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
            ></div>
          )}

          {selectedPlatform === "Instagram" ? (
            <InstagramTrends />
          ) : selectedPlatform === "TikTok" ? (
            <TikTokTrends />
          ) : selectedPlatform ? (
            <div>
              <h2 className="text-3xl font-bold text-blue-300 mb-6">
                {selectedPlatform} Trends
              </h2>
              <div className="bg-gray-800 p-8 rounded-xl shadow-2xl min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-lg">
                  Content for {selectedPlatform} will be displayed here.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
                 <p className="text-gray-600 text-2xl">Select a platform to view trends.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
