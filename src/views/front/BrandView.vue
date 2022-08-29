<template>
  <div id="character">
    <div id="container">
      <h1 class="title">品牌系列</h1>
      <n-grid cols="1 s:2 m:3" responsive="screen">
        <n-grid-item>
        <RouterLink to="/xplus">
          <n-card class="brands" title="X-PLUS">
            <template #cover>
              <img src="@/assets/xplus.png">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/shfiguarts">
          <n-card class="brands" title="S.H.Figuarts">
            <template #cover>
              <img src="@/assets/shfiguarts.png">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/neca">
          <n-card class="brands" title="NECA">
            <template #cover>
              <img src="@/assets/Neca.png">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<style scoped>
#character {
  width: 80%;
  padding: 200px 0;
  margin: auto;
}

#container {
  width: 80%;
  margin: auto;
}

.n-grid {
  width: 100%;
  gap:50px !important;
  padding: 50px 0;
}

.n-card {
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
}

.n-grid >>> .n-card-cover {
  background-color: white;
}

.n-grid >>> .n-card-header {
  width: 100%;
  background: rgba(0,0,0,0.8);
  text-align: center;
}
.n-grid >>> .n-card-header__main {
  color: white;
  font-size: 2rem;
}

.title {
  font-size: 2rem;
  color: bisque;
  text-align: center;
}

.brands img {
  width: 100%;
  height: 120px;
}

@media (min-width: 768px) {
  .title {
    font-size: 2.5rem;
    text-align: center;
  }
}

@media (min-width: 1200px) {
  .title {
    font-size: 3rem;
    text-align: center;
  }
}
</style>
