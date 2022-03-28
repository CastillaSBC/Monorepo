<script>
  import MenuItem from "./MenuItem.svelte";
  export let mobile;
</script>

{#if mobile}
<div class="text-center sm:hidden">
  <MenuItem name="Homepage" url="/" />
  <MenuItem name="Shop" url="/shop" />
  <MenuItem name="Users" url="/users" />
  <MenuItem name="Forums" url="/forums" />
  <MenuItem name="Drops" url="/drops" />
  <MenuItem name="About" url="/about" />
</div>
{:else}
<div class="text-center hidden sm:flex gap-2 justify-center items-center">
    <MenuItem name="Homepage" url="/" />
    <MenuItem name="Shop" url="/shop" />
    <MenuItem name="Users" url="/users" />
    <MenuItem name="Forums" url="/forums" />
    <MenuItem name="Drops" url="/drops" />
    <MenuItem name="About" url="/about" />
  </div>
{/if}