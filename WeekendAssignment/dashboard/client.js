// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const client = () => {
//   const [users, setUsers] = useState({ hits: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await axios(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       setUsers({ hits: data });
//     };

//     fetchData();
//   }, [setUsers]);

//   return (
//     <div>
//       <ul>
//         {users.hits &&
//           users.hits.map((item) => (
//             <li key={item.id}>
//               <span>{item.name}</span>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };
// export default client;
