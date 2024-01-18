import { useEffect } from 'react';
import './Contact.css';
export function Contact() {

    useEffect(() => {
        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        const enhance = id => {
          const element = document.getElementById(id),
            text = element.innerText.split("");
          
          element.innerText = "";
          
          text.forEach((value, index) => {
            const outer = document.createElement("span");
            
            outer.className = "outer";
            
            const inner = document.createElement("span");
            
            inner.className = "inner";
            
            inner.style.animationDelay = `${rand(-5000, 0)}ms`;
            
            const letter = document.createElement("span");
            
            letter.className = "letter";
            
            letter.innerText = value;
            
            letter.style.animationDelay = `${index * 1000 }ms`;
            
            inner.appendChild(letter);    
            
            outer.appendChild(inner);    
            
            element.appendChild(outer);
          });
        }
        
        enhance("channel-link");
    }, []);

    return (
    <div id="text">
        <div className="line">
            <p className="word">Paoline</p>
            <p className="word">K</p>
        </div>

        <div className="line">
            <p className="word">Contact</p>
            <p className="word">me</p>
        </div>

        
        <div className="line">
            <a 
            id="channel-link" 
            href="https://youtube.com/@hyperplexed" 
            target="_blank" 
            className="word fancy"
            >
            @Instagram
            </a>
        </div>
    </div>
    )
}