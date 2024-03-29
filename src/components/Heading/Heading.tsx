import React from 'react'

interface HeadingProps {
    label: string;
}

const Heading: React.FC<HeadingProps> = ({ label }) => {
    return (
        <h2 className="text-white text-4xl mb-8 font-semibold">
            {label}
        </h2>
    )
}

export default Heading