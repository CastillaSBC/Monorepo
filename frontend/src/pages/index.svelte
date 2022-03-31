<script>
  import { metatags } from "@roxi/routify";
  import { settings } from "./__setting.js";

  metatags.title = `${settings.name} - Homepage`;
  metatags.description = `Homepage of ${settings.name}!`;
</script>

<div class="container mx-auto xl:w-2/4 drop-shadow-md">
  <div class="m-2 rounded shadow">
    <h1 class="text-xl rounded text-white bg-blue-600 p-2">Lambda, Powerful connections.</h1>
    <p class="text-lg p-2">{settings.name} is an Open Source powered platform that empowers a community. Join now!</p>
  </div>
  <div class="m-2 rounded shadow-lg">
    <h1 class="text-lg rounded text-white bg-blue-600 p-2">What's so cool about {settings.name}?</h1>
    <div class="sm:grid grid-cols-3 p-4">
      <div class="p-5 mx-auto text-center m-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto feather feather-package" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>

        <div class="text-lg">Close to you</div>
        <div class="text-left">{settings.name} was created specifically to be close to it's users and not profits.
        </div>
      </div>

      <div class="p-5 mx-auto text-center m-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="64"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather mx-auto mx-auto feather-globe">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>

        <div class="text-lg">Feature Rich</div>
        <div class="text-left">{settings.name} has hundreds of features so you always can have something to do!</div>
      </div>

      <div class="p-5 mx-auto text-center m-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather mx-auto mx-auto mx-auto feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <div class="text-lg">Secure</div>
        <div class="text-left">{settings.name} built by the Open Source community with the highest commitment to security.</div>
      </div>
    </div>
  </div>
  <div class="text-center text-lg">What are you waiting for? Sign up or log in now!</div>
  <div class="flex gap-1 mx-auto text-center text-white font-bold">
    <div class="text-center p-1 mx-auto rounded bg-blue-600 w-full">Login</div>
    <div class="text-center p-1 mx-auto rounded w-full bg-blue-600">Sign Up</div>
  </div>
</div>