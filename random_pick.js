const comments = [];
$("div[data-sigil=comment-body]").each((i,comment_body) => comments.push($(comment_body).siblings()[0]));
comments.sort( function() { return 0.5 - Math.random() } );
const selected_users = comments.slice(0, 10);
selected_users.forEach((selected_user) => window.open("https://www.facebook.com" + $(selected_user).find("a").attr("href"), "_blank")
);
