import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Home from '@/views/Home';

function App() {
    return (
        <div className="App w-screen h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="explore" element={<h1>Explore</h1>} />
                        <Route path="settings" element={<h1>Settings</h1>} />
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
