import React from 'react';

import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import css from '../assets/css.png';
import html5 from '../assets/html5.png';
import vscode from '../assets/vscode.png';
import github from '../assets/github.png';
import tailwind_css from '../assets/tailwind_css.png';
import { FaBootstrap } from 'react-icons/fa';


const DeveloperIconsBackground = () => {
    return (
        <div className="floating-icon-container">
            <img src={javascript} alt=""  className='floating-icon'/>
            <img src={react} alt=""  className='floating-icon'/>
            <img src={css} alt=""  className='floating-icon'/>
            <img src={vscode} alt=""  className='floating-icon'/>
            <img src={github} alt=""  className='floating-icon'/>
            <img src={html5} alt=""  className='floating-icon'/>
            <FaBootstrap style={{ color: '#563d7c' }}  className='floating-icon'/>
            <img src={tailwind_css} alt=""  className='floating-icon'/>

          
        </div>
    );
};


export default DeveloperIconsBackground;