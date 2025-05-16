import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, onAuthStateChanged, FirebaseUser, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: string;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  error: null
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      try {
        setLoading(true);
        
        if (firebaseUser) {
          // Fetch additional user data from Firestore
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            
            setCurrentUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              role: userData.role || 'hr' // Default to 'hr' if role is not specified
            });
          } else {
            // If user document doesn't exist in Firestore
            setCurrentUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              role: 'hr' // Default role
            });
          }
        } else {
          setCurrentUser(null);
        }
      } catch (err) {
        console.error("Error in auth state change:", err);
        setError("Failed to authenticate user");
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;