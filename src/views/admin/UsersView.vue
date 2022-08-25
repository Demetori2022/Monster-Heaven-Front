<template>
  <div id="usersbox">
    <h1 class="title">會員管理</h1>
      <n-divider />
      <div>
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>使用者</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(user, idx) in sliceUsers'>
                <tr v-if='sliceUsers.length > 0' :key='user._id'>
                  <td>{{user._id}}</td>
                  <td>{{ user.account }}</td>
                  <td v-if="currentPage === 1">
                    <n-button type="error" @click="del(user._id, idx)">刪除</n-button>
                  </td>
                  <td v-if="currentPage > 1">
                    <n-button type="error" @click="del(user._id, idx + ((currentPage-1) * pageSize))">刪除</n-button>
                  </td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
      <n-pagination v-model:page="currentPage" :page-count="Math.ceil(users.length / pageSize)" />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const users = reactive([])
const currentPage = ref(1)
const pageSize = 10
const sliceUsers = computed(() => {
  return users.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

// 刪除會員
const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/users/' + _id)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    users.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得會員資料'
    })
  }
}
init()
</script>

<style scoped>
  #usersbox {
    margin-left: 400px;
    width: calc(100% - 500px);
  }

  .title {
    margin-bottom: 100px;
    color: bisque;
    font-size: 3rem;
    text-align: center;
  }

    th {
    font-size: 1rem;
  }

  td {
    height: 50px;
    /* text-align: center; */
    font-size: 1.3rem;
  }

  .n-pagination {
    padding: 50px 0;
    display: flex;
    justify-content: center;
  }
</style>
