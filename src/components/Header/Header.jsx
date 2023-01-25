import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import opa from '../../images/opa.png'
import group2 from '../../images/group2.png'
import team from '../../images/teamwork.png'
import team1 from '../../images/team1.png'
import card_1 from '../../images/card_1.png'
import card_2 from '../../images/card_2.png'
import card_3 from '../../images/card_3.png'
import card_4 from '../../images/card_4.png'
import card_5 from '../../images/card_5.png'
import card_6 from '../../images/card_6.png'
import team2 from '../../images/team_work2.png'
import msk1 from '../../images/msk1.png'
import msk2 from '../../images/msk2.png'
import msk3 from '../../images/msk3.png'
import msk4 from '../../images/msk4.png'
import msk5 from '../../images/msk5.png'
import vector from '../../images/Vector.png'

function Header() {
  return (
    <div className='Header'>
  
        <div className="container">
            <nav>
                <h1>
                    <img src={logo} alt="" />
                    Girls in Digital 
                </h1>
                <ul>
                    <li>О Проекте</li>
                    <li>Направления</li>
                    <li>Задачи</li>
                    <li>Результаты</li>
                    <li>Контакты</li>
                    <li>РУ <i class="fa-solid fa-chevron-down"></i></li>
                    <li><button>Регистрация</button></li>
                </ul>
            </nav>
            <div className="about_us">
                
                <div className="text_wrapper">
                        <p className='in-dc'>“Girls in digital”</p>
                    <div className='dc-girl'>
                        <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров</p>
                        </div>
                        <button className='opa-btn'>Подробнее</button>
                </div>
                <img className='opa' src={opa} alt="" />
            </div>
           

            <div className="project">
                <center>О проекте </center>
                <div className="girls_working">
                    <img className='group2' src={group2} alt="" />
                    <div className="text_wrapper_1">
                        <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
                    </div>
                </div>
            </div>
            <div className="team_working">
                <div className="text_wrapper2">
                Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.

                </div>
                <img className='team_img' src={team} alt="" />
            </div>

        </div>
        <div className="cards_wrapper">
            <div className="container">
                <p className='text_one'>Направлении</p>
                <p className='text_two'>Проект будет проводится по направлениям</p>
                <div className="cards__wrapper">
                    <div className="card one">
                        <p>SMM и Таргетинг, копирайтинг</p>
                        <img src={card_1} alt="" />
                    </div>

                    <div className="card two">
                        <p>3D дизайн.</p>
                        <img className='mt' src={card_2} alt="" />
                    </div>

                    <div className="card three">
                        <p>Графический дизайн</p>
                        <img src={card_3} alt="" />
                    </div>

                    <div className="card four">
                        <p>Логистика</p>
                        <img className='mt' src={card_4} alt="" />
                    </div>

                    <div className="card five">
                        <p>Программиро-вание</p>
                        <img src={card_5} alt="" />
                    </div>

                    <div className="card six">
                        <p>Айти менеджмент</p>
                        <img className='mt' src={card_6} alt="" />
                    </div>
                </div>
                <div className="wrapper_img">
                    <img src={team2} alt="" />
                    <div className="text_wrapper4">
                        <p>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования,собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
                </div>
            </div>
                 <div className="team_wrapper">
                <div className="text_wrapper3">
                    <p>Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. </p>
                </div>
                <img className='team3' src={team1} alt="" />
            </div>
                </div>
                <div className="sky_wrapper">
                    <div className="container">
                        <center><p className='text'>Задачи</p></center>
                        <div className="cards2_wrapper">

                            <div className="cards">
                                <p>01</p>
                                <div className="texts">
                                Подбор рабочей группы
                                </div>
                            </div>

                            <div className="cards">
                                <p>02</p>
                                <div className="texts">
                                Установить контакт с партнерами

                                </div>
                            </div>

                            <div className="cards">
                                <p>03</p>
                                <div className="texts">
                                Закупка офисной техники
                                </div>
                            </div>

                            <div className="cards">
                                <p>04</p>
                                <div className="texts">
                                Привлечение опытных специалистов (зарубежные специалисты);

                                </div>
                            </div>

                            <div className="cards">
                                <p>05</p>
                                <div className="texts">
                                Разработка модуля
                                </div>
                            </div>

                            <div className="cards">
                                <p>06</p>
                                <div className="texts">
                                Освещение  проекта с помощью СМИ
                                </div>
                            </div>

                            <div className="cards">
                                <p>07</p>
                                <div className="texts">
                                    Проведение отбора участников
                                </div>
                            </div>

                            <div className="cards">
                                <p>08</p>
                                <div className="texts">
                                Организация проекта в 4 этапа
                                </div>
                            </div>

                            <div className="cards">
                                <p>09</p>
                                <div className="texts">
                                Организация форума и церемония награждения победителей
                                </div>
                            </div>

                            <div className="cards10">
                                <p className='on'>10</p>
                                <div className="texts10">
                                Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                        <div className="register__wrapper">
                            <p className='regis'>Регистрация</p>
                            <div className="inp__wrapper">
                                <input type="name" placeholder='Имя'/>
                                <input type="surname" placeholder='Фамилия' />
                                <input type="text" placeholder='Дата рождения' />
                                <input type="email" placeholder='Почта' />
                                <input type="text" placeholder='Адрес' />
                                <input type="text" placeholder='Телефон' />
                            </div>
                            <button id='submit_btn'>Отправить</button>
                        </div>
            <div className="result__wrapper">
                <div className="container">
                    <center><p className='res'>Результаты</p></center>
                    <div className="res_text">
                        <p>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>
                    </div>
                    <div className="cont_wrap">
                        <div className="cont">
                            <img src={msk1} alt="" />
                            <p>Самореализация девушек в сфере IT</p>
                        </div>

                        <div className="cont">
                            <img src={msk2} alt="" />
                            <p>Выбор профессии без квалификациии дипломов</p>
                        </div>

                        <div className="cont">
                            <img src={msk3} alt="" />
                            <p>Возможность зарабатывать дистанционно (фриланс)</p>
                        </div>

                        <div className="cont">
                            <img src={msk4} alt="" />
                            <p>Возможность начать свои социальные проекты в виде Старт апов</p>
                        </div>

                        <div className="cont">
                            <img src={msk5} alt="" />
                            <p>Маркетинговые навыки</p>
                        </div>
                    </div>

                    <div className="location__wrapper">
                        <div className="dc_wrap">
                        <div className="icons__wrapper">
                                <img className='globe' width={'35px'} src={vector} alt="" />

                                <i class="fa-solid fa-phone icon"></i>

                                <i class="fa-solid fa-envelope icon"></i>

                                <i class="fa-solid fa-location-dot icon"></i>
                            </div>
                            <div className="wrap2">

                            
                            <div className="globe dc">
                                <p className='web'>Веб сайт</p>
                                <p>digitalcity.uz</p>
                            </div>

                            <div className="phone dc">
                                
                                <p className='web'>Телефон</p>
                                <p>+99874 222-22-22</p>
                            </div>

                            <div className="email dc">
                                
                                <p className='web'>Почта</p>
                                <p>dcity@info.com</p>
                            </div>

                            <div className="location dc">
                                
                                <p className='web'>Адресс</p>
                                <p>улица Бобур Шох, <br /> Andizhan, Узбекистан</p>
                            </div>
                            </div>
                        </div>

                        <div className="locatsiya">
                            <iframe className='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6610169292676!2d72.35738321547109!3d40.74748397932806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2s!4v1674678050202!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    </div>
  )
}

export default Header