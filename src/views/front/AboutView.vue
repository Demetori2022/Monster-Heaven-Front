<template>
  <div id="about">
    <div id="container">
      <h1 class="title">關於我們</h1>
      <div class="header">
        <div class="headerText">
          <h1>Monster Heaven is your best choice</h1>
          <h3>一 怪獸天國是你的最佳選擇 一</h3>
        </div>
      </div>
      <h1 class="title">專業、用心、良好的服務</h1>
      <div id="content">
        <n-grid cols="1 s:1 m:2" responsive="screen">
        <n-grid-item class="first">
          <div class="p">
            <div class="content">
            <p>
              你有收藏特攝模型的愛好嗎?
            </p>
            <p>
              每次選擇店家時都害怕遇到雷包或是購買到品項不良的商品嗎?
            </p>
            <p>
              那怪獸天國將是您的最佳選擇!
            </p>
            <p>
              我們將為您提供專業、用心、良好的服務,
            </p>
            <p>
              讓您每次購買都能夠以安心、愉快的心情將模型帶回家。
            </p>
          </div>
          </div>
        </n-grid-item>
        <n-grid-item class="second" data-aos="fade-left" data-aos-duration="2000">
          <div class="content-img">
            <img src="@/assets/about01.jpg">
          </div>
        </n-grid-item>
        <n-grid-item class="third" data-aos="fade-right" data-aos-duration="2000">
          <div class="content-img">
            <img src="@/assets/about02.jpg">
          </div>
        </n-grid-item>
        <n-grid-item class="fourth">
          <div class="content">
            <p>
              購買東西時最難受的事情莫過於等待出貨及到貨的時間了，
            </p>
            <p>
              因此怪獸天國將在收到玩家訂單的第一時間以最快的速度進行出貨!
            </p>
            <p>
              讓玩家能夠在最短的時間內收到自己喜愛的特攝模型。
            </p>
          </div>
        </n-grid-item>
        <n-grid-item class="fifth">
          <div class="content">
            <p>
              怪獸天國將提供透明、公開的商品資訊，絕不販賣不良品以及炒作商品價格!
            </p>
            <p>
              玩家不僅能得到更多模型資訊,也能以合理價格購買到商品。
            </p>
            <p>
              玩家不但買的放心且買的開心。
            </p>
          </div>
        </n-grid-item>
        <n-grid-item class="sixth" data-aos="fade-left" data-aos-duration="2000">
          <div class="content-img">
            <img src="@/assets/about03.jpg">
          </div>
        </n-grid-item>
      </n-grid>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about {
  width: 100%;
  margin: auto;
  padding: 120px 0;
}

#container {
  width: 80%;
  margin: auto;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: bisque;
  margin: 80px 0 50px 0;
}

.header {
  width: 100%;
  height: 300px;
  position: relative;
  background: url('https://wallpapersmug.com/download/1920x1080/ba8009/godzilla-king-of-the-monsters-fan-art.jpg') no-repeat center fixed;
}

.headerText {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.headerText h1 {
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  text-shadow: 8px 8px 10px rgb(7, 225, 241);
}

.headerText h3 {
  font-size: 1rem;
  color: white;
  font-weight: 900;
}

#content {
  width: 100%;
  margin: auto;
}

.content {
  height: 300px;
  backdrop-filter: blur(50px);
  padding: 0 20px;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content p {
  color: whitesmoke;
  font-size: 15px;
}

.content-img {
  height: 300px;
}

.content-img img {
  width: 100%;
  height: 100%;
}

.first {
    order: 2;
  }

  .second {
    order: 1;
  }

  .third {
    order: 3;
  }

  .fourth {
    order: 4;
  }

  .fifth {
    order: 6;
  }

  .sixth {
    order: 5;
  }

@media (min-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  .header {
    width: 100%;
    height: 500px;
  }
  .headerText h1 {
    font-size: 2rem;
  }
  .headerText h3 {
    font-size: 1.5rem;
  }
  .content {
    height: 375px;
    line-height: 2.5rem;
  }

  .content p {
    font-size: 20px;
  }

  .content-img {
  height: 375px;
  }
  .first {
    order: 2;
  }

  .second {
    order: 1;
  }

  .third {
    order: 3;
  }

  .fourth {
    order: 4;
  }

  .fifth {
    order: 6;
  }

  .sixth {
    order: 5;
  }
}

@media (min-width: 1200px) {
  .title {
    font-size: 3rem;
  }
  .header {
    width: 100%;
    height: 700px;
  }
  .headerText h1 {
    font-size: 3rem;
  }
  .headerText h3 {
    font-size: 2rem;
  }
  .content {
    height: 450px;
    line-height: 3rem;
  }

  .content p {
    font-size: 25px;
  }

  .content-img {
  height: 450px;
  }
  .first {
    order: 1;
  }

  .second {
    order: 2;
  }

  .third {
    order: 3;
  }

  .fourth {
    order: 4;
  }

  .fifth {
    order: 5;
  }

  .sixth {
    order: 6;
  }
}
</style>
