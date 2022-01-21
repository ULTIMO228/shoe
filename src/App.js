import shoe from './img/running_shoes_PNG5823.png';
import './App.css';
import Header from "./componets/header/header";
import Footer from "./componets/footer/footer";



function App() {
  return (
    <>
      <a className="gotop" href="#header">^</a>
      <Header/>
      <main className="main">
        <section className="section1 section w1117">
          <h1 className="fw-regular fs-30">Lorem, ipsum.</h1>
          <p className="fw-bold td-s fs-24">9900₽</p>
        </section>
        <div className="price fw-bold w1117">
          <h1 className="fs-55">СКИДКИ ДО 90%</h1>
          <p className="fs-42 color-brown">1 900 ₽</p>
        </div>
        <div className="text w1117">
          <div>
            <p className="fs-18 text__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A non
              expedita nulla beatae voluptate necessitatibus aspernatur quos quae
              ab sint, voluptatibus vel! Eveniet excepturi natus mollitia
              perferendis et architecto, accusantium totam eius veritatis tempore
              repudiandae, distinctio nesciunt qui odio voluptatem iusto porro.
              Reprehenderit in facere nobis laborum, a aut libero molestiae error
              exercitationem atque, voluptatem, ex culpa dolorem praesentium
              possimus unde. Maxime ut doloribus quam exercitationem culpa amet
              esse? Porro accusantium dolorem natus magnam modi dicta est totam
              hic earum eum unde, recusandae veniam veritatis odit, inventore
              quasi voluptatum qui facilis beatae. Alias possimus ipsa aspernatur
              fugit sapiente, eaque numquam nemo id quaerat dolor nam temporibus.
              Nobis perspiciatis distinctio magni!
            </p>
            <a className="fs-16 button bg-accent" href="">СМОТРЕТЬ МОДЕЛИ</a>
          </div>
          <img className="w-100pc" src={shoe}/>
        </div>
        <section className="package section bg-black fw-regular fs-30 ww">
          <div className="package_text">
            <p className="fw-bold roboto whitespace fs-30">БЕСПЛАТНАЯ ДОСТАВКА</p>
            <p className="fw-regular fs-30">ОТ 3000₽</p>
          </div>
          <p className="fs-21 fw-300">Сделайте заказ и получите подарок!</p>
        </section>
        <section className="bg-cream section w1117">
          <div className="podpiska">
            <h1 className="fs-30">ПОЛЧАЙТЕ СКИДКИ И ПОДАРКИ</h1>
            <form>
              <input
                  className="podpiska_email bg-cream"
                  type="email"
                  placeholder="Ваш e-mail"
              />
              <input
                  className="submit bg-accent fs-14 fw-500"
                  type="submit"
                  value="Подписаться"
              />
            </form>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
