import { useState, useEffect, useContext, createContext } from "react";
import { auth, onAuthStateChanged, db, getDocs, collection } from "../firebase";

const AuthContext = createContext();

export function UserProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [news, setNews] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCandidates = async () => {
      const querySnapshot = await getDocs(collection(db, "candidates"));
      const fetchCandidate = [];
      querySnapshot.forEach((doc) => {
        const fetchItem = {
          id: doc.id,
          ...doc.data(),
        };
        fetchCandidate.push(fetchItem);
      });
      setCandidate(fetchCandidate);
      console.log("Candiduate Loaded");
    };

    return getCandidates;
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const querySnapshot = await getDocs(collection(db, "news"));
      const fetchNewsItems = [];
      querySnapshot.forEach((item) => {
        const fetchItem = {
          id: item.id,
          ...item.data(),
        };
        fetchNewsItems.push(fetchItem);
        // console.log(doc);
      });
      setNews(fetchNewsItems);
      console.log("News Loaded");
    };

    return getNews;
  }, []);

  const values = {
    currentUser,
    setCurrentUser,
    candidate,
    news,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
