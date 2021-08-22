<template>
    <div id='InPutBox'>
        <div class="row">
            <div class="col-lg-6">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Run model">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">Run</button>
                </span>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
    name: 'InPutBox'
}
</script>

<style scoped>
#InPutBox {
  order: 1;
}
</style>
  