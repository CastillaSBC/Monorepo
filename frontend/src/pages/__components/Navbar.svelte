<script>
  let menuOpen = false;
  import MenuButton from "./MenuButton.svelte";
  import MenuItems from "./MenuItems.svelte";
  import AccountItems from "./AccountItems.svelte";
  import { settings } from "./../__setting.js";
</script>

<div class="h-fit w-full">
  <div class="bg-[#26223d] p-1 shadow-xl w-full flex items-center justify-between">
    <div class="">
      <input type="text " placeholder="Search" class="backdrop-brightness-75 text-white outline-none px-2 py-0.5 rounded-full bg-transparent w-96" />
    </div>
    <div class="text-white p-2">
      <div><li class="fa fa-user bg-white text-gray-300 p-2 rounded-full"></li></div>
    </div>
  </div>
</div>
