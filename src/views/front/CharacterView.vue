<template>
  <div id="character">
    <div id="container">
      <h1 class="title">角色系列</h1>
      <n-grid cols="1 s:2 m:3" responsive="screen">
        <n-grid-item>
        <RouterLink to="/godzilla">
          <n-card class="characters" title="哥吉拉">
            <template #cover>
              <img src="../../assets/01c.jpg">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/ultraman">
          <n-card class="characters" title="超人力霸王">
            <template #cover>
              <img src="../../assets/02c.jpg">
            </template>
          </n-card>
        </RouterLink>
        </n-grid-item>
        <n-grid-item>
        <RouterLink to="/gamera">
          <n-card class="characters" title="卡美拉">
            <template #cover>
              <img src="../../assets/03c.jpg">
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
  gap:20px !important;
  padding: 50px 0;
}

.n-card {
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
}

.n-grid >>> .n-card-header {
  width: 100%;
  background: rgba(0,0,0,0.8
  );
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
