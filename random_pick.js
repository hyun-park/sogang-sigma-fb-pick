const comments = [];
const comment_bodys = $("div[data-sigil=comment-body]");
comment_bodys.each((index, comment_body)=> {
  const comment_name = $(comment_body).siblings()[0];
  comments.push(comment_name); 
});
const shuffled_comments = comments.sort( function() { return 0.5 - Math.random() } );
const selected_users = shuffled_comments.slice(0,10);
selected_users.forEach((selected_user) => window.open("https://www.facebook.com" + $(selected_user).find("a").attr("href"), "_blank"));
