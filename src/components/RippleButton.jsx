import React, { useState } from 'react';

const RippleButton = ({ children, className, onClick, ...props }) => {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now()
        };

        setRipples((prev) => [...prev, newRipple]);

        if (onClick) {
            onClick(e);
        }

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
    };

    return (
        <button
            className={className}
            onClick={handleClick}
            style={{ position: 'relative', overflow: 'hidden' }}
            {...props}
        >
            {children}
            {ripples.map((r) => (
                <span
                    key={r.id}
                    style={{
                        position: 'absolute',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.5)',
                        transform: 'scale(0)',
                        animation: 'ripple 0.6s ease-out',
                        pointerEvents: 'none',
                        width: r.size + 'px',
                        height: r.size + 'px',
                        left: r.x + 'px',
                        top: r.y + 'px'
                    }}
                />
            ))}
        </button>
    );
};

export default RippleButton;
