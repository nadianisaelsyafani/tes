// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW7J2Q7rEIeO8PfUgzS8aW3QOTsfwBdog",
  authDomain: "biodata-karyawan.firebaseapp.com",
  databaseURL: "https://biodata-karyawan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "biodata-karyawan",
  storageBucket: "biodata-karyawan.appspot.com",
  messagingSenderId: "310264186057",
  appId: "1:310264186057:web:2339eeb28f16edbf483918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, child, get, set, update, remove, onValue} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
const db = getDatabase();

const dbRef = ref(db, `datadata`);

let tbody = document.getElementById('tbody');
//Read Data
onValue(dbRef, ambildata);
function ambildata(snapshot){
    let tabel = '';
    let no = 1;
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childSnapshot.val());

        tabel += 
        `
            <tr>
                <th>${no}</th>
                <th>${childData.nama}</th>
                <th>${childData.nrp}</th>
                <th>${childData.departemen}</th>
                <th>${childData.user}</th>
                <th>${childData.problem}</th>
                <th>${childData.hari}</th>
                <th>${childData.jam}</th>
                <th>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit('${childKey}')">Edit</button>
                    <button type="button" class="btn btn-danger" onclick="hapus('${childKey}')" id="demo"> Hapus </button>
                </th>
            </tr>
        `;
        no++; 
    });
    tbody.innerHTML = tabel;
}

function hapus(id){
    console.log(id);
    // getDatabase.ref('datadata/' + id).remove();
}



// onValue(dbRef, (snapshot) => {
//     let tabel = '';
//     let no = 1;
//     snapshot.forEach((childSnapshot) => {
//         const childKey = childSnapshot.key;
//         const childData = childSnapshot.val();
        
//         console.log(childData);
//         console.log(childKey);

//         tabel += 
//         `
//             <tr>
//                 <th>${no}</th>
//                 <th>${childData.nama}</th>
//                 <th>${childData.nrp}</th>
//                 <th>${childData.departemen}</th>
//                 <th>${childData.user}</th>
//                 <th>${childData.problem}</th>
//                 <th>${childData.hari}</th>
//                 <th>${childData.jam}</th>
//                 <th>
//                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editRow('${childKey}')">Edit</button>
//                     <button type="button" class="btn btn-danger" onclick="deleteRow('${childKey}')"> Hapus </button>
//                 </th>
//             </tr>
//         `;
//         no++;
//     });
//     tbody.innerHTML = tabel;
// })