import React from 'react'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/main/Main'
import Navbar from '../../components/navbar/Navbar'
import "./mainPage.css"
const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <div className='Catalog__block'>
                <h2>Жинақтар</h2>
                <div className='catalog__flex'>
                    {/* <Catalog link={"/razdel/test"} imgLink={"https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/641777/worker-does-quality-control-on-medical-device.jpg&w=2000&op=resize"} name={"Тест"} option={""}/>
                    <Catalog link={"/razdel/praktika"} imgLink={"https://sc04.alicdn.com/kf/Hea4a6d01646c4648a06e29c2a328bc64H/253448907/Hea4a6d01646c4648a06e29c2a328bc64H.jpg"} name={"Практика"} option={""}/> */}
                    <Catalog link={"/razdel/lesson"} imgLink={"https://sc02.alicdn.com/kf/U0f4f7785b8244fb188530fc6556eea145/985537082/U0f4f7785b8244fb188530fc6556eea145.jpg"} name={"Лекция"} option={""}/>
                    <Catalog link={"/razdel/srs"} imgLink={"https://www.tkanix.info/moda/kak-sshit-platye-soveti-i-vikroyki-dlya-nachinayushchih/kak-sshit-platye-2.jpg"} name={"СӨЖ"} option={""}/>
                    <Catalog link={"/razdel/rp"} imgLink={"https://avatars.dzeninfra.ru/get-zen_brief/6404829/pub_630b4bca2b706d122c7709bf_630b5a4b5847ad612e35dd65/scale_1200"} name={"РК"} option={""}/>
                    <Catalog link={"/razdel/mainTest"} imgLink={"https://sc01.alicdn.com/kf/Had698e4ec4214c8381b65385cfda5cbeZ/230824819/Had698e4ec4214c8381b65385cfda5cbeZ.jpg"} name={"Емтихан сұрақтары"} option={""}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage