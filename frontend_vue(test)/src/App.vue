<template>
  <div id="app">
    <div class='all'>
      
      <side-bar style="position: fixed;" name='bar1'></side-bar>
      <div class='hiddensidebar'></div>
      <div id='rightside'>
        <in-put></in-put>
        <result></result>
      </div>
    </div>
    
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import SideBar from './components/sidebar/SideBar' 
  import InPut from './components/input/InPut'
  import Result from './components/result/Result'

  export default {
    name: 'App',
    components: {
      SideBar,
      InPut,
      Result
    }
  }
</script>

<style>
/*  */
.all {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
}

#rightside {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  order: 1;
}

.hiddensidebar {
  visibility: hidden;
  order: 0;
  height: 790px;
  width: 260px;
  z-index: -10;
  transition: all 0.5s ease;
}

.hiddensidebar.close{
  width: 78px;
}
</style>
