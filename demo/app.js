async function loadProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;

  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    container.innerHTML = projects
      .map(
        (project) => `
          <article class="project">
            <h3 class="project__title">${project.title}</h3>
            <p class="project__year">${project.year}</p>
            <p class="project__summary">${project.summary}</p>
          </article>
        `
      )
      .join("");
  } catch (error) {
    container.innerHTML =
      "<p>Couldn't load projects. If you opened this file directly, try the Live Preview extension in VSCode instead.</p>";
  }
}

loadProjects();