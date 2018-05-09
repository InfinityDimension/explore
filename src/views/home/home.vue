<template>
  <div class="home">
    <div class="banner">
      <img src="/static/img/logo.png" alt="" class="logo">
      <p>{{ $t("home.banner") }}</p>
      <div class="imgbg"></div>
    </div>
    <div class="container data">
      <ul>
        <li>
          <img src="/static/img/icon_height.png" alt="">
          <div>
            <h5>{{ $t("home.data.height") }}</h5>
            <p>4321421</p>
          </div>
        </li>
        <li>
          <img src="/static/img/icon_supply.png" alt="">
          <div>
            <h5>{{ $t("home.data.supply") }}</h5>
            <p>4321421</p>
          </div>
        </li>
        <li>
          <img src="/static/img/icon_users.png" alt="">
          <div>
            <h5>{{ $t("home.data.users") }}</h5>
            <p>4321421</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {

    }
  },
  methods: {

  },
  components:{

  }
}
</script>

<style scoped>

</style>
