<template>
    <div id='Result' class='result'>
        <deep-tmhmm></deep-tmhmm>
        <j-pred></j-pred>
    </div>
</template>

<script>
    import DeepTmhmm from './deeptmhmm/DeepTmhmm'
    import JPred from './jpred/JPred'

    export default {
        name: 'Result',
        components: {
            DeepTmhmm,
            JPred
        }
    }
</script>

<style scoped>
.result{
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items:center;
  flex-grow: 1;
  order:1;
  margin: 50px;
}
</style>
  