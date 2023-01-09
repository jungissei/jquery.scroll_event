// ----------------------------------------------------------------------------
// Scroll event
// ----------------------------------------------------------------------------
$(window).on('load scroll', trigger_scroll_event);

function trigger_scroll_event(){

  let $window = $(this),
      curr_window_top_line = $window.scrollTop(),
      curr_window_bottom_line = $window.height() + curr_window_top_line,
      $top_section = $('header'),
      top_section_bottom_line = $top_section.offset().top + $top_section.height(),
      bottom_section_top_line = $('footer').offset().top,
      event_name;

  if(curr_window_top_line < top_section_bottom_line){

    event_name = 'page_top';

  }else if(curr_window_bottom_line < bottom_section_top_line){

    event_name = 'page_middle';

  }else{

    event_name = 'page_bottom';
  }

  $(window).trigger('scroll_' + event_name);
}
