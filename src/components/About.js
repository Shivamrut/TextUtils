import React, { useState } from "react";
let darkStyle = {
    color: "white",
    backgroundColor: "black",
  };
  let lightStyle = {};


export default function About() {
    const [myStyle, setMystyle] = useState(lightStyle)
  
  const handleTheme = ()=>{
    setMystyle(myStyle===lightStyle? darkStyle: lightStyle)
  }

  return (
    < div style={myStyle} className="container p-3">
      <h1 className="my-3">About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tenetur illo enim esse veniam. Voluptatem nisi voluptates commodi doloremque minus ipsum possimus eum repudiandae, vitae, veniam unde cupiditate obcaecati, praesentium facilis eaque placeat a quisquam voluptatum qui earum esse nemo fugit. Totam minima at qui ut, ipsam saepe eaque magnam nobis iure perferendis fugiat, consectetur, molestiae eum quasi ipsum assumenda animi unde quaerat! Alias quaerat odio consectetur, eius, enim error illo aut impedit aliquid fugit tempore. Eveniet numquam odit aperiam eaque. Distinctio illo rem, est asperiores harum non maiores maxime voluptas, aliquam, numquam cupiditate quo. Labore sed dicta, modi nesciunt quibusdam qui amet ratione repudiandae harum vel sunt repellendus quaerat tenetur animi eaque rem ab. Architecto odio cum ipsum qui amet repellat quis. Libero, reiciendis illum? Qui officiis nulla ipsum dolorum exercitationem consequuntur voluptatibus libero modi sit obcaecati at doloribus voluptate, reiciendis recusandae aut non mollitia odit dolor, sapiente quos excepturi, fugit illum. Magnam alias consectetur laborum iusto minima dignissimos, ipsam voluptatibus repudiandae nemo quo! Inventore quis natus aliquam, pariatur quia provident! Dolor sunt delectus ab, inventore a adipisci at vel dicta sint, error quas provident repudiandae laboriosam unde expedita. Ullam in vel commodi omnis, exercitationem est. Eaque maxime natus soluta inventore numquam et perferendis minima corporis, at, ipsa cumque eveniet commodi repudiandae facilis libero laboriosam similique alias ad modi temporibus tenetur sed veritatis optio aliquid! Sit, quis dicta rem ratione, natus delectus non nemo minus doloribus dolorem ad dolor? Repudiandae sequi cupiditate sed ea perferendis dolores quos suscipit minima temporibus qui incidunt alias eveniet, autem adipisci, facere distinctio deleniti a placeat maiores iste labore. Veniam reiciendis sapiente dolore optio ea quam, possimus rem eaque, temporibus, debitis tenetur voluptas. Ipsam facere est deserunt autem ex quibusdam quas harum, fuga consectetur id praesentium corrupti illum officia repudiandae, doloremque molestias aperiam dignissimos.</p>        
        
        <div className="container d-flex justify-content-center">
          <button className="btn btn-success my-3" onClick={handleTheme}>{myStyle===lightStyle? "Dark Mode": "Light Mode"}</button>
        </div>
      
    </div>
  );
}
