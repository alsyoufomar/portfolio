import exactfitmockup from './assets/Group 38-min.png'
import exactfitfullpage from './assets/exactfit-fullpage-min.png'
import renuuMockup from './assets/renuu-mockup-min.png'
import renuuFullpage from './assets/renuu-fullpage.png'
import blogfullhomepage from './assets/alifullhome.png'
import blogfullblogpage from './assets/alifullblog.png'
import scrapper1 from './assets/scrapper1-min.jpg'
import scrapper2 from './assets/scrapper2-min.jpg'
import scrapper3 from './assets/scrapper3-min.jpg'
import scrapper4 from './assets/scrapper4-min.jpg'

export type Project = {
  name: string
  skills: string
  url: string
  description: string
}

export const projects: Project[] = [
  {
    name: 'Exact Fit',
    skills: 'Webflow / Figma / Zapier',
    url: 'https://www.exactfitwardrobes.com/',
    description: `
    <h2>Exact Fit</h2>
    <article>
    <h3>Business Overview</h3>
    <p>
      <strong>ExactFit</strong> is a London-based company specializing in the design,
      construction, and fitting of bespoke wardrobes. With a focus on delivering
      tailored solutions, they have successfully served over 300 clients,
      transforming living spaces with their craftsmanship.
    </p>
  </article>

  

  <!-- Task and Solution -->
  <article>
    <h3>Task and Solution</h3>

    <!-- Design Phase -->
    <section>
      <h4>Design Phase</h4>
      <p>
        In the design phase, ExactFit begins with a wireframe, outlining the main layout and 
        structure of the website. Clients are actively involved, providing input through 
        a moodboard that showcases design styles. The chosen color palette reflects neutrality, 
        sophistication, and modernity with #3c4145 as the primary color, #ff8718 as the accent,
        and #ffffff as the secondary. Fonts, Mulish and Lato, add a minimalist touch, aligning
        with the overall design ethos.
      </p>
    </section>

    <!-- Development Phase -->
    <section>
      <h4>Development Phase</h4>
      <p>
        The website, developed using Webflow, ensures a responsive experience across all devices.
        The user journey encompasses exploring wardrobe ranges, contacting the company through a 
        form, and even booking a free design visit. The design is intentionally minimalist and
        modern, catering to the target audience's preferences. The user is greeted by a clear 
        hero section, providing quick answers to essential questions. Contact options are diverse,
        including an efficient email automation system using Zapier.
      </p>
    </section>

    <!-- Features and Functionality -->
    <section>
      <h4>Features and Functionality</h4>
      <p>
        Users can seamlessly navigate through the website, gaining insights into the company's
        services, products, and processes. The incorporation of Zapier ensures an automated 
        and personalized confirmation email, guiding users through the next steps.
        The booking system for a free design visit adds a practical touch, offering
        users flexibility in choosing suitable time slots.
      </p>
    </section>
  </article>
  <div class="img-wrapper">
  <img src="${exactfitmockup}" alt="mockup" />
  </div>

  <!-- Styling and Developing -->
  <article>
    <h3>Styling and Developing</h3>

    <!-- Color Palette -->
    <section>
      <h4>Color Palette</h4>
      <p>
        The chosen color palette of #3c4145, #ff8718, and #ffffff aligns with
        the business's identity. Neutrality and sophistication (primary color)
        coupled with warmth and energy (accent color) evoke a sense of trust and
        enthusiasm. The minimalist approach avoids unnecessary details,
        ensuring a clean and modern design.
      </p>
    </section>

    <!-- Fonts -->
    <section>
      <h4>Fonts</h4>
      <p>
        The use of Mulish for headings and Lato for the body maintains a
        balance between a sleek sans-serif look and a feeling of warmth. Both
        fonts contribute to a modern and friendly aesthetic, enhancing the
        overall user experience.
      </p>
    </section>

    <!-- Responsive Design -->
    <section>
      <h4>Responsive Design</h4>
      <p>
        The website's responsiveness ensures a consistent and enjoyable
        experience across various devices, accommodating the diverse
        preferences of the target audience.
      </p>
    </section>

    <!-- User Interaction -->
    <section>
      <h4>User Interaction</h4>
      <p>
        User interaction is a priority, with the hero section providing immediate clarity.
        The booking system, contact forms, and email automation streamline user engagement,
        reflecting a user-centric approach.
      </p>
    </section>

    <!-- Business Relevance -->
    <section>
      <h4>Business Relevance</h4>
      <p>
        The design and functionality of the website directly align with
        <em>ExactFit</em>'s business objectives. It effectively showcases their
        expertise, engages users, and simplifies processes like booking a design
        visit – ultimately contributing to a seamless and impactful online
        presence for the company.
      </p>
    </section>
  </article>
  <div class="img-wrapper">
  <img src="${exactfitfullpage}" alt="fullpage" />
  </div>
`,
  },
  {
    name: 'Renuu',
    skills:
      'NextJS / TypeScript / Tailwind / AI / Defer / PrismaJS / PostgreSQL',
    url: 'https://renuu.org/',
    description: `
    <h2>Renuu</h2>
    <article>
      <h3>Business Overview</h3>
      <p>
        <strong>Renuu</strong> is a platform dedicated to sustainability education,
        specifically focusing on sustainability consulting. The company adopts the
        MVP (Minimum Viable Product) methodology for its website, providing a
        foundational slice of the application with plans to incorporate
        more features in the future.
      </p>
    </article>

    <article>
      <h3>Task and Solution</h3>
      <p>
        The primary objective for Renuu was to create a user-friendly, secure, and feature-rich platform that facilitates
        sustainable learning and career transition. The client sought a website with fast loading times, easy navigation,
        and a well-structured design. While the design phase was executed by another designer, my contribution included
        making the website responsive to provide an optimal viewing experience across various devices. The task was to
        provide a secure and efficient learning environment that supports users in their journey towards sustainability.
        </br>
        </br>
        In response to this challenge, a robust solution was crafted, focusing on the implementation of a seamless user
        experience. The website boasts features such as user registration with email confirmation to prevent unauthorized
        access, a dynamic climate quiz powered by AI for engaging content, and an admin dashboard for efficient management
        of activities, courses, and users. Additionally, subscribers benefit from regular newsletters and updates,
        enhancing their overall engagement with the Renuu community.
        </br>
        </br>
        The tech stack chosen for Renuu reflects a commitment to modern development practices, utilizing Next.js for both
        frontend and backend to ensure a responsive and performant application. Tailwind CSS is employed for styling,
        providing a sleek and consistent visual experience. The use of PostgreSQL as the database and Prisma as the ORM
        contributes to the website's stability and data integrity.
      </p>
    </article>

    <div class="img-wrapper">
      <img src="${renuuMockup}" alt="mockup" />
    </div>

    <article>
      <h3>Main Features and Business Relevance</h3>
      <section>
        <h4>User Experience</h4>
        <p>
          Users can delve into sustainability courses and activities, fostering a comprehensive learning environment.
          Registration and account creation offer a personalized experience, with email confirmation enhancing security
          measures.
          The climate quiz, powered by AI, adds an interactive element, providing users with personalized insights into
          their environmental awareness.
        </p>
      </section>

      <section>
        <h4>Admin Capabilities</h4>
        <p>
          Authenticated administrators benefit from a dashboard enabling the creation,
          updating, and deletion of activities, courses, and user profiles.
          This feature streamlines content management and ensures the platform
          remains dynamic and up-to-date.
        </p>
      </section>

      <section>
        <h4>Email Updates</h4>
        <p>
          Subscribers receive newsletters and updates, establishing a direct
          communication channel with the Renuu community. This feature fosters
          ongoing engagement and helps users stay informed about the latest
          developments within the platform.
        </p>
      </section>

      <p>
        Moreover, the responsive design ensures that Renuu is accessible on any device, highlighting the adaptability and
        user-centric approach that enriches the overall user experience. This emphasis on responsiveness aligns seamlessly
        with the client's vision, ensuring that the platform remains easily accessible and functional across a diverse
        range of devices.
      </p>
    </article>

    <div class="img-wrapper">
      <img src="${renuuFullpage}" alt="fullpage" />
    </div>`,
  },
  {
    name: 'Blog Website',
    skills:
      'Strapi / MUI / ReactJS / NodeJS / PostgreSQL / Cloudinary / Brevo / useReducer',
    url: 'https://alialsyoufchemist.com/',
    description: `
    <h2>Personal Blog</h2>
    <article>
      <h3>About the Blog Website</h3>
      <p>
        It is a meticulously crafted platform dedicated to disseminating insights, articles, and research about the
        fascinating world of chemistry. With a commitment to delivering a seamless user experience, the blog
        combines minimalist and modern design elements to create an academic-style ambiance, ensuring readers can
        delve into the depths of chemistry effortlessly.
      </p>
      <p class='em'>
      <em>
        NOTE: Kindly be aware that the server operates on a free plan, as per the client's request.
        Consequently, the server enters a sleep state if not in use for 15 minutes, 
        with a one-minute wake-up duration. Your patience during this process is greatly appreciated.
      </em></p>
    </article>


    <article>
      <h3>Task and Solution</h3>
      <p>
        The objective was to establish a personal blog website tailored for a chemist, designed in a minimalist and
        academic style to showcase my client's research to readers and encourage subscriptions for new updates.
        </br>
        </br>
        Through a thorough analysis of the target audience and readership metrics, a minimalist style was developed,
        devoid of unnecessary details, ensuring optimal comfort for the readers.
        </br>
        </br>
        The selected color palette, comprising #031c21, #146b78, and #f0faf7, aligns seamlessly with the academic
        style, crafting a visually appealing and scholarly aesthetic. The fonts Poppins and Lato were specifically
        chosen for headings and body text, respectively, aiming to enhance readability and maintain a cohesive
        design.
      </p>
    </article>

    <article>
      <h3>Main Features in Styling and Development</h3>
      <section>
        <h4>User Experience</h4>
        <p>
          The introduction of a dark mode enhances the reading experience, catering to the preferences of
          users and ensuring optimal visibility during extended reading sessions.
        </p>
      </section>

      <section>
        <h4>Admin Capabilities</h4>
        <p>
          Authenticated administrators benefit from a streamlined dashboard,
          allowing them to publish, update, or delete articles and pages seamlessly.
          This feature contributes to efficient content management,
          ensuring the blog remains current and relevant.
        </p>
      </section>

      <section>
        <h4>Image Hosting</h4>
        <p>
          Seamless visual experiences are facilitated through the integration of Cloudinary for image hosting, enhancing
          the overall aesthetic appeal of the articles and enriching the reader's journey.
        </p>
      </section>

      <section>
        <h4>Email Updates</h4>
        <p>
          Subscribers receive timely email updates, establishing a direct line of communication and ensuring they stay
          informed about every new blog post. This feature fosters a strong connection with the audience.
        </p>
      </section>

      <section>
        <h4>Tech Stack and Deployment</h4>
        <p>
          The modern tech stack, including React, MUI, Strapi, PostgreSQL, Cloudinary, and others, underscores the
          commitment to utilizing top-tier tools for a robust and scalable blogging platform.
          </br>
          </br>
          Continuous deployment on Netlify for the frontend, hosting on Render for the backend, and ElephantSQL for the
          database ensures reliability.
        </p>
      </section>

      <section>
        <h4>Blog Functionality</h4>
        <p>
          User authentication secures access for admin users, empowering them to manage articles seamlessly.
          Additionally, subscriptions are facilitated, allowing users to receive email updates about
          new blog posts, thereby fostering an engaged readership. Furthermore, the implementation 
          of dark mode enriches the reading experience, aligning seamlessly with the primary focus of the blog.
        </p>
      </section>

      <section>
        <h4>Responsive Design</h4>
        <p>
          The mobile-responsive UI adapts seamlessly to different screen sizes, ensuring that readers can enjoy the blog's
          content on any device. This commitment to responsiveness aligns with the blog's goal of delivering a
          user-centric and accessible platform.
        </p>
      </section>
      <p>
        In summary, Ali Alsyouf's Personal Blog successfully combines sophisticated design elements, robust development
        practices, and user-centric features to create a platform that not only shares knowledge about chemistry but also
        engages and delights its audience with a visually pleasing and academically styled experience.      
      </p>
    </article>
    <div class="img-wrapper">
      <img src="${blogfullhomepage}" alt="fullpage" />
    </div>
    </br>
    </br>
    <div class="img-wrapper">
      <img src="${blogfullblogpage}" alt="fullpage" />
    </div>
    `,
  },
  {
    name: 'Web-Scrapper',
    skills: 'JavaScript / HTML / CSS',
    url: 'https://web-scraper-game.netlify.app/',
    description: `
    <h2>Web-Scrapper</h2>
    <article>
      <h3>About the Game</h3>
      <p>
        The web scraper operates as the Minesweeper game, where your task involves scraping data from all website cells
        except those belonging to Facebook. Utilize a Left click to perform the scraping action and a Right click to
        bookmark Facebook cells, thereby avoiding interaction with them.
        </br>
        </br>
        The inspiration for this game stems from numerous attempts to extract event data from various websites during my
        graduation project. The project aimed to identify upcoming events in proximity, but encountering strict data
        scraping restrictions from Facebook prompted the creation of this unique game-like solution. Given Facebook's
        legal implications for unauthorized data scraping, the game provides an interactive and educational experience.
      </p>
      <p class='em'>
        <em>
          NOTE: Please be advised that this game is not optimized for mobile devices; therefore, it is recommended to play
          it on a laptop or a desktop computer for the best experience.
        </em>
      </p>
    </article>

    <article>
      <h3>Tech Stack and Development</h3>
      <p>
        This Single Page Application (SPA) is implemented using vanilla JS, leveraging the History API. The
        http-server-spa npm package is employed to incorporate SPA routing functionality. Unlike the typical http-server,
        this package allows seamless fallback to serving index.html if a route does not match any server resource. This
        behavior aligns with the conventional functioning of a single-page application, preventing the undesired "page not
        found" message when attempting to refresh the page.
      </p>
    </article>
    <div class="img-wrapper">
      <img src="${scrapper1}" alt="fullpage" />
    </div>
    </br>
    </br>
    <div class="img-wrapper">
      <img src="${scrapper2}" alt="fullpage" />
    </div>
    </br>
    </br>
    <div class="img-wrapper">
      <img src="${scrapper3}" alt="fullpage" />
    </div>
    </br>
    </br>
    <div class="img-wrapper">
      <img src="${scrapper4}" alt="fullpage" />
    </div>
    `,
  },
]
