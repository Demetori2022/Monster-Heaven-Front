<template>
<div id="orderPage">
  <div id="container">
    <n-row>
      <n-col :span="24">
      <h1 class="title">訂單</h1>
        <n-divider />
      </n-col>
      <n-col :span="24">
        <div>
          <n-space vertical>
            <n-table size="small" striped>
              <thead>
                <tr>
                  <th class="id">ID</th>
                  <th>日期</th>
                  <th>金額</th>
                  <th>商品</th>
                </tr>
              </thead>
              <tbody v-if='orders.length > 0'>
                <tr v-for='order in orders' :key='order._id'>
                  <td class="id"> {{ order._id }} </td>
                  <td>{{ new Date(order.date).toLocaleDateString() }} </td>
                  <td> {{ order.totalPrice }} </td>
                  <td>
                    <ul>
                      <li v-for='product in order.products' :key='product._id'>
                      {{ product.product.name }} x {{ product.quantity }}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </n-table>
          </n-space>
        </div>
      </n-col>
    </n-row>
  </div>
</div>
</template>
<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()
</script>

<style scoped>
#orderPage {
  width: 100%;
  margin: auto;
  padding: 212px 0;
}

#container {
  width: 75%;
  margin: auto;
}

.title {
  font-size: 2rem;
  color: bisque;
  text-align: center;
}

th {
  background: gray;
  color: white;
  font-weight: bolder;
}

.id {
  display: none;
}

ul {
    padding-left: 20px;
}

@media (min-width: 768px) {
  .id {
    display: table-cell;
  }

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
