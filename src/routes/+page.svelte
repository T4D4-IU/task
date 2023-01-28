<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    import Nav from "$lib/navigate.svelte";
    import Footer from "$lib/footer.svelte";
    import Menu from "$lib/Menu.svelte";
  </script>

  <svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
  </svelte:head>

  <section>
    <Nav />
    <div class="top" id="top">
      <Menu />
    </div>
    <ul>
    {#each data.items as item}
      <li>
        <a href="{item._id}">{item.title}</a>
      </li>
    {/each}
    </ul>
    <Footer />
  </section>

  <style>
  section {
    display: flex;
    flex-direction: column;
  }
  </style>