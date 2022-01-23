var canvas = document.getElementById('signature-pad');

function resizeCanvas()
{
var ratio = Math.max(window.devicePixelRatio || 1, 1);

canvas.width = canvas.offsetWidth * ratio;
canvas.width = canvas.offsetHeight * ratio;
canvas getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas; resizeCanvas();

var signaturePad = new SignaturePad(canvas,

{
backgroundColor: 'rgb(255, 255, 255)'
});

document.getElementById('save-png').addEventListener
('click'), function ()
{
   if (signaturePad.isEmpty())
{

   return alert
("Would you like to create something?");
}

var data = signaturePad.toDataURL('image/png');

console.log(data);
window.open(data);});

document.getElementById('save-png').addEventListener
('click'), function ()
{
   if (signaturePad.isEmpty())
{

   return alert
("Would you like to create something?");
}

var data = signaturePad.toDataURL('image/jpeg');

console.log(data);
window.open(data);});

document.getElementById('save-png').addEventListener
('click'), function ()
{
   if (signaturePad.isEmpty())
{

   return alert
("Would you like to create something?");
}

var data = signaturePad.toDataURL('image/svg+xml');

console.log(data);
console.log(atob(data.split(',')[1]));
window.open(data);});


document.getElementById('clear').addEventListener('click', function ()
{
signaturePad.clear();
});

document.getElementById('draw').addEventListener('click', function ()

{
var ctx = canvas.getContext ('2d');

console.log(ctx.globalCompositeOperation);
ctx.globalCompositeOperation = 'source-over';
});

document.getElementById('erase').addEventListener('click', function ()

{
var ctx = canvas.getContext ('2d');
ctx.globalCompositeOperation = 'destination-out';
});


