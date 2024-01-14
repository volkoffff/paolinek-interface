import { useState } from 'react';

export function Cursor() {

    useState(() => {
        window.addEventListener('mousemove', function(e) {
          var cursor = document.getElementById('cursor')
          cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px';
          cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';
        });
      } , []);

    return (
        <div id="cursor"></div>
    )
}