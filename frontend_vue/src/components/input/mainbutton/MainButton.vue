<template>
    <div class="home-section">
        <div class="home-content">
          <i class='bx bx-menu' ></i>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'MainButton'
}
</script>

<style scoped>
.home-section{
  /* order: 0; */
  position: fixed;
  background: #E4E9F7;
  height: 50px;
  align-self: flex-start;
  /* height: 100vh; */
  /* left: 260px; */
  /* width: calc(100% - 260px); */
  transition: all 0.5s ease;
}
.home-section .home-content{
  height: 60px;
  display: flex;
  align-items: center;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text{
  color: #11101d;
  font-size: 35px;
}
.home-section .home-content .bx-menu{
  margin: 0 15px;
  cursor: pointer;
  /* position: fixed; */
  top: 0;
}
.home-section .home-content .text{
  font-size: 26px;
  font-weight: 600;
}
</style>
  