import React, {useState} from 'react'
import '../styles/App.css';
import '../styles/tabs.scss';
import '../styles/list.css';
import '../styles/columns.css';
import '../styles/audio-video-image.css';
import {BandsTable} from "../components/BandsTable";

export function MainPage() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className="mainPage">
            <div className={"empty"}/>
            <h1> That's life: it's so social <br/>
                So physical <br/>
                So emotional <br/>
                So stay home ... and listen to emo music <br/>
            </h1>
            <h5>(and sometimes go 2 gigs)</h5>
            <div className="data">
                <div className={"empty"}/>
                <div className="tab-bar radius">
                    <button className={toggleState === 1 ? "tab selected" : "tab"} onClick={() => toggleTab(1)}
                       data-text="О группе">
                        <span className="icon">О сайте</span>
                    </button>
                    <button className={toggleState === 2 ? "tab selected" : "tab"} onClick={() => toggleTab(2)}
                       data-text="Дискография">
                        <span className="icon">О жанре</span>
                    </button>
                    <button className={toggleState === 3 ? "tab selected" : "tab"} onClick={() => toggleTab(3)}
                       data-text="Видосы">
                        <span className="icon">Группы</span>
                    </button>
                    <button className={toggleState === 4 ? "tab selected" : "tab"} onClick={() => toggleTab(4)}
                       data-text="Видосы">
                        <span className="icon">Лейблы</span>
                    </button>
                </div>
                <div className={"empty"}/>
                <div className={"blackback"}>
                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            Добро пожаловать в мой архив по эмо музыке. Идея разработать сайт связана с тем, что мне давно хотелось
                            создать место, в котором были бы собраны мои любимые эмо группы, их история, а также полная дискография с текстами песен
                            и моими переводами.
                            Скажу сразу, я не занимаюсь фронтендом профессионально, поэтому возможно, кому-то интерфейс
                            покажется всратым, но это здесь не главное :) (если вы с телефона, то польузйтесь приближением экрана)
                            <br/><br/>
                            <img src={'https://dannarchy.com/misc/anim/myskull.gif'}
                                 style={{display: 'block', margin: '0 auto'}} alt={''}/>
                            <div>Если есть какие-то пожелания по поводу сайта или, может, вы хотите рассказать мне о какой-то крутой эмо группе, чтобы она мне понравилась и появилась здесь,
                                да или если вы просто нашли баги, то можете написать мне:
                                <br/>
                                tg (@floralunit)
                                <br/>
                                <a href={'https://vk.com/floralunit'}>vk(floralunit)</a>
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <div>
                                <h3> О жанре</h3>
                                <b> Эмо </b>(англ. emo, сокращение от «эмоциональный») — стиль рок-музыки,
                                характеризуемый мелодичной
                                музыкальностью и экспрессивной лирикой.
                                <br/><br/>
                                Появился в середине 1980-х в Вашингтоне, где был известен как «эмоциональный
                                хардкор-панк» или
                                «эмокор», разработанный такими группами, как Rites of Spring и Embrace.
                                Стиль был переработан американскими панк-рокерами в начале 1990-х, его звучание
                                изменилось, смешалось с
                                поп-панком и инди-роком, подобно звучанию групп Jawbreaker и Sunny Day Real Estate.
                                <br/><br/>
                                На базе поклонников эмо и родственных жанров возникла одноимённая субкультура.
                                <br/><br/>
                                <h3>Поджанры</h3>
                                <div>
                                    <b>Emocore</b><br/>
                                    Emocore - пост-хардкор, но более эмоциональный и несколько мелодичный. Также известен как «Лето революции» или «Первая волна».
                                    Известные группы включают Rites Of Spring, Embrace (США), Moss Icon, Gray Matter и Dag Nasty.
                                    Этот термин был сильно отвергнут группами, но теперь он используется для различения их и эмо-групп других волн.
                                    <br/><br/>
                                    <b>Midwest Emo</b><br/>
                                    Мидвест-эмо или инди-эмо — поджанр эмо-музыки, который так же называют "эмо второй
                                    волны" отличающийся меланхоличным звучанием, а также контрастными переходами от
                                    мягкого к громкому звучанию. Мидвест получился путём смешения инди, пост-гранжа и
                                    постхардкора.
                                    <br/><br/>
                                    Midwest Emo, который часто считается более беззаботным вариантом эмо с элементами математического рока, имеет тенденцию больше ориентироваться на инди-гиков, чем на более мрачный и тревожный оригинальный рецепт эмо.
                                    Материал 90-х обычно известен как «вторая волна», а 10-е или 20-е - «четвертая волна» или «возрождение эмо (Среднего Запада)».
                                    <br/><br/>
                                    <img src={require('./images/mem.png')} alt={''} style={{width: '200px', float: 'right', margin: '7px'}}/>
                                    <b>Emo Pop</b><br/>
                                    Emo Pop - это жанр, сочетающий в себе эмо и поп-панк. Эмо-поп - это музыкальный стиль с более лаконичными песнями и припевами, наполненными припевами.
                                    Хорошо известными эмо-поп-группами являются Fall Out Boy, Paramore, My Chemical Romance и Panic! At The Disco. Этот музыкальный жанр отличается от эмокора. Также известна как «третья волна».
                                    <br/><br/>
                                    <b>Screamo</b><br/>
                                    Screamo (также известный как skramz) - это агрессивный поджанр emocore, который возник в начале 1990-х годов и подчеркивает «умышленно экспериментальный диссонанс и динамику».
                                    Screamo находится под сильным влиянием хардкор-панка и характеризуется использованием кричащего вокала. Лирические темы обычно включают эмоциональную боль, смерть, романтику и права человека.
                                </div>
                                </div>
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <h4 style={{textAlign: 'center', marginBottom: '2vh'}}>Список будет медленно, но пополняться...</h4>
                            <BandsTable/>
                            <div style={{textAlign: 'right', fontStyle: 'italic', color: '#FCF97AFF'}}>Последнее обновление: 08.08.22 - создана страничка для Bob Tilton</div>
                        </div>

                        <div
                            className={toggleState === 4 ? "content  active-content" : "content"}
                        >
                            <h3>Лейблы</h3>
                            <div>Пока пусто...</div>
                            <iframe className={'video'}
                                    src="https://www.youtube.com/embed/J---aiyznGQ?autoplay=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    );
}
