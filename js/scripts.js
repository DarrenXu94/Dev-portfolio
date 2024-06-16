/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function ($) {
  AOS.init({
    once: true,
  });

  // Lead animation

  VANTA.RINGS({
    el: "#vanta-lead",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x2f3d3b,
  });

  // End

  // Remove no-js class
  $("html").removeClass("no-js");

  // Animate to section when nav is clicked
  $("header a").click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    var heading = $(this).attr("href");
    var scrollDistance = $(heading).offset().top;

    var scrollSpeed =
      (Math.abs(window.pageYOffset - $(heading).offset().top) / 1) * 0.25;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      scrollSpeed
    );

    // Hide the menu once clicked if mobile
    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });

  // Scroll to top
  $(".to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // Scroll to first element
  $("#lead-down span").click(function () {
    var scrollDistance = $("#about").offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      500
    );
  });

  // Create timeline
  $("#experience-timeline").each(function () {
    $this = $(this); // Store reference to this
    $userContent = $this.children("div"); // user content

    // Create each timeline block
    $userContent.each(function () {
      $(this)
        .addClass("vtimeline-content")
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
        );
    });

    // Add icons to each block
    $this.find(".vtimeline-point").each(function () {
      $(this).prepend(
        '<div class="vtimeline-icon"><i class="fa fa-rocket"></i></div>'
      );
    });

    // Add dates to the timeline if exists
    $this.find(".vtimeline-content").each(function () {
      var date = $(this).data("date");
      if (date) {
        // Prepend if exists
        $(this)
          .parent()
          .prepend('<span class="vtimeline-date">' + date + "</span>");
      }
    });
  });

  // Create projects
  const projects = [
    {
      name: "Civic lunch",
      preview: "https://civic-lunch.darrenxu.com/",
      description: "A foodie's journey through lunch",
      link: "https://github.com/DarrenXu94/awake-template",
      imgLink:
        "https://github.com/DarrenXu94/awake-template/assets/16931153/6735407b-1caa-4d3a-b642-1944c82f3938",
    },
    {
      name: "Stocky timeline",
      preview: "https://www.stocky.darrenxu.com/",
      description: "A timeline of the Stocky sharehouse (RIP)",
      link: "https://github.com/DarrenXu94/vue-stocky",
      imgLink:
        "https://github.com/DarrenXu94/vue-stocky/assets/16931153/34314548-d38c-4da3-9839-14a7bce10c35",
    },
    {
      name: "Futsal scrape",
      preview: "https://futsal.darrenxu.com/",
      description: "Scraping a poorly built website for my own use",
      link: "https://github.com/DarrenXu94/astro-dribl",
      imgLink:
        "https://github.com/DarrenXu94/astro-dribl/assets/16931153/2b16e29a-c443-4623-91cd-6c4843514a65",
    },
    {
      name: "Public API Displayer",
      preview: "https://publicapi.darrenxu.com/",
      description: "A site with a list of public free to use APIs",
      link: "https://github.com/DarrenXu94/public-api-displayer",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/152439824-e5c4938b-46b3-481e-9484-5381b9889b53.png",
    },
    {
      name: "Spritesheet Cropper",
      preview: "https://spritesheet-cropper.vercel.app/",
      description:
        "NextJS app that cuts a single spritesheet into individual images",
      link: "https://github.com/DarrenXu94/spritesheet-cropper",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/154889161-407b1040-2c15-48c9-8148-416af6ce60c7.png",
    },
    {
      name: "ThreeJS Portfolio",
      preview: "https://three.darrenxu.com/",
      description: "A demo site I made to test the skills I learn with ThreeJS",
      link: "https://github.com/DarrenXu94/portfolio-three",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/153305187-925194ac-78dc-4833-93fc-ea992a2183f6.gif",
    },
    {
      name: "LottieWeb Scroll",
      preview: "https://lottietest.darrenxu.com/",
      description:
        "A demo site exploring LottieFiles, GSAP and scroll animations",
      link: "https://github.com/DarrenXu94/lottie-testing",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/153337587-6a08bd36-fbd4-40af-881a-39301803acf2.gif",
    },
    {
      name: "Framer Motion Page Transition",
      preview: "https://framer-transition.darrenxu.com/",
      description: "Framer Motion page transition swipe effect",
      link: "https://github.com/DarrenXu94/framer-page-transition",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/153304883-8810675f-9553-4ce0-b3ab-915ce859a7a5.gif",
    },
    {
      name: "Video Play on Scroll",
      preview: "https://scroll.darrenxu.com/",
      description:
        "Scrolling example using GSAP and TweenMagic to play a video on scroll",
      link: "https://github.com/DarrenXu94/video-play-on-scroll",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/152892113-588e2684-e50f-4d7a-a49e-b188383723a0.gif",
    },
    {
      name: "Choccy Blog",
      preview: "https://choccy.darrenxu.com/",
      description:
        "Hear about my latest hard hitting choccy reviews. A Gatsby blog hosted on Netlify with custom React components and styling",
      link: "https://github.com/DarrenXu94/gatsby-starter-netlify-cms",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/95315560-5fec0f80-08de-11eb-87f0-0890b4dbb3b4.png",
    },
    {
      name: "Will it Cereal?",
      preview: "https://willitcereal.darrenxu.com/",
      description:
        "A fun blog where I see what food goes well as a cereal. Another Gatsby blog using the same tools as the Choccy Blog",
      link: "https://github.com/DarrenXu94/will-it-cereal",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/102003406-3bd40100-3d5b-11eb-8256-d0e6d635f06f.png",
    },
    {
      name: "Full Stack Roadmap",
      preview: "https://roadmapdxu.netlify.com/",
      description:
        "A full stack web application designed to host basic information about beginning web development. MongoDB hosted on MLab, static site hosted on Netlify",
      link: "https://github.com/DarrenXu94/roadmap",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/50616987-0d2e3880-0f3f-11e9-8ead-3b7b83a34c89.png",
    },
    {
      name: "Interactive Currency Converter",
      preview: "https://currency-convertor.netlify.com/",
      description:
        "LWebsite that converts currency using an API and also shows the locations on a map",
      link: "https://github.com/DarrenXu94/interactive-currency-converter",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/52897620-cebcb680-322a-11e9-9115-b322a993a92e.png",
    },
    {
      name: "DBScan Visualisation",
      description: "CanvasJS representation of the DBScan algorithm",
      preview: "https://darrenxu94.github.io/dbscan-visualiser/",
      link: "https://github.com/DarrenXu94/dbscan-visualiser",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/121803918-fac79580-cc86-11eb-91a0-c3a548ce45d8.png",
    },

    {
      name: "Beam Game",
      preview: "https://darrenxu94.github.io/Beam/",
      description: "A p5js game created for a fun side project",
      link: "https://github.com/DarrenXu94/Beam",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/50622683-585a4280-0f63-11e9-944c-88d82733d9ba.gif",
    },
    {
      name: "Splitscreen Slider",
      preview: "https://darrenxu94.github.io/splitscreen-slider/",
      description:
        "Basic HTML, CSS and JS website that animates a bar based on mouse movement",
      link: "https://github.com/DarrenXu94/splitscreen-slider",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/50621755-27c2da80-0f5c-11e9-92c2-62e9d5647b39.gif",
    },
    {
      name: "Promotional Band Website",
      preview: "https://edhunting.netlify.com/",
      description:
        "Promotional responsive website for a band. Created using node-sass and HTML5.",
      link: "https://github.com/DarrenXu94/edhunting",
      imgLink:
        "https://user-images.githubusercontent.com/16931153/54064176-2c5e8480-4266-11e9-8224-dd11705a28e5.png",
    },
  ];

  const projectSelector = $("#projects-container");
  projects.forEach(function (project, index) {
    projectSelector.append(`<div class="project-card" data-index="${index}">
        <div class="project-card__img">
            <img src="${project.imgLink}"
                alt="">
        </div>
        <div class="text">
        <div class="project-card__header">
            <h3>
                ${project.name}
            </h3>
        </div>
        <div class="project-card__content">
            ${project.description}
        </div>
        <div class="project-card__links">
            <span>
                <a href="${project.preview}">
                    <i class="fa fa-tablet" aria-hidden="true"></i>
                    <span>
                        Live page
                    </span>
                </a>
            </span>
            <span>
                <a href="${project.link}">
                    <i class="fa fa-code" aria-hidden="true"></i>
                    <span>
                        Code
                    </span>
                </a>
            </span>
        </div>
        </div>
    </div>`);
  });

  const skills = [
    "JavaScript",
    "TypeScript",
    "NodeJs",
    "React",
    "NextJS",
    "VueJs",
    "SharePoint",
    "Elasticsearch",
    "Docker",
    "Healthy lifestyle",
    ".Net",
    "Agile methodologies",
    "Software testing",
    "Component libraries",
    "GSAP",
    "Framer motion",
    "Three.js",
  ];

  const skillSelector = $("#skills-container");
  skills.forEach(function (skill) {
    skillSelector.append(`<a class="hover-btn-diagonal" href="#">
    <span>
        ${skill}
    </span>
    </a>`);
  });

  // Open mobile menu
  $("#mobile-menu-open").click(function () {
    $("header, body").addClass("active");
  });

  // Close mobile menu
  $("#mobile-menu-close").click(function () {
    $("header, body").removeClass("active");
  });

  // Load additional projects
  $("#view-more-projects").click(function (e) {
    e.preventDefault();
    $(this).fadeOut(300, function () {
      $("#more-projects").fadeIn(300);
    });
  });
})(jQuery);
