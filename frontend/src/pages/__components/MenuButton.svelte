<script>
  export let open;
</script>

<div class="mx-auto text-center sm:hidden flex justify-center w-full">
  <button on:click class="text-center p-2  ">
    {#if open === true}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-up-circle"
        ><circle cx="12" cy="12" r="10" /><polyline
          points="16 12 12 8 8 12"
        /><line x1="12" y1="16" x2="12" y2="8" /></svg
      >
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-down-circle"
        ><circle cx="12" cy="12" r="10" /><polyline
          points="8 12 12 16 16 12"
        /><line x1="12" y1="8" x2="12" y2="16" /></svg
      >
    {/if}
  </button>
</div>
