<script>
  let open = false;
</script>

<div class="{open == false ? 'w-[170px]' : 'w-1/4'} bg-[#1c1c35] text-white z-0">
  <div>
    <img
      class="w-32 mx-auto my-2"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kingdom_of_Castile_Arms.svg/798px-Kingdom_of_Castile_Arms.svg.png"
      alt=""
      srcset=""
    />
  </div>
  <div class="my-4  text-xl">
    <div
      class="m-2 shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#404055] hover:drop-shadow-md {open == false ? "mx-auto w-12" : ""}  {open == false ? "mx-auto" : ""}"
    >
      <li class="fa fa-home p-2" />
      {#if open == true}
      Homepage
      {/if}
    </div>
    <div
      class="m-2 shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#404055] hover:drop-shadow-md {open == false ? "mx-auto w-12" : ""}  {open == false ? "mx-auto" : ""}"
    >
      <li class="fa fa-store p-2" />
      {#if open == true}

      Store
      {/if}

    </div>
    <div
      class="m-2 shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#404055] hover:drop-shadow-md {open == false ? "mx-auto w-12" : ""}  {open == false ? "mx-auto" : ""}"
    >
      <li class="fa fa-users p-2" />
      {#if open == true}
      Users
      {/if}

    </div>
  </div>
  <div class="absolute flex gap-1 bottom-5 text-center text-xl">
    <div
      class="m-2 shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#404055] hover:drop-shadow-md w-12 mx-auto"
    >
      <li class="fa fa-gears p-2" />
    </div>
    <div
      class="m-2 shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#404055] hover:drop-shadow-md w-12 mx-auto"
    >
      <li class="fa fa-info p-2" />
    </div>
    <div
      class="m-2 shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#404055] hover:drop-shadow-md w-12 mx-auto"
    >
      {#if open == false}
        <li class="fa fa-circle-right p-2" on:click={() => (open = !open)} />
      {:else}
        <li class="fa fa-circle-left p-2" on:click={() => (open = !open)} />
      {/if}
    </div>
  </div>
</div>
