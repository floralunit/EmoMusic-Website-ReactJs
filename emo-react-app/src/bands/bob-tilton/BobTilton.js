import React, {useState} from 'react'
import './bobtilton.css';
import '../../styles/list.css';
import '../../styles/columns.css';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';


export function BobTilton() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
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
                                        <ol className="rectangle">
                                            <lh color="#FCF97AFF">Состав:</lh>
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
                                    <AwesomeSlider
                                        animation="foldOutAnimation"
                                        cssModule={[CoreStyles, AnimationStyles]}
                                    >
                                        <div data-src={require('./bobtilton1.jpg')} />
                                        <div data-src={require('./bobtilton2.jpg')} />
                                        <div data-src={require('./bobtilton3.jpg')} />
                                        <div data-src={require('./bobtilton4.jpg')} />
                                        <div data-src={require('./bobtilton5.jpg')} />
                                    </AwesomeSlider>
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
                    <ul type="circle">
                        <lh><em>Дискография:</em><br/></lh>
                        <li className="springtime">1994 - Wake Me When It's Springtime Again</li>
                        <li className="penknife">1995 - Songs Of Penknife And Pocket Watch</li>
                        <li className="crescent">1996 - Crescent</li>
                        <li>1998 - Bob Tilton & Reiziger Split</li>
                        <li className="hotels">1999 - the leading hotels or the world</li>
                    </ul>
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
