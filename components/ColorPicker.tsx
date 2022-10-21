import React from 'react';

import { COLORS } from 'constants/data';

interface IProps {
    handleColor: (color: string) => void;
}

export default function ColorPicker({ handleColor }: IProps) {
    return (
        <div className="flex items-center justify-center gap-2.5">
            {COLORS.map(({ name, color }) => (
                <button
                    key={name}
                    style={{ backgroundColor: color }}
                    aria-label={`${name} color`}
                    title={`${name} color`}
                    type="button"
                    onClick={() => handleColor(color)}
                    className="w-[30px] h-[30px] rounded-full border border-white"
                />
            ))}
            <input name="color" value="#ff00f7" type="color" onChange={(e) => handleColor(e.target.value)} />
        </div>
    );
}
