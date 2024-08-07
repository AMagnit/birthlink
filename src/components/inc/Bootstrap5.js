

/* BOOTSTRAP 5 */
//import "bootstrap";
import * as bootstrap from "bootstrap";
import 'bootstrap/scss/bootstrap.scss';

//my
import "/scss/my.scss"
import "/scss/my_sticky_footer.scss"

//import "/scss/my_btn_blue_gradient.scss"
//import "/scss/delay.scss"
// import "/scss/my_cookies_policy.scss"
// import "/scss/my_rating_bar.scss"
// import "/scss/my_rating_stars.scss"

// import "/scss/nice_button.scss"


// new bootstrap.Popover(document.body, {
//   selector: '[data-bs-toggle="popover"]'
// });


//import Popover from 'bootstrap/js/dist/popover';
new bootstrap.Popover (document.body, {
  selector: '[data-bs-toggle="popover"]',
});


//import { Tooltip } from "bootstrap";

// const info = ref(null);
// let infoTooltip: Tooltip | undefined;
//
// onMounted(() => {
//   infoTooltip = new Tooltip(info.value!);
// });

/* ERROR with tooltip */
//import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
// new Tooltip(document.body, {
//   selector: '[data-bs-toggle="tooltip"]',
// });


import Tooltip from 'bootstrap/js/dist/tooltip';
new Tooltip (document.body, {
  selector: '[data-bs-toggle="tooltip"]',
});


// mounted() {
//   //inti tooltip
//   Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
//       .forEach(tooltipNode => new Tooltip(tooltipNode))
// }

// new bootstrap.Tooltip(document.body, {
//   selector: '[data-bs-toggle="tooltip"]'
// });