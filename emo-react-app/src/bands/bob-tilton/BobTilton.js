import React, {useEffect, useState} from 'react'
import './bobtilton.css';
import '../../styles/list.css';
import '../../styles/columns.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import {SongLyrics} from "../../components/SongLyrics"
import songsData from './songs.json';


export function BobTilton() {
    const [selectedSong, setSelectedSong] = useState(null);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className="bands">
            <a href="/"><div>Вернуться назад</div></a>
            <div className="header">
                <h id="head">Bob Tilton</h> <br/><hr/>
                <b> Жанры: </b> emo, 90s emo, post-hardcore, british <br/>
                <b> Годы активности: </b> 1993 – 1999 (6 лет) <br/>
                <b> Место основания: </b> Mansfield, Nottinghamshire, England, Великобритания <br/>
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
                                        <div data-src={require('./bobtilton1.jpg')} />
                                        <div data-src={require('./bobtilton2.jpg')} />
                                        <div data-src={require('./bobtilton3.jpg')} />
                                        <div data-src={require('./bobtilton4.jpg')} />
                                        <div data-src={require('./bobtilton5.jpg')} />
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
                                    <h2>Songs List</h2>
                                    <ul type="circle">
                                        <lh><em>Дискография:</em><br/></lh>
                                        <li >1994 - Wake Me When It's Springtime Again
                                        <ul>
                                            {songsData.filter(
                                                item => (item.album||'').includes('Wake Me When')
                                            ).map(u => (
                                                <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                            ))}
                                        </ul>
                                        </li>
                                        <li className="crescent">1996 - Crescent
                                            <ul>
                                            {songsData.filter(
                                                item => (item.album||'').includes('Crescent')
                                            ).map(u => (
                                                <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                            ))}
                                            </ul>
                                        </li>
                                        <li>1998 - Bob Tilton & Reiziger Split>
                                            <ul>
                                                {songsData.filter(
                                                    item => (item.album||'').includes('Reiziger Split')
                                                ).map(u => (
                                                    <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="hotels">1999 - the leading hotels or the world>
                                            <ul>
                                                {songsData.filter(
                                                    item => (item.album||'').includes('the leading hotels')
                                                ).map(u => (
                                                    <li key={u.key} onClick={() => setSelectedSong(u)}>{u.name}</li>
                                                ))}
                                            </ul>
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
