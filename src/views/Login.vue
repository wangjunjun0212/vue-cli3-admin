<template>
  <div class="login">
    <h2>{{ loginMsg }}</h2>
    <div>
      <p>
        <label for="mobile">用户名：</label>
        <input type="text" v-model="user.mobile" :placeholder="placeHoler.usr" >
      </p>
      <p>
        <label for="pwd">密码：</label>
        <input type="password" v-model="user.password" :placeholder="placeHoler.pwd">
      </p>
    </div>
    <button @click="login">提交</button>
  </div>
</template>
<script>
import { login } from '@/service/api/login'

export default {
  data () {
    return {
      loginMsg: 'LOGIN PAGE',
      user: {
        mobile: '2121',
        password: 'secret'
      },
      placeHoler: {
        usr: '用户名',
        pwd: '密码'
      }
    }
  },
  computed: {
    loginValid () {
      return (this.user.mobile === '' || this.user.password === '')
    }
  },
  methods: {
    login () {
      login(this.user).then(res => {
        const token = res.access_token
        if (token) {
          this.$store.commit('login', token)
          this.$store.commit('user', this.user.mobile)
          this.$router.push({ path: this.$route.query.redirect || '/home' })
        }
      })
    }
  }
}
</script>
