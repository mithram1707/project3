const posts = [
  {
    title: "Getting Started with HTML & CSS",
    content: "This post explains the basics of HTML and CSS for beginners."
  },
  {
    title: "Understanding JavaScript Events",
    content: "Learn how event listeners work and how to handle user interactions."
  },
  {
    title: "Tips for Better UI/UX Design",
    content: "Good design is essential for user satisfaction. Here are some tips!"
  },
  {
    title: "Building Responsive Layouts",
    content: "Make your websites look great on all devices using responsive design."
  }
];

// Function to display blog posts
function renderPosts(filter = "") {
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase()) ||
    post.content.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    blogContainer.innerHTML = "<p>No posts found.</p>";
    return;
  }

  filteredPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.className = "blog-post";
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    blogContainer.appendChild(postElement);
  });
}

// Initialize blog
renderPosts();

// Add search functionality
document.getElementById("searchInput").addEventListener("input", function () {
  renderPosts(this.value);
});
