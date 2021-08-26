<template>
    <div id='SideBarListItem'>
        <slot name='linker'></slot>
        <slot name='childlist'></slot>
    </div>
</template>

<script>
export default {
    name: 'SideBarListItem',
}
</script>

<style scoped>
  i{
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>