import { Outlet } from "react-router-dom";

export default function BaseLayout(){
    return(
        <>
            <header style={{ backgroundColor: '#f8f9fa' }}>
                <h1>Health Literacy App</h1>
            </header>

            <main style={{ minHeight: '80vh', padding: '1rem' }}>
                <Outlet/>
            </main>

            <footer style={{ backgroundColor: '#f8f9fa', padding: '1rem', marginTop: 'auto' }}>
                &copy; 2022 Health Literacy App. All rights reserved. Designed by Team Health Literacy.
            </footer>
        </>
    )
}