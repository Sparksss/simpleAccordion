let list = document.querySelector(".list");

function showArticle(){
  let article = document.querySelectorAll(".article");
  console.log(article);
  article.classList.remove("hide");
}

list.addEventListener("click", function(event){
  if(event.target.name === "show"){
      let panel = event.target.nextElementSibling;
      panel.classList.toggle("hide");
  }
});
