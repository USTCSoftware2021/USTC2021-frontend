<template>
    <div class='sidebar' >
        <side-bar-title></side-bar-title>
        <side-bar-list></side-bar-list>
    </div>
</template>

<script>
import SideBarTitle from './sidebartitle/SideBarTitle'
import SideBarList from './sidebarlist/SideBarList'

export default {
    name: 'SideBar',
    components: {
        SideBarList,
        SideBarTitle
    }
}
</script>

<style scoped>
.sidebar{
    /* position: fixed; */
    /* top: 0;
    left: 0; */
    order: 0;
    height: 790px;
    width: 260px;
    background: #11101d;
    z-index: 100;
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;
}
.sidebar.close{
  width: 78px;
}
</style>
  