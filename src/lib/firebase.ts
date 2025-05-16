import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile,
  type User as FirebaseUser,
  onAuthStateChanged
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp, 
  DocumentData,
  QueryDocumentSnapshot
} from "firebase/firestore";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4E6KYyo-66-IR6eCxvQ7AzE6eWGyGaRc",
  authDomain: "talentsleuth-ai.firebaseapp.com",
  projectId: "talentsleuth-ai",
  storageBucket: "talentsleuth-ai.firebasestorage.app",
  messagingSenderId: "166933748182",
  appId: "1:166933748182:web:f44470489f1a7c055eec77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Authentication functions
export const createUser = async (email: string, password: string, displayName: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName });
  
  // Create user profile in Firestore
  await setDoc(doc(db, "users", userCredential.user.uid), {
    email,
    displayName,
    role: "hr", // Default role
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
  
  return userCredential.user;
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

// Firestore functions
export const createResume = async (userId: string, resumeData: any, file: File) => {
  // Upload file to storage
  const storageRef = ref(storage, `resumes/${userId}/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  
  // Create entry in Firestore
  const resumeRef = doc(collection(db, "resumes"));
  await setDoc(resumeRef, {
    userId,
    fileName: file.name,
    fileUrl: downloadURL,
    parsedData: resumeData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
  
  return resumeRef.id;
};

export const getResumesByUser = async (userId: string) => {
  const resumesRef = collection(db, "resumes");
  const q = query(resumesRef, where("userId", "==", userId), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const createJobDescription = async (userId: string, jobData: any) => {
  const jobRef = doc(collection(db, "jobDescriptions"));
  await setDoc(jobRef, {
    userId,
    ...jobData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
  
  return jobRef.id;
};

export const getJobDescriptionsByUser = async (userId: string) => {
  const jobsRef = collection(db, "jobDescriptions");
  const q = query(jobsRef, where("userId", "==", userId), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const saveAnalysisResult = async (resumeId: string, jobId: string, results: any) => {
  const resultRef = doc(collection(db, "analysisResults"));
  await setDoc(resultRef, {
    resumeId,
    jobId,
    results,
    createdAt: Timestamp.now()
  });
  
  return resultRef.id;
};

export const getRecentAnalysisResults = async (userId: string, limit: number = 10) => {
  const resultsRef = collection(db, "analysisResults");
  const resumesRef = collection(db, "resumes");
  
  // Get user's resumes
  const userResumesQuery = query(resumesRef, where("userId", "==", userId));
  const userResumesSnapshot = await getDocs(userResumesQuery);
  const resumeIds = userResumesSnapshot.docs.map(doc => doc.id);
  
  if (resumeIds.length === 0) return [];
  
  // Get analysis results for those resumes
  const resultsQuery = query(
    resultsRef, 
    where("resumeId", "in", resumeIds), 
    orderBy("createdAt", "desc"), 
    limit
  );
  
  const resultsSnapshot = await getDocs(resultsQuery);
  
  return resultsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Export Firebase instances
export { app, auth, db, storage, onAuthStateChanged };
export type { FirebaseUser, DocumentData, QueryDocumentSnapshot };