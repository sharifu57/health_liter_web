import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function BaseLayout(){
    return(
        <>
            {/* <header style={{ backgroundColor: '#f8f9fa' }}>
                <Navbar/>
            </header> */}
            <Navbar/>

            <main style={{ minHeight: '80vh', padding: '1rem' }}>
                <Outlet/>
            </main>

            <footer style={{ backgroundColor: '#f8f9fa', padding: '1rem', marginTop: 'auto' }}>
                &copy; 2022 Health Literacy App. All rights reserved. Designed by Team Health Literacy.
            </footer>
        </>
    )
}