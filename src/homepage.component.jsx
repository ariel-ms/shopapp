import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className = 'homepage'>
        <div className = 'directory-menu'>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <hi className = 'title'>HATS</hi>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <hi className = 'title'>JACKETS</hi>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;