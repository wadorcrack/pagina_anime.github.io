<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ANIMES</title>
  <link rel="stylesheet" href="css/grid.css" />
  <link rel="stylesheet" href="css/styles.css" />

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.24/datatables.min.js"></script>
  <script src="https://kit.fontawesome.com/5db01a9ec0.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500&display=swap" rel="stylesheet">
</head>

<body>
  <header>
    <div class="headerContainer flex_box">
      <div class="container">
        <div class="logo ">
          <h1>LOGO</h1>
        </div>
      </div>
    </div>
  </header>
  <nav class="menu" id="menu" style="left: -250px;">
    <ul>
      <div class="bt_menu" id="bt_menu"><i class="fas fa-bars" id="icon_bt_menu"></i></div>
      <li><a class="a_text" href="index.html">INICIO</a><a class="a_icon" href="index.html"><i
            class="fas fa-home"></i></a></li>
      <li><a class="a_text" href="#">BIBILOTECA</a><a href="#" class="a_icon"><i class="fas fa-book"></i></a></li>
      <li><a class="a_text" href="#">EMICION</a><a href="#" class="a_icon"><i class="fas fa-satellite-dish"></i></a>
      </li>
      <li><a class="a_text" href="#">ESTRENO</a><a href="#" class="a_icon"><i class="fas fa-calendar-plus"></i></a>
      </li>
      <li><a class="a_text" href="#">FOVORITOS</a><a href="#" class="a_icon"><i class="fas fa-heart"></i></a></li>
      <li><a class="a_text" href="#">ESTOY VIENDO</a><a href="#" class="a_icon"><i class="fas fa-eye"></i></a></li>
      <li><a class="a_text" href="#">LISTA DE ESPERA</a><a href="#" class="a_icon"><i class="fas fa-history"></i></a>
      </li>
      <li><a class="a_text" href="#">PELICULAS</a><a href="#" class="a_icon"></a></li>
    </ul>
  </nav>
  <div class="bg_menu" style="display: none;"></div>
  <div class="widget">
    <div class="container">
      <article>
        <a href="animes/dr_stone_stone_wars" id="0">
          <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
          <figcaption>Dr. Stone Stone Wars</figcaption>
        </a>
        <a href="#">
          <img src="https://i.ibb.co/yNk5J2g/Kaifuku-Jutsushi-no-Yarinaoshi.jpg" alt="Kaifuku Jutsushi no Yarinaoshi"
            border="0">
          <figcaption>Kaifuku Jutsushi no Yarinaoshi</figcaption>
        </a><a href="#">
          <img src="https://i.ibb.co/nbVsJ33/Nanatsu-no-Taizai-Fundo-no-Shinpan.jpg"
            alt="Nanatsu no Taizai Fundo no Shinpan" border="0">
          <figcaption>Nanatsu no Taizai Fundo no Shinpan</figcaption>
        </a>
        <a href="#">
          <img src="https://i.ibb.co/ctBNQ1s/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu.jpg"
            alt="Mushoku Tensei Isekai Ittara Honki Dasu" border="0">
          <figcaption>Mushoku Tensei Isekai Ittara Honki Dasu</figcaption>
        </a>
        <a href="#">
          <img src="https://i.ibb.co/kXG9cvJ/Jujutsu-Kaisen-TV.jpg" alt="Jujutsu Kaisen (TV)" border="0">
          <figcaption>Jujutsu Kaisen (TV)</figcaption>
        </a>
        <a href="#">
          <img src="https://i.ibb.co/NN7XncT/Boku-no-Hero-Academia-4th-Season.webp"
            alt="Boku no Hero Academia 4th Season" border="0">
          <figcaption>Boku no Hero Academia 4th Season</figcaption>
        </a>
        <a href="#">
          <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
          <figcaption>Dr. Stone Stone Wars</figcaption>
        </a>
        <a href="#" id="1">
          <img src="https://i.ibb.co/yNk5J2g/Kaifuku-Jutsushi-no-Yarinaoshi.jpg" alt="Kaifuku Jutsushi no Yarinaoshi"
            border="0">
          <figcaption>Kaifuku Jutsushi no Yarinaoshi</figcaption>
        </a><a href="#">
          <img src="https://i.ibb.co/nbVsJ33/Nanatsu-no-Taizai-Fundo-no-Shinpan.jpg"
            alt="Nanatsu no Taizai Fundo no Shinpan" border="0">
          <figcaption>Nanatsu no Taizai Fundo no Shinpan</figcaption>
        </a>
        <a href="#" id="2">
          <img src="https://i.ibb.co/ctBNQ1s/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu.jpg"
            alt="Mushoku Tensei Isekai Ittara Honki Dasu" border="0">
          <figcaption>Mushoku Tensei Isekai Ittara Honki Dasu</figcaption>
        </a>
        <a href="#">
          <img src="https://i.ibb.co/kXG9cvJ/Jujutsu-Kaisen-TV.jpg" alt="Jujutsu Kaisen (TV)" border="0">
          <figcaption>Jujutsu Kaisen (TV)</figcaption>
        </a>
        <a href="#" id="3">
          <img src="https://i.ibb.co/NN7XncT/Boku-no-Hero-Academia-4th-Season.webp"
            alt="Boku no Hero Academia 4th Season" border="0">
          <figcaption>Boku no Hero Academia 4th Season</figcaption>
        </a>
        <a href="#">
          <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
          <figcaption>Dr. Stone Stone Wars</figcaption>
        </a>
        <a href="#" id="4">
          <img src="https://i.ibb.co/yNk5J2g/Kaifuku-Jutsushi-no-Yarinaoshi.jpg" alt="Kaifuku Jutsushi no Yarinaoshi"
            border="0">
          <figcaption>Kaifuku Jutsushi no Yarinaoshi</figcaption>
        </a><a href="#">
          <img src="https://i.ibb.co/nbVsJ33/Nanatsu-no-Taizai-Fundo-no-Shinpan.jpg"
            alt="Nanatsu no Taizai Fundo no Shinpan" border="0">
          <figcaption>Nanatsu no Taizai Fundo no Shinpan</figcaption>
        </a>
        <a href="#" id="5">
          <img src="https://i.ibb.co/ctBNQ1s/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu.jpg"
            alt="Mushoku Tensei Isekai Ittara Honki Dasu" border="0">
          <figcaption>Mushoku Tensei Isekai Ittara Honki Dasu</figcaption>
        </a>
        <a href="#" id="">
          <img src="https://i.ibb.co/kXG9cvJ/Jujutsu-Kaisen-TV.jpg" alt="Jujutsu Kaisen (TV)" border="0">
          <figcaption>Jujutsu Kaisen (TV)</figcaption>
        </a>
        <a href="#" id="6">
          <img src="https://i.ibb.co/NN7XncT/Boku-no-Hero-Academia-4th-Season.webp"
            alt="Boku no Hero Academia 4th Season" border="0">
          <figcaption>Boku no Hero Academia 4th Season</figcaption>
        </a>
      </article>
      <a class="disc_slider fas fa-circle" href="#0"></a>
      <a class="disc_slider fas fa-circle" href="#1"></a>
      <a class="disc_slider fas fa-circle" href="#2"></a>
      <a class="disc_slider fas fa-circle" href="#3"></a>
      <a class="disc_slider fas fa-circle" href="#4"></a>
      <a class="disc_slider fas fa-circle" href="#5"></a>
      <a class="disc_slider fas fa-circle" href="#6"></a>
    </div>
  </div>
  <div class="container grid">
    <aside>
      <div class="adSense">
      </div>
      <ul>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr. Stone: Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
        <li><a href="#"><i class="fa fa-play icon-space"></i>Dr.Stone Wars</a></li>
      </ul>
    </aside>
    <section>
      <article>
        <h2>Últimos episodios</h2>
        <div class="ultimos_ep">
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Z20XYJM/thumb-fvs-io-j-nlgad2-53wlr6.jpg" alt="thumb-fvs-io-j-nlgad2-53wlr6" border="0">
            </figure>
            <span>Episodio 15</span>
            <strong>Shingeki no Kyojin: The Final Season Episodio</strong>
          </a>
          <a href="#">
            <figure>
              <img src="img/d-stone-10.jpg" alt="">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/tM6RX5Y/d-stone-10.png" alt="d-stone-10" border="0">
            </figure>
            <span>Episodio 10</span>
            <strong>Dr. Stone Stone Wars 10</strong>
          </a>
        </div>
      </article>
      <article>
        <h2>Últimos animes agregados</h2>
        <div class="ultimos_an">
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
          <a href="#">
            <figure>
              <img src="https://i.ibb.co/Yy10HGc/Dr-Stone-Stone-Wars.jpg" alt="Dr. Stone Stone Wars" border="0">
              <span>Estreno</span>
            </figure>
            <i class="fas fa-play"></i>
            <strong>Dr. Stone Stone Wars</strong>
          </a>
        </div>
      </article>
    </section>
  </div>
  <footer>
    <div class="container">
      <p>Todos Los Derechos Reservados, Wabder Ortiz</p>
    </div>
  </footer>
  <script src="js/script.js">
  </script>
</body>

</html>
