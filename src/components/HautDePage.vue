<template>
<div>
  <header>
    <nav class="min-h-14 flex justify-center items-center py-12 bg-black">
      <ul class="flex justify-between items-center gap-16 mr-14">
        <li class="list-none">
          <router-link to="/accueil" class="bg-white py-4 px-4 rounded outline outline-offset-2 outline-indigo-600 transition ease-in-out duration-300 hover:bg-black hover:text-white hover:outline-indigo-400">Accueil</router-link>
        </li>
        <li class="list-none">
          <router-link to="/contact" class="bg-white py-4 px-4 rounded outline outline-offset-2 outline-fuchsia-600 transition ease-in-out duration-300 hover:bg-black hover:text-white hover:outline-fuchsia-400">Contact</router-link>
        </li>
        <li class="list-none">
          <router-link to="#" class="bg-white py-4 px-4 rounded outline outline-offset-2 outline-emerald-600 transition ease-in-out duration-300 hover:bg-black hover:text-white hover:outline-emerald-400">Horaire</router-link>
        </li>
      </ul>
    </nav>
  </header>
</div>
</template>
