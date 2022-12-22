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
                        <Route path="about" element={<h1>About</h1>} />
                    </Route>
                    <Route path="login" element={<h1>Login</h1>} />
                    <Route path="register" element={<h1>Register</h1>} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
