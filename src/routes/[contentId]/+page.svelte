<script lang="ts">
    import type { PageData } from "./$types";
    export let data:PageData;
    import Nav from "$lib/navigate.svelte";
    import Menu from "$lib/Menu.svelte";
    import Footer from "$lib/footer.svelte";
  </script>

  <svelte:head>
    <title>{data.title}</title>
    <meta name="description" content="Svelte demo app" />
  </svelte:head>

  <section id="top">
    <Nav />
    <div class="top">
      <Menu />
    </div>
    <h1>{data.title}</h1>
    {@html data.body}
    <div class="h-16">
      <!--画面下部でタイトル一覧がフッターと被るので解消方法がよくわからなかったので被る部分と同じ高さの空白を用意して解消-->
    </div>
    <Footer />
  </section>

  <style>
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  section :global(h2){
    font-size:20px;
    font-weight:bold;
    text-decoration: underline solid red 2px;
  }
  </style>