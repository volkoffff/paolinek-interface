import { useState } from 'react';

export function Cursor() {

    useState(() => {
        window.addEventListener('mousemove', function(e) {
          var cursor = document.getElementById('cursor')
          cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px';
          cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';

          if (e.target.classList.contains('link')) {
            cursor.classList.add('link');
          } else {
            cursor.classList.remove('link');
          }

          if (e.target.classList.contains('link-arrow')) {
            cursor.classList.add('link-arrow');
          } else {
            cursor.classList.remove('link-arrow');
          }

          if (e.target.classList.contains('titlehover')) {
            cursor.classList.add('titlehover');
          } else {
            cursor.classList.remove('titlehover');
          }

        });
        
      } , []);

    return (
        <div id="cursor">
          <span className='cursor-arrow'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z" clipRule="evenodd"></path><path fillRule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z" clipRule="evenodd"></path></svg></span>
        </div>
    )
}