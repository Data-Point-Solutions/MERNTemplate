import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/originalApp">Original App</Link></li>
                    {/* Add additional links here */}
                </ul>
            </nav>
        </header>
    );
}