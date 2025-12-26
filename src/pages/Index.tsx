import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the pure HTML version
    window.location.href = "/dashboard";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center text-white">
        <div className="animate-pulse">Loading...</div>
      </div>
    </div>
  );
};

export default Index;
