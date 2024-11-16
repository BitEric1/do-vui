let answer = null;
let submitAnswer = null;

const textAnswer = "BRAIHAXNT";
const textAnswerEnd = "Bình rất xa";

let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");
let inputName = document.getElementById("input-name");
let exit = document.getElementById("modal-icon");

function showModal() {
    overlay.classList.add("show");
    modal.classList.add("show");
}

function hideModal() {
    overlay.classList.remove("show");
    modal.classList.remove("show");
}

const playList = [
    "./assets/audio/Lyrics Video - Hot TikTok ♪ Tình Đầu Quá Chén · Quang Hùng MasterD, Erik, Negav, Pháp Kiều.m4a",
    "./assets/audio/NƠI NÀY CÓ ANH   OFFICIAL MUSIC VIDEO   SƠN TÙNG M-TP.m4a",
    "./assets/audio/Quang Hung MasterD - ‘Thuy Trieu’ - Official Visualizer.m4a",
    "./assets/audio/SƠN TÙNG M-TP   ĐỪNG LÀM TRÁI TIM ANH ĐAU   OFFICIAL MUSIC VIDEO.m4a",
    "./assets/audio/Tăng Duy Tân - Say Sóng ft. 2pillz, Drum7   Album Khu Vườn Tình - Track 2.m4a",
];

let audio = document.getElementById("audioPlayer");
let currentSongIndex = Math.floor(Math.random() * playList.length);

function playNextSong() {
    audio.src = playList[currentSongIndex];
    audio.play();
    currentSongIndex = Math.floor(Math.random() * playList.length);
}

audio.addEventListener("ended", playNextSong);

document.getElementById("imgPreview").addEventListener("click", () => {
    document.getElementById("imgInput").click();
});

document.getElementById("imgInput").addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (file) {
        const read = new FileReader();

        read.onload = function (e) {
            const imgPreview = document.getElementById("imgPreview");

            imgPreview.src = e.target.result;
        };
        read.readAsDataURL(file);
    }

    document.getElementById("img-desc").style =
        "opacity: 0; visibility: hidden;";
});

let cnt = 0;

const startBtn = document.querySelector("#startBtn");
const right = document.querySelector("#right");

function addLevel1() {
    right.innerHTML = `
                <div class="content">
                    <div class="contennt-top">
                        <h1 class="content-top__text">
                            Hãy trả lời câu đố
                            <strong class="text-color">dưới đây</strong>
                        </h1>
                        <p class="desc">
                            Hãy sắp xếp các chữ cái sau đây thành một câu có
                            nghĩa (khóa của đáp án là 3 theo bảng chữ cái). <br>
                            Chỉ cần nhập đúng theo từng hàng, nhập liền các chữ cái sau khi giải mã là được nha.
                        </p>
                        <strong>
                            Ví dụ: Nếu chữ cái là D thì đáp án sẽ là A,...<br>
                            Các chữ khác tương tự.
                        </strong>
                    </div>
                    <div class="right-body">
                        <div class="content-body">
                            <!-- Các chữ cái -->
                            <div class="charactor-group">
                                <div class="charactor-wrap"><h1 class="charactor">E</h1></div>
                                <div class="charactor-wrap"><h1 class="charactor">U</h1></div>
                                <div class="charactor-wrap"><h1 class="charactor">D</h1></div>
                            </div>
                            <div class="charactor-group">
                                <div class="charactor-wrap"><h1 class="charactor">L</h1></div>
                                <div class="charactor-wrap"><h1 class="charactor">K</h1></div>
                                <div class="charactor-wrap"><h1 class="charactor">D</h1></div>
                                <div class="charactor-wrap"><h1 class="charactor">A</h1></div>
                            </div>
                            <div class="charactor-group">
                                <div class="charactor-wrap"><h1 class="charactor">Q</h1></div>
                                <div class="charactor-wrap"><h1 class="charactor">W</h1></div>
                            </div>
                        </div>
                        <div class="content-answer">
                            <h1 class="answer-title text-color">
                                Nhập câu trả lời vào đây nha^^
                            </h1>
                            <div class="answer-action">
                                <input
                                    type="text"
                                    id="answer"
                                    placeholder="Nhập câu trả lời"
                                    class="answer"
                                    autocomplete="off"
                                />
                                <button
                                    type="submit"
                                    class="btn submit-btn-grad submit-btn"
                                    id="submitAnswer"
                                >
                                    Gửi
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="right-bottom">
                        <div class="history">
                            <p class="history-title">
                                Số lần chơi:
                                <span class="history-cnt">
                                    <strong id="cnt" class="text-color">${cnt}</strong>
                                </span>
                            </p>
                            <p class="history-desc">
                                Các bạn nào trả lời đúng cứ ib mình lấy quà nha!
                                <br />
                                Chúc may mắn
                            </p>
                        </div>
                        <div class="contact">
                            <p class="contact-desc">
                                Mọi thắc mắc liên hệ:
                                <br>
                                <a href="tel:0336990472" class="text-color">
                                    Số điện thoại tại đây
                                </a>
                            </p>
                            <p class="contact-desc">
                                Email:
                                <a
                                    href="mailto:hoangbit185@gmail.com"
                                    class="text-color"
                                >
                                    Email tại đây
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            `;
}

