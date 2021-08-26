<template>
    <div id='InPut'>
        <main-button></main-button>
        <div class="blankarea"></div>
        <in-put-box></in-put-box>
    </div>
</template>

<script>
import InPutBox from './inputbox/InPutBox'
import MainButton from './mainbutton/MainButton'

export default {
    name: 'InPut',
    components: {
        MainButton,
        InPutBox
    }
}
</script>

<style scoped>
#InPut {
    order: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.blankarea {
  order: 0;
  /* position: fixed; */
  visibility: hidden;
  height: 120px;
}
</style>
  