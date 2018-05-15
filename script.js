"use strict";
$(document).ready(() => {
    $.get('https://www.reddit.com/r/aww/.json', (data) => {
        for(let i=0; i <10; i++) {
            let title = data.data.children[i].data.title;
            let img = data.data.children[i].data.thumbnail;
            let link = data.data.children[i].data.permalink;
            let url = "https://reddit.com" + link;

            $("body").append(`
            <div class="info">
            <h3>${title}</h3>
            <img src="${img}">
            <a href="${url}">Click for cuteness!</a>
            </div>
            `)
        }
    });
});


