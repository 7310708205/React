import "./App.css";

function App() {
  return(
  <div class="container">
    <div class="leftSide">
      <div class="profileText">
        <div class="imgBx">
          <img class="photo" src="pic.jpg" />
        </div>
        <br />
        <h2>
         BABITA NEGI <br />
          <span>Trainee Software Engineer</span>{" "}
        </h2>
      </div>

      <div class="contactInfo">
        <h3 class="title">Contact Info</h3>
        <ul>
          <li>
            <span class="text">+91 7310708205</span>
          </li>
          <li>
            <span class="text">babitan195@gmail.com</span>
          </li>
          <li>
            <span class="text">www.linkedin/babita-negi</span>
          </li>
          <li>
            <span class="text">Dehradun, India</span>
          </li>
        </ul>
      </div>
      <div class="contactInfo education">
        <h3 class="title">Education</h3>
        <ul>
          <li>
            <h5>2018 - 2022</h5>
            <h4>B.Tech in ECE</h4>
            <h4>NIT, Uttarakhand</h4>
          </li>
          <li>
            <h5>2016 - 2017</h5>
            <h4>Intermediate </h4>
            <h4>S.G.R.R.Public School</h4>
          </li>
        </ul>
      </div>
      <div class="contactInfo language">
        <h3 class="title">Languages</h3>
        <ul>
          <li>
            <span class="text">English</span>
            <span class="percent">
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span class="text">Hindi</span>
            <span class="percent">
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="rightSide">
      <div class="about">
        <h2 class="title2">Experience</h2>
        <div class="box">
          <div class="year_company">
            <h5>2022 - Present</h5>
            <h5>IVY Comptech</h5>
          </div>
          <div class="text">
            <h4>Trainee Software Engineer</h4>
            <p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div class="box">
          <div class="year_company">
            <h5>2021-2022</h5>
            <h5>IVY Pvt Ltd</h5>
          </div>
          <div class="text">
            <h4>SDE Intern</h4>
            <p>
              <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="about skills">
        <h2 class="title2">Technical Skills</h2>
        <div class="box">
          <h4>C++</h4>
          <div class="percent">
          </div>
        </div>
        <div class="box">
          <h4>Java</h4>
          <div class="percent">
          </div>
        </div>
        <div class="box">
          <h4>Data Structure</h4>
          <div class="percent">
          </div>
        </div>
        <div class="box">
          <h4>HTML</h4>
          <div class="percent">
          </div>
        </div>
        <div class="box">
          <h4>CSS</h4>
          <div class="percent">
          </div>
        </div>
        <div class="box">
          <h4>JavaScript</h4>
          <div class="percent">
          </div>
        </div>
      </div>
      <div class="about">
        <h2 class="title2">Projects</h2>
        <div class="box">
          <div class="year_company">
            <h5>Sep-Oct 2022</h5>
          </div>
          <div class="text">
            <h4>Color Guessing Game</h4>
            <p>
              <ul>
                <li>A Color Guessing Game using HTML, CSS and JavaScript.
                </li>
                <li>Player has three chances to play game and if he chose right 
                  color then he will win otherwise lost.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div class="box">
          <div class="year_company">
            <h5>Sep-Oct 2022</h5>
          </div>
          <div class="text">
            <h4>Library Management System</h4>
            <p>
              <ul>
              <li>A Java based application for library management using Java and SQL.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="about interest">
        <h2 class="title2">Areas of Interests</h2>
        <ul>
          <li>Web Development</li>
          <li>Machine Learning</li>
          <li>Data Structure and Algorithm</li>
        </ul>
      </div>

    </div>
  </div>) ;
}

export default App;
