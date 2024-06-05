export default function About(props) {
  return (
    <div className="container p-3">
      <h1 className="my-3">About Us</h1>

      <div
        className="accordion"
        data-bs-theme={props.mode}
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>About the App:</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <h3>Text Formatter: A Versatile Tool for Your Text Needs</h3>
              <p>
                This user-friendly web application is designed to be your
                one-stop shop for all your text formatting needs. Built with
                React.js, it offers a smooth and responsive experience across
                different devices. Whether you're on your desktop, tablet, or
                phone, you can easily manipulate your text with powerful
                features.
              </p>

              <h3>Key Features:</h3>
              <ul>
                <li>
                  Effortless Case Conversion: Quickly convert your text to all
                  uppercase or lowercase with a single click. No more manually
                  typing each letter!
                </li>
                <li>
                  Dollarise Your Text: Need to add a dollar sign ($) in front of
                  every line or paragraph? This app takes care of it for you,
                  making it perfect for formatting financial documents or price
                  lists.
                </li>
                <li>
                  Copy to Clipboard with Ease: Once you've formatted your text
                  to perfection, simply copy it to your clipboard with a click.
                  No need to go through the hassle of selecting and copying
                  manually.
                </li>
                <li>
                  Real-Time Preview: See the changes you make reflected
                  instantly in the preview window. This ensures you get the
                  desired outcome before copying or pasting the formatted text.
                </li>
                <li>
                  Light and Dark Theme: Choose between a classic light theme or
                  a sleek dark theme to suit your preferences and viewing
                  environment.
                </li>
              </ul>

              <h3>Beyond Basic Formatting:</h3>
              <p>
                While the core functionality focuses on case conversion,
                dollarization, and copy-paste convenience, the preview window
                holds potential for further features. Imagine highlighting
                specific words or phrases for further formatting options, like
                bold or italic. The application could also offer character
                counting for tasks where text length is crucial.
              </p>

              <p>
                Overall, this Text Formatter application empowers you to
                streamline your text manipulation tasks, saving time and effort.
                Its intuitive interface and responsive design make it a valuable
                tool for anyone who works with text regularly.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>React Js:</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <h2>React.js: Building Dynamic User Interfaces</h2>

              <p>
                React.js is a powerful JavaScript library for building dynamic
                user interfaces. It empowers developers to create <strong>reusable
                components</strong>, which act like building blocks for your web page.
                This <strong>component-based approach</strong> promotes clean and
                maintainable code, making it easier to manage and update complex
                applications.
              </p>

              <p>
                React also utilizes a concept called the virtual DOM. This
                virtual representation of the real DOM allows React to
                efficiently identify changes and update only the necessary parts
                of the webpage. This leads to a <strong>smooth and responsive user
                experience</strong>, ensuring your web application feels fast and
                interactive.
              </p>

              <p>
                Furthermore, React offers unique features that enhance
                development:
                <ul>
                  <li>
                    <strong>JSX (JavaScript XML):</strong> A syntax extension
                    that allows you to write HTML-like structures within your
                    JavaScript code, improving readability and maintainability.
                  </li>
                  <li>
                    <strong>Unidirectional Data Flow:</strong> React enforces a
                    predictable data flow pattern, making it easier to reason
                    about how data changes and affects the application state.
                  </li>
                </ul>
              </p>

              <p>
                These powerful features, combined with a vast ecosystem of tools
                and libraries, make React a popular choice for building modern
                web applications. Its focus on reusability, performance, and
                developer experience has solidified its position as a leading
                framework for interactive UIs.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>About the Developer:</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <h2>About the Developer</h2>
              <p>
                I am Shivamrut G, a motivated and skilled BTech CSE student with
                a passion for software development.
              </p>

              <div class="contact-info">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <a href="mailto:incineroaraditya@gmail.com">
                      incineroaraditya@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918310454296">+91 8310454296</a>
                  </li>
                </ul>
              </div>
              <div class="education">
                <h3>Education</h3>
                <ul>
                  <li>
                    <strong>University:</strong> Visvesvaraya College of
                    Engineering
                  </li>
                  <li>
                    <strong>Degree:</strong> Bachelor of Technology in Computer
                    Science Engineering
                  </li>
                  <li>
                    <strong>CGPA:</strong> 9.15 (as of 2024)
                  </li>
                </ul>
              </div>
              <div class="projects">
                <h3>Projects</h3>
                <ul>
                  <li>
                    <strong>
                      Shadow Dance Academy Website (Node.js, Express.js)
                    </strong>
                    <br />A dynamic dance academy website with user
                    login/registration, complaint requests, and more.
                  </li>
                  <li>
                    <strong>
                      Harvest-Hive (Node.js, Express.js, EJS) (Hackathon
                      Project)
                    </strong>
                    <br />
                    Web platform to assist farmers in crop selection based on
                    land characteristics.
                  </li>
                  <li>
                    <strong>
                      College Event Management App (Android Studio, Kotlin,
                      Jetpack Compose) (Hackathon Project)
                    </strong>
                    <br />
                    Facilitates student team formation and communication for
                    college events. Implemented login, signup, and data storage
                    using Room database.
                  </li>
                  <li>
                    <strong>Task Manager (JavaFX, SceneBuilder)</strong>
                    <br />
                    User-friendly application for adding, editing, deleting, and
                    viewing tasks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
