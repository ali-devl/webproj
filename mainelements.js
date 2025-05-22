
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
          <div class="logo-container">
            <img src="../images/ellogo.png" id="logo_title">
          </div>
        
          <div class="Navigation-bar">
            <a href="home_page.html" class="navigation-items"><b>Home</b></a>
            <a href="My-List.html" class="navigation-items"><b>Favourites</b></a>
            <a href="comming_soon.html" class="navigation-items"><b>Coming soon</b></a>
            
            <div class="genre-dropdown">
              <a href="#" class="navigation-items genre-link"><b>Genres</b></a>
              <div class="dropdown-content">
                <a href="#action">Action</a>
                <a href="#adventure">Adventure</a>
                <a href="#comedy">Comedy</a>
                <a href="#horror">Horror</a>
                <a href="#romance">Romance</a>
                <a href="#sci-fi">Sci-Fi</a>
              </div>
            </div>
          </div>
        
          <div class="search-container">
            <input type="text" id="search-input" placeholder="Search movies..." autocomplete="off">
            <div id="search-results"></div>
          </div>
        
          <div class="signin-container">
            <a href="sign-in.html" class="signin-btn">Sign In</a>
          </div>
        </header>`;
    }
  }
  
  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <div class="footer-container">
            <div>
              <h3 class="footer-heading">Explore</h3>
              <ul class="footer-list">        
                <li><a href="#" class="footer-link">Trending Movies</a></li>
                <li><a href="#" class="footer-link">New Releases</a></li>
                <li><a href="#" class="footer-link">Top Rated</a></li>
              </ul>
            </div>
            <div>
              <h3 class="footer-heading">Support</h3>
              <ul class="footer-list">
                <li><a href="https://forms.gle/EAR797eowCthtmtaA" class="footer-link">Help Center</a></li>
                <li><a href="https://forms.gle/fn28dDW9utkyENYQ6" class="footer-link">FAQs</a></li>
                <li><a href="mailto:youssef2304896@miuegypt.edu.eg" class="footer-link">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 class="footer-heading">Company</h3>
              <ul class="footer-list">
                <li><a href="https://forms.gle/x468Xym7jhMEHdxF6" class="footer-link">About Us</a></li>
                <li><a href="https://forms.gle/8gjWGTJLd35jwY4d6" class="footer-link">Careers</a></li>
                <li><a href="https://forms.gle/6jogDn28HQkmabT3A" class="footer-link">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 class="footer-heading">Follow Us</h3>
              <ul class="footer-list">
                <li><a href="https://www.facebook.com/StreamCast" class="footer-link"><i class="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="https://twitter.com/StreamCast" class="footer-link"><i class="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="https://www.instagram.com/StreamCast" class="footer-link"><i class="fab fa-instagram"></i> Instagram</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-copy">
            2024 StreamCast. All rights reserved.
          </div>
        </footer>`;
    }
  }
  
  class LoadingScreen extends HTMLElement {
    constructor() {
      super();
      
      this.attachShadow({ mode: 'open' });
    }
  
    
    connectedCallback() {
      
      this.shadowRoot.innerHTML = `
        <!-- Link to external CSS file -->
        <link rel="stylesheet" href="loading.css">
        <!-- Loading screen container -->
        <div class="loading-screen">
          <!-- Loading spinner/logo -->
          <img src="../images/logo.png" class="loading-logo" alt="Loading">
        </div>
      `;
      
     
      setTimeout(() => {
        this.style.display = 'none';
      }, 1500);
    }
  }

  customElements.define('loading', LoadingScreen);




  customElements.define('my-header', MyHeader);
  customElements.define('my-footer', MyFooter);
  