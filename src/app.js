document.addEventListener('DOMContentLoaded', (event) => {
  class Blog {
    constructor(title, detail) {
      this.title = title;
      this.detail = detail;
    }

    addTitle() {
      var title_card = document.createElement('h1');
      title_card.setAttribute("id", "blog-title");
      document.getElementById('card-text').appendChild(title_card);
      title_card.innerHTML += this.title;
    }

    addDescription() {
      var description_card = document.createElement('p');
      description_card.setAttribute("id", "blog-description");
      document.getElementById('card-text').appendChild(description_card);
      description_card.innerHTML += this.detail;
    }
  }

  function helperAddPost() {
    document.getElementById('popupContact').style.display = 'block';
  }

  function helperPost() {
    const title = document.getElementById('title').value;
    const detail = document.getElementById('detail').value;

    const blog = new Blog(title, detail);

    blog.addTitle();
    blog.addDescription();

    document.getElementById('popupContact').style.display = 'none';
  }

  document.getElementById('addPost').addEventListener('click', helperAddPost);
  document.getElementById('postBlog').addEventListener('click', helperPost);
});
