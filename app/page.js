"use client"
import "./globals.css"

// MUI ICONS IMPORTS
import CableIcon from '@mui/icons-material/Cable'
import PublicIcon from '@mui/icons-material/Public'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import TimelineIcon from '@mui/icons-material/Timeline'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { useEffect } from "react"

export default function Home() {


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target)
          entry.target.classList.add("show")
        }
      })
    }, {})

    const headerHeroElements = document.querySelectorAll(".header_hero")
    headerHeroElements.forEach(el => observer.observe(el))

    const todoElements = document.querySelectorAll(".todo")
    todoElements.forEach(el => observer.observe(el))

    const moveLeftElements = document.querySelectorAll(".move_left")
    moveLeftElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <header>
        <h1 className="header_content move_left">Browse everything.</h1>
        {/* desktop hero */}
        <div className="desktop_hero_image header_hero">
          <div className="desktop_hero_frame">
            <img src="/desktopImage.png" alt="header" className="desktop_image" />
          </div>
        </div>
        {/* desktop hero */}

        {/* hero image tab */}
        <div className="tablet_hero_image header_hero">
          <div data-reveal className={`tablet_hero_frame`}>
            <img src="/tablet image.png" alt="header" className="tablet_image" />
          </div>
        </div>
        {/* hero image tab */}

        {/* hero image mob */}
        <div className="mobile_hero_image header_hero">
          <img src="/phone image.png" alt="header" data-reveal className={`mobile_image`} />
        </div>
        {/* hero image mob */}
      </header>

      <main>
        <section className="trusted_by_section">
          <p className="trusted_by move_left">Trusted by:</p>
          <div data-reveal className={`logos_row`}>
            <img src="/logo1.png" className="todo" />
            <img src="/logo2.png" className="todo" />
            <img src="/logo3.png" className="todo" />
            <img src="/logo4.png" className="todo" />
            <img src="/logo5.png" className="todo" />
            <img src="/logo6.png" className="todo" />
          </div>
          <hr className="move_left" />
        </section>

        <section className="banfits_section">
          <div>
            <p className="benefits move_left">Benefits</p>
            <h2 data-reveal className="benefits_h2 move_left">We've cracked the code.</h2>
            <p className="benefits move_left">Area provides real insights, without the data overload.</p>
          </div>
          <div className="icons_module">
            <div className="icon_lockup todo">
              <CableIcon className="benefits_icon" />
              <h4>Amplify Insights</h4>
              <p>Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
            </div>
            <div className="icon_lockup todo">
              <PublicIcon className="benefits_icon" />
              <h4>Control Your Global Presence</h4>
              <p>Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>
            </div>
            <div className="icon_lockup todo">
              <RecordVoiceOverIcon className="benefits_icon" />
              <h4>Remove Language Barriers</h4>
              <p>Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
            </div>
            <div className="icon_lockup todo">
              <TimelineIcon className="benefits_icon" />
              <h4>Visualize Growth</h4>
              <p>Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>
            </div>
          </div>
          <img src="/1.png" className="benefits_image todo" />
        </section>

        <section className="features_carousel">
          <div className="features_carousel_text">
            <div className="features_carousel_title todo">
              <h2 className="move_left">See the Big Picture</h2>
              <p className="move_left">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
            </div>
            <div className="features_carousel_list">
              <ul>
                <li className="move_left"><h5>01 </h5>Spot Trends in Seconds: No more digging through numbers. </li>
                <li className="move_left"><h5>02 </h5>Get Everyone on the Same Page: Share easy-to-understand reports with your team. </li>
                <li className="move_left"><h5>03 </h5>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</li>
                <li className="move_left"><h5>04 </h5>Your Global Snapshot: Get a quick, clear overview of your entire operation.</li>
              </ul>
            </div>
            <button className="features_carousel_button header_hero">Discover More</button>
          </div>
          <img src="/2.png" className="features_carousel_image move_left" />
        </section>

        <section className="specifications_table">
          <div className="specifications_table_content">
            <p className="specs move_left">specs</p>
            <h2 className="move_left">Why Choose Area?</h2>
            <p className="move_left">You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </p>
            <button className="specifications_table_button header_hero">Discover More</button>
          </div>

          <div className="specifications_table_table">
            <div className="column todo">
              <div className="table_head">
                <h2>Area</h2>
              </div>
              <hr />
              <div className="table_body">
                <p className="first_row"><CheckIcon className="table_icon" /> Ultra-fast browsing</p>
                <p><CheckIcon className="table_icon" /> Advanced AI insights</p>
                <p><CheckIcon className="table_icon" /> Seamless integration</p>
                <p><CheckIcon className="table_icon" /> Advanced AI insights</p>
                <p><CheckIcon className="table_icon" /> Ultra-fast browsing</p>
                <p className="last_row"><CheckIcon className="table_icon" /> Full UTF-8 support</p>
              </div>
            </div>
            <div className="column todo">
              <div className="table_head">
                <h2>WebSurge</h2>
              </div>
              <hr />
              <div className="table_body">
                <p className="first_row"><CheckIcon className="table_icon" /> Fast browsing</p>
                <p><CheckIcon className="table_icon" /> Basic AI recommendations</p>
                <p><CheckIcon className="table_icon" /> Restricts customization</p>
                <p><CloseIcon className="table_icon" /> Basic AI insights</p>
                <p><CheckIcon className="table_icon" /> Fast browsing</p>
                <p className="last_row"><CloseIcon className="table_icon" /> Potential display errors</p>
              </div>
            </div>
            <div className="column todo">
              <div className="table_head">
                <h2>HyperView</h2>
              </div>
              <hr />
              <div className="table_body">
                <p className="first_row"><CloseIcon className="table_icon" /> Moderate speeds</p>
                <p><CloseIcon className="table_icon" /> No AI assistance</p>
                <p><CloseIcon className="table_icon" /> Steep learning curve</p>
                <p><CloseIcon className="table_icon" /> No AI assistance</p>
                <p><CloseIcon className="table_icon" /> Moderate speeds</p>
                <p className="last_row"><CloseIcon className="table_icon" /> Partial UTF-8 support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial_section">
          <img src="/3.png" className="testimonial_image move_left" />
          <div className="testimonial_quote todo">
            <p className="move_left">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</p>
            <div className="quote_name">
              <p className="move_left">John Smith</p>
              <p className="head_data move_left">Head of Data</p>
            </div>
          </div>
        </section>

        <section className="howTo_section ">
          <div className="howTo_section_discover move_left">
            <h2 className="todo">Map Your Success</h2>
            <button className="howTo_section_discover_button todo">Discover More</button>
          </div>
          <div className="steps_lockup">
            <div className="lockup todo">
              <p className="step_number">01</p>
              <div className="step_details">
                <h5>Get Started</h5>
                <p>With our intuitive setup, you’re up and running in minutes.</p>
              </div>
            </div>
            <div className="lockup todo">
              <p className="step_number">02</p>
              <div className="step_details">
                <h5>Customize and Configure</h5>
                <p>Adapt Area to your specific requirements and preferences.</p>
              </div>
            </div>
            <div className="lockup todo">
              <p className="step_number">03</p>
              <div className="step_details">
                <h5>Grow Your Business</h5>
                <p>Make informed decisions to exceed your goals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero_image_section todo">
          <img src="/4.png" />
        </section>

        <section className="contact_us">
          <h2 className="move_left">Connect with us</h2>
          <div>
            <p className="move_left">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
            <button className="learn_more_btn header_hero"><a>Learn More<ArrowOutwardIcon className="arrow_hover" fontSize="15px" /></a></button></div>
        </section>
      </main>

      <footer>
        <div className="links todo">
          <a>Benefits</a>
          <a>Specifications</a>
          <a>How-to</a>
        </div>
        <div className="credits">
          <div className="left_footer">
            <img src="/logo.png" className="logo todo" />
            <p className="todo"><span>© Area.</span> 2025</p>
          </div>
          <div className="reight_footer todo">
            <p>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
