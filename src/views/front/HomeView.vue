<template>
  <div id="carousel">
      <n-carousel interval="3000" autoplay show-dots="false" >
    <img
      class="carousel-img"
      src="@/assets/carousel01.jpg"
    >
    <img
      class="carousel-img"
      src="@/assets/carousel02.jpg"
    >
    <img
      class="carousel-img"
      src="@/assets/carousel03.jpg"
    >
  </n-carousel>
  </div>
  <div id="characters">
    <div id="container">
      <h1 class="title">角色系列</h1>
      <n-grid class="c-grid" cols="1 s:2 m:3" responsive="screen">
        <n-grid-item>
        <RouterLink to="/godzilla">
          <n-card class="characters" data-aos="fade-right" data-aos-duration="500" title="哥吉拉">
            <template #cover>
              <img src="../../assets/godzillaC.jpg">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/ultraman">
          <n-card class="characters" data-aos="fade-down" data-aos-duration="500" title="超人力霸王">
            <template #cover>
              <img src="../../assets/ultramanC.jpg">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/gamera">
          <n-card class="characters" data-aos="fade-left" data-aos-duration="500" title="卡美拉">
            <template #cover>
              <img style="object-fit: center" src="../../assets/gameraC.jpg">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
  <div id="brands">
    <div id="container">
      <h1 class="title">品牌系列</h1>
      <n-grid cols="1 s:2 m:3" responsive="screen">
        <n-grid-item>
        <RouterLink to="/xplus">
          <n-card class="brands" title="X-PLUS" data-aos="fade-right" data-aos-duration="500">
            <template #cover>
              <img src="../../assets/xplus.png">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/shfiguarts">
          <n-card class="brands" title="S.H.Figuarts" data-aos="fade-down" data-aos-duration="500">
            <template #cover>
              <img src="../../assets/shfiguarts.png">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/neca">
          <n-card class="brands" title="NECA" data-aos="fade-left" data-aos-duration="500">
            <template #cover>
              <img src="../../assets/Neca.png">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<style scoped>
* {
  overflow-x: hidden;
}

#container {
  width: 80%;
  margin: auto;
}

#carousel {
  padding-top: 250px;
  width: 100%;
  height:100%;
  margin: auto;
  position: relative;
}

#carousel .n-carousel__slide{
  width: 100%;
  height:100%;
}

#carousel::before {
  content: '';
  width: 100%;
  height: 150px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg,rgba(0,0,0,1),transparent);
  z-index:1;
}

.n-carousel {
  width: 100%;
  height: 100%;
  margin: auto;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.n-card {
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
}

.n-grid {
  width: 100%;
  gap:100px !important;
  padding: 50px 0;
}

.c-grid >>> .n-card-header {
  width: 80%;
  background: rgba(0,0,0,0.8
  );
  text-align: center;
}
.n-grid >>> .n-card-header__main {
  color: white;
  font-size: 2rem;
  font-weight: bolder;
}

.title {
  font-size: 2rem;
  color: bisque;
  text-align: center;
}

.characters img {
  width: 80%;
  margin: auto;
  height: 400px;
  object-fit: cover;
}

.brands img {
  width: 100%;
  height: 60px;
}

#characters {
  width: 100%;
  margin: auto;
  padding: 200px 0px;
}

/* .characters >>> .n-card-cover::before {
  content: '';
  position: absolute;
  background-image: url('../../assets/effect.png');
  background-position: center;
  background-size: cover;
  opacity: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: opacity .2s;
}

.characters >>> .n-card-cover:hover::before {
  opacity: 1;
} */

.n-card.n-card--bordered {
  border: none;
}

#brands {
  width: 100%;
  margin: auto;
  padding: 50px 0;
  background: white;
}

#brands h1 {
  color: black;
}

.brands img {
  width: 60%;
  height: 100px;
  margin: auto;
}

.brands >>> .n-card-header__main {
  color: black;
}

@media (min-width: 768px) {
  #carousel {
  padding-top: 40px;
  width: 100%;
  height:100%;
  margin: auto;
  position: relative;
  }

  #carousel::before {
  content: '';
  width: 100%;
  height: 225px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg,rgba(0,0,0,1),transparent);
  z-index:1;
}

  .title {
    font-size: 2.5rem;
    text-align: center;
  }

  .characters img {
  width: 100%;
  height: 500px;
  }

  .c-grid >>> .n-card-header {
    width: 100%;
  }

  .brands img {
  width: 80%;
  margin: auto;
  height: 110px;
  }
}

@media (min-width: 1200px) {
  #carousel {
  padding-top: 0;
  width: 100%;
  height:100vh;
  margin: auto;
  position: relative;
  }

  #carousel::before {
  content: '';
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg,rgba(0,0,0,1),transparent);
  z-index:1;
}

  .title {
    font-size: 3rem;
    text-align: center;
  }

  .characters img {
  width: 100%;
  height: 550px;
  }

  .c-grid >>> .n-card-header {
    width: 100%;
  }

  .brands img {
  width: 100%;
  height: 120px;
  }
}
</style>
