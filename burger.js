const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        if(nav.classList.toggle('nav-active')) {
            document.querySelectorAll(".burger div")[0].style.backgroundColor = "rgb(10, 10, 10)";
            document.querySelectorAll(".burger div")[2].style.backgroundColor = "rgb(10, 10, 10)";
            document.querySelector(".logo").style.color = "rgb(10, 10, 10)";
            document.querySelector("nav").style.backgroundColor = "snow";
        }
        else {
            document.querySelectorAll(".burger div")[0].style.backgroundColor = "snow";
            document.querySelectorAll(".burger div")[2].style.backgroundColor = "snow";
            document.querySelector(".logo").style.color = "snow";
            document.querySelector("nav").style.backgroundColor = "transparent";
        }
        

        burger.classList.toggle('toggle');
    });

    
}

navSlide();