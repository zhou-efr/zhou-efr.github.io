"use client";
import React, { useEffect } from 'react';

interface RedirectionProps {
    to: string;
    delay?: number;
}

const Redirection: React.FC<RedirectionProps> = ({ to, delay = 0 }) => {
    useEffect(() => {
        const redirect = () => {
            window.location.href = to;
        };

        const timeout = setTimeout(redirect, delay);

        return () => clearTimeout(timeout);
    }, [to, delay]);

    return null;
};

export default Redirection;
