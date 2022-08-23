<template>
  <header>
    <div id="container">
      <div id="menu">
          <div class="home">
            <RouterLink to="/"><img class="logo" src="../../assets/logo.png"></RouterLink>
          </div>
          <nav>
            <label for="switch"><n-icon size="50"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path></svg></n-icon></label><!--漢堡按鈕圖示-->
            <input type="checkbox" id="switch"><!--選單開關-->
            <ul class="menu"><!--選單內容-->
              <li>
                <RouterLink to="/product">
                  <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" fill="currentColor"></path></svg>
                </n-icon>
                商品列表
            </RouterLink>
              </li>
              <li>
                <n-dropdown trigger="hover" placement="bottom-start" :options="characters" @select="handleSelect">
                  <RouterLink to="/character">
                    <n-icon>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h160.22c25.19 0 48.03-14.77 58.36-37.74l27.74-61.64C286.21 331.08 302.35 320 320 320s33.79 11.08 41.68 28.62l27.74 61.64C399.75 433.23 422.6 448 447.78 448H608c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM160 304c-35.35 0-64-28.65-64-64s28.65-64 64-64s64 28.65 64 64s-28.65 64-64 64zm320 0c-35.35 0-64-28.65-64-64s28.65-64 64-64s64 28.65 64 64s-28.65 64-64 64z" fill="currentColor"></path></svg>
                    </n-icon>
                    角色系列
                  </RouterLink>
                </n-dropdown>
              </li>
              <li>
                <n-dropdown trigger="hover" placement="bottom-start" :options="brands" @select="handleSelect">
                  <RouterLink to="/brand">
                    <n-icon>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23L16.23 18z" fill="currentColor"></path></svg>
                    </n-icon>
                    品牌系列
                  </RouterLink>
                </n-dropdown>
              </li>
              <li>
                <RouterLink to="/about">
                  <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M12 12.75c1.63 0 3.07.39 4.24.9c1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73c1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3z" fill="currentColor"></path></svg>
                  </n-icon>
                  關於我們
                </RouterLink>
              </li>
              <li>
                <RouterLink v-if='!isLogin' to="/login" LogInRound >
                  <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M392 80H232a56.06 56.06 0 0 0-56 56v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56z" fill="currentColor"></path><path d="M80 240a16 16 0 0 0 0 32h96v-32z" fill="currentColor"></path></svg>
                  </n-icon>
                  登入
                </RouterLink>
              </li>
              <li>
                <RouterLink v-if='isLogin && !isAdmin' to="/cart">
                  <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32" fill="currentColor"></circle><circle cx="400" cy="416" r="32" fill="currentColor"></circle><path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z" fill="currentColor"></path></svg>
                  </n-icon>
                  購物車
                </RouterLink>
              </li>
              <li>
                <RouterLink v-if='isLogin && !isAdmin' to="/order">
                  <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z" fill="currentColor"></path></svg>
                  </n-icon>
                  訂單
                </RouterLink>
              </li>
              <li>
                <RouterLink v-if='isLogin && isAdmin' to="/admin">
                  <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M17 11c.34 0 .67.04 1 .09V7.58c0-.8-.47-1.52-1.2-1.83l-5.5-2.4c-.51-.22-1.09-.22-1.6 0l-5.5 2.4C3.47 6.07 3 6.79 3 7.58v3.6c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55c-.69-.98-1.1-2.17-1.1-3.45c0-3.31 2.69-6 6-6z" fill="currentColor"></path><path d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12s-1.12-.51-1.12-1.12s.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17c.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z" fill="currentColor"></path></svg>
                  </n-icon>
                  管理
                </RouterLink>
              </li>
              <li>
                <n-button class="logout" quaternary v-if='isLogin' @click="logout">
                  <n-icon class="log">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16z" fill="currentColor"></path><path d="M459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z" fill="currentColor"></path></svg>
                  </n-icon>
                  登出
                </n-button>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  </header>
  <RouterView></RouterView>
  <n-back-top :right="100" />
  <n-layout-footer id="footer">
    <div id="container">
      <n-grid cols="1 m:2 l:4" responsive="screen">
        <n-grid-item>
          <div class="info">
            <h1>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M775.3 248.9a369.62 369.62 0 0 0-119-80A370.2 370.2 0 0 0 512.1 140h-1.7c-99.7.4-193 39.4-262.8 109.9c-69.9 70.5-108 164.1-107.6 263.8c.3 60.3 15.3 120.2 43.5 173.1l4.5 8.4V836h140.8l8.4 4.5c52.9 28.2 112.8 43.2 173.1 43.5h1.7c99 0 192-38.2 262.1-107.6c70.4-69.8 109.5-163.1 110.1-262.7c.2-50.6-9.5-99.6-28.9-145.8a370.15 370.15 0 0 0-80-119zM312 560a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96z" fill-opacity=".15" fill="currentColor"></path><path d="M664 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0z" fill="currentColor"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7z" fill="currentColor"></path><path d="M464 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0z" fill="currentColor"></path></svg></n-icon>
              聯絡資訊
            </h1>
            <p>營業時間 : 10:00am ~ 8:00pm</p>
            <p>客服時間 : 10:00am ~ 8:00pm</p>
            <p>電話 : (02)7414-7414</p>
            <p>手機 : 0988-541-888</p>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="information">
            <h1>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944c14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195c-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845c28.886-12.994 95.413-49.038 107.534-77.323c7.797-18.194 21.384-29.084 40-29.092c34.222-.014 57.752 35.098 44.119 66.908c-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20z" fill="currentColor"></path></svg></n-icon>
              站內連結
            </h1>
            <RouterLink to="/product"><p>商品列表</p></RouterLink>
            <RouterLink to="/character"><p>角色系列</p></RouterLink>
            <RouterLink to="/brand"><p>品牌系列</p></RouterLink>
            <RouterLink to="/about"><p>關於我們</p></RouterLink>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="information">
            <h1>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" fill="currentColor"></path></svg></n-icon>
              合作品牌
            </h1>
            <a href="https://us.ric-toy.com/" target="_blank">X-PLUS</a>
            <a href="https://p-bandai.com/tw" target="_blank">BANDAI</a>
            <a href="https://necaonline.com/" target="_blank">NECA</a>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="information">
            <h1>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z" fill="currentColor"></path></svg></n-icon>
              社群媒體
            </h1>
            <a href="https://zh-tw.facebook.com/" target="_blank">Facebook</a>
            <a href="https://twitter.com/?lang=zh-Hant" target="_blank">Twitter</a>
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
          </div>
        </n-grid-item>
        </n-grid>
    </div>
  </n-layout-footer>
  <n-layout-footer id="copyright">
    <p>Copyright©2022 所有圖片皆來自於網路</p>
  </n-layout-footer>
