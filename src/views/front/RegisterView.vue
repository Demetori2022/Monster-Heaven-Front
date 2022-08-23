<template>
  <div id="registerPage">
  <div id="container">
  <div class="flex" id="banner_register">
  <div class="flex D-column" id="register">
    <h1 class="title">註冊</h1>
      <n-form ref="formRef" :model="model" :rules="rules" v-model="valid">
      <n-form-item path="email" label="信箱">
        <n-input class="registerform" type="email" placeholder="請輸入信箱" v-model:value="model.email"></n-input>
      </n-form-item>
      <n-form-item path="account" label="帳號">
        <n-input class="registerform" type="text" placeholder="請輸入帳號" v-model:value="model.account"></n-input>
      </n-form-item>
      <n-form-item path="password" label="密碼">
        <n-input class="registerform" type="password" name="password" placeholder="請輸入密碼" v-model:value="model.password"></n-input>
      </n-form-item>
      <n-form-item>
        <n-button attr-type="submit" color="#D74B4B" round="round" :loading="loading" @click="register">送出</n-button>
      </n-form-item>
      <n-form-item>
        <p>有會員了嗎?點我&nbsp;</p><RouterLink style="color: yellow" to="/login">登入</RouterLink>
      </n-form-item>
    </n-form>
  </div>
</div>
</div>
</div>
</template>
<style scoped>
#registerPage {
  width: 100%;
  padding: 150px 0;
  height: 75vh;
}

#container {
  width: 80%;
  margin: auto;
}

#container >>> #register {
  width: 100%;
  color: white;
  margin: auto;
}

#container >>> .n-form-item-label {
  color: white;
}

.title {
  text-align: center;
  font-size: 3rem;
}

#banner_register {
  width: 100%;
}

.n-form-item >>> .n-form-item-blank {
  justify-content: center;
}

@media (min-width: 768px) {
  #container >>> #register {
  width: 70%;
}
}

@media (min-width: 1200px) {
  #container >>> #register {
  width: 50%;
}
}

@media (min-width: 1400px) {
  #container >>> #register {
  width: 30%;
}
}
/* .registerform {
  width: 100%;
} */
</style>
<script setup>
import { reactive, ref } from 'vue'
import { isEmail } from 'validator'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'

const router = useRouter()
const valid = ref(false)
const loading = ref(false)

const model = reactive({
  email: null,
  account: null,
  password: null
})
const rules = reactive({
  email: [{
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('信箱必填')
      } else if (!isEmail(value)) {
        return new Error('信箱格式錯誤')
      }
    },
    trigger: ['input', 'blur']
  }],
  account: [{
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('帳號必填')
      } else if (value.length < 4 || value.length > 20) {
        return new Error('帳號長度為 4 到 20 個字')
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return new Error('帳號只能有英文和數字')
      }
    },
    trigger: ['input', 'blur']
  }],
  password: [{
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('密碼必填')
      } else if (value.length < 4 || value.length > 20) {
        return new Error('密碼長度為 4 到 20 個字')
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return new Error('密碼只能有英文和數字')
      }
    },
    trigger: ['input', 'blur']
  }]
}
)
const register = async () => {
  // if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', model)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  loading.value = false
}
</script>
