<template>
  <div id="productsbox">
    <h1 class="title">商品管理</h1>
    <n-button type="warning" @click="openDialog('', -1)" class="addButton">
      新增商品
    </n-button>
<n-modal v-model:show="showModal" preset="dialog" title="新增商品">
  <n-form v-model="form.valid" @submit.prevent='submitForm'>
        <n-form-item label="圖片">
          <n-upload v-model:file-list='form.image' list-type="image-card">
            <n-button>點擊上傳</n-button>
          </n-upload>
        </n-form-item>
        <n-form-item label="商品名稱">
          <n-input type="textarea" autosize v-model:value='form.name' placeholder="請輸入商品名稱"/>
        </n-form-item>
        <n-form-item label="商品價格">
          <n-input-number button-placement="both" v-model:value='form.price' placeholder="請輸入商品價格" />
        </n-form-item>
        <n-form-item label="商品描述">
          <n-input type="textarea" autosize v-model:value='form.description' placeholder="請輸入商品描述"/>
        </n-form-item>
        <n-form-item label="上架">
          <n-switch v-model:value='form.sell'/>是否上架
        </n-form-item>
        <n-form-item label="角色系列">
          <n-select v-model:value="form.category" :options="options" />
        </n-form-item>
        <n-form-item label="品牌系列">
          <n-select v-model:value="form.brand" :options="options1" />
        </n-form-item>
        <n-button type="primary" attr-type="submit" @click="showModal=false">
          確認
        </n-button>
    </n-form>
  </n-modal>
  <n-divider />
    <div>
      <n-space vertical>
        <n-table striped>
          <thead>
            <tr>
              <th>圖片</th>
              <th>名稱</th>
              <th>價格</th>
              <th>描述</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <template v-for='(product, idx) in sliceProducts'>
              <tr v-if='sliceProducts.length > 0' :key='product._id'>
                <td><img :src="product.image" /></td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td style="white-space: pre" class="description">{{ product.description }}</td>
                <td v-if="currentPage === 1">
                  <n-button type="info" @click="openDialog(product._id, idx)"> 編輯 </n-button>
                  <n-button type="error" @click="del(product._id, idx)">刪除</n-button>
                </td>
                <td v-if="currentPage > 1">
                  <n-button type="info" @click="openDialog(product._id, idx + ((currentPage-1) * pageSize))"> 編輯 </n-button>
                  <n-button type="error" @click="del(product._id, idx + ((currentPage-1) * pageSize))">刪除</n-button>
                </td>
              </tr>
            </template>
          </tbody>
        </n-table>
      </n-space>
    </div>
    <n-pagination v-model:page="currentPage" :page-count="Math.ceil(products.length / pageSize)" />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
const products = reactive([])
// form裡面要多一個 index(idx) 要修改表單內容比較方便
const showModal = ref(false)
const currentPage = ref(1)
const pageSize = 5
const sliceProducts = computed(() => {
  return products.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

// const categories = reactive(['哥吉拉', '超人力霸王', '卡美拉'])
// const brands = reactive(['X-PLUS', 'S.H.Figures', 'NECA'])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  sell: false,
  image: [],
  description: '',
  category: '',
  brand: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const options = [
  {
    label: '哥吉拉',
    value: '哥吉拉'
  },
  {
    label: '超人力霸王',
    value: '超人力霸王'
  },
  {
    label: '卡美拉',
    value: '卡美拉'
  }
]

const options1 = [
  {
    label: 'X-PLUS',
    value: 'X-PLUS'
  },
  {
    label: 'S.H.Figuarts',
    value: 'S.H.Figuarts'
  },
  {
    label: 'NECA',
    value: 'NECA'
  }
]

const openDialog = (_id, idx) => {
  showModal.value = true
  form._id = _id
  if (idx > -1) {
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.brand = products[idx].brand
  } else {
    form.name = ''
    form.price = 0
    form.description = ''
    form.sell = false
    form.category = ''
    form.brand = ''
    // console.log(form.valid)
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  // if (!form.valid) return
  form.submitting = true

  const fd = new FormData()
  // 裡面的東西可以一行一行寫，也可以用for迴圈搞定
  // fd.append('name', form.name)
  // fd.append('price', form.price)
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    } else {
      fd.append(key, form[key])
    }
  }
  try {
    // 把編輯跟新增都放同一個對話框裡面 用form._id的長度判斷
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

// 刪除訂單
const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/products/' + _id)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    products.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

// 抓所有商品
const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>

<style scoped>
  #productsbox {
    margin-left: 400px;
    width: calc(100% - 500px);
  }

  .n-base-icon .n-dialog__icon{
    display: none !important;
  }

  .title {
    margin-bottom: 50px;
    color: bisque;
    font-size: 3rem;
    text-align: center;
  }

  .addButton {
    width: 80px;
    height: 40px;
  }

  .n-button+.n-button {
    margin-left: 2%;
  }

  th {
    font-size: 1.5rem;
  }

  td {
    height: 200px;
    /* text-align: center; */
    font-size: 1.5rem;
  }

  td img {
    height: 100%;
  }

  .description {
    overflow:hidden;
    text-overflow:ellipsis;
  }

  .n-pagination {
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }
</style>