function addLevel2() {
    right.innerHTML = `
            <div class="content">
              <div class="content-top-2">
                <div class="content-top">
                  <h1 class="">
                    Tuyệt vời
                    <strong class="text-color">
                      bạn đã trả lời đúng
                    </strong>
                  </h1>
                  <p class="desc">
                    Tiếp tục với thử thách này nhá, lần này sẽ
                    dễ hơn nên mình sẽ không gợi ý (nhập câu trả
                    lời có dấu viết hoa chữ cái đầu nha).
                  </p>
                  <strong> Chúc các bạn may mắn </strong>
                </div>
                <div class="content-top">
                  <img
                    src="./assets/img/cat.gif"
                    alt=""
                    class="cat-img"
                  />
                </div>
              </div>
        
              <div class="right-body">
                <div class="content-body">
                  <div class="charactor-group">
                    <div class="charactor-wrap">
                      <h1 class="charactor">B</h1>
                    </div>
                    <div class="charactor-wrap">
                      <h1 class="charactor">R</h1>
                    </div>
                    <div class="charactor-wrap">
                      <h1 class="charactor">A</h1>
                    </div>
                  </div>
                  <div class="charactor-group">
                    <div class="charactor-wrap">
                      <h1 class="charactor">I</h1>
                    </div>
                    <div class="charactor-wrap">
                      <h1 class="charactor">H</h1>
                    </div>
                    <div class="charactor-wrap">
                      <h1 class="charactor">A</h1>
                    </div>
                    <div class="charactor-wrap">
                      <h1 class="charactor">X</h1>
                    </div>
                  </div>
                  <div class="charactor-group">
                    <div class="charactor-wrap">
                      <h1 class="charactor">N</h1>
                    </div>
                    <div class="charactor-wrap">
                      <h1 class="charactor">T</h1>
                    </div>
                  </div>
                </div>
        
                <div class="content-answer">
                  <h1 class="answer-title text-color">
                    Nhập câu trả lời vào đây nha^^
                  </h1>
                  <div class="answer-action">
                    <input
                      type="text"
                      name=""
                      id="answer"
                      placeholder="Nhập câu trả lời"
                      class="answer"
                      autocomplete="off"
                    />
                    <button
                      type="submit"
                      class="btn submit-btn-grad submit-btn"
                      id="submitAnswer"
                    >
                      Gửi
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-bottom">
              <div class="history">
                <p class="history-title">
                  Số lần chơi:
                  <span class="history-cnt">
                    <strong id="cnt" class="text-color">${cnt}</strong>
                  </span>
                </p>
                <p class="history-desc">
                  Các bạn nào trả lời đúng cứ ib mình lấy quà nha!
                  <br />
                  Chúc may mắn
                </p>
              </div>
              <div class="contact">
                <p class="contact-desc">
                  Mọi thắc mắc liên hệ:
                  <br>
                  <a href="tel:0336990472" class="text-color">
                    Số điện thoại tại đây
                  </a>
                </p>
                <p class="contact-desc">
                  Email:
                  <a
                    href="mailto:hoangbit185@gmail.com"
                    class="text-color"
                  >
                    Email tại đây
                  </a>
                </p>
              </div>
            </div>
          `;
}

function addContent() {
    modal.innerHTML = `
                <div class="modal-wrap">
                  <div id="modal-icon" class="modal-icon">
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                  <div class="modal-gif">
                    <img src="./assets/img/giphy.gif" alt="" class="modal-gif-img" />
                  </div>
                  <h1 class="modal-heading">Chúc mừng bạn nha</h1>
                  <p class="modal-desc">Sau ${
                      cnt + 1
                  } lần chơi bạn đã dành chiến thắng.<br> Ib mình nhận quà nhé^^</p>
                  <p class="modal-desc">Bạn rất xinh nên là hãy cười nhiều hơn nhé.</p>
                  <div class="modal-content">
                    <button id="modal-end" class="btn btn-grad">OKI</button>
                  </div>
                </div>
              `;
}

function anserLv1() {
    Swal.fire({
        title: "Tuyệt vời",
        text: "Bạn đã trả lời đúng, cùng đến với thử thách tiếp theo nhé!",
        imageUrl: "./assets/img/giphy.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Cute",
        confirmButtonText: "Tiếp tục nào!",
        confirmButtonColor: "#56C596",
        customClass: {
            title: "pop-up-title",
            image: "pop-up-img",
            htmlContainer: "pop-up-text",
            confirmButton: "pop-up-btn",
        },
        timer: 3000,
        timerProgressBar: true,
    });
}

