import {useEffect, useState} from "react";

function NewlineText(props) {
    const text = props.text;
    return <div>{text}</div>;
}

export const SongLyrics = ({ song }) => {

    if (!song) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {song && (
                <>
                    <div style={{whiteSpace: 'pre-wrap'}}>
                        <NewlineText text={song.lyrics} />
                    </div>
                </>
            )}
        </div>
    );
};