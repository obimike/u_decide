import { useState, useEffect, useContext, createContext, useRef } from "react";
import {
  auth,
  onAuthStateChanged,
  db,
  getDocs,
  collection,
  doc,
  getDoc,
} from "../firebase";
import { formatDate, subtractDays } from "../utils/helpers";

const AuthContext = createContext();

export function UserProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [news, setNews] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [electionDate, setElectionDate] = useState(
    formatDate(subtractDays(new Date(), 5))
  );
  const [_date, set_date] = useState(-1);

  const [loading, setLoading] = useState(true);

  const candidateMounted = useRef(true);
  const newsMounted = useRef(true);

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
      candidateMounted.current = false;
    };
    getCandidates();
    // return candidateMounted.current;
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
      newsMounted.current = false;
      console.log("News Loaded");
    };
    getNews();
    // return newsMounted.current;
  }, [props]);

  useEffect(() => {
    const getDate = async () => {
      const docRef = doc(db, "elections", "date");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setElectionDate(docSnap.data().date.toString());
        const dateFromServer = formatDate(new Date(docSnap.data().date));
        console.log(formatDate(new Date()) > dateFromServer);
        if (formatDate(new Date()) < dateFromServer) {
          set_date(1);
          console.log("Server Date is in the future");
        } else if (formatDate(new Date()) === dateFromServer) {
          console.log("Server Date is as the date as today");
          set_date(0);
        } else if (formatDate(new Date()) > dateFromServer) {
          console.log("Server Date is in the past");
          set_date(-1);
        }
      } else {
        console.log("No such document!");
      }
    };
    getDate();
  }, []);

  const values = {
    currentUser,
    setCurrentUser,
    candidate,
    news,
    electionDate,
    _date,
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
