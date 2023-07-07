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
let { login, register } = useAuth();
let { isLogin } = defineProps({
  isLogin: {
    type: Boolean,
  },
});
let emit = defineEmits(["changeStatus"]);

//submit
const handleSubmit = async (event) => {
  if (isLogin) {
    console.log("salam");
    await login(event.username, event.password);
  } else {
    await $fetch("/api/register", {
      method: "POST",
      body: {
        name: event.name,
        userName: event.userName,
        password: event.password,
        email: event.email,
      },
    });
    emit("changeStatus");
  }
};
</script>
