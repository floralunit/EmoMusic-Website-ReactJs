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
                    <h2>Текст песни епты</h2>
                    {song.lyrics ?
                        <div style={{whiteSpace: 'pre-wrap'}}>
                            <NewlineText text={song.lyrics} />
                        </div>
                        : <div>Пусто...</div>}
                    <h2>Перевод песни епты</h2>
                    {song.translation ?
                        <div style={{whiteSpace: 'pre-wrap'}}>
                            <NewlineText text={song.translation} />
                        </div>
                        : <div>Пусто...</div>}
                </>
            )}
        </div>
    );
};