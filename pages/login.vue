<!-- pages/login.vue -->
<script setup>
const { login } = useAuth();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = async () => {
  const success = await login(email.value, password.value);
  if (success) navigateTo("/dashboard");
  else error.value = "Invalid credentials";
};
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
