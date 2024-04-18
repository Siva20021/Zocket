import React, { useEffect, useState } from 'react';
import { wrapText } from '../utils';

const Caption = ({ captionData, canvasRef }) => {
    const [caption, setCaption] = useState(captionData?.text ?? '');

    useEffect(() => {
        // This condition is to check whether currentRef of the canvas is null or not . In case if it is passed before calling of Canvas 
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const { position, max_characters_per_line, font_size, alignment, text_color } = captionData;
        const { x, y } = position;
        wrapText(context, caption, x, y, max_characters_per_line,font_size,alignment,text_color);
    }, [caption, captionData, canvasRef]);

    return (
        <label
            htmlFor="Caption"
            className="relative block w-full overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <input
                id="Caption"
                placeholder="Caption"
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
                Caption
            </span>
        </label>
    )
};

export default Caption;