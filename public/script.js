$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  // $("#data a").click(function(e) {
  //   var ref = $(this).attr("class");
  //   solarsys.removeClass().addClass(ref);
  //   $(this).parent().find('a').removeClass('active');
  //   $(this).addClass('active');
  //   e.preventDefault();
  // });
  $("#sun").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('sun');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('sun');
    e.preventDefault();
  });
  $("#mercury").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('mercury');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });
  $("#venus").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('venus');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });
  $("#earth").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('earth');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });
  $("#mars").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('mars');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });
  $("#jupiter").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('jupiter');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });
  $("#saturn").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('saturn');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });
  $("#uranus").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('uranus');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });
  $("#neptune").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass('neptune');
    // $(this).parent().find('a').removeClass('active');
    // $(this).addClass('neptune');
    e.preventDefault();
  });


  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

});


// Navbar start


// capsule start

function checkWidthAndHideByClass() {
  const elements = document.querySelectorAll(".capsule");
  elements.forEach(el => {
    if (window.innerWidth <= 914) {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
  });
}

window.addEventListener("resize", checkWidthAndHideByClass);
window.addEventListener("load", checkWidthAndHideByClass);

// capsule end

// conrols start

// function resizeControls() {
//   const w = window.innerWidth;
//   let scale = 1;
  
//   if (w <= 800) scale = 0.98;
//   if (w <= 600) scale = 0.89;
//   if (w <= 400) scale = 0.79;
//   if (w <= 200) scale = 0.7;
  
//   const controls = document.getElementById('controls');
//   if (controls) {
//     controls.style.transform = `scale(${scale})`;
//     controls.style.transformOrigin = 'left top';
//   }
// }

// window.addEventListener('resize', resizeControls);
// window.addEventListener('DOMContentLoaded', resizeControls);

// conrols end

// hamburger list start
const vegburger = document.getElementById('vegburger');
const dropdown = document.getElementById('dropdown');

function checkViewportWidth() {
  if (window.innerWidth <= 914) {
    vegburger.style.display = 'block'; // show only when width is 914 or less
  } else {
    vegburger.style.display = 'none';
    vegburger.classList.remove('active');
    dropdown.classList.remove('open');
  }
}

// Toggle dropdown
vegburger.addEventListener('click', () => {
  vegburger.classList.toggle('active');
  dropdown.classList.toggle('open');
});

// Run on load and resize
window.addEventListener('load', checkViewportWidth);
window.addEventListener('resize', checkViewportWidth);

// hamburger list end


// Navbar end

// map and footer start here

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([23.418524292367767, 88.43179652929223], 18);

  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    attribution: "",
    maxZoom: 19,
  }).addTo(map);

  L.marker([23.418524292367767, 88.43179652929223])
    .addTo(map)
    .bindPopup("DYNAMICS.")
    .openPopup();

  function handleResponsiveLayout() {
    const width = window.innerWidth;
    const mapContainer = document.getElementById("map");

    // ✅ Responsive map width logic
    if (mapContainer) {
      if (width < 497) {
        mapContainer.style.width = width <= 441 ? `${width - 20}px` : "441px"; // Auto shrink under 441px
      } else {
        mapContainer.style.width = "100%";
      }

      // Trigger map resize
      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    }

    // Optional: handle footer dropdown if present
    const columns = document.querySelectorAll(".footer-column");
    columns.forEach((col) => {
      const ul = col.querySelector("ul");
      const h3 = col.querySelector("h3");

      if (width <= 768) {
        ul.style.display = "none";
        h3.style.cursor = "pointer";

        if (!h3.hasAttribute("data-listener")) {
          h3.setAttribute("data-listener", "true");
          h3.addEventListener("click", () => {
            columns.forEach((otherCol) => {
              if (otherCol !== col) {
                otherCol.querySelector("ul").style.display = "none";
              }
            });

            ul.style.display = ul.style.display === "none" ? "block" : "none";
            setTimeout(() => map.invalidateSize(), 300);
          });
        }
      } else {
        ul.style.display = "block";
        h3.style.cursor = "default";
        h3.removeAttribute("data-listener");
      }
    });
  }

  window.addEventListener("resize", handleResponsiveLayout);
  handleResponsiveLayout();
});



// map and footer end here