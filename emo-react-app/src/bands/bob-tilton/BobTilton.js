import React, {useEffect, useState} from 'react'
import './bobtilton.css';
import '../../styles/list.css';
import '../../styles/columns.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import {SongLyrics} from "../../components/SongLyrics"
import songsData from './songs-lyrics.json';


export function BobTilton() {

    const [selectedSong, setSelectedSong] = useState(null);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [isShownSongs, setIsShownSongs] = useState(false);
    const handleClickShowSongs = event => {
        setIsShownSongs(current => !current);
    };

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className="bands">
            <a href="/"><div>Вернуться назад</div></a>
            <div className="header">
                <h id="head">Bob Tilton</h> <br/><hr/>
                <b> Жанры: </b> emo, 90s emo, post-hardcore, british <br/>
                <b> Годы активности: </b> 1993 – 1999 (6 лет) <br/>
                <b> Место основания: </b> Nottingham, England <br/>
                <b> Лейбл: </b> Subjugation records, Subjugatio records <br/>
            </div>
            <div className="data">
                <div className={"empty"}/>
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        <div className={"tabText"}>О группе</div>
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        <div className={"tabText"}>Дискография</div>
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        <div className={"tabText"}>Видосы</div>
                    </button>
                </div>
                <div className={"empty"}/>
                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                            <div className={"Parent"}>
                                <div className={"child1"}>
                                    <div>
                                        <h3> Состав </h3>
                                        <ol className="rectangle">
                                            <li>Simon Feirn-vocals</li>
                                            <li>Neil Johnson-guitar</li>
                                            <li>Chay Lawrence-guitar(1994-1998)</li>
                                            <li>Ralph Hamilton-guitar(1994-1998)</li>
                                            <li>Mark Simms-bass</li>
                                            <li>Alan Gainey-drums</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className={"child2"}>
                                    <AutoplaySlider
                                        play={true}
                                        cancelOnInteraction={true} // should stop playing on user interaction
                                        interval={2500}
                                        animation="cubeAnimation"
                                    >
                                        <div data-src={require('./images/bobtilton1.jpg')} />
                                        <div data-src={require('./images/bobtilton2.jpg')} />
                                        <div data-src={require('./images/bobtilton3.jpg')} />
                                        <div data-src={require('./images/bobtilton4.jpg')} />
                                        <div data-src={require('./images/bobtilton5.jpg')} />
                                    </AutoplaySlider>
                                </div>
                        </div>
                        <h3> Биография </h3>
                        Легенды Британской сцены Боб Тилтон, начинали в 1993, в городе Ноттингем, еще до того как термин
                        "имо", закрепился
                        на Туманном Альбионе. В том же году, группа записала песни для дебютного 7" EP, который был
                        издан через год, лейблом
                        Subjugatio records тиражем 1000 копий.
                        <p/>
                        Два следующих года для группы сложились вполне удачно, у Bob Tilton выходит вторая по счету
                        семёрка, в 96 известный
                        персонаж Джон Пилл пригласил ребят записать сессию для своего шоу на BBC Radio One. Несколько
                        месяцев спустя
                        Subjugation издали долгожданный и самый хитовый лонгплей группы.
                        <p/>
                        На самом деле 96'ой был очень особенным временем, внутри независимой британской сцены, люди
                        просто сходили с ума на
                        концертах, начиная от Spy Versus Spy и кончая Mogwai. Конечно же Bob Tilton были не исключением,
                        лонгплей просто
                        разлетелся среди фанатов эмо и панка. На протяжении еще трёх лет группа рубилась на концертах по
                        всей Британии,
                        вернувшись домой в декабре 1998 они записали свой второй альбом на лейбле Sousaphon Recordings,
                        под названием The
                        Leading Hotels Of The World, вскоре после этого, барабанщик Алан Гейни переехал в Лондон, что
                        послужило одной из
                        причин распада группы весной 1999 года.
                        <br/>
                        После Боб Тилтон, вокалист Саймон Фирн пел в группе Wolves Of Greece, остольные участники
                        замутили проект I Am
                        Spartacus. Гитарист Нейл Джонсон так же играл в Wolves Of Greece, сейчас он играет в группах
                        Savoy Grand и Andy
                        Clambake & The Resurrection Men
                        <br/>Посетите
                        <a href="https://www.discogs.com/master/237803-Bob-Tilton-Crescent"
                           target="_blank"
                           title="переход на Discogs"> Discogs
                        </a>

                    </div>
                </div>
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <div>
                            <div className={"Parent"}>
                                <div className={"child1"}>
                                    <h3>Дискография</h3>
                                    Нажми на кнопку "Показать песни", чтобы открыть список песен каждого альбома. Нажми повторно, чтобы скрыть.
                                    Нажми по песне, чтобы справа появился текст песни и мой перевод (если он есть).<br/>
                                    <button onClick={handleClickShowSongs}>Показать песни</button>
                                    <ul type="circle">
                                        <li>...Wake Me When It's Springtime Again (1994)
                                            {isShownSongs && (
                                                <ol className="rectangle">
                                                <div>
                                                    {songsData.filter(
                                                        item => (item.album||'').includes('1994')
                                                    ).map(u => (
                                                        <>
                                                        <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                            <audio src={require(`./songs-data/${u.path}`)} controls="autoplay"/>
                                                        </>
                                                    ))}
                                                </div>
                                                </ol>
                                            )}
                                        </li>
                                        <li>Songs Of Penknife And Pocket Watch (1995)
                                                {isShownSongs && (
                                                    <div>
                                                        <ol className="rectangle">
                                                        {songsData.filter(
                                                            item => (item.album||'').includes('1995')
                                                        ).map(u => (
                                                            <>
                                                                <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                                <audio src={require(`./songs-data/${u.path}`)} controls="autoplay"/>
                                                            </>
                                                        ))}
                                                        </ol>
                                                    </div>
                                                )}
                                        </li>
                                        <li>Crescent (1996)
                                                {isShownSongs && (
                                                    <div>
                                                        <ol className="rectangle">
                                                        {songsData.filter(
                                                            item => (item.album||'').includes('1996')
                                                        ).map(u => (
                                                            <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                        ))}
                                                        </ol>
                                                    </div>
                                                )}
                                        </li>
                                        <li>The Leading Hotels of the World (1999)
                                                {isShownSongs && (
                                                    <div>
                                                        <ol className="rectangle">
                                                        {songsData.filter(
                                                            item => (item.album||'').includes('1999')
                                                        ).map(u => (
                                                            <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                        ))}
                                                        </ol>
                                                    </div>
                                                )}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"child2"}>
                                    <h2>Lyrics</h2>
                                    {selectedSong ? <SongLyrics song={selectedSong} /> : null}
                                </div>
                            </div>
                    </div>
                </div>
                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h4 style={{textAlign: 'center', marginBottom: '2vh'}}>Эх...</h4>
                </div>
            </div>
        </div>
                );
                }
