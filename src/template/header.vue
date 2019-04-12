<template>
  <div>
    <h1 class="title">英子出租房管理系统</h1>
    <a-menu theme="dark" mode="horizontal">
      <a-menu-item><router-link to="/">本月房态</router-link></a-menu-item>
      <a-menu-item><router-link to="register">租房登记</router-link></a-menu-item>
      <a-menu-item><router-link to="overdue">欠费记录</router-link></a-menu-item>
      <!-- <a-sub-menu title="子菜单">
        <a-menu-item>子菜单项</a-menu-item>
      </a-sub-menu> -->
    </a-menu>
  </div>
</template>


<style>
.title {
  font-size: 30px;
  text-align: center;
  margin: 20px;
  color: #001529;
}
</style>

