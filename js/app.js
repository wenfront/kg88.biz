function url() {
  location.href = "https://www.hay88.one/?inviteCode=0925713";
}

let handleShow = function () {
  let Menu = document.getElementById("menu");
  Menu.style.left = "0%";
};
let handleHide = function () {
  let Menu = document.getElementById("menu");
  Menu.style.left = "-100%";
};

// slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector("#head").innerHTML = `
<header>
      <!-- bg-header -->
      <div class="bg-zinc-800">
        <!-- menu link logo-->
        <div
          class="max-w-[1080px] m-auto flex justify-between items-center text-white p-2"
        >
          <!-- icon-menu -->
          <ion-icon
            name="menu-outline"
            class="md:hidden text-[28px] cursor-pointer"
            onclick="handleShow()"
          ></ion-icon>
          <!-- logo -->
          <div class="flex md:justify-start justify-center w-[200px]">
            <a href="../index.html"><img src="../src/logo.png" alt="" class="w-full" /></a>
          </div>
          <!-- link -->
          <ul class="md:flex flex-wrap gap-4 hidden px-4">
            <li>
              <a href="../index.html" class="text-[15px] font-semibold hover:text-[#ee2]"
                >TRANG CHỦ</a
              >
            </li>
            <li>
              <a href="../components/cas.html" class="text-[15px] font-semibold hover:text-[#ee2]"
                >CASINO</a
              >
            </li>
            <li>
              <a href="../components/no.html" class="text-[15px] font-semibold hover:text-[#ee2]"
                >NỔ HŨ</a
              >
            </li>
            <li>
              <a href="../components/the.html" class="text-[15px] font-semibold hover:text-[#ee2]"
                >THỂ THAO</a
              >
            </li>
            <li>
              <a href="../components/xo.html" class="text-[15px] font-semibold hover:text-[#ee2]"
                >XỔ SỐ</a
              >
            </li>
            <li>
              <a href="../components/hu.html" class="text-[15px] font-semibold hover:text-[#ee2]"
                >HƯỚNG DẪN</a
              >
            </li>
          </ul>
          <!-- btn-link -->
          <div class="flex gap-4">
            <button
              onclick="url()"
              class="md:inline-block bg-red-600 text-[14px] text-center font-semibold items-center rounded-xl py-1 w-[130px] hover:bg-red-900 hidden"
            >
              ĐĂNG NHẬP
            </button>
            <button
              onclick="url()"
              class="md:inline-block bg-red-600 text-[14px] text-center font-semibold rounded-xl py-1 w-[100px] hover:bg-red-900 hidden"
            >
              ĐĂNG KÝ
            </button>
          </div>
        </div>
        <!-- link-bottom -->
        <div class="flex w-[250px] fixed top-0 z-50">
          <div
            class="menu transition-all duration-300 left-[-100%] w-[230px] h-screen fixed md:hidden space-y-4 text-black font-medium uppercase bg-zinc-300 py-4"
            id="menu"
          >
            <div class="absolute right-2 top-2">
              <ion-icon
                onclick="handleHide()"
                name="close-outline"
                class="cursor-pointer text-[30px] text-black font-bold"
              ></ion-icon>
            </div>
            <div class="relative pt-6 px-4">
              <input
                placeholder="Search..."
                class="input border-gray-300 px-5 py-2 rounded-xl w-full transition-all outline-none"
              />
              <svg
                class="size-5 absolute top-8 right-6 text-gray-500"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <ul class="md:hidden flex flex-col py-4">
              <li class="hover:bg-gray-200 p-4">
                <a href="../index.html" class="text-[15px] font-semibold">TRANG CHỦ</a>
              </li>
              <li class="hover:bg-gray-200 p-4 border-t border-gray-50">
                <a href="../components/cas.html" class="text-[15px] font-semibold">CASINO</a>
              </li>
              <li class="hover:bg-gray-200 p-4 border-t border-gray-50">
                <a href="../components/no.html" class="text-[15px] font-semibold"> NỔ HŨ</a>
              </li>
              <li class="hover:bg-gray-200 p-4 border-t border-gray-50">
                <a href="../components/the.html" class="text-[15px] font-semibold">THỂ THAO</a>
              </li>
              <li class="hover:bg-gray-200 p-4 border-t border-gray-50">
                <a href="../components/xo.html" class="text-[15px] font-semibold">XỔ SỐ</a>
              </li>
              <li class="hover:bg-gray-200 p-4 border-t border-gray-50">
                <a href="../components/hu.html" class="text-[15px] font-semibold">HƯỚNG DẪN</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- btn-bottom -->
      <div>
        <!-- btn-link -->
        <div class="md:hidden flex justify-center gap-4 py-2 bg-zinc-700">
          <button
            onclick="url()"
            class="inline-block bg-red-600 text-[14px] text-center text-white font-semibold items-center rounded-xl py-1 w-[130px] hover:bg-red-900"
          >
            ĐĂNG NHẬP
          </button>
          <button
            onclick="url()"
            class="inline-block bg-red-600 text-[14px] text-center text-white font-semibold rounded-xl py-1 w-[100px] hover:bg-red-900"
          >
            ĐĂNG KÝ
          </button>
        </div>
      </div>
