<template>
  <div class="login-container">
    <p class="login-logo"><img src="./../images/login/logo.png" alt="logo"></p>
    <div class="login-form">
      <div class="common-input">
        <label></label>
        <input type="text" class="login-name" maxlength="20" placeholder="账号"
               @input="login.userName=login.userName.replace(/[^\w]/g,'')"
               v-model="login.userName">
      </div>
      <div class="common-input">
        <label></label>
        <input type="password" class="login-password" maxlength="30" placeholder="密码"
               v-model="login.userPassword"
               oninput="this.value=this.value.replace(/[^\w]/g,'')">
      </div>
      <div class="login-btn">
        <button class="login-ok">登录</button>
        <button class="login-unuser">游客进入</button>
      </div>
      <p class="login-tips">
        <router-link to="/user/findpassword">
          <span class="login-find">找回密码</span>
        </router-link>
        <router-link to="/user/register">
          <span class="login-register txt-fr">快速注册</span>
        </router-link>

      </p>
      <count-list :count-list="countListData"
                  :count-list-show="showFlag"
                  @tapShow="showCounts"
                  @tapHide="showCounts"
                  @changeUser="changeUserName"
                  @removeUser="removeUserName"></count-list>
    </div>
    <div class="login-other">
      <p class="login-other-title"></p>
      <p class="login-other-type">
        <span></span><span></span><span></span>
      </p>
    </div>
  </div>
</template>

<script>
    import countList from './../components/CountList.vue'
    export default {
      data () {
        return {
          logo:'./../images/login/logo.png',
          login:{
            userName:'',
            userPassword:''
          },
          countListData:[
            {userName:'15306130600'},
            {userName:'zhuchengwang'},
            {userName:'15306130600'},
            {userName:'187wef987'},
            {userName:'15305099876'},
            {userName:'zhaokai'},
            {userName:'daqiqi'},
            {userName:'huluwa'},
            {userName:'hezehua'}
          ],
          showFlag:false,
        }
      },
      components: {
        countList
      },
      methods:{
        showCounts(){
          this.showFlag=!this.showFlag;
        },
        changeUserName(data){
          this.login.userName=data[0];
          this.showFlag=!this.showFlag;
        },
        removeUserName(data){
          this.countListData.splice(data[0],1);
        }
      }
    }
</script>
