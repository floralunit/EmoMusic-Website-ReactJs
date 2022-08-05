import React, {useEffect, useState} from 'react'
import './bobtilton.css';
import '../../styles/list.css';
import '../../styles/columns.css';
import '../../styles/audio.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import {BsExclamationLg} from 'react-icons/bs';
import {SongLyrics} from "../../components/SongLyrics"
import songsData from './songs-lyrics.json';


export function BobTilton() {

    const [selectedSong, setSelectedSong] = useState(null);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [isShownSongs1, setIsShownSongs1] = useState(false);
    const [open1, setOpen1] = useState(false);
    const handleClickShowSongs1 = event => {
        setIsShownSongs1(current => !current);
        setOpen1(open =>!open);
    };
    const [isShownSongs2, setIsShownSongs2] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleClickShowSongs2 = event => {
        setIsShownSongs2(current => !current);
        setOpen2(open =>!open);
    };
    const [isShownSongs3, setIsShownSongs3] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleClickShowSongs3 = event => {
        setIsShownSongs3(current => !current);
        setOpen3(open =>!open);
    };
    const [isShownSongs4, setIsShownSongs4] = useState(false);
    const [open4, setOpen4] = useState(false);
    const handleClickShowSongs4 = event => {
        setIsShownSongs4(current => !current);
        setOpen4(open =>!open);
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
                <div className="tab-bar radius">
                    <a className={toggleState === 1 ? "tab selected" : "tab"} onClick={() => toggleTab(1)} data-text="О группе">
                        <span className="icon">О группе</span>
                    </a>
                    <a className={toggleState === 2 ? "tab selected" : "tab"} onClick={() => toggleTab(2)} data-text="Дискография">
                        <span className="icon">Дискография</span>
                    </a>
                    <a className={toggleState === 3 ? "tab selected" : "tab"} onClick={() => toggleTab(3)} data-text="Видосы">
                        <span className="icon">Видосы</span>
                    </a>
                </div>
                <div className={"empty"}/>
                <div className={"blackback"}>
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
                                    <br/>
                                    <div style={{border: '1px solid #FFFFFF', padding: '5px'}}>
                                        Нажми по альбому, чтобы открыть список песен.
                                        Нажми по песне, чтобы справа появился сам трек, текст песни (если он есть) и мой перевод (если он есть).
                                        <br/>
                                        <img src={'https://cinni.net/images/creatures/sanrio/maru_jump_rope.gif'} style={{display: 'block', margin: '0 auto'}}/>
                                    </div>
                                    <br/>
                                    <ul type="none">
                                        <li><div onClick={handleClickShowSongs1} className={'albumList'}><img src={require('./images/springtime.jpg')} style={{width: "50px", margin: '5px'}}/> ...Wake Me When It's Springtime Again (1994) { open1 ? <FiChevronUp/> : <FiChevronDown/> }</div>
                                            {isShownSongs1 && (
                                                <ol className="rectangle">
                                                <div>
                                                    {songsData.filter(
                                                        item => (item.album||'').includes('1994')
                                                    ).map(u => (
                                                        <>
                                                        <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                        </>
                                                    ))}
                                                </div>
                                                </ol>
                                            )}
                                        </li>
                                        <li><div onClick={handleClickShowSongs2} className={'albumList'}><img src={require('./images/penknife.jpg')} style={{width: "50px", margin: '5px'}}/>Songs Of Penknife And Pocket Watch (1995) { open2 ? <FiChevronUp/> : <FiChevronDown/> }</div>
                                            {isShownSongs2 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album||'').includes('1995')
                                                        ).map(u => (
                                                            <>
                                                                <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                            </>
                                                        ))}
                                                    </div>
                                                </ol>
                                            )}
                                        </li>
                                        <li><div onClick={handleClickShowSongs3} className={'albumList'}><img src={require('./images/crescent.jpg')} style={{width: "50px", margin: '5px'}}/>Crescent (1996) { open3 ? <FiChevronUp/> : <FiChevronDown/> }</div>
                                            {isShownSongs3 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album||'').includes('1996')
                                                        ).map(u => (
                                                            <>
                                                                <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                            </>
                                                        ))}
                                                    </div>
                                                </ol>
                                            )}
                                        </li>
                                        <li><div onClick={handleClickShowSongs4} className={'albumList'}><img src={require('./images/hotels.jpg')} style={{width: "50px", margin: '5px'}}/>The Leading Hotels of the World (1999) { open4 ? <FiChevronUp/> : <FiChevronDown/> }</div>
                                            {isShownSongs4 && (
                                                <ol className="rectangle">
                                                    <div>
                                                        {songsData.filter(
                                                            item => (item.album||'').includes('1999')
                                                        ).map(u => (
                                                            <>
                                                                <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                            </>
                                                        ))}
                                                    </div>
                                                </ol>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"child2"}>
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
        </div>
                );
                }
