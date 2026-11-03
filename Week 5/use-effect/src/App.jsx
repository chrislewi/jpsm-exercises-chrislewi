import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState({
    user: false,
    posts: false
  });
  const [error, setError] = useState({
    user: null,
    posts: null
  });

  // Fetch user data when userId changes
  useEffect(() => {
    if (!userId) {
      setUser(null);
      return;
    }

    const abortController = new AbortController();

    const fetchUser = asynce () => {
      setLoading(prev => ({ ...prev, user: true }));
      setError(prev => ({ ...prev, user: null }));

      try {
        // Simulator API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await fetch(`/api/users/${userId}`, { signal: abortController.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        setUser(userData);
    } catch (err) {
      if (err.name !== 'AbortError') {}
    }
  }
}
