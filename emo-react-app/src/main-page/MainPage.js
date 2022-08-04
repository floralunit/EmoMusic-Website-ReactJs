import React, {useState} from 'react'
import '../styles/App.css';
import '../styles/tabs.scss';
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
                    <a className={toggleState === 1 ? "tab selected" : "tab"} onClick={() => toggleTab(1)} data-text="О группе">
                        <span className="icon">О сайте</span>
                    </a>
                    <a className={toggleState === 2 ? "tab selected" : "tab"} onClick={() => toggleTab(2)} data-text="Дискография">
                        <span className="icon">О жанре</span>
                    </a>
                    <a className={toggleState === 3 ? "tab selected" : "tab"} onClick={() => toggleTab(3)} data-text="Видосы">
                        <span className="icon">Группы</span>
                    </a>
                    <a className={toggleState === 4 ? "tab selected" : "tab"} onClick={() => toggleTab(4)} data-text="Видосы">
                        <span className="icon">Лейблы</span>
                    </a>
                </div>
                <div className={"empty"}/>
                <div className={"blackback"}>
                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                            Добро пожаловать в мой веб архив по эмо музыке. Идея создать такой сайт связана с тем, что мне нравится
                            не просто слушать музыку, но так же и вникать в тексты и изучать историю групп. В этом месте собраны эмо группы, которые
                            мне больше всего понравились и затронули сердце. Создавать странички для них немного времязатратный процесс, поэтому все будет появляться постепенно.
                            Скажу сразу, я не занимаюсь фронтендом профессионально, поэтому возможно, кому-то интерфейс покажется всратым, но это здесь не главное :)
                        <br/><br/>
                        <img src={'https://dannarchy.com/misc/anim/myskull.gif'}/>
                        <div>Если есть какие-то пожелания (добавить какие-то группы) или у вас есть крутая инфа или видосы,
                        да или если вы просто нашли баги, то можете написать мне:
                        @floralunit</div>
                    </div>
                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <div>
                            <h3> О жанре</h3>
                            <b> Эмо </b>(англ. emo, сокращение от «эмоциональный») — стиль рок-музыки, характеризуемый мелодичной
                            музыкальностью и экспрессивной лирикой. <br/>
                            Появился в середине 1980-х в Вашингтоне, где был известен как «эмоциональный хардкор-панк» или
                            «эмокор», разработанный такими группами, как Rites of Spring и Embrace.
                            Стиль был переработан американскими панк-рокерами в начале 1990-х, его звучание изменилось, смешалось с
                            поп-панком и инди-роком, подобно звучанию групп Jawbreaker и Sunny Day Real Estate.
                            <br/>

                            К середине 1990-х многочисленные эмо-группы появились на Среднем Западе и в центральной части США, а
                            также несколько инди-лейблов стали специализироваться в данном стиле. Эмо ворвался в мейнстрим в начале 2000-х,
                            с успехом групп Jimmy Eat World и Dashboard Confessional и появлением поджанра скримо.
                            <br/>

                            На базе поклонников эмо и родственных жанров возникла одноимённая субкультура.
                            <h3>Мидвест-эмо</h3>
                            <p>
                                Мидвест-эмо или инди-эмо — поджанр эмо-музыки, который так же называют "эмо второй волны" отличающийся меланхоличным звучанием, а также контрастными переходами от мягкого к громкому звучанию. Мидвест получился путём смешения инди, пост-гранжа и постхардкора.
                                <br/>К пионерам жанра можно отнести такие группы, как Sunny Day Real Estate, The Promise Ring, Mineral[1] и другие эмо-группы 90-х.
                            </p>
                            <h3>История</h3>
                            <p>
                                Вслед за успехом альбома Nevermind (1991) группы Nirvana, андеграундная рок-музыка в Соединённых Штатах превратилась в один большой бизнес. Появились новые дистрибьюторские сети, а различные инди-группы получили доступ к национальному уровню. Подростки по всей стране объявили себя поклонниками независимой музыки, быть панком и приверженцем sXe стало модной тенденцией. В этом новом музыкальном климате, эстетика эмо расширилась в сторону мейнстрима. Поскольку Sunny Day Real Estate фактически были основателями жанра, основное признание и популярность досталась им.[2]
                            </p>
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h4 style={{textAlign: 'center', marginBottom: '2vh'}}>Список будет пополняться...</h4>
                        <BandsTable/>
                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <h3>Лейблы</h3>
                        <div>Пока пусто...</div>
                    </div>
                </div>
                </div>
            </div>

</div>
    );
}
