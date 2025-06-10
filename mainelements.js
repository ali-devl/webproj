console.log("mainelements.js loaded");

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="logo-container">
          <img src="../images/ellogo.png" id="logo_title" />
        </div>

        <div class="Navigation-bar">
          <a href="home_page.html" class="navigation-items" id="nav-home"><b>Home</b></a>
          <a href="My-Favourites.html" class="navigation-items" id="nav-favourites"><b>Favourites</b></a>
          <a href="coming_soon.html" class="navigation-items" id="nav-coming-soon"><b>Coming soon</b></a>

          <div class="genre-dropdown">
            <a href="#" class="navigation-items genre-link" id="nav-genres"><b>Genres</b></a>
            <div class="dropdown-content" id="genre-list">
              <a href="#action" id="genre-action">Action</a>
              <a href="#adventure" id="genre-adventure">Adventure</a>
              <a href="#comedy" id="genre-comedy">Comedy</a>
              <a href="#horror" id="genre-horror">Horror</a>
              <a href="#romance" id="genre-romance">Romance</a>
              <a href="#sci-fi" id="genre-sci-fi">Sci-Fi</a>
            </div>
          </div>
        </div>

        <div class="search-container">
          <input type="text" id="search-input" placeholder="Search movies..." autocomplete="off" />
          <div id="search-results"></div>
        </div>

        <div class="language-container">
          <select id="languages">
            <option value="english_option">English</option>
            <option value="arabic_option">العربية</option>
          </select>
        </div>

        <div class="signin-container">
          <a href="sign-in.html" class="signin-btn" id="Sign-In">Sign In</a>
        </div>
      </header>
    `;
  }
}

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <div>
            <h3 class="footer-heading" id="footer-explore">Explore</h3>
            <ul class="footer-list">
              <li><a href="#" class="footer-link" id="footer-trending">Trending Movies</a></li>
              <li><a href="#" class="footer-link" id="footer-newreleases">New Releases</a></li>
              <li><a href="#" class="footer-link" id="footer-toprated">Top Rated</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading" id="footer-support">Support</h3>
            <ul class="footer-list">
              <li><a href="https://forms.gle/EAR797eowCthtmtaA" class="footer-link" id="footer-helpcenter">Help Center</a></li>
              <li><a href="https://forms.gle/fn28dDW9utkyENYQ6" class="footer-link" id="footer-faqs">FAQs</a></li>
              <li><a href="mailto:youssef2304896@miuegypt.edu.eg" class="footer-link" id="footer-contactus">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading" id="footer-company">Company</h3>
            <ul class="footer-list">
              <li><a href="../html/about-us.html" class="footer-link" id="footer-aboutus">About Us</a></li>
              <li><a href="../html/career.html" class="footer-link" id="footer-careers">Careers</a></li>
              <li><a href="https://forms.gle/6jogDn28HQkmabT3A" class="footer-link" id="footer-privacypolicy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading" id="footer-followus">Follow Us</h3>
            <ul class="footer-list">
              <li><a href="https://www.facebook.com/StreamCast" class="footer-link"><i class="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="https://twitter.com/StreamCast" class="footer-link"><i class="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://www.instagram.com/StreamCast" class="footer-link"><i class="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-copy">2024 StreamCast. All rights reserved.</div>
      </footer>
    `;
  }
}

class LoadingScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../css/loading.css" />
      <div class="loading-screen">
        <img src="../images/icon.png" class="loading-logo" alt="Loading"/>
      </div>
    `;

    setTimeout(() => {
      this.style.display = 'none';
    }, 1500);
  }
}


customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('loading-screen', LoadingScreen);
