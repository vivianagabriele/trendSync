import { SignInOrUpForm } from "app";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-gray-800 shadow-2xl rounded-xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            TrendSync
          </h1>
          <p className="text-gray-400 text-lg">Sign in or create an account</p>
        </div>
        
        {/* FirebaseUI (SignInOrUpForm) will be styled by its own library, 
            but we ensure its container fits our theme. */}
        <div className="firebaseui-container">
          <SignInOrUpForm 
            signInOptions={{
              google: true, 
              emailAndPassword: true 
            }}
          />
        </div>

        <div className="mt-8 text-center">
          <Button 
            variant="link"
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            onClick={() => navigate("/")}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
      <style jsx global>{`
        /* Styles to help FirebaseUI better fit the dark theme */
        .firebaseui-container {
          background-color: transparent !important; /* Override default white */
        }
        .firebaseui-card-header {
          display: none; /* Hide default header, we have our own */
        }
        .firebaseui-title {
          color: #e5e7eb !important; /* gray-200 */
          font-family: inherit !important;
          font-size: 1.25rem !important; /* text-xl */
          font-weight: 600 !important; /* semibold */
          margin-bottom: 1.5rem !important; /* mb-6 */
        }
        .firebaseui-label {
          color: #9ca3af !important; /* gray-400 */
          font-family: inherit !important;
        }
        .firebaseui-input, .firebaseui-input-invalid {
          background-color: #374151 !important; /* gray-700 */
          color: #f3f4f6 !important; /* gray-100 */
          border-color: #4b5563 !important; /* gray-600 */
          font-family: inherit !important;
        }
        .firebaseui-input:focus {
          border-color: #60a5fa !important; /* blue-400 */
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important;
        }
        .firebaseui-button {
          background-color: #3b82f6 !important; /* blue-500 */
          color: white !important;
          font-family: inherit !important;
          font-weight: 600 !important;
          text-transform: none !important;
          letter-spacing: normal !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
        }
        .firebaseui-button:hover {
          background-color: #2563eb !important; /* blue-600 */
        }
        .firebaseui-id-secondary-link {
          color: #60a5fa !important; /* blue-400 */
        }
        .firebaseui-id-secondary-link:hover {
          color: #3b82f6 !important; /* blue-500 */
        }
        .firebaseui-text {
          color: #d1d5db !important; /* gray-300 */
        }
        .firebaseui-tospp-full-message {
            color: #9ca3af !important; /* gray-400 */
        }
        .firebaseui-link {
             color: #60a5fa !important; /* blue-400 */
        }
        .firebaseui-link:hover {
             color: #3b82f6 !important; /* blue-500 */
        }
        .firebaseui-error-message {
            color: #f87171 !important; /* red-400 */
        }
      `}</style>
    </div>
  );
}
