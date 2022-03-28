<!-- routify:options preload="proximity" -->
<script>
  import Navbar from "./__components/Navbar.svelte";
  import Sidebar from "./__components/Sidebar.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>
<div class="min-h-screen flex justify-center">
  <Sidebar />
  <Navbar>
    <slot />
  </Navbar>
</div>
