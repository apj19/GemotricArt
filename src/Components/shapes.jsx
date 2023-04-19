const drop = (
  <div
    className="
    
rounded-r-[50%]
rounded-b-[50%]
border-l-[25px] border-l-blue-500
border-r-[25px] border-r-blue-500
border-t-[25px] border-t-blue-500
border-b-[25px] border-b-blue-500
 

"
  ></div>
);
const drop1 = (
  <div
    className="


rounded-r-[50%]
rounded-b-[50%]
rotate-90

border-l-[25px] border-l-blue-500
border-r-[25px] border-r-blue-500
border-t-[25px] border-t-blue-500
border-b-[25px] border-b-blue-500
 

"
  ></div>
);
const drop2 = (
  <div
    className="
rounded-r-[50%]
rounded-b-[50%]
rotate-180
border-l-[25px] border-l-blue-500
border-r-[25px] border-r-blue-500
border-t-[25px] border-t-blue-500
border-b-[25px] border-b-blue-500
"
  ></div>
);
const drop3 = (
  <div
    className="
rounded-r-[50%]
rounded-b-[50%]
-rotate-90
border-l-[25px] border-l-blue-500
border-r-[25px] border-r-blue-500
border-t-[25px] border-t-blue-500
border-b-[25px] border-b-blue-500
"
  ></div>
);
const drops = [drop, drop1, drop2, drop3];

const flower = (
  <div
    className="
    w-[50px] h-[50px] 
    rounded-tl-[50%]
    rounded-br-[50%]
     bg-pink-500 
     
    
    "
  ></div>
);
const flower1 = (
  <div
    className="
    w-[50px] h-[50px] 
    rounded-tl-[50%]
    rounded-br-[50%]
     bg-pink-500 
     rotate-90
    
    "
  ></div>
);
const flowers = [flower, flower1, flower, flower1];

const lemon = (
  <div
    className="
    w-[50px] h-[50px] 
    rounded-tl-[100%]
    rounded-br-[100%]

    
     bg-lime-500
     
    
    "
  ></div>
);
const lemon1 = (
  <div
    className="
    w-[50px] h-[50px] 
    rounded-tl-[100%]
    rounded-br-[100%]
    rotate-90
    
     bg-lime-400
     
    
    "
  ></div>
);
const lemons = [lemon, lemon1, lemon, lemon1];

const triangle1 = (
  <div
    className="w-0 h-0 border-l-[50px] border-l-orange-600
    border-b-[50px] border-b-transparent
    "
  ></div>
);
const triangle2 = (
  <div
    className="w-0 h-0 border-r-[50px] border-r-orange-400
    border-b-[50px] border-b-transparent
    
    "
  ></div>
);
const triangle3 = (
  <div
    className="w-0 h-0 border-b-[50px] border-b-orange-500
    border-r-[50px] border-r-transparent
    "
  ></div>
);
const triangle4 = (
  <div
    className="w-0 h-0 border-b-[50px] border-b-orange-300
    border-l-[50px] border-l-transparent
    "
  ></div>
);
const traiangles = [triangle1, triangle2, triangle3, triangle4];

const circle1 = (
  <div
    className="w-[50px] h-[50px] rounded-tl-[50px] bg-emerald-500
    "
  ></div>
);
const circle2 = (
  <div
    className="w-[50px] h-[50px] rounded-tr-[50px] bg-emerald-400
    "
  ></div>
);
const circle3 = (
  <div
    className="w-[50px] h-[50px] rounded-bl-[50px] bg-emerald-300
    "
  ></div>
);
const circle4 = (
  <div
    className="w-[50px] h-[50px] rounded-br-[50px] bg-emerald-200
    "
  ></div>
);
const circles = [circle1, circle2, circle3, circle4];
const halfcircle = (
  <div
    className=" w-[50px] h-[50px] border-l-[25px] rounded-[50px] 
    border-fuchsia-500"
  ></div>
);
const halfcircle1 = (
  <div
    className=" w-[50px] h-[50px] border-l-[25px] rounded-[50px] 
    rotate-90
    border-fuchsia-400"
  ></div>
);
const halfcircle2 = (
  <div
    className=" w-[50px] h-[50px] border-l-[25px] rounded-[50px] 
    rotate-180
    border-fuchsia-300"
  ></div>
);
const halfcircle3 = (
  <div
    className=" w-[50px] h-[50px] border-l-[25px] rounded-[50px] 
    -rotate-90
    border-fuchsia-600"
  ></div>
);
const circle = (
  <div
    className="w-[50px] h-[50px] rounded-[25px] bg-green-500
  "
  ></div>
);
const square = (
  <div
    className="
    w-[35px] h-[35px] 
     bg-[#FA7070] 
    rounded-sm rotate-45
    relative left-[8px] top-[8px]
    "
  ></div>
);
const solidsquare = (
  <div
    className="
    w-[25px] h-[25px]
    border-l-[25px] border-l-[#f8b334]
    border-r-[25px] border-r-[#cb2025]
    border-t-[25px] border-t-transparent
    border-b-[25px] border-b-transparent
     
    
    "
  ></div>
);
const center4 = [drops, flowers, lemons];
const corner4 = [traiangles, circles];

const edge8 = [
  halfcircle,
  halfcircle1,
  halfcircle2,
  halfcircle3,
  circle,
  square,
  solidsquare,
];

const random = [
  halfcircle,
  halfcircle1,
  halfcircle2,
  halfcircle3,
  circle,
  square,
  solidsquare,
  drop,
  drop1,
  drop2,
  drop3,
  flower,
  flower1,
  flower,
  flower1,
  lemon,
  lemon1,
  triangle1,
  triangle2,
  triangle3,
  triangle4,
  circle1,
  circle2,
  circle3,
  circle4,
];
export { center4, corner4, edge8, random };
