import Project from "./Project";

export default function Projects() {
  return (
    <section className="text-white text-center">
      <h2 className="text-4xl font-bold pb-2.5">My Projects</h2>
      <p className="font-normal text-base pb-5">
        Projects That i’ve built using those technologies
      </p>
      <Project
        project_name="Travel Website"
        project_desc="This project is a dynamic and responsive landing page created for a trekking company with Next.js and Tailwind CSS. This application, which includes dynamic user interface elements and smooth navigation, shows a new approach to web design through a comprehensive YouTube clarification. With the goal to improve user experience and conversion rates, the landing page highlights key features of the hiking services, such as vivid graphics, interesting content sections, and call-to-action buttons."
        project_stack={["/nextjs-logo.svg", "/tailwind-logo.svg"]}
        project_year="2023"
        project_img="/hiking-img.png"
        project_github_link="https://github.com/PedroReves/travel-website"
        project_live_demo="https://travel-website-pedroreves.vercel.app/"
      />
      <Project
        project_name="Single-Price Grid"
        project_desc="This project, created as a FrontEnd Mentor challenge, shows off HTML and CSS grid manipulation skills. The website is an excellent case of the efficient integration of fundamental tools to develop attractive and useful interfaces, with a focus on responsive design and artistic elegance."
        project_stack={["/html-logo.svg", "/css-logo.svg"]}
        project_year="2024"
        project_img="/singleprice-img.png"
        project_github_link="https://github.com/PedroReves/SinglePrice-Grid"
        project_live_demo="https://pedroreves.github.io/SinglePrice-Grid/"
      />
      <Project
        project_name="GymPass API"
        project_desc="This programming project required the development of a backend API with an interface like to Gympass for checking people in and setting up gyms. TypeScript and Node.js were utilized for the integration of controllers, database management, and JWT authentication. The project demonstrated sound backend development methods for secure and efficient data administration."
        project_stack={["/typescript-logo.svg", "nodejs-logo.svg"]}
        project_year="2023"
        project_img="/no-image.jpg"
        project_github_link="https://github.com/PedroReves/03-Api-Solid"
        project_live_demo=""
      />
      <Project
        project_name="BaDev"
        project_desc="The goal of this programming project is to write a Rust script that will simplify the configuration of developers' environments while taking cross-platform compatibility and project design into consideration. By utilizing Rust's features, the script emphasizes effective and user-friendly design concepts and guarantees configuration consistency across various operating systems. "
        project_stack={[
          "/rust-logo.svg",
          "/nextjs-logo.svg",
          "/tailwind-logo.svg",
        ]}
        project_year="2024"
        project_img="/no-image.jpg"
        project_github_link="https://github.com/PedroReves/BaDev"
        project_live_demo="https://github.com/PedroReves/LandingPage-BaDev"
      />
    </section>
  );
}
