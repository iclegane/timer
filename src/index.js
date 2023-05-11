const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

function formatTimer(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds % 60).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    let interval;

    return (seconds) => {
        let remainingSeconds = seconds;

        // Остановка предыдущей анимации (если есть)
        clearInterval(interval);

        // Обновление значений и запуск анимации
        timerEl.textContent = formatTimer(remainingSeconds);
        interval = setInterval(() => {
            remainingSeconds--;
            timerEl.textContent = formatTimer(remainingSeconds);

            if (remainingSeconds === 0) {
                clearInterval(interval);
            }
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
    inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = "";
});
