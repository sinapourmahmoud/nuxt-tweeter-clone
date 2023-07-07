<template>
  <div class="h-screen w-full flex">
    <div class="flex-1 relative hidden sm:block h-full">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="Auth background"
      />
    </div>
    <div class="flex-1 h-full flex items-center justify-center flex-col gap-2">
      <formsAuthForm :isLogin="login" @changeStatus="changeStatus" />
      <p class="text-sm font-normal" v-if="login" @click="changeStatus">
        You have not logged in ?
        <span class="text-sky-500 cursor-pointer font-semibold">Sign up</span>
      </p>
      <p class="text-sm font-normal" v-else @click="changeStatus">
        You have already an account ?
        <span class="text-sky-500 cursor-pointer font-semibold">Login </span>
      </p>
    </div>
  </div>
</template>
<script setup>
let login = ref(true);
const changeStatus = () => {
  login.value = !login.value;
  console.log(login.value);
};
</script>
