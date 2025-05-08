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