</header>
`;

// footer
document.querySelector("#footer").innerHTML = `
<footer>
      <div class="bg-indigo-950">
        <div class="max-w-[1080px] m-auto text-white pt-8 pb-16 px-4">
          <div class="grid md:grid-cols-3 gap-4">
            <article>
              <div class="flex justify-center pb-4">
                <img src="../src/logo.png" alt="" class="w-[150px]" />
              </div>
              <div>
                <p class="p">
                  Kg88 - Nhà cái uy tín nhất Châu Á hiện nay. Với đội ngũ nhân
                  viên hùng hâu, nhà cái luôn cung cấp đến người chơi nhiều sản
                  phẩm game phong phú với chất lượng hàng đầu. Đặt biệt, Nổ hũ
                  KG88 chính là sảnh game đã tạo nên thương hiệu cho nhà cái
                </p>
              </div>
            </article>
            <article>
              <div class="py-3 text-[22px] font-medium">CHUYÊN MỤC</div>
              <ul class="list-disc space-y-4 pl-5 pt-4">
                <li><a href="../index.html" class="text-red-700">Thể thao</a></li>
                <li><a href="../components/cas.html" class="text-red-700">Casino</a></li>
                <li><a href="../components/no.html" class="text-red-700">Nổ hũ</a></li>
                <li><a href="../components/the.html" class="text-red-700">THỂ THAO</a></li>
                <li><a href="../components/xo.html" class="text-red-700">Xổ số</a></li>
                <li><a href="../components/hu.html" class="text-red-700">Hướng dẫn</a></li>
              </ul>
            </article>
            <article>
              <div class="py-3 text-[22px] font-medium">CHUYÊN MỤC</div>
              <ul class="list-disc space-y-4 pl-5 pt-4">
                <li>
                  Website:
                  <span class="text-red-700">https://kg88.biz/</span>
                </li>
                <li>
                  Địa chỉ: C36 Nguyễn Thị Búp, Khu Phố 4, Quận 12, Thành phố Hồ
                  Chí Minh, Việt Nam
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div class="bg-gray-950">
        <div class="max-w-[1080px] m-auto text-gray-500 px-4">
          <div class="flex flex-wrap justify-center gap-4 pt-8 pb-6">
            <a href="../components/hu6.html" class="flex md:text-[14px] text-[12px] hover:text-white"
              >ĐẠI LÝ</a
            >
            <a href="../components/li.html" class="flex md:text-[14px] text-[12px] hover:text-white"
              >LIÊN HỆ</a
            >
            <a href="../components/die.html" class="flex md:text-[14px] text-[12px] hover:text-white"
              >ĐIỀU KHOẢN ĐIỀU KIỆN</a
            >
            <a href="../components/qu.html" class="flex md:text-[14px] text-[12px] hover:text-white"
              >QUYỀN RIÊNG TƯ</a
            >
            <a href="../components/chinh.html" class="flex md:text-[14px] text-[12px] hover:text-white"
              >CHÍNH SÁCH BẢO MẬT</a
            >
          </div>
          <p class="md:text-[14px] text-[12px] text-center pb-4">Copyright 2024 © KG88</p>
        </div>
      </div>
</footer>
`;

// rigth
document.querySelector("#rigth").innerHTML = `
<div class=" w-[100%] md:border-l border-gray-600 md:pl-4">
            <h3 class="h3">BÀI VIẾT MỚI</h3>
            <div class="flex flex-col pt-8">
              <article class="flex gap-2 border-b border-gray-300 pb-2">
                <div class="md:w-[150px] w-[70px]">
                  <img src="../src/r1.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth1.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                  >Hướng Dẫn Cách Nuôi Dàn Đề 64 Số Dành Cho Tân Binh Mới</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div class="md:w-[150px] w-[70px]">
                  <img src="../src/r2.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth2.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                >
                  Bật Mí Mẹo Chơi Bát Châu Báu Chắc Thắng Rinh Thưởng Khủng</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div class="md:w-[150px] w-[70px]">
                  <img src="../src/r3.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth3.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                >
                  Hé Lộ Mẹo Chơi Xúc Xắc Màu May Mắn Hiệu Quả Nhất 2024</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div
                  class="md:w-[150px] w-[70px] hover:text-gray-900 text-[15px]"
                >
                  <img src="../src/r4.png" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth4.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                >
                  Tổng hợp mẹo chơi Baccarat hiệu quả rinh thưởng khủng 2024</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div
                  class="md:w-[150px] w-[70px] hover:text-gray-900 text-[15px]"
                >
                  <img src="../src/r5.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth5.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                >
                  Mẹo Chơi Siêu Bò Tót B – Game Nổ Hũ Đình Đám 2024</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div
                  class="md:w-[150px] w-[70px] hover:text-gray-900 text-[15px]"
                >
                  <img src="../src/r6.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth6.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                >
                  Kèo Châu Á Là Gì? Kinh Nghiệm Vào Kèo Cho Mọi Người
                </a>
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div
                  class="md:w-[150px] w-[70px] hover:text-gray-900 text-[15px]"
                >
                  <img src="../src/r7.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth7.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                >
                  Mẹo Chơi Cá Cược Thể Thao Lụm Tiền Thưởng Khủng</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div
                  class="md:w-[150px] w-[70px] hover:text-gray-900 text-[15px]"
                >
                  <img src="../src/r8.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth8.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                  >Hướng Dẫn Cách Chơi Bạch Thủ Lô Hốt Bạc Cho Game Thủ</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div class="md:w-[150px] w-[70px]">
                  <img src="../src/r9.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth9.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                >
                  Bạch Thủ Lô Là Gì? Kinh Nghiệm Đánh Chuẩn Xác Nhất</a
                >
              </article>
              <article class="flex gap-2 border-b border-gray-300 py-2">
                <div class="md:w-[150px] w-[70px]">
                  <img src="../src/r10.jfif" alt="" class="w-full" />
                </div>
                <a
                  href="../components/rigth10.html"
                  class="text-red-700 hover:text-gray-900 text-[15px]"
                  >Hướng Dẫn Cách Lên Dàn Đề 64 Số Hiệu Quả Thắng Lớn</a
                >
              </article>
            </div>
          </div>
`;
