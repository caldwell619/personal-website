<template lang="pug">
.about
  .container
    #about-me.about-intro
      h3 Just like every other developer, I know the basics well.
      br Click something shiny below to see why I'm different
    .row.language-card-container
      #react-card.col.span-1-of-2.lang-body
        h5.name-header.react-dropdown React
        #react-container.logo-container.react-dropdown
          img#react-img(src='images/react.png' alt='react-js')
      #java-card.col.span-1-of-2.lang-body
        div
          h5.name-header.java-dropdown Java
          .logo-container
            img.language-logo(src='images/java.gif' alt='java')
        .language-text.java-text
          p I wish I knew anything about Java
          ul
            li Such emptiness
    .row
      #react-text.language-text.react-text
        h4 Lots of moving parts and changes coming together to create quick, minimal load time application
        p The future has arrived. If you need a simple or complex User Interface, let me at it
        ul
          li Proficient with state manager #[a(href='https://redux.js.org/')] Redux
          li Careful component selection and re-usability. #[span] Translation: I reuse code to fit your needs and you #[strong] pay less.
          li Stable, bulletproof interaction. If you're expecting the shopping cart to update, it will
    .row.language-card-container
      #html-card.col.span-1-of-4.lang-body
        h5.name-header.html-dropdown HTML
        .logo-container.html-dropdown
          img#html-img.language-logo(src='images/html.png' alt='html')
      #css-card.col.span-1-of-4.lang-body
        h5.name-header.css-dropdown CSS
        .logo-container.css-dropdown
          img#css-img.language-logo(src='images/css.png' alt='css')
      #js-card.col.span-1-of-4.lang-body
        h5.name-header.js-dropdown JavaScript
        .logo-container.js-dropdown
          img#js-img.language-logo(src='images/js.png' alt='js')
    .row
      .language-text.html-text
        h4 The skeleton of any website
        p Not a lot to distinguish here, but hear me out
        ul
          li Clean, structured code
          li Planned out in advance for optimal layout
      .language-text.css-text
        h4 CSS makes things easy on the eyes. The skin of a website
        p Every site meets your needs. Custom layouts, different views for mobile, tablet, and desktop
        ul
          li Highly skilled in the hot CSS libraries, Bootstrap and Materialize
          li Passionate about the ability of all users to be able to navigate around the content you want to show. Even Grandma Josephine
          li Your vision becomes my mission
      .language-text.js-text
        h4 Most things you see moving on a website make use of Javascript to add interactivity
        p Make your site zig, zag, and everything in between
        ul
          li Dropdown menus, rotating slideshows, you name it
          li Customizable movability. You tell me what you want to happen, and it will
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

</style>