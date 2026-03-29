import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
         createUserWithEmailAndPassword, signInWithEmailAndPassword,
         signOut as fbSignOut, updateProfile }
  from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, deleteDoc,
         setDoc, query, orderBy, limit, serverTimestamp }
  from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getStorage, ref, uploadString, getDownloadURL }
  from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyDyZNxnzY_F0U9ENwLdwTNKQlZrcNKXYCc",
  authDomain: "biterank-6b09e.firebaseapp.com",
  projectId: "biterank-6b09e",
  storageBucket: "biterank-6b09e.firebasestorage.app",
  messagingSenderId: "189015732878",
  appId: "1:189015732878:web:5bd71f50ef74b97d784fdf",
  measurementId: "G-BBLM8SZCKY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// Expose photo upload helper
window._uploadPhoto = async (dataUrl, path) => {
  const storageRef = ref(storage, path);
  const format = dataUrl.includes('data:image/png') ? 'data_url' : 'data_url';
  await uploadString(storageRef, dataUrl, 'data_url');
  return getDownloadURL(storageRef);
};
const googleProvider = new GoogleAuthProvider();

// Expose Firestore helpers globally
window._db = db;
window._fsAdd = (col, data) => addDoc(collection(db, col), {...data, ts: serverTimestamp()});
window._fsGet = (col) => getDocs(collection(db, col));
window._fsGetDoc = (col, id) => getDoc(doc(db, col, id));
window._fsSet = (col, id, data) => setDoc(doc(db, col, id), data);
window._fsDel = (col, id) => deleteDoc(doc(db, col, id));
window._fsQuery = (col, field, dir='desc', lim=50) =>
  getDocs(query(collection(db, col), orderBy(field, dir), limit(lim)));

// Reviews: write a review, fetch reviews for a restaurant
window._fsAddReview = async (restaurantId, reviewData) => {
  const ref = await addDoc(collection(db, 'reviews'), {
    ...reviewData,
    restaurantId,
    ts: serverTimestamp(),
  });
  return ref.id;
};
window._fsFetchReviews = async (restaurantId) => {
  try {
    // Try server-side filter first (requires composite index on restaurantId + ts)
    const q = query(
      collection(db, 'reviews'),
      where('restaurantId', '==', restaurantId),
      orderBy('ts', 'desc'),
      limit(100)
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
  } catch(e) {
    // Fall back to client-side filter if index doesn't exist
    const q = query(collection(db, 'reviews'), orderBy('ts', 'desc'), limit(200));
    const snap = await getDocs(q);
    return snap.docs
      .filter(d => d.data().restaurantId === restaurantId)
      .map(d => ({ firestoreId: d.id, ...d.data() }));
  }
};
window._fsDeleteReview = (id) => deleteDoc(doc(db, 'reviews', id));
window._fsFetchAllReviews = (lim=100) =>
  getDocs(query(collection(db, 'reviews'), orderBy('ts', 'desc'), limit(lim)));

// Game state persistence
window._fsSaveGameState = async (uid, state) => {
  // Store in a subcollection keyed by uid
  await setDoc(doc(db, 'gameStates', uid), {
    ...state,
    ts: serverTimestamp(),
    _synced: true,
  });
};
window._fsLoadGameState = async (uid) => {
  const snap = await getDoc(doc(db, 'gameStates', uid));
  return snap.exists() ? snap.data() : null;
};

// User preferences
window._fsSaveUserPrefs = async (uid, prefs) => {
  await setDoc(doc(db, 'users', uid), {
    ...prefs,
    ts: serverTimestamp(),
    _synced: true,
  }, { merge: true }); // merge so we don't wipe unread fields
};
window._fsLoadUserPrefs = async (uid) => {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : {};
};

// Expose auth functions to global scope for use in onclick handlers
window._fbAuth = auth;
window._fbSignInGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch(e) {
    throw e;
  }
};
window._fbSignInEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
window._fbSignUpEmail = async (name, email, password) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  return cred.user;
};
window._fbSignOut = () => fbSignOut(auth);

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    const u = {
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      av: (user.displayName || user.email)[0].toUpperCase(),
      avatarImg: user.photoURL || null,
      uid: user.uid,
    };
    if (typeof setUser === 'function') setUser(u);
  } else {
    if (typeof handleSignOut === 'function') handleSignOut();
  }
});
