import React from 'react';

type Props = {
    data: string | string[];
};

const GalleryItem = ({
    data,
}: Props) => {
    return Array.isArray(data)
        ? data.map((subData, subIndex) => (
            <GalleryItem
                key={subData}
                data={subData}
            />
        ))
        : (
            <img
                src={`/assets/photos/${data}`}
                alt={data}
            />
        )
};

export default GalleryItem;
