<template>
    <div class="content" style="min-height: 600px;">        
        <router-view></router-view>
    </div>
    <BaseLoading></BaseLoading>
</template>
<script >
import BaseLoading from '../base/loading/BaseLoading.vue';
export default {
  components: { BaseLoading },
    
}
</script>