function wrongAnswer() {
    Swal.fire({
        title: "Chưa chính xác!",
        text: "Hmm, câu trả lời chưa đúng bạn nhé!",
        imageUrl: "./assets/img/wrong.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Wrong",
        confirmButtonText: "Thử lại nào!",
        customClass: {
            title: "pop-up-title",
            image: "pop-up-img",
            htmlContainer: "pop-up-text",
            confirmButton: "pop-up-btn",
        },
        timer: 3000,
        timerProgressBar: true,
    });
}

function anserEnd() {
    Swal.fire({
        title: "Đúng rồi nè!",
        text: "Bình rất xa có nghĩa là gì bạn tự hiểu nha^^",
        imageUrl: "./assets/img/love.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Cute",
        confirmButtonText: "^.^",
        customClass: {
            title: "pop-up-title",
            image: "pop-up-img",
            htmlContainer: "pop-up-text",
            confirmButton: "pop-up-btn",
        },
    }).then((result) => {
        if (result.isConfirmed) {
            //Add
            addContent();
            cnt++;
            document.getElementById("cnt").innerText = cnt.toString();

            showModal();

            const newExit = document.getElementById("modal-icon");
            const newModalEnd = document.getElementById("modal-end");

            if (newExit) {
                newExit.addEventListener("click", () => {
                    hideModal();
                });
            }

            if (newModalEnd) {
                newModalEnd.addEventListener("click", () => {
                    hideModal();

                    window.location = "https://www.facebook.com/biteric1/";
                });
            }
        }
    });
}

function resetLocal() {
    Swal.fire({
        title: "Bạn có muốn bắt đầu lại?",
        text: "Nếu bắt đầu lại sẽ xóa dữ liệu đã lưu",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Có",
        cancelButtonText: "Không",
        reverseButtons: true,
        customClass: {
            confirmButton: "popup-btn sussess",
            cancelButton: "popup-btn cancel",
            popup: "my-custom-font-size",
        },
        timer: 5000,
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("userName");
            hideModal();
            setTimeout(() => {
                showModal();
            }, 2001);
            Swal.fire({
                title: "Đã xóa",
                text: "Bạn vừa xóa dữ liệu đã lưu",
                icon: "success",
                timer: 2000,
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Đã hủy",
                text: "Bạn đã hủy thao tác",
                icon: "success",
                timer: 2000,
            });
            hideModal();
        }
        else {
            hideModal();
        }
    });
}

startBtn.addEventListener("click", () => {
    playNextSong();
    right.classList.add("hidden");

    setTimeout(() => {
        addLevel1();

        answer = document.querySelector("#answer");
        submitAnswer = document.querySelector("#submitAnswer");

        submitAnswer.addEventListener("click", () => {
            if (answer.value.trim().toUpperCase() === textAnswer) {
                anserLv1();
                cnt++;
                document.getElementById("cnt").innerText = cnt.toString();
                setTimeout(() => {
                    updateContent();
                }, 3000);
            } else {
                wrongAnswer();
                cnt++;
                document.getElementById("cnt").innerText = cnt.toString();
            }
        });

        right.classList.remove("hidden");
    }, 500);
});

function updateContent() {
    right.classList.add("hidden");
    setTimeout(() => {
        addLevel2();
        right.classList.remove("hidden");
        const answerNew = document.querySelector("#answer");
        const submitAnswerNew = document.querySelector("#submitAnswer");

        submitAnswerNew.addEventListener("click", () => {
            if (answerNew.value.trim() === textAnswerEnd) {
                anserEnd();
            } else {
                wrongAnswer();
                cnt++;
                document.getElementById("cnt").innerText = cnt.toString();
            }
        });
    }, 500);
}

exit.addEventListener("click", () => {
    hideModal();
});

document.getElementById("modal-start").addEventListener("click", () => {
    let userName = document.getElementById("modal-input-name").value.toString();
    if (userName) {
        inputName.textContent = userName;
        localStorage.setItem("userName", userName);
    }
    hideModal();
});

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("firstVisit")) {
        localStorage.setItem("firstVisit", "true");

        showModal();
    } else if (localStorage.getItem("userName") !== null) {
        inputName.textContent = localStorage.getItem("userName");
        resetLocal();
    } else {
        showModal();
    }
});

document
    .getElementById("sendMessageButton")
    .addEventListener("click", function () {
        window.open("https://m.me/biteric1", "_blank");
    });

const week = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

const time = new Date();

document.getElementById("daily").innerText = `${week[time.getDay()]}`;
document.getElementById("date").innerText = `${time.getDate()} - ${
    time.getMonth() + 1
} - ${time.getFullYear()}`;

function updateTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = minute;
    document.getElementById("second").textContent = second;
}

setInterval(updateTime, 1000);
updateTime();

document
    .getElementById("modal-start")
    .addEventListener("click", async function (event) {
        event.preventDefault();
        const userName = document.getElementById("modal-input-name").value;

        try {
            const response = await fetch("http://localhost:3000/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName }),
            });

            const result = await response.json();
        } catch (error) {
            console.log("Có lỗi xảy ra!");
        }
    });
