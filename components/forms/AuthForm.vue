<template>
  <FormKit type="form" @submit="handleSubmit">
    <div class="flex items-center gap-4 flex-col w-[80%] max-w-md">
      <Input
        placeholder="Enter Username"
        id="username"
        type="text"
        label="Username"
        :validation="'required|string|length:5,155'"
      />

      <Input
        v-if="!isLogin"
        placeholder="Enter Name"
        id="name"
        type="text"
        label="Name"
        :validation="'required|string|length:5,155'"
      />

      <Input
        v-if="!isLogin"
        placeholder="Enter Email"
        id="email"
        type="email"
        label="Email"
        :validation="'required|email|length:5,155'"
      />

      <Input
        placeholder="Enter Password"
        id="password"
        type="password"
        label="Password"
        :validation="'required|string|length:5,155'"
      />
    </div>
  </FormKit>
</template>
<script setup>
let { login } = useAuth();
let { isLogin } = defineProps({
  isLogin: {
    type: Boolean,
  },
});

//submit
const handleSubmit = (event) => {
  if (isLogin) {
    login(event.username, event.password);
  } else {
  }
};
</script>
