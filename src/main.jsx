import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <Card></Card>
                    </div>
                    <div class="col-6">
                        <Card></Card>
                    </div>
                    <div class="col-6">
                        <Card></Card>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </StrictMode>
);
