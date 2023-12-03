import React from 'react';

import TeamMemberImg from '~/images/photos/IMG_2683 2.png';
import TeamMemberImg2 from '~/images/photos/IMG_9750.png';
import InstagramLogoIcon from '~/images/icons/instagram-logo-dark.svg';

type Props = any;

const SectionTeam = (props: Props) => {
    return (
        <>
            <section className="section-team">
                <div className="container">
                    <h4 className="title">Команда</h4>
                </div>
                <div className="content-container container d-flex justify-content-start">
                    <div className="text-container d-flex flex-column align-items-end">
                        <h5 className="subject subject--width-limit">
                            “ З 24 ЛЮТОГО 2022 РОКУ Я ЗРОЗУМІЛА, ЩО ХОЧУ БУТИ КОРИСНОЮ ДЛЯ СВОЄЇ КРАЇНИ ТА НАРОДУ, І НІ НА СЕКУНДУ НЕ ЗАМИСЛЮВАЛАСЬ ПОКИНУТИ ТЕРИТОРІЮ УКРАЇНИ.”
                        </h5>
                        <p className="text">
                            Мене звати Аліна Хмур. До початку повномасштабного вторгнення я працювала перукарем-колористом. За сумісництвом я колишній працівник медичної сфери.
                            <br />
                            <br />
                            Коли армія рф наступала на території Київської області і люди, такі ж, як і я, ховались у метро, шукаючи безпеку, вже там я почала надавати медичну допомогу тим, хто цього потребував: ставила крапельниці, робила уколи, купувала ліки, продукти для самотніх пенсіонерів, інвалідів та дітей. Коли людей, які потребують допомоги, стало більше, моїх власних ресурсів було вже недостатньо, тоді я зрозуміла, що потрібно звертатись за допомогою у соц.мережі та інтернет. Згодом це перетворилось у створення цього Благодійного фонду.
                        </p>
                    </div>
                </div>
                <div className="photo-container photo-container--right">
                    <img
                        src={TeamMemberImg}
                        className="photo"
                        alt="Аліна Хмур, голова фонду"
                    />

                    <div className="description">
                        Аліна Хмур, голова фонду
                    </div>
                    <div className="socials d-flex justify-content-center">
                        <a
                            className="socials-item"
                            href="https://www.instagram.com/light_of_respect/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={InstagramLogoIcon}
                                alt="instagram logo"
                            />
                        </a>
                    </div>
                </div>
            </section>
            <section className="section-team section-team__rtl">
                <div className="content-container container d-flex justify-content-end">
                    <div className="text-container d-flex flex-column align-items-end">
                        <p className="text mt-5 mb-5">
                            Мене звати Ігор Хмур. Я ді-джей та продюсер електронної музики. До початку повномасштабної війни проти України та терору проти цивільного населення з боку рф, у мене були перспективні плани на майбутнє. 24 лютого для мене стало точкою неповернення.
                            <br/>
                            <br/>
                            Як багато хто із свідомих громадян, прямо на наступний день я став волонтером. Ми почали активно допомагати мирним мешканцям Києва, а також поліції в метро, в якому ми спали та військовим на блок-постах. В той час у Києві панував досить великий рівень паніки, але попри звуки вибухів та постійний страх «прильоту», ми витримали всі ці випробування, дякуючи Збройним силам України. Витримуємо і зараз. Нажаль, власний ресурс має властивість закінчуватись, тому ми вимушені були звернутись до своєї аудиторії в соцмережах, задля збору коштів. В подальшому і був створений наш фонд, для зборів і допомоги ЗСУ, ТрО та інших військових об’єднань. Також ми не забуваємо і про внутрішньо переміщених осіб, потребуючих допомоги літніх людей та братів наших менших. Але наразі наша мета  - якнайшвидше задовольнити запит військових. Тому не забувайте нам донатити.
                        </p>
                    </div>
                </div>
                <div className="photo-container photo-container">
                    <img
                        src={TeamMemberImg2}
                        className="photo"
                        alt="Ігор Хмур, волонтер"
                    />

                    <div className="description">
                        Ігор Хмур, волонтер
                    </div>
                    <div className="socials d-flex justify-content-center">
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionTeam;
