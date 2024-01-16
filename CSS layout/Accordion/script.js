
$(document).ready(function () {
  $(document).on("click", ".down-sign-icon", function () {
    let $accordionItem = $(this).closest(".accordion-item");
    $accordionItem.find(".hidden-box").toggle();
    if ($accordionItem.find(".hidden-box").is(':visible')) {
      $accordionItem.find(".sign-icon").html(`<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="down-sign-icon icon-green"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>`);
      $accordionItem.addClass("open");
    } else {
      $accordionItem.find(".sign-icon").html(`<svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="down-sign-icon icon-gray"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="m8.25 4.5 7.5 7.5-7.5 7.5" 
        />
      </svg>`);
      $accordionItem.removeClass("open");
    }
  })

})