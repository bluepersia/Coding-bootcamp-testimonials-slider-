
let data;
let sliderIndex = 0;

fetchData ();
document.querySelector('.slider_btn--prev').addEventListener ('click', prev);
document.querySelector ('.slider_btn--next').addEventListener ('click', next);



async function fetchData () 
{
    const res = await fetch ('./data.json');

    if (!res.ok)
        throw new Error ('Something went wrong fetching data.');

    data = await res.json();
}


function next ()
{
    sliderIndex++;
    if (sliderIndex >= data.length)
        sliderIndex = 0;

    renderSlider ();
}

function prev () 
{
    sliderIndex--;
    if (sliderIndex < 0)
        sliderIndex = data.length - 1;

    renderSlider();
}

function renderSlider()
{
    const slider = document.querySelector ('.slider');
    const userData = data[sliderIndex];

    slider.classList.add ('slide');
    setTimeout (() => {
        slider.querySelector ('.slider_body').textContent = userData.text;
        slider.querySelector ('.slider_name').textContent = userData.name;
        slider.querySelector ('.slider_job').textContent = userData.job;
        slider.querySelector ('.slider_img').src = `./images/${userData.image}`;
    }, 300);
    setTimeout (() => slider.classList.remove ('slide'), 600);
}