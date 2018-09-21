<template>
  <section class="login">
  <div class="blog-slider" ref="blogSlider">
    <swiper class="blog-slider__wrp swiper-wrapper" :options="swiperOption">
      <swiper-slide class="blog-slider__item swiper-slide"> 
          <div class="blog-slider__img" v-if="isShow"> 
            <img src="img/icons/favicon-32x32.png" alt="">
          </div>
          <div class="blog-slider__content" v-if="isShow"> 
            <div class="blog-slider__title">{{ loginMsg }}</div>
            <div class="blog-slider__text">项目简介：该项目是基于vue开发的测试项目，使用vue-cli3快速构建，分离后台接口配置</div>
            <span class="blog-slider__code">
              <label for="mobile">用户名：</label>
              <input type="text" v-model="user.mobile" :placeholder="placeHoler.usr">
            </span>
            <span class="blog-slider__code">
              <label for="pwd">密码：</label>
              <input type="password" v-model="user.password" :placeholder="placeHoler.pwd">
            </span>
            <div class="blog-slider__button" @click="login">登录</div> 
          </div>
        </swiper-slide>
        <swiper-slide class="blog-slider__item swiper-slide">
          <div class="blog-slider__img" v-if="isActive"> <img src="img/icons/favicon-32x32.png" alt=""></div>
          <div class="blog-slider__content" v-if="isActive"> 
            <div class="blog-slider__title">{{ loginMsg }}</div>
            <div class="blog-slider__text">该项目是基于vue开发的测试项目，使用vue-cli3快速构建，分离后台接口配置</div>
            <span class="blog-slider__code">
              <label for="mobile">用户名：</label>
              <input type="text" v-model="user.mobile" :placeholder="placeHoler.usr">
            </span>
            <span class="blog-slider__code">
              <label for="pwd">密码：</label>
              <input type="password" v-model="user.password" :placeholder="placeHoler.pwd">
            </span>
            <div class="blog-slider__button" @click="login">注册</div> 
          </div>
        </swiper-slide>
    </swiper>
    <div class="blog-slider__pagination"></div>
  </div>
  </section>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { login } from '@/service/api/login'
  export default {
    name: 'carrousel',
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
      document.onmousewheel = (e) => {
        e = e || window.event
        this.mouseScroll(e)
      }
    },
    methods:{
      mouseScroll(e) {
        this.rolladd(e)
      },
      rolladd (e) {
        let delta = 0
        delta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3
        if(delta > 0 ){
          setTimeout(()=>{
            this.isShow = true
            this.isActive = false
          },500)
        }else if(delta < 0){
          setTimeout(()=>{
            this.isActive = true
            this.isShow = false
          },500)
        }
      },
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
    },
    data() {
      return {
        isShow: true,
        isActive: false,
        swiperOption: {
          spaceBetween: 30,
          effect: 'fade',
          loop: false,
          mousewheel: {
            invert: false,
          },
          fadeEffect: {
            crossFade: false,
          },
          autoHeight: true,
          pagination: {
            el: '.blog-slider__pagination',
            clickable: false,
          }
        },
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
    }
  }
</script>
