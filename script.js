//สร้างตัวแปร แกน x และ แกน y ของสิ่งที่ต้องควบคุม x = left or right ส่วน y = top or bottom
//ขยับตัวplayer เลยสร้าง x , y ของ player
let x = 230;
let y = 30;

//สร้างตัวแปร player เพื่อดึง player มา
let player = document.getElementById("player");

//สร้างฟังก์ชันอัปเดตข้อมูล
function Update() {
  //เข้าถึงplayerแล้วก็เข้าถึงstyleแล้วเปลี่ยน left , bottom
  player.style.left = x + "px";
  player.style.bottom = y + "px";
}

//กดคีบอดร์จะเข้าฟังก์ชัน ทันที เช่น กด a ค่าของ e.key = "a"
document.addEventListener("keydown", function (e) {
  //กำหนดการเคลื่อนที่
  //เคลื่อนที่ไปทางขาว
  if (e.key === "a") {
    x -= 10;
  }

  //เคลื่อนที่ไปทางซ้าย
  if (e.key === "d") {
    x += 10;
  }

  //เคลื่อนที่ไปข้างบน
  if (e.key === "w") {
    y += 10;
  }

  //เคลื่อนที่ไปข้างล่าง
  if (e.key === "s") {
    y -= 10;
  }
  //เสร็จแล้วอัปเดตค่า
  Update();
});