</template>

<style scoped>

#container {
  width: 80%;
  height: 100%;
  margin: auto;
}

#footer > #container {
  width: 80%;
  height: 100%;
  margin: auto;
  padding-left: 150px;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  /* backdrop-filter: blur(5px); */
  background: #02263b;
  /* box-shadow:inset 0px -5px 20px rgba(0,0,0,0.5),
              0px -10px 25px rgba(0,0,0,0.7),
              0px -15px 30px rgba(0,0,0,0.9); */
}

header #menu {
  width: 100%;
  height: 100%;
}

header #menu .home {
  width: 200px;
  height: 100%;
  float: left;
}

header #menu .home img {
  width: 100%;
  height: 100%;
}

ul {
  margin: 0;
  list-style: none;
  padding-left: 0;
}

nav {
  font-size: 20px;
  font-weight: 900;
  float: right;
  /* display: flex;
  justify-content: flex-end; */
}

nav::after {
  content: "";
  display: block;
  clear: both;
}

input {
  display: none;
}

label {
  float: right;
  padding-left:50px;
  line-height: 50px;
  margin-top: 25px;
}

label:hover {
  cursor: pointer;
}

label .n-icon {
  color: bisque;
}

nav .menu {
  clear: both;
}

nav .menu li a:hover {
  color: white;
  transition: .2s;
}

nav .menu li a {
  display: block;
  padding: 5px;
  font-size: 18px;
  color: bisque;
  text-align: left;
}

nav .menu li a.router-link-exact-active {
  display: inline-block;
  color: orange;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-align: right;
  color: bisque;
}

nav a:first-of-type {
  border: 0;
}

nav .menu {
  max-height: 0;
  overflow: hidden;
  transition: .5s; /* 動畫秒數 */
}

input:checked ~ .menu {
  max-height: 400px;
}

.logout {
  font-size: 18px;
  color: bisque;
  padding: 0;
}

.logout:hover {
  background-color: transparent;
  color: white;
}

.n-button >>> .n-button__content {
  width: 100%;
  padding-left: 7px;
  font-weight: bolder;
}

.n-icon {
  vertical-align: middle;
}

.log {
  margin-right: 3px;
}

.n-grid {
  width: 100%;
  gap:90px !important;
  padding: 50px 0;
}

#footer {
  width: 100%;
  background: #02263b;
  padding: 50px 0;
}

.information {
  display: flex;
  flex-direction: column;
}

.info h1 {
  font-size: 1.5rem;
  margin-bottom: 5%;
  color: bisque;
}

.info p {
  font-size: 1rem;
  color: white;
}

.information h1 {
  font-size: 1.5rem;
  margin-bottom: 5%;
  color: bisque;
}

.information a {
  font-size: 1rem;
  color: white;
}

.information p {
  font-size: 1rem;
}

.information a:hover {
  color: crimson;
}

#copyright {
  background: #02263b;
}

#copyright p {
  text-align: center;
  color: antiquewhite;
}

@media screen and (min-width: 1200px) {

  label {
    display: none;
  }
  nav .menu {
    float: right;
    clear: none;
    max-height: 50px;
    margin-top: 35px;
  }

  nav .menu li {
    display: inline-block;
  }

  nav .menu li:nth-child(9) {
    top: 2px;
  }

  nav .menu li a {
    padding: 0 15px;
  }
}
</style>

<script setup>
import { h, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin } = storeToRefs(user)

const characters = reactive([
  {
    label: () => h(RouterLink, {
      to: {
        path: '/godzilla'
      }
    }, { default: () => '哥吉拉' }),
    key: 'godzilla'
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: '/ultraman'
      }
    }, { default: () => '超人力霸王' }),
    key: 'ultraman'
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: '/gamera'
      }
    }, { default: () => '卡美拉' }),
    key: 'gamera'
  }
])

const brands = reactive([
  {
    label: () => h(RouterLink, {
      to: {
        path: '/xplus'
      }
    }, { default: () => 'X-PLUS' }),
    key: 'x-plus'
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: '/shfiguarts'
      }
    }, { default: () => 'S.H.Figuarts' }),
    key: 's.h.figuarts'
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: '/neca'
      }
    }, { default: () => 'NECA' }),
    key: 'neca'
  }
])

</script>
