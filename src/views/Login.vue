<template>
  <section class="login">
  <div class="blog-slider" ref="blogSlider" id="io">
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
      if (this.IEVersion()) {
        document.documentElement.style.display = 'none'
        alert('当前浏览器版本过低，请升级或者换其他浏览器试试！')
      }
      /**
       * pc端上下滑动
       */
      //给页面绑定滑轮滚动事件
      if (navigator.userAgent.indexOf('Firefox') >= 0 ) {
        document.getElementById('io').style.display = 'none'
        alert("暂不支持火狐浏览器查看，请换其他浏览器试试")
      }
      if (document.addEventListener) {
          document.addEventListener('DOMMouseScroll', this.scrollFunc, false)
      }
      //滚动滑轮触发scrollFunc方法  获取id是效果的作用域，指效果只在这一块区域有效，超过此区域的不分是滚动条向下滚动
      window.onmousewheel=document.onmousewheel = this.scrollFunc
      /**
       * 移动端左右滑动
       */
      this.judge()
    },
    methods:{
      scrollFunc (e) {
        e = e || window.event

        if (e.stopPropagation) e.stopPropagation()
        else e.cancelBubble = true
        if (e.preventDefault) e.preventDefault()
        else e.returnValue = false

        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件   

          if (e.wheelDelta > 0) { //当滑轮向上滚动时
            setTimeout(()=>{
              this.isShow = true
              this.isActive = false
              },500)
          }
          if (e.wheelDelta < 0) { //当滑轮向下滚动时
            setTimeout(()=>{
              this.isActive = true
              this.isShow = false
            },500)
          }

        } else if (e.detail) {  //Firefox滑轮事件
          alert("暂不支持火狐浏览器，请换其他浏览器试试")
          document.getElementById('io').style.display = 'none'
          // if (e.detail > 0) { //当滑轮向上滚动时
          //   setTimeout(()=>{
          //     this.isShow = true
          //     this.isActive = false
          //   },500)
          // } else if (e.detail < 0) { //当滑轮向下滚动时
          //   setTimeout(()=>{
          //     this.isActive = true
          //     this.isShow = false
          //   },500)
          // }

        }
      },
      judge() {
        let _this = this; // 当前this发生变化
        let el = document.getElementById('io')
        let startx
        el.addEventListener('touchstart', (e) => {  
            var touch = e.changedTouches;  
            startx = touch[0].clientX
        })
        el.addEventListener('touchend', (e) => {
            let endx
            var touch = e.changedTouches;  
            endx = touch[0].clientX
            _this.cons(startx, endx)
        })
      },
      cons (startx, endx) {
        if (startx > endx) {
          setTimeout(()=>{
            this.isActive = true
            this.isShow = false
          },500)
        } else {  
            setTimeout(()=>{
              this.isShow = true
              this.isActive = false
            },500)
        }  
      },
      IEVersion() {
        //取得浏览器的userAgent字符串
        var userAgent = navigator.userAgent;
        //判断是否IE浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"])
            if (fIEVersion < 10 ) {
                return true;
            }
        } else {
            return false;
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
