import { useEffect } from 'react';
import './Collection.css';

export function Collection() {

    useEffect(() => {
        document.querySelector(".nav-top").classList.add("active");
        document.querySelector(".nav-bottom").classList.add("active");

        const collection = document.getElementById("collection");

        window.onmousemove = e => {
          const mouseX = e.clientX,
                mouseY = e.clientY;
          
          const xDecimal = mouseX / window.innerWidth,
                yDecimal = mouseY / window.innerHeight;
          
          const maxX = collection.offsetWidth - window.innerWidth,
                maxY = collection.offsetHeight - window.innerHeight;
          
          const panX = maxX * xDecimal * -1,
                panY = maxY * yDecimal * -1;
          
          collection.animate({
            transform: `translate(${panX}px, ${panY}px)`
          }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
          })
        }
        const tile = document.querySelectorAll(".tile");
        const title = document.querySelector(".Collection-tittle");

        tile.forEach(element => {
            element.addEventListener("mouseover", () => {
                title.classList.add("active");
                title.innerHTML = element.dataset.title;
            });
            element.addEventListener("mouseout", () => {
                title.classList.remove("active");
            });
        });
       
    }, [])

    return (
        <>
        <h1 className='Collection-tittle'>SO-art</h1>
        <div id="collection">
            <div className="tile" data-title='Artingo'>
                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1520338258525-606b90f95b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
            </div>
            <div className="tile" data-title='Newera'>
                <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" />
            </div>
        </div>
        </>
    )
}