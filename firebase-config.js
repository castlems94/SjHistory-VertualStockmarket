// Firebase 콘솔 > 프로젝트 설정 > 일반 > 내 앱 > SDK 설정 및 구성 에서 확인한 값입니다.
const firebaseConfig = {
  apiKey: "AIzaSyAkTGT-hMuMzD8d3Y_DtG7uh_zfWv1J8u0",
  authDomain: "sjhistory-vertualstockmarket.firebaseapp.com",
  databaseURL: "https://sjhistory-vertualstockmarket-default-rtdb.firebaseio.com",
  projectId: "sjhistory-vertualstockmarket",
  storageBucket: "sjhistory-vertualstockmarket.firebasestorage.app",
  messagingSenderId: "157828599257",
  appId: "1:157828599257:web:338b0b5333cfd88efb1dc8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 신규 학생 계좌 개설 시 지급되는 초기 예수금 (원)
const INITIAL_FUNDS = 1000000;
