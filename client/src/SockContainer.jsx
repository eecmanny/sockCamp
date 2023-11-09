// import { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
// import Combo from "./components/Combo/Combo";
// import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import HTML from "./components/Html/Html";
// import CSS from "./components/Css/Css";
// import Javascript from "./components/Javascript/Javascript";
// import React from "./components/React/React";
// import Signup from "./components/Signup/Signup";
// import App from "./App";

// const Router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/login",
//                 element: <Login />,
//             },
//             {
//                 path: "/signup",
//                 element: <Signup />,
//             },
//             {
//                 path: "/html",
//                 element: <Html />,
//             },
//             {
//                 path: "/css",
//                 element: <Css />,
//             },
//             {
//                 path: "/javascript",
//                 element: <Javascript />,
//             },
//             {
//                 path: "/react",
//                 element: <React />,
//             },
//             {
//                 path: "/combo",
//                 element: <Combo />,
//             },
//         ],
//     }
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     // <RouterProvider Router={Router}>
//     //     <Header />
//     //     <Router />
//     //     <Footer />
//     // </RouterProvider>
//     <RouterProvider Router={Router}/>
// );




// // export default function sockContainer() {
// //     const [currentPage, setCurrentPage] = useState("Home");

// //     const renderPage = () => {
// //         console.log("test")
// //         if (currentPage === "Home") {
// //             return <Home />;
// //         }
// //         if (currentPage === "Login") {
// //             return <Login />;
// //         }
// //         if (currentPage === "Signup") {
// //             return <Signup />;
// //         }
// //         if (currentPage === "Html") {
// //             return <HTML />;
// //         }
// //         if (currentPage === "Css") {
// //             return <CSS />;
// //         }
// //         if (currentPage === "Javascript") {
// //             return <Javascript />;
// //         }
// //         if (currentPage === "React") {
// //             return <React />;
// //         }
// //          else if (currentPage === "Combo") 
// //             return <Combo />;
   
// //     };


// // const HeaderPageChange = (page) => setCurrentPage(page);
// // const FooterPageChange = (page) => setCurrentPage(page);

// // return (
// //     <div>
// //         <Header currentPage={currentPage} handlePageChange={HeaderPageChange} />
// //         {HeaderPageChange()}
// //         <main>{renderPage()}</main>
// //         <Footer currentPage={currentPage} handlePageChange={FooterPageChange} />
// //     </div>
// // );
// // }
