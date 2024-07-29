import React from 'react';

interface SocialInputProps {
    platform: string;
    handle: string;
    link: string;
    onChange: (index: number, field: string, value: string) => void;
    index: number;
}

const SocialInput: React.FC<SocialInputProps> = ({ platform, handle, link, onChange, index }) => {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <input
                type="text"
                placeholder="Platform"
                value={platform}
                className='input-el '
                onChange={(e) => onChange(index, 'platform', e.target.value)}
            />
            <input
                type="text"
                placeholder="Handle"
                value={handle}
                onChange={(e) => onChange(index, 'handle', e.target.value)}
                className='input-el '
            />
            <input
                type="text"
                placeholder="Link"
                value={link}
                onChange={(e) => onChange(index, 'link', e.target.value)}
                className='input-el '
            />
        </div>
    );
};

export default SocialInput;
