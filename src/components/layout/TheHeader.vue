<template>
  <header class="bg-blue-700 p-5 shadow-lg">
    <nav class="m-auto max-w-[1280px]">
      <ul class="ml-auto flex w-fit gap-3">
        <li>
          <router-link to="/" class="text-blue-200 transition-colors duration-200 hover:text-white"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/auth"
            class="text-blue-200 transition-colors duration-200 hover:text-white"
            >Sign in</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>
