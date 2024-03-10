import React from 'react';

interface cardProps {
    key: string | number;
    id?: number;
    tag: string;
    title: string;
    desc: string;
    imageAlt: string;
    imageSrc: string;
}

function Card({ id, tag, title, desc, imageAlt, imageSrc }: cardProps) {

    return (
        <div className="cardItem">
            <div className="imgBox">
                <img alt={imageAlt} src={imageSrc} />
            </div>
            <div className="textBox">
                <div>
                    <span className={tag.toLowerCase()}>{tag}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )

}

export default Card