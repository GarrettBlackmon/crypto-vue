<template>
  <MobileApp v-if="isMobile()" />
  <DesktopApp v-else />
</template>

<script>
import DesktopApp from "./views/Desktop.vue";
import MobileApp from "./views/Mobile.vue";

export default {
  components: {
    DesktopApp,
    MobileApp
  },
  methods: {
    isMobile() {
        if( screen.width <= 700 ) {
            return true;
        }
        else {
            return false;
        }
    }
},
}
</script>