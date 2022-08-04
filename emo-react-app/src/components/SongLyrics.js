import React, {useState} from 'react'

function NewlineText(props) {
    const text = props.text;
    return <div>{text}</div>;
}

export const SongLyrics = ({ song }) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    if (!song) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {song && (
                <>
                    <div>
                        {song.artist}
                    </div>
                    <div>
                        {song.name}
                    </div>
                    <audio src={require(`../bands/${song.path}`)} controls="autoplay" className={"audio"} autoPlay={false} title={song.name}/>

                    <div className="tab-bar radius" style={{fontSize: '5px'}}>
                        <a className={toggleState === 1 ? "tab selected" : "tab"} onClick={() => toggleTab(1)} data-text="О группе">
                            <span className="icon">Текст</span>
                        </a>
                        <a className={toggleState === 2 ? "tab selected" : "tab"} onClick={() => toggleTab(2)} data-text="Дискография">
                            <span className="icon">Перевод</span>
                        </a>
                    </div>
                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            {song.lyrics ?
                                <div style={{whiteSpace: 'pre-wrap'}}>
                                    <NewlineText text={song.lyrics} />
                                </div>
                                : <div>Пусто...</div>}
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            {song.translation ?
                                <div style={{whiteSpace: 'pre-wrap'}}>
                                    <NewlineText text={song.translation} />
                                </div>
                                : <div>Пусто...</div>}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};