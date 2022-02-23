let btn = document.querySelector("button");
let container = document.getElementsByClassName("umwickeln")[0];

let count = -1;

let duration = 1000;

btn.addEventListener("click", () => {
    let interval = setInterval(function() {
        count++;

        let wrapper = document.createElement("div");
        wrapper.textContent = count;
        if (count % 10 == 0) {
            wrapper.className = 'weiss';
            duration -= 100;
            console.log("interval ~ duration", duration);
        } else {
            wrapper.className = 'rechteck';
        }

        if (count >= 43) {
            clearInterval(interval);
        } else {
            container.appendChild(wrapper);
        }
    }, duration);
})