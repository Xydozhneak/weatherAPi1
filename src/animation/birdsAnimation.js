
export function addBirds(id) {
  return VANTA.BIRDS({
    el: id,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x85acd9,
    color1: 0xffe100,
    color2: 0x81b9ca,
    colorMode: "variance",
    birdSize: 2.00,
    speedLimit: 2.00,
    quantity: 3.00
  });
}