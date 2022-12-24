import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '@/views/Main';
import Home from '@/views/Home';
import Explore from '@/views/Explore';
import Settings from '@/views/Settings';

function App() {
    return (
        <div className="App w-screen h-screen">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="explore" element={<Explore />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="login" element={<h1>Login</h1>} />
                    <Route path="register" element={<h1>Register</h1>} />
                    <Route
                        path="*"
                        element={
                            <div className="px-8 py-5">
                                <h1>Not found.</h1>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
