<template>
  <div class="register-container">
    <p class="register-tabs">
      <span class="active">个性注册</span><span>手机注册</span>
    </p>
    <div class="register-form">
      <div class="register-cell register-formal active">
        <div class="common-input">
          <label>账号</label>
          <input type="text" class="register-name" placeholder="字母+数字组合不能少于6位" oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
        <div class="common-input">
          <label>密码</label>
          <input type="password" class="register-password" placeholder="字母+数字组合不能少于6位" oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
      </div>
      <div class="register-cell register-mobile">
        <div class="common-input">
          <label>&nbsp;&nbsp;&nbsp;账号</label>
          <input type="tel" class="register-name" maxlength="11" placeholder="请输入手机号码" oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
        <div class="common-input">
          <label>&nbsp;&nbsp;&nbsp;密码</label>
          <input type="password" class="register-password" placeholder="字母+数字组合不能少于6位" oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
        <div class="common-input">
          <label>验证码</label>
          <input type="password" class="register-code" maxlength="6" placeholder="请输入验证码" oninput="this.value=this.value.replace(/[^\w]/g,'')">
          <button>获取验证码</button>
        </div>
      </div>
    </div>
    <div class="register-rules">
      <input type="checkbox" class="register-chk">
      注册表示你同意 <a href="javascript;">《用户协议》</a>
    </div>
    <div class="register-btns">
      <button class="register-btn">注册</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">

</style>
