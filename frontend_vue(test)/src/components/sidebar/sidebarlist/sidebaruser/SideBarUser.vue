<template>
    <div class="profile-details">
        <div class="profile-content">
          <img src="../../../../assets/userimg/profile.jpg" alt="profile">
        </div>
        <div class="name-job">
          <div class="profile_name">zzf</div>
          <div class="job">gf</div>
        </div>
        <i class='bx bx-log-out' ></i>
      </div>
</template>

<script>
export default {
    name: 'SideBarUser'
}
</script>

<style scoped>
  .profile-details{
    z-index: 20;
    position: relative;
    top:300px;
    bottom: 0;
    width: 260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1d1b31;
    padding: 6px 0;
    transition: all 0.5s ease;
}
.close .profile-details{
  background: none;
}
.close .profile-details{
  width: 78px;
}
.profile-details .profile-content{
  display: flex;
  align-items: center;
}
.profile-details img{
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  transition: all 0.5s ease;
}
.close .profile-details img{
  padding: 10px;
}
.profile-details .profile_name,
.profile-details .job{
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.close .profile-details i,
.close .profile-details .profile_name,
.close .profile-details .job{
  display: none;
}
.profile-details .job{
  font-size: 12px;
}
</style>