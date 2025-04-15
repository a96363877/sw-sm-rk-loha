import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCKJm0ZPKJtL770jecy8ld89Jgw7tw_DX4",
  authDomain: "chatapp-6ef93.firebaseapp.com",
  databaseURL: "https://chatapp-6ef93-default-rtdb.firebaseio.com",
  projectId: "chatapp-6ef93",
  storageBucket: "chatapp-6ef93.firebasestorage.app",
  messagingSenderId: "28264268558",
  appId: "1:28264268558:web:31442b89d29963ac114d5f",
  measurementId: "G-LH4ZSPQ1YF"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
  isOnline?: boolean
  lastSeen: string
}
