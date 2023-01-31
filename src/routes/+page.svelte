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

<section id="top">
  <Nav />
  <div class="top">
    <Menu />
  </div>
  <p class="itirann">記事一覧</p>
  <div class="h-screen">
    <ul>
    {#each data.items as item}
      <li class="title">
        <a href="{item._id}">{item.title}</a>
      </li>
    {/each}
    <div class="h-16">
      <!--画面下部でタイトル一覧がフッターと被るので解消方法がよくわからなかったので被る部分と同じ高さの空白を用意して解消-->
    </div>
    </ul>
    <Footer />
  </div>
</section>