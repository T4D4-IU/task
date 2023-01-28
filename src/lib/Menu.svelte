<script>
    let links = [
    { name: 'CS50-FinalProject', url: 'https://github.com/T4D4-IU/Archive-for-Portfolio'},
    { name: 'ICP-Portfolio', url: 'https://app.unchain.tech/learn/ICP-Static-Site/section-2_lesson-4' },
    { name: 'Twitter', url: 'https://mobile.twitter.com/at___iu' }
    ];
    let showMenu = false;
    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<div>
    <button on:click={toggleMenu} class="btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    </button>
    {#if showMenu}
        {#each links as links}
            <div>
                <a href={links.url} target="_blank" rel="noreferrer" class="in-btn">{links.name}</a>
            </div>
        {/each}
    {/if}
</div>