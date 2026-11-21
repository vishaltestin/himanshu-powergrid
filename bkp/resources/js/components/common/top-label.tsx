import React from 'react';

interface TopLabelProps {
    text: string;
}

function TopLabel({text}: TopLabelProps) {
    return (
        <div className="mb-3 md:mb-6 flex items-center">
            {/* <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="4" y="4" width="6" height="6" fill="#22c55e" />
                <rect x="14" y="14" width="6" height="6" fill="#22c55e" />
                <rect x="4" y="14" width="6" height="6" fill="#22c55e" />
            </svg> */}
            <span className="text-sm font-semibold text-gray-900 tracking-widest uppercase">
                {text}
            </span>
        </div>
    );
}

export default TopLabel;
