import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import './SigninLoader.css';
import { StoreContext } from '../../context/StoreContext';

const SigninLoader = ({ title }) => {
    const { setloader } = useContext(StoreContext);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsComplete(true);
            setloader(false);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const letters = title.split('');

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="signin-wrapper"
            style={{
                pointerEvents: isComplete ? 'none' : 'all',
            }}
        >
            {/* Fading circle animation */}
            <div className="signin-spinner" />

            {/* Animated text */}
            <div className="signin-text">
                {letters.map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="signin-letter"
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default SigninLoader;
