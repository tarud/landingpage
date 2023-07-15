// auto-assign logo src to logo-element
function fetchLogo() {
    function setLogo(url) {
      document.querySelector(".app__logo_img").src = url;
      return 0;
    }
    const COMPANY_NAME = `reddit`;
    const ALTERNATE_LOGO = "https://logo.clearbit.com/reddit.com";
    const LOGO_API = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${COMPANY_NAME}`;
    fetch(LOGO_API)
      .then((res) => res.json())
      .then(([{ logo }]) => {
        setLogo(logo);
      })
      .catch((err) => {
        setLogo(ALTERNATE_LOGO);
        console.log(err);
      });
  }
  
  (function () {
    function clearNavLinksState(links) {
      return links.map((link) => link.classList.remove("app__nav_link--active"));
    }
  
    function handleNavLinkClick(links, target) {
      clearNavLinksState(links);
      window.setTimeout(() => {
        target.classList.add("app__nav_link--active");
      }, 50);
      return 0;
    }
  
    const NAV_LINKS = [...document.querySelectorAll(`.app__nav_link`)];
    NAV_LINKS.forEach((clickedLink) => {
      clickedLink.addEventListener("click", () => {
        handleNavLinkClick(NAV_LINKS, clickedLink);
      });
    });
  })();
  
