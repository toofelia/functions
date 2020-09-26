function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
   }
   undefined
   function strong(value) {
    return '<strong>' + value + '</strong>';
   }
   undefined
   var importantText;
   undefined
   importantText = document.querySelector('p.important').innerHTML;
   "
           <span class="note">Note:</span> Functions are first-class objects in JavaScript, and so can be treated just as any other object that you might use.
         "
   importantText = strong(importantText);
   "<strong>
           <span class="note">Note:</span> Functions are first-class objects in JavaScript, and so can be treated just as any other object that you might use.
         </strong>"
   updateInnerHTML('p.important', importantText);
   undefined