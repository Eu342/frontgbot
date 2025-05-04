import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Layout';
import './Styles/index.css';
import 'Assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf';

// TODO Поставить изображение background-image.

/** Корневой блок приложения. */
const root = ReactDOM.createRoot(document.getElementById('root')!);

/** Рендер приложения в корневой блок. */
root.render(<Layout />);