import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import styles from "./footer.module.scss";

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
                <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                <li><a href="https://www.youtube.com/"><FaYoutube /></a></li>
                <li><a href="https://github.com/"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
            </ul>
        </div>
    )
};