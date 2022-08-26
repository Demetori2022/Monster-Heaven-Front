<template>
  <div id="product">
    <div id='container'>
      <h1 class="title">S.H.Figuarts系列商品</h1>
    <n-grid cols="1 s:2 m:3 l:4" responsive="screen">
      <n-grid-item v-for="(product, idx) in sliceProducts" :key="idx">
          <n-card :bordered="false" v-if='sliceProducts.length>0' :key='product._id'>
            <template #cover>
              <div class="imgbox">
                <img :src="product.image">
              </div>
            </template>
            <div class="content">
            <h1> {{product.name}}</h1>
            <h2> 商品價格 : {{product.price}}</h2>
            <h2 style="white-space: pre;">{{ product.description }}</h2>
            <!-- <h3 style="white-space:pre"> {{product.description}}</h3> -->
            <n-space vertical>
              <n-input-number button-placement="both" v-model:value="product.quantity" placeholder="購買數量" :min="0"/>
            </n-space>
            <div class="cart-button">
            <n-button @click="addCart({ product: product._id, quantity: product.quantity })" strong round type="warning">
              加入購物車
            </n-button>
            </div>
            </div>
          </n-card>
      </n-grid-item>
    </n-grid>
    <n-pagination v-model:page="currentPage" :page-count="Math.ceil(products.length / pageSize)" />
  </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { addCart } = user

const products = reactive([])
const currentPage = ref(1)
const pageSize = 12
const sliceProducts = computed(() => {
  return products.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result.filter(a => {
      return a.brand === 'S.H.Figuarts'
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>

<style scoped>
#product {
  width: 100%;
  padding: 200px 0;
}

#container {
  width: 80%;
  margin: auto;
}

.title {
  font-size: 2rem;
  color: bisque;
  text-align: center;
}

.n-grid {
  width: 100%;
  gap:50px 20px !important;
  padding: 50px 0 120px 0;
}

.n-card {
  width: 100%;
  height: 660px;
  display: flex;
  text-align: center;
  border: 3px solid white;
  border-radius: 10px;
}

.n-card:hover {
  border: 3px solid orange;
  box-shadow: 0 0 10px orange;
  transition: .3s;
}

.imgbox {
  width: 100%;
  height: 300px;
}

.imgbox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0px 0px;
}

.n-card {
  background-color: transparent;
  color: white;
}

.imgbox img {
  width: 100%;
  height: 100%;
}

.n-card >>> .n-card__content {
  padding: 10px 30px;
}

.n-card >>> .content {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  text-align: center;
  width: 100%;
  height: 100%;
  overflow:hidden;
  text-overflow:ellipsis;
}

.content >>> h1 {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin: 10px 0;

}

.n-card >>> h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.n-card >>> h2 {
  margin: 10px 0;
}

.cart-button {
  top: 20px;
}

.n-pagination {
  display: flex;
  justify-content: center;
}
/* .n-button {
  width: 100px;
  color: black;
} */
/*
.n-button:hover {
  background: orange;
  color: white;
  transition: .3s;
} */

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
