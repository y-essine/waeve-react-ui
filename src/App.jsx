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
            <div className="hidden w-4 w-5 w-6 w-7 w-8 w-9 w-10 h-4 h-5 h-6 h-7 h-8 h-9 h-10"></div>
        </div>
    );
}

export default App;
