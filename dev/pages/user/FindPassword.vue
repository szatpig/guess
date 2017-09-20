<template>
  <div class="forget-container">
    <div class="identify-container">
      <div class="account-form">
        <div class="common-input">
          <label>账号</label>
          <input type="text" class="account-txt" placeholder="请输入账号" oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
      </div>
      <div class="identify-btns">
        <button>账号验证</button>
      </div>
    </div>
    <div class="reset-container">
      <div class="account-form">
        <div class="common-input">
          <label>账号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" class="reset-account" readonly="readonly"  oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
        <div class="common-input">
          <label>安全手机</label>
          <input type="tel" class="reset-mobile" maxlength="11" placeholder="请输入手机号" oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
        <div class="common-input">
          <label>验证码&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="tel" class="reset-code" maxlength="6" placeholder="请输入验证码" oninput="this.value=this.value.replace(/[^\w]/g,'')">
          <button>获取验证码</button>
        </div>
        <div class="common-input">
          <label>新密码&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="password" class="reset-password" placeholder="字母+数字组合不能少于6位" maxlength="30" oninput="this.value=this.value.replace(/[^\w]/g,'')">
        </div>
      </div>
      <div class="reset-btns">
        <button>确定</button>
      </div>
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
