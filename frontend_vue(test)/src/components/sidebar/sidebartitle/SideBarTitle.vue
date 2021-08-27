<template>
  <div class="logo-details">
    <i class="bx bxl-c-plus-plus" @click="close_sidebar()"></i>
    <span class="logo_name">BioLab</span>

    <!-- <section class="home-section">
          <div class="home-content">
            <i class='bx bx-menu' ></i>
          </div>
        </section> -->
  </div>
</template>

<script>
export default {
  name: "SideBarTitle",
  methods: {
    close_sidebar: () => {
      document.querySelector(".sidebar").classList.toggle("close")
    }
  }
};
</script>

<style scoped>
.logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
.logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.logo-details .logo_name {
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
</style>
