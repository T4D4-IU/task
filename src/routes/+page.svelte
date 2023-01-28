<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    import Nav from "$lib/navigate.svelte";
    import Footer from "$lib/footer.svelte"
  </script>

  <svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
  </svelte:head>

  <section>
    <Nav />
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