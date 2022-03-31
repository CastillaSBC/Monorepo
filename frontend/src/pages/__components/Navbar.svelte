<script>
	import { fade } from 'svelte/transition'
  import { settings } from './../__setting.js'
  let dropdownExpanded = false
</script>

<div class="h-20 p-4 items-center text-white font-bold rounded-b-lg bg-blue-600 drop-shadow-xl sm:flex justify-between">
  <div class="text-4xl text-center sm:text-left"><span class="font-serif">&Lambda;</span> {settings.name}</div>
  <div class="flex gap-2 justify-center">
    <div class="mx-auto cursor-pointer hover:underline"><a href="/">Homepage</a> </div>
    <div class="mx-auto cursor-pointer hover:underline"><a href="/forums">Forums</a></div>
    <div class="mx-auto cursor-pointer hover:underline"><a href="/users">Users</a></div>
    <div class="mx-auto cursor-pointer hover:underline"><a href="/shop">Shop</a></div>
    <div class="mx-auto cursor-pointer hover:underline"><a href="/drops">Drops</a></div>
    <div class="relative inline-block text-left">
      <div>
        <div class="mx-auto cursor-pointer hover:underline" on:click={() => dropdownExpanded = !dropdownExpanded}>More</div>
      </div>
      {#if dropdownExpanded}
      <div transition:fade class="origin-top-right bg-white absolute right-0 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          <!-- Make a link similar to the ones underneath-->
          <div class="px-4 py-2 block text-gray-500 border-b-2 border-gray-500">Account</div>
          <a href="/settings/account" class="text-blue-500 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
          <div class="px-4 py-2 block text-gray-500 border-b-2 border-gray-500">Privacy and TOS</div>
          <a href="/privacy" class="hover:bg-gray-100 text-blue-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Privacy Policy</a>
          <a href="/tos" class="text-blue-500 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Terms of Service</a>
          <a href="/contributors" class="text-blue-500 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Contributors</a>
          <a href="https://github.com/Anomia-s" class="text-blue-500 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Source Code</a>
          <div class="px-4 py-2 block text-gray-500 border-b-2 border-gray-500">Economy</div>
          <a href="/indexing" class="text-blue-500 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Public Indexing</a>
          <a href="#" class="text-blue-500 block px-4 py-2 text-sm border-t-2 border-blue-500" role="menuitem" tabindex="-1" id="menu-item-0">Sign Out</a>

        </div>
      </div>
      {/if}
    </div>
  </div>
</div>
