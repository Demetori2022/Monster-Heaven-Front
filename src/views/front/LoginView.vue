<template>
  <div id="loginPage">
  <div id="container">
    <div class="flex" id="banner_login">
    <div class="flex D-column" id="login">
    <h1 class="title">登入</h1>
    <n-form ref="formRef" :model="form" :rules="rules" v-model="valid" @submit.prevent='login'>
      <n-form-item path="account" label="帳號">
        <n-input class="loginform" type="text" placeholder="請輸入帳號" v-model:value="form.account"></n-input>
      </n-form-item>
      <n-form-item path="password" label="密碼">
        <n-input class="loginform" type="password" name="password" placeholder="請輸入密碼" v-model:value="form.password"></n-input>
      </n-form-item>
      <n-form-item>
        <n-button type="primary" attr-type="submit" round="round" :loading="loading">登入</n-button>
      </n-form-item>
      <n-form-item>
        <p>還沒有會員嗎?點我&nbsp;</p><RouterLink style="color: yellow" to="/register">註冊</RouterLink>
      </n-form-item>
    </n-form>
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>
#loginPage {
  width: 100%;
  height: 61vh;
  padding: 150px 0;
}

#container {
  width: 80%;
  margin: auto;
}

#container >>> #login {
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

#container >>> .n-form-item-label {
  width: 100%;
}

.loginform {
  width: 100%;
  margin: auto;
}

.n-form-item >>> .n-form-item-blank {
  justify-content: center;
}

@media (min-width: 768px) {
  #container >>> #login {
  width: 70%;
}
}

@media (min-width: 1200px) {
  #container >>> #login {
  width: 50%;
}
}

@media (min-width: 1400px) {
  #container >>> #login {
  width: 30%;
}
}
</style>
<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)

const form = reactive({
  account: null,
  password: null
})

const rules = reactive({
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
})

const login = () => {
  user.login(form)
}
</script>
