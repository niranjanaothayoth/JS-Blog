document.addEventListener('DOMContentLoaded', (event) => {
  class Blog {
    constructor(title, detail) {
      this.title = title;
      this.detail = detail;
    }

    addTitle() {
      var title_card = document.createElement('h1');
      title_card.setAttribute('id', 'blog-title');
      document.getElementById('card-text').appendChild(title_card);
      title_card.innerHTML += this.title;
    }

    addDescription() {
      var description_card = document.createElement('p');
      description_card.setAttribute('id', 'blog-description');
      document.getElementById('card-text').appendChild(description_card);
      description_card.innerHTML += this.detail;
    }
  }

  // Progression 2: Setup an event listener - add two functions

  function helperAddPost() {
    document.getElementById('popupContact').style.display = 'block';
  }

  function helperPost() {
    // Get the title and detail from the input fields
    const title = document.getElementById('title').value;
    const detail = document.getElementById('detail').value;

    // Create a new Blog object
    const blog = new Blog(title, detail);

    // Add the title and description to the blog post
    blog.addTitle();
    blog.addDescription();

    // Hide the popup frame
    document.getElementById('popupContact').style.display = 'none';
  }

  // Event listener for the "Add new Post" button
  document.getElementById('addPost').addEventListener('click', helperAddPost);

  // Event listener for the "Submit" button
  document.getElementById('postBlog').addEventListener('click', helperPost);
});
