<template>
  <div :class="{ dark: darkMode }">
    <div
      class="fixed top-4 left-2 w-6 h-6 bg-red-500"
      @click="darkMode = !darkMode"
    ></div>
    <div class="dark:bg-dim-400 bg-white h-screen overflow-auto">
      <Loading v-if="loading" />
      <div
        v-else-if="user"
        class="grid py-5 grid-cols-12 max-w-7xl mx-auto px-8 md:px-5 lg:px-3 gap-10 md:gap-4 lg:gap-10"
      >
        <div class="hidden sm:block sm:col-start-1 sm:col-end-1 md:col-end-3">
          <SidebarLeft />
        </div>
        <div
          class="col-start-1 col-end-13 sm:col-start-2 md:col-start-3 md:border-x sm:col-end-10 dark:border-dim-200"
        >
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
        <div class="col-start-1 col-end-13 sm:col-start-10 sm:col-end-13">
          <SidebarRight />
        </div>
      </div>
      <Login v-else />
    </div>
  </div>
</template>
<script setup>
let darkMode = ref(false);
let { useUser, initAuth, isloading } = useAuth();
let user = useUser();
let loading = isloading();

onBeforeMount(() => {
  initAuth();
});
</script>
