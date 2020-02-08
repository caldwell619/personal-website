<template lang="pug">
  #projects.projects
    .container
      .row.project-header-container
        h3.project-header See for yourself what I can bring to your project
      .row.project-display-container
        .card.span-1-of-4
          .card-body
            h5.card-title Star Wars: Armada Deck Builder
            p.card-text MERN Stack web application for building and saving fleets.
            .img-cont
              img.card-img-top(:src="require('@/assets/images/armada-screen.png')" alt='preview')
          .card-body.card-links
            a.card-link(href='https://muster-the-fleet.herokuapp.com/' target='_blank') Hosted
            a.card-link(href='https://github.com/caldwell619/armada-builder-react' target='_blank') Github
        .card.span-1-of-4
          .card-body
            h5.card-title Neal Hollimon Photography
            p.card-text
              | Fine art portfolio commerce site for an award winning photographer based in
              | Louisiana
            .img-cont
              img.card-img-top(:src="require('@/assets/images/photo-screen.png')" alt='preview')
          .card-body.card-links
            a.card-link(href='https://github.com/caldwell619/neal-hollimon-photography') Github
        .card.span-1-of-4
          .card-body
            h5.card-title Buy, Sell, Bye
            p.card-text An ad listing site for finding the next treasure you didn&apos;t know you needed.
            .img-cont
              // <img class="card-img-top" src="" alt="preview">
              p Coming Soon!
          .card-body.card-links
            // <a href="#" class="card-link">Hosted - Coming Soon!</a>
            a.card-link(href='https://github.com/adlistero/adlistero' target='_blank') Github

</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style>

</style